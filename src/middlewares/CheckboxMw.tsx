import * as React from 'react';
import get from 'lodash/get';
import { Checkbox } from '@chakra-ui/core';
import { MiddlewareProps } from '../share';

export const CheckboxMw: React.ComponentType<MiddlewareProps> = (props) => {
  const { schema, onChange, data, next, extraProps, size, formProps } = props;
  if (typeof schema === 'boolean' || schema.type !== 'boolean') return next(props);

  return (
    <Checkbox
      size={size || formProps.size}
      isChecked={data || false}
      onChange={(e) => onChange(e.currentTarget.checked)}
      {...get(extraProps, 'props')}
    >
      {schema.title}
    </Checkbox>
  );
};

export default CheckboxMw;
