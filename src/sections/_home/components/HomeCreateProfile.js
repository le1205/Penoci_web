import { useRef } from 'react';
import { YouTubeLite } from 'react-youtube-lite';
// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Box,
  Stack,
  Button,
  Container,
  Typography,
  Divider,
  Unstable_Grid2 as Grid,
} from '@mui/material';
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

// ----------------------------------------------------------------------

export default function HomeCreateProfile() {
  const containerRef = useRef(null);

  const isMdUp = useResponsive('up', 'md');

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  return (
    <StyledRoot>
      <Container sx={{ height: 1 }}>
        <Grid container columnSpacing={3} alignItems="center" sx={{ height: 1 }}>
          <Grid xs={12} md={6}>
            {isMdUp && (
              <div
                style={{
                  backgroundImage: `url('/assets/images/home/bg_video.png')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <YouTubeLite
                  url="https://www.youtube.com/watch?v=VideoID"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '80%',
                    height: '80%',
                    transform: 'translate(5%, 10%)',
                  }}
                />
              </div>
            )}
          </Grid>
          <Grid xs={12} md={6}>
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
                Create your profile <br />
                today with your phonr <br />
                number to send money
                <br />
                online
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  color: 'text.secondary',
                }}
              >
                &nbsp;&nbsp;
                <Grid container alignItems="center" justifyContent="space-between">
                  <Grid item xs={3}>
                    <Typography sx={{ fontSize: '20px', color: '#000', fontWeight: 'bold' }}>
                      72+
                      <br />
                      Countries
                    </Typography>
                  </Grid>
                  &nbsp; &nbsp; &nbsp;
                  <Divider orientation="vertical" flexItem />
                  <Grid item xs={3} sx={{ px: 5 }}>
                    <Typography sx={{ fontSize: '20px', color: '#000', fontWeight: 'bold' }}>
                      24 Million
                      <br />
                      Merchants
                    </Typography>
                  </Grid>{' '}
                  &nbsp; &nbsp; &nbsp;
                  <Divider orientation="vertical" flexItem />
                  <Grid item xs={3} sx={{ px: 5 }}>
                    <Typography sx={{ fontSize: '20px', color: '#000', fontWeight: 'bold' }}>
                      42 Million
                      <br />
                      Users
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}
