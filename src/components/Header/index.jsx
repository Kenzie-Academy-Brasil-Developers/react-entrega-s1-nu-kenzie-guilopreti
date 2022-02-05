import Button from "../Button";
import Logo from "../../imgs/Nu Kenzie.png";

const Header = ({ extra }) => {
  return (
    <header>
      <img src={Logo} alt="Logo Nu Kenzie" />
      <Button onClick={extra}>Inicio</Button>
    </header>
  );
};

export default Header;
