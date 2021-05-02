import { FunctionComponent } from 'react';
import {
  AiFillGithub,
  AiFillProject,
  AiOutlineCloseSquare,
} from 'react-icons/ai';
import { IProject } from '../types';
import Image from 'next/image';

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    name,
    image_path,
    deployed_url,
    description,
    github_url,
    key_techs,
    id,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <div className="border-4 border-gray-800">
        <Image
          src={image_path}
          alt={name}
          className="cursor-pointer"
          onClick={() => setShowDetail(id)}
          layout="responsive"
          height="150"
          width="300"
        />
      </div>

      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <div className="absolute top-0 xl:left-48 left-0 z-10 xl:w-4/6 w-full h-auto  grid text-black bg-gray-100 md:grid-cols-2 md:p-10 gap-x-12 dark:text-white dark:bg-dark-100 rounded-lg">
          <div>
            <Image
              src={image_path}
              alt={name}
              layout="responsive"
              height="150"
              width="300"
            />
            <div className="flex justify-center my-4 -ml-5">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 ml-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 ml-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>

            <div className="flex flex-wrap mt-5 ml-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 bg-gray-200 top-3 right-3 rounded-full focus:outline-none dark:bg:dark-200"
          >
            <AiOutlineCloseSquare size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
