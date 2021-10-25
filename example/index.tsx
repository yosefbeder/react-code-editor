import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Thing from '../dist/react-code-editor.esm.js';

const App = () => {
  return (
    <div>
      <Thing language="typescript" theme="dark" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
