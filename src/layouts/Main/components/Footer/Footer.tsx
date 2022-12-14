import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Footer = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="CCnets"
            width={80}
          >
            <Box
              component={'img'}
              src={'favicon/favicon_name.png'}
              height={1}
              width={1}
            />
          </Box>
          <Box
            display="flex"
            flexWrap={'wrap'}
            alignItems={'center'}
            justifyContent={'end'}
          >
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={'subtitle2'}
              >
                Home
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="https://github.com/junho-ccnets/causal-learning.git"
                color="text.primary"
                variant={'subtitle2'}
              >
                Github
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="https://patents.google.com/patent/WO2022164299A1"
                color="text.primary"
                variant={'subtitle2'}
              >
                Publication
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="mailto:jisuhong@ccnets.org"
                color="#4B7BF7"
                fontWeight={'bold'}
                variant={'subtitle2'}
              >
                Contact
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="https://www.linkedin.com/company/ccnets/"
                color="#4B7BF7"
                fontWeight={'bold'}
                variant={'subtitle2'}
              >
                LinkedIn
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; CCNets. 2022, All rights reserved
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
