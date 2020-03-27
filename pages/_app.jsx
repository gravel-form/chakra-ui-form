import { Box, ColorModeProvider, CSSReset, Link, Text, ThemeProvider } from '@chakra-ui/core';
// import { MDXProvider } from '@mdx-js/react';
import { useRouter } from 'next/router';
import React from 'react';
import DocsHeader from '../components/DocsHeader';
// import MDXComponents from '../components/MDXComponents';
import SideNav from '../components/SideNav';
// import seo from '../seo.config';
// import { initGA, logPageView } from '../components/Analytics';

const Main = (props) => <Box as="main" mx="auto" {...props} />;

const Footer = (props) => null;

// const DocsHeader = () => null;

const DocsLayout = ({ children }) => (
  <Box>
    <DocsHeader />
    <SideNav display={['none', null, 'block']} maxWidth="18rem" width="full" />
    <Box pl={[0, null, '18rem']} mt="4rem">
      <Main>{children}</Main>
    </Box>
  </Box>
);

const HomeLayout = ({ children }) => <Box>{children}</Box>;

export default ({ Component, pageProps }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  let Layout;

  /*
  if (router.pathname === '/') {
    Layout = HomeLayout;
  } else {
    Layout = DocsLayout;
  }
  */
  Layout = DocsLayout;

  return (
    <ThemeProvider>
      <ColorModeProvider value="light">
        <CSSReset />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ColorModeProvider>
    </ThemeProvider>
  );
};
