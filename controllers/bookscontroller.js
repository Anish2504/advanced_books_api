const models = require('../models')

const booksController = {
    async index(req, res, next) {
        const booksIndex = await models.Book.findAll()
        res.json({books: booksIndex})
    },
    
    async show(req, res, next) {
        const {id} = req.params
        const book = await models.Book.findByPk(id)
        res.json({book: book})
    }
}

// const index = async (req, res, next) => {
//     const booksIndex = await models.Book.findAll()
//     res.json({books: booksIndex})
// };

module.exports = booksController