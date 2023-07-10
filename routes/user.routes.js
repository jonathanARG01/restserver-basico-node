// ========== Imports and requires ==========
const { Router } = require('express');
const router     = Router();
const { usersGet, usersPosts, usersPut, usersPatch, usersDelete } = require('../controllers/user.controller');



// ========== Routes ==========
router.get( '/', usersGet );
router.post( '/', usersPosts );

// Pasar alias de parametro que se obtiene por la url
router.put( '/:id', usersPut );

router.patch( '/', usersPatch );
router.delete( '/', usersDelete );



// ========== Exports ==========
module.exports = router;
