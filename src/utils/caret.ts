import { PositionType } from '../types';

const getCaretPosition = (): PositionType => {
  const selection = window.getSelection();

  let start = 0;
  let end = 0;

  if (selection) {
    [start, end] = [selection.anchorOffset, selection.focusOffset];

    if (start > end) {
      [start, end] = [end, start];
    }
  }

  return { start, end };
};

const restoreCaretPosition = ({ start, end }: PositionType) => {
  const selection = window.getSelection();

  if (selection) {
    let node: Node;

    if (selection.anchorNode?.nodeType === Node.TEXT_NODE) {
      node = selection.anchorNode;
    } else {
      node = selection.anchorNode!.childNodes[0];
    }

    selection.setBaseAndExtent(node, start, node, end);
  }
};

const getBeforeCaret = ({ start }: PositionType, text: string) => {
  return text.slice(0, start);
};

const getAfterCaret = ({ end }: PositionType, text: string) => {
  return text.slice(end);
};

export {
  getCaretPosition,
  restoreCaretPosition,
  getAfterCaret,
  getBeforeCaret,
};
