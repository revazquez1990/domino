class Juego {

    constructor(players) {
        this.jugadores = players;
        this.puntosObjetivo = 200;
    }

    EmparejarJugadores(){
        let emparejamiento = new Jugador();
        let primerEscogido = jugadores[rand.Next(1, 4)];
        const rand = new Random();

        emparejamiento = jugadores.filter(c => c.codigoJugador !== primerEscogido.codigoJugador && c.codigoJugador === rand.Next(1, 4));

        primerEscogido.CodigoPareja = emparejamiento.codigoJugador;
        emparejamiento.CodigoPareja = primerEscogido.codigoJugador;

        const ultimos = jugadores.filter(c => c.CodigoPareja === 0);
        if(ultimos.length == 2)
        {
            
        }
    }
}

module.exports = {
    Juego
}