import { database } from './database.js';
import express from 'express';
import logger from 'morgan';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger('dev'));
app.use('/', express.static('client'));
//code all taken from previous work, used in hw6.

//endpoints:



app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});