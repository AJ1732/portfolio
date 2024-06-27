const ProjectCard = () => {
  return (
    <article className="flex size-full flex-col justify-between gap-8 md:flex-row">
      <div className="max-w-96 space-y-4 lg:mt-8">
        {/* PROJECT HEADER */}
        <header className="flex items-center justify-between">
          <h3 className="text-2xl">Project Title</h3>
          <div className="rounded bg-primary-300/40 px-4 py-2 text-sm">
            Type
          </div>
        </header>

        {/* PROJECT DESCRIPTION */}
        <p className="text-sm text-zinc-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quod
          in totam earum voluptatem ipsam?
        </p>

        {/* PROJECT STACK */}
        <div className="flex items-center justify-start gap-4 *:cursor-pointer *:rounded *:bg-neutral-800 *:px-3 *:py-1.5 *:text-sm">
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
        <div className="flex items-center justify-start gap-4 *:cursor-pointer *:py-1.5 *:text-sm">
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
        <div className="size-60 rounded bg-primary-300"></div>
        <div className="-mt-40 ml-auto size-60 rounded bg-primary-300 shadow-2xl"></div>
      </figure>
    </article>
  );
};
export default ProjectCard;
