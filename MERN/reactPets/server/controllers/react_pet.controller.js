
const Pet = require("../models/react_pet.model");

module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets => {
            res.json({ results: allPets })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.findOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(singlePet => {
            res.json({ results: singlePet })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.createNewPet = (req, res) => {
    console.log("REQ.BODY--->", req.body)
    Pet.create(req.body)
        .then(newlyCreatedPet => {
            res.json({ results: newlyCreatedPet })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.updatePet= (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.id }, 
        req.body, 
        { new: true, runValidators: true }
    )
        .then(updatedPet => {
            res.json({ results: updatedPet })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.deletedPet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(deletedPet => {
            res.json({ results: deletedPet })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}