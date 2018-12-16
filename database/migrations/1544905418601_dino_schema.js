'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DinoSchema extends Schema {
  up () {
    this.create('dinos', (table) => {
      table.increments()
      table.string("name")
      table.string("height")
      table.string("weight")
      table.string("era")
      table.string("diet")
      table.timestamps()
    })
  }

  down () {
    this.drop('dinos')
  }
}

module.exports = DinoSchema
