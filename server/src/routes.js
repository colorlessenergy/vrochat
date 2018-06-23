const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const ChatsController = require('./controllers/ChatsController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)

  app.get('/chats', 
    ChatsController.index)
    
  app.post('/chats',
    ChatsController.post)
}
