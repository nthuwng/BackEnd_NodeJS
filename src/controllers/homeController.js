const connection = require('../config/database'); //commonjs

const getHomePage = (req , res) => {
    
    return res.render('home.ejs')
}

const getABC = (req, res) => {
    res.send('check ABC')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    console.log(">>> req.body: ", req.body)
    res.send('create a new user')
}
module.exports = {  
    getHomePage,getABC,getHoiDanIT,postCreateUser
}