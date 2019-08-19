//Conectamos con el modelo de la base de datos
const Viaje=require("../models/Viajes");
//Conectamos con el modelo de la base de datos
const Testimonio=require("../models/Testimonios");


exports.infoHome=async (req,res)=>{
    const viajes = await Viaje.findAll({
            limit:3
    });
    
    const testimonios= await Testimonio.findAll({
            limit:3
    });

    res.render("index",{
        clase: "home",
        viajes,
        testimonios
    });
    /*
    Viaje.findAll({
        limit:3
    })
    .then(viajes=>
        res.render("index",{
            clase: "home",
            viajes: viajes
        }))
    .catch(error=> console.log(error))
    */
}