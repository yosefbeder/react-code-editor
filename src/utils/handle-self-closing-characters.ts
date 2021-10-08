import { getAfterCaret, getBeforeCaret, getLineOf } from '.';
import {
  OPENING_BRACKETS,
  CLOSING_BRACKETS,
  SINGLE_LINE_QUOTES,
  MUTLI_LINE_QUOTE,
} from '../constants';

const handleSelfClosingCharacters = (
  editor: HTMLDivElement,
  e: React.KeyboardEvent<HTMLDivElement>
) => {
  /*
    1. If there's not selected text.

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

  if (selection.type === 'Caret') {
    const afterCaret = getAfterCaret(selection);
    const beforeCaret = getBeforeCaret(selection);

    const character = e.key;
    const line = getLineOf(afterCaret.length, editor.innerHTML);

    // Brackets

    if (OPENING_BRACKETS.includes(character)) {
      e.preventDefault();
      editor.innerHTML = `${afterCaret}${character}${
        CLOSING_BRACKETS[OPENING_BRACKETS.indexOf(character)]
      }${beforeCaret}`;

      selection.collapse(editor.childNodes[0], afterCaret.length + 1);
    }

    if (CLOSING_BRACKETS.includes(character)) {
      if (beforeCaret[0] === character) {
        e.preventDefault();

        selection.collapse(editor.childNodes[0], afterCaret.length + 1);
      }
    }

    // Single line quotes

    if (SINGLE_LINE_QUOTES.includes(character)) {
      e.preventDefault();

      if (
        character === "'" &&
        afterCaret
          .split('')
          .reduce((acc, cur) => (cur === '"' ? acc + 1 : acc), 0) %
          2 !==
          0
      ) {
        editor.innerHTML = `${afterCaret}${character}${beforeCaret}`;
      } else {
        // I know, not the best name 😑
        let isCharactersInLineEven: boolean;

        if (character === "'") {
          // * (1)
          isCharactersInLineEven = (() => {
            return (
              line.split('').reduce((acc, cur, i, arr) => {
                if (cur === character) {
                  const isInDoubleQuote =
                    arr
                      .slice(0, i)
                      .reduce((acc, cur) => (cur === '"' ? acc + 1 : acc), 0) %
                      2 !==
                    0;

                  if (isInDoubleQuote) return acc;
                  return acc + 1;
                }

                return acc;
              }, 0) %
                2 ===
              0
            );
          })();
        } else {
          isCharactersInLineEven =
            line
              .split('')
              .reduce((acc, cur) => (cur === character ? acc + 1 : acc), 0) %
              2 ===
            0;
        }

        if (isCharactersInLineEven && beforeCaret[0] !== character) {
          editor.innerHTML = `${afterCaret}${character.repeat(
            2
          )}${beforeCaret}`;
        }

        if (!isCharactersInLineEven) {
          editor.innerHTML = `${afterCaret}${character}${beforeCaret}`;
        }
      }

      selection.collapse(editor.childNodes[0], afterCaret.length + 1);
    }

    // Mutli line quote
    if (character === MUTLI_LINE_QUOTE) {
      e.preventDefault();

      // I also know, not the best name 😶
      const isCharactersInWholeTextEven =
        editor.innerHTML
          .split('')
          .reduce((acc, cur) => (cur === MUTLI_LINE_QUOTE ? acc + 1 : acc), 0) %
          2 ===
        0;

      if (isCharactersInWholeTextEven && beforeCaret[0] !== character) {
        editor.innerHTML = `${afterCaret}${character.repeat(2)}${beforeCaret}`;
      }

      if (!isCharactersInWholeTextEven) {
        editor.innerHTML = `${afterCaret}${character}${beforeCaret}`;
      }

      selection.collapse(editor.childNodes[0], afterCaret.length + 1);
    }
  }
};

export default handleSelfClosingCharacters;
