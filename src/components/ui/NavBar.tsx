import ThemeButton from "./ThemeButton";
import Button from "./Button";
import Heading from "./Heading";
import { Link } from "react-router-dom";

import Logo from "./Logo";

export default function NavBar() {
  return (
    <div className=" w-[100%] bg-[var(--color-bg-nav)] text-[var(--color-text)] flex justify-between items-center px-4 ">
      {/* <Heading className="items-start">Portfolio WebSite</Heading> */}
      {/* <Logo color="var(--color-text)" width="40px" height="40px"></Logo> */}

      {/* btns to navigate */}
      <div className="flex items-center gap-8 text-3xl">
        <Logo color="var(--color-text)" width="40px" height="40px"></Logo>
        <Link to="/" className="hover:text-blue-500 transition">
          Home
        </Link>
        <Link to="/portfolio" className="hover:text-blue-500 transition">
          Portfolio
        </Link>
        {/* <Link to="/contact" className="hover:text-blue-500 transition">
          Contact
        </Link> */}
      </div>

      {/* theme-login-contact btns */}
      <div className="flex justify-between items-center   gap-2">
        <ThemeButton />
        <Button variant="primary" size="md" className="uppercase">
          Login
        </Button>
        <Button variant="secondary" size="sm" className="uppercase">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
