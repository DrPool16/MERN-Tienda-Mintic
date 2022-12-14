const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoviosSchema = new Schema({
    id_novio:{type: String, required: true, max:60},
    nombre:{type: String, required: true, max:60},
    estatura:{type: String, required: true, max:300},
    complexion:{type: String, required: true, max:40},
    edad:{type: String, required: true, max:50},
    contacto:{type: String, required: true, max:70},
    etnia:{type: String, required: false, max:150},
    nacionalidad:{type: String, required: false, max:150}
});
module.exports = mongoose.model("novios", NoviosSchema);
