/*data: {
	"comment": ,
	"date": ,
	"latitude": ,
	"longitude":
}*/

var dbHandler = require('../handlers/dbHandler');


module.exports = function(app) {

	app.get('/', function(req,res) {
		res.send({"message": "HelloWorld!"})
	});

	app.post("/", function(req,res) {
		console.log("Hello " + req.body.name);
	}); 

	app.post("/addPoint", function(req,res) {
		var point = {
				"comment" 	: req.body.comment,
				"date" 		: req.body.date,
				"latitude" 	: req.body.latitude,
				"longitude" : req.body.longitude
		};

		dbHandler.savePoint(point, function(err,result) {
			if(err) console.log("err" + err);
			else {
				console.log("Result -> ");
				console.log(result);
				res.json(result);
			}
		});
	});

	app.get("/getPoints", function(req,res) {
		dbHandler.getPoints(function(err,result) {
			if(err) console.log("err" + err);
			else {
				console.log("Result -> ");
				console.log(result);
				res.json(result);
			}
		});
	});

	app.post("/getPointsInRadius", function(req,res) {
		var point = {
                "lat": req.body.lat,
                "lon": req.body.lon
            },
			radius = req.body.radius,
            days = req.body.days;

		dbHandler.getPointsInRadius(point,radius,days,function(err,result) {
			if(err) console.log("err -> " + err);
			else {
				console.log("getPerPoint");
				//console.log(result);
				res.send(result);
			}
		});
	});
}