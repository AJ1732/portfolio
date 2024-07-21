import Reveal from "../../../components/anim/Reveal";
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
          An inquisitive and motivated Software Engineer, willing to utilize my
          skills in web development and programming, while continuously
          improving my skills and knowledge in this field. Possesses a proactive
          attitude and strong communication skills. A great problem solver and
          rational thinker, with excellent teamwork abilities in performing
          tasks.
        </Reveal2>

        <div className="mx-auto flex w-full flex-wrap gap-1 md:justify-end">
          {skills.map((skill) => (
            <div
              key={`about-${skill}`}
              className="h-fit min-w-16 cursor-default break-inside-avoid rounded bg-primary-400/10 px-4 py-3 text-center text-xs text-primary-400 hover:bg-primary-400/100 hover:text-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </article>

      <article className="flex w-full flex-col items-end text-right leading-8">
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

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "NextJS",
  "jQuery",
  "EJS",
  "Shadcn UI",
  "TailwindCSS",
  "SASS/SCSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "DSA",
  "Vitest",
  "OOP",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "SQL",
  "PostgreSQL",
  "UI/UX Design",
  "Figma",
];

const speech = [
  "Well... Apart from English, I'm Proficient in languages such as HTML, CSS and JavaScript",
  "Proficient with Frontend frameworks like Bootstrap, SCSS/SASS, TailwindCSS, EJS, jQuery and React",
  "Familar with Backend technologies like NodeJS, ExpressJS, MongoDB, SQL, PostgreSQL, to make RESTful APIs",
  "Understand web design principles and user experience (UX) design",
  "Undergoing training in Data Structures like Stacks, Queues, List, Linked list and Hashmaps and Algorithms like Linear Search and Binary search in JavaScript to enhance problem-solving skills. As well as the concept of Big O notation and time complexity",
  "I also engage in platforms like LeetCode and CodeWars to enhance my algorithmic and problem-solving skills.",
  "I’ve engaged in Version Control and Collaboration by using Git and GitHub. I understand the importance of collaborative coding practices and have worked on group projects where developers contribute to the same codebase.",
  "I am highly comfortable working within the terminal environment. I regularly use the terminal for tasks such as navigating the file system, managing files and directories, and executing various commands. I have a solid grasp of basic Linux command-line operations. Usually operations in file manipulation, searching, and text processing using commands like ls, cd, cat, echo and touch.",
];
