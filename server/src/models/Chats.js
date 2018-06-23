module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define('Chat', {
    username: DataTypes.STRING,
    text: DataTypes.TEXT
  })

  return Chat
}
