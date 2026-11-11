import { Module } from '@nestjs/common';
import { UsuarioController } from '@usuario/usuario.controller.js';
import { UsuarioService } from '@usuario/usuario.service.js';
import { UsuarioPort } from '@usuario/ports/usuario.port.js';
import { UsuarioMysqlAdapter } from '@usuario/adapters/usuario-mysql.adapter.js';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsuarioModel } from '@usuario/entities/usuario.model.js';

@Module({
  imports: [SequelizeModule.forFeature([UsuarioModel])],
  controllers: [UsuarioController],
  providers: [
    UsuarioService,
    {
      provide: UsuarioPort,
      useClass: UsuarioMysqlAdapter,
    },
  ],
})
export class UsuarioModule {}
