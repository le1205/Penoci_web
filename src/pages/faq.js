// next
import Head from 'next/head';
// @mui
import { Box, Container, Typography, Stack, Grid } from '@mui/material';
// layouts
import MainLayout from '../layouts/main';
// sections
import { FaqsHero, FaqsCategory, FaqsList, FaqsForm } from '../sections/faqs';

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
        <Grid container columnSpacing={0} alignItems="center" sx={{ height: 1 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" sx={{ mb: 5 }}>
              FAQ
            </Typography>
            <Typography sx={{ mb: 30, fontSize: '20px' }}>
              Because we believe in
              <br /> transparency right <br />
              from the jump.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
          
            <FaqsList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
