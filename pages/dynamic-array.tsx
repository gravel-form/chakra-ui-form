import * as React from 'react';
import { NextPage } from 'next';
import DemoForm from '../components/DemoForm';

const code = `const {
  ExtraPropsMw
} = GravelFormCore;
const _ = Lodash;
const { Button, Stack, Box } = ChakraUiCore;
const ExampleDynamicArrayMw = (props) => {
  const {
    schema,
    data,
    next,
    MiddlewareComponent,
    schemaPath,
    dataPath,
    formProps,
    onChange,
    extraProps,
    errors,
    onSubmit,
  } = props;

  if (typeof schema === 'boolean' || schema.type !== 'array' || !schema.items || Array.isArray(schema.items))
    return next(props);

  const schemaItems = schema.items;
  const dataItems = Array.isArray(data) ? data : [];

  return (
    <>
      {dataItems.map((item, index) => {
        return (
          <Box d="flex" alignItems="baseline">
            <MiddlewareComponent
              key={index}
              schema={schemaItems}
              data={item}
              onChange={(newItem) =>
                onChange([...dataItems.slice(0, index), newItem, ...dataItems.slice(index + 1)])
              }
              parent={props}
              schemaPath={[...schemaPath, 'items']}
              dataPath={[...dataPath, index]}
              next={() => null}
              formProps={formProps}
              MiddlewareComponent={MiddlewareComponent}
              {...{ extraProps: _.get(extraProps, 'items'), errors, onSubmit }}
            />
            <Button
              px="2"
              onClick={(e) => {
                e.preventDefault();
                onChange(dataItems.filter((_, i) => i !== index));
              }}
            >
              X
            </Button>
          </Box>
        );
      })}
      {
        <Button
          onClick={(e) => {
            e.preventDefault();
            onChange([...dataItems, {}]);
          }}
          style={{ width: '100%' }}
        >
          + Add Item
        </Button>
      }
    </>
  );
};

const schema = {
  title: 'A simple dynamic array form',
  type: 'array',
  items: {
    type: 'object',
    properties: {
      firstName: {
        type: 'string',
        title: 'First name',
      },
      lastName: {
        type: 'string',
        title: 'Last name',
      },
    },
  },
};

const middlewares = [
  FormDataViewerMw,
  ExtraPropsMw,
  ExampleDynamicArrayMw,
  ...schemaMws,
  FormControlTemplateMw,
  FormControlLabelMw,
  InputMw,
  NotSupportedMw,
];

render(<Form defaultData={[{ firstName: 'Jhon', lastName: 'Smith' }]} schema={schema} middlewares={middlewares} />);
`;

const DynamicArrayPage: NextPage = () => {
  return <DemoForm code={code} />;
};

export default DynamicArrayPage;
