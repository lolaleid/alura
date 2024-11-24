import fs from 'fs';
import { atualizarPost, buscarTodosOsPosts, criarPost } from "../models/postsModel.js";

export async function listarPosts(req, res) {
    const posts = await buscarTodosOsPosts(); // Busca os posts
    res.json(posts).status(200); // Envia os posts como resposta
}

export async function postarNovoPost(req, res) {
    const novoPost = req.body; // Obtem o novo post da requisição
    try {
        const postCriado = await criarPost(novoPost);
        res.status(201).json(postCriado);// Envia o novo post como resposta
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
        res.status(201).json(postCriado); // Envia o novo post como resposta
    } catch (erro) {
        console.error('Erro ao criar o post:', erro); // Loga erro no console
        res.status(500).json({ erro: 'Erro ao criar o post' }); // Retorna erro ao cliente
    }
}

export async function atualizarNovoPost(req, res) {
    const id = req.params.id; // Obtem o novo post da requisição
    const urlImagem = `http://localhost:3000/${id}.png`;
    const post = {
        imgUrl: urlImagem,
        descricao: req.body.descricao,
        alt: req.body.alt
    }; // Obtem o novo post da requisição
    try {
        const postCriado = await atualizarPost(id, post);
        res.status(201).json(postCriado);// Envia o novo post como resposta
    } catch (erro) {
        console.error('Erro ao atualizar o post:', erro);
        res.status(500).json({ erro: 'Erro ao atualizar o post' });
    }
}
