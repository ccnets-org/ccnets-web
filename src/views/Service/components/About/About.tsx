/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Hero = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const LeftSide = () => (
    <Box>
      <Box marginBottom={2}>
        <Typography component={'span'} variant="h3" sx={{ fontWeight: 700 }}>
          Brand New ML Framework:
          <br />
          <Typography
            component={'span'}
            variant={'inherit'}
            color={'primary'}
            sx={{
              background: `linear-gradient(180deg, transparent 82%, ${alpha(
                theme.palette.secondary.main,
                0.3,
              )} 0%)`,
            }}
          >
            Causal Learning
          </Typography>
        </Typography>
      </Box>
      <Typography variant="h6" component="p" color={'text.secondary'}>
        Causal Cooperative Nets(CCNets) is a brand new ML framework that is
        composed of three models; an explainer, reasoner and producer neural
        network model.
      </Typography>
    </Box>
  );

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <LeftSide />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            position: 'relative',
            marginX: 'auto',
            perspective: 1500,
            transformStyle: 'preserve-3d',
            perspectiveOrigin: 0,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              marginX: 'auto',
              maxWidth: '96%',
            }}
          >
            <Box
              component={'img'}
              loading="lazy"
              src="logogif.gif"
              alt="Logo gif"
              width={0.6}
              height={1}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
