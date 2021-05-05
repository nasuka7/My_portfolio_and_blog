import { parseISO, format } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { getAllPosts } from '../lib/data';

const Blog = ({ posts }) => {
  return (
    <div>
      <div className="space-y-4">
        {posts.map((item) => (
          <BlogListItem key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
};
export default Blog;

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        date: data.date.toISOString(),
        content,
        slug,
      })),
    },
  }
}

export const getStaticPaths:GetStaticPaths = async () => {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

function BlogListItem({ slug, title, date, content }) {
  return (
    <div className="mx-auto border my-4 shadow hover:shadow-md hover:border-black-600 rounded-md p-2 transion duration-500 ease-in-out">
      <div>
        <div className="mb-4">
          <Link href={`/blog/${slug}`}>
            <a className="font-bold"><span className="mr-2">・</span>{title}</a>
          </Link>
        </div>
        <div className="text-sm">{format(parseISO(date), 'MMMM do, uuu')}</div>
        <div>{content.substr(0, 50)}</div>
      </div>
    </div>
  );
}


