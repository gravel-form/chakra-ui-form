import * as React from 'react';
import { NextPage } from 'next';

import DemoForm from '../components/DemoForm';

import { MiddlewareProps } from '../src/share';

import { Box, Grid } from '@chakra-ui/core';
import get from 'lodash/get';

const BoxMw: React.FC<MiddlewareProps> = (props) => {
  const { extraProps, parent, next } = props;
  if (!parent) return next(props);
  return <Box {...get(extraProps, 'box')}>{next(props)}</Box>;
};

const GridMw: React.FC<MiddlewareProps> = (props) => {
  const { extraProps, next } = props;
  return <Grid {...get(extraProps, 'grid')}>{next(props)}</Grid>;
};

const code = `const { get } = Lodash

const ColMw = (props) => {
    const { extraProps, parent, next } = props;
    if (!parent) return next(props);
  return (
    <Col xs="12" {...get(extraProps, 'col')}>
      {next(props)}
    </Col>
  );
};

const RowMw = (props) => {
  const { schema, extraProps, next } = props;
  if (typeof schema === 'object' && (schema.type === 'object' || schema.type === 'array'))
    return <Row {...get(extraProps, 'row')}>{next(props)}</Row>;
  return next(props);
};

const schema = {
  type: 'object',
  title: 'Grid Demo',
  properties: {
    input1: { type: 'string' },
    input2: { type: 'string' },
    input3: { type: 'string' },
    input4: { type: 'string' },
    input5: { type: 'string' },
    object1: {
      type: 'object',
      title: 'object-1',
      properties: {
        o1_i1: { type: 'string' },
        o1_i2: { type: 'string' },
      },
    },
    object2: {
      title: 'object-2',
      type: 'object',
      properties: {
        o2_i1: { type: 'string' },
        o2_i2: { type: 'string' },
      },
    },
  },
};

const extraProps = {
  grid: { templateColumns: "repeat(3, 1fr)", gap: 6 },
  properties: {
    object2: {
      properties: {
        o2_i1: { grid: { templateColumns: "repeat(2, 1fr)", gap: 6 } },
        o2_i2: { grid: { templateColumns: "repeat(2, 1fr)", gap: 6 } },
      },
    },
  },
};

const middlewares = [
  ExtraPropsMw,
  BoxMw,
  FieldsetTemplateMw,
  GridMw,
  ...schemaMws,
  FormControlTemplateMw,
  InputMw,
  NotSupportedMw,
];

render(
  <Form
    schema={schema}
    extraProps={extraProps}
    middlewares={middlewares}
  />
);
`;

const IndexPage: NextPage = () => {
  return <DemoForm code={code} scope={{ BoxMw, GridMw }} />;
};

export default IndexPage;
