import * as React from 'react';
import { FormCore } from './core';
import { FormProps } from './share';
import { presetMws } from './preset';

const Form: React.FC<FormProps> = (props) => {
  const { onChange } = props;
  const { current: isControlled } = React.useRef(Object.hasOwnProperty.call(props, 'data'));
  const [data, setData] = React.useState(isControlled ? props.data : props.defaultData);
  const handleChange = (newData: unknown) => {
    if (!isControlled) {
      setData(newData);
    }
    onChange && onChange(newData);
  };

  return (
    <form>
      <FormCore {...props} onChange={handleChange} data={isControlled ? props.data : data} />
    </form>
  );
};

Form.defaultProps = {
  middlewares: presetMws,
};

export default Form;
