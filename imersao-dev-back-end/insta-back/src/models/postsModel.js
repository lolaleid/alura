import { ObjectId } from 'mongodb';
import conectarAoBanco from '../config/dbConfig.js'; // Conecta ao banco de dados

const conexao = await conectarAoBanco(process.env.STRING_DE_CONEXAO); // Estabelece conexão com o banco de dados
const db = conexao.db('imersao-instabytes'); // Seleciona o banco de dados
const colecao = db.collection('posts'); // Seleciona a coleção de posts


export async function buscarTodosOsPosts() { // Função para buscar todos os posts
    return await colecao.find().toArray(); // Busca e retorna todos os posts
}

export async function criarPost(novoPost) { // Função para criar um novo post
    return await colecao.insertOne(novoPost); // Insere o novo post no banco de dados
}

export async function atualizarPost(id, novoPost) { // Função para criar um novo post
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({ _id: new ObjectId(objID) }, { $set: novoPost }); // Insere o novo post no banco de dados
}