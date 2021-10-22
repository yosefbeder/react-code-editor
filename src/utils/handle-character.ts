import { PositionType } from '../types';
import { getAfterCaret, getBeforeCaret, restoreCaretPosition } from './caret';

// the purpose of this function is saving the history after inserting the character because onKeyDown body function is executed before the elements are inserted
const handleCharacter = (
  selection: Selection,
  editor: HTMLDivElement,
  character: string,
  recordHistory: (html: string, position: PositionType) => void
) => {
  const beforeCaret = getBeforeCaret(selection);
  const afterCaret = getAfterCaret(selection);

  editor.innerHTML = `${beforeCaret}${character}${afterCaret}`;

  const nextCaretPosition = beforeCaret.length + 1;

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
