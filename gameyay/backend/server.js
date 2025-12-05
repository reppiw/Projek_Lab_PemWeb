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
    p = await pool.query(
        "INSERT INTO players (name) VALUES ($1) RETURNING *",
        [name]
    );

    res.json(p.rows[0]);
});

// Save Highscore
app.post("/api/highscore", async (req, res) => {
    const { player_id, score } = req.body;
    
    await pool.query(
        "INSERT INTO highscores (player_id, score) VALUES ($1,$2)",
        [player_id, score]
    );
    
    res.json({ message: "Saved" });
});

// Get Highscores
app.get("/api/highscores", async (req, res) => {
    const q = await pool.query(`
        SELECT p.name, h.score
        FROM highscores h
        JOIN players p ON p.id = h.player_id
        ORDER BY h.score DESC
        LIMIT 20
    `);
    res.json(q.rows);
});

// Leaderboard
app.get("/api/leaderboard", async (req, res) => {
    const p = await pool.query(`SELECT * FROM leaderboard`);
    res.json(p.rows);
});

// Reset Highscores
app.post("/api/highscores/reset", async (req, res) => {
    await pool.query("DELETE FROM highscores");
    res.json({ message: "Reset done" });
});

// POST /achievements/unlock
app.post('/achievements/unlock', async (req, res) => {
    const { playerName, achievementTitle } = req.body;

    // Get player ID
    const p = await pool.query("SELECT id FROM players WHERE name=$1", [playerName]);
    if (p.rows.length === 0)
        return res.json({ error: "Player not found" });

    const playerId = p.rows[0].id;

    // get achievement
    const a = await pool.query("SELECT id FROM achievements WHERE title=$1", [achievementTitle]);
    if (a.rows.length === 0)
        return res.json({ error: "Achievement not found" });

    const achievementId = a.rows[0].id;

    // check duplicate
    const check = await pool.query(
        "SELECT * FROM player_achievements WHERE player_id=$1 AND achievement_id=$2",
        [playerId, achievementId]
    );

    if (check.rows.length > 0)
        return res.json({ message: "Already unlocked" });

    // insert
    await pool.query(
        "INSERT INTO player_achievements (player_id, achievement_id) VALUES ($1,$2)",
        [playerId, achievementId]
    );

    res.json({ message: "Unlocked" });
});

// LIST ACHIEVEMENTS OF PLAYER
app.get("/api/achievements/:playerName", async (req, res) => {
    const { playerName } = req.params;

    const q = await pool.query(`
        SELECT a.title, a.description, pa.achieved_at
        FROM player_achievements pa
        JOIN achievements a ON a.id = pa.achievement_id
        JOIN players p ON p.id = pa.player_id
        WHERE p.name=$1
    `, [playerName]);

    res.json(q.rows);
});

app.listen(3000, () => console.log("Server running on port 3000"));
