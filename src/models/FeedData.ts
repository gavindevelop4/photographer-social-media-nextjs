import { UserData, UserInterface } from '@/models/UserData';
import { CommentData, CommentInterface } from './CommentData';

export interface FeedInterface {
  id: number;
  user: UserInterface;
  image: string;
  caption: string;
  likedUser: Array<UserInterface>;
  comments: Array<CommentInterface>;
}

export class FeedData implements FeedInterface {
  id: number;
  user: UserData;
  image: string;
  caption: string;
  likedUser: Array<UserData>;
  comments: Array<CommentData>;

  constructor(
    id: number,
    user: UserData,
    image: string,
    caption: string,
    likedUser: Array<UserData>,
    comments: Array<CommentData>,
  ) {
    this.id = id;
    this.user = user;
    this.image = image;
    this.caption = caption;
    this.likedUser = likedUser;
    this.comments = comments
  }

  static fromJson({ id, user, image, caption, likedUser, comments }: FeedInterface): FeedData {
    const mapUser = UserData.fromJson(user);
    const mapLikedUser = likedUser.map((user) => UserData.fromJson(user));
    const mapComments = comments.map((comment) => CommentData.fromJson(comment));

    return new FeedData(id, mapUser, image, caption, mapLikedUser, mapComments);
  }

  get likesNumber() {
    return this.likedUser.length;
  }

  getIsLiked(user: UserData): boolean {
    const userItem = this.likedUser.find((userItem: UserData) => userItem.id === user.id);

    return userItem !== undefined;
  }
}

