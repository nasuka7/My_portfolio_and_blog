import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <div>
        <Head>
          <title>My Site</title>
        </Head>
        <Component {...pageProps} key={router.route} />
      </div>
    </>
  );
}

export default MyApp;
