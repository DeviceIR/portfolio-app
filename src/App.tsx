import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// pages
import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";
import DetailedProject from "./pages/DetailedProject";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* main layout of pages */}
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="homepage" />} />

          <Route path="/homepage" element={<Homepage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/detailedproject" element={<DetailedProject />} />
        </Route>

        {/* contact form & one notif app for later */}
        {/* <Route path="/contact" element={<ContactForm />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

{
  /* <div className="relative width-[100%] height-[100vh] ">
      <ThemeButton />
      <AppLayout>
        <NavBar />
        <ContactForm />
      </AppLayout>
    </div> */
}
