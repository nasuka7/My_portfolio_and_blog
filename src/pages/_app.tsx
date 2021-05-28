import '@/styles/globals.css';
import Head from 'next/head';
import Headbar from '@/components/Headbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <div>
        <Head>
          <title>KO BLOG A freely</title>
        </Head>
        <div className="lg:max-w-7xl md:max-w-xl max-w-xs mx-auto">
          <Headbar />
          <Component {...pageProps} key={router.route} />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
