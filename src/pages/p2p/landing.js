// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { P2pLandingView } from 'src/sections/_p2p';

// ----------------------------------------------------------------------

P2pPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function P2pPage() {
  return (
    <>
      <Head>
        <title>Landing | ZONE UI</title>
      </Head>

      <P2pLandingView />
    </>
  );
}
