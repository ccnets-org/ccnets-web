import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';

interface Props {
  pages: {
    company: Array<PageItem>;
  };
}

const SidebarNav = ({ pages }: Props): JSX.Element => {
  const theme = useTheme();

  const { company: companyPages } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="CCNets"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={'favicon/favicon_name.png'}
            height={1}
            width={0.8}
          />
        </Box>
      </Box>
      {/* <Box paddingX={2} paddingY={2}>
        <NavItem title={'Company'} items={companyPages} />
      </Box> */}
      <Box paddingX={2} paddingY={2}>
        <Link underline="none" component="a" href="/" color="text.primary">
          Home
        </Link>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Link
          underline="none"
          component="a"
          href="https://github.com/junho-ccnets/causal-learning.git"
          color={'text.primary'}
        >
          Github
        </Link>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Link
          underline="none"
          component="a"
          href="https://patents.google.com/patent/WO2022164299A1"
          color={'text.primary'}
        >
          Publication
        </Link>
      </Box>
    </Box>
  );
};

export default SidebarNav;
