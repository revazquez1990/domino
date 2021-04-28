const cargarDB = () => {
    try {
        listFichas = require('../db/fichas.json');

    } catch (error) {
        listFichas = [];
    }
}

const getParticipantes = () => {
    listPlayers = require('../db/players.json');
}

const getListado = () => {
    cargarDB();
    return listFichas;
}

const repartirFichas = () => {
    // buscar los participantes
    getParticipantes();
    return listPlayers;
}

module.exports = {
    getListado,
    
}