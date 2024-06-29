import Reveal2 from "../../../components/anim/Reveal2";
import Container from "../../../components/Container";
import Dot from "../../../components/ui/Dot";

const AboutSection = () => {
  return (
    <Container id="about" className="items-start justify-center">
      <h2 className="font-josefin text-3xl font-light">
        About Me
        <Dot />
      </h2>

      <article className="grid grid-cols-1 gap-8 md:grid-cols-[60%_36%]">
        <Reveal2 className={`leading-8`}>
          An inquisitive and motivated Software Engineer, willing to obtain such
          position to utilize my skills in web development and programming,
          while continuously improving my skills and knowledge in this field.
          Possesses a proactive attitude and strong communication skills. A
          great problem solver and rational thinker, with excellent teamwork
          abilities in performing tasks.
        </Reveal2>

        <div className="mx-auto flex w-full flex-wrap gap-1 md:justify-end">
          {skills.map((skill) => (
            <div
              key={skill}
              className="h-fit min-w-16 break-inside-avoid rounded bg-primary-400 px-4 py-3 text-center text-xs"
            >
              {skill}
            </div>
          ))}
        </div>
      </article>
    </Container>
  );
};
export default AboutSection;

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "jQuery",
  "EJS",
  "TailwindCSS",
  "SASS/SCSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "DSA",
  "OOP",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "SQL",
  "PostgreSQL",
  "UI/UX Design",
];
