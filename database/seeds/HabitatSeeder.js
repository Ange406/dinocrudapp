'use strict'

/*
|--------------------------------------------------------------------------
| HabitatSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')


class HabitatSeeder {

  async run() {
    const habitatArray = [{ type: "land" }, { type: "sea" }, { type: "air" }]
    for (var i = 0; i < habitatArray.length; i++) {
      await Factory.model('App/Models/Habitat').create({type: habitatArray[i].type})
    }
  }
}

module.exports = HabitatSeeder
