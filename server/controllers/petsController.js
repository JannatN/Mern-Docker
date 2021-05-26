const Pet = require('../models/pet')

addPet = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a pet',
        })
    }

    const pet = new Pet(body)

    if (!pet) {
        return res.status(400).json({ success: false, error: err })
    }

    pet
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: pet._id,
                message: 'Pet created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Pet not created!',
            })
        })
}

updatePet = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Pet.findOne({ _id: req.params.id }, (err, pet) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Pet not found!',
            })
        }
        pet.type = body.type
        pet.sex = body.sex
        pet.age = body.age
        pet.color = body.color
        pet.price = body.price

        pet
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: pet._id,
                    message: 'Pet updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Pet not updated!',
                })
            })
    })
}

deletePet = async (req, res) => {
    await Pet.findOneAndDelete({ _id: req.params.id }, (err, pet) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!pet) {
            return res
                .status(404)
                .json({ success: false, error: `Pet not found` })
        }

        return res.status(200).json({ success: true, data: pet })
    }).catch(err => console.log(err))
}

getPetById = async (req, res) => {
    await Pet.findOne({ _id: req.params.id }, (err, pet) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: pet })
    }).catch(err => console.log(err))
}

getPets = async (req, res) => {
    await Pet.find({}, (err, pets) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!pets.length) {
            return res
                .status(404)
                .json({ success: false, error: `Pet not found` })
        }
        return res.status(200).json({ success: true, data: pets })
    }).catch(err => console.log(err))
}

module.exports = {
    addPet,
    updatePet,
    deletePet,
    getPets,
    getPetById,
}