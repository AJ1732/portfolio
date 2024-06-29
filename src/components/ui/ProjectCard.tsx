import Reveal from "../anim/Reveal";

interface Props {
  title: string;
  type: string;
  desc: string;
  stack: string[];
  src1: string;
  src2: string;
  github: string;
  live: string;
  reverse?: boolean;
}
const ProjectCard = ({
  title,
  type,
  desc,
  stack,
  src1,
  src2,
  github,
  live,
  reverse,
}: Props) => {
  return (
    <Reveal width="100%">
      <article
        className={`flex min-h-[calc(100dvh-8rem)] w-full flex-col items-center justify-between gap-8 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
      >
        <div className="max-w-96 space-y-4 lg:mt-8">
          {/* PROJECT HEADER */}
          <header className="flex items-center justify-between gap-4">
            <h3 className="text-2xl">{title}</h3>
            <div className="rounded bg-primary-300/40 px-4 py-2 text-sm">
              {type}
            </div>
          </header>

          {/* PROJECT DESCRIPTION */}
          <p className={`text-sm text-zinc-400 ${reverse && "text-end"}`}>
            {desc}
          </p>

          {/* PROJECT STACK */}
          <div
            className={`flex flex-wrap items-center pt-12 ${reverse ? "justify-end" : "justify-start"} gap-2 *:cursor-pointer *:rounded *:bg-neutral-800 *:px-3 *:py-1.5 *:text-sm`}
          >
            {stack.map((stac) => (
              <div
                key={stac}
                className="transition-all duration-500 hover:bg-primary-400 hover:text-black"
              >
                {stac}
              </div>
            ))}
          </div>

          {/* PROJECT LINK */}
          <div
            className={`flex items-center ${reverse ? "justify-end" : "justify-start"} gap-4 pl-1 *:cursor-pointer *:py-1.5 *:text-sm`}
          >
            <a
              href={github}
              target="_blank"
              className="flex-center group gap-1 transition-all duration-500 hover:text-primary-400"
            >
              <span className="group-hover:underline">GitHub Repo</span>
              <span className="block size-fit rotate-12 pb-1">↗</span>
            </a>
            <a
              href={live}
              target="_blank"
              className="flex-center group gap-1 transition-all duration-500 hover:text-primary-400"
            >
              <span className="group-hover:underline">Live Link</span>
              <span className="block size-fit rotate-12 pb-1">↗</span>
            </a>
          </div>
        </div>

        {/* PROJECT IMAGE */}
        <figure className="min-w-80">
          <img
            src={src1}
            className={`size-60 rounded ${reverse ? "ml-auto" : "mr-auto"} bg-primary-300 object-cover object-center`}
            alt="Project Image 1"
          />
          <img
            src={src2}
            className={`-mt-40 ${reverse ? "mr-auto" : "ml-auto"} size-60 rounded bg-primary-300 object-cover object-center shadow-2xl`}
            alt="Project Image 2"
          />
        </figure>
      </article>
    </Reveal>
  );
};
export default ProjectCard;
