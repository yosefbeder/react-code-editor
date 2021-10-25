import { insert } from '.';
import { PositionType } from '../types';
import {
  getBeforeCaret,
  getCaretPosition,
  restoreCaretPosition,
} from './caret';

// the purpose of this function is saving the history after inserting the character because onKeyDown body function is executed before the elements are inserted
const handleCharacter = (
  editor: HTMLDivElement,
  character: string,
  recordHistory: (html: string, position: PositionType) => void
) => {
  const caretPosition = getCaretPosition();

  const beforeCaret = getBeforeCaret(caretPosition, editor.innerHTML);

  insert(character, editor);

  const nextCaretPosition = beforeCaret.length + 1;

  restoreCaretPosition({
    start: nextCaretPosition,
    end: nextCaretPosition,
  });

  recordHistory(editor.innerText, {
    start: nextCaretPosition,
    end: nextCaretPosition,
  });
};

export default handleCharacter;
