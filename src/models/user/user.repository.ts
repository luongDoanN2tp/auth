import { initialUserData } from './data/dummy_user_data';
import { IUserBasic, IUserData } from './interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private data: IUserData[];
  private nextId: number;
  constructor() {
    this.data = initialUserData;
    let maxId = 0;
    initialUserData.forEach(
      (user) => (maxId = user.userId > maxId ? user.userId : maxId),
    );
    this.nextId = maxId + 1;
  }
  public getAllUsers() {
    return this.data;
  }
  public getUserById(id: number) {
    for (const user of this.data) {
      if (user.userId === id) return user;
    }
    return null;
  }
  public add(newUserBasic: IUserBasic) {
    try {
      for (const user of this.data) {
        if (newUserBasic.username === user.username) {
          console.log('username have existed');
          return false;
        }
      }
      this.data = [...this.data, { ...newUserBasic, userId: this.nextId }];
      this.nextId++;
      return true;
    } catch (err) {
      console.log(`cant create new user! ERR: ${err}`);
      return false;
    }
  }
  public remove(id: number) {
    try {
      const oldDataLength = this.data.length;
      this.data = this.data.filter((user) => user.userId !== id);
      if (this.data.length === oldDataLength) {
        console.log('cant remove user, maybe wrong id');
        return false;
      }
      return true;
    } catch (err) {
      console.log(`cant remove user, ERR: ${err}`);
    }
  }
}
