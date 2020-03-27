import * as React from 'react';
import {
  Box,
  BoxProps,
  Flex,
  IconButton,
  IconButtonProps,
  useColorMode,
  PseudoBox,
  PseudoBoxProps,
  Text,
} from '@chakra-ui/core';
import { DiGithubBadge } from 'react-icons/di';

export const Header: React.FC<BoxProps> = (props) => (
  <Box
    pos="fixed"
    as="header"
    top="0"
    zIndex={4}
    left="0"
    right="0"
    borderBottomWidth="1px"
    width="full"
    height="4rem"
    {...props}
  />
);

export const GithubLink: React.FC<PseudoBoxProps> = (props) => (
  <PseudoBox
    as="a"
    aria-label="Go to Chakra UI's Github Repo"
    outline="0"
    transition="all 0.2s"
    borderRadius="md"
    _focus={{
      boxShadow: 'outline',
    }}
    {...{ href: 'https://github.com/gravel-form/chakra-ui', rel: 'noopener noreferrer', target: '_blank', props }}
  >
    <Box as={DiGithubBadge} size="8" color="current" />
  </PseudoBox>
);

const ThemeSwitch: React.FC<IconButtonProps> = (props) => (
  <IconButton variant="ghost" color="current" ml="2" fontSize="20px" {...props} />
);

const DocsHeader: React.FC<BoxProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = { light: 'white', dark: 'gray.800' };
  return (
    <Header bg={bg[colorMode]} {...props}>
      <Flex size="100%" px="6" align="center" justify="space-between">
        <Flex align="center" mr={5}>
          <Text fontSize="2xl">Gravel Form</Text>
        </Flex>
        <Flex flex={{ sm: '1', md: 'none' }} ml={5} align="center" color="gray.500" justify="flex-end">
          <GithubLink />
          <ThemeSwitch
            aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? 'moon' : 'sun'}
          />
        </Flex>
      </Flex>
    </Header>
  );
};

export default DocsHeader;
