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
              Performance of current leading models
            </Typography>
            <Typography color="text.secondary" variant={'h6'}>
              Every kind of model has its own strengths and weaknesses, how do
              they compare?
            </Typography>
          </Box>
          <Grid container spacing={1}>
            {[
              'Relevant to a wide variety of fields',
              'Capable of dealing with hypothetical scenarios',
              'Adaptable and flexible to new situations',
              'Applicable with data sets of all sizes, even with missing data',
              'Data becomes reconstructable',
              'Displays its inner workings clearly to the user (a “white box”)',
              'Explainable results and processes Objective and without bias',
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
      <Grid
        item
        xs={12}
        md={6}
        style={{ display: 'flex', alignItems: 'center' }}
      >
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
