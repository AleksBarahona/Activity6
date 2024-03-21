import mysql from "mysql";
const connection = mysql.createConnection({
	host: "localhost",
	user: "b0roka",
	password: "1234",
	database: "alecrmabh",
});

export default connection;
