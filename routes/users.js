const express = require('express');
const router = express.Router();
const path = require('path');

// this is a route. this points at the home page / root
router.get('/users', (req, res) => {
    res.sendFile(__dirname + '/users.html');
});

module.exports = router;
