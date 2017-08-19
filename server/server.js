//requires
var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var port = 5000;

//middleware
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(express.static('server/public'));
app.use(bodyParser.json());

//spin up server
app.listen(port, function (res) {
console.log('Now listening on: ', port);

});