import Reveal from "../../../components/anim/Reveal";
import Reveal2 from "../../../components/anim/Reveal2";
import Container from "../../../components/Container";
import Dot from "../../../components/ui/Dot";
import FlipDiv from "../../../components/ui/FlipDiv";
import DoubleMarquee from "../../../components/ui/Marquee";
import { skills } from "../../../data/skills";

const AboutSection = () => {
  return (
    <Container id="about" className="items-start justify-center">
      <h2 className="font-josefin text-3xl font-light">
        About Me
        <Dot />
      </h2>

      <article className="grid grid-cols-1 gap-8">
        <div className="max-w-5xl">
          <Reveal2 className={`md:text-xl`}>
            An inquisitive and motivated Software Engineer, willing to utilize
            my skills in web development and programming, while continuously
            improving my skills and knowledge in this field. Possesses a
            proactive attitude and strong communication skills. A great problem
            solver and rational thinker, with excellent teamwork abilities in
            performing tasks.
          </Reveal2>
        </div>

        {/* <div className="mx-auto flex w-full flex-wrap gap-1 md:justify-end">
          {skills.map(({ skill, icon }, i) => (
            <FlipDiv key={`skill-${i}`} text={skill} under={icon} />
          ))}
        </div> */}

        <div>
          <DoubleMarquee
            firstTop={skills
              .slice(0, Math.ceil(skills.length / 2))
              .map(({ skill, icon }, i) => (
                <FlipDiv key={`skill-ft-${i}`} text={skill} under={icon} />
              ))}
            secondTop={skills
              .slice(0, Math.ceil(skills.length / 2))
              .map(({ skill, icon }, i) => (
                <FlipDiv key={`skill-st-${i}`} text={skill} under={icon} />
              ))}
            firstBottom={skills
              .slice(Math.ceil(skills.length / 2))
              .map(({ skill, icon }, i) => (
                <FlipDiv key={`skill-bt-${i}`} text={skill} under={icon} />
              ))}
            secondBottom={skills
              .slice(Math.ceil(skills.length / 2))
              .map(({ skill, icon }, i) => (
                <FlipDiv key={`skill-sb-${i}`} text={skill} under={icon} />
              ))}
          />
        </div>
      </article>

      <article className="mt-12 flex w-full flex-col items-center text-center leading-8">
        <Reveal>
          <ul className="list-inside list-disc space-y-4 marker:text-primary-500 lg:max-w-2xl">
            {speech.map((spee, index) => (
              <li key={index}>
                <div>{spee}</div>
              </li>
            ))}
          </ul>
        </Reveal>
      </article>
    </Container>
  );
};
export default AboutSection;

const speech = [
  "Well... Apart from English, I'm Proficient in languages such as HTML, CSS and JavaScript",
  "Proficient with Frontend frameworks and libraries like Bootstrap, SCSS/SASS, TailwindCSS, EJS, jQuery, shadcnUI, ChakraUI, Redux/RTK, TansStack Query, React and NextJS",
  "Familar with Backend technologies like NodeJS, ExpressJS, MongoDB, SQL, PostgreSQL, to make RESTful APIs",
  "Understand web design principles and user experience (UX) design",
  "Undergoing training in Data Structures like Stacks, Queues, List, Linked list and Hashmaps and Algorithms like Linear Search and Binary search in JavaScript to enhance problem-solving skills. As well as the concept of Big O notation and time complexity",
  "I also engage in platforms like LeetCode and CodeWars to enhance my algorithmic and problem-solving skills.",
  "I’ve engaged in Version Control and Collaboration by using Git and GitHub. I understand the importance of collaborative coding practices and have worked on group projects where developers contribute to the same codebase.",
  "I am highly comfortable working within the terminal environment. I regularly use the terminal for tasks such as navigating the file system, managing files and directories, and executing various commands. I have a solid grasp of basic Linux command-line operations. Usually operations in file manipulation, searching, and text processing using commands like ls, cd, cat, echo and touch.",
];
