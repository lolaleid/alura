import conectarAoBanco from '../config/dbConfig.js'; // Conecta ao banco de dados

const conexao = await conectarAoBanco(process.env.STRING_DE_CONEXAO); // Estabelece conexão com o banco de dados

export async function buscarTodosOsPosts() { // Função para buscar todos os posts
    const db = conexao.db('imersao-instabytes'); // Seleciona o banco de dados
    const colecao = db.collection('posts'); // Seleciona a coleção de posts
    return await colecao.find().toArray(); // Busca e retorna todos os posts
}