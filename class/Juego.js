const { Ronda } = require("./Ronda");

class Juego {

    constructor(players) {
        this.jugadores = players;
        this.puntosObjetivo = 200;
    }

    jugar(){
        const ronda = new Ronda(1,this.jugadores);
    }
    
    
}

module.exports = {
    Juego
}