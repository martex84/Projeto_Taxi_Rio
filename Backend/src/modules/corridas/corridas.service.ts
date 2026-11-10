import { CorridasPort } from '@corridas/ports/corridas.port.js';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CorridasService {
  constructor(private readonly corridasPort: CorridasPort) {}

  async consultarCorridas() {
    await this.corridasPort.consultarCorridas();
  }

  async cadastrarCorrida() {
    await this.corridasPort.cadastrarCorrida();
  }
}
