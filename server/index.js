//importar express
const express=require("express");
const path=require("path");
const routes=require("./routes");
const configs=require("./config");
const bodyParser=require("body-parser");

//db.authenticate()
//    .then(()=>console.log("DB Conectada"))
//    .catch(error=> console.log(error));


//configurar express
const app=express();

//habilitar template engine pug
app.set("view engine","pug");
//añadir las vistas
app.set("views",path.join(__dirname,"./views"));//__dirname devuelve la carpeta actual,en este caso server

//cargar una carpeta estatica llamada public 
app.use(express.static("public"));

//devuelve si estamos en development o production, le asignamos a config el valor de nuestro objeto
config=configs[app.get("env")];
//agregamos la variable titulo a la app, con el nombre del sitio
app.locals.titulo=config.nombreSitio;

//muestra el año actual y genera la ruta
app.use((req,res,next)=>{
    //crear fecha
    const fecha=new Date();
    res.locals.anioActual=fecha.getFullYear();

    //crear variable de la pagina actual
    res.locals.ruta=req.path;
    return next();
});

//ejecutamos el body parser
app.use(bodyParser.urlencoded({extended: true}));

//cargar las rutas
app.use("/",routes());

app.listen(3000);






