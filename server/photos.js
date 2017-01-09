'use strict'

const db = require('APP/db')
const Photo = db.model('photos')


// foobar

module.exports = require('express').Router()
  .get('/', (req, res, next) => 
    Photo.findAll()
    .then(photos => res.json(photos))
    .catch(next))
  .post('/', (req, res, next) =>
    Photo.create(req.body)
    .then(photo => res.status(201).json(photo))
    .catch(next))
  