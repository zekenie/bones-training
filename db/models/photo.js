'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
const Photo = db.define('photos', {
  url: Sequelize.STRING
}, {
  
  instanceMethods: {
      
  }
})

module.exports = Photo