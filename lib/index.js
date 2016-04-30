console.log('hail');


var electron = require('electron');
console.log('electron',electron);
//returns electron builder, which doesnt allow to start electron -- only to build one
// this one returns number of functions in electron app which we start with "electron app.js", like "electron.app" or "electron.BrowserWindow"


var electronPrebuilt = require('electorn-prebuilt');
console.log('electronPrebuilt',electronPrebuilt);
//this one returns path to electron binary, though it does the same in real electron app