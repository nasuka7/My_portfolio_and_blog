import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectsNavbar from '../components/ProjectNavbar';
import { Category } from '../types';
import { projects as projectsData } from '../data';
import Navbar from '../components/Navbar';

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
    <div>
      <Navbar />
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <p className="flex justify-center mt-6">随時更新予定です</p>

      {/* <div className="grid grid-cols-12 gap-4 my-3 relative md:px-10">
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
      </div> */}
    </div>
  );
};

export default Projects;
