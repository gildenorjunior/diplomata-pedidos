import UserService from '../service/user.service.js'

class UserController {
    async findAll(request, response) {
        console.log('entrou no controller')
        const data = await UserService.findAll();
        response
            .code(200)
            .header(`Content-Type`, `application/json; charset=utf-8`)
            .send({
                meta: {
                    code: 200,
                    message: `Ok`
                }, data
            });
    }

    // async create(request, response) {
    //     await UserService.create(request.body);

    //     response
    //         .code(201)
    //         .header(`Content-Type`, `application/json; charset=utf-8`)
    //         .send({
    //             meta: {
    //                 code: 201,
    //                 message: `Created`
    //             }
    //         })
    // }

    // async update(request, response) {
    //     await UserService.update(request.params.id, request.body);

    //     response
    //         .code(204)
    //         .header(`Content-Type`, `application/json; charset=utf-8`)
    //         .send({
    //             meta: {
    //                 code: 204,
    //                 message: `No Content`
    //             }
    //         })
    // }

    // async remove(request, response) {
    //     await UserService.delete(request.params.id);

    //     response
    //         .code(204)
    //         .header(`Content-Type`, `application/json/ charset=utf-8`)
    //         .send({
    //             meta: {
    //                 code: 204,
    //                 message: `No Content`
    //             }
    //         })

    // }
}

export default new UserController();