import { Box, PseudoBox, useColorMode, PseudoBoxProps } from '@chakra-ui/core';
import NextLink, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

const NavLink: React.FC<LinkProps> = ({ children, ...props }) => {
  const router = useRouter();
  let isActive = false;

  if (router.pathname === props.href) {
    isActive = true;
  }

  return (
    <NextLink passHref {...props}>
      {typeof children === 'function' ? children(isActive) : children}
    </NextLink>
  );
};

export const stringToUrl = (str: string, path = '/') => {
  return `${path}${str
    .toLowerCase()
    .split(' ')
    .join('-')}`;
};

export const SideNavLink: React.FC<PseudoBoxProps & { icon?: React.ReactElement }> = React.forwardRef(
  ({ children, icon = null, ...props }, ref) => {
    const { colorMode } = useColorMode();
    const color = { light: 'gray.700', dark: 'whiteAlpha.700' };
    return (
      <PseudoBox
        ref={ref}
        as="a"
        mx={-2}
        display="flex"
        cursor="pointer"
        px="2"
        py="1"
        transition="all 0.2s"
        fontWeight="medium"
        outline="none"
        _focus={{ shadow: 'outline' }}
        color={color[colorMode]}
        _notFirst={{ mt: 1 }}
        {...{ ...props, align: 'center' }}
      >
        {icon && React.cloneElement(icon, { mr: 3 })}
        <Box>{children}</Box>
      </PseudoBox>
    );
  }
);

type SiderLinkProps = Pick<LinkProps, 'href'> & PseudoBoxProps & { icon?: React.ReactElement };

export const TopNavLink = React.forwardRef(({ href, ...props }: SiderLinkProps, ref) => {
  return (
    <NavLink href={href}>
      {(isActive: boolean) => (
        <SideNavLink
          ref={ref}
          aria-current={isActive ? 'page' : undefined}
          _hover={{ color: !isActive ? 'inherit' : '' }}
          {...(isActive && { color: 'teal.500', fontWeight: 'semibold' })}
          {...props}
        />
      )}
    </NavLink>
  );
});

export const ComponentLink = React.forwardRef(({ href, ...props }: SiderLinkProps, ref) => {
  const { colorMode } = useColorMode();
  const hoverColor = { light: 'gray.900', dark: 'whiteAlpha.900' };
  const activeColor = { light: 'teal.800', dark: 'teal.200' };
  const activeBg = { light: 'teal.50', dark: '#308c7a4d' };

  return (
    <NavLink href={href}>
      {(isActive: boolean) => (
        <SideNavLink
          ref={ref}
          aria-current={isActive ? 'page' : undefined}
          _hover={{
            color: hoverColor[colorMode],
            transform: 'translateX(2px)',
          }}
          {...(isActive && {
            bg: activeBg[colorMode],
            rounded: 'sm',
            color: activeColor[colorMode],
            _hover: {},
          })}
          {...props}
        />
      )}
    </NavLink>
  );
});
