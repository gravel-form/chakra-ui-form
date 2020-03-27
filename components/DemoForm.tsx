import * as React from 'react';
import omit from 'lodash/omit';
import { Grid, Box } from '@chakra-ui/core';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import FormDataViewerMw from '../components/FormDataViewerMw';

const DemoForm: React.FC<{ code: string; scope?: { [key: string]: any } | React.ReactElement }> = ({ code, scope }) => {
  return (
    <LiveProvider
      code={code}
      scope={{
        ...omit(require('../src'), 'default'),
        GravelFormCore: require('../src/core'),
        ChakraUiCore: require('@chakra-ui/core'),
        FormDataViewerMw,
        Ajv: require('ajv'),
        ReactAsyncHook: require('react-async-hook'),
        Bluebird: require('bluebird'),
        Lodash: require('lodash'),
        ...scope,
      }}
      noInline={true}
    >
      <Grid templateColumns="repeat(2, 1fr)">
        <Box w="100%" position="relative" overflowY="auto" borderRightWidth="1px" height="calc(100vh - 4rem)">
          <LiveEditor />
        </Box>
        <Box w="100%" position="relative" overflowY="auto" height="calc(100vh - 4rem)" p={4}>
          <LiveError />
          <LivePreview />
        </Box>
      </Grid>
    </LiveProvider>
  );
};

export default DemoForm;
