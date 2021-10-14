import { PositionType } from '../types';
import { getAfterCaret, getBeforeCaret, restoreCaretPosition } from './caret';

// the purpose of this function is saving the history after inserting the character because onKeyDown body function is executed before the elements are inserted
const handleCharacter = (
  selection: Selection,
  editor: HTMLDivElement,
  character: string,
  recordHistory: (html: string, position: PositionType) => void
) => {
  const afterCaret = getAfterCaret(selection);
  const beforeCaret = getBeforeCaret(selection);

  editor.innerHTML = `${afterCaret}${character}${beforeCaret}`;

  const nextCaretPosition = afterCaret.length + 1;

  restoreCaretPosition(selection, editor.childNodes[0], {
    start: nextCaretPosition,
    end: nextCaretPosition,
  });

  recordHistory(editor.innerText, {
    start: nextCaretPosition,
    end: nextCaretPosition,
  });
};

export default handleCharacter;
