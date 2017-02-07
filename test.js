LiveCoin = require('./index.js')
let logResponse = {};

// Test public data APIs
var publicClient = new LiveCoin();

// get BTCUSD ticker
publicClient.getTicker(function(err,data){
    
    console.log(data);
    return true}, 'BTC/USD');
