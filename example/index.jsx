import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Thing from '../dist/react-code-editor.esm.js';
import prettier from 'prettier/standalone';
import praserBabel from 'prettier/parser-babel';

const App = () => {
  const [value, setValue] = React.useState('');

  const format = () => {
    try {
      const formattedText = prettier.format(value, {
        parser: 'babel-ts',
        plugins: [praserBabel],
        useTabs: true,
        singleQuotes: false,
        semi: false,
      });

      setValue(formattedText);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <Thing
        language="javascript"
        theme="light"
        value={value}
        onChange={(text) => setValue(text)}
      />
      <button onClick={format}>format</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
