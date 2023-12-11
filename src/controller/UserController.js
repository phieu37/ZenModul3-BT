class UserController {
  get = (req, res, next) => {
    try {
      const { page, sort } = req.query
      console.log(page, sort)
      res.status(200).json({ msg: `Get query string user page: ${page} and sort: ${sort}` })
    } catch (error) {
      next(error)
    }
  }
  create = (req, res, next) => {
    try {
      const { username, password } = req.body
      console.log('Create user !!!')
      console.log(req.body)

      if (username != 'phieudev') {
        const error = new Error('User not found')
        error.statusCode = 400
        throw error
      }

      res.status(200).json({
        username, password
      })
    } catch (error) {
      next(error)
    }
  }
  update = (req, res, next) => {
    try {
      const idUser = req.params.id
      console.log('id:' + idUser + ' name:' + req.body.username + ' password:' + req.body.password)
      res.status(200).json(`PUT user: ${idUser} ` + req.body.username + ' ' + req.body.password)
    } catch (error) {
      next(error)
    }
  }
  delete = (req, res, next) => {
    try {
      const idUser = req.params.id
      console.log('id:' + idUser + ' name:' + req.body.username)
      res.status(200).json(`DELETE user: ${idUser} ` + req.body.username)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new UserController()