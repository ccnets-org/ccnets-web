import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  About,
  Advantages,
  Features,
  VideoSection,
  Mission,
  Fields,
} from './components';

const Service = (): JSX.Element => {
  return (
    <Main>
      <Box
        sx={{
          position: 'relative',
          marginTop: -13,
          paddingTop: 13,
        }}
        bgcolor={'alternate.sub'}
      >
        <Container position={'relative'} zIndex={3}>
          <About />
        </Container>
      </Box>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <VideoSection />
        </Container>
      </Box>
      <Box bgcolor={'alternate.sub'}>
        <Container>
          <Mission />
        </Container>
      </Box>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Advantages />
        </Container>
      </Box>
      <Box bgcolor={'alternate.sub'}>
        <Container>
          <Fields />
        </Container>
      </Box>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Features />
        </Container>
      </Box>
    </Main>
  );
};

export default Service;
