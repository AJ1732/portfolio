import ProjectCard from "../../components/ui/ProjectCard";
import { projects } from "../../data/db.json";

const ProjectsPage = () => {
  return (
    <main className="content-grid relative place-items-center py-12">
      <div className="flex size-full flex-col gap-28 lg:gap-20">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            reverse={project.id % 2 === 0}
            {...project}
          />
        ))}
      </div>
    </main>
  );
};
export default ProjectsPage;
