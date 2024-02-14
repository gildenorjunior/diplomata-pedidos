# Diplomata Pedidos

### Estrutura de pastas
**src/**: Esta é a pasta principal onde você mantém todo o código-fonte da sua aplicação.

**controllers/**: Esta pasta contém controladores que lidam com a lógica de negócios para cada recurso da sua API. Por exemplo, userController.js pode conter funções para manipular solicitações relacionadas a usuários.

**routes/**: Aqui você define as rotas da sua API. Cada arquivo de rota pode lidar com as solicitações HTTP para um determinado recurso. Por exemplo, userRoutes.js pode definir rotas para CRUD de usuários.

**models/**: Contém modelos que representam os dados em seu banco de dados. Por exemplo, userModel.js pode definir o esquema e as operações de banco de dados relacionadas a usuários.

**db/**: Aqui você mantém o código relacionado à conexão e configuração do banco de dados. postgres.js pode conter a configuração da conexão com o PostgreSQL usando uma biblioteca como pg.

**app.js**: Este é o arquivo principal onde você configura e inicializa sua aplicação Fastify, definindo rotas, middleware, etc.

**config/**: Esta pasta pode conter arquivos de configuração para diferentes ambientes, como desenvolvimento, teste e produção.

**config.js**: Este arquivo pode conter variáveis de configuração, como URL do banco de dados, portas, chaves de API, etc.
package.json: Arquivo de manifesto do npm que lista todas as dependências do projeto e scripts de execução.