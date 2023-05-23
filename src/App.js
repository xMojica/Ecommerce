import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Forgot from "./Components/Login/Forgot";
import Singup from "./Components/Login/Singup";
import Article from "./Components/Articulo/Article";
import ContextProvider from "./Context/main";

function App() {
  window.scrollTo(0, 0);
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Forgot" element={<Forgot />} />
          <Route exact path="/Singup" element={<Singup />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Article" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
