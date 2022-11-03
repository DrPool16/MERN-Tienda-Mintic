const Juego= require("../models/juegos.model")

let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let juego = new Juego({
        id_juego: req.body.id_juego,
        njuego: req.body.njuego,
        precio: req.body.precio,
        plataforma: req.body.plataforma,
        disponible: req.body.disponible,
        cantidad: req.body.cantidad,
        imagen: req.body.imagen 
    })

    juego.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el juego"
            res.json(response)
            return;	
        }

        response.exito = true,
        response.msg = "El juego se guardó correctamente"
        res.json(response)
    })


}

exports.find = function(req, res){
    Juego.find(function(err, juegos){
        res.json(juegos)

    })
}

exports.findOne = function(req,res){
    Juego.findOne({ _id: req.params.id }, function(err, juego){
        res.json(juego)

    })

}

exports.update = function(req,res){
    let juego = {
        id_juego: req.body.id_juego,
        njuego: req.body.njuego,
        precio: req.body.precio,
        plataforma: req.body.plataforma,
        disponible: req.body.disponible,
        cantidad: req.body.cantidad,
        imagen: req.body.imagen 
    }

    Juego.findByIdAndUpdate(req.params.id, {$set: juego}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar el juego"
            res.jason(response)
            return;
        }

        response.exito = true,
        response.msg = "El juego se modifico correctamente"
        res.json(response)

    })

}

exports.remove = function(req, res){
    Juego.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) {
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el juego"
            response.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El juego eliminado correctamente"
        res.json(response)
    })
}