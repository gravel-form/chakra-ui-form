import * as React from 'react';
import get from 'lodash/get';
import { Input, Textarea } from '@chakra-ui/core';
import { MiddlewareProps } from '../share';

export const InputMw: React.FC<MiddlewareProps> = (props) => {
  const { next, schema, data, onChange, extraProps, size, formProps } = props;
  if (typeof schema === 'boolean' || schema.type !== 'string') return next(props);
  return (
    <Input
      size={size || formProps.size}
      value={data || ''}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value || undefined);
      }}
      {...get(extraProps, 'props')}
    />
  );
};

export const TextAreaMw: React.FC<MiddlewareProps> = (props) => {
  const { next, schema, data, onChange, extraProps, size, formProps } = props;
  if (typeof schema === 'boolean' || schema.type !== 'string') return next(props);
  return (
    <Textarea
      size={size || formProps.size}
      value={data || ''}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value || undefined);
      }}
      {...get(extraProps, 'props')}
    />
  );
};

export default InputMw;
