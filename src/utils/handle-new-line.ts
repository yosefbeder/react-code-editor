import { getPadding, insert } from '.';
import {
	getAfterCaret,
	getBeforeCaret,
	getCaretPosition,
	restoreCaretPosition,
} from './caret';
import {
	CLOSING_BRACKETS,
	OPENING_BRACKETS,
	MUTLI_LINE_QUOTE,
} from '../constants';
import { PositionType } from '../types';

const handleNewLine = (
	editor: HTMLDivElement,
	wrapper: HTMLDivElement,
	dynamicHeight: boolean,
	recordHistory: (html: string, position: PositionType) => void,
) => {
	const caretPosition = getCaretPosition();

	//? Get the content around the caret
	const beforeCaret = getBeforeCaret(caretPosition, editor.innerText);
	const afterCaret = getAfterCaret(caretPosition, editor.innerText);

	/*
    ? Injecting the updated content
      1. get the padding.
        1. If it exists
          1. If beforeCaret starts in a special character and afterCaret ends with it.
            * A special character is one of these [], {}, `
          2. Else inject it before (beforeCaret).
        2. If it doesn't.
          1. If beforeCaret is empty inject a <br>.
            * To solve the cursor not moving to the new line bug.
          2. If beforeCaret is not empty Inject normally.
  */

	const padding = getPadding(editor.innerText);

	let text: string;

	if (padding) {
		//? The character after that caret is a quote and the one before it is the same one.
		const isWrappedWithBrackets =
			OPENING_BRACKETS.includes(beforeCaret[beforeCaret.length - 1]) &&
			afterCaret[0] ===
				CLOSING_BRACKETS[
					OPENING_BRACKETS.indexOf(beforeCaret[beforeCaret.length - 1])
				];

		const isWrappedWithMutliLineQuotes =
			beforeCaret[beforeCaret.length - 1] === MUTLI_LINE_QUOTE &&
			afterCaret[0] === MUTLI_LINE_QUOTE;

		text = `\n${padding}${
			isWrappedWithBrackets || isWrappedWithMutliLineQuotes
				? `\n${padding.slice(0, -1)}`
				: ''
		}`;
	} else {
		text = `\n`;
	}

	insert(text, editor);

	//? Move the position of the caret to the next line + the number of tabs
	const nextCaretPosition = beforeCaret.length + 1 + padding.length;

	restoreCaretPosition({
		start: nextCaretPosition,
		end: nextCaretPosition,
	});

	recordHistory(editor.innerText, {
		start: nextCaretPosition,
		end: nextCaretPosition,
	});

	// scrolling in the x-axis
	wrapper.scrollLeft = 0;

	// scrolling in the y-axis
	if (!dynamicHeight) {
		const lineHeight = parseInt(
			getComputedStyle(editor).getPropertyValue('line-height'),
		);

		const curLine =
			getBeforeCaret(getCaretPosition(), editor.innerText)
				.split('')
				.reduce((acc, cur) => (/\n/g.test(cur) ? acc + 1 : acc), 0) + 1;

		const paddingTop = parseInt(
			getComputedStyle(editor).getPropertyValue('padding-top'),
		);

		if (curLine * lineHeight > wrapper.scrollTop + wrapper.clientHeight) {
			wrapper.scrollTop =
				curLine * lineHeight + paddingTop - wrapper.clientHeight;
		}
	}
};

export default handleNewLine;
