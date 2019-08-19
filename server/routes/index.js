//importar express
const express=require("express");

//creamos el gestor de rutas
const router=express.Router();


//importamos controladores
const nosotrosController= require("../controllers/nosotrosController");
const homeController= require("../controllers/homeController");
const viajesController= require("../controllers/viajesController");
const testimoniosController= require("../controllers/testimoniosControllers");

//para exportar usamos module.export
module.exports=function(){
    
    router.get("/",homeController.infoHome);

    router.get("/nosotros",nosotrosController.infoNosotros);

    router.get("/viajes",viajesController.infoViajes);

    router.get("/viajes/:id",viajesController.detallesViajes);

    router.get("/testimonios",testimoniosController.infoTestimonios);

    //enviando el formulario
    router.post("/testimonios",testimoniosController.agregarTestimonio);

    return router;
}