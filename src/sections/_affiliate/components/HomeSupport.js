import PropTypes from 'prop-types';
import { useRef } from 'react';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Typography, Container, Box, Stack } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components
import Carousel, { CarouselArrows, CarouselDots } from 'src/components/carousel';
//
import Item from './Item';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  backgroundColor: '#F7F9EC',
  position: 'relative',
  overflow: 'hidden',
  // [theme.breakpoints.up('md')]: {
  //   height: `calc(100vh - ${HEADER.H_MAIN_DESKTOP}px)`,
  // },
}));

export default function TestimonialEcommerce({ testimonials }) {
  const theme = useTheme();

  const isMdUp = useResponsive('up', 'md');

  const carouselRef = useRef(null);

  const carouselSettings = {
    dots: !isMdUp,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      sx: {
        mt: 8,
      },
    }),
    responsive: [
      {
        // Down md
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2, slidesToScroll: 3 },
      },
      {
        // Down sm
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <StyledRoot>
      <Container
        sx={{
          pt: 8,
          pb: { xs: 8, md: 10 },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{ mb: 8 }}>
          <div className="col">
            <Typography
              variant="h3"
              sx={{ textAlign: { xs: 'center', md: 'center' }, flexGrow: 1 }}
            >
              What people are saying
            </Typography>
            <Typography
              sx={{ textAlign: { xs: 'center', md: 'center' }, flexGrow: 1, color: '#949494' }}
            >
              4.9 stars on iOS and 4.8 stars on Android
            </Typography>
          </div>
        </Stack>

        <Carousel ref={carouselRef} {...carouselSettings}>
          {testimonials.map((testimonial) => (
            <>
              <Box key={testimonial.id} sx={{ px: 1.5 }}>
                <Item testimonial={testimonial} />
              </Box>
              <Box key={testimonial.id} sx={{ px: 1.5, py: 2 }}>
                <Item testimonial={testimonial} />
              </Box>
            </>
          ))}
        </Carousel>
      </Container>
    </StyledRoot>
  );
}

TestimonialEcommerce.propTypes = {
  testimonials: PropTypes.array,
};
