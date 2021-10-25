import { insert } from '.';
import { PositionType } from '../types';
import {
  getBeforeCaret,
  getCaretPosition,
  restoreCaretPosition,
} from './caret';

const handleRangeRemoving = (
  editor: HTMLDivElement,
  recordHistory: (html: string, position: PositionType) => void
) => {
  const caretPosition = getCaretPosition();

  const beforeCaret = getBeforeCaret(caretPosition, editor.innerText);

  recordHistory(editor.innerText, caretPosition);

  insert('', editor);

  const nextCaretPosition = beforeCaret.length;

  restoreCaretPosition({
    start: nextCaretPosition,
    end: nextCaretPosition,
  });
};

export default handleRangeRemoving;
