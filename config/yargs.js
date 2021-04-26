const argv = require('yargs')
    .command('listar', 'Listar todas las tareas')
    .help()
    .argv;

module.exports = {
    argv
}