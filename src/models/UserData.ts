export interface UserInterface {
  id: number;
  username: string;
  avatar: string;
}

export class UserData implements UserInterface {
  id: number;
  username: string;
  avatar: string;

  constructor(id: number, username: string, avatar: string) {
    this.id = id;
    this.username = username;
    this.avatar = avatar;
  }

  static fromJson({id, username, avatar}: UserInterface): UserData {
    return new UserData(id, username, avatar);
  }
}