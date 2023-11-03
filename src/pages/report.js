// next
import Head from 'next/head';
// @mui
import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import EmailIcon from '@material-ui/icons/Email';
// layouts
import MainLayout from '../layouts/main';
// sections
import { FaqsHero, FaqsCategory, FaqsList, FaqsForm } from '../sections/report';

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
            <Typography variant="h3" sx={{ mb: 5 }}>
              Issue details
            </Typography>
            <Typography sx={{ mb: 30, fontSize: '20px' }}>
              Please fill the form with your <br />
              product details.Because we <br />
              believe in transparency <br />
              right from the jump.
            </Typography>
            <Typography sx={{ fontSize: '15px', mt: 2 }}>
              <EmailIcon />
              &nbsp; Email directly to help
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            {/* <Box
              gap={10}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
              }}
            > */}
            <FaqsForm />
            {/* </Box> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
