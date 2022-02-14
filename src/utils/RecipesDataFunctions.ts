import { recipes } from '../data/HomeScreensDummyData';
import Recipe from '../models/RecipeModel';

export interface CheckedFilters {
  type: number[];
  difficulty: number[];
  ingredient: number[];
  [key: string]: number[];
}

export const getFilteredRecipes = (checkedFilters: CheckedFilters) => {
    let filteredRecipes: Recipe[] = [];
    filteredRecipes = recipes.filter((item) => {
        let itemShouldBeReturned = true;
        for (let keyValue of Object.keys(checkedFilters)) {
            let itemValueToFilter = typeof item[keyValue] === 'number' ? Number(item[keyValue]) : 10;
            if (checkedFilters[keyValue].length > 0) {
                if (checkedFilters[keyValue].includes(itemValueToFilter)) {
                    itemShouldBeReturned = true;
                } else {
                    itemShouldBeReturned = false;
                    break;
                }
            }
        }
        return itemShouldBeReturned;
    });
    return filteredRecipes;
};

export const getFilteredRecipesLength = (checkedFilters: CheckedFilters) => {
    let filteredRecipes = getFilteredRecipes(checkedFilters);
    return filteredRecipes.length;
};
