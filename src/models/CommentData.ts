import { UserData, UserInterface } from '@/models/UserData';

export interface CommentInterface {
  id: number;
  user: UserInterface;
  comment: string;
}

export class CommentData implements CommentInterface{
  id: number;
  user: UserData;
  comment: string;

  constructor(id: number, user: UserData, comment: string) {
    this.id = id;
    this.user = user;
    this.comment = comment;
  }

  static fromJson({ id, user, comment }: CommentInterface): CommentData {
    const mapUser = UserData.fromJson(user);

    return new CommentData(id, mapUser, comment);
  }
}