import { Transition } from '@headlessui/react';
import { FunctionComponent, useState, useEffect } from 'react';
import SocialNetworkingService from './SocialMedia';
import DarkmodeToggle from './DarkmodeToggle';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Blog', href: '/blog', current: false },
  { name: 'Profile', href: '/profile', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Headbar: FunctionComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="pb-2 text-sm font-semibold border-b border-gray-300">
      <div className="flex justify-between">
        <div className="flex ml-4 pt-8 text-red-600 hover:text-gray-800 dark:text-red-200 dark:hover:text-gray-">
          <a href="/">
            <p className="text-xs">Kai's</p>
            <p className="text-xs">Outgoing </p>
            <p className="text-xs">Blog</p>
            <p className="text-xs">A freely</p>
          </a>
        </div>

        <div className="space-x-4 mt-16 pt-2 hidden md:block">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'text-gray-100 dark:text-gray-800'
                  : 'text-gray-800 dark:text-gray-100 hover:bg-gray-600 dark:hover:bg-gray-300 hover:text-gray-100 dark:hover:text-gray-800',
                'px-4 py-2 rounded-md text-sm font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
          <div className="float-right mt-1 pr-4">
            <SocialNetworkingService />
          </div>
          <div className="float-right mt-1 ">
            <DarkmodeToggle />
          </div>
        </div>
      </div>

      {/* モバイル */}
      <div className="float-right mr-3 -mt-12 md:hidden">
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {!open ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
      <Transition
        show={open}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden pt-4" id="mobile-menu">
            <div
              ref={ref}
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-100"
            >
              <a
                href="/"
                className="text-gray-800 border-b-2 border-gray-200  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>

              <a
                href="/blog"
                className="text-gray-800 border-b-2 border-gray-200  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Blog
              </a>

              <a
                href="/profile"
                className="text-gray-800 border-b-2 border-gray-200  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Profile
              </a>

              <a
                href="/contact"
                className="text-gray-800 border-b-2 border-gray-200  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Headbar;
