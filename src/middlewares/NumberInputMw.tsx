import * as React from 'react';
import get from 'lodash/get';
import { NumberInput } from '@chakra-ui/core';
import { MiddlewareProps } from '../share';

export const NumberInputMw: React.ComponentType<MiddlewareProps> = (props) => {
  const { next, schema, data, onChange, extraProps, size, formProps } = props;
  if (typeof schema === 'boolean' || !(schema.type === 'number' || schema.type === 'integer')) return next(props);
  const { maximum, minimum } = schema;
  return (
    <NumberInput
      size={size || formProps.size}
      max={maximum}
      min={minimum}
      value={typeof data === 'number' ? data : undefined}
      onChange={onChange}
      {...get(extraProps, 'props')}
    />
  );
};

export default NumberInputMw;
