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
    const dinoArray = [
      { name: 'Parasaurolophus', height: '16ft', weight: '2268 kg', era: 'Late Cretaceous', diet: 'Herbivore', habitat_id: 1 },
      { name: 'Brachiosaurus', height: '31ft', weight: '35000 kg', era: 'Late Jurassic', diet: 'Herbivore', habitat_id: 1 },
      { name: 'Gallimimus', height: '6ft', weight: '440 kg', era: 'Late Cretaceous', diet: 'Insectivorous', habitat_id: 1 },
      { name: 'Dilophosaurus', height: '6ft', weight: '283 kg', era: 'Early Jurassic', diet: 'Scavenger', habitat_id: 1 },
      { name: 'Triceratops', height: '9ft', weight: '10886 kg', era: 'Late Cretaceous', diet: 'Herbivore', habitat_id: 1 },
      { name: 'Tyrannosaurus', height: '12ft', weight: '7257 kg', era: 'Late Cretaceous', diet: 'Carnivore', habitat_id: 1 },
      { name: 'Velociraptor', height: '2ft', weight: '15 kg', era: 'Late Cretaceous', diet: 'Carnivore', habitat_id: 1 },
      { name: 'Plesiosaurus', height: '21ft', weight: '150 kg', era: 'Late Prehistory', diet: 'Carnivore', habitat_id: 2 },
      { name: 'Pteradactyl', height: '6ft', weight: '25 lb', era: 'Coming Soon', diet: 'Carnivore', habitat_id: 3 },
      { name: 'Archaeopteryx', height: '5ft', weight: '20 lb', era: 'Fossilized', diet: 'Carnivore', habitat_id: 3 },
      { name: 'Quetzalcoatlus', height: '22ft', weight: '21 kg', era: 'In Legends', diet: 'Carnivore', habitat_id: 3 },
      { name: 'Mosasaurus', height: '200ft', weight: '2 tons', era: 'Present Day Nessie', diet: 'Carnivore', habitat_id: 2 }
    ]
    for (var i = 0; i < dinoArray.length; i++) {
      await Factory.model('App/Models/Dino').create({ name: dinoArray[i].name, height: dinoArray[i].height, weight: dinoArray[i].weight, era: dinoArray[i].era, diet: dinoArray[i].diet, habitat_id: dinoArray[i].habitat_id })
    }
    
  }
}

module.exports = DinoSeeder
