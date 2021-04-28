const { Ficha } = require('./Ficha');
class Ronda {

    constructor(numData, players) {
        this.numeroData = numData;
        this.jugadores = players;
        this.fichas = [];
        this.inicializarData();
    }

    inicializarData() {
        for (let i = 0; i <= 6; i++){
            for (let j = i; j <= 6; j++)
            {
                this.fichas.concat(new Ficha(i, j));
            }
        }
    }

    asignarFichasAJugadores(){
        if (this.jugadores.length > 4)
            throw new Exception("Hay mas jugadores, deben ser solo 4");
        let rand = new Random();
        rand.Next(0, this.fichas.length - 1);
    }
}

module.exports = {
    Ronda
}