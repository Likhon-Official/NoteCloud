import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { MainStack } from './components/MainStack';

// Disable __DEV__ for production
Object.defineProperty(global, '__DEV__', { value: false });

// Register entry components
// @see https://github.com/NativeScript/nativescript-app-templates/tree/master/packages/template-blank-react
ReactNativeScript.registerElement(
  'FloatingActionButton',
  () => require('@nativescript/core').Button
);

ReactNativeScript.start(React.createElement(MainStack, {}, null));