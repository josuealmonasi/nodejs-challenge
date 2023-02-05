const path = require('path')
const express = require('express')
const rootDir = require('../util/path')
const router = express.Router()

const products = []

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ name: req.body.name })
  console.log(req.body)
  res.redirect('/')
})

exports.routes = router
exports.products = products
