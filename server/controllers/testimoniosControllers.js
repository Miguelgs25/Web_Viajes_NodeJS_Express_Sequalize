//Conectamos con el modelo de la base de datos
const Testimonio=require("../models/Testimonios");


exports.infoTestimonios=(req,res)=>{
    Testimonio.findAll()
    .then(testimonios=>{
        res.render("testimonios",{
            testimonios,
            pagina: "Testimonios"
        })
    })
    .catch(error=>console.log(error));
    /*
    res.render("testimonios", {//render puede tomar como segundo parámetro un objeto que define variables
                            //para luego poder usadas en las views
        pagina: "Testimonios"
    })*/
}

exports.agregarTestimonio=(req,res)=>{
    const {nombre,correo,comentario}=req.body;
   
    //validar que los campos no estén vacios
    const errores=[];
    if(!nombre)
        errores.push({mensaje:"Agrega tú nombre."});
    if(!correo)
        errores.push({mensaje:"Agrega tú correo."});
    if(!comentario)
        errores.push({mensaje:"Agrega un comentario."});

    //revisar por errores
    if(errores.length>0){
        //Hay errores
        //Muestra la vista con errores
        res.render("testimonios",{
            errores,
            nombre,
            correo,
            comentario
        });

    }else{
        //Sin errores
        //almacenar en la base de datos
        Testimonio.create({
            nombre,
            correo,
            comentario
        })
        .then(testimonio=>res.redirect("/testimonios"))
        .catch(error=>console.log(error));

    }
}