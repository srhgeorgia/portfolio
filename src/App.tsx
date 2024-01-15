import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import Navs from "./components/Navs";
import AppRouter from "./AppRouter";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navs onClick={handleClick} />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;