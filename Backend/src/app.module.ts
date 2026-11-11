import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsuarioModule } from '@usuario/usuario.module.js';
import { CorridasModule } from '@corridas/corridas.module.js';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsuarioModel } from '@usuario/entities/usuario.model.js';

const captarEnv = (env: string, valorLocal: string) => {
  return new ConfigService().get<string>(env, valorLocal);
};

@Module({
  imports: [
    UsuarioModule,
    CorridasModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: captarEnv('DB_HOST', 'localhost'),
      port: Number.parseInt(captarEnv('DB_PORT', '3306')),
      username: captarEnv('DB_USER', 'dev_user'),
      password: captarEnv('DB_PASS', 'dev_password'),
      database: captarEnv('DB_NAME', 'dbrj'),
      models: [UsuarioModel],
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
