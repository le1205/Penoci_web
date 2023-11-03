// next
import Head from 'next/head';
// @mui
import { Box, Container, Typography, Stack, Grid, Divider } from '@mui/material';
import EmailIcon from '@material-ui/icons/Email';
import Image from 'src/components/image';
// layouts
import MainLayout from '../layouts/main';
// sections
import { FaqsHero, FaqsCategory, FaqsList, FaqsForm } from '../sections/_contact';

// ----------------------------------------------------------------------

FaqsPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function FaqsPage() {
  return (
    <>
      <Head>
        <title> Faqs | Minimal UI</title>
      </Head>

      <FaqsHero />

      <Container sx={{ pt: 5, pb: 10, position: 'relative' }}>
        <Grid container columnSpacing={7} alignItems="center" sx={{ height: 1 }}>
          <Grid item xs={12} md={4} sx={{ mb: 30 }}>
            <Typography sx={{ fontSize: '20px' }}>
              We're just one click away to help <br />
              you take your project from great
              <br /> to incredible. Fill in the form to
              <br /> share more details . Either way,
              <br /> we’d love to talk.
            </Typography>
            <Typography sx={{ fontSize: '15px', mt: 2 }}>
              <EmailIcon />
              &nbsp; Email directly to help
            </Typography>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={12} md={7}>
            <FaqsForm />
          </Grid>
        </Grid>
        <Grid container columnSpacing={7} alignItems="center" sx={{ height: 1, mt: 10 }}>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontSize: '20px' }}>
              Our office is located by the <br />
              Dubai free zone
            </Typography>
            <Typography sx={{ fontSize: '15px', mt: 15 }}>Our address</Typography>
            <Typography sx={{ fontSize: '20px' }}>
              Penoci Limited, <br />
              IFZA Properties, Dubai <br />
              Silicon Oasis-93193
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Image src="/assets/images/home/map.png" alt="map" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
