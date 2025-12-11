import { pool } from '@/lib/db';

export async function POST(req) {
  try {
    const { player_id, score } = await req.json();

    await pool.query(
      `INSERT INTO highscores(player_id, score)
       VALUES($1, $2)`,
      [player_id, score]
    );

    const res = await pool.query(
      `SELECT players.name, highscores.score
       FROM highscores
       JOIN players ON players.id = highscores.player_id
       ORDER BY score DESC
       LIMIT 50`
    );

    return Response.json({ highscores: res.rows });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}