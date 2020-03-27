import * as React from 'react';
import get from 'lodash/get';
import { Checkbox, CheckboxGroup } from '@chakra-ui/core';
import { MiddlewareProps } from '../share';

export const CheckboxGroupMw: React.ComponentType<MiddlewareProps> = (props) => {
  const { schema, onChange, extraProps, next, size, formProps } = props;

  if (
    typeof schema === 'boolean' ||
    Array.isArray(schema.items) ||
    typeof schema.items === 'boolean' ||
    !schema.items ||
    !schema.items.enum ||
    !schema.uniqueItems
  )
    return next(props);

  const checkboxValues = schema.items.enum || [];
  const labels = get(extraProps, 'labels', schema.items.enum);

  const data = Array.isArray(props.data) ? props.data : [];

  const children = checkboxValues.map((value, index) => {
    if (typeof value !== 'number' && typeof value !== 'string') return null;
    return (
      <Checkbox key={JSON.stringify(value)} value={value} size={size || formProps.size}>
        {get(labels, index, null)}
      </Checkbox>
    );
  });

  if (children.includes(null)) return next(props);

  return (
    <CheckboxGroup
      value={data}
      onChange={(value) => {
        console.log(value);
        onChange(value);
      }}
      {...get(extraProps, 'props')}
    >
      {children}
    </CheckboxGroup>
  );
};

export default CheckboxGroupMw;
