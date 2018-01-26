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

var waitList = [
    {
        dinerName: 'Chris',
        phoneNumber: '555-3434',
        email: 'chris3434@gamil.com',
        nameId: 'chris434'
    },
    {
        dinerName: 'Jennifer',
        phoneNumber: '555-6767',
        email: 'jennifer6767@gamil.com',
        nameId: 'jennifer6767'
    }
];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/reservation/:reservation?", function (req, res) {
    var chosen = req.params.reservation;
    if (chosen) {
        console.log(chosen);
        for (var i = 0; i < reservations.length; i++) {

            if (chosen === reservations[i].nameID) {
                return res.json(reservation[i]);
            }
        }
        return res.json(false);
    }
    return res.json(reservations);
});

app.get("/api/waitlist/:waitList?", function (req, res) {
    var chosen = req.params.waitList;
    if (chosen) {
        console.log(chosen);
        for (var i = 0; i < waitList.length; i++) {

            if (chosen === waitList[i].nameId) {

                return res.json(waitList[i]);
            }
        }
        return res.json(false);
    }
    return res.json(waitList);
});

// Create New Characters - takes in JSON input
app.post("/api/addWaitList?", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newWaitList = req.body;
  console.log(newWaitList);

    waitList.push(newWaitList);

    res.json(newWaitList);

});

// Create New Characters - takes in JSON input
app.post("/api/addReservation?", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
    var newReservation = req.body;
    console.log(newReservation);

    reservations.push(newReservation);

    res.json(newReservation);
}); 

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});
