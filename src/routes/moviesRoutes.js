const express = require('express');
const router = express.Router();
const {list, news, recomended, detail, add, create, edit, update, deleted, destroy} = require('../controllers/moviesController');

router.get('/movies', list);
router.get('/movies/new', news);
router.get('/movies/recommended', recomended);
router.get('/movies/detail/:id', detail);


//Rutas exigidas para la creación del CRUD
router.get('/movies/add', add);
router.post('/movies/add', create);
router.get('/movies/edit/:id', edit);
router.put('/movies/edit/:id', update);
router.get('/movies/delete/:id', deleted);
router.delete('/movies/delete/:id', destroy);

module.exports = router;