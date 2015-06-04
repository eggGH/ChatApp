var db = require('../config/db'),
    async = require('async');

module.exports = {
	savePoint: function(point,onSuccess) {
		var con = db.createConnection();

		con.connect(function(err) {
			if (err) {
				console.error('error connecting: ' + err.stack);
			}
			console.log('connected as id ' + con.threadId);
		});

		console.log("savePoint");
		console.log(point);

		var query = "INSERT INTO points (comment,lat,lon) " + 
					"VALUES (\"" + point.comment + "\"," +point.latitude+ ", " +point.longitude+ ")";

		console.log(query);					

		con.query(query, function(err,rows,fields) {	
			if (err) console.log("err: " + err);
			onSuccess(err,rows);
		});

		con.end();
	},

	getPoints: function(onSuccess) {
		var con = db.createConnection();
		var query = "SELECT * FROM points";

		con.query(query, function(err,rows,fields) {
			if (err) console.log("err: " + err);
			onSuccess(err,rows);
		});

		con.end();
	},

	getPointsInRadius: function(point,radius,days,onSuccess) {
		var con = db.createConnection();

        var query = "SELECT comment,lat,lon,DATE_FORMAT(date,'%d-%m-%Y') AS date FROM point " +
            "WHERE SQRT(POWER(("+point.lat+"-lat),2)+POWER(("+point.lon+"-lon),2)) <= " + radius + "" +
            "AND date(DATE_SUB(sysdate(),INTERVAL " + days + " DAY)) <= date(date) ORDER BY date DESC LIMIT 20";
        
		con.query(query, function(err,rows,fields) {
            if (err) console.log("err: " + err);
            onSuccess(err,rows);
        });

		con.end();
	}
}