import Link from 'next/link';
import { FunctionComponent } from 'react';

const Headbar: FunctionComponent = () => {
  return (
    <div className="max-w-7xl flex mx-auto py-5 border-b border-gray-300">
      <div className="flex justify-between">
        <div className="">
          <Link href="/">KKBlog</Link>
        </div>
        <div className="flex flex-row"> 
          <div className="pr-5">
            <Link href="/blog">Blog</Link>
          </div>
          <div className="pr-5">
            <Link href="/">Home</Link>
          </div>
          <div className="pr-5">
            <Link href="/profile">Profile</Link>
          </div>
          <div className="pr-5">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headbar;
