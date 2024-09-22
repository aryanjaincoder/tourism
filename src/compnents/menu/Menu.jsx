import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#places">Places</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#booking">Booking</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#hotels">Hotels</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
