import {
  createBrowserRouter,
  RouterProvider as RouterDOMProvider,
} from "react-router-dom";
import { lazy } from "react";

const IndexPage = lazy(() => import("@pages/index"));
const AnimePage = lazy(() => import("@pages/anime"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/anime/:slug",
    element: <AnimePage />,
  },
]);

export const RouterProvider = () => {
  return <RouterDOMProvider router={router} />;
};
