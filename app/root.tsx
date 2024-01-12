import {
  Form,
  Links,
  LiveReload,
  Meta,
  Link,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";

import { getAllRecipes  } from "./data";

export default function App() {
  const { recipes } = useLoaderData<typeof loader>();
  const navigation = useNavigation();

  return (
    <html lang="sv">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="sidebar">
          <h1>Mumsiga recept</h1>
          <div>
            <Form id="search-form" role="search">
              <input
                id="q"
                aria-label="Sök recept"
                placeholder="Sök mumsiga recept"
                type="search"
                name="q"
              ></input>
            </Form>
            <Form method="post">
              <button type="submit">Nytt</button>
            </Form>
          </div>
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
        </div>
        <div id="detail" className={navigation.state === "loading" ? "loading" : ""}>
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const loader = async () => {
  const recipes = await getAllRecipes();
  return json({ recipes });
}