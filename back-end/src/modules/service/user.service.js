import UserRepository from '../repository/user.repository.js'
import { UserDto } from '../dto/user.dto.js'

class UserService {
    async findAll() {
        console.log('entrou no service')
        return await UserRepository.findAll();
    }

    // async findOne(id) {
    //     return await UserRepository.findOne(id);
    // }

    // async create(data) {
    //     let userDto = new UserDto();
    //     userDto.name = data.name;
    //     userDto.address = data.address;

    //     return await UserRepository.create(userDto);
    // }

    // async update(id, data) {
    //     let userDto = new UserDto();

    //     userDto.name = data.name;
    //     userDto.address = data.address;

    //     return await UserRepository.update(id, userDto);
    // }

    // async delete(id) {
    //     return await UserRepository.delete(id);
    // }
}

export default new UserService();