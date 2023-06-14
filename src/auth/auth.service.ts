import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../models/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { IUserBasic } from '../models/user/interfaces';
import { PayloadDto } from './dto/payload.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string) {
    const userBasic: IUserBasic = { username: username, password: password };
    const id = this.userService.verifyId(userBasic);
    if (id < 0) {
      return {
        message: 'wrong username or password',
        username: username,
        password: password,
      };
    }
    const payload: PayloadDto = { id: id, username: username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
