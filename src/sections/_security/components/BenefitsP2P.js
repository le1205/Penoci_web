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

  const data = [
    {
      title: 'Whom to buy your crypto',
      description:
        'Get your digital asset moving internationally. Save up to 2x when you send with Penoci',
    },
    {
      title: 'Another title',
      description:
        'Get your digital asset moving internationally. Save up to 2x when you send with Penoci',
    },
    {
      title: 'Another title',
      description:
        'Get your digital asset moving internationally. Save up to 2x when you send with Penoci',
    },
    {
      title: 'Another title',
      description:
        'Get your digital asset moving internationally. Save up to 2x when you send with Penoci',
    },
    // Add more objects for more items
  ];

  return (
    <StyledRoot>
      <Container sx={{ height: 1, my: 10 }}>
        <Grid container columnSpacing={3} justifyContent="space-between" sx={{ height: 1 }}>
          <Grid item xs={12}>
            <Stack
              spacing={3}
              justifyContent="center"
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }}>
                How to stay safe online
              </Typography>
              <Typography
                sx={{
                  fontSize: '23px',
                  color: '#9E9CAF',
                }}
              >
                You work hard for your money. Keeping it <br /> safe can be easy.
              </Typography>

              {data.map((item, index) => (
                <Box key={index}>
                  <div className="flex justify-between">
                    <Typography
                      sx={{
                        fontSize: '25px',
                        fontWeight: 'bold',
                        px: 2,
                        color: checked.indexOf(index) !== -1 ? '#291BDB' : 'black',
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: '17px',
                        color: checked.indexOf(index) !== -1 ? '#7C77B2' : 'text.secondary',
                      }}
                    >
                      {item.description}
                    </Typography>
                  </div>
                  <Divider sx={{ py: 1 }} />
                </Box>
              ))}
              <div className="flex justify-between">
                <Typography
                  sx={{
                    fontSize: '25px',
                    fontWeight: 'bold',
                    px: 2,
                    color: 'black',
                  }}
                >
                  555
                </Typography>

                <Typography
                  sx={{
                    fontSize: '17px',
                    color: 'text.secondary',
                  }}
                >
                  4545454
                </Typography>
              </div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}
