import { createBrowserRouter } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Mainlayout from "./layouts/Mainlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog/>,
      }
    ],
  },
]);

export default router;
