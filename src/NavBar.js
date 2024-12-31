import { NavLink } from "react-router-dom";
import "./NavBar.css";

function Navbar({ dogs }) {
  const Links = dogs.map(dog =>
    <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
      {dog.name}
    </NavLink>
  );

  return (
    <nav>
      <NavLink to="/dogs" end>
        Home
      </NavLink>
      {links}
    </nav>
  );
}

export default Navbar;
