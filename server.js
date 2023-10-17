//create express api app
const express = require('express');
const app = express();
app.use(express.static(__dirname)); // serve static files from the current directory
module.exports = app;

//add request to add two numbers
app.get('/add', function(req, res) {
    try {
        var a = parseInt(req.query.a);
        var b = parseInt(req.query.b);
        if (isNaN(a) || isNaN(b)) {
            throw new Error('Invalid input');
        }
        var result = a + b;
        res.send(result.toString());
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//add request to subtract two numbers
app.get('/subtract', function(req, res) {
    try {
        var a = parseInt(req.query.a);
        var b = parseInt(req.query.b);
        if (isNaN(a) || isNaN(b)) {
            throw new Error('Invalid input');
        }
        var result = a - b;
        res.send(result.toString());
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//add request to multiply two numbers
app.get('/multiply', function(req, res) {
    try {
        var a = parseInt(req.query.a);
        var b = parseInt(req.query.b);
        if (isNaN(a) || isNaN(b)) {
            throw new Error('Invalid input');
        }
        var result = a * b;
        res.send(result.toString());
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//add request to divide two numbers
app.get('/divide', function(req, res) {
    try {
        var a = parseInt(req.query.a);
        var b = parseInt(req.query.b);
        if (isNaN(a) || isNaN(b)) {
            throw new Error('Invalid input');
        }
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        var result = a / b;
        res.send(result.toString());
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//add listen to port 3000
app.listen(3000, function() {
    console.log('Server started on port 3000');
});


