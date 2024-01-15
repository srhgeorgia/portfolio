import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

function AppRouter() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/works", element: <Works /> },
    { path: "/contact", element: <Contact /> },
  ]);

  return routes;
}

export default AppRouter;
