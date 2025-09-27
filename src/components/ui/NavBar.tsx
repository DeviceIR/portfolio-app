import React from "react";
import ThemeButton from "./ThemeButton";
import Button from "./Button";
import Heading from "./Heading";

export default function NavBar() {
  return (
    <div className=" w-[100%] bg-[var(--color-bg-nav)] text-[var(--color-text)] flex justify-between items-center px-4 ">
      <Heading className="items-start">Portfolio WebSite</Heading>
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
