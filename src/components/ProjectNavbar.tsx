import { FunctionComponent } from 'react';
import { Category } from '../types';

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-blue-500" ;
  if (active === value) className += 'text-blue-500 font-bold border-b-2 border-gray-800';
  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex text-sm justify-center space-x-5 list-none overflow-x-auto mt-12  pb-3 border-b border-red-200 dark:border-gray-400">
      <NavItem value="all" {...props} />
      <NavItem value="React" {...props} />
      <NavItem value="Javascript" {...props} />
      <NavItem value="HTML & CSS" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
