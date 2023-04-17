import {
  createBrowserRouter,
  RouterProvider as RouterDOMProvider,
} from "react-router-dom";
import { lazy } from "react";

const IndexPage = lazy(() => import("@pages/index"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
]);

export const RouterProvider = () => {
  return (
    <RouterDOMProvider router={router} />
  );
};
