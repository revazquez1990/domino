const { argv } = require('./config/yargs');
const colors = require('colors');
const getList = require('./helpers/getListar');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        let listado = getList.getListado()
        for (let i = 0; i < listado.length; i++) {
            console.log(listado[i])
        }
        break;
    default:
        console.log('comando no reconocido');
}