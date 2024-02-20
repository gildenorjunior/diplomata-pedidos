import { sql } from '../../db/db-config.js'

class UserRepository {
    async findAll() {
        try {
            console.log('entrou no repository')
            let pedidos = await sql`select * from pedidos`
    
            console.log('pedidos: ', pedidos);
    
            return pedidos;   
        } catch (error) {
            console.error('Erro ao executar consulta SQL', error);
            throw error;
        }
    }
}

export default new UserRepository();