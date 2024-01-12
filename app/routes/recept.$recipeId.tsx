import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getRecipe } from "~/data";

export default function Recipe() {
  const { recipe } = useLoaderData<typeof loader>();

  return (
    <article>
      <h1>{recipe.name}</h1>
      { recipe.url && <a href={recipe.url}>Länk till receptet</a> }
      { recipe.description && <p>{recipe.description}</p> }
    </article>
  )
}

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.recipeId, "No recipeId provided");
  const recipe = await getRecipe(params.recipeId);
  return json({ recipe });
};
