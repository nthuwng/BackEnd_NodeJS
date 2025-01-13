require('dotenv').config();
const express = require('express'); //commonjs
const configViewEngine = require('./config/viewEngine'); //commonjs
const webRoute = require('./routes/web'); //commonjs

const app = express();// app express
const port = process.env.PORT || 8888; //port => hardcode . uat .prod
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRoute);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})