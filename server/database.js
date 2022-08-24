import {readFile, writeFile} from 'fs/promises';

class Database {
    constructor() {
        this.D = 'drinks.json'; 
        this.CI = 'currIngredients.json'; 
    }

    async addIngredient(ingredient) {
        const data = await this.read(this.CI);
        data.push(ingredient);
        await this.write(data, this.CI);
    }

    async removeIngredient(ingredient) {
        const data = await this.read(this.CI);
        data = data.filter(element != ingredient);
        await this.write(data, this.CI);
    }

    async getDrinks() {
        const data = await this.read(this.D);
        return data;
    }

    async read(path) {
        try {
        const data = await readFile(path, 'utf8');
        return JSON.parse(data);
        } catch (error) {
        return {ingredients: []};
        }
    }

    async write(data, path) {
        await writeFile(path, JSON.stringify(data), 'utf8');
    }
}

const database = new Database();

export {database};