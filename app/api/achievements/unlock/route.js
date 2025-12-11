import { pool } from '@/lib/db';

export async function POST(req) {
  try {
    const { playerName, achievementTitle } = await req.json();

    await pool.query(
      `INSERT INTO achievements(player_name, title)
       VALUES($1, $2)
       ON CONFLICT(player_name, title) DO NOTHING`,
      [playerName, achievementTitle]
    );

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}