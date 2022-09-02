import Head from 'next/head';
import Image from 'next/image';
import Form from './components/form';
import Footer from './components/footer';
import Logo from './components/logo';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();
  const signupStatus = router.query;

  return (
    <div className="relative w-screen h-screen font-body">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="The best way to build and grow your decentralized community" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@consoledao" />
        <meta name="twitter:creator" content="" key="twhandle" />
        <meta name="twitter:title" content="The best way to build and grow your decentralized community" />

        {/* Open Graph */}
        <meta property="og:image" content="/console-og.png" key="ogimage" />
        <meta property="og:title" content="The best way to build and grow your decentralized community" />
        <meta property="og:site_name" content="Console" />
        <meta property="og:url" content="" />
        <meta property="og:description" content="The best way to build and grow your decentralized community" />
        <meta property="og:type" content="website" />

        <title>Console - The best way to build and grow your decentralized community</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#FF6700" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div className="relative z-10 flex flex-col items-center sm:max-w-3xl sm:mx-auto">
        <main>
          <div className="relative">
            <div className="flex flex-col px-6 py-8 sm:pt-24 xl:pt-32 sm:pb-6 sm:px-16">
              <div className="mx-auto">
                <Logo />
              </div>

              <h1 className="mt-4 text-3xl font-medium text-center text-white font-headlines md:mt-20 md:text-5xl xl:leading-[3.3rem] xl:text-6xl">Where decentralized communities thrive</h1>

              {/* <p className="mt-8 text-lg font-normal text-center text-white sm:text-xl">Sign up and be the first to hear when we launch</p> */}

              <Form status={signupStatus} />
            </div>
          </div>
        </main>
      </div>

      <Footer />

      <div className="w-screen h-[206px] fixed left-0 bottom-0">
        <Image src="/footer-slice.png" alt="" layout="fill" objectFit="cover" quality={100} />
      </div>
    </div>
  )
}
