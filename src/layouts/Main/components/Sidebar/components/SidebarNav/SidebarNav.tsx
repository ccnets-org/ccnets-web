import React from 'react';
import Box from '@mui/material/Box';
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
            src={'favicon/favicon-32x32.png'}
            height={1}
            width={0.3}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'Company'} items={companyPages} />
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarNav;
