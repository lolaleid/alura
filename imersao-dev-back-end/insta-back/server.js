import express from 'express'; // Importa o framework Express
import routes from './src/routes/postsRoutes.js';

const app = express(); // Cria uma aplicação Express
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => { // Inicia o servidor na porta 3000
    console.log('Servidor iniciado');
});

// function buscarPostPorId(id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id);
//     });
// }

// app.get('/posts/:id', (req, res) => {
//     const index = buscarPostPorId(req.params.id);
//     res.status(200).json(posts[index]);
// });