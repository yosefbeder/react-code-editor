import React, { useRef } from 'react';
import handleNewLine from './utils/handle-new-line';
import handleTab from './utils/handle-tab';
import handleSelfClosingCharacters from './utils/handle-self-closing-characters';
import { SPECIAL_CHARACTERS } from './constants';

const style = {
  width: '20rem',
  height: '10rem',
  backgroundColor: '#333',
  borderRadius: '.5rem',
  outline: 'none',
  padding: '1rem',
  fontFamily: 'monospace',
  color: '#fff',
};

const CodeEditor = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{ ...style, whiteSpace: 'pre', tabSize: 2, overflowX: 'scroll' }}
      ref={ref}
      contentEditable={true}
      spellCheck={false}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleNewLine(ref.current!);
        }

        if (e.key === 'Tab') {
          handleTab(ref.current!, e);
        }

        if (SPECIAL_CHARACTERS.includes(e.key)) {
          handleSelfClosingCharacters(ref.current!, e);
        }
      }}
    ></div>
  );
};

export default CodeEditor;
