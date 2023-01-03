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
              Our mission
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              textAlign={'center'}
            >
              At CCNets, we believe in creating an environment that fosters
              bilateral, mutually beneficial partnerships between humans, AI and
              businesses alike.
              <br /> We believe in improving the overall quality of life of
              those in society with a trustworthy AI model that is clear to
              navigate and explainable with open communication.
              <br /> CCNets is adaptable and can be incorporated into a wide
              variety of fields, becoming the next step in innovation for many
              and bolsters a more secure, cooperative future.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Mission;
