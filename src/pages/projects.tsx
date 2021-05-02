import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectsNavbar from '../components/ProjectNavbar';
import { Category } from '../types';
import { projects as projectsData } from "../data";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState('all');

  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handlerFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className="px-10 py-2">
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <div className="grid grid-cols-12 gap-4 my-3 relative">
        {projects.map((project) => (
          <div
            className="col-span-12 p-2 sm:col-span-6 lg:col-span-4 bg-gray-100 bg-opacity-50 dark:bg-dark-200 rounded-lg"
            key={project.name}
          >
            <ProjectCard
              project={project}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
