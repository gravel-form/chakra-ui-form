import * as React from 'react';
import { MiddlewareProps } from '../core';

export const ChangeToBlurMw: React.ComponentType<MiddlewareProps> = (props) => {
  const { schema, next, data, onChange } = props;
  const focus = React.useRef(false);
  const [value, setValue] = React.useState<unknown>(null);

  if (typeof schema === 'boolean' || schema.type === 'object' || schema.type === 'array') return next(props);
  return (
    <div
      onFocus={() => {
        focus.current = true;
        setValue(data);
      }}
      onBlur={() => {
        focus.current = false;
        onChange(value);
      }}
    >
      {next({ ...props, data: focus.current ? value : data, onChange: focus.current ? setValue : onChange })}
    </div>
  );
};
export default ChangeToBlurMw;
