import app from './api/app';
import * as express from 'express';
import path = require('path');
let env = process.env.NODE_ENV || 'development';
let config = require(path.join(__dirname, 'config', 'server.config.json'))[env];
// load module dùng để khai báo các đường dẫn
import { angularModule, javaScripts, othersLib, htmlFiles, cssFiles } from './loadModule.middleware';



// dùng để load file index.html
app.use(express.static(path.join(__dirname, 'client')))

// load các file trong thư mục app theo đường dẫn là /app, ở đây dùng để load file main.ts
app.use('app', express.static(path.join(__dirname, 'client')))

// load các file script được ghi trong file index.html với đường dẫn là /scripts
app.use('/scripts', javaScripts)

// load các file @angular được khai báo trong systemjs.config.js
app.use('/scripts', angularModule)

// load các file thư viện khác được khai báo trong systemjs.config.js
app.use('/scripts', othersLib)

// load các file css cho client
app.use('/css', cssFiles)

// load các file html cho client
app.use(htmlFiles)





// trả về index.html
app.get('/', (req, res) => {
    res.sendFile('index.html');
})


app.get('*',(req,res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname,'client','index.html'));
})



app.listen(config.port);
console.log('server start on port ' + config.port)
console.log(path.join(__dirname, '..', 'node_modules', 'core-js', 'client'))