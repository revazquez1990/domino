const fs = require('fs');

let listadoPlayers = [];

const crear = (nombre, index) => {
    console.log('hola')
    cargarDB();

    let player = {
        code: index,
        nombre
    };

    listadoPlayers.push(players);
    console.log(listadoPlayers);
    guardarDB();
    return players;
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPlayers);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('no se pudo guardar los datos');
    });
}

const cargarDB = () => {
    try {
        listadoPlayers = require('./db/players.json');

    } catch (error) {
        listadoPlayers = [];
    }
}

module.exports = {
    crear
}