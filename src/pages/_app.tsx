import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <div>
        <Head>
          <title>My Site</title>
        </Head>
        <div className="lg:max-w-7xl mx-auto">
          <Component {...pageProps} key={router.route} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
