import React from 'react';
import { getAfterCaret, getBeforeCaret, restoreCaretPosition } from './caret';

const handleTab = (
  editor: HTMLDivElement,
  e: React.KeyboardEvent<HTMLDivElement>
) => {
  const selection = window.getSelection()!;

  const beforeCaret = getBeforeCaret(selection);
  const afterCaret = getAfterCaret(selection);

  if (e.shiftKey) {
    if (beforeCaret[beforeCaret.length - 1] === '\t') {
      editor.innerHTML = `${beforeCaret.slice(
        0,
        beforeCaret.length - 1
      )}${afterCaret}`;

      const nextCursorPosition = beforeCaret.length - 1;

      restoreCaretPosition(selection, editor.childNodes[0], {
        start: nextCursorPosition,
        end: nextCursorPosition,
      });
    }
  } else {
    editor.innerHTML = `${beforeCaret}\t${afterCaret}`;

    const nextCursorPosition = beforeCaret.length + 1;

    restoreCaretPosition(selection, editor.childNodes[0], {
      start: nextCursorPosition,
      end: nextCursorPosition,
    });
  }
};

export default handleTab;
