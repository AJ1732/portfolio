import Transition from "../../components/ui/Transition";
import AboutSection from "./sections/AboutSection";
import GoalSection from "./sections/GoalSection";
import HeroSection from "./sections/HeroSection";

const HomePage = () => {
  return (
    <main className="content-grid relative place-items-center py-12">
      <div className="flex flex-col gap-12">
        <HeroSection />
        <AboutSection />
        <GoalSection />
      </div>
    </main>
  );
};
export default Transition(HomePage);
