type Recipe = {
  id: string;
  name: string;
  url?: string;
  description?: string;
}

const backendOrigin = 'http://192.168.0.2:5021';

export const getAllRecipes = async (): Promise<Recipe[]> => {
  const response = await fetch(`${backendOrigin}/recipes`);
  const recipes = await response.json();
  return recipes;
};