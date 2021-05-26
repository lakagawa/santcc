const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Usuario = require('../models/usuario')
const authConfig = require('../../config/auth')

const router = express.Router();

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, { expiresIn: 86400 } )
}

router.post('/register', async (req, res) => {
  const {
    email
  } = req.body;

  try {
    if (await Usuario.findOne({
        email
      }))
      return res.status(400).send({
        error: 'Usuario ja existe'
      })

    const user = await Usuario.create(req.body);

    user.password = undefined;

    return res.send({
      user, token : generateToken({ id: user.id })
    })
  } catch (err) {
    return res.status(400).send({
      error: 'Cadastro Falhou'
    })
  }
})


router.post('/authenticate', async (req, res) => {
  const {
    email,
    password
  } = req.body;

  try {
    const user = await Usuario.findOne({
      email
    }).select('+password')

    if (!user)
      return res.status(400).send({
        error: 'Usuario nao encontrado'
      })

    if (!await bcrypt.compare(password, user.password))
      return res.status(400).send({
        error: 'Senha Invalida'
      })

    user.password = undefined;

    res.send({
      user, token : generateToken({ id: user.id })
    })

  } catch (err) {
    return res.status(400).send({
      error: 'Login Falhou ' + err
    })
  }
})



module.exports = app => app.use('/auth', router)