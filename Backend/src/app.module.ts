import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsuarioModule } from '@usuario/usuario.module.js';
import { CorridasModule } from '@corridas/corridas.module.js';

@Module({
  imports: [UsuarioModule, CorridasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
