import React from 'react';
import { PositionType } from '../types';
import {
  getAfterCaret,
  getBeforeCaret,
  getCaretPosition,
  restoreCaretPosition,
} from './caret';

const handlePaste = (
  e: React.ClipboardEvent<HTMLDivElement>,
  editor: HTMLDivElement,
  recordHistory: (text: string, position: PositionType) => void
) => {
  /*
    ? Handling copies
      1. Record the history.
      2. Insert the new text as plain text.
      3. Record the history.
  */

  e.preventDefault();

  const selection = window.getSelection()!;
  const beforeCaret = getBeforeCaret(selection);
  const afterCaret = getAfterCaret(selection);
  const copiedText = e.clipboardData.getData('text/plain');

  const caretPosition = getCaretPosition(selection);

  recordHistory(editor.innerText, caretPosition);

  editor.innerHTML = `${beforeCaret}${copiedText}${afterCaret}`;

  const newCaretPosition = beforeCaret.length + copiedText.length;

  restoreCaretPosition(selection, editor.childNodes[0], {
    start: newCaretPosition,
    end: newCaretPosition,
  });

  recordHistory(editor.innerText, {
    start: newCaretPosition,
    end: newCaretPosition,
  });
};

export default handlePaste;
