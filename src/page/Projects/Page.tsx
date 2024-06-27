import ProjectCard from "../../components/ui/ProjectCard";

const ProjectsPage = () => {
  return (
    <main className="content-grid relative place-items-center py-12">
      <div className="flex size-full flex-col gap-12 lg:gap-20">
        <ProjectCard />
        <ProjectCard reverse={true} />
      </div>
    </main>
  );
};
export default ProjectsPage;
