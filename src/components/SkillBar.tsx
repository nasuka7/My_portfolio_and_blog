import { FunctionComponent } from 'react';
import { Skill } from '../types';

const SkillBar: FunctionComponent<{ data: Skill }> = ({
  data: { Icon, level, name },
}) => {
  const bar_width = `${level}`;

  return (
    <div className="my-4 text-white bg-gray-300 dark:bg-dark-200 rounded-full">
      <div
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-yellow-300 to-gray-400 dark:from-gray-800 dark:to-gray-500"
        style={{ width: bar_width }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default SkillBar;
