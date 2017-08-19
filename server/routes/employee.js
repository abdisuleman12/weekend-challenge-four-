var express = require('express');
var router = express.Router();
var pool = require('../modules/pool'); // what goes on the right side of this line?

// router.post('/', function(req, res){
// // 	console.log('message post was hit!');
// // 	// Add an INSERT query
// // 	pool.connect(function(errorConnectingToDatabase, client, done){
// // 		if(errorConnectingToDatabase) {
// // 			// when connecting to database failed
// // 			console.log('Error connecting to database', errorConnectingToDatabase);
// // 			res.sendStatus(500);
// // 		} else {
// // 			// when connecting to database worked!
// // 			client.query('INSERT INTO messages (name, message) VALUES ($1, $2);', [req.body.name, req.body.message], function(errorMakingQuery, result) {
// // 				done();
// // 				if(errorMakingQuery) {
// // 					console.log('Error making database query', errorMakingQuery);
// // 					res.sendStatus(500);
// // 				} else {
// // 					res.sendStatus(201);
// // 				}
// // 			});
// // 		}
// // 	});
// // });


// router.put('/:id', function(req, res){
// 	var messageId = req.params.id; // messageId is 7
// 	console.log('message put was hit!');
// 	// Add an INSERT query
// 	pool.connect(function(errorConnectingToDatabase, client, done){
// 		if(errorConnectingToDatabase) {
// 			// when connecting to database failed
// 			console.log('Error connecting to database', errorConnectingToDatabase);
// 			res.sendStatus(500);
// 		} else {
// 			// when connecting to database worked!
// 			// query like this: UPDATE messages SET message='Have a really terrific day!' WHERE id=1;
// 			client.query('UPDATE messages SET message=$1 WHERE id=$2;', 
// 							[req.body.message, messageId], 
// 							function(errorMakingQuery, result) {
// 				done();
// 				if(errorMakingQuery) {
// 					console.log('Error making database query', errorMakingQuery);
// 					res.sendStatus(500);
// 				} else {
// 					res.sendStatus(200);
// 				}
// 			});
// 		}
// 	});
// });


// router.delete('/:id', function(req, res){
// 	var messageId = req.params.id; // messageId is 7
// 	console.log('message delete was hit!');
// 	// Add an INSERT query
// 	pool.connect(function(errorConnectingToDatabase, client, done){
// 		if(errorConnectingToDatabase) {
// 			// when connecting to database failed
// 			console.log('Error connecting to database', errorConnectingToDatabase);
// 			res.sendStatus(500);
// 		} else {
// 			// when connecting to database worked!
// 			// query like this: UPDATE messages SET message='Have a really terrific day!' WHERE id=1;
// 			client.query('DELETE FROM messages WHERE id=$1;', 
// 							[messageId], 
// 							function(errorMakingQuery, result) {
// 				done();
// 				if(errorMakingQuery) {
// 					console.log('Error making database query', errorMakingQuery);
// 					res.sendStatus(500);
// 				} else {
// 					res.sendStatus(200);
// 				}
// 			});
// 		}
// 	});
// });

router.get('/', function(req, res) {
	console.log('employees get was hit!');
	// Add a SELECT query
	pool.connect(function(errorConnectingToDatabase, client, done){
		if(errorConnectingToDatabase) {
			// when connecting to database failed
			console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
		} else {
			// when connecting to database worked!
			client.query('SELECT * FROM employees;', function(errorMakingQuery, result) {
				done();
				if(errorMakingQuery) {
					console.log('Error making database query', errorMakingQuery);
					res.sendStatus(500);
				} else {
					res.send(result.rows);
				}
			});
		}
	});
});

module.exports = router;