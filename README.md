## Features

- 📦 Small bundle-size
  - Only 3.84 kB (Minified + Gzipped).
- 🌈 Code highlighting
  - Atom-light and Atom-dark themes.
  - [140 supported languages](https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md) that you can configure with [highlight.js](https://highlightjs.org/).
- 💁‍♂️ Handling special characters (``\`,`'`,`"`,`[`,`{`, and `(`)
  - Adding the closing counterpart automatically.
  - Wrapping selected text with them.
- ⏳ History
- 🐱‍💻 Appearance customizations
  - Light and dark themes.
  - Line numbers.

## Getting Started

### Installation

```bash
npm install react-throwcode highlight.js lowlight hast-util-to-html
```

### Simple Usage

The component imported from the package is a controlled component, and you can use it without configurations.

```js
import { useState } from 'react';
import CodeEditor from 'react-throwcode';

import { lowlight } from 'lowlight/lib/core';
import javascript from 'highlight.js/lib/languages/typescript';

lowlight.registerLanguage(javascript, 'javascript');

function App() {
  const [code, setCode] = useState('');

  return (
    <div className="app">
      <CodeEditor
        language="javascript"
        value={code}
        onChange={text => setCode(text)}
      />
    </div>
  );
}

export default App;
```

## Props

The data type of the options

```ts
interface CodeEditorProps {
  language: string;
  value: string;
  onChange: (content: string) => void;

  theme?: 'light' | 'dark';
  height?: number | 'auto' | string;
  spellCheck?: boolean;
  handleHistory?: boolean;
  handleSpecialCharacters?: boolean;
  highlight?: boolean;
  lineNumbers?: boolean;
  className?: string;
}
```

The default props

```js
const defaultProps = {
  theme: 'light',
  height: 'auto',
  spellCheck: false,
  handleHistory: true,
  handleSpecialCharacters: true,
  highlight: true,
  lineNumbers: true,
};
```

- `value`
  - Represents the code that is displayed.
  - If you want to update the code you just have to rewrite with `setValue`.
- `onChange`
  - Takes a callback that receives `content` arg which is a string.
  - Is called whenever the content of the editor is changed whether it's changed by undoing/redoing or by the user typing.
- `theme`
  - [highlight.js](https://highlightjs.org/) is used as a peer dependency for highlighting.
  - I just included two themes in the library becuase I wanted it to be easier to use and the reason mentioned in [Caveats section](#caveats).
- `language`
  - I decided to use [lowlight](https://www.npmjs.com/package/lowlight), which is built on [highlight.js](https://highlightjs.org/).
  - The reason for that is giving you the flexibility to use [highlight.js](https://highlightjs.org/) in other parts of your app.
  - If you want to use any language follow these steps.

```js
// Note: You should import it from /lib/core
import { lowlight } from 'lowlight/lib/core';

// Import the language that you want from /lib/languages/$language-name
import typescript from 'highlight.js/lib/languages/typescript';

// Register the language
lowlight.registerLanguage('typescript', typescript);

// Add the language with the name that you registered it with
<CodeEditor
  language="typescript"
  value={code}
  onChange={text => setCode(text)}
/>;
```

- `height`
  - You can either make it implicit by passing `auto` or explicit by passing a number or a string (a number with a unit).
- `spellCheck`
  - Enables spell check.
- `handleHistory`
  - Enables undoing and redoing.
- `handleSpecialCharacters`
  - Closes quotes (``\`,`'`,`"`) and brackets (`[`,`{`,`(`) automatically.
  - Wraps selected text with them.
- `highlight`
  - Enables code highlighting.
- `lineNumbers`
  - Enables line numbers.
- `className`
  - Applies styles to the wrapper of the editor.

## Caveats

Due to the way this library is implemented, the style of the fonts can't be changed, so I had to modify highlight.js themes I used to just change the color.

## Contribution

If you want to contribute you can clone the repo and run these commands

```bash
# Compile the library whenever any file is changed
npm run start
cd ./example
# Start the development server of the demo version
npm run dev
```

## LICENSE

[MIT License](LICENSE) 2021 [Yosef Beder](https://github.com/yosefbeder)
