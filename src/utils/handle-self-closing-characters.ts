import { getLineOf, insert } from '.';
import {
  getAfterCaret,
  getBeforeCaret,
  getCaretPosition,
  restoreCaretPosition,
} from './caret';
import {
  OPENING_BRACKETS,
  CLOSING_BRACKETS,
  SINGLE_LINE_QUOTES,
  MUTLI_LINE_QUOTE,
} from '../constants';
import { PositionType } from '../types';

const handleSelfClosingCharacters = (
  editor: HTMLDivElement,
  e: React.KeyboardEvent<HTMLDivElement>,
  recordHistory: (html: string, position: PositionType) => void
) => {
  /*
    1. If there's no selected text.

      ? Brackets

        1. If it's one of the opening brackets then add a closing one.
        2. If it's one of the closing brackets.
          1. If the cur character is closing then prevent default and skip it.
          2. Else keep it to the browser default (which adds it then skips it).

      ? Single-line quotes

        1. If charater is equal to ' and is wrapped with "" don't prevent adding two quotes.
        2. Else
          1. count down the number of the same character in the line.
            1. If it's a single quote then don't count the wrapped quotes.
              * (1) check this in code to see how it can be implemented.
            2. Else count any appearance of the character.
          2. If the number is even and character before the caret isn't equal to it.
            1. Add two quotes.
          3. If the number is odd add one.

        3. Move the caret one step forward.

      ? Mutli-line quote

        1. If there's an even number of the caracter in the whole text and the character before it the caret isn't equal to it.
          - Add a new character and it's closing one.
        - If there's an odd number.
        2. Move the caret one step forward.

  */

  const selection = window.getSelection()!;
  const caretPosition = getCaretPosition();

  const character = e.key;
  const beforeCaret = getBeforeCaret(caretPosition, editor.innerText);
  const afterCaret = getAfterCaret(caretPosition, editor.innerText);

  if (selection.type === 'Caret') {
    const line = getLineOf(caretPosition, editor.innerText);

    // Brackets
    if (OPENING_BRACKETS.includes(character)) {
      e.preventDefault();

      insert(
        `${character}${CLOSING_BRACKETS[OPENING_BRACKETS.indexOf(character)]}`,
        editor
      );

      const nextCaretPosition = beforeCaret.length + 1;

      restoreCaretPosition({
        start: nextCaretPosition,
        end: nextCaretPosition,
      });

      recordHistory(editor.innerText, {
        start: nextCaretPosition,
        end: nextCaretPosition,
      });
    }

    if (CLOSING_BRACKETS.includes(character)) {
      if (afterCaret[0] === character) {
        e.preventDefault();

        const nextCaretPosition = beforeCaret.length + 1;

        restoreCaretPosition({
          start: nextCaretPosition,
          end: nextCaretPosition,
        });
      }
    }

    // Single line quotes
    if (SINGLE_LINE_QUOTES.includes(character)) {
      e.preventDefault();

      // I know, not the best name 😑
      const isCharactersInLineEven =
        line
          .split('')
          .reduce((acc, cur) => (cur === character ? acc + 1 : acc), 0) %
          2 ===
        0;

      const nextCaretPosition = beforeCaret.length + 1;

      if (isCharactersInLineEven) {
        if (afterCaret[0] !== character) {
          insert(character.repeat(2), editor);

          restoreCaretPosition({
            start: nextCaretPosition,
            end: nextCaretPosition,
          });

          recordHistory(editor.innerText, {
            start: nextCaretPosition,
            end: nextCaretPosition,
          });
        } else {
          restoreCaretPosition({
            start: nextCaretPosition,
            end: nextCaretPosition,
          });
        }
      } else {
        insert(character, editor);

        restoreCaretPosition({
          start: nextCaretPosition,
          end: nextCaretPosition,
        });
      }
    }

    // Mutli line quote
    if (character === MUTLI_LINE_QUOTE) {
      e.preventDefault();

      // I also know, not the best name 😶
      const isCharactersInWholeTextEven =
        editor.innerText
          .split('')
          .reduce((acc, cur) => (cur === MUTLI_LINE_QUOTE ? acc + 1 : acc), 0) %
          2 ===
        0;

      const nextCaretPosition = beforeCaret.length + 1;

      if (isCharactersInWholeTextEven) {
        if (beforeCaret[0] !== character) {
          insert(character.repeat(2), editor);

          restoreCaretPosition({
            start: nextCaretPosition,
            end: nextCaretPosition,
          });

          recordHistory(editor.innerText, {
            start: nextCaretPosition,
            end: nextCaretPosition,
          });
        } else {
          restoreCaretPosition({
            start: nextCaretPosition,
            end: nextCaretPosition,
          });
        }
      } else {
        insert(character, editor);

        editor.innerHTML = `${beforeCaret}${character}${afterCaret}`;

        restoreCaretPosition({
          start: nextCaretPosition,
          end: nextCaretPosition,
        });
      }
    }
  }

  if (selection.type === 'Range') {
    const selectedText = editor.innerText.slice(
      beforeCaret.length,
      editor.innerText.length - afterCaret.length
    );
    let closingCharacter: string;

    const isBracket = OPENING_BRACKETS.includes(character);
    const isQuote = [...SINGLE_LINE_QUOTES, MUTLI_LINE_QUOTE].includes(
      character
    );

    if (isBracket) {
      closingCharacter = CLOSING_BRACKETS[OPENING_BRACKETS.indexOf(character)];
    }

    if (isQuote) {
      closingCharacter = character;
    }

    if (isBracket || isQuote) {
      e.preventDefault();
      //? Wrap the selected text
      insert(`${character}${selectedText}${closingCharacter!}`, editor);

      //? Re select the previously selected text

      const nextCaretPosition = {
        start: beforeCaret.length + 1,
        end: beforeCaret.length + selectedText.length + 1,
      };

      restoreCaretPosition(nextCaretPosition);

      recordHistory(editor.innerText, nextCaretPosition);
    }
  }
};

export default handleSelfClosingCharacters;
