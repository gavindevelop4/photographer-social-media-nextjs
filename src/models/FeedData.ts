import { UserData } from '@/models/UserData';

export class FeedData {
  id: number;
  user: UserData;
  image: string;
  likedUser: Array<UserData>

  constructor(id: number, user: UserData, image: string, likedUser: Array<UserData>) {
    this.id = id;
    this.user = user;
    this.image = image;
    this.likedUser = likedUser;
  }

  get likesNumber() {
    return this.likedUser.length;
  }

  getIsLiked(user: UserData): boolean {
    const userItem = this.likedUser.find((userItem: UserData) => userItem.id === user.id);

    return userItem !== undefined;
  }
}

