import {readFile, writeFile} from 'fs/promises';

class Database {
    constructor() {
        this.path = 'drinks.json';
    }

    async addIngredient(ingredient) {
        const data = await this.read();
        data.push(ingredient);
        await this.write(data);
    }

    async removeIngredient(ingredient) {
        const data = await this.read();
        data = data.filter(element != ingredient);
        await this.write(data);
    }

    async getDrinks() {
        const data = await this.read();
        return data;
    }

    async read() {
        try {
        const data = await readFile(this.path, 'utf8');
        return JSON.parse(data);
        } catch (error) {
        return {ingredients: []};
        }
    }

    async write(data) {
        await writeFile(this.path, JSON.stringify(data), 'utf8');
    }
}

const database = new Database();

export {database};