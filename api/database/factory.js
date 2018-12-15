'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
 const Factory = use('Factory')

 Factory.blueprint('App/Models/Dino', async (faker, i, data) => {
     return {
         name: data.name,
         height: data.height,
         weight: data.weight,
         era: data.era,
         diet: data.diet
     }
 })


// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })
