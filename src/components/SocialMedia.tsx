import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import { SiQiita } from 'react-icons/si';

const SocialNetworkingService = () => {
  return (
    <div className="flex space-x-4 text-lg">
      <a
        className="flex item-center justify-center hover:opacity-50"
        href="https://twitter.com/nasuka315"
      >
        <AiOutlineTwitter />
      </a>
      <a
        className="flex item-center justify-center hover:opacity-50"
        href="https://github.com/nasuka7"
      >
        <AiOutlineGithub />
      </a>
      <a
        className="flex item-center justify-center hover:opacity-50"
        href="https://qiita.com/n4suka7"
      >
        <SiQiita />
      </a>
    </div>
  );
};

export default SocialNetworkingService;
