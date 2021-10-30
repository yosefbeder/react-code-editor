var ye=Object.defineProperty,be=Object.defineProperties;var xe=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var oe=(l,e,n)=>e in l?ye(l,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[e]=n,b=(l,e)=>{for(var n in e||(e={}))ae.call(e,n)&&oe(l,n,e[n]);if(Q)for(var n of Q(e))le.call(e,n)&&oe(l,n,e[n]);return l},E=(l,e)=>be(l,xe(e));var se=(l,e)=>{var n={};for(var i in l)ae.call(l,i)&&e.indexOf(i)<0&&(n[i]=l[i]);if(l!=null&&Q)for(var i of Q(l))e.indexOf(i)<0&&le.call(l,i)&&(n[i]=l[i]);return n};import{r as g,l as H,t as de,R as j,c as t,b as Ce,j as ke,a as Te,x as Ee,d as v,F as Se,e as c,g as Le,C as ce,D as Ae,M as je,L as he,f as Ie}from"./vendor.ad2631ff.js";const De=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};De();var x=["{","[","("],O=["}","]",")"],L="`",G=['"',"'"],He=[].concat(x,O,G,[L]),N=function(){var e=window.getSelection(),n=0,i=0;if(e){var r=[e.anchorOffset,e.focusOffset];if(n=r[0],i=r[1],n>i){var o=[i,n];n=o[0],i=o[1]}}return{start:n,end:i}},p=function(e,n){var i=e.start,r=e.end,o=window.getSelection();if(o){if(n)o.setBaseAndExtent(n,i,n,r);else if(o.anchorNode){var a;o.anchorNode.nodeType===Node.TEXT_NODE?a=o.anchorNode:a=o.anchorNode.childNodes[0],o.setBaseAndExtent(a,i,a,r)}}},A=function(e,n){var i=e.start;return n.slice(0,i)},K=function(e,n){var i=e.end;return n.slice(i)},pe=function(e,n){var i=e.start,r,o=!n.slice(0,i).includes(`
`);if(o)n.slice(i).includes(`
`)?r=n.slice(0,n.indexOf(`
`)):r=n;else{var a=n.slice(0,i).lastIndexOf(`
`),d=n.indexOf(`
`,i);d!==-1?r=n.slice(a+1,d):r=n.slice(a+1)}return r},Me=function(e){for(var n=0,i=0;i<e.length&&/\t/.test(e[i]);i++)n++;return"	".repeat(n)},Re=function(e){var n=N(),i=A(n,e),r;return r=Me(pe(n,e)),(x.slice(0,2).includes(i[i.length-1])||i[i.length-1]===L)&&(r=r+"	"),r},C=function(e,n){var i=N(),r=A(i,n.innerText),o=K(i,n.innerText),a=document.createTextNode(""+r+e+o);n.innerHTML="",n.appendChild(a)},Oe=function(e,n){var i=N(),r=A(i,e.innerText),o=K(i,e.innerText),a=Re(e.innerText),d;if(a){var u=x.includes(r[r.length-1])&&o[0]===O[x.indexOf(r[r.length-1])],S=r[r.length-1]===L&&o[0]===L;d=`
`+a+(u||S?`
`+a.slice(0,-1):"")}else d=`
`;C(d,e);var w=r.length+1+a.length;p({start:w,end:w}),n(e.innerText,{start:w,end:w}),e.scrollLeft=0},Pe=function(e,n){var i=N(),r=A(i,e.innerText),o=K(i,e.innerText);if(n.shiftKey){if(r[r.length-1]==="	"){var a=document.createTextNode(""+r.slice(0,r.length-1)+o);e.innerHTML="",e.appendChild(a);var d=r.length-1;p({start:d,end:d})}}else{C("	",e);var u=r.length+1;p({start:u,end:u})}},Fe=function(e,n,i){var r=window.getSelection(),o=N(),a=n.key,d=A(o,e.innerText),u=K(o,e.innerText);if(r.type==="Caret"){var S=pe(o,e.innerText);if(x.includes(a)){n.preventDefault(),C(""+a+O[x.indexOf(a)],e);var w=d.length+1;p({start:w,end:w}),i(e.innerText,{start:w,end:w})}if(O.includes(a)&&u[0]===a){n.preventDefault();var P=d.length+1;p({start:P,end:P})}if(G.includes(a)){n.preventDefault();var V=S.split("").reduce(function(f,I){return I===a?f+1:f},0)%2==0,_=d.length+1;V?u[0]!==a?(C(a.repeat(2),e),p({start:_,end:_}),i(e.innerText,{start:_,end:_})):p({start:_,end:_}):(C(a,e),p({start:_,end:_}))}if(a===L){n.preventDefault();var q=e.innerText.split("").reduce(function(f,I){return I===L?f+1:f},0)%2==0,y=d.length+1;q?d[0]!==a?(C(a.repeat(2),e),p({start:y,end:y}),i(e.innerText,{start:y,end:y})):p({start:y,end:y}):(C(a,e),e.innerHTML=""+d+a+u,p({start:y,end:y}))}}if(r.type==="Range"){var F=e.innerText.slice(d.length,e.innerText.length-u.length),R,U=x.includes(a),W=[].concat(G,[L]).includes(a);if(U&&(R=O[x.indexOf(a)]),W&&(R=a),U||W){n.preventDefault(),C(""+a+F+R,e);var B={start:d.length+1,end:d.length+F.length+1};p(B),i(e.innerText,B)}}},Be=function(e,n){var i=N(),r=A(i,e.innerText),o=K(i,e.innerText),a=x.includes(r[r.length-1])&&o[0]===O[x.indexOf(r[r.length-1])],d=[].concat(G,[L]).includes(r[r.length-1])&&o[0]===r[r.length-1];if(a||d){n.preventDefault();var u=document.createTextNode(""+r.slice(0,-1)+o.slice(1));e.innerHTML="",e.appendChild(u);var S=r.length-1;p({start:S,end:S})}},$e=function(e,n){return n.type===0?{past:[].concat(e.past,[e.present]),present:n.payload,future:[]}:n.type===1&&e.past.length?{past:e.past.slice(0,-1),present:e.past[e.past.length-1],future:[e.present].concat(e.future)}:n.type===2&&e.future.length?{past:[].concat(e.past,[e.present]),present:e.future[0],future:e.future.slice(1)}:e},ze={past:[],present:{text:"",position:{start:0,end:0}},future:[]},ue=function(e,n,i){var r=N(),o=A(r,e.innerHTML);C(n,e);var a=o.length+1;p({start:a,end:a}),i(e.innerText,{start:a,end:a})},Ge=function(e,n){var i=N(),r=A(i,e.innerText);n(e.innerText,i),C("",e);var o=r.length;p({start:o,end:o})};function Ke(l,e){e===void 0&&(e={});var n=e.insertAt;if(!(!l||typeof document=="undefined")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=l:r.appendChild(document.createTextNode(l))}}var qe=`@charset "UTF-8";
@import url("https://fonts.googleapis.com/css2?family=Azeret+Mono:ital,wght@0,400;0,500;1,500&display=swap");
.editor {
  display: flex;
  min-width: 100%;
  min-height: 100%;
  width: max-content;
  height: max-content;
  box-sizing: border-box;
  font-family: "Azeret Mono", monospace;
  font-size: 0.8rem;
  line-height: 1.25rem;
}
.editor--light {
  --color-fg: #383a42;
  --color-fg-weak: #383a42aa;
  --color-bg: #fafafa;
}
.editor--dark {
  --color-fg: #abb2bf;
  --color-fg-weak: #abb2bfaa;
  --color-bg: #282c34;
}
.editor *, .editor *::after, .editor *::before {
  box-sizing: inherit;
}
.editor__lines-numbers {
  flex: 0 0 max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  background-color: var(--color-bg);
  border-right: 1px solid var(--color-fg);
  color: var(--color-fg-weak);
  font-weight: 400;
}
.editor--dynamic .editor__line-numbers {
  justify-content: space-around;
  line-height: 0;
}
.editor__main {
  position: relative;
  flex: 0 0 max-content;
  background-color: var(--color-bg);
  scrollbar-width: none;
  font-weight: 500;
  white-space: pre;
  tab-size: 4;
  color: var(--color-fg);
}
.editor--dymanic .editor__main {
  line-height: 1.75;
}
.editor__textarea, .editor__previewer {
  padding: 0.5rem;
  outline: none;
}
.editor__textarea {
  position: relative;
  z-index: 10;
  caret-color: var(--color-fg);
  color: #00000005;
}
.editor__textarea::after {
  content: "\u200B";
}
.editor__textarea::-webkit-scrollbar {
  height: 0;
}
.editor__previewer {
  position: absolute;
  top: 0;
}
.editor--light .editor__previewer .comment,
.editor--light .editor__previewer .quote {
  color: #a0a1a7;
}
.editor--light .editor__previewer .doctag,
.editor--light .editor__previewer .keyword,
.editor--light .editor__previewer .formula {
  color: #a626a4;
}
.editor--light .editor__previewer .section,
.editor--light .editor__previewer .name,
.editor--light .editor__previewer .selector-tag,
.editor--light .editor__previewer .deletion,
.editor--light .editor__previewer .subst {
  color: #e45649;
}
.editor--light .editor__previewer .literal {
  color: #0184bb;
}
.editor--light .editor__previewer .string,
.editor--light .editor__previewer .regexp,
.editor--light .editor__previewer .addition,
.editor--light .editor__previewer .attribute,
.editor--light .editor__previewer .meta .string {
  color: #50a14f;
}
.editor--light .editor__previewer .attr,
.editor--light .editor__previewer .variable,
.editor--light .editor__previewer .template-variable,
.editor--light .editor__previewer .type,
.editor--light .editor__previewer .selector-class,
.editor--light .editor__previewer .selector-attr,
.editor--light .editor__previewer .selector-pseudo,
.editor--light .editor__previewer .number {
  color: #986801;
}
.editor--light .editor__previewer .symbol,
.editor--light .editor__previewer .bullet,
.editor--light .editor__previewer .link,
.editor--light .editor__previewer .meta,
.editor--light .editor__previewer .selector-id,
.editor--light .editor__previewer .title {
  color: #4078f2;
}
.editor--light .editor__previewer .built_in,
.editor--light .editor__previewer .title.class_,
.editor--light .editor__previewer .class .title {
  color: #c18401;
}
.editor--dark .editor__previewer .comment,
.editor--dark .editor__previewer .quote {
  color: #5c6370;
}
.editor--dark .editor__previewer .doctag,
.editor--dark .editor__previewer .keyword,
.editor--dark .editor__previewer .formula {
  color: #c678dd;
}
.editor--dark .editor__previewer .section,
.editor--dark .editor__previewer .name,
.editor--dark .editor__previewer .selector-tag,
.editor--dark .editor__previewer .deletion,
.editor--dark .editor__previewer .subst {
  color: #e06c75;
}
.editor--dark .editor__previewer .literal {
  color: #56b6c2;
}
.editor--dark .editor__previewer .string,
.editor--dark .editor__previewer .regexp,
.editor--dark .editor__previewer .addition,
.editor--dark .editor__previewer .attribute,
.editor--dark .editor__previewer .meta .string {
  color: #98c379;
}
.editor--dark .editor__previewer .attr,
.editor--dark .editor__previewer .variable,
.editor--dark .editor__previewer .template-variable,
.editor--dark .editor__previewer .type,
.editor--dark .editor__previewer .selector-class,
.editor--dark .editor__previewer .selector-attr,
.editor--dark .editor__previewer .selector-pseudo,
.editor--dark .editor__previewer .number {
  color: #d19a66;
}
.editor--dark .editor__previewer .symbol,
.editor--dark .editor__previewer .bullet,
.editor--dark .editor__previewer .link,
.editor--dark .editor__previewer .meta,
.editor--dark .editor__previewer .selector-id,
.editor--dark .editor__previewer .title {
  color: #61aeee;
}
.editor--dark .editor__previewer .built_in,
.editor--dark .editor__previewer .title.class_,
.editor--dark .editor__previewer .class .title {
  color: #e6c07b;
}`;Ke(qe);var Ue=function(e,n,i){e.preventDefault();var r=N(),o=A(r,n.innerText),a=e.clipboardData.getData("text/plain");i(n.innerText,r),C(a,n);var d=o.length+a.length;p({start:d,end:d}),i(n.innerText,{start:d,end:d})},We=function(e){var n=e.language,i=e.value,r=e.onChange,o=e.theme,a=o===void 0?"light":o,d=e.height,u=d===void 0?"auto":d,S=e.spellCheck,w=S===void 0?!1:S,P=e.handleHistory,V=P===void 0?!0:P,_=e.handleSpecialCharacters,q=_===void 0?!0:_,y=e.highlight,F=y===void 0?!0:y,R=e.lineNumbers,U=R===void 0?!0:R,W=e.className,B=g.exports.useReducer($e,ze),f=B[0],I=B[1],$=g.exports.useRef(null),te=g.exports.useRef(null),re=g.exports.useState(0),ve=re[0],Ne=re[1],ne=g.exports.useState(""),D=ne[0],X=ne[1],ie=H.listLanguages().includes(n),we=function(s){Ne(s.split("").reduce(function(h,Z){return/\n/g.test(Z)?h+1:h},0)+1)};g.exports.useEffect(function(){ie||console.error('\u{1F4A5} The language that you added is not supported by default\nYou can add it by importing the language, then regestering it with the command `hljs.registerLanguage("javascript", javascript).')},[]),g.exports.useEffect(function(){we(D)},[D]),g.exports.useEffect(function(){var m=te.current;if(F&&ie){var s=H.highlight(n,D,{prefix:""});console.log(s),m.innerHTML=de(s)}else m.innerText=D;r(D)},[D,F]),g.exports.useEffect(function(){var m=$.current;if(f.present.text!==m.innerText){var s=document.createTextNode(f.present.text);m.innerHTML="",m.appendChild(s),p(f.present.position,s),X(m.innerText)}},[f.present]),g.exports.useEffect(function(){i!==D&&k(i,{start:i.length,end:i.length})},[i]);var k=function(s,h){I({type:0,payload:{text:s,position:h}})},_e=function(s){var h=$.current,Z=h.innerText,Y=N(),J=s.code==="KeyZ"&&s.ctrlKey,ee=s.code==="KeyY"&&s.ctrlKey;(J||ee||s.key==="Enter"||s.key==="Tab"||s.code==="Space"||s.key===".")&&s.preventDefault(),Y.start!==Y.end&&![].concat(x,G,[L]).includes(s.key)&&!J&&!ee&&s.key!=="Meta"&&s.key!=="Control"&&s.key!=="Alt"&&!s.code.startsWith("Arrow")&&(s.key==="Backspace"&&(s.preventDefault(),Ge(h,k)),k(h.innerText,N())),V&&(J&&(h.innerText!==f.present.text&&k(h.innerText,Y),setTimeout(function(){return I({type:1})})),ee&&(h.innerText!==f.present.text?k(h.innerText,Y):I({type:2}))),s.key==="Enter"&&Oe(h,k),s.key==="Tab"&&Pe(h,s),He.includes(s.key)&&q&&Fe(h,s,k),s.key==="Backspace"&&(q&&Be(h,s),h.innerHTML||s.preventDefault()),s.code==="Space"&&ue(h," ",k),s.key==="."&&ue(h,".",k);var T=h.innerText;if(Z!==T&&X(T),T.endsWith(`
`)){var z=N();s.code==="ArrowDown"&&z.start===z.end&&z.start<=T.lastIndexOf(`
`)&&z.start>T.slice(0,-1).lastIndexOf(`
`)&&(s.preventDefault(),p({start:T.length,end:T.length})),s.code==="ArrowRight"&&z.start===T.lastIndexOf(`
`)&&(s.preventDefault(),p({start:T.length,end:T.length}))}};return j.createElement("div",{style:{height:u,width:"100%",overflowY:u==="auto"?"hidden":"scroll",overflowX:"scroll"},className:W},j.createElement("div",{className:"editor editor--"+a+" "+(u==="auto"?"editor--dynamic":"")},U&&j.createElement("div",{className:"editor__lines-numbers"},Array.from({length:ve}).map(function(m,s){return j.createElement("span",{key:s},s+1)})),j.createElement("div",{className:"editor__main"},j.createElement("div",{className:"editor__textarea",ref:$,contentEditable:!0,spellCheck:w,onInput:function(){var s=$.current;X(s.innerText)},onKeyDown:_e,onPaste:function(s){var h=$.current;Ue(s,h,k),X(h.innerText)}}),j.createElement("div",{className:"editor__previewer",ref:te}))))};const Xe={},Ye="wrapper";function ge(n){var i=n,{components:l}=i,e=se(i,["components"]);return t(Ye,E(b(b({},Xe),e),{components:l,mdxType:"MDXLayout"}),t("h2",null,"Features"),t("ul",null,t("li",{parentName:"ul"},"\u{1F4E6} Small bundle-size",t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Only 3.84 kB (Minified + Gzipped)."))),t("li",{parentName:"ul"},"\u{1F308} Code highlighting",t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Atom-light and Atom-dark themes."),t("li",{parentName:"ul"},t("a",{parentName:"li",href:"https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md"},"140 supported languages")," that you can configure with ",t("a",{parentName:"li",href:"https://highlightjs.org/"},"highlight.js"),"."))),t("li",{parentName:"ul"},"\u{1F481}\u200D\u2642\uFE0F Handling special characters (`",t("inlineCode",{parentName:"li"},"\\"),",",t("inlineCode",{parentName:"li"},"'"),",",t("inlineCode",{parentName:"li"},'"'),",",t("inlineCode",{parentName:"li"},"["),",",t("inlineCode",{parentName:"li"},"{"),", and ",t("inlineCode",{parentName:"li"},"("),")",t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Adding the closing counterpart automatically."),t("li",{parentName:"ul"},"Wrapping selected text with them."))),t("li",{parentName:"ul"},"\u23F3 History"),t("li",{parentName:"ul"},"\u{1F431}\u200D\u{1F4BB} Appearance customizations",t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Light and dark themes."),t("li",{parentName:"ul"},"Line numbers.")))),t("h2",null,"Getting Started"),t("h3",null,"Installation"),t("pre",null,t("code",{parentName:"pre",className:"language-bash"},`npm install react-throwcode highlight.js lowlight hast-util-to-html
`)),t("h3",null,"Simple Usage"),t("p",null,"The component imported from the package is a controlled component, and you can use it without configurations."),t("pre",null,t("code",{parentName:"pre",className:"language-js"},`import { useState } from 'react';
import CodeEditor from 'react-throwcode';

import { lowlight } from 'lowlight/lib/core';
import javascript from 'highlight.js/lib/languages/typescript';

lowlight.registerLanguage(javascript, 'javascript');

function App() {
  const [code, setCode] = useState('');

  return (
    <div className="app">
      <CodeEditor
        language="javascript"
        value={code}
        onChange={text => setCode(text)}
      />
    </div>
  );
}

export default App;
`)),t("h2",null,"Props"),t("p",null,"The data type of the options"),t("pre",null,t("code",{parentName:"pre",className:"language-ts"},`interface CodeEditorProps {
  language: string;
  value: string;
  onChange: (content: string) => void;

  theme?: 'light' | 'dark';
  height?: number | 'auto' | string;
  spellCheck?: boolean;
  handleHistory?: boolean;
  handleSpecialCharacters?: boolean;
  highlight?: boolean;
  lineNumbers?: boolean;
  className?: string;
}
`)),t("p",null,"The default props"),t("pre",null,t("code",{parentName:"pre",className:"language-js"},`const defaultProps = {
  theme: 'light',
  height: 'auto',
  spellCheck: false,
  handleHistory: true,
  handleSpecialCharacters: true,
  highlight: true,
  lineNumbers: true,
};
`)),t("ul",null,t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"value"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Represents the code that is displayed."),t("li",{parentName:"ul"},"If you want to update the code you just have to rewrite with ",t("inlineCode",{parentName:"li"},"setValue"),"."))),t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"onChange"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Takes a callback that receives ",t("inlineCode",{parentName:"li"},"content")," arg which is a string."),t("li",{parentName:"ul"},"Is called whenever the content of the editor is changed whether it's changed by undoing/redoing or by the user typing."))),t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"theme"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},t("a",{parentName:"li",href:"https://highlightjs.org/"},"highlight.js")," is used as a peer dependency for highlighting."),t("li",{parentName:"ul"},"I just included two themes in the library becuase I wanted it to be easier to use and the reason mentioned in ",t("a",{parentName:"li",href:"#caveats"},"Caveats section"),"."))),t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"language"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"I decided to use ",t("a",{parentName:"li",href:"https://www.npmjs.com/package/lowlight"},"lowlight"),", which is built on ",t("a",{parentName:"li",href:"https://highlightjs.org/"},"highlight.js"),"."),t("li",{parentName:"ul"},"The reason for that is giving you the flexibility to use ",t("a",{parentName:"li",href:"https://highlightjs.org/"},"highlight.js")," in other parts of your app."),t("li",{parentName:"ul"},"If you want to use any language follow these steps.")))),t("pre",null,t("code",{parentName:"pre",className:"language-js"},`// Note: You should import it from /lib/core
import { lowlight } from 'lowlight/lib/core';

// Import the language that you want from /lib/languages/$language-name
import typescript from 'highlight.js/lib/languages/typescript';

// Register the language
lowlight.registerLanguage('typescript', typescript);

// Add the language with the name that you registered it with
<CodeEditor
  language="typescript"
  value={code}
  onChange={text => setCode(text)}
/>;
`)),t("ul",null,t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"height"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"You can either make it implicit by passing ",t("inlineCode",{parentName:"li"},"auto")," or explicit by passing a number or a string (a number with a unit)."))),t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"spellCheck"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Enables spell check."))),t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"handleHistory"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Enables undoing and redoing."))),t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"handleSpecialCharacters"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Closes quotes (`",t("inlineCode",{parentName:"li"},"\\"),",",t("inlineCode",{parentName:"li"},"'"),",",t("inlineCode",{parentName:"li"},'"'),") and brackets (",t("inlineCode",{parentName:"li"},"["),",",t("inlineCode",{parentName:"li"},"{"),",",t("inlineCode",{parentName:"li"},"("),") automatically."),t("li",{parentName:"ul"},"Wraps selected text with them."))),t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"highlight"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Enables code highlighting."))),t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"lineNumbers"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Enables line numbers."))),t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"className"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Applies styles to the wrapper of the editor.")))),t("h2",null,"Caveats"),t("p",null,"Due to the way this library is implemented, the style of the fonts can't be changed, so I had to modify highlight.js themes I used to just change the color."),t("h2",null,"Contribution"),t("p",null,"If you want to contribute you can clone the repo and run these commands"),t("pre",null,t("code",{parentName:"pre",className:"language-bash"},`# Compile the library whenever any file is changed
npm run start
cd ./example
# Start the development server of the demo version
npm run dev
`)),t("h2",null,"LICENSE"),t("p",null,t("a",{parentName:"p",href:"LICENSE"},"MIT License")," 2021 ",t("a",{parentName:"p",href:"https://github.com/yosefbeder"},"Yosef Beder")))}ge.isMDXComponent=!0;H.registerLanguage("bash",Ce);H.registerLanguage("javascript",ke);H.registerLanguage("typescript",Te);H.registerLanguage("xml",Ee);const me=l=>l.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"");function fe({children:l}){const e=me(l),[n,i]=g.exports.useState(!1);return v("h2",{id:e,className:"flex gap-2 items-center transform -translate-x-8",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[c("a",{href:`#${e}`,className:`${n?"":"opacity-0"}`,children:c(he,{className:"w-6 h-6"})}),l]})}function Qe({children:l}){const e=me(l),[n,i]=g.exports.useState(!1);return v("h3",{id:e,className:"flex gap-1 items-center transform -translate-x-6",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[c("a",{href:`#${e}`,className:`${n?"":"opacity-0"}`,children:c(he,{className:"w-5 h-5"})}),l]})}function M({isChecked:l,onToggle:e,children:n}){return v("div",{className:"flex items-center justify-between sm:justify-start sm:gap-2 ",children:[c("p",{className:"select-none",children:n}),c("div",{onClick:e,className:`flex ${l?"justify-end":"justify-start"} items-center ${l?"bg-blue-500 hover:bg-blue-600":"bg-gray-300 hover:bg-gray-400"} rounded-full w-10 h-5 px-0.5 cursor-pointer`,children:c("div",{className:"rounded-full w-4 h-4 bg-white"})})]})}function Ve(){const[l,e]=g.exports.useState(`import { useEffect, useState } from 'react';
import classes from '../../styles/articles-page.module.scss';
import { ArticleType } from '../../types';
import { GetStaticProps, NextPage } from 'next';
import ArticlesList from '../../components/ArticlesList';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { routeTransitions } from '../_app';
import getAllArticles from '../../utils/get-all-articles';

interface ArticlesProps {
	articles: ArticleType[];
}

export const getStaticProps: GetStaticProps<ArticlesProps> = async () => {
	return {
		props: {
			articles: await getAllArticles(),
		},
	};
};

const Articles: NextPage<ArticlesProps> = ({ articles }) => {
	const { query, isReady } = useRouter();
	const [filteredArticles, setFilteredArticles] = useState<ArticleType[]>();

	useEffect(() => {
		// filtering
		const tags = query.tags;

		let result = articles;

		if (tags) {
			const tagsArr = (tags as string).split(',');

			tagsArr.forEach(tag => {
				result = result.filter(article => article.tags.includes(tag));
			});
		}

		setFilteredArticles(result);
	}, [query]);

	if (!isReady || !filteredArticles)
		return (
			<main className={classes.container}>
				<Head>
					<title>Articles</title>
				</Head>
			</main>
		);

	return (
		<motion.main
			variants={routeTransitions}
			initial="hidden"
			animate="enter"
			exit="exit"
			className={classes.container}
		>
			<Head>
				<title>Articles</title>
			</Head>
			<ArticlesList articles={filteredArticles} />
		</motion.main>
	);
};

export default Articles;`),[n,i]=g.exports.useState({language:"typescript",theme:"light",value:l,onChange:r=>e(r),height:300,lineNumbers:!0,highlight:!0,spellCheck:!1,handleSpecialCharacters:!0,handleHistory:!0});return g.exports.useEffect(()=>{document.querySelectorAll("pre code").forEach(r=>{const o=r.className.split("-")[1],a=r.innerText;r.innerHTML=de(H.highlight(o,a)),r.classList.add("hljs")})},[]),v(Se,{children:[c(Le,{href:"https://github.com/yosefbeder/react-code-editor",fixed:!0,zIndex:10,target:"_blank"}),v("div",{className:"max-w-screen-sm mx-auto py-4 px-2",children:[v("section",{children:[v("h1",{className:"flex",children:[c(ce,{className:"w-11 h-11 text-blue-500 mr-4"}),"React-",c("span",{className:"text-blue-500",children:"ThrowCode"})]}),c("p",{className:"w-96",children:"A mini code-editor for small apps with the most essential features for a code editor!"})]}),v("section",{children:[c(fe,{children:"Example"}),c(We,E(b({},n),{className:"editor rounded-md shadow-md border"})),v("div",{className:"grid sm:grid-cols-2 p-2 rounded-md shadow-md border bg-white",children:[c(M,{isChecked:n.height!=="auto",onToggle:()=>i(r=>E(b({},r),{height:r.height==="auto"?300:"auto"})),children:"Explicit height (300px)"}),c(M,{isChecked:n.theme==="dark",onToggle:()=>i(r=>E(b({},r),{theme:r.theme==="light"?"dark":"light"})),children:"Dark mode"}),c(M,{isChecked:n.lineNumbers,onToggle:()=>i(r=>E(b({},r),{lineNumbers:!r.lineNumbers})),children:"Line numbers"}),c(M,{isChecked:n.highlight,onToggle:()=>i(r=>E(b({},r),{highlight:!r.highlight})),children:"Highlight"}),c(M,{isChecked:n.spellCheck,onToggle:()=>i(r=>E(b({},r),{spellCheck:!r.spellCheck})),children:"Spell check"}),c(M,{isChecked:n.handleHistory,onToggle:()=>i(r=>E(b({},r),{handleHistory:!r.handleHistory})),children:"History handling"}),c(M,{isChecked:n.handleSpecialCharacters,onToggle:()=>i(r=>E(b({},r),{handleSpecialCharacters:!r.handleSpecialCharacters})),children:"Special characters handling"})]}),v("div",{className:"flex gap-4 ",children:[v("a",{className:"button",href:"#getting-started",children:[c(Ae,{className:"w-5 h-5"}),"Documentation"]}),v("a",{className:"button",href:"https://github.com/yosefbeder/react-code-editor",target:"_blank",children:[c(ce,{className:"w-5 h-5"}),"Source code"]})]})]}),c(je,{components:{h2:fe,h3:Qe},children:c(ge,{})})]})]})}Ie.render(c(j.StrictMode,{children:c(Ve,{})}),document.getElementById("root"));
