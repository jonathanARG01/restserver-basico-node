/**
 * Controlador de rutas de usuarios
 */


// ========== Imports and requires ==========
const { request, response } = require('express');



// ========== Controllers ==========
const usersGet = ( req = request, res = response ) => {
    
    // Obtener queryParams
    // const query = req.query;
    const { q, nombre = 'No name', apikey, page = 1, limit} = req.query;

    res.json({
        msg: 'get Api - Controller',
        q,
        nombre,
        apikey,
        page,
        limit
    });

}


const usersPosts = ( req, res = response ) => {

    // Obteger a info que el cliente envía por el body (Ej: <form>)
    // const body = req.body;
    const { name, age } = req.body;

    res.json({
        msg: 'posts Api - Controller',
        name,
        age
    });

}


const usersPut = ( req, res = response ) => {

    // Obtener dato enviado por url (id)
    // const id = req.params.id;
    const { id } = req.params;

    res.json({
        msg: 'put Api - Controller',
        id
    });

}


const usersPatch = ( req, res = response ) => {
    res.json({
        msg: 'patch Api - Controller'
    });
}


const usersDelete = ( req, res = response ) => {
    res.json({
        msg: 'delete Api - Controller'
    });
}



// ========== Exports ==========
module.exports = {
    usersGet,
    usersPosts,
    usersPut,
    usersPatch,
    usersDelete
}
