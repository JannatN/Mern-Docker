const express = require('express')

const petsController = require('../controllers/petsController')

const router = express.Router()

router.post('/pet', petsController.addPet)
router.put('/pet/:id', petsController.updatePet)
router.delete('/pet/:id', petsController.deletePet)
router.get('/pet/:id', petsController.getPetById)
router.get('/pets', petsController.getPets)

module.exports = router