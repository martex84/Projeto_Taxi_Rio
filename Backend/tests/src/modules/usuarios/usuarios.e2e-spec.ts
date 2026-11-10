import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { App } from 'supertest/types.js';
import request from 'supertest';
import { UsuarioModule } from '@usuario/usuario.module.js';

describe('UsuarioController (e2e)', () => {
  let app: INestApplication<App>;
  let url = '/usuario/';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsuarioModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/login (GET)', () => {
    return request(app.getHttpServer())
      .get(url + 'login')
      .expect(200);
  });

  it('/login (POST)', () => {
    return request(app.getHttpServer())
      .post(url + 'cadastro')
      .expect(201);
  });

  afterEach(async () => {
    if (app) await app.close();
  });
});
