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
  // ...bgGradient({
  //   color: alpha(theme.palette.background.default, 0.9),
  //   imgUrl: '/assets/background/overlay_1.jpg',
  // }),
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    height: `calc(100vh - ${HEADER.H_MAIN_DESKTOP}px)`,
  },
}));
const images = [
  {
    alt: 'support1',
    src: '/assets/icons/support/gezy.png',
  },
  {
    alt: 'support2',
    src: '/assets/icons/support/arb.png',
  },
  {
    alt: 'support',
    src: '/assets/icons/support/bel.png',
  },
  {
    alt: 'support2',
    src: '/assets/icons/support/btcmt.png',
  },
  {
    alt: 'support2',
    src: '/assets/icons/support/cake.png',
  },
  {
    alt: 'support2',
    src: '/assets/icons/support/ctsi.png',
  },
  {
    alt: 'support1',
    src: '/assets/icons/support/dai.png',
  },
  {
    alt: 'support2',
    src: '/assets/icons/support/fevr.png',
  },
  {
    alt: 'support2',
    src: '/assets/icons/support/gfal.png',
  },
  {
    alt: 'support2',
    src: '/assets/icons/support/gmee.png',
  },
  {
    alt: 'support2',
    src: '/assets/icons/support/high.png',
  },
  {
    alt: 'support2',
    src: '/assets/icons/support/ice.png',
  },
  {
    alt: 'support1',
    src: '/assets/icons/support/lmwr.png',
  },
  {
    alt: 'support2',
    src: '/assets/icons/support/nft.png',
  },
  {
    alt: 'support2',
    src: '/assets/icons/support/pla.png',
  },
  {
    alt: 'support2',
    src: '/assets/icons/support/sable.png',
  },
  {
    alt: 'support2',
    src: '/assets/icons/support/shib.png',
  },
  {
    alt: 'support2',
    src: '/assets/icons/support/shred.png',
  },
  {
    alt: 'support1',
    src: '/assets/icons/support/sable.png',
  },
  {
    alt: 'support2',
    src: '/assets/icons/support/pla.png',
  },
  {
    alt: 'support2',
    src: '/assets/icons/support/adp.png',
  },
  {
    alt: 'support2',
    src: '/assets/icons/support/shred.png',
  },
  {
    alt: 'support2',
    src: '/assets/icons/support/pla.png',
  },
  {
    alt: 'support2',
    src: '/assets/icons/support/adp.png',
  },
  // add more image objects here as needed
];
// ----------------------------------------------------------------------

export default function HomeSupport() {
  const isMdUp = useResponsive('up', 'md');

  return (
    <StyledRoot>
      <Container sx={{ height: 1 }}>
        <Grid container columnSpacing={3} alignItems="center" sx={{ height: 1 }}>
          <Grid xs={12} md={4}>
            <Stack
              spacing={3}
              justifyContent="center"
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{
                py: 15,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography sx={{ fontSize: '50px', fontWeight: 'bold' }}>
                Penoci <br />
                supported
                <br /> currencies
                <br /> more than 35+
                <br /> coins
              </Typography>
            </Stack>
          </Grid>

          <Grid xs={12} md={8}>
            <div className="grid grid-cols-6 gap-1">
              {images.map((image, index) => (
                <Image key={index} alt={image.alt} src={image.src} sx={{ width: '117px' }} />
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}
