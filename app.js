
const Juego = require('./class/Juego')
const Jugador = require('./class/Jugador')

const juego = new Juego();

process.stdout.write('Favor ingrese los nombres de los jugadores separados por coma: \n');
process.stdin.on('data', function(data){
    const listaNombres = data.toString().trim().split(',');
    let codigo = 1;
    let jugadores = listaNombres.reduce(([],valorActual) => {
        new Jugador(valorActual,codigo);
        codigo++;
    })
    console.log(jugadores);
})