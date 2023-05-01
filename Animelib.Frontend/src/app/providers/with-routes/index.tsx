import {
  createBrowserRouter,
  RouterProvider as RouterDOMProvider,
} from "react-router-dom";
import React, { lazy } from "react";
import { animeModel } from "@entities/anime";

const IndexPage = lazy(() => import("@pages/index"));
const AnimePage = lazy(() => import("@pages/anime"));
const Error404Page = lazy(() => import("@pages/errors/404"));

const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      return animeModel.effects.fetchAllAnimeFx(1);
    },
    element: <IndexPage />,
  },
  {
    path: "/anime/:slug",
    loader: async ({ params }) => {
      return animeModel.effects.fetchAnimeFx(params.slug ?? "");
    },
    errorElement: <Error404Page />,
    element: <AnimePage />,
  },
  {
    path: "*",
    element: <Error404Page />,
  },
]);

export const RouterProvider = () => {
  return <RouterDOMProvider router={router} />;
};
