LiveCoin = require('./index.js')
let logResponse = {};

// Test public data APIs
var publicClient = new LiveCoin();

// get BTCUSD ticker
publicClient.getTicker(function(err,data){
    console.log(data);
    return true}, 'BTC/USD');

// get BTCUSD Order Book
publicClient.getOrderBook(function(err,data){
    console.log(data);
    return true}, 'BTC/USD');

// get BTCUSD trades
publicClient.getTrades(function(err,data){
    console.log(data);
    return true}, 'BTC/USD', 'hour', "false");
