import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Detail from "./pages/Detail";
import Layout from "./pages/Layout";
import Category from "./pages/Category";

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
          { path: "story", element: <h1>Story Page</h1> },
          { path: "novel", element: <h1>Novel Page</h1> },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
