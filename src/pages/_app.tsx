import "@/styles/globals.css";
import Head from "next/head";
import Headbar from "@/components/Headbar";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <div>
        <Head>
          <title>KK BLOG</title>
        </Head>
        <div className="lg:max-w-5xl mx-auto">
          <Headbar />
          <Component {...pageProps} key={router.route} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
