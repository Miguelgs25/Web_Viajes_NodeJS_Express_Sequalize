//Conectamos con el modelo de la base de datos
const Viaje=require("../models/Viajes");

exports.infoViajes=(req,res)=>{
    Viaje.findAll()
        .then(viajes=>
            res.render("viajes", {
                pagina: "Proximos Viajes",
                viajes: viajes
            }))
        .catch(error=> console.log(error))
}

exports.detallesViajes=(req,res)=>{
    Viaje.findByPk(req.params.id)
        .then(viaje=>
            res.render("viaje", {
                viaje: viaje
            }))
        .catch(error=> console.log(error))
}