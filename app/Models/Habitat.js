'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Habitat extends Model {
    dino() {
        return this.hasMany('App/Models/Dino')
    }
}

module.exports = Habitat
