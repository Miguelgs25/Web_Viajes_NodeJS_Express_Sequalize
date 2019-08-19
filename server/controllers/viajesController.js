//Conectamos con el modelo de la base de datos
const Viaje=require("../models/Viajes");

exports.infoViajes=async (req,res)=>{
    const viajes= await Viaje.findAll();
    res.render("viajes", {
        pagina: "Proximos Viajes",
        viajes: viajes
    });
}

exports.detallesViajes=async (req,res)=>{
    const viaje= await Viaje.findByPk(req.params.id);
    res.render("viaje", {
        viaje: viaje
    });
}