import { CorridasService } from '@corridas/corridas.service.js';
import { Controller, Get, Post } from '@nestjs/common';

@Controller('corrida')
export class CorridasController {
  constructor(private readonly corridasService: CorridasService) {}

  @Post('cadastro')
  async cadastrarCorrida() {
    await this.corridasService.cadastrarCorrida();
  }

  @Get('consulta')
  async consultarCorridas() {
    await this.corridasService.consultarCorridas();
  }
}
