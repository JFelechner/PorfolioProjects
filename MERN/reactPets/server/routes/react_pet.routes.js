

const reactPetController = require("../controllers/react_pet.controller")
const Pet = require("../models/react_pet.model")


module.exports = (app)=>{
    app.get("/api/pets", reactPetController.findAllPets)
    app.get("/api/pets/:id", reactPetController.findOnePet)
    app.post("/api/pets", reactPetController.createNewPet)
    app.put("/api/:id/pets", reactPetController.updatePet)
    app.delete("/api/pets/:id", reactPetController.deletedPet)    
}