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

// GET HIGHSCORES
app.get("/highscores", async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT name, score FROM highscores ORDER BY score DESC LIMIT 10"
        );
        res.json(result.rows);
    } catch (err) {
        res.status(500).send(err);
    }
});

// SAVE SCORE
app.post("/highscores", async (req, res) => {
    const { name, score } = req.body;

    try {
        await pool.query(
            "INSERT INTO highscores (name, score) VALUES ($1, $2)",
            [name, score]
        );
        res.json({ message: "Saved!" });
    } catch (err) {
        res.status(500).send(err);
    }
});

// RESET
app.delete("/highscores", async (req, res) => {
    try {
        await pool.query("DELETE FROM highscores");
        res.json({ message: "Highscores cleared!" });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
