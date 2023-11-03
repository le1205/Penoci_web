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
      <Grid container columnSpacing={3} alignItems="center" sx={{ height: 1 }}>
        <Grid item xs={12} md={6}>
          <Stack
            spacing={2}
            justifyContent="center"
            alignItems={{ xs: 'center', md: 'flex-start' }}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography sx={{ fontSize: '40px', fontWeight: 'bold' }}>
              Accept crypto payments <br /> from your mobile number
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Every month, our customers trust us to move around £9
              <br /> billion of their money. Here are some of the important <br /> ways we protect
              them.
            </Typography>

            <Stack spacing={3}>
              <Button
                color="inherit"
                size="large"
                variant="contained"
                target="_blank"
                rel="noopener"
                sx={{ backgroundColor: '#291BDB', color: 'white', textTransform: 'none' }}
                // href={paths.figmaPreview}
              >
                Track a transfer&nbsp;
                <ArrowForwardIcon sx={{ color: 'white', width: '2px', height: '20px' }} />
              </Button>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          {isMdUp && (
            <Image
              visibleByDefault
              disabledEffect
              alt="home hero"
              src="/assets/images/home/globe.png"
              sx={{
                width: '750px', // Adjust as needed
                height: '70%', // Adjust as needed
              }}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
