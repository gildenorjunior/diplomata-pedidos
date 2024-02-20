import { sql } from './db-config.js';

sql`DROP TABLE IF EXISTS videos`.then(() => {
    console.log('Tabela dropada!');
});

sql`
    CREATE TABLE orcamentos (
        numero_orcamento SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        telefone VARCHAR(20),
        endereco VARCHAR(255),
        descricao TEXT,
        quantidade INTEGER,
        total NUMERIC(10, 2),
        data DATE,
        valor_entrada NUMERIC(10, 2),
        forma_entrada VARCHAR(50),
        valor_restante NUMERIC(10, 2),
        forma_restante VARCHAR(50),
        entrega DATE
    );
`.then(() => {
    console.log("Tabela criada!");
});