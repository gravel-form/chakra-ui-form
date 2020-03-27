# @gravel-form/chakra-ui

A flexible middlewares driven json schema form. The only limitation is your imagination.

## Quick start

```bash
npm install @chakra-ui/core @emotion/core @emotion/styled emotion-theming
npm install @gravel-form/chakra-ui
```

``` jsx
import React from 'react';
import { theme, ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Form } from '@gravel-form/chakra-ui/lib';

function MyFirstForm() {
  const schema = {
    type: 'object',
    properties: {
      username: { type: 'string' },
      password: { type: 'string' },
    },
  };

  const extraProps = {
    properties: {
      password: {
        props: { type: 'password' },
      },
    },
  };

  const [data, setData] = React.useState();

  return (
    <Form
      schema={schema}
      extraProps={extraProps}
      data={data}
      onChange={setData}
      size="md"
      onSubmit={(data) => {
        alert(JSON.stringify(data, null, 2));
      }}
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <MyFirstForm />
    </ThemeProvider>
  );
}

export default App;
```

## Playground
More examples can be found on the [playground](https://gravel-form.github.io/chakra-ui-form/basic).
