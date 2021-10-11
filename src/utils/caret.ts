import { PositionType } from '../types';

const getCaretPosition = (selection: Selection): PositionType => {
  const [start, end] = [selection.anchorOffset, selection.focusOffset];

  if (start > end) {
    return { start: end, end: start };
  }

  return { start, end };
};

const restoreCaretPosition = (
  selection: Selection,
  node: Node,
  { start, end }: PositionType
) => {
  if (start === end) {
    selection.collapse(node, start);
  } else {
    const range = document.createRange();

    range.setStart(node, start);
    range.setEnd(node, end);

    selection.removeAllRanges();
    selection.addRange(range);
  }
};

const getAfterCaret = (selection: Selection) => {
  const textNode = selection.anchorNode?.nodeValue;
  const { start } = getCaretPosition(selection);

  if (!textNode) return '';

  return textNode.slice(0, start);
};

const getBeforeCaret = (selection: Selection) => {
  const textNode = selection.anchorNode?.nodeValue;
  const { end } = getCaretPosition(selection);

  if (!textNode) return '';

  return textNode.slice(end);
};

export {
  getCaretPosition,
  restoreCaretPosition,
  getAfterCaret,
  getBeforeCaret,
};
