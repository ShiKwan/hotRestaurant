// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// =============================================================

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

// =============================================================

var reservations = [
    {
    dinerName: 'John',
    phoneNumber: '555-1234',
    email: 'john1234@gamil.com',
    nameId: 'john1234'
    },
    {
    dinerName: 'Bob',
    phoneNumber: '555-5678',
    email: 'bob5678@gamil.com',
    nameId: 'bob5678@gmail.com'
    }
];


app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});