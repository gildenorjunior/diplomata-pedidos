import UserController from './src/modules/controller/user.controller.js';
import { routes } from './src/routes/api.js'

import pkg from 'fastify';
const { fastify } = pkg;

const server  = fastify();

const PORT = process.env.PORT ? Number(process.env.PORT) : 3333;

export const createServer = async () => {
    console.log('entrou aqui')
    try {
        // console.log('server: ', JSON.stringify(server));
        server.get('/pedidos', UserController.findAll)
        await routes(server);

        await server.listen({ port: PORT, host: '0.0.0.0' })
        server.log.info(`Servidor rodando na porta: ${PORT}`)
    } catch (error) {
        server.log.error('Error: ', error);
        process.exit(1)
    }
}