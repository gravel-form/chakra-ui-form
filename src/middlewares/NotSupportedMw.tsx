import * as React from 'react';
import { toJSONSchemaPath } from '../core';
import { MiddlewareProps } from '../share';
import { Alert, AlertDescription } from '@chakra-ui/core';

export const NotSupportedMw: React.FC<MiddlewareProps> = ({ schemaPath, size, formProps }) => {
  const s = size || formProps.size;
  return (
    <Alert size={s}>
      <AlertDescription size={s}>schema not supported, location {toJSONSchemaPath(schemaPath)}</AlertDescription>
    </Alert>
  );
};

export default NotSupportedMw;
