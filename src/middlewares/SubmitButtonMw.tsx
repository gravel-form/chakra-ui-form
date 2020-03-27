import * as React from 'react';
import get from 'lodash/get';
import { FormControl, Button, Alert, AlertTitle, AlertDescription } from '@chakra-ui/core';
import { MiddlewareProps, ErrorObject, validate } from '../share';

export const SubmitButtonMw: React.ComponentType<MiddlewareProps> = (props) => {
  const { parent, next, data, size, formProps } = props;
  if (parent) return next(props);
  const { extraProps } = props;

  const onSubmit = props.onSubmit || props.formProps.onSubmit;
  return (
    <>
      {props.next(props)}
      <FormControl my={4} {...get(extraProps, 'formControl')}>
        <Button
          size={size || formProps.size}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault();
            onSubmit && onSubmit(data);
          }}
          variantColor="teal"
        >
          Submit
        </Button>
      </FormControl>
    </>
  );
};

export const SubmitButtonWithValidationMw: React.ComponentType<MiddlewareProps> = (props) => {
  const { data, parent, next, size, formProps } = props;
  const [errors, setErrors] = React.useState<ErrorObject[] | null | undefined>();
  const [ajvException, setAjvException] = React.useState<Error | null>(null);

  if (parent) return next(props);
  const { extraProps } = props;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const onSubmit = props.onSubmit || props.formProps.onSubmit;
      const errors = validate(formProps.schema, data);
      if (!errors && onSubmit) onSubmit(data);
      setErrors(errors);
      setAjvException(null);
    } catch (err) {
      setAjvException(err);
    }
  };

  return (
    <>
      {props.next(errors === props.errors ? props : { ...props, errors })}
      <FormControl {...get(extraProps, 'formControl')}>
        <Button size={size || formProps.size} onClick={handleClick} variantColor="teal">
          Submit
        </Button>
      </FormControl>
      {ajvException ? (
        <Alert>
          <AlertTitle mr={2}>Ajv exception</AlertTitle>
          <AlertDescription>{ajvException.message}</AlertDescription>
        </Alert>
      ) : null}
    </>
  );
};

export default SubmitButtonMw;
