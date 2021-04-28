const { Juego } = require('./class/Juego');
const { Jugador } = require('./class/Jugador');
const { Ronda } = require('./class/Ronda');

let listaNombres, numData = 1, estado = 1;
    process.stdout.write('Favor ingrese los nombres de los jugadores separados por coma: \n');
    process.stdin.on('data', function(data){
    if (estado === 1) {
        listaNombres = data.toString().trim().split(',');
        let codigo = 1;
        const jugadores = listaNombres.reduce((arrJugadores,valorActual) => {
            const jugador = new Jugador(valorActual,codigo);
            arrJugadores.push(jugador);
            codigo++;
            return arrJugadores;
        },[])
        console.log(jugadores);
        estado ++;
        const juego = new Juego(jugadores);
        desplegarMenu();
    }
});

function desplegarMenu() {
    process.stdout.write('Marque la opcion deseada \n');
    process.stdout.write('Opcion 1: Jugar \n');
    process.stdout.write('Opcion 2: Salir \n');
    
    process.stdin.on('data', function(data){
        if (data.toString().trim() === '1') {
            const ronda = new Ronda(numData, listaNombres);
            console.log(ronda.inicializarData());
        }else process.exit();
    });
}

function crearFichas(params) {
    
}

