/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import PhoneSkeletonIllustration from 'svg/illustrations/PhoneSkeleton';

const Features = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
              The powerful and flexible theme for all kinds of businesses
            </Typography>
            <Typography color="text.secondary" variant={'h6'}>
              Send one-off and automated email, push, and in-app messages to
              people.
              <br />
              Create better stories.
            </Typography>
          </Box>
          <Grid container spacing={1}>
            {[
              'Adaptable to new data / situations',
              'Works with data sets of all sizes, even with missing data',
              'Clearly shows its processes ',
              'Explainable (the ‘why’ is shown)',
              'Can deal with hypothetical situations',
              'Can reconstruct data',
              ' Bias-free',
            ].map((item, i) => (
              <Grid item xs={12} key={i}>
                <Box
                  component={ListItem}
                  disableGutters
                  width={'auto'}
                  padding={0}
                >
                  <Box
                    component={ListItemAvatar}
                    minWidth={'auto !important'}
                    marginRight={2}
                  >
                    <Box
                      component={Avatar}
                      bgcolor={theme.palette.secondary.main}
                      width={20}
                      height={20}
                    >
                      <svg
                        width={12}
                        height={12}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Box>
                  </Box>
                  <ListItemText primary={item} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box>
          <Box
            component={'img'}
            loading="lazy"
            src={'performance_of_ccnets.png'}
            alt="Image Description"
            width={1}
            height={1}
            sx={{
              borderRadius: '2.5rem',
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Features;
