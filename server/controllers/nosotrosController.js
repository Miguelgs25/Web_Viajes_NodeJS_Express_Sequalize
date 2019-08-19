exports.infoNosotros=(req,res)=>{
    res.render("nosotros", {//render puede tomar como segundo parámetro un objeto que define variables
                            //para luego poder usadas en las views
        pagina: "Sobre nosotros"
    })
}