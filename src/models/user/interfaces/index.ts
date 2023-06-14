export interface IUserData extends IUserBasic{
  userId: number;
}

export interface IUserBasic {
  username: string;
  password: string;
}