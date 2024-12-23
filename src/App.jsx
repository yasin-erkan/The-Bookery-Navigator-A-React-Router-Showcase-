import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Detail from "./pages/Detail";
import Layout from "./pages/Layout";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/category",
        element: <Category />,
        children: [
          { path: "story", element: <h1>Story Section</h1> },
          { path: "novel", element: <h1>Novel Section</h1> },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
