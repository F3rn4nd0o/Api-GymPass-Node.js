import fastifyCors from '@fastify/cors'
import { app } from './app'
import { env } from './env'

app.register(fastifyCors)

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
