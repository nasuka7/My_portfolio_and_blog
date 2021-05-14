import Link from "next/link";

const Blog = ({blog}) => {
  return (
    <div className="">
      <div className="block mt-10 md:ml-24">
        {blog.map((blog) => (
          <div className="my-4" key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a><span className="mr-5">・</span>{blog.title}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://nazca.microcms.io/api/v1/blogs', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default Blog;
