import { Link } from "react-router-dom";
import Transition from "../../components/anim/Transition";
import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";

const HomePage = () => {
  return (
    <main className="content-grid relative place-items-center py-12">
      <div className="flex flex-col gap-12">
        <HeroSection />
        <AboutSection />

        <Link to={`/projects`} className="group mt-20 ml-auto text-primary-400">
          <span className="group-hover:underline">Projects</span> →
        </Link>
      </div>
    </main>
  );
};
export default Transition(HomePage);
