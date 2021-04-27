const { argv } = require('./config/yargs');
const colors = require('colors');
const getList = require('./helpers/getListar');
const domino = require('./domino');
let comando = argv._[0];


let preguntas = ['Nombre del 1er Jugador: ', 'Nombre del 2do Jugador: ',
                'Nombre del 3er Jugador: ', 'Nombre del 4to Jugador: ']
let respuestas = [];

function pregunta(i) {
    process.stdout.write(`${preguntas[i]} \n`);
}

process.stdin.on('data', function(data){
    respuestas.push(data.toString().trim());
    domino.crear(data.toString().trim(), respuestas.length);
    if (respuestas.length < preguntas.length) {
        pregunta(respuestas.length);
    } else {
        console.log(respuestas);
    }
});

pregunta(0);

// const pedirNombresJugadores = () => {
//     process.stdin.on('data', function(data){
//         process.stdout.write('El nombre es: ' + data.toString());
//     });
// }

// switch (comando) {
//     case 'listar':
//         let listado = getList.getListado()
//         for (let i = 0; i < listado.length; i++) {
//             console.log(listado[i])
//         }
//         break;
//     case 'crear':
//         process.stdout.write('Introduce los nombres de los 4 Jugadores: \n');
//         pedirNombresJugadores()
//         // for (let i = 1; i < 5; i++) {
//         //     process.stdout.write('Jugador ' + i + ' : \n')
//         //     const stdin = process.stdin.on('data', function(data){
//         //         process.stdout.write('El nombre '+ i + ' es: ' + data.toString());
//         //     });
//         // }
//         break;
//     default:
//         console.log('comando no reconocido');
// }