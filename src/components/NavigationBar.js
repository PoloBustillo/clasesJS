//imports
import Link from "./Link";
import { Logo } from "./Logo";
import { MenuButton } from "./MenuButton";

function NavigationBar(props) {
  return (
    <div>
      <Logo></Logo>
      <Link colores="green"></Link>
      <Link colores="yellow"></Link>
      <Link colores="red"></Link>
      <MenuButton></MenuButton>
    </div>
  );
}

export default NavigationBar;
