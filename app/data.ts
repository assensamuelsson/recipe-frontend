export type RecipeWithoutId = {
  name: string;
  url?: string;
  description?: string;
}

export type RecipeWithId = RecipeWithoutId & {
  id: string;
}

const backendOrigin = process.env.BACKEND_ORIGIN;

export const getAllRecipes = async (): Promise<RecipeWithId[]> => {
  const response = await fetch(`${backendOrigin}/recipes`);
  const recipes = await response.json();
  return recipes;
};

export const getRecipe = async (id: string): Promise<RecipeWithId> => {
  const response = await fetch(`${backendOrigin}/recipes/${id}`);
  const recipes = await response.json();
  return recipes;
};

export const createRecipe = async (recipe: RecipeWithoutId): Promise<RecipeWithId> => {
  const response = await fetch(`${backendOrigin}/recipes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipe)
  });
  const result = await response.json() as RecipeWithId;
  return result;
};