import { pool } from '../../../../lib/db';

export async function POST(req) {
  try {
    const { name } = await req.json();

    const result = await pool.query(
      `INSERT INTO players(name)
       VALUES($1)
       ON CONFLICT(name) DO UPDATE SET name = EXCLUDED.name
       RETURNING id, name`,
      [name]
    );

    return Response.json(result.rows[0]);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ status: "player endpoint ok" });
}