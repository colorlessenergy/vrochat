const {Chat} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const chats = await Chat.findAll({
        limit: 20
      })
      res.send(chats)
    } catch (err) {
      res.status(500).send({
        error: 'error getting all messages'
      })
    }
  },
  async post (req, res) {
    try {
      const chat = await Chat.create(req.body)
      res.send(chat)
    } catch (err) {
      res.status(500).send({
        error: 'error creating message'
      })
    }
  }
}
