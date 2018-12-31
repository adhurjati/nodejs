module.exports = {
    getComments(req, res) {
        res.status(200).send(req.store.posts[req.params.id].comments)
    }, 
    addComment(req, res) {
        req.store.posts[req.params.id].comments.push(req.body)
        res.sendStatus(200)
      
    },
    updateComment(req, res) {
        Object.assign(req.store.posts[req.params.id].comments[req.params.commentId], req.body)
        res.sendStatus(200)
      
    },
    removeComment(req, res) {
        req.store.posts[req.params.id].comments.splice(req.params.commentId, 1)
        res.sendStatus(200)
    }  
  }