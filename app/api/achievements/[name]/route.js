import { pool } from '@/lib/db';

export async function GET(_, { params }) {
  try {
    const res = await pool.query(
      `SELECT title FROM achievements WHERE player_name = $1`,
      [params.name]
    );

    return Response.json(res.rows);
  } catch (err) {
    return Response.json([], { status: 500 });
  }
}