import pet from "../models/pets";

class Pet {

}

Pet.prototype.getPets = (req, res) => {
    pet.find({}, (err, pets) => {
        if (err) {
            res.send(err);
        } else {
            console.log("result pets", pets);
            res.send({ 'success': true, 'message': 'pets fetched successfully', pets });
        }
    })
}

Pet.prototype.getPetById = (req, res) => {
    let id = req.params.id;
    pet.findById(id, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}

// Pet.prototype.getCustomerByCustomId = (req, res) => {
//     let id = req.body.id;
//     customerModel.findOne({ customerId: id }, (err, result) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send({ 'success': true, 'message': 'Customer fetched successfully', result });
//         }
//     })
// }

Pet.prototype.addPet = (req, res) => {
    let obj = req.body;
    console.log("obj ", obj);
    let model = new pet(obj);
    console.log("model ", model);
    model.save((err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send({ 'success': true, 'message': 'Pet fetched successfully', result });
        }
    })
}

Pet.prototype.updatePetByID = (req, res) => {
    let id = req.body._id;
    pet.findByIdAndUpdate(id, { name: req.body.name, type: req.body.type, age:req.body.age, color:req.body.color }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}

Pet.prototype.deletePetByID = (req, res) => {
    let id = req.body._id;
    console.log("delete pet ", req.body);
    pet.findByIdAndRemove(id, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}

module.exports = Pet;