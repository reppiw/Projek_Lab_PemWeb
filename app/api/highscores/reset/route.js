import { pool } from '../../../../lib/db';

export async function POST() {
  try {
    await pool.query(`DELETE FROM highscores`);
    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ status: "resetScores ok" });
}