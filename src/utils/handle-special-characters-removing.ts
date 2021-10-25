import React from 'react';
import {
  getAfterCaret,
  getBeforeCaret,
  getCaretPosition,
  restoreCaretPosition,
} from './caret';
import {
  CLOSING_BRACKETS,
  MUTLI_LINE_QUOTE,
  OPENING_BRACKETS,
  SINGLE_LINE_QUOTES,
} from '../constants';

const handleSpecialCharactersRemoving = (
  editor: HTMLDivElement,
  e: React.KeyboardEvent<HTMLDivElement>
) => {
  const caretPosition = getCaretPosition();

  const beforeCaret = getBeforeCaret(caretPosition, editor.innerText);
  const afterCaret = getAfterCaret(caretPosition, editor.innerText);

  //? The character after the caret is an opening bracket and the character before it is its closing one
  const isWrappedWithBrackets =
    OPENING_BRACKETS.includes(beforeCaret[beforeCaret.length - 1]) &&
    afterCaret[0] ===
      CLOSING_BRACKETS[
        OPENING_BRACKETS.indexOf(beforeCaret[beforeCaret.length - 1])
      ];

  //? The character after that caret is a quote and the one before it is the same one.
  const isWrappedWithQuotes =
    [...SINGLE_LINE_QUOTES, MUTLI_LINE_QUOTE].includes(
      beforeCaret[beforeCaret.length - 1]
    ) && afterCaret[0] === beforeCaret[beforeCaret.length - 1];

  if (isWrappedWithBrackets || isWrappedWithQuotes) {
    e.preventDefault();

    const textNode = document.createTextNode(
      `${beforeCaret.slice(0, -1)}${afterCaret.slice(1)}`
    );

    editor.innerHTML = '';

    editor.appendChild(textNode);

    const nextCaretPosition = beforeCaret.length - 1;

    restoreCaretPosition({
      start: nextCaretPosition,
      end: nextCaretPosition,
    });
  }
};

export default handleSpecialCharactersRemoving;
