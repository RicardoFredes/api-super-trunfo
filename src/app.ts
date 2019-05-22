import express from 'express';
import * as  cardsController from './controllers/cartas';

const app = express();
const cors = require('cors');

app.use(cors());
app.get('/cartas', cardsController.index);
app.get('/cartas/sorteio', cardsController.random);

export default app;