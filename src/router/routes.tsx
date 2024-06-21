import { Navigate, createBrowserRouter } from "react-router-dom";
import { TopScroll } from "../components/ui/TopScroll";
import App from "../App";
import HomePage from "../page/Home/Page";
import ProjectsPage from "../page/Projects/Page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <TopScroll />
        <App />
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
    ]
  },
  {
    path: "/*",
    element: <Navigate to={`.`} />,
  },
]);
