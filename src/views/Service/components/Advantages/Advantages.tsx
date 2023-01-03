import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title: 'Versatile',
    subtitle:
      'Indicates the possibility of data modeling through training to learn causality (cause and effect) from data',
    icon: (
      <img
        src="icons/versatile.png"
        alt="versatile_icon"
        height={48}
        width={48}
      />
    ),
  },
  {
    title: 'Accurate',
    subtitle:
      'Indicates the importance/relevance of each feature for the prediction of labels',
    icon: (
      <img
        src="icons/accuracy.png"
        alt="accuracy_icon"
        height={48}
        width={48}
      />
    ),
  },
  {
    title: 'Insightful',
    subtitle:
      'May create accurate hypothetical situations by altering features in data',
    icon: (
      <img
        src="icons/insightful.png"
        alt="insightful_icon"
        height={48}
        width={48}
      />
    ),
  },
  {
    title: 'Explainable',
    subtitle:
      'Clearly indicates to the user how it came to its results or conclusion',
    icon: (
      <img
        src="icons/explainable.png"
        alt="explainable_icon"
        height={64}
        width={64}
      />
    ),
  },
  {
    title: 'Trustworthy',
    subtitle:
      'As CCN’s are explainable, the relationship between humans and machines don’t have to be one-way or transactional any longer',
    icon: (
      <img
        src="icons/thrustworthy.png"
        alt="thrustworthy_icon"
        height={48}
        width={48}
      />
    ),
  },
  {
    title: 'Reconstructable',
    subtitle:
      'Reconstructs data through causal inference when some features of observational data are omitted',
    icon: (
      <img
        src="icons/reconstructable.png"
        alt="reconstructable_icon"
        height={48}
        width={48}
      />
    ),
  },
];

const Advantages = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary.main'}
          align={'center'}
        >
          Advantages
        </Typography>
        <Typography
          variant={'h4'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700 }}
        >
          Comprised of six key interlinking characteristics
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                component={Card}
                padding={4}
                width={1}
                height={1}
                data-aos={'fade-up'}
                data-aos-delay={i * 100}
                data-aos-offset={100}
                data-aos-duration={600}
              >
                <Box display={'flex'} flexDirection={'column'}>
                  <Box
                    component={Avatar}
                    width={50}
                    height={50}
                    marginBottom={2}
                    bgcolor={theme.palette.primary.main}
                    color={theme.palette.background.paper}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Advantages;
