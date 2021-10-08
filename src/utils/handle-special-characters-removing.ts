import React from 'react';
import { getAfterCaret, getBeforeCaret } from '.';
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
  const selection = window.getSelection()!;

  const afterCaret = getAfterCaret(selection);
  const beforeCaret = getBeforeCaret(selection);

  //? The character after the caret is an opening bracket and the character before it is its closing one
  const isWrappedWithBrackets =
    OPENING_BRACKETS.includes(afterCaret[afterCaret.length - 1]) &&
    beforeCaret[0] ===
      CLOSING_BRACKETS[
        OPENING_BRACKETS.indexOf(afterCaret[afterCaret.length - 1])
      ];

  //? The character after that caret is a quote and the one before it is the same one.
  const isWrappedWithQuotes =
    [...SINGLE_LINE_QUOTES, MUTLI_LINE_QUOTE].includes(
      afterCaret[afterCaret.length - 1]
    ) && beforeCaret[0] === afterCaret[afterCaret.length - 1];

  if (isWrappedWithBrackets || isWrappedWithQuotes) {
    e.preventDefault();

    editor.innerHTML = `${afterCaret.slice(0, -1)}${beforeCaret.slice(1)}`;
    selection.collapse(editor.childNodes[0], afterCaret.length - 1);
  }
};

export default handleSpecialCharactersRemoving;
