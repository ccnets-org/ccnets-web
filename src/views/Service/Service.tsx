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
          backgroundColor: '#fefcfe',
          position: 'relative',
          marginTop: -13,
          paddingTop: 13,
        }}
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
      <Container sx={{ backgroundColor: '#fefcfe' }}>
        <Mission />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Advantages />
        </Container>
      </Box>
      <Container sx={{ backgroundColor: '#fefcfe' }}>
        <Fields />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Features />
        </Container>
      </Box>
    </Main>
  );
};

export default Service;
