import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { postPublicRegister } from './src/api/public/postRegister.js';
import { postPublicLogin } from './src/api/public/postLogin.js';
import { getLogin } from './src/api/public/getLogin.js';
import { cookieParser } from './src/middleware/cookieParser.js';
import { userData } from './src/middleware/userData.js';
import { postAdminCategories } from './src/api/admin/categories/postCategories.js';
import { isAdmin } from './src/middleware/isAdmin.js';
import { getPublicCategories } from './src/api/public/getCategories.js';
import { getAdminCategories } from './src/api/admin/categories/getCategories.js';
import { isPublic } from './src/middleware/isPublic.js';
import { putAdminCategories } from './src/api/admin/categories/putCategories.js';
import { deleteAdminCategories } from './src/api/admin/categories/deleteCategories.js';
import { getPublicMovies } from './src/api/public/getMovies.js';
import { getAdminMovies } from './src/api/admin/movies/getMovies.js';
import { postAdminMovies } from './src/api/admin/movies/postMovies.js';
import { putAdminMovies } from './src/api/admin/movies/putMovies.js';
import { deleteAdminMovies } from './src/api/admin/movies/deleteMovies.js';
import { PORT } from './src/env.js';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(helmet());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5520',
}));
app.use(cookieParser);
app.use(userData);

app.get('/', (req, res) => {
    return res.json({
        status: 'success',
        message: 'Server is running',
    });
});

app.post('/api/register', isPublic, postPublicRegister);
app.post('/api/login', isPublic, postPublicLogin);

app.get('/api/categories', getPublicCategories);
app.get('/api/movies', getPublicMovies);

app.get('/api/login', isAdmin, getLogin);

app.get('/api/admin/categories', isAdmin, getAdminCategories);
app.post('/api/admin/categories', isAdmin, postAdminCategories);
app.put('/api/admin/categories/:original_url', isAdmin, putAdminCategories);
app.delete('/api/admin/categories/:url', isAdmin, deleteAdminCategories);

app.get('/api/admin/movies', isAdmin, getAdminMovies);
app.post('/api/admin/movies', isAdmin, postAdminMovies);
app.put('/api/admin/movies/:original_url', isAdmin, putAdminMovies);
app.delete('/api/admin/movies/:url', isAdmin, deleteAdminMovies);

app.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).send('Server error');
});

app.get('*error', (req, res) => {
    return res.json({
        status: 'error',
        message: 'No such route',
    });
});

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
});