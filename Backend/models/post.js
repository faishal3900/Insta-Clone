const mongoose = require("mongoose")

const { ObjectId } = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    likes: {
        type: ObjectId,
        ref: user
    },
    comment: [{
        text: String,
        postedby: {
            type: ObjectId,
            ref: user
        }
    }],
    postedby: [{
        type: ObjectId,
        ref: User
    }]

})

module.exports = mongoose.model("post", postSchema)
