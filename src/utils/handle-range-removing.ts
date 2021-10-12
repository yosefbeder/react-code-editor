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
  const afterCaret = getAfterCaret(selection);
  const beforeCaret = getBeforeCaret(selection);

  recordHistory(editor.innerHTML, getCaretPosition(selection));

  editor.innerHTML = `${afterCaret}${beforeCaret}`;

  const nextCaretPosition = afterCaret.length;

  restoreCaretPosition(selection, editor.childNodes[0], {
    start: nextCaretPosition,
    end: nextCaretPosition,
  });
};

export default handleRangeRemoving;
