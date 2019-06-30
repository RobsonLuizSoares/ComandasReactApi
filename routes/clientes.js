const express = require('express')
const router = express.Router()
const Clients = require('../models/clientes')

router.get('/', (req, res) => {
  res.send({message: "Tudo certo com o GET Clients"})
})

router.get('/list', (req, res) => {
  Clients.find({}, (err, data) => {
    if(err) return res.send({ error: 'Erro na consulta de clientes' })
    return res.send(data)
  })
})

router.post('/novo', (req, res) => {
  const { name, phone, email } = req.body

  if (!name || !phone ) {
    return res.send({ error: 'Dados Insuficientes!' })
  }
  Clients.findOne({phone}, (err, data) => {
    if(err) {
      res.send({error: 'Erro ao buscar usuário'})
    }
    if(data) {
      res.send({ error: 'telefone já registrado'})
    }

    Clients.create(req.body, (err, data) => {
      if(err) {
        res.send({error: 'Erro ao cadastrar Cliente'})
      }

      return res.send(data)
      }).then(() => {
        console.log('Cliente Cadastrado com sucesso')
    })
  })
})

module.exports = router