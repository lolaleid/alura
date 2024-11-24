import express from 'express'; // Importa o framework Express
import multer from 'multer';
import cors from 'cors';
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from '../controllers/postsController.js';

const corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200,
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ dest: "./uploads", storage });
const routes = (app) => {
    app.use(express.json());// Habilita o parsing de JSON
    app.use(cors(corsOptions));
    app.get('/posts', listarPosts);// Rota para buscar todos os posts
    app.post('/posts', postarNovoPost);// Rota para criar um novo post
    app.post('/upload', upload.single("imagem"), uploadImagem);
    app.put('/upload/:id', atualizarNovoPost);// Rota para atualizar um post
}

export default routes;

