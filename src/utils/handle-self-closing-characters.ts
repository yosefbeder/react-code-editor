import { getLineOf } from '.';
import { getAfterCaret, getBeforeCaret, restoreCaretPosition } from './caret';
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
  const character = e.key;
  const afterCaret = getAfterCaret(selection);
  const beforeCaret = getBeforeCaret(selection);

  if (selection.type === 'Caret') {
    const line = getLineOf(afterCaret.length, editor.innerHTML);

    // Brackets

    if (OPENING_BRACKETS.includes(character)) {
      e.preventDefault();
      editor.innerHTML = `${afterCaret}${character}${
        CLOSING_BRACKETS[OPENING_BRACKETS.indexOf(character)]
      }${beforeCaret}`;

      const nextCaretPosition = afterCaret.length + 1;

      restoreCaretPosition(selection, editor.childNodes[0], {
        start: nextCaretPosition,
        end: nextCaretPosition,
      });

      recordHistory(editor.innerHTML, {
        start: nextCaretPosition,
        end: nextCaretPosition,
      });
    }

    if (CLOSING_BRACKETS.includes(character)) {
      if (beforeCaret[0] === character) {
        e.preventDefault();

        const nextCaretPosition = afterCaret.length + 1;

        restoreCaretPosition(selection, editor.childNodes[0], {
          start: nextCaretPosition,
          end: nextCaretPosition,
        });
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

        const nextCaretPosition = afterCaret.length + 1;

        if (isCharactersInLineEven) {
          if (beforeCaret[0] !== character) {
            editor.innerHTML = `${afterCaret}${character.repeat(
              2
            )}${beforeCaret}`;

            restoreCaretPosition(selection, editor.childNodes[0], {
              start: nextCaretPosition,
              end: nextCaretPosition,
            });

            recordHistory(editor.innerHTML, {
              start: nextCaretPosition,
              end: nextCaretPosition,
            });
          } else {
            restoreCaretPosition(selection, editor.childNodes[0], {
              start: nextCaretPosition,
              end: nextCaretPosition,
            });
          }
        } else {
          editor.innerHTML = `${afterCaret}${character}${beforeCaret}`;

          restoreCaretPosition(selection, editor.childNodes[0], {
            start: nextCaretPosition,
            end: nextCaretPosition,
          });
        }
      }

      const nextCaretPosition = afterCaret.length + 1;

      restoreCaretPosition(selection, editor.childNodes[0], {
        start: nextCaretPosition,
        end: nextCaretPosition,
      });
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

      const nextCaretPosition = afterCaret.length + 1;

      if (isCharactersInWholeTextEven) {
        if (beforeCaret[0] !== character) {
          editor.innerHTML = `${afterCaret}${character.repeat(
            2
          )}${beforeCaret}`;

          restoreCaretPosition(selection, editor.childNodes[0], {
            start: nextCaretPosition,
            end: nextCaretPosition,
          });

          recordHistory(editor.innerHTML, {
            start: nextCaretPosition,
            end: nextCaretPosition,
          });
        } else {
          restoreCaretPosition(selection, editor.childNodes[0], {
            start: nextCaretPosition,
            end: nextCaretPosition,
          });
        }
      } else {
        editor.innerHTML = `${afterCaret}${character}${beforeCaret}`;

        restoreCaretPosition(selection, editor.childNodes[0], {
          start: nextCaretPosition,
          end: nextCaretPosition,
        });
      }
    }
  }

  if (selection.type === 'Range') {
    const selectedText = editor.innerHTML.slice(
      afterCaret.length,
      editor.innerHTML.length - beforeCaret.length
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
      editor.innerHTML = `${afterCaret}${character}${selectedText}${closingCharacter!}${beforeCaret}`;

      //? Re select the previously selected text

      //* Do that check because selectedText may end with <br> (because to solve caret not moving bug we used this dirty trick 😗)
      const selectedTextLength = selectedText.endsWith('<br>')
        ? selectedText.slice(0, -4).length + 1
        : selectedText.length + 1;

      const nextCaretPosition = {
        start: afterCaret.length + 1,
        end: afterCaret.length + selectedTextLength,
      };

      restoreCaretPosition(selection, editor.childNodes[0], nextCaretPosition);

      recordHistory(editor.innerHTML, nextCaretPosition);
    }
  }
};

export default handleSelfClosingCharacters;
