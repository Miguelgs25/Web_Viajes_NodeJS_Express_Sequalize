//Conectamos con el modelo de la base de datos
const Viaje=require("../models/Viajes");
//Conectamos con el modelo de la base de datos
const Testimonio=require("../models/Testimonios");


exports.infoHome=(req,res)=>{
    //Crear varias llamadas a la bd con una lista de promises
    const promises=[];
    promises.push(
        Viaje.findAll({
            limit:3
        })
    );
    promises.push(
        Testimonio.findAll({
            limit:3
        })
    );

    const resultado=Promise.all(promises);
    resultado.then(resultado=>{
        res.render("index",{
            clase: "home",
            viajes: resultado[0],
            testimonios: resultado[1]
        })
    })
    .catch(error=> console.log(error));
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