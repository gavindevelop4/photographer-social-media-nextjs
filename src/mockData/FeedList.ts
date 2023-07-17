import { FeedData } from '@/models/FeedData';
import { user01, user02, user03 } from './UserList';
import { CommentData } from '@/models/CommentData';

export const feed1: FeedData = new FeedData(
  1,
  user01,
  'https://picsum.photos/2000',
  'New Photo!',
  [
    user01,
    user02,
    user03
  ],
  [
    new CommentData(
      1,
      user02,
      'test'
    ),
    new CommentData(
      2,
      user02,
      'testtest'
    )
  ]
)

export const feed2: FeedData = new FeedData(
  2,
  user02,
  'https://picsum.photos/2000',
  'New Photo2!',
  [
    user01
  ],
  [
    new CommentData(
      3,
      user02,
      'test'
    ),
    new CommentData(
      4,
      user02,
      'testtest'
    ),
    new CommentData(
      5,
      user02,
      'test'
    ),
    new CommentData(
      6,
      user02,
      'testtest'
    )
  ]
)

export const feed3: FeedData = new FeedData(
  3,
  user03,
  'https://picsum.photos/2000',
  'New Photo3!',
  [

  ],
  [

  ]
)

const feedList: Array<FeedData> = [
  feed1,
  feed2,
  feed3
]

export default feedList;