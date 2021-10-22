import { PositionType } from '../types';
import {
  getAfterCaret,
  getBeforeCaret,
  getCaretPosition,
  restoreCaretPosition,
} from './caret';

const handleRangeRemoving = (
  selection: Selection,
  editor: HTMLDivElement,
  recordHistory: (html: string, position: PositionType) => void
) => {
  const beforeCaret = getBeforeCaret(selection);
  const afterCaret = getAfterCaret(selection);

  recordHistory(editor.innerText, getCaretPosition(selection));

  editor.innerHTML = `${beforeCaret}${afterCaret}`;

  const nextCaretPosition = beforeCaret.length;

  restoreCaretPosition(selection, editor.childNodes[0], {
    start: nextCaretPosition,
    end: nextCaretPosition,
  });
};

export default handleRangeRemoving;
