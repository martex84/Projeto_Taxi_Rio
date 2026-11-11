import { CorridasMysqlAdapter } from '@corridas/adapters/corridas-mysql.adapter.js';
import { CorridasController } from '@corridas/corridas.controller.js';
import { CorridasService } from '@corridas/corridas.service.js';
import { CorridasModel } from '@corridas/entities/corridas.model.js';
import { CorridasPort } from '@corridas/ports/corridas.port.js';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([CorridasModel])],
  controllers: [CorridasController],
  providers: [
    CorridasService,
    {
      provide: CorridasPort,
      useClass: CorridasMysqlAdapter,
    },
  ],
})
export class CorridasModule {}
