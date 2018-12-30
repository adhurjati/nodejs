const express = require('express')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const { check, validationResult } = require('express-validator/check');

var app = express()

app.use(bodyparser.json())
app.use(morgan('dev'))

let profile = [{ username: 'aparna', email: 'aparna@xyz.com', url: 'http://github.com/adhurjati' }]


const customMiddleware = (req, res, next) => {
    console.log('in customMiddleware function. Req Method is ' + req.method)
    if (req.method === 'POST') {
        console.log('validation block')
        if (!req.body.username || !req.body.email) return res.sendStatus(400)
    }
    next()
}

app.use(customMiddleware)

app.use((error, req, res, next) => {
    res.status(500).send(error)
})



app.get("/profile", (req, res) => {
    if (req.query.id) return res.send(profile[req.query.id])
    res.send(profile)
})

app.post("/profile", [
    check('email').isEmail()
], (req, res) => {
    const email = req.body.email
    const errors = validationResult(req)
    console.log('errors are ' + JSON.stringify(errors))
    if (!errors.isEmpty()) {
        console.log('errors not empty')
        return res.sendStatus(400)
    }

    let obj = {
        "username": req.body.username,
        "email": req.body.email,
        "url": req.body.url
    }
    profile.push(obj)
    console.log('created', profile)
    res.sendStatus(201)

})

app.put('/profile/:id', (req, res) => {
    Object.assign(profile[req.params.id], req.body)
    console.log('updated', profile[req.params.id])
    res.sendStatus(204)
})

app.delete('/profile/:id', (req, res) => {
    profile.splice(req.params.id, 1)
    console.log('deleted', profile)
    res.sendStatus(204)
})



app.listen(3000)