const Note = require('../models/noteModel');
const { create, update } = require('../models/noteModel');

module.exports = {
    async index(request, response) {
        try {
            const data = await Note.find();
            return response.status(200).send(data)
        } catch(e) {
            response.status(500).send({
                message: "Failed to process your request",
                data: e
            })
        }
    },
    
    async create(request, response) {
        try {
            const { title, content } = request.body;

            const note = new Note({
                title,
                content
            });
            await note.save();
            return response.status(200).send({
                message: "Note created"
            })
        } catch(e) {
            response.status(500).send({
                message: "Failed to process your request",
                data: e
            })
        }
    },

    async update(request, response) {
        try {
            await Note.findByIdAndUpdate(request.params.id, {
                $set: {
                    title: request.body.title,
                    content: request.body.body,
                }
            });
            
            return response.status(200).send({
                message: "Note updated",
            })
        } catch(e) {
            response.status(500).send({
                message: "Failed to process your request",
                data: e
            })
        }
    }
};