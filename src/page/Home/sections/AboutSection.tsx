import Container from "../../../components/Container";
import Dot from "../../../components/ui/Dot";

const AboutSection = () => {
  return (
    <Container id="about" className="items-start">
      <h2 className="font-josefin text-3xl font-light">
        About Me
        <Dot />
      </h2>

      <article className="grid grid-cols-1 md:grid-cols-[60%_35%] gap-8">
        <p className="leading-8">
          Frontend Engineer fueled by years of learning and building. Passionate
          about crafting clean, user-centric interfaces that bring ideas to
          life. Built a portfolio of diverse projects, from single-page apps to
          interactive prototypes, showcasing strong skills in frontend
          technologies. Eager to contribute to a collaborative team and learn
          from experienced professionals. A quick learner with a problem-solving
          mind and a drive to continuously improve. When not coding, I'm
          exploring new design trends and catching up on the latest tech (with a
          good book in hand!)
        </p>

        <div className="flex flex-wrap justify-center items-center gap-2">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div className="bg-primary-400 p-4 size-fit rounded">{item}</div>
          ))}
        </div>
      </article>
    </Container>
  );
};
export default AboutSection;
