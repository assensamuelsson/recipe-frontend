import { json, useLoaderData } from "@remix-run/react";
import RecipeLink from "~/components/recipe-link";
import { getAllRecipes } from "~/data";

export default function Index () {
  const { recipes } = useLoaderData<typeof loader>();

  return (
    <nav className="recipe-list">
      { recipes.length ? (
        recipes.map(recipe => (
            <RecipeLink key={recipe.id} id={recipe.id} name={recipe.name} />
        ))
      ) : <p>Inga recept än</p>}
    </nav>
  )
}


export const loader = async () => {
  const recipes = await getAllRecipes();
  return json({ recipes });
}