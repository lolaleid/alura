import { MongoClient } from "mongodb";

export default async function conectarAoBanco(stringConexao) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        console.log('Conectando ao cluster do banco de dados...');
        await mongoClient.connect();
        console.log('Conectado ao cluster do banco de dados com sucesso!');

        return mongoClient;
    } catch (erro) {
        console.error('Falha ao conectar ao cluster do banco de dados. Erro: ', erro);
        process.exit();
        //...
    }
}