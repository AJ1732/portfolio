import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import cv from "./assets/OSEZELE_EJEMEN_IBOI_FRONTEND_ENGINEER.pdf";
import ShinyButton from "./components/anim/ShinyButton";

function App() {
  return (
    <div className="min-h-dvh font-poppins">
      {/* CV DOWNLOAD */}
      <ShinyButton className="fixed right-8 top-11 z-50">
        <a href={cv} download role="button">
          Resume
        </a>
      </ShinyButton>

      {/* SIDE NAVIGATION */}
      <div className="fixed h-dvh max-w-[4.5rem] md:max-w-20">
        <Sidebar />
      </div>

      {/* MAIN CONTENT */}
      <div className="ml-[4.5rem] md:ml-20">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
