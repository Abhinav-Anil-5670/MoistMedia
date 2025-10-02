const postModel = require('../models/post.model')
const generateCaption = require('../service/ai.service')

async function createPostController(req,res){
    const file = req.file
    console.log("File Recieved",file)
    const base64ImageFile = new Buffer.from(file.buffer).toString('base64')
    // console.log(base64ImageFile)

    const caption = await generateCaption(base64ImageFile)

    console.log(caption)
    res.send({
        caption : caption
    })
}

module.exports = {
    createPostController
}