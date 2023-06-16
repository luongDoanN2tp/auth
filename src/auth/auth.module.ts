import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../models/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { generateKeyPair } from './util/generateKeyPair';

generateKeyPair(
  'src/auth/store/public_key.pem',
  'src/auth/store/private_key.pem',
);
@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '1m' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
