import feeds from '@/mockData/feeds.json';
import users from '@/mockData/users.json';
import comments from '@/mockData/comments.json';

import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  // const numberId = parseInt(params.feedId);
  const url = new URL(req.url)
  const params = url.searchParams;
  const feed_id = params.get("feed_id") ?? ''
  const id = parseInt(feed_id);
  
  console.log(feed_id)
  const result = comments.data.filter((comment) => comment.feedId === id);

  return NextResponse.json({
    data: result
  });
}