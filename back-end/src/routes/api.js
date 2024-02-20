import UserController from '../modules/controller/user.controller.js'

export async function routes(fastify) {
    console.log('entrou no routes')
    const controller = UserController.findAll('', '');
    fastify.get('/pedidos', controller);
    // fastify.get('/api/v1/pedidos/:id', UserController.findOne);
    // fastify.post('/api/v1/pedidos', UserController.create);
    // fastify.patch('/api/v1/pedidos/:id', UserController.update);
    // fastify.delete('/api/v1/pedidos/:id', UserController.remove);
}