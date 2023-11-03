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
      <Container sx={{ height: 1 }}>
        <Grid container columnSpacing={3} justifyContent="space-between" sx={{ height: 1 }}>
          <Grid item xs={12} md={6}>
            <Stack
              spacing={3}
              justifyContent="center"
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography sx={{ fontSize: '50px', fontWeight: 'bold' }}>Benefits of P2P</Typography>

              {data.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: checked.indexOf(index) !== -1 ? '#F6F5FF' : 'transparent',
                    color: checked.indexOf(index) !== -1 ? '#291BDB' : 'black',
                  }}
                >
                  <div className="flex">
                    <StyledCheckbox
                      checked={checked.indexOf(index) !== -1}
                      onChange={handleToggle(index)}
                    />
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
                  </div>
                  <div className="px-14">
                    <Typography
                      sx={{
                        fontSize: '17px',
                        color: checked.indexOf(index) !== -1 ? '#7C77B2' : 'text.secondary',
                      }}
                    >
                      {item.description}
                    </Typography>
                    <Divider sx={{ py: 1 }} />
                  </div>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Image
              visibleByDefault
              disabledEffect
              alt="home hero"
              src="/assets/images/home/benefits_p2p.png"
            />
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}
