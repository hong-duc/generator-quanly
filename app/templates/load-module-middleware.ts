import * as express from 'express';
import path  = require('path');


const angularModule = [
    express.static(path.join(__dirname,'..','node_modules')),
    express.static(path.join(__dirname,'..','node_modules','@angular'))
]

const javaScripts = [
    express.static(path.join(__dirname,'..','node_modules','core-js','client')),
    express.static(path.join(__dirname,'..','node_modules','zone.js','dist')),
    express.static(path.join(__dirname,'..','node_modules','reflect-metadata')),
    express.static(path.join(__dirname,'..','node_modules','systemjs','dist')),
    express.static(path.join(__dirname,'client','app','assets')),
    express.static(path.join(__dirname))
]

const htmlFiles = [
    express.static(path.join(__dirname,'client','app'))
]

const cssFiles= [
    express.static(path.join(__dirname,'client','app','assets'))
]

const othersLib = [
    express.static(path.join(__dirname,'..','node_modules','rxjs'))
]

export {angularModule, javaScripts, othersLib, htmlFiles, cssFiles}