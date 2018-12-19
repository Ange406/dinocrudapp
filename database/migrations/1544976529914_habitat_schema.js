'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HabitatSchema extends Schema {
  up () {
    this.create('habitats', (table) => {
      table.increments()
      table.string("type")
      table.timestamps()
      // this part goes to the next migration
      // table.integer('habitat_id').unsigned().references('id').inTable('habitat')
    })
  }

  down () {
    this.drop('habitats')
  }
}

module.exports = HabitatSchema
