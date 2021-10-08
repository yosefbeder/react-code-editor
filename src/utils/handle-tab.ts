import React from 'react';
import { getAfterCaret, getBeforeCaret } from '.';

const handleTab = (
  editor: HTMLDivElement,
  e: React.KeyboardEvent<HTMLDivElement>
) => {
  e.preventDefault();

  const selection = window.getSelection()!;

  const afterCaret = getAfterCaret(selection);
  const beforeCaret = getBeforeCaret(selection);

  if (e.shiftKey) {
    if (afterCaret[afterCaret.length - 1] === '\t') {
      editor.innerHTML = `${afterCaret.slice(
        0,
        afterCaret.length - 1
      )}${beforeCaret}`;
      selection.collapse(editor.childNodes[0], afterCaret.length - 1);
    }
  } else {
    editor.innerHTML = `${afterCaret}\t${beforeCaret}`;
    selection.collapse(editor.childNodes[0], afterCaret.length + 1);
  }
};

export default handleTab;
