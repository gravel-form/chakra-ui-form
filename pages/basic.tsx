import * as React from 'react';
import { NextPage } from 'next';

import DemoForm from '../components/DemoForm';

const code = `const {
  ExtraPropsMw,
  LocalRefMw,
  FixedObjectMw,
  FixedArrayMw,
  withName,
} = GravelFormCore;

const schema = {
  title: 'A registration form',
  description: 'A simple form example.',
  type: 'object',
  required: ['firstName', 'lastName'],
  definitions: {
    firstName: {
      type: 'string',
      title: 'First name',
    },
    lastName: {
      $id: '#last-name',
      type: 'string',
      title: 'Last name',
    },
  },
  properties: {
    firstName: {
      $ref: '#/definitions/firstName',
    },
    lastName: {
      $ref: '#last-name',
    },
    gender: {
      type: 'string',
      enum: ['male', 'female'],
    },
    age: {
      type: 'integer',
      title: 'Age of person',
      description: '(earthian year)',
    },
    dof: {
      type: 'string',
      title: 'Date of Birth',
    },
    bio: {
      type: 'string',
      title: 'Bio',
    },
    password: {
      type: 'string',
      title: 'Password',
      description: 'Hint: Make it strong!',
      minLength: 3,
    },
    telephone: {
      type: 'string',
      title: 'Telephone',
      minLength: 10,
    },
    term: {
      type: 'boolean',
      title: 'Accept',
    },
  },
};

const extraProps = {
  row: { justify: 'space-between' },
  properties: {
    gender: {
      component: 'RadioGroup',
      labels: ['%E2%99%82', '%E2%99%80'].map(decodeURIComponent),
      props: { isInline: true },
    },
    bio: {
      component: 'TextArea',
      props: {
        placeholder: 'Roundhouse kicking asses since 1940',
      },
    },
    password: {
      props: { type: 'password' },
    },
  },
};

const middlewares = [
  FormDataViewerMw,
  // root middlewares
  SubmitButtonWithValidationMw,
  // preprocessor
  ExtraPropsMw,
  LocalRefMw,
  // template & schemas
  FieldsetTemplateMw,
  FixedObjectMw,
  FixedArrayMw,
  FormControlTemplateMw,
  // form controls
  withName(CheckboxMw, undefined),
  FormControlLabelMw,
  withName(RadioGroupMw, 'RadioGroup'),
  withName(SliderMw, 'Slider'),
  withName(SwitchMw, 'Switch'),
  withName(TextAreaMw, 'TextArea'),
  CheckboxGroupMw,
  SelectMw,
  InputMw,
  NumberInputMw,
  // default fallback
  NotSupportedMw,
];

render(
  <Form
    defaultData={{}}
    schema={schema}
    extraProps={extraProps}
    middlewares={middlewares}
  />
);
`;

const IndexPage: NextPage = () => {
  return <DemoForm code={code} />;
};

export default IndexPage;
