import { UserData } from '@/models/UserData';

export const user01: UserData = new UserData(
  1,
  'alex',
  'https://picsum.photos/20'
);

export const user02: UserData = new UserData(
  2,
  'potato',
  'https://picsum.photos/20'
);

export const user03: UserData = new UserData(
  3,
  'peter',
  'https://picsum.photos/20'
);

const userList: Array<UserData> = [
  user01,
  user02,
  user03
]

export default userList;