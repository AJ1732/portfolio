import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="font-poppins min-h-dvh">
      <div className="fixed h-dvh max-w-[4.5rem] md:max-w-20">
        <Sidebar />
      </div>

      <div className="ml-[4.5rem] md:ml-20">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
