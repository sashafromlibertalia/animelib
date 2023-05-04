import {
  createBrowserRouter,
  RouterProvider as RouterDOMProvider,
} from "react-router-dom";
import React, { lazy } from "react";
import { animeModel } from "@entities/anime";

const IndexPage = lazy(() => import("@pages/index"));
const AnimePage = lazy(() => import("@pages/anime"));
const Error404Page = lazy(() => import("@pages/errors/404"));
const LoginPage = lazy(() => import("@pages/auth/login"));
const SignupPage = lazy(() => import("@pages/auth/signup"));

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
    path: "auth/login",
    element: <LoginPage />,
  },
  {
    path: "auth/signup",
    element: <SignupPage />,
  },
  {
    path: "*",
    element: <Error404Page />,
  },
]);

export const RouterProvider = () => {
  return <RouterDOMProvider router={router} />;
};
