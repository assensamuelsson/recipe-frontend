import { LoaderFunction, json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getRecipe } from "~/data";

export default function Recipe() {
  const { recipe } = useLoaderData<typeof loader>();

  return (
    <>
      <article>
        <h1>{recipe.name}</h1>
        { recipe.url && <a href={recipe.url}>Länk till receptet</a> }
        { recipe.description && <p>{recipe.description}</p> }
      </article>
      <div>
        <Form
          action="delete"
          method="post"
          onSubmit={(event) => {
            const response = confirm(
              "Vill du ta bort receptet?"
            );
            if (!response) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit">Ta bort</button>
        </Form>
      </div>
    </>
  )
}

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.recipeId, "No recipeId provided");
  const recipe = await getRecipe(params.recipeId);
  return json({ recipe });
};
