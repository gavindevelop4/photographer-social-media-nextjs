import { UserData } from '@/models/UserData';
import { CommentData } from './CommentData';

export interface FeedInterface {
  id: number;
  user: UserData;
  image: string;
  caption: string;
  likedUser: Array<UserData>;
  comments: Array<CommentData>;
}
export class FeedData implements FeedInterface {
  id: number;
  user: UserData;
  image: string;
  caption: string;
  likedUser: Array<UserData>
  comments: Array<CommentData>

  constructor(
    {
      id,
      user,
      image,
      caption,
      likedUser,
      comments,
    }: FeedInterface
  ) {
    this.id = id;
    this.user = user;
    this.image = image;
    this.caption = caption;
    this.likedUser = likedUser;
    this.comments = comments
  }

  get likesNumber() {
    return this.likedUser.length;
  }

  getIsLiked(user: UserData): boolean {
    const userItem = this.likedUser.find((userItem: UserData) => userItem.id === user.id);

    return userItem !== undefined;
  }
}

