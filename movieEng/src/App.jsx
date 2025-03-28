import Home from "./pages/Home";
import MovieCard from "./components/movieCard";
import { Routes, Route } from "react-router-dom";
import Favourites from "./pages/Favourites";
import NavBar from "./components/navBar";
import "./css/App.css";

function App() {
  let movieNumder = 5;
  return (
    <>
      <div>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
