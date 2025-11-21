const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "game_score",
    password: "kezia0501",
    port: 5432,
});

app.post("/score", async (req, res) => {
    const { score } = req.body;

    await pool.query(
        "INSERT INTO highscores (score) VALUES ($1)",
        [score]
    );

    res.json({ status: "ok" });
});


app.get("/leaderboard", async (req, res) => {
    const result = await pool.query(
        "SELECT score, created_at FROM highscores ORDER BY score DESC LIMIT 10"
    );

    res.json(result.rows);
});

app.listen(3000, () => console.log("Server running on port 3000"));
