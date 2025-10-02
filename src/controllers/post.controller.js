const generateCaption = require('../service/ai.service')
const uploadFile = require("../service/storage.service")
const {v4:uuid4} = require('uuid')
const postModel = require('../models/post.model')

async function createPostController(req,res){
    const file = req.file
    console.log("File Recieved",file)
    const base64ImageFile = new Buffer.from(file.buffer).toString('base64')
    // console.log(base64ImageFile)

    const caption = await generateCaption(base64ImageFile)

    // console.log(caption)
    const result = await uploadFile(file.buffer,`${uuid4()}`)
    const post = await postModel.create({
        caption : caption,
        image : result.url,
        user : req.user._id
    })

    res.status(201).json({
        message : "Post Created",
        post
    })
    
}

module.exports = {
    createPostController
}