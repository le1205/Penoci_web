// next
import Head from 'next/head';
// @mui
import { Box, Container, Typography, Stack, Grid, Card, Button } from '@mui/material';
// layouts
import MainLayout from '../layouts/main';
// sections
import { FaqsHero, FaqsCategory, FaqsList, FaqsForm } from '../sections/_blog';
import Image from 'src/components/image';
import useResponsive from '../hooks/useResponsive';

// ----------------------------------------------------------------------

FaqsPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------
const blogs = [
  {
    id: 1,
    title: 'Blog Post 1',
    text: '<p>This is the first blog post.</p>',
    files: [
      {
        preview: 'https://via.placeholder.com/200',
      },
    ],
  },
  {
    id: 2,
    title: 'Blog Post 2',
    text: '<p>This is the second blog post.</p>',
    files: [
      {
        preview: 'https://via.placeholder.com/200',
      },
    ],
  },
  {
    id: 3,
    title: 'Blog Post 3',
    text: '<p>This is the third blog post.</p>',
    files: [
      {
        preview: 'https://via.placeholder.com/200',
      },
    ],
  },
];
export default function FaqsPage() {
  const isDesktop = useResponsive('up', 'sm');

  return (
    <>
      <Head>
        <title> Faqs | Minimal UI</title>
      </Head>

      <FaqsHero />

      <Container sx={{ pt: 5, pb: 10, position: 'relative' }}>
        {/* <FaqsCategory /> */}
        <Grid container columnSpacing={0} alignItems="center" sx={{ height: 1 }}>
          <Grid item xs={12}>
            <Card sx={{ p: 3, mb: 10 }}>
              {blogs && blogs.length > 0 ? (
                <Stack sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(3, 1fr)',
                      },
                    }}
                    gap={2}
                  >
                    {blogs &&
                      blogs.length > 0 &&
                      blogs.map((blog) => (
                        <Box
                          key={blog.id}
                          display="flex"
                          flexDirection="column"
                          gap={1}
                          borderRadius="10%"
                          justifyContent="space-between"
                        >
                          <Box>
                            <Image
                              src={blog.files.length > 0 && blog.files[0].preview}
                              alt="blog"
                              style={{ cursor: 'pointer' }}
                              width="100%"
                              ratio="16/9"
                            />
                            <Typography
                              className="cursor-pointer"
                              sx={{
                                fontSize: isDesktop ? '24px' : '18px',
                                fontWeight: '700',
                                color: '#006FBA',
                              }}
                            >
                              {blog.title}
                            </Typography>
                            <Box />
                            <div
                              id={`blog-fences-${blog.id}`}
                              className="blog-fences"
                              dangerouslySetInnerHTML={{ __html: blog.text }}
                            />
                          </Box>
                        </Box>
                      ))}
                  </Box>
                  <Stack width="100%" sx={{ alignItems: 'center', mb: 16 }}>
                    {/* <Button
                      variant="contained"
                      size="large"
                      sx={{
                        width: '146px',
                        mt: 5,
                        backgroundColor: 'rgb(31, 169, 255) !important',
                      }}
                      onClick={handleLoadMore}
                    >
                      Load More
                    </Button> */}
                  </Stack>
                </Stack>
              ) : null}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
