const mongoose = require('mongoose')

const url = 'mongodb+srv://admin:123%40senac@cluster0.tvons.mongodb.net/pi-01'

let conectado = false

const conectar = async () => {    
    if (!conectado) {       
        try {
            await mongoose.connect(url)
            conectado = true            
            return true
        } catch (error) {              
                console.log(error)            
            return false
        }
    }
}

const desconectar = async () => {   
    if (conectado) {               
        try {
            await mongoose.disconnect(url)
            conectado = false           
            return true 
        } catch (error) {
            console.log(error)
            return false
        }
    }
}

module.exports = { conectar, desconectar }