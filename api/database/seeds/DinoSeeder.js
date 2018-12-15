'use strict'

/*
|--------------------------------------------------------------------------
| DinoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class DinoSeeder {
  async run() {
    await Factory.model('App/Models/Dino').create({ name: 'Parasaurolophus', height: '16ft', weight: '2268 kg', era: 'Late Cretaceous', diet: 'Herbivore' })
    await Factory.model('App/Models/Dino').create({ name: 'Brachiosaurus', height: '31ft', weight: '35000 kg', era: 'Late Jurassic', diet: 'Herbivore' })
    await Factory.model('App/Models/Dino').create({ name: 'Gallimimus', height: '6ft', weight: '440 kg', era: 'Late Cretaceous', diet: 'Insectivorous' })
    await Factory.model('App/Models/Dino').create({ name: 'Dilophosaurus', height: '6ft', weight: '283 kg', era: 'Early Jurassic', diet: 'Scavenger' })
    await Factory.model('App/Models/Dino').create({ name: 'Triceratops', height: '9ft', weight: '10886 kg', era: 'Late Cretaceous', diet: 'Herbivore' })
    await Factory.model('App/Models/Dino').create({ name: 'Tyrannosaurus', height: '12ft', weight: '7257 kg', era: 'Late Cretaceous', diet: 'Carnivore' })
    await Factory.model('App/Models/Dino').create({ name: 'Velociraptor', height: '2ft', weight: '15 kg', era: 'Late Cretaceous', diet: 'Carnivore' })
  }
}

module.exports = DinoSeeder
