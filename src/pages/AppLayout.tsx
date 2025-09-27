import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../components/ui/NavBar";
import ContactForm from "../components/ui/ContactForm";

function AppLayout() {
  return (
    <div className="grid grid-cols-[1fr] grid-rows-[10fr_75fr] h-screen ">
      <NavBar />
      <main className="p-[2rem_2.4rem_0rem] bg-[var(--color-mainback)] overflow-auto  ">
        <div className="mx-auto max-w-[120rem] flex flex-col gap-8 justify-center items-center mb-12">
          {/* main context */}
          <Outlet />
          {/* my form at the end of page */}
          <ContactForm />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
