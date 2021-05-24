import mongoose from "mongoose";
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

let petsSchema = new Schema({
    name: { type: String, default: null },
    type: { type: String, default: null },
    age: { type: String, default: null },
    color: { type: String, default: null },

}, {
    timestamps: true
});

petsSchema.plugin(AutoIncrement, { inc_field: 'petID' });
const pet = mongoose.model('pet', petsSchema);
module.exports = pet;