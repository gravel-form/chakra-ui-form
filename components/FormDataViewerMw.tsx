import * as React from 'react';
import { Textarea, FormControl, FormLabel, Tooltip } from '@chakra-ui/core';
import { MiddlewareProps } from '../src';

const JsonEditor: React.FC<{ value: any; onChange?: any }> = ({ value, onChange }) => {
  const [editingValue, setEditingValue] = React.useState('');
  const [focus, setFocus] = React.useState(false);
  return (
    <Textarea
      style={{ width: '100%' }}
      value={focus ? editingValue : JSON.stringify(value, null, 2)}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setEditingValue(e.target.value);
        try {
          onChange(JSON.parse(editingValue));
        } catch (e) {}
      }}
      onFocus={() => {
        setEditingValue(JSON.stringify(value, null, 2));
        setFocus(true);
      }}
      onBlur={() => {
        setFocus(false);
      }}
    />
  );
};

export const FormDataViewerMw: React.ComponentType<MiddlewareProps> = (props) => {
  const { data, parent, onChange, next } = props;
  const tips = 'Try to hide this component by removing "FormDataViewerMw" form the "middlewares" array.';
  if (parent) return next(props);
  return (
    <>
      <FormControl>
        <Tooltip label={tips} aria-label={tips}>
          <FormLabel>Form Data</FormLabel>
        </Tooltip>
        <JsonEditor value={data} onChange={onChange} />
      </FormControl>
      {next(props)}
    </>
  );
};

export default FormDataViewerMw;
