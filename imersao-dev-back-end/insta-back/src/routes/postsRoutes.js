import express from 'express'; // Importa o framework Express
import { listarPosts } from '../controllers/postsController.js';

const routes = (app) => {
    app.use(express.json());// Habilita o parsing de JSON
    app.get('/posts', listarPosts);// Rota para buscar todos os posts
}

export default routes;

