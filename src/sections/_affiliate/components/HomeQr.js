import { m } from 'framer-motion';
import { useState } from 'react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Box,
  Button,
  Accordion,
  Container,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// config
import { HEADER } from 'src/config-global';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// assets
import { Pattern01 } from 'src/assets/illustrations/pattern';
// components
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------
const StyledRoot = styled('div')(({ theme }) => ({
  backgroundColor: '#F7F9EC',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    height: `calc(100vh - ${HEADER.H_MAIN_DESKTOP}px)`,
  },
}));

//----------------------------------
const CONTENTS = [
  {
    question: `What's in the product packages?`,
    answer: `Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,`,
  },
  {
    question: 'How can I upgrade my product plan?',
    answer: `Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,`,
  },
  {
    question: 'Are design assets (Figma, Sketch, Adobe XD) included?',
    answer: `Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,`,
  },
  {
    question: 'Does this product support TypeScript?',
    answer: `Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,`,
  },
  {
    question: 'Can I use this template in commercial projects like a SaaS?',
    answer: `Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,`,
  },
  {
    question: 'How can I request support?',
    answer: `Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,`,
  },
];

// ----------------------------------------------------------------------

export default function HomeFAQs() {
  const isSmUp = useResponsive('up', 'sm');

  const [expanded, setExpanded] = useState(false);

  const handleChangeExpanded = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <StyledRoot>
        <Container
          component={MotionViewport}
          sx={{
            position: 'relative',
            py: { xs: 5, md: 10 },
          }}
        >
          <Grid container spacing={{ md: 3 }} justifyContent="center">
            <Grid xs={12} md={8}>
              <m.div variants={varFade().in}>
                <Typography variant="h2" sx={{ textAlign: 'start' }}>
                  Questions about Referral Program
                </Typography>
              </m.div>

              <Box
                sx={{
                  my: { xs: 8, md: 10 },
                }}
              >
                {CONTENTS.map((faq) => (
                  <m.div key={faq.question} variants={varFade().in}>
                    <Accordion
                      expanded={expanded === faq.question}
                      onChange={handleChangeExpanded(faq.question)}
                    >
                      <AccordionSummary>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                          {faq.question}
                        </Typography>

                        <Iconify
                          width={24}
                          icon={expanded === faq.question ? 'carbon:subtract' : 'carbon:add'}
                        />
                      </AccordionSummary>

                      <AccordionDetails>
                        <Typography>{faq.answer}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  </m.div>
                ))}
              </Box>
            </Grid>
          </Grid>

          {isSmUp && (
            <Pattern01
              sx={{
                top: 80,
                left: 0,
                right: 0,
                zIndex: -1,
                mx: 'auto',
                maxWidth: 600,
                maxHeight: 600,
              }}
            />
          )}
        </Container>
      </StyledRoot>
      <Box
        sx={{
          py: '20px',
          width: 'fit-content',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          position: 'relative',
          animation: 'slide 20s linear infinite',
          '@keyframes slide': {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        }}
      >
        <Typography sx={{ fontSize: '79px', color: 'black' }}>
          Grow Your Revenue. Grow Your Loyalty. Grow With Highnote.
        </Typography>
      </Box>
    </>
  );
}
