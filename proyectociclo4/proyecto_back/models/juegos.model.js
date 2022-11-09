const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JuegosSchema = new Schema({
    id_juego:{type: String, required: true, max:60},
    njuego:{type: String, required: true, max:60},
    precio:{type: String, required: true, max:500000},
    plataforma:{type: String, required: true, max:40},
    disponible:{type: String, required: true, max:5},
    cantidad:{type: String, required: true, max:1000},
    imagen:{type: String, required: true, max:150}
});
module.exports = mongoose.model("juegos", JuegosSchema);