import React from 'react';
import { insert } from '.';
import { PositionType } from '../types';
import {
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

  const caretPosition = getCaretPosition();
  const beforeCaret = getBeforeCaret(caretPosition, editor.innerText);
  const copiedText = e.clipboardData.getData('text/plain');

  recordHistory(editor.innerText, caretPosition);

  insert(copiedText, editor);

  const newCaretPosition = beforeCaret.length + copiedText.length;

  restoreCaretPosition({
    start: newCaretPosition,
    end: newCaretPosition,
  });

  recordHistory(editor.innerText, {
    start: newCaretPosition,
    end: newCaretPosition,
  });
};

export default handlePaste;
