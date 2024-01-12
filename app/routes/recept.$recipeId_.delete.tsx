import { redirect, type ActionFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant"
import { deleteRecipe } from "~/data";

export const action = async ({ params }: ActionFunctionArgs) => {
  invariant(params.recipeId, "No recipeId provided");
  await deleteRecipe(params.recipeId);
  return redirect("/");
}