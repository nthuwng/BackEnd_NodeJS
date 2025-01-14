const connection = require('../config/database'); //commonjs

const getHomePage = (req , res) => {
    let users =[];
    connection.query(
        'SELECT * FROM Users',
        function (err, results, fields) {
            users = results;
          console.log("results= ",results); // results contains rows returned by server
          res.send(JSON.stringify(users));
        }
      );
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