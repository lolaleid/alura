import fs from 'fs';
import { atualizarPost, buscarTodosOsPosts, criarPost } from "../models/postsModel.js";
import gerarDescricaoComGemini from '../services/geminiService.js';

export async function listarPosts(req, res) {
    const posts = await buscarTodosOsPosts(); // Busca os posts
    res.json(posts).status(200); // Envia os posts como resposta
}

export async function postarNovoPost(req, res) {
    const novoPost = req.body; // Obtem o novo post da requisição
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);// Envia o novo post como resposta
    } catch (erro) {
        console.error('Erro ao criar o post:', erro);
        res.status(500).json({ erro: 'Erro ao criar o post' });
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: '',
        imgUrl: req.file.originalname,
        alt: ''
    }; // Obtém o novo post da requisição
    try {
        const postCriado = await criarPost(novoPost); // Cria um novo post no banco de dados
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`; // Define o caminho para a imagem com o ID do post
        fs.renameSync(req.file.path, imagemAtualizada); // Renomeia o arquivo para incluir o ID do post
        res.status(200).json(postCriado); // Envia o novo post como resposta
    } catch (erro) {
        console.error('Erro ao criar o post:', erro); // Loga erro no console
        res.status(500).json({ erro: 'Erro ao criar o post' }); // Retorna erro ao cliente
    }
}

export async function atualizarNovoPost(req, res) {
    const id = req.params.id; // Obtem o novo post da requisição
    const urlImagem = `http://localhost:3000/${id}.png`;
    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`);// Le o buffer da imagem
        const descricao = await gerarDescricaoComGemini(imgBuffer);// Gera a descricao com o gemini
        const post = {
            imgUrl: urlImagem,
            descricao: descricao,
            alt: descricao
        }; // Obtem o novo post da requisição
        const postCriado = await atualizarPost(id, post); // Atualiza o post no banco de dados
        res.status(200).json(postCriado);// Envia o novo post como resposta
    } catch (erro) {
        console.error('Erro ao atualizar o post:', erro);
        res.status(500).json({ erro: 'Erro ao atualizar o post' });
    }
}
