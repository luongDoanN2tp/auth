import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../models/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

const keyPair = jwtConstants.createSecret();
console.log(keyPair);
@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      // secret: jwtConstants.secret,
      privateKey: keyPair.privateKey,
      publicKey: keyPair.publicKey,
      signOptions: { expiresIn: '1h', algorithm: 'RS256' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
