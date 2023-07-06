import request from 'supertest'
import { app } from '@/app'
import { describe, it, expect, beforeAll, afterAll } from 'vitest'

describe('Register (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to register', async () => {
    const reponse = await request(app.server).post('/users').send({
      name: 'Jhon Doe',
      email: 'jhon.doe@exemple.com',
      password: '123456',
    })

    expect(reponse.statusCode).toEqual(201)
  })
})
