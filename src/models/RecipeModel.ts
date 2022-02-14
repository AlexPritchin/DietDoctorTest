class Recipe {
    title: string;
    imageURL: string;
    type: number;
    difficulty: number;
    ingredient: number;
    [key: string]: string | number;

    constructor(title: string, imageURL: string, type: number,
        difficulty: number,
        ingredient: number,) {
        this.title = title;
        this.imageURL = imageURL;
        this.type = type;
        this.difficulty = difficulty;
        this.ingredient = ingredient;
    }
}

export default Recipe;