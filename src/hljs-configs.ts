import hljs from 'highlight.js/lib/core';

import css from 'highlight.js/lib/languages/css';
import markdown from 'highlight.js/lib/languages/markdown';
import json from 'highlight.js/lib/languages/json';
import scss from 'highlight.js/lib/languages/scss';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('xml', xml);

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);

hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('json', json);

hljs.configure({ classPrefix: '' });
