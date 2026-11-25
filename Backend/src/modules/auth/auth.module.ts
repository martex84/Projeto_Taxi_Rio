import { AuthGuard } from '@modules/auth/auth.guard.js';
import { AuthService } from '@modules/auth/auth.service.js';
import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      global: true,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get<number>('JWT_EXPIRES_IN', 15),
        },
      }),
    }),
  ],
  providers: [AuthGuard, AuthService],
  exports: [AuthGuard, AuthService],
})
export class AuthModule {}
