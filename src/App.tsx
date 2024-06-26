import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
// import cv from "./assets/OSEZELE_EJEMEN_IBOI_FRONTEND_ENGINEER.pdf";
// import ShinyButton from "./components/anim/ShinyButton";

function App() {
  return (
    <div className="min-h-dvh font-poppins">
      {/* CV DOWNLOAD */}
      {/* <ShinyButton className="fixed right-8 top-11 z-50">
        <a href={cv} download role="button">
          Resume
        </a>
      </ShinyButton> */}

      {/* SIDE NAVIGATION */}
      <div className="sidenav fixed h-dvh max-w-[4.5rem] overflow-hidden overflow-y-scroll bg-black md:max-w-20">
        <Sidebar />
      </div>

      {/* MAIN & FOOTER CONTENT */}
      <div className="ml-[4.5rem] md:ml-20">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
