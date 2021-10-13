import { getPadding } from '.';
import { getAfterCaret, getBeforeCaret, restoreCaretPosition } from './caret';
import {
  CLOSING_BRACKETS,
  OPENING_BRACKETS,
  MUTLI_LINE_QUOTE,
} from '../constants';
import { PositionType } from '../types';

const handleNewLine = (
  editor: HTMLDivElement,
  recordHistory: (html: string, position: PositionType) => void
) => {
  const selection = window.getSelection()!;

  //? Get the content around the caret
  const afterCaret = getAfterCaret(selection);
  const beforeCaret = getBeforeCaret(selection);

  /*
    ? Injecting the updated content
      1. get the padding.
        1. If it exists
          1. If beforeCaret starts in a special character and afterCaret ends with it.
            * A special character is one of these [], {}, `
          2. Else inject it before (beforeCaret).
        2. If it doesn't.
          1. If beforeCaret is empty inject a <br>.
            * To solve the cursor not moving to the new line bug.
          2. If beforeCaret is not empty Inject normally.
  */

  const padding = getPadding(selection);
  let newContent: string;

  if (padding) {
    newContent = `${afterCaret}\n${padding}${
      (afterCaret[afterCaret.length - 1] ===
        OPENING_BRACKETS[CLOSING_BRACKETS.indexOf(beforeCaret[0])] &&
        CLOSING_BRACKETS.slice(0, 2).includes(beforeCaret[0])) ||
      (afterCaret[afterCaret.length - 1] === MUTLI_LINE_QUOTE &&
        beforeCaret[0] === MUTLI_LINE_QUOTE)
        ? `\n${padding.slice(0, -1)}${beforeCaret}`
        : beforeCaret
    }`;
  } else {
    newContent = `${afterCaret}\n${beforeCaret}`;
  }

  editor.innerHTML = newContent;

  //? Move the position of the caret to the next line + the number of tabs
  const nextCaretPosition = afterCaret.length + 1 + padding.length;

  restoreCaretPosition(selection, editor.childNodes[0], {
    start: nextCaretPosition,
    end: nextCaretPosition,
  });

  recordHistory(newContent, {
    start: nextCaretPosition,
    end: nextCaretPosition,
  });

  //? Scoll to the begining of the editor in the x axis
  editor.scrollLeft = 0;
};

export default handleNewLine;
