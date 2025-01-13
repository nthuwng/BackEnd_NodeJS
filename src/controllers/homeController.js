
const getHomePage = (req , res) => {
    res.send('Hello World vs Hoi Dan IT & Eric! & nodemon')
}

const getABC = (req, res) => {
    res.send('check ABC')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {  
    getHomePage,getABC,getHoiDanIT
}