import Button from "../Button";
import { navBar, navButton } from "./styles";
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const links = [
    { text: "welcome", url: "/" },
    { text: "books", url: "/books" },
    { text: "characters", url: "/characters" }
  ];

  const location = useLocation()

  return (
    <nav style={navBar}>
        {links.map((link) =>
            location.pathname !== link.url &&
            <Link to={link.url}>
              <Button key={link.url} style={navButton}>
                {link.text}
              </Button>
            </Link>
       )}
    </nav>
  );
};

export default NavBar;