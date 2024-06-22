import Reveal2 from "../../../components/anim/Reveal2";
import Container from "../../../components/Container";
import Dot from "../../../components/ui/Dot";

const AboutSection = () => {
  return (
    <Container id="about" className="items-start">
      <h2 className="font-josefin text-3xl font-light">
        About Me
        <Dot />
      </h2>

      <article className="grid grid-cols-1 gap-8 md:grid-cols-[60%_35%]">
        <p className="leading-8">
          <Reveal2>
            An inquisitive and motivated Software Engineer, willing to obtain
            such position to utilize my skills in web development and
            programming, while continuously improving my skills and knowledge in
            this field. Possesses a proactive attitude and strong communication
            skills. A great problem solver and rational thinker, with excellent
            teamwork abilities in performing tasks.
          </Reveal2>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div className="size-fit rounded bg-primary-400 p-4">{item}</div>
          ))}
        </div>
      </article>
    </Container>
  );
};
export default AboutSection;
