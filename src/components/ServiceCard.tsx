import { FunctionComponent } from 'react';
import { Service } from '../types';

const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { Icon, about, title },
}) => {
  const createMarcup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className="flex p-4 bg-yellow-100 bg-opacity-20 space-y-4 mb-4 pt-2">
      <Icon className="w-4 h-4 mr-6 mt-6" />
      <h4 className="font-bold -ml-2 mr-12">{title}</h4>
      <div className="absolute ml-48">
      <p  dangerouslySetInnerHTML={createMarcup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
