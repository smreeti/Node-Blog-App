const express = require('express');
const router = express.Router();
const { index, about, contact, post, sendContact } = require('../controllers/controllers.js');

router.get('/', index);
router.get('/about', about);
router.get('/contact', contact);
router.get('/post', post);

router.post('/sendContact', sendContact);

module.exports = router;