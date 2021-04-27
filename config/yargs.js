const argv = require('yargs')
    .command('listar', 'Listar todas las tareas')
    .command('crear', 'Crear juego de domino')
    .help()
    .argv;

module.exports = {
    argv
}