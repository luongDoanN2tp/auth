import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { IUserBasic } from './interfaces';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public create(newUserBasic: IUserBasic) {
    return this.userRepository.add(newUserBasic);
  }

  public remove(id: number) {
    return this.userRepository.remove(id);
  }

  public verifyId(userBasic: IUserBasic) {
    for (const checkingUser of this.userRepository.getAllUsers()) {
      if (userBasic.username !== checkingUser.username) continue;
      if (userBasic.password !== checkingUser.password) continue;
      return checkingUser.userId;
    }
    return -1;
  }
}
