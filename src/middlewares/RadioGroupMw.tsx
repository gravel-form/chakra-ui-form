import * as React from 'react';
import get from 'lodash/get';
import { Radio, RadioGroup } from '@chakra-ui/core';
import { MiddlewareProps } from '../share';

export const RadioGroupMw: React.FC<MiddlewareProps> = (props) => {
  const { schema, onChange, data, extraProps, next, size, formProps } = props;
  if (typeof schema === 'boolean' || !schema.enum) return next(props);

  const labels = get(extraProps, 'labels', schema.enum);

  return (
    <RadioGroup onChange={(e) => onChange(e.currentTarget.value)} value={data} {...get(extraProps, 'props')}>
      {schema.enum.map((value, index) => (
        <Radio
          key={JSON.stringify(value)}
          size={size || formProps.size}
          value={typeof value === 'string' || typeof value === 'number' ? value : undefined}
        >
          {get(labels, index, null)}
        </Radio>
      ))}
    </RadioGroup>
  );
};

export default RadioGroupMw;
