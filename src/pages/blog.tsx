import Link from 'next/link';

const Blog = ({ blog }) => {
  return (
    <div className="md:max-w-2xl sm:max-w-md text-sm tracking-wider leading-loose mx-auto mt-12">
      <h1 className="text-xl ml-4">ブログ一覧</h1>
      {blog.map((blog) => (
        <div className="my-10 hover:opacity-75" key={blog.id}>
          <Link href={`/blog/${blog.id}`}>
            <a>
              <span className="mr-5">・</span>
              {blog.title}
            </a>
          </Link>
          <p className="text-sm my-2">{blog.publishedAt.slice(0, 10)}</p>
          <p className="bg-gray-900 rounded-lg p-1 text-gray-100 dark:bg-gray-600 inline-block">
            {blog.category && `${blog.category.name}`}
          </p>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://nazca.microcms.io/api/v1/blogs', key)
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default Blog;
