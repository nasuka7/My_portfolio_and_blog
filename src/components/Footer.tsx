import SocialNetworkingService from './SocialMedia';

const Footer = () => {
  return (
    <div className="flex justify-center mt-12 pt-16 pb-4 border-t border-gray-300 text-sm">
      <p className="mr-6">©KKBLOG</p>
      <SocialNetworkingService />
    </div>
  );
};

export default Footer;
