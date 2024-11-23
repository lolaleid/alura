import { buscarTodosOsPosts } from "../models/postsModel.js";

export async function listarPosts(req, res) {
    const posts = await buscarTodosOsPosts(); // Busca os posts
    res.json(posts).status(200); // Envia os posts como resposta
}