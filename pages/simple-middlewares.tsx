import * as React from 'react';
import { NextPage } from 'next';
import DemoForm from '../components/DemoForm';

const code = `const {
  toJSONSchemaPath,
  isRequired,
} = GravelFormCore;

const {
  Button,
  ButtonGroup,
  useToast,
  Tooltip,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Icon,
} = ChakraUiCore;
const { delay }= Bluebird;

const MyButtonsMw = (props) => {
  const {
    parent,
    next,
    onChange,
    formProps: { defaultData },
  } = props;

  const toast = useToast();
  const [submitting, setSubmitting] = React.useState(false);

  // if not on the root node, pass the control to the next middleware
  if (parent) return next(props);

  const handleSubmit = async function() {
    setSubmitting(true);
    await delay(1000);
    setSubmitting(false);
    toast({
      title: 'Success',
      description: 'Form Summited',
      status: 'success',
      isClosable: true,
    });
  };

  const handleClear = () => onChange({});
  const handleReset = () => onChange(defaultData);

  return (
    <>
      {next(props) /* render the body of the form */}
      <ButtonGroup spacing={4}>
        <Button variantColor="teal" variant="solid" onClick={handleSubmit} isLoading={submitting}>
          Submit
        </Button>{' '}
        <Button onClick={handleClear}>Clear</Button> <Button onClick={handleReset}>Reset</Button></ButtonGroup>
    </>
  );
};

const MyFormItemTemplate = (props) => {
  const { schema, dataPath, parent, next, errors } = props;

  if (
    typeof schema === 'boolean' ||
    schema.type === 'object' ||
    schema.type === 'array' ||
    // skip if current node is under an array
    (parent && typeof parent.schema !== 'boolean' && parent.schema.type === 'array')
  )
    return next(props);

  const labelText = schema.title || dataPath[dataPath.length - 1];
  const label = schema.description ? (
    <Tooltip aria-label={schema.description} label={schema.description}>
      <span>
        {labelText} <Icon name="info" />
      </span>
    </Tooltip>
  ) : (
    labelText
  );

  const id = toJSONSchemaPath(dataPath);
  const error = errors && errors.find(({ dataPath }) => dataPath === id);

  return (
    <FormControl isRequired={isRequired(props)} isInvalid={!!error} my={4}>
      <FormLabel>{label}</FormLabel>
      {next(props)}
      <FormErrorMessage>{error ? error.message : null}</FormErrorMessage>
    </FormControl>
  );
};

const schema = {
  type: 'object',
  properties: {
    username: { type: 'string', description: 'Username description' },
    firstname: { type: 'string' },
    lastname: { type: 'string' },
    email: { type: 'string', description: 'Email description' },
  },
};

const defaultData = {
  username: 'jhon',
  firstname: 'Jhon',
  lastname: 'Smith',
};

const middlewares = [
  MyButtonsMw,
  FieldsetTemplateMw,
  MyFormItemTemplate,
  ...schemaMws,
  InputMw,
  NotSupportedMw
];

render(
  <Form
    defaultData={defaultData}
    schema={schema}
    middlewares={middlewares}
  />
);
`;

const IndexPage: NextPage = () => {
  return <DemoForm code={code} />;
};

export default IndexPage;
