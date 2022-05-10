
const mongoose = require('mongoose');

const reactPetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet name is required!"],
        minlength: [3, "Pet name must be at least 3 characters long"]
    },
    type: {
        type: String,
        required: [true, "Pet type is required!"],
        minlength: [3, "Pet type must be at least 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "A description is required!"],
        minlength: [3, "Description must be at least 3 characters long"]
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    },
},
    { timestamps: true }
);


const Pet = mongoose.model('Pet', reactPetSchema);
module.exports = Pet;