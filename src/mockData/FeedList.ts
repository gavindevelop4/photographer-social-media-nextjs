import { FeedData } from '@/models/FeedData';
import { user01, user02, user03 } from './UserList';

export const feed1: FeedData = new FeedData(
  1,
  user01,
  'https://picsum.photos/2000',
  [
    user01,
    user02,
    user03
  ]
)

export const feed2: FeedData = new FeedData(
  2,
  user02,
  'https://picsum.photos/2000',
  [
    user01
  ]
)

export const feed3: FeedData = new FeedData(
  3,
  user03,
  'https://picsum.photos/2000',
  [

  ]
)

const feedList: Array<FeedData> = [
  feed1,
  feed2,
  feed3
]

export default feedList;