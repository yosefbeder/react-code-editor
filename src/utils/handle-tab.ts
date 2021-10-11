import React from 'react';
import { getAfterCaret, getBeforeCaret, restoreCaretPosition } from './caret';

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

      const nextCursorPosition = afterCaret.length - 1;

      restoreCaretPosition(selection, editor.childNodes[0], {
        start: nextCursorPosition,
        end: nextCursorPosition,
      });
    }
  } else {
    editor.innerHTML = `${afterCaret}\t${beforeCaret}`;

    const nextCursorPosition = afterCaret.length + 1;

    restoreCaretPosition(selection, editor.childNodes[0], {
      start: nextCursorPosition,
      end: nextCursorPosition,
    });
  }
};

export default handleTab;
