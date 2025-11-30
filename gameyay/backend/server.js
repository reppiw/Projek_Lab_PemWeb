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

// Register Player
app.post("/api/player", async (req, res) => {
    const { name } = req.body;
    const q = await db.query(`
        INSERT INTO players (name)
        VALUES ($1)
        RETURNING id
    `, [name]);
    res.json(q.rows[0]);
});

// Save Highscore
app.post("/api/highscore", async (req, res) => {
    const { player_id, score } = req.body;
    await db.query(`
        INSERT INTO highscores (player_id, score)
        VALUES ($1, $2)
    `, [player_id, score]);
    res.json({ message: "Saved" });
});

// Leaderboard
app.get("/api/leaderboard", async (req, res) => {
    const q = await db.query(`SELECT * FROM leaderboard`);
    res.json(q.rows);
});

// POST /achievements/unlock
app.post('/achievements/unlock', async (req, res) => {
    const { playerName, achievementName } = req.body;

    try {
        // find or create player
        let playerRes = await pool.query(
            "SELECT * FROM players WHERE name=$1",
            [playerName]
        );

        if (playerRes.rows.length === 0) {
            playerRes = await pool.query(
                "INSERT INTO players (name) VALUES ($1) RETURNING *",
                [playerName]
            );
        }

        const playerId = playerRes.rows[0].id;

        // check if achievement already exists
        const check = await pool.query(
            "SELECT * FROM achievements WHERE player_id=$1 AND achievement_name=$2",
            [playerId, achievementName]
        );

        if (check.rows.length > 0) {
            return res.json({ message: "Already unlocked" });
        }

        // save achievement
        await pool.query(
            "INSERT INTO achievements (player_id, achievement_name) VALUES ($1,$2)",
            [playerId, achievementName]
        );

        res.json({ message: "Achievement unlocked!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

// GET /achievements/:playerName
app.get('/achievements/:playerName', async (req, res) => {
    const { playerName } = req.params;

    try {
        const result = await pool.query(
            `SELECT a.achievement_name, a.unlocked_at
             FROM achievements a
             JOIN players p ON p.id = a.player_id
             WHERE p.name=$1`,
            [playerName]
        );
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});


app.listen(3000, () => console.log("Server running on port 3000"));
