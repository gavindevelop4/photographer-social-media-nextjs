import feeds from '@/mockData/feeds.json';
import users from '@/mockData/users.json';
import comments from '@/mockData/comments.json';

import { NextResponse } from 'next/server';

export async function GET() {
  const getUserById = (id: number) => {
    return users.data.find((user) => user.id === id);
  }

  const getCommentsById = (id: number) => {
    return comments.data.find((comment) => comment.id === id);
  }

  const result = feeds.data.map((feed) => {
    return {
      id: feed.id,
      user: getUserById(feed.userId),
      image: feed.image,
      caption: feed.caption,
      comments: feed.commentsId.map((commentId) => {
        const mapComment = getCommentsById(commentId);

        return {
          id: mapComment?.id,
          user: getUserById(mapComment!.userId),
          comment: mapComment?.comment
        }
      }),
      likedUser: feed.likedUserId.map((id) => getUserById(id)),
    }
  })

  return NextResponse.json({
    data: result,
  });
}
