import express from "express";
import cors from "cors";
import pkg from "pg";
const { Pool } = pkg;

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
    // check if player exists
    const existing = await pool.query("SELECT * FROM players WHERE name=$1", [name]);
    if (existing.rows.length > 0) {
        return res.json(existing.rows[0]);
    }

    const p = await pool.query(
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

    try {
    const p = await pool.query(`
        SELECT players.name, MAX(highscores.score) as score
        FROM highscores
        JOIN players ON highscores.player_id = players.id
        GROUP BY players.id, players.name
        ORDER BY score DESC
        LIMIT 3
    `);
        res.json(p.rows);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
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

app.listen(3000, async () => {
    console.log("Server running on port 3000");

    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS players (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) UNIQUE NOT NULL
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS highscores (
                id SERIAL PRIMARY KEY,
                player_id INTEGER REFERENCES players(id) ON DELETE CASCADE,
                score INTEGER NOT NULL,
                created_at TIMESTAMP DEFAULT NOW()
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS achievements (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) UNIQUE NOT NULL,
                description TEXT NOT NULL
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS player_achievements (
                id SERIAL PRIMARY KEY,
                player_id INTEGER REFERENCES players(id) ON DELETE CASCADE,
                achievement_id INTEGER REFERENCES achievements(id) ON DELETE CASCADE,
                achieved_at TIMESTAMP DEFAULT NOW(),
                UNIQUE (player_id, achievement_id)
            )
        `);

        console.log('Ensured DB tables exist');

        const check = await pool.query("SELECT COUNT(*) FROM achievements");
        if (check.rows[0].count === '0') {
            await pool.query(
                "INSERT INTO achievements (title, description) VALUES ($1, $2), ($3, $4), ($5, $6)",
                ['10 Kills in a Row', 'Get 10 kills in a row', '20 Kills in a Row', 'Get 20 kills in a row', '100 Kills in a Row', 'Get 100 kills in a row']
            );
            console.log("Achievements initialized");
        }
    } catch (err) {
        console.error("Error during DB initialization:", err);
    }
});
