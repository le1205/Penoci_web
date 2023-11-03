import { m } from 'framer-motion';
import { useState } from 'react';
// @mui
import { Accordion, Typography, AccordionSummary, AccordionDetails, Box } from '@mui/material';
// _mock_
import { _faqs } from '../../_mock/arrays';
// components
import Iconify from '../../components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------
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
export default function FaqsList() {
  const [expanded, setExpanded] = useState(false);

  const handleChangeExpanded = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
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
  );
}
