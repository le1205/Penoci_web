import { useRef, useState } from 'react';
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

const StyledCheckbox = styled(MuiCheckbox)(({ theme, checked }) => ({
  color: checked ? '#291BDB' : 'black',
  '&.Mui-checked': {
    color: '#291BDB',
  },
  '& .MuiSvgIcon-root': {
    fill: checked ? '#white' : 'currentColor',
  },
}));

// ----------------------------------------------------------------------

export default function BenefitsP2P() {
  const containerRef = useRef(null);

  const isMdUp = useResponsive('up', 'md');

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <StyledRoot>
      <Container sx={{ height: 1, py: 10 }}>
        <Grid container columnSpacing={3} justifyContent="space-between" sx={{ height: 1 }}>
          <Grid item xs={12} md={6}>
            <Box position="relative">
              <Image
                visibleByDefault
                disabledEffect
                alt="home hero"
                src="/assets/images/home/rec_green.png"
              />
              <Typography
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#9E9CAF',
                }}
              >
                Text over image
              </Typography>
              <Button
                color="inherit"
                size="large"
                variant="contained"
                target="_blank"
                rel="noopener"
                sx={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  transform: 'translate(-50%, 0)',
                  backgroundColor: '#291BDB',
                  color: 'white',
                  textTransform: 'none',
                }}
                // href={paths.figmaPreview}
              >
                Track a transfer&nbsp;
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ position: 'absolute', top: '40%', left: '40%' }}>
            <Image
              visibleByDefault
              disabledEffect
              sx={{ width: '90%' }}
              alt="home hero"
              src="/assets/images/home/rec_green.png"
            />
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}
