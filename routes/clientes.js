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
  const { name } = req.body

  if (!name  ) {
    return res.send({ error: 'Dados Insuficientes para criar Cliente!' })
  }
  User.findOne({nome}, (err, data) => {
    if(err) {
      res.send({error: 'Erro ao buscar cliente'})
    }
    if(data) {
      res.send({ error: 'Cliente já registrado'})
    }

    Clients.create(req.body, (err, data) => {
      if(err) {
        res.send({error: 'Erro ao criar Cliente'})
      }
      
      const client = new Clients (req.body)
        client.save()

      return res.send(data)
    })
  })

  
})

module.exports = router