import { useState } from "react";
import "./app.scss";
import Topbar from "./compnents/topbar/Topbar";
import Menu from "./compnents/menu/Menu";
import Intro from "./compnents/intro/Intro";

import Contact from "./compnents/contact/Contact";
import Places from "./compnents/places/Places";
import About from "./compnents/about/About";
import Hotel from "./compnents/hotel/Hotel";
import HotelList from "./compnents/hotelList/HotelList";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Places />
        <Hotel/>
        <HotelList/>
        <About />

        <Contact />
      </div>
    </div>
  );
}

export default App;
