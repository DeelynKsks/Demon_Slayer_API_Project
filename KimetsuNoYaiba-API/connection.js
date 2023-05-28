const mongoose = require('mongoose');

const connection = async () => {
    try {
        mongoose.connect(process.env.DATABASE);
        console.log("Servidor conectado a la base de datos")
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = connection