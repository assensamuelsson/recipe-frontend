import { Link, json, useLoaderData } from "@remix-run/react";
import { getAllRecipes } from "~/data";

export default function Index () {
  const { recipes } = useLoaderData<typeof loader>();

  return (
    <nav>
      { recipes.length ? (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id}>
              <Link to={`recept/${recipe.id}`}>
                {recipe.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : <p>Inga recept än</p>}
    </nav>
  )
}


export const loader = async () => {
  const recipes = await getAllRecipes();
  return json({ recipes });
}