const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const validator = require('validator');
exports.storeLatLong = functions.https.onRequest((request,response) => {
	var latitude = request.query.latitude;
	var longitude = request.query.longitude;
	var user = request.query.name;
	var d = new Date();
	var ts = d.toISOString();
	var dataunit = latitude+","+longitude+","+user+","+ts;
	response.send("Hello from Firebase! and " + dataunit);
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
