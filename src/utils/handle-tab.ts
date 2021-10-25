import React from 'react';
import { insert } from '.';
import {
  getAfterCaret,
  getBeforeCaret,
  getCaretPosition,
  restoreCaretPosition,
} from './caret';

const handleTab = (
  editor: HTMLDivElement,
  e: React.KeyboardEvent<HTMLDivElement>
) => {
  const caretPosition = getCaretPosition();

  const beforeCaret = getBeforeCaret(caretPosition, editor.innerText);
  const afterCaret = getAfterCaret(caretPosition, editor.innerText);

  if (e.shiftKey) {
    if (beforeCaret[beforeCaret.length - 1] === '\t') {
      const textNode = document.createTextNode(
        `${beforeCaret.slice(0, beforeCaret.length - 1)}${afterCaret}`
      );

      editor.innerHTML = '';

      editor.appendChild(textNode);

      const nextCursorPosition = beforeCaret.length - 1;

      restoreCaretPosition({
        start: nextCursorPosition,
        end: nextCursorPosition,
      });
    }
  } else {
    insert('\t', editor);

    const nextCursorPosition = beforeCaret.length + 1;

    restoreCaretPosition({
      start: nextCursorPosition,
      end: nextCursorPosition,
    });
  }
};

export default handleTab;
