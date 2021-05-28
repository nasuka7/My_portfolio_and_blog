import { MdUpdate } from 'react-icons/md';

export default function BlogId({ blog }) {
  return (
    <article className="prose mx-auto mt-12">
      <h1 className="border-b border-gray-700 dark:border-gray-400 pb-2">
        {blog.title}
      </h1>
      <div className="inline-flex float-left">
        <MdUpdate className="mt-7 mr-1" />
        <p className="mr-12 border-b-4 border-gray-700">
          {blog.publishedAt.slice(0, 10)}
        </p>
        <p className="bg-gray-900 rounded-lg p-1 text-gray-100 dark:bg-gray-600 inline-block">
          {blog.category && `${blog.category.name}`}
        </p>
      </div>
      <div
        className="block mt-28"
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
    </article>
  );
}

export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://nazca.microcms.io/api/v1/blogs', key)
    .then((res) => res.json())
    .catch(() => null);
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://nazca.microcms.io/api/v1/blogs/' + id, key)
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data,
    },
  };
};
