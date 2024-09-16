const express=require('express')
const app=express()

//dotenv
require('dotenv').config();

//colores para los mensajes de la consola
const colors=require('colors')

//Motor de plantillas 
app.set('view engine','ejs')

//Servicios estaticos 
app.use(express.static('public'))

//Conexion server
app.listen(4500,()=>{ 
    })

/*--------------------BASE DE DATOS--------------------*/
    
//Llamo a la funcion para conectar la base de datos
 //connectDB()

 //Traigo la conexion de la base de datos al index.js
//const connectDB = require('./config/db');


/*--------------------RUTAS--------------------*/

//Ruta inicial
app.get('/',(req,res)=>{
    res.render('Home')
})

//Ruta Recetas
 app.get('/Recetas',(req,res)=>{
    res.render('Recetas')
})
//Ruta Productos
app.get('/Productos',(req,res)=>{
    res.render('Productos')
})

//Ruta Historia
app.get('/Historia',(req,res)=>{
    res.render('Historia')
})
//Ruta Contacto
app.get('/Contacto',(req,res)=>{
    res.render('Contacto')
})

//Ruta Registro
app.get('/Registro',(req,res) =>{
    res.render('Registro')

})

//Ruta Login 
app.get('/Login',(req,res) =>{
    res.render('Login')
})

//Ruta Blog 
app.get('/Blog',(req,res) =>{
    res.render('Blog')
})

/*----------------------------------------*/ 

/*--------------------SUB PAGINA BLOG--------------------*/

//Ruta BlogI1 
app.get('/BlogI1',(req,res) =>{
    res.render('BlogI1')
})

//Ruta BlogI2 
app.get('/BlogI2',(req,res) =>{
    res.render('BlogI2')
})

//Ruta BlogI3 
app.get('/BlogI3',(req,res) =>{
    res.render('BlogI3')
})

/*----------------------------------------*/ 

/*--------------------SUB PAGINA RECETA--------------------*/

//Sub pagina de receta -> red velvet
app.get('/RecetaVelvet',(req,res)=>{
    res.render('RecetaVelvet')
})

//Sub pagina de receta -> pan
app.get('/RecetaPan',(req,res)=>{
    res.render('RecetaPan')
})

//Sub pagina de receta -> croisant
app.get('/RecetaCroisant',(req,res)=>{
    res.render('RecetaCroisant')
})

//Sub pagina de receta -> brownie
app.get('/RecetaBrownie',(req,res)=>{
    res.render('RecetaBrownie')
})

//Sub pagina de receta -> tiramisu
app.get('/RecetaTiramisu',(req,res)=>{
    res.render('RecetaTiramisu')
})

//Sub pagina de receta -> macarons
app.get('/RecetaMacarons',(req,res)=>{
    res.render('RecetaMacarons')
})
/*----------------------------------------*/ 