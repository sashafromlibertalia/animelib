import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { lazy } from "react";
import { animeModel } from "@entities/anime";

const IndexPage = lazy(() => import("@pages/index"));
const AnimeBySlugPage = lazy(() => import("@pages/anime/[slug]"));
const Error404Page = lazy(() => import("@pages/404"));
const LoginPage = lazy(() => import("@pages/auth/login"));
const SignupPage = lazy(() => import("@pages/auth/signup"));
const UserByIdPage = lazy(() => import("@pages/user/[id]"));

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
    element: <AnimeBySlugPage />,
  },
  {
    path: "/user/:id",
    errorElement: <Error404Page />,
    element: <UserByIdPage />,
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

export const RouterDOMProvider = () => {
  return <RouterProvider router={router} />;
};
