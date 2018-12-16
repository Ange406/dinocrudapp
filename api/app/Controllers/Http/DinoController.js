'use strict'
const Dino = use('App/Models/Dino')

class DinoController {
    async getDino({ request, response }) {
        let dinos = await Dino.all()
        response.send({
            dinos: dinos
        })
    }

    async createDino({ request, response }) {
        const { name, height, weight, diet, era } = request.post()
        const newDino = await Dino.create({ name, height, weight, diet, era })
        let dinos = await Dino.all()
        response.send({
            dinos: dinos

        })

    }

    async deleteDino({ request, response, params: { id } }) {
        var deleteDinoById = await Dino.find(id)
        await deleteDinoById.delete()
        let dinos = await Dino.all()
        response.json({
            Message: "This Dino's gone extinct!",
            dinos: dinos
        })
    }

    async updateDino({ request, response, params: { id } }) {
        var dinoToUpdate = await Dino.find(id)
        const { name, weight, height, era, diet } = request.post()
        dinoToUpdate.name = name
        dinoToUpdate.weight = weight
        dinoToUpdate.height = height
        dinoToUpdate.era = era
        dinoToUpdate.diet = diet

        await dinoToUpdate.save()
        let dinos = await Dino.all()
        response.send({
            dinos: dinos
        })

    }


}

module.exports = DinoController
