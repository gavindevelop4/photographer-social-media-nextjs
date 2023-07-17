import { UserData } from '@/models/UserData';

export class CommentData {
  id: number;
  user: UserData;
  comment: string;

  constructor(id: number, user: UserData, comment: string) {
    this.id = id;
    this.user = user;
    this.comment = comment;
  }
}