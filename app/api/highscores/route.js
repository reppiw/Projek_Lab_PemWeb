import { pool } from '../../../../lib/db';

export async function GET() {
  try {
    const res = await pool.query(`
      SELECT players.name, highscores.score
      FROM highscores
      JOIN players ON highscores.player_id = players.id
      ORDER BY score DESC
      LIMIT 50
    `);

    return Response.json(res.rows);
  } catch (err) {
    return Response.json([], { status: 500 });
  }
}

export async function GET() {
  return Response.json({ status: "addScore ok" });
}
