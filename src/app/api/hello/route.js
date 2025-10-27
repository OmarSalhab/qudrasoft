import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
	const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  const message = name ? `Hello, ${name}!` : `Hello, stranger!`;

  return new Response(JSON.stringify({ message }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
