import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navs from "./pages/Navs";
import AppRouter from "./AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Navs />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
