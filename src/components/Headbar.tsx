import Link from 'next/link';
import { FunctionComponent } from 'react';

const Headbar: FunctionComponent = () => {
  return (
    <div>
      <div className="font-bold text-3xl ml-12 mt-12 border-b-2 border-double border-gray-800 w-24 pb-2">
        KKBlog
      </div>
      <div className="flex justify-center pt-20 space-x-32 md:space-x-12 text-gray-700">
        <div className="hover:text-blue-700 active:bg-gray-300 border-l-2">
          <Link href="/blog">Blog</Link>
        </div>
        <div>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="">
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/profile">Profile</Link>
        </div>
        <div>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Headbar;
