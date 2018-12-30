const express = require('express')
const bodyparser = require('body-parser')
const morgan = require('morgan') 

var app = express()

app.use(bodyparser.json())
app.use(morgan('dev'))

let profile = [{ username: 'aparna', email:'aparna@xyz.com', url: 'http://github.com/adhurjati'}]

app.use((req,res,next) => {
 console.log(`${req.method} ${req.url}`)
 if (req.query.api_key){
     next()
 }else{
    next(new Error('Ooops!'))
 }
})

const myMiddleware = (req, res, next) => {
    console.log('in myMiddleware function. Req Method is ' + req.method)
    next()
}

app.use(myMiddleware)

app.use((error, req, res, next) => {
    res.status(500).send(error)
})

app.get('/', (req,res,next)=>{
    console.log('in inline middleware')
    next()
},(req,res) => {
    res.send({msg: 'hello world'})
})

app.get('/accounts', (req,res) => {
    res.send({msg: 'accounts'})
})

app.post('/transactions', (req,res) => {
    console.log(req.body)
    res.send({msg: 'transactions'})
})

app.listen(3000)