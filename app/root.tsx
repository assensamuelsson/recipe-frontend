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
        <div id="sidebar">
          <Link to="/">
            <h1>Mumsiga recept</h1>
          </Link>
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
            <Link to="/nytt">
              <button >Nytt</button>
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
