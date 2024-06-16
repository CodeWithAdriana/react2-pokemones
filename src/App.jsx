import { Navbar } from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Pokemones } from "./Pages/Pokemones";
import { Detalles } from "./Pages/Detalles";
import { Home } from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:name" element={<Detalles />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
