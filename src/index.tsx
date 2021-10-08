import React, { useRef } from 'react';
import handleNewLine from './utils/handle-new-line';
import handleTab from './utils/handle-tab';

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
          e.preventDefault();
          handleTab(ref.current!);
        }
      }}
    ></div>
  );
};

export default CodeEditor;
