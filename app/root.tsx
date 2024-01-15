import { LinksFunction } from "@remix-run/node";
import {
  Form,
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  Outlet,
  Link,
} from "@remix-run/react";

import appStylesHref from "~/app.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export default function App() {
  return (
    <html lang="sv">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="title">
          <Link to="/">
            <h1>Mumsiga recept</h1>
          </Link>
          <div id="header">
            <Form id="search-form" role="search">
              <input
                id="q"
                aria-label="Sök recept"
                placeholder="Sök mumsiga recept"
                type="search"
                name="q"
              ></input>
            </Form>
            <Link to="/nytt">
              <button className="button button--primary">Nytt</button>
            </Link>
          </div>
        </div>
        <div id="detail">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
