import { FunctionComponent } from 'react';
import { Skill } from '../types';

const Bar: FunctionComponent<{ data: Skill }> = ({
  data: { Icon, level, name },
}) => {
  const bar_width = `${level}`;

  return (
    <div className="my-2 text-white bg-gray-300 dark:bg-dark-200 rounded-full">
      <div
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-yellow-300 to-gray-400"
        style={{ width: bar_width }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Bar;
