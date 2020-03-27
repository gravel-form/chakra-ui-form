import * as React from 'react';
import get from 'lodash/get';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/core';
import { MiddlewareProps } from '../share';

export const SliderMw: React.ComponentType<MiddlewareProps> = (props) => {
  const { next, schema, data, onChange, extraProps, size, formProps } = props;
  if (typeof schema === 'boolean' || !(schema.type === 'number' || schema.type === 'integer')) return next(props);
  const min = schema.minimum || 0;
  const max = schema.maximum || 100;
  return (
    <Slider
      size={size || formProps.size}
      min={min}
      max={max}
      labelStepSize={max - min}
      value={typeof data === 'number' ? data : undefined}
      onChange={onChange}
      {...get(extraProps, 'props')}
    >
      <SliderTrack />
      <SliderFilledTrack />
      <SliderThumb />
    </Slider>
  );
};

export default SliderMw;
