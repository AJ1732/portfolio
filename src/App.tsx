import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import cv from "./assets/OSEZELE_EJEMEN_IBOI_FRONTEND_ENGINEER.pdf";

function App() {
  return (
    <div className="min-h-dvh font-poppins">
      {/* CV DOWNLOAD */}
      <button className="fixed right-8 top-11 z-50 rounded bg-primary-400/70 px-4 py-2 transition-all duration-500 ease-in-out hover:bg-primary-400/100">
        <a href={cv} download role="button">
          Resume
        </a>
      </button>

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
