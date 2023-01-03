import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Mission = (): JSX.Element => {
  return (
    <Grid container spacing={4}>
      <Grid
        item
        container
        alignItems={'center'}
        margin={'0 auto'}
        xs={16}
        md={10}
      >
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Box marginBottom={2}>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{
                fontWeight: 700,
              }}
              textAlign={'center'}
            >
              Encompassing the interdisciplinary fields of data science and
              machine learning into one cooperative network
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Box>
              <Typography
                variant="h5"
                component="p"
                color="text.secondary"
                textAlign={'center'}
              >
                [Causal Learning and Data Science]
              </Typography>
              <Box
                component={'img'}
                loading="lazy"
                src={'ds_field.jpeg'}
                alt="Image Description"
                width={1}
                height={1}
                sx={{
                  borderRadius: '2.5rem',
                }}
              />
              <Typography
                variant="h5"
                component="p"
                color="text.secondary"
                textAlign={'center'}
              >
                [Causal Learning and Machine Learning]
              </Typography>
              <Box
                component={'img'}
                loading="lazy"
                src={'ml_field.jpeg'}
                alt="Image Description"
                width={1}
                height={1}
                sx={{
                  borderRadius: '2.5rem',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Mission;
