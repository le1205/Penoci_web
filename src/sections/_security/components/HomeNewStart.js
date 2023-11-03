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
      <Grid
        container
        columnSpacing={3}
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: 1, py: '20px' }}
      >
        <Grid item xs={12} display={'flex'} sx={{ mb: 10 }}>
          <Typography sx={{ fontSize: '43px', fontWeight: 'bold', color: '#9E9CAF' }}>
            Beyond being&nbsp;
            <span style={{ color: '#180CB2' }}>Extended Validation SSL certified</span>, here
            <br /> are just a few of the measures we take to keep you and
            <br /> your money safe.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
