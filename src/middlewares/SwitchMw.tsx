import * as React from 'react';
import get from 'lodash/get';
import { Switch } from '@chakra-ui/core';
import { MiddlewareProps } from '../share';

export const SwitchMw: React.FC<MiddlewareProps> = (props) => {
  const { schema, onChange, data, next, extraProps, size, formProps } = props;
  if (typeof schema === 'boolean' || schema.type !== 'boolean') return next(props);

  return (
    <Switch
      size={size || formProps.size}
      label={schema.title}
      isChecked={data}
      onChange={(e) => onChange(e.currentTarget.checked)}
      {...get(extraProps, 'props')}
    />
  );
};

export default SwitchMw;
