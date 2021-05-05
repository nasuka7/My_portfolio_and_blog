import { format, parseISO } from 'date-fns';
import { getAllPosts } from '../../lib/data';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { GetStaticPaths, GetStaticProps } from 'next'

export default function BlogPage({ title, date, content }) {
  const hydratedContent = hydrate(content);

  return (
    <div>
      <h1>{title}</h1>
      <div>{format(parseISO(date), 'MMMM do, uuu')}</div>
      <div className="prose">{hydratedContent}</div>
    </div>
  );
}

export const getStaticProps:GetStaticProps = async context => {
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content } = allPosts.find((item) => item.slug === params.slug);
  const mdxSource = await renderToString(content);
  return {
    props: {
      ...data,
      date: data.date.toISOString(),
      content: mdxSource,
    },
  };
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