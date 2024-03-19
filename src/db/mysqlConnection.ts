import mysql from "mysql";
const connection = mysql.createConnection({
	host: "localhost",
	user: "b0roka",
	database: "alecrmabh",
});

export default connection;
