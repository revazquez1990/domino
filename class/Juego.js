class Juego {

    constructor(puntos) {
        jugadores = [];
        puntosObjetivo = puntos;
    }

    EmparejarJugadores(){
        let emparejamiento = new Jugador();
        let primerEscogido = jugadores[rand.Next(1, 4)];
        const rand = new Random();

        emparejamiento = jugadores.Find(c => c.codigoJugador != primerEscogido.codigoJugador && c.codigoJugador == rand.Next(1, 4));

        primerEscogido.CodigoPareja = emparejamiento.codigoJugador;
        emparejamiento.CodigoPareja = primerEscogido.codigoJugador;

        const ultimos = jugadores.FindAll(c => c.CodigoPareja == 0);
        if(ultimos.length == 2)
        {
            
        }
    }
}