const { Ficha } = require('./Ficha');
const {Jugador} = require('./Jugador');
const {getRandomArbitrary} = require('../helpers/getListar');

class Ronda {

    constructor(numData, players) {
        this.numeroData = numData;
        this.jugadores = players;
        this.fichas = [];
        this.inicializarData();
        this.asignarFichasAJugadores();
    }

    inicializarData() {
        for (let i = 0; i <= 6; i++){
            for (let j = i; j <= 6; j++)
            {
                this.fichas.push(new Ficha(i, j));
            }
        }
    }

    asignarFichasAJugadores(){
        if (this.jugadores.length > 4)
            throw new Exception("Hay mas jugadores, deben ser solo 4");
        this.jugadores.forEach((jugador, index) => {
            while(this.jugadores[index].fichas.length < 7){
                console.log(this.jugadores[index]);
                const aleatorio = Math.round(getRandomArbitrary(0,this.fichas.length));
                this.jugadores[index].fichasJugador.push(this.fichas[aleatorio]);
                this.fichas.splice(aleatorio,1);
                console.log(jugador);
                console.log(index);
            }
        });
    }

    
}

module.exports = {
    Ronda
}