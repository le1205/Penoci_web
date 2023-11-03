import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Box,
  Stack,
  Button,
  Container,
  Typography,
  Divider,
  Checkbox as MuiCheckbox,
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

// ----------------------------------------------------------------------

export default function TestimonialEcommerce() {
  const containerRef = useRef(null);

  const isMdUp = useResponsive('up', 'md');

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  const marginTopValues = ['5px', '150px', '0px', '145px'];
  const marginTopValues2 = ['1px', '5px', '0px', '0px'];

  return (
    <Container sx={{ py: 10 }}>
      <Grid container columnSpacing={3} justifyContent="space-between" sx={{ height: 1 }}>
        {marginTopValues.map((mt, index) => (
          <Grid item xs={3} key={index}>
            <Box mt={mt}>
              <Image
                visibleByDefault
                disabledEffect
                alt={`home hero ${index}`}
                src={`/assets/images/support/${index + 1}.png`}
              />
              <Typography
                sx={{
                  fontSize: '30px',
                  fontWeight: 'bold',
                  color: 'black',
                }}
              >
                Thomas Cook
              </Typography>
              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#9E9CAF',
                }}
              >
                CEO, Penoci
              </Typography>
            </Box>
          </Grid>
        ))}
        {marginTopValues.map((mt, index) => (
          <Grid item xs={3} key={index}>
            <Box mt={mt}>
              <Image
                visibleByDefault
                disabledEffect
                alt={`home hero ${index}`}
                src={`/assets/images/support/${index + 1}.png`}
              />
              <Typography
                sx={{
                  fontSize: '30px',
                  fontWeight: 'bold',
                  color: 'black',
                }}
              >
                Thomas Cook
              </Typography>
              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#9E9CAF',
                }}
              >
                CEO, Penoci
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
