  
var express = require('express');
var app = express();

app.get('/',c_inicio);
app.get('/clientes',c_cliente);
app.get('/productos',c_producto);

function c_inicio(req,res) {
    res.send('<h1>Hola Express, soy Brayan Blas</h1>');
}
function c_cliente(req,res) {
    res.send('<h1>CLIENTES</h1><ul><li>Mario Antonio</li><li>Alfonso Ruesta</li><li>Angel Avila</li></ul>');
}
function c_producto(req,res) {
    res.send('<h1>PRODUCTOS</h1><ul><li>Gorras</li><li>Polos</li><li>Zapatillas</li></ul>');
}

function c_server() {
    var host = server.address().address;
    var port = server.address().port;
    console.log(host + ':' + port);
}

var server = app.listen(5000,c_server);