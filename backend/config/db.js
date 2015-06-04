var mysql = require('mysql');

module.exports = {
	createConnection: function() {
		var connection;

		connection = mysql.createConnection(
			{
				host     : 'localhost',
			    user     : 'root',
			    password : '',
			    database : 'SLDS'
			});

		/*console.log("connection -> ");
		console.log(connection);*/

		return connection;
	}
}