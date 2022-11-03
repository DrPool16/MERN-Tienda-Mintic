const mongose = require("mongoose")
const Schema = mongose.Schema;

const UsuarioSchema = new Schema({
    usuario: {type: String, required:true, max:100},
    pass:    {type: String, required:true,max:128},
});

module.exports = mongose.model("usuarios", UsuarioSchema)