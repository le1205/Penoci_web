import { useState, useRef } from 'react';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Card, Grid, Typography, Stack, Container } from '@mui/material';
//Config
import { HEADER } from 'src/config-global';
import useBoundingClientRect from 'src/hooks/useBoundingClientRect';
//

// ----------------------------------------------------------------------

export default function HomeDesc() {
  const containerRef = useRef(null);
  const [count, setCount] = useState(0);
  const [selectVariant, setSelectVariant] = useState('slideInUp');
  const container = useBoundingClientRect(containerRef);
  const handleChangeVariant = (event) => {
    setCount(count + 1);
    setSelectVariant(event.target.value);
  };

  return (
    <Container sx={{ py: { xs: 8, md: 15 } }}>
      <Grid container spacing={3} justifyContent={{ lg: 'space-between' }}>
        {variantKey.map((variant) => (
          <Stack key={variant.order} sx={{ my: 1.5, display: 'flex', flexDirection: 'row' }}>
            <Typography
              sx={{ px: 1, mb: 1, color: '#D7FF1D', fontSize: { xs: '40px', md: '65px' } }}
            >
              {variant.order}
            </Typography>
            <Typography
              sx={{ px: 1, mb: 1, color: '#180CB2', fontSize: { xs: '40px', md: '65px' } }}
            >
              {variant.values}
            </Typography>
          </Stack>
        ))}
      </Grid>
    </Container>
  );
}

// ----------------------------------------------------------------------

const variantKey = [
  {
    order: '01.',
    values: ' PUT PLANET FIRST',
  },
  {
    order: '02.',
    values: ' MAKE BUSINESS DO GOOD',
  },
  {
    order: '03.',
    values: ' SEND RAPIDLY',
  },
  {
    order: '04.',
    values: ' WORK TOGETHER ',
  },
  {
    order: '05.',
    values: ' CHANGE THE WORLD ',
  },
];
