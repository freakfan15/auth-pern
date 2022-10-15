const Pool = require("pg").Pool

const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "jwt_db",
	password: "supercool",
	port: 5432,
})

module.exports = pool
