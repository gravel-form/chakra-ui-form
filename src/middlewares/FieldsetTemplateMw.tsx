import * as React from 'react';
import { MiddlewareProps } from '../core';
import { Text, Heading } from '@chakra-ui/core';

export const FieldsetTemplateMw: React.ComponentType<MiddlewareProps> = (props) => {
  const { schema, next } = props;

  if (typeof schema === 'boolean' || !(schema.type === 'object' || schema.type === 'array')) return next(props);
  const { title, description } = schema;
  return (
    <>
      {title && (
        <Heading as="h3" size="lg">
          {title}
        </Heading>
      )}
      {title && description && <hr />}
      {description && <Text color="gray.500">{description}</Text>}
      {next(props)}
    </>
  );
};

export default FieldsetTemplateMw;
