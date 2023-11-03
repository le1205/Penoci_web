import { useRef } from 'react';
import { m } from 'framer-motion';
// @mui
import { Box, Paper, Container, Typography, Grid, Stack, Button, Divider } from '@mui/material';
//hook
import useResponsive from 'src/hooks/useResponsive';
import useBoundingClientRect from 'src/hooks/useBoundingClientRect';
// components
import Image from 'src/components/image';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeNewStart() {
  const containerRef = useRef(null);

  const isMdUp = useResponsive('up', 'md');

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  return (
    <Container
      component={MotionViewport}
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Paper
        sx={{
          pb: 10,
          borderRadius: 3,
          textAlign: 'center',
          backgroundImage: `url('/assets/images/home/bg_blue.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // bgcolor: 'background.neutral',
        }}
      >
        <Container sx={{ height: 1 }}>
          <Grid container columnSpacing={3} alignItems="center" sx={{ height: 1 }}>
            <Grid item xs={12} md={7}>
              <Stack
                spacing={3}
                justifyContent="center"
                alignItems={{ xs: 'center', md: 'flex-start' }}
                sx={{
                  py: 15,
                  px: 10,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                <Typography sx={{ fontSize: '50px', fontWeight: 'bold', color: 'white' }}>
                  Create your <br />
                  profile today with <br /> your phone <br />
                  number to send
                  <br />
                  money online
                </Typography>

                <Button
                  color="inherit"
                  size="large"
                  variant="contained"
                  // endIcon={<Iconify icon="carbon:launch" />}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    backgroundColor: '#D7FF1D',
                    color: 'black',
                    textTransform: 'none',
                    fontSize: '25px',
                  }}
                  // href={paths.figmaPreview}
                >
                  Learn More
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} md={2}>
              <Stack
                spacing={10}
                justifyContent="center"
                alignItems={{ xs: 'center', md: 'flex-start' }}
              >
                <Box display="flex" flexDirection="column" alignItems="start">
                  <img
                    src="/assets/icons/icon/ic_wp.svg"
                    alt="icon"
                    style={{ verticalAlign: 'middle', width: '40px' }}
                  />
                  <Typography
                    sx={{ fontSize: '20px', fontWeight: 'bold', color: 'white', py: '15px' }}
                  >
                    Register online
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="start">
                  <img
                    src="/assets/icons/icon/ic_user.svg"
                    alt="icon"
                    style={{ verticalAlign: 'middle', width: '45px' }}
                  />

                  <Typography
                    sx={{
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: 'white',
                      py: '15px',
                      textAlign: 'start',
                    }}
                  >
                    Verify your <br />
                    profile
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <img
                    src="/assets/icons/icon/ic_ios_send.svg"
                    alt="icon"
                    style={{ verticalAlign: 'middle', width: '45px' }}
                  />
                  <Typography
                    sx={{
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: 'white',
                      py: '15px',
                      textAlign: 'start',
                    }}
                  >
                    Send money <br /> online 24/7
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Divider sx={{ py: '13px' }} />
      <Grid container columnSpacing={3} alignItems="center" sx={{ height: 1, py: '20px' }}>
        <Grid item xs={12} md={6} display={'flex'}>
          <Box position="relative" width="60px" height="60px">
            <img
              src="/assets/icons/icon/ic_elipse.svg"
              alt="icon"
              style={{ verticalAlign: 'middle', width: '60px' }}
            />
            <img
              src="/assets/icons/icon/ic_g18.svg"
              alt="icon"
              style={{
                position: 'absolute',
                top: 8,
                left: 10,
                verticalAlign: 'middle',
                width: '40px',
              }}
            />
          </Box>
          &nbsp;
          <Typography
            sx={{
              py: '15px',
              fontSize: '20px',
              color: '#000000',
              textAlign: 'start',
            }}
          >
            Send to 70+ countries, fast with Penoci app
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} display={'flex'}>
          <Box position="relative" width="60px" height="60px">
            <img
              src="/assets/icons/icon/ic_elipse.svg"
              alt="icon"
              style={{ verticalAlign: 'middle', width: '60px' }}
            />
            <img
              src="/assets/icons/icon/ic_key.svg"
              alt="icon"
              style={{
                position: 'absolute',
                top: 8,
                left: 10,
                verticalAlign: 'middle',
                width: '40px',
              }}
            />
          </Box>
          &nbsp;
          <Typography
            sx={{
              py: '15px',
              fontSize: '20px',
              color: '#000000',
              textAlign: 'start',
            }}
          >
            We protect your details through strict standards
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
