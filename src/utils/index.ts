import { OPENING_BRACKETS, MUTLI_LINE_QUOTE } from '../constants';
import { getAfterCaret } from './caret';

const getLineOf = (offset: number, string: string): string => {
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

  const isFirstLine = !string.slice(0, offset).includes('\n');

  if (isFirstLine) {
    if (string.slice(offset).includes('\n')) {
      result = string.slice(0, string.indexOf('\n'));
    } else {
      result = string;
    }
  } else {
    const iA = string.slice(0, offset).lastIndexOf('\n');
    const iB = string.indexOf('\n', offset);

    if (iB !== -1) {
      result = string.slice(iA + 1, iB);
    } else {
      result = string.slice(iA + 1);
    }
  }

  return result;
};

const getPaddingOf = (line: string): string => {
  // loop over line and observe the number of tabs then return them.

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

const getPadding = (selection: Selection) => {
  const afterCaret = getAfterCaret(selection);
  const textNode = selection.anchorNode?.nodeValue;
  const [start, end] = [selection.anchorOffset, selection.focusOffset];
  let padding: string;

  if (!textNode) return '';

  //? Get the current selected line the (the first one, which will be located above the new line after the new line is injected)
  if (start < end) {
    padding = getPaddingOf(getLineOf(start, textNode));
  } else {
    padding = getPaddingOf(getLineOf(end, textNode));
  }

  //? Add an additional tab to opening if the character after the caret is an opening bracket except the last one or a mutli line quote

  if (
    OPENING_BRACKETS.slice(0, 2).includes(afterCaret[afterCaret.length - 1]) ||
    afterCaret[afterCaret.length - 1] === MUTLI_LINE_QUOTE
  )
    padding = padding + '\t';

  return padding;
};

export { getLineOf, getPadding };
