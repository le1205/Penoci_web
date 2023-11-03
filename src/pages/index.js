// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import HomeView from 'src/sections/_home/view';

// ----------------------------------------------------------------------

HomePage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Penoci</title>
      </Head>

      <HomeView />
    </>
  );
}
