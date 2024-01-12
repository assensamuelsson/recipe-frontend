import type { ActionFunctionArgs } from "@remix-run/node";
import { Form, redirect } from "@remix-run/react";
import { RecipeWithoutId, createRecipe } from "~/data";

export default function Nytt() {
  return (
    <Form method="post">
      <p>
        <label htmlFor="name">Namn</label>
        <input id="name" name="name" type="text" />
      </p>
      <p>
        <label htmlFor="url">Länk</label>
        <input id="url" name="url" type="url" />
      </p>
      <p>
        <label htmlFor="description">Beskrivning</label>
        <input id="description" name="description" type="text" />
      </p>
      <p>
        <button type="submit">Spara</button>
      </p>
    </Form>
  )
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const recipe = Object.fromEntries(formData.entries()) as RecipeWithoutId;
  await createRecipe(recipe);
  return redirect("/");
}