var express = require('express');
var router = express.Router();
var pool = require('../modules/pool'); // what goes on the right side of this line?

router.post('/', function(req, res){
	console.log('employee post was hit!');
	// Add an INSERT query
	pool.connect(function(errorConnectingToDatabase, client, done){
		if(errorConnectingToDatabase) {
			// when connecting to database failed
			console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
		} else {
			// when connecting to database worked!
			client.query('INSERT INTO employees (first_name, last_name, id_number, job_title, annual_salary) VALUES ($1, $2, $3, $4, $5);', [req.body.first_name, req.body.last_name, req.body.id_number, req.body.job_title, req.body.annual_salary], function(errorMakingQuery, result) {
				done();
				if(errorMakingQuery) {
					console.log('Error making database query', errorMakingQuery);
					res.sendStatus(500);
				} else {
					res.sendStatus(201);
				}
			});
		}
	});
});




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