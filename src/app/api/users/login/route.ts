import users from '@/mockData/users.json';
import { NextResponse } from 'next/server';

export async function GET() {
  const result = users.data[0];

  return NextResponse.json({
    data: result
  });
}