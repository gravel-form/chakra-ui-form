import * as React from 'react';
import { Alert, AlertDescription } from '@chakra-ui/core';
import { MiddlewareProps } from '../share';

export const ErrorListMw: React.ComponentType<MiddlewareProps> = (props) => {
  const { parent, next, errors } = props;
  if (parent || !errors || !errors.length) return next(props);

  return (
    <>
      {next(props)}
      {errors.map((error, i) => (
        <Alert key={i} status="error">
          <AlertDescription>
            {error.dataPath} {error.message}
          </AlertDescription>
        </Alert>
      ))}
    </>
  );
};

export default ErrorListMw;
