import React, { useEffect, useReducer, useRef } from 'react';
import handleNewLine from './utils/handle-new-line';
import handleTab from './utils/handle-tab';
import handleSelfClosingCharacters from './utils/handle-self-closing-characters';
import {
  Actions,
  MUTLI_LINE_QUOTE,
  OPENING_BRACKETS,
  SINGLE_LINE_QUOTES,
  SPECIAL_CHARACTERS,
} from './constants';
import handleSpecialCharactersRemoving from './utils/handle-special-characters-removing';
import reducer, { initialState } from './reducer';
import { getCaretPosition, restoreCaretPosition } from './utils/caret';
import { PositionType } from './types';
import handleCharacter from './utils/handle-character';
import handleRangeRemoving from './utils/handle-range-removing';

const style = {
  width: '20rem',
  height: '10rem',
  backgroundColor: '#333',
  borderRadius: '.5rem',
  outline: 'none',
  padding: '1rem',
  fontFamily: 'monospace',
  color: '#fff',
};

const CodeEditor = () => {
  const [state, send] = useReducer(reducer, initialState);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const editor = ref.current!;
    const selection = window.getSelection()!;

    // override the input whenever it's changed by the reducer
    if (state.present.html !== editor.innerHTML) {
      editor.innerHTML = state.present.html;
      restoreCaretPosition(
        selection,
        editor.childNodes[0],
        state.present.position
      );
    }
  }, [state.present]);

  /*
    ? When is the history recorded
      1. Whenever a space or dot is added.
      2. When a new line is injected.
      3. When double characters are added.
      4. Undoing or redoing and the present isn't equal to the cur input value.
      5. If some text is selected and we clicked a button that will delete it.
  */
  const recordHistory = (html: string, position: PositionType) => {
    send({ type: Actions.RECORD, payload: { html, position } });
  };

  return (
    <div
      style={{ ...style, whiteSpace: 'pre', tabSize: 2, overflowX: 'scroll' }}
      ref={ref}
      contentEditable={true}
      spellCheck={false}
      onKeyDown={e => {
        const editor = ref.current!;
        const selection = window.getSelection()!;
        const caretPosition = getCaretPosition(selection);
        const isUndo = e.code === 'KeyZ' && e.ctrlKey;
        const isRedo = e.code === 'KeyY' && e.ctrlKey;

        if (
          isUndo ||
          isRedo ||
          e.key === 'Enter' ||
          e.key === 'Tab' ||
          e.code === 'Space' ||
          e.key === '.'
        ) {
          e.preventDefault();
        }

        // 5.
        if (
          caretPosition.start !== caretPosition.end &&
          ![
            ...OPENING_BRACKETS,
            ...SINGLE_LINE_QUOTES,
            MUTLI_LINE_QUOTE,
          ].includes(e.key) &&
          !isUndo &&
          !isRedo &&
          e.key !== 'Meta' &&
          e.key !== 'Control' &&
          e.key !== 'Alt' &&
          !e.key.startsWith('Arrow')
        ) {
          if (e.key === 'Backspace') {
            e.preventDefault();

            handleRangeRemoving(selection, editor, recordHistory);
          }

          recordHistory(editor.innerHTML, getCaretPosition(selection));
        }

        if (isUndo) {
          // 4.
          if (editor.innerHTML !== state.present.html) {
            recordHistory(editor.innerHTML, getCaretPosition(selection));
          }
          //* To fix updating issue
          setTimeout(() => send({ type: Actions.UNDO }));
        }

        if (isRedo) {
          // 4.
          if (editor.innerHTML !== state.present.html) {
            recordHistory(editor.innerHTML, getCaretPosition(selection));
          } else {
            send({ type: Actions.REDO });
          }
        }

        if (e.key === 'Enter') {
          // 2.
          handleNewLine(editor, recordHistory);
        }

        if (e.key === 'Tab') {
          handleTab(editor, e);
        }

        if (SPECIAL_CHARACTERS.includes(e.key)) {
          // 3.
          handleSelfClosingCharacters(editor, e, recordHistory);
        }

        if (e.key === 'Backspace') {
          handleSpecialCharactersRemoving(editor, e);
        }

        if (e.code === 'Space') {
          // 1.
          handleCharacter(selection, editor, ' ', recordHistory);
        }

        if (e.key === '.') {
          // 1.
          handleCharacter(selection, editor, '.', recordHistory);
        }
      }}
    ></div>
  );
};

export default CodeEditor;
