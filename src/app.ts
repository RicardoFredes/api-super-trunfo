import path from 'path';
import express from 'express';
import * as  cardsController from './controllers/cartas';

const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/views/index.html')));
app.get('/cartas', cardsController.index);
app.get('/cartas/sorteio', cardsController.random);

export default app;