const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({message: "Tudo certo com o GET Clients"})
})

router.post('/', (req, res) => {
  res.send({message: "Tudo certo com o POST do Clients"})
})

module.exports = router