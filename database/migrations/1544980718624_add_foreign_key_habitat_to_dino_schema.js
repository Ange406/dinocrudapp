'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddForeignKeyHabitatToDinoSchema extends Schema {
  up () {
    this.table('dinos', (table) => {
      // alter table
      table.integer('habitat_id')//.unsigned().references('id').inTable('habitat')
    })
  }

  down () {
    this.table('dinos', (table) => {
      // reverse alternations
      table.dropColumn('habitat_id')
    })
  }
}

module.exports = AddForeignKeyHabitatToDinoSchema
