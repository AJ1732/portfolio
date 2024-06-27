import Reveal from "../anim/Reveal";

interface Props {
  reverse?: boolean;
}
const ProjectCard = ({ reverse }: Props) => {
  return (
    <Reveal width="100%">
      <article
        className={`flex min-h-[calc(100dvh-8rem)] w-full flex-col items-center justify-between gap-8 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
      >
        <div className="max-w-96 space-y-4 lg:mt-8">
          {/* PROJECT HEADER */}
          <header className="flex items-center justify-between">
            <h3 className="text-2xl">Project Title</h3>
            <div className="rounded bg-primary-300/40 px-4 py-2 text-sm">
              Type
            </div>
          </header>

          {/* PROJECT DESCRIPTION */}
          <p className={`text-sm text-zinc-400 ${reverse && "text-end"}`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            quod in totam earum voluptatem ipsam?
          </p>

          {/* PROJECT STACK */}
          <div
            className={`flex pt-12 items-center ${reverse ? "justify-end" : "justify-start"} gap-4 *:cursor-pointer *:rounded *:bg-neutral-800 *:px-3 *:py-1.5 *:text-sm`}
          >
            <div className="transition-all duration-500 hover:bg-primary-400 hover:text-black">
              ReactJS
            </div>
            <div className="transition-all duration-500 hover:bg-primary-400 hover:text-black">
              TailwindCSS
            </div>
            <div className="transition-all duration-500 hover:bg-primary-400 hover:text-black">
              Firebase
            </div>
          </div>

          {/* PROJECT LINK */}
          <div
            className={`flex items-center ${reverse ? "justify-end" : "justify-start"} pl-1 gap-4 *:cursor-pointer *:py-1.5 *:text-sm`}
          >
            <div className="transition-all duration-500 hover:text-primary-400 hover:underline">
              GitHub Repo
            </div>
            <div className="transition-all duration-500 hover:text-primary-400 hover:underline">
              Live Link
            </div>
          </div>
        </div>

        {/* PROJECT IMAGE */}
        <figure className="min-w-80">
          <div
            className={`size-60 rounded ${reverse ? "ml-auto" : "mr-auto"} bg-primary-300`}
          ></div>
          <div
            className={`-mt-40 ${reverse ? "mr-auto" : "ml-auto"} size-60 rounded bg-primary-300 shadow-2xl`}
          ></div>
        </figure>
      </article>
    </Reveal>
  );
};
export default ProjectCard;
