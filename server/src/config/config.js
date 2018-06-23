const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'vrochat',
    user: process.env.DB_USER || 'vrochat',
    password: process.env.DB_PASS || 'vrochat',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './vrochat.sqlite',
      operatorsAliases: Op
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
