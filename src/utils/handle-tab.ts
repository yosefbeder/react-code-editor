import { getAfterCaret, getBeforeCaret } from '.';

const handleTab = (editor: HTMLDivElement) => {
  const selection = window.getSelection()!;

  const afterCaret = getAfterCaret(selection);
  const beforeCaret = getBeforeCaret(selection);

  //? inject the new line
  editor.innerHTML = `${afterCaret}\t${beforeCaret}`;
  selection.collapse(editor.childNodes[0], afterCaret.length + 1);
};

export default handleTab;
