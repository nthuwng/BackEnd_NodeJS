require('dotenv').config();
const express = require('express'); //commonjs
const configViewEngine = require('./config/viewEngine'); //commonjs
const webRoute = require('./routes/web'); //commonjs
const connection = require('./config/database'); //commonjs

const app = express();// app express
const port = process.env.PORT || 8888; //port => hardcode . uat .prod
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true }));//Parse URL-encoded bodies


//config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRoute);

//test connect
connection();

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})