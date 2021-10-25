import { OPENING_BRACKETS, MUTLI_LINE_QUOTE } from '../constants';
import { PositionType } from '../types';
import { getAfterCaret, getBeforeCaret, getCaretPosition } from './caret';

const getLineOf = ({ start }: PositionType, text: string): string => {
  /*
    1. If there's no \n after it.
      1. If there's \n before it.
        1. Use it to clip it.
      2. Else clip it to the end of the text.
    2. Else 
      1. If there's \n before it.
        1. Use it to clip it.
      2. Else clip it to the end of the text.
  */

  let result: string;

  const isFirstLine = !text.slice(0, start).includes('\n');

  if (isFirstLine) {
    if (text.slice(start).includes('\n')) {
      result = text.slice(0, text.indexOf('\n'));
    } else {
      result = text;
    }
  } else {
    const iA = text.slice(0, start).lastIndexOf('\n');
    const iB = text.indexOf('\n', start);

    if (iB !== -1) {
      result = text.slice(iA + 1, iB);
    } else {
      result = text.slice(iA + 1);
    }
  }

  return result;
};

const getPaddingOf = (line: string): string => {
  let sum = 0;

  for (let i = 0; i < line.length; i++) {
    if (/\t/.test(line[i])) {
      sum++;
    } else {
      break;
    }
  }

  return '\t'.repeat(sum);
};

const getPadding = (text: string) => {
  const caretPosition = getCaretPosition();

  const beforeCaret = getBeforeCaret(caretPosition, text);
  let padding: string;

  //? Get the current selected line the (the first one, which will be located above the new line after the new line is injected)
  padding = getPaddingOf(getLineOf(caretPosition, text));

  //? Add an additional tab to opening if the character after the caret is an opening bracket except the last one or a mutli line quote
  if (
    OPENING_BRACKETS.slice(0, 2).includes(
      beforeCaret[beforeCaret.length - 1]
    ) ||
    beforeCaret[beforeCaret.length - 1] === MUTLI_LINE_QUOTE
  )
    padding = padding + '\t';

  return padding;
};

const insert = (text: string, editor: HTMLDivElement) => {
  const caretPosition = getCaretPosition();

  const beforeCaret = getBeforeCaret(caretPosition, editor.innerText);
  const afterCaret = getAfterCaret(caretPosition, editor.innerText);

  const textNode = document.createTextNode(
    `${beforeCaret}${text}${afterCaret}`
  );

  //? Remove all of the nodes
  editor.innerHTML = '';

  editor.appendChild(textNode);
};

export { getLineOf, getPadding, insert };
