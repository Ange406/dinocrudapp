'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Dino extends Model {
    habitat(){
        return this.belongsTo('App/Models/Habitat')
    }

}

module.exports = Dino
