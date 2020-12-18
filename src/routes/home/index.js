const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.render('home'));
router.get('/list', (req, res) => res.render('list'));
router.get('/claims', (req, res) => res.render('claims'));
router.get('/people', (req, res) => res.render('people'));
router.get('/login', (req, res) => res.render('login'));

router.get('/item/:id', (req, res) => res.render('item'));
router.get('/user/:id', (req, res) => res.render('user'));

module.exports = router;
