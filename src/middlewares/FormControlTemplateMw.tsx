import * as React from 'react';
import get from 'lodash/get';
import { toJSONSchemaPath, isRequired } from '../core';
import { MiddlewareProps } from '../share';
import { FormControl, FormLabel, FormHelperText, FormErrorMessage } from '@chakra-ui/core';

export const FormControlTemplateMw: React.ComponentType<MiddlewareProps> = (props) => {
  const { schema, dataPath, next, errors, extraProps } = props;

  if (typeof schema === 'boolean') return next(props);

  const id = toJSONSchemaPath(dataPath);
  const error = errors && errors.find(({ dataPath }) => dataPath === id);

  return (
    <FormControl isRequired={isRequired(props)} isInvalid={!!error} my={4} {...get(extraProps, 'formControl')}>
      {next(props)}
      <FormHelperText>{schema.description}</FormHelperText>
      <FormErrorMessage>{error ? error.message : null}</FormErrorMessage>
    </FormControl>
  );
};

export const FormControlLabelMw: React.ComponentType<MiddlewareProps> = (props) => {
  const { schema, dataPath, next } = props;
  if (typeof schema === 'boolean') return next(props);

  return (
    <>
      <FormLabel>
        {Object.hasOwnProperty.call(schema, 'title') ? schema.title : dataPath[dataPath.length - 1]}
      </FormLabel>
      {next(props)}
    </>
  );
};

export default FormControlTemplateMw;
