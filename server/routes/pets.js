import express from "express";
import petsController from "../controllers/petsController";

const router = express.Router();
// const controller = new petsController();

router.post('/', petsController.addPet);
router.get('/', petsController.getPets);
router.get('/:id', petsController.getPetById);
router.put('/', petsController.updatePetByID);
router.delete('/', petsController.deletePetByID);

module.exports = router;