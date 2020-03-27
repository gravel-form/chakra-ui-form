import * as React from 'react';
import { Select } from '@chakra-ui/core';
import get from 'lodash/get';
import { MiddlewareProps } from '../share';

export const SelectMw: React.ComponentType<MiddlewareProps> = (props) => {
  const { schema, data, onChange, next, extraProps, size, formProps } = props;

  if (
    typeof schema === 'boolean' ||
    !schema.enum ||
    !(schema.type === 'string' || schema.type === 'number' || schema.type === 'integer') ||
    schema.enum.find((option) => !['string', 'number'].includes(typeof option))
  )
    return next(props);

  const labels = get(extraProps, 'labels', schema.enum);
  const placeholder = get(extraProps, 'props.placeholder');
  const value = typeof data === 'string' || typeof data === 'number' ? data : undefined;
  return (
    <Select
      placeholder={placeholder}
      size={size || formProps.size}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      {...get(extraProps, 'props')}
    >
      {schema.enum.map((option, index) => (
        <option key={option as string | number} value={option as string | number}>
          {get(labels, index, null)}
        </option>
      ))}
    </Select>
  );
};

export default SelectMw;
