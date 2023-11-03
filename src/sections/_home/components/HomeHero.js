import { useRef } from 'react';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Stack, Button, Container, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// hooks
import useResponsive from 'src/hooks/useResponsive';
import useBoundingClientRect from 'src/hooks/useBoundingClientRect';
// config
import { HEADER } from 'src/config-global';
// routes
import { paths } from 'src/routes/paths';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    // color: alpha(theme.palette.background.default, 0.9),
    // imgUrl: '/assets/background/overlay_1.jpg',
  }),
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    height: `calc(100vh - ${HEADER.H_MAIN_DESKTOP}px)`,
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  const containerRef = useRef(null);

  const isMdUp = useResponsive('up', 'md');

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  return (
    <StyledRoot>
      <Container sx={{ height: 1 }}>
        <Grid container columnSpacing={3} alignItems="center" sx={{ height: 1 }}>
          <Grid item xs={12} md={6}>
            <Stack
              spacing={2}
              justifyContent="center"
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{
                py: 15,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography sx={{ fontSize: '50px', fontWeight: 'bold' }}>
                Accept crypto <br />{' '}
                <Box component="span" sx={{ color: '#180CB2' }}>
                  payments
                </Box>
                &nbsp; from your <br /> mobile number with <br />
                <Box component="span" sx={{ borderBottom: '5px solid #D7FF1D' }}>
                  verified
                </Box>{' '}
                addresses
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                Get your digital asset moving <br />
                internationally. Save up to 2x when you
                <br /> send with Penoci
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                <img
                  src="/assets/icons/ic_shield.svg"
                  alt="icon"
                  style={{ verticalAlign: 'middle', width: '25px' }}
                />
                &nbsp;&nbsp;
                <Typography>
                  <Box component="span" sx={{ color: '#848484', fontWeight: 'bold' }}>
                    Be informed. Be aware.
                  </Box>{' '}
                  <Box component="span" sx={{ borderBottom: '2px solid ' }}>
                    Protect yourself from fraud.
                  </Box>
                </Typography>
              </Box>
              <Stack spacing={3}>
                <Button
                  color="inherit"
                  size="large"
                  variant="contained"
                  // endIcon={<Iconify icon="carbon:launch" />}
                  target="_blank"
                  rel="noopener"
                  sx={{ backgroundColor: '#D7FF1D', color: 'black', textTransform: 'none' }}
                  // href={paths.figmaPreview}
                >
                  Send money now
                </Button>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            {isMdUp && (
              // <Box
              //   sx={{
              //     maxWidth: 1280,
              //     position: 'absolute',
              //     bottom: { md: '20%', lg: 40 },
              //     right: { md: -350, xl: 0 },
              //     width: { md: `calc(100% - ${offsetLeft}px)` },
              //   }}
              // >
              <Image
                visibleByDefault
                disabledEffect
                alt="home hero"
                src="/assets/images/home/bg_sam.png"
                sx={{
                  width: '750px', // Adjust as needed
                  height: '70%', // Adjust as needed
                }}
              />
              // </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}
