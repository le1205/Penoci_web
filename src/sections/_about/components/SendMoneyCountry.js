import { useRef, useState } from 'react';
import { m } from 'framer-motion';
import Typist from 'react-typist';
// @mui
import { Box, Paper, Container, Typography, Grid, Stack, Button, Divider } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
      <Grid container sx={{ height: 1, gap: 9 }}>
        <Grid item xs={12} md={3.5}>
          <Stack
            spacing={2}
            justifyContent="center"
            alignItems={{ xs: 'center', md: 'flex-start' }}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Image
              visibleByDefault
              disabledEffect
              alt="home hero"
              src="/assets/images/home/ic_key.png"
              // sx={{
              //   width: '750px', // Adjust as needed
              //   height: '70%', // Adjust as needed
              // }}
            />
            <Typography sx={{ color: 'text.secondary', fontSize: '20px' }}>
              Our dedicated fraud and security <br />
              teams work to keep your money
              <br /> safe
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3.5}>
          <Stack
            spacing={2}
            justifyContent="center"
            alignItems={{ xs: 'center', md: 'flex-start' }}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Image
              visibleByDefault
              disabledEffect
              alt="home hero"
              src="/assets/images/home/ic_mkey.png"
            />
            <Typography sx={{ color: 'text.secondary', fontSize: '20px' }}>
              We use 2-factor authentication <br />
              to protect your account
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3.5}>
          <Stack
            spacing={2}
            justifyContent="center"
            alignItems={{ xs: 'center', md: 'flex-start' }}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Image
              visibleByDefault
              disabledEffect
              alt="home hero"
              src="/assets/images/home/ic_auth.png"
            />
            <Typography sx={{ color: 'text.secondary', fontSize: '20px' }}>
              You can transfer your money to
              <br /> verified addressed user
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
