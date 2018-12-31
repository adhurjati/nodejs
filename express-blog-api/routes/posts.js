

module.exports = {
    getPosts(req,res)  {
        res.status(200).send(req.store.posts)
    }

,
addPosts(req,res){
    if (!req.body.name.trim || !req.body.url.trim  )  return res.sendStatus(400)
    let obj = {
        "name" : req.body.name,
        "url" : req.body.url,
        "text" : req.body.text,
        "comments" : req.body.comments
    }
    console.log(obj)
    req.store.posts.push(obj)
    res.sendStatus(200)

},
updatePost(req,res){
    if (!req.body.name || !req.body.url )  return res.sendStatus(400)
    Object.assign(req.store.posts[req.params.id], req.body)
    res.sendStatus(200)
},
removePost(req,res){
    req.store.posts.splice(req.params.id, 1)
    res.sendStatus(200)
}

}