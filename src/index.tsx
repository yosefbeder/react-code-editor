import React, { useEffect, useReducer, useRef, useState } from 'react';
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
import './index.css';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

const CodeEditor = () => {
  const [state, send] = useReducer(reducer, initialState);
  const editorRef = useRef<HTMLDivElement>(null);
  const previewerRef = useRef<HTMLDivElement>(null);

  const [lineNumber, setLineNumber] = useState(0);
  const [curText, setCurText] = useState('');

  const calculateLineNumber = (text: string) => {
    setLineNumber(
      text
        .split('')
        .reduce((acc, cur) => (/\n/g.test(cur) ? acc + 1 : acc), 0) + 1
    );
  };

  // onChange function
  useEffect(() => {
    calculateLineNumber(curText);

    // highlighting logic

    const previewer = previewerRef.current!;

    previewer.innerHTML = Prism.highlight(curText, Prism.languages.js, 'js');
  }, [curText]);

  // override the input whenever it's changed by the reducer
  useEffect(() => {
    const editor = editorRef.current!;
    const selection = window.getSelection()!;

    if (state.present.text !== editor.innerText) {
      editor.innerHTML = state.present.text;
      restoreCaretPosition(
        selection,
        editor.childNodes[0],
        state.present.position
      );

      //? Whenever we undo or redo
      setCurText(editor.innerText);
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
  const recordHistory = (text: string, position: PositionType) => {
    send({ type: Actions.RECORD, payload: { text, position } });
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const editor = editorRef.current!;
    const textAfter = editor.innerText;
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
      ![...OPENING_BRACKETS, ...SINGLE_LINE_QUOTES, MUTLI_LINE_QUOTE].includes(
        e.key
      ) &&
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

      recordHistory(editor.innerText, getCaretPosition(selection));
    }

    if (isUndo) {
      // 4.
      if (editor.innerText !== state.present.text) {
        recordHistory(editor.innerText, getCaretPosition(selection));
      }
      //* To fix updating issue
      setTimeout(() => send({ type: Actions.UNDO }));
    }

    if (isRedo) {
      // 4.
      if (editor.innerText !== state.present.text) {
        recordHistory(editor.innerText, getCaretPosition(selection));
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

      //* Removing the default behavior of adding a <br> if the editor is empty
      if (!editor.textContent) {
        e.preventDefault();
      }
    }

    if (e.code === 'Space') {
      // 1.
      handleCharacter(selection, editor, ' ', recordHistory);
    }

    if (e.key === '.') {
      // 1.
      handleCharacter(selection, editor, '.', recordHistory);
    }

    //? Whenever something is changed by the handlers

    const textBefore = editor.innerText;

    if (textAfter !== textBefore) {
      setCurText(textBefore);
    }

    /*
      ? Fixing going to the last line with caret bug
        1. If the down arrow is pressed and we're after the empty last empty line.
        2. If the right arrow is pressed and we're in the last character after the last empty line.
    */

    if (textBefore.endsWith('\n')) {
      const caretPosition = getCaretPosition(selection);

      if (
        e.code === 'ArrowDown' &&
        caretPosition.start === caretPosition.end &&
        caretPosition.start <= textBefore.lastIndexOf('\n') &&
        caretPosition.start > textBefore.slice(0, -1).lastIndexOf('\n')
      ) {
        e.preventDefault();
        restoreCaretPosition(selection, editor.childNodes[0], {
          start: textBefore.length,
          end: textBefore.length,
        });
      }

      if (
        e.code === 'ArrowRight' &&
        caretPosition.start === textBefore.lastIndexOf('\n')
      ) {
        e.preventDefault();
        restoreCaretPosition(selection, editor.childNodes[0], {
          start: textBefore.length,
          end: textBefore.length,
        });
      }
    }
  };

  return (
    <div className="editor">
      <div className="editor__lines-numbers">
        {Array.from({ length: lineNumber }).map((_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>
      <div className="editor__main">
        <div
          className="editor__textarea"
          ref={editorRef}
          contentEditable={true}
          spellCheck={false}
          onInput={() => {
            //? Whenever a new line is removed by the default behavior of the browser
            const editor = editorRef.current!;

            setCurText(editor.innerText);
          }}
          onKeyDown={keyDownHandler}
        />
        <div className="editor__previewer" ref={previewerRef} />
      </div>
    </div>
  );
};

export default CodeEditor;
