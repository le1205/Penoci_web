import { useRef } from 'react';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Stack, Button, Container, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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

export default function HomeHero() {
  const containerRef = useRef(null);

  const isMdUp = useResponsive('up', 'md');

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  return (
    <Box
      sx={{
        minHeight: { md: '90vh' },
        position: 'relative',
        backgroundImage: `url("/assets/images/home/aff.png")`, // Set your image path here
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent image repetition
        backgroundSize: 'cover', // Ensure the image covers the whole Box
        display: 'flex', // Create a flex container
        alignItems: 'center', // Center items vertically
        justifyContent: 'start', // Align items to the left
      }}
    >
      <Typography
        variant="h2"
        sx={{ color: 'black', position: 'absolute', top: '100px', left: '100px' }}
      >
        Join our affiliate program and <br />
        earn&nbsp;
        <span style={{ color: 'white' }}>50%</span>&nbsp; of each conversion
      </Typography>
      <Typography
        sx={{ fontSize: '30px', color: 'black', position: 'absolute', top: '300px', left: '100px' }}
      >
        One of the highest paying affiliate program in the industry.
        <br /> Register on our referral program now!
      </Typography>
      <Button
        color="inherit"
        size="large"
        variant="contained"
        target="_blank"
        rel="noopener"
        sx={{
          backgroundColor: '#212126',
          color: 'white',
          textTransform: 'none',
          top: '100px',
          left: '100px',
          width: '300px',
          height: '65px',
          fontSize: '20px',
        }}
        // href={paths.figmaPreview}
      >
        Join Now&nbsp;
        <ArrowForwardIcon sx={{ color: 'white', width: '2px', height: '20px' }} />
      </Button>
    </Box>
  );
}
