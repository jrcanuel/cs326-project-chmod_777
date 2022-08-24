import {readFile, writeFile} from 'fs/promises';

class Database {
    constructor() {
        this.D = 'drinks.json';                 //declare some path variables to make code more readable
        this.CI = 'currIngredients.json'; 
    }

    async addIngredient(ingredient) {           //adds ingredient to json file
        const data = await this.read(this.CI);      //read the file
        data.push(ingredient);                      //edit the data (push ingredient into array)
        await this.write(data, this.CI);            //overwrite the data with the new data
    }

    async removeIngredient(ingredient) {        //removes ingredient from json file
        let data = await this.read(this.CI);        //same process as above;
        data = data.filter((i) => {                 //only fancy thing is we filter through the data rather than a simple operation like array.push()
            return i !== ingredient;
        });
        await this.write(data, this.CI);            //overwrite the data with the newly filtered data that is the original data but with the ingredient removed
    }

    async getDrinks() {                             //very simply reads the drinks json object and returns the array inside
        const data = await this.read(this.D);
        return data;
    }

    async getIngredients() {                        //same as above get method, but instead returns the array from inside the currIngredients file
        const data = await this.read(this.CI);
        return data;
    }

    async read(path) {                             //method that reads from the parameter path, and returns the data. if it fails, return error object (for dev log / debug stuff)
        try {
        const data = await readFile(path, 'utf8');
        return JSON.parse(data);
        } catch (error) {
        return {'status': 'error'};
        }
    }

    async write(data, path) {
        await writeFile(path, JSON.stringify(data), 'utf8');    //write data parameter to path file
    }
}

const database = new Database();

export {database};