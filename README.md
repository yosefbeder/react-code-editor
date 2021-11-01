## Features

- 📦 Small bundle-size
  - Only 3.84 kB (Minified + Gzipped).
- 🌈 Code highlighting
  - Atom-light and Atom-dark themes.
  - [140 supported languages](https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md) that can be configured via [lowlight](https://www.npmjs.com/package/lowlight).
- 💁‍♂️ Handling special characters (<code>\`</code>,`'`,`"`,`[`,`{`, and `(`)
  - Adding the closing counterpart automatically.
  - Wrapping selected text with them.
- ⏳ History
- 🎨 Appearance customizations
  - Light and dark themes.
  - Line numbers.
- 📃 Auto-scrolling
  - Scrolls automatically to the position of the caret if it's out of the viewport.

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
  - I just included two themes in the library becuase I wanted it to be easier to use and the reason mentioned in [caveats section](#caveats).
- `language`
  - I decided to use [lowlight](https://www.npmjs.com/package/lowlight), which is built on [highlight.js](https://highlightjs.org/).
  - The reason for that is giving you the ability to [use lowlight in other parts of your application](#using-lowlight-in-other-parts-of-your-application).
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

## Using lowlight in other parts of your application

[lowlight](https://www.npmjs.com/package/lowlight) is a peer depedency for this library, so you should be able to use it in your app.

Unfortunatelly, when [lowlight](https://www.npmjs.com/package/lowlight) is installed in a project you can't use `hljs.highlightAll` function to highlight the other code blocks in your app.

I faced this problem while creating the [home page](https://yosefbeder.github.io/react-throwcode/) of the library, so I had to come up with a solution.

```js
// Register the language
import { lowlight } from 'lowlight/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';

lowlight.registerLanguage('typescript', typescript);

// Import a theme from highlight.js themes
import 'highlight.js/styles/atom-one-light.css';

// Highlight all code blocks
document.querySelectorAll('pre > code').forEach(codeblock => {
  const language = codeblock.className.split('-')[1];
  const content = codeblock.innerText;

  // toHtml is imported from hast-util-to-html which is also a peer depedency
  codeblock.innerHTML = toHtml(lowlight.highlight(language, content));
  codeblock.classList.add('hljs');
});
```

## Caveats

Due to the way this lib is implemented (a layer for highlighting and a layer for editing above it), You can only change the colors of the keywords, so I had to take to themes and modify them so that they don't change the style of the font.

## Contribution

If you want to contribute run these commands

```bash
# Clone the repo
git clone https://github.com/yosefbeder/react-throwcode.git
# Compile the library whenever any file is changed
npm run start
cd ./example
# Start the development server of the demo version
npm run dev
```

## LICENSE

[MIT License](LICENSE) 2021 [Yosef Beder](https://github.com/yosefbeder)
