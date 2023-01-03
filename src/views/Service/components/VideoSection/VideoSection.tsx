/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const VideoSection = (): JSX.Element => {
  return (
    <Grid container spacing={4}>
      <Grid
        item
        container
        alignItems={'center'}
        margin={'0 auto'}
        xs={16}
        md={8}
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
              (Slogan) Lorem ipsum dolor sit amet.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              textAlign={'center'}
            >
              “We are taking machine learning beyond summarizing data. It’s not
              just the what, it’s the why” - Judea Pearl
            </Typography>
          </Box>
          <Box
            height={1}
            width={1}
            maxHeight={300}
            maxWidth={{ xs: '100%', sm: 800 }}
            marginTop={3}
          >
            <Box
              component={'iframe'}
              title="video"
              width="100%"
              height="100%"
              minHeight={250}
              src="https://www.youtube.com/embed/mbfBe1lMhIY"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              boxShadow={4}
              borderRadius={2}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default VideoSection;
