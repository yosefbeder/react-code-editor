import React, { useRef } from 'react';

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
    ></div>
  );
};

export default CodeEditor;
