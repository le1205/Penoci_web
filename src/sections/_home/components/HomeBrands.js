// @mui
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Typography, Stack, Container, Button, Box } from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import Carousel from 'src/components/carousel';

// ----------------------------------------------------------------------

export default function HomeBrands({ brands }) {
  const theme = useTheme();

  const carouselSettings = {
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <Container
      sx={{
        pt: 10,
        pb: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h2">
          We work with amazing people from
          <br /> these rad brands
        </Typography>
      </Stack>

      <Carousel {...carouselSettings}>
        {brands.map((brand) => (
          <SvgColor key={brand.id} src={brand.image} sx={{ width: 106, height: 32 }} />
        ))}
      </Carousel>
      <Stack alignItems="center" sx={{ py: 10 }}>
        <Button
          color="inherit"
          size="large"
          // variant="outlined"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          Show clients projects
        </Button>
      </Stack>
    </Container>
  );
}

HomeBrands.propTypes = {
  brands: PropTypes.array,
};
