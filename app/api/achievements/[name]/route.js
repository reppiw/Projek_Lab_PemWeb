import { pool } from '@/lib/db';

export async function GET(request, { params }) {
  try {
    const res = await pool.query(
      `SELECT title FROM achievements WHERE player_name = $1`,
      [params.name]
    );

    return Response.json(res.rows);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}