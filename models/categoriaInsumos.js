const{Shema, model}= require('mongoose')

const categoriaInsumoShema=({
    
    id:{
        type:Number,
        unique: true,
        required: true,
    },

    nombreCategoriaInsumo: {
        type: String,
        required: true,
        
    }

})
//especificando la estructura que va  a tener la conexión
module.exports = model('categoriaInsumos', InsumoShema)

