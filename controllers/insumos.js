const  {response} =require('express');


Insumos = require('../models/insumos')

const getInsumos = async(req, res) =>{


    const insumos = await Insumos.find();//obteniendo los datos de la coleccion
     res.json({
        msg: insumos
     })

}
const postInsumos = async(req, res) => {
    const datos= req.query //capturar datos de la url de postman
    let mensaje='Insercion exitosa'
    try{
        const insumos = new Insumos(datos)//instaciar el objeto
        await insumos.save()//guardar la base de datos
        console.log(insumos)

    }catch(error){

        mensaje=error
        console.log(error)

    }
  
    res.json({
        msg: mensaje
    })
}


const putInsumos = async(req, res) =>{
    const {id,nombreInsumo,medidaInsumo,cantidad,valorInsumo,categoriaInsumo,stockMaximo,stockMinimo,stockInsumo}=req.query //desestructurar

try{
        const insumos = await Insumos.findOneAndUpdate({id:id},{nombreInsumo:nombreInsumo,medidaInsumo:medidaInsumo,cantidad:cantidad,valorInsumo:valorInsumo,categoriaInsumo:categoriaInsumo,stockMinimo:stockMinimo, stockMaximo:stockMaximo, stockInsumo:stockInsumo})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
       
        mensaje = 'actualizacion exitosa'
        
    }catch(error){
        mensaje=error
     }
     res.json({
        msg: mensaje
     })
     
}
   const deleteInsumos= async(req, res) =>{

    const {id}=req.query //desestructurar

    try{
            const insumos = await insumos.findOneAndDelete({id:id})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
            mensaje = 'Eliminacion Exitosa'
            
        }catch(error){
            mensaje=error
         }
         res.json({
            msg: mensaje
         })
         
    }
module.exports={
    getInsumos,
    postInsumos,
    putInsumos,
    deleteInsumos
}
