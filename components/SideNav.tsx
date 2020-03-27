import { Box, BoxProps, Heading, HeadingProps } from '@chakra-ui/core';
import React from 'react';
import { ComponentLink, stringToUrl } from './NavLink';

const NavGroupHeading: React.FC<HeadingProps> = (props) => (
  <Heading fontSize="xs" color="gray.400" letterSpacing="wide" mb={2} textTransform="uppercase" {...props} />
);

export const SideNavContent = ({ contentHeight = 'calc(100vh - 4rem)', ...props }) => (
  <Box top="4rem" position="relative" overflowY="auto" borderRightWidth="1px" {...props}>
    <Box as="nav" height={contentHeight} aria-label="Main navigation" fontSize="sm" p="6">
      <Box mb="10">
        <NavGroupHeading>Examples</NavGroupHeading>
        <ComponentLink key={'basic'} href={stringToUrl('basic')}>
          Basic
        </ComponentLink>
        <ComponentLink key={'kitchen-sink'} href={stringToUrl('kitchen-sink')}>
          Kitchen Sink
        </ComponentLink>
        <ComponentLink key={'simple-middlewares'} href={stringToUrl('simple-middlewares')}>
          Simple Middlewares
        </ComponentLink>

        <ComponentLink key={'dynamic-array'} href={stringToUrl('dynamic-array')}>
          Dynamic Array
        </ComponentLink>
        <ComponentLink key={'calculated-field'} href={stringToUrl('calculated-field')}>
          Calculated Field
        </ComponentLink>
      </Box>
    </Box>
  </Box>
);

const SideNavContainer: React.FC<BoxProps> = (props) => (
  <Box position="fixed" left="0" width="100%" height="100%" top="0" right="0" {...props} />
);

const SideNav: React.FC<BoxProps> = (props) => {
  return (
    <SideNavContainer {...props}>
      <SideNavContent />
    </SideNavContainer>
  );
};

export default SideNav;
