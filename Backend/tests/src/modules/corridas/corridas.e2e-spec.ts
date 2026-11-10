import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { App } from 'supertest/types.js';
import request from 'supertest';
import { CorridasModule } from '@corridas/corridas.module.js';

describe('CorridasModule (e2e)', () => {
  let app: INestApplication<App>;
  let url = '/corrida/';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CorridasModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/consulta (GET)', () => {
    return request(app.getHttpServer())
      .get(url + 'consulta')
      .expect(200);
  });

  it('/cadastro (POST)', () => {
    return request(app.getHttpServer())
      .post(url + 'cadastro')
      .expect(201);
  });

  afterEach(async () => {
    if (app) await app.close();
  });
});
