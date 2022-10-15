const router = require("express").Router()
const authorization = require("../middleware/authorization")
const pool = require("../db")

router.get("/", authorization, async (req, res) => {
	try {
		const user = await pool.query(
			"SELECT user_name, user_email FROM users WHERE user_id = $1",
			[req.user]
		)

		res.json(user.rows[0])
	} catch {
		console.error(err.message)
	}
})

module.exports = router
