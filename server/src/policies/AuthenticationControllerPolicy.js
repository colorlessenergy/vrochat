const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      username: Joi.string(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-z0-9]{8,32}$')
      )
    }

    const {error, value} = Joi.validate(req.body, schema)
    console.log(value)
    if (error) {
      switch (error.details[0].context.key) {
        case 'username':
          res.status(400).send({
            error: 'you must provide a valid username'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided to fail to match the following rules
            <br>
            1. It must contain only the following: lower case, upper case, numerics
            <br>
            2. It must be between the length of 8 and 32
            `
          })
          break
        default:
          res.status(400).send({
            error: 'invalid registration information'
          })
      }
    } else {
      next()
      if (value) {
        console.log('does nothing')
      }
    }
  }
}
