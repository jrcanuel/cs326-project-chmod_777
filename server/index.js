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
app.post('/add', async (request, response) => {             //request that adds the ingredient passed via the request body from the server's currIngredients json file
    const options = request.body;
    await database.addIngredient(options.ingredient);
    response.json();
});

app.delete('/remove', async (request, response) => {        //request that removes the ingredient passed via the request body from the server's currIngredients json file
    const options = request.body;
    await database.removeIngredient(options.ingredient);
    response.json();
});

app.get('/readD', async (request, response) => {            //request that gets the list of drinks from the server's drinks json file and returns the array within it
    const data = await database.getDrinks();
    response.json(data);
});

app.get('/readCI', async (request, response) => {           //request that does the same as above, except it returns the currIngredient json file's array instead
    const data = await database.getIngredients();
    response.json(data);
});



app.listen(port, () => {                                            //starts the server
    console.log(`Server started on http://localhost:${port}`);
});