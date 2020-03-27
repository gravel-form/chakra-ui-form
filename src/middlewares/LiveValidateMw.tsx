import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@chakra-ui/core';
import { MiddlewareProps, validate } from '../share';

export const LiveValidateMw: React.FC<MiddlewareProps> = (props) => {
  const { schema, data, next, parent } = props;
  const [errors, ajvException] = React.useMemo(() => {
    try {
      return [parent || typeof schema === 'boolean' ? null : validate(schema, data), null];
    } catch (err) {
      return [null, err];
    }
  }, [schema, data]);
  const newProps = React.useMemo(() => ({ ...props, errors }), [errors, props]);
  return ajvException ? (
    <>
      <Alert status="error" title="Ajv exception">
        <AlertTitle mr={2}>Ajv exception</AlertTitle>
        <AlertDescription>{ajvException.message}</AlertDescription>
      </Alert>
      {next(props)}
    </>
  ) : (
    next(errors ? newProps : props)
  );
};

export default LiveValidateMw;
