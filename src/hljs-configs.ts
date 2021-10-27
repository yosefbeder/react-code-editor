import hljs from 'highlight.js/lib/core';

import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('xml', xml);

hljs.registerLanguage('javascript', javascript);

hljs.registerLanguage('css', css);

hljs.configure({ classPrefix: '' });
