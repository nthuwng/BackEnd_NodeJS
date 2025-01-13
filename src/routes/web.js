const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World vs Hoi Dan IT & Eric! & nodemon')
})

router.get('/abc', (req, res) => {
    res.send('check ABC')
})

router.get('/hoidanit', (req, res) => {
    // res.send('<h1>hoi dan it voi Eric </h1>')
    res.render('sample.ejs')
})

module.exports = router;