import Transition from "../../components/anim/Transition";
import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";

const HomePage = () => {
  return (
    <main className="content-grid relative place-items-center py-12">
      <div className="flex flex-col gap-12">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
};
export default Transition(HomePage);
