import { Link } from "@remix-run/react";

interface RecipeLinkProps {
    id: string,
    name: string,
}

export default function RecipeLink({ id, name }: RecipeLinkProps) {
  return (
    <Link className="recipe-link" to={`recept/${id}`}>
      {name}
    </Link>
  )
}
