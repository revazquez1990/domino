const Ficha = require('./Ficha');

class Jugador {
 
    constructor(name, code, codigoPareja) {
        this.codigo = code;
        this.nombre = name;
        this.codigoPareja = codigoPareja;
        this.fichasJugador = [];
    }
    
    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name;
    }
}

module.exports = {
    Jugador
};