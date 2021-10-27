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

const restoreCaretPosition = ({ start, end }: PositionType, node?: Node) => {
  const selection = window.getSelection();

  if (selection) {
    if (node) {
      selection.setBaseAndExtent(node, start, node, end);
    } else if (selection.anchorNode) {
      let anchorNode: Node;

      if (selection.anchorNode.nodeType === Node.TEXT_NODE) {
        anchorNode = selection.anchorNode;
      } else {
        anchorNode = selection.anchorNode.childNodes[0];
      }

      selection.setBaseAndExtent(anchorNode, start, anchorNode, end);
    }
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
