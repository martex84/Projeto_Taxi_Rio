export abstract class CorridasPort {
  abstract consultarCorridas(): Promise<void>;

  abstract cadastrarCorrida(): Promise<void>;
}
