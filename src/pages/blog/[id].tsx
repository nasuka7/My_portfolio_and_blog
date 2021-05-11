export default function BlogId({ blog }) {
  return (
      <article className="prose dark:prose-dark max-w-3xl mx-auto mt-12">
        <h1 className="border-b border-gray-700 dark:border-gray-400 pb-2 ">{blog.title}</h1>
        <div
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
