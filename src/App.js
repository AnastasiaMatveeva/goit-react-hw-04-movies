import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./views/HomePage.js";
import NavBar from "./components/NavBar/NavBar.js";
import LoaderView from "./components/Loader/Loader.js";

import "./App.css";

const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage.js" /* webpackChunkName: "movie-details-page" */
  )
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage.js" /* webpackChunkName: "movie-page" */)
);

function App() {
  return (
    <>
      <Suspense fallback={<LoaderView />}>
        <NavBar />
        <Switch>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies">
            <MoviesPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
