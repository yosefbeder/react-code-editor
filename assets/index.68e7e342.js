var ye=Object.defineProperty,xe=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var de=(l,e,n)=>e in l?ye(l,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[e]=n,x=(l,e)=>{for(var n in e||(e={}))oe.call(e,n)&&de(l,n,e[n]);if(Q)for(var n of Q(e))se.call(e,n)&&de(l,n,e[n]);return l},E=(l,e)=>xe(l,Ce(e));var ce=(l,e)=>{var n={};for(var a in l)oe.call(l,a)&&e.indexOf(a)<0&&(n[a]=l[a]);if(l!=null&&Q)for(var a of Q(l))e.indexOf(a)<0&&se.call(l,a)&&(n[a]=l[a]);return n};import{r as g,l as M,t as he,R as I,c as t,b as ke,j as Te,a as Ee,x as Se,d as N,F as Le,e as h,g as je,C as pe,D as Ie,M as Ae,L as ue,f as De}from"./vendor.ad2631ff.js";const Me=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};Me();var C=["{","[","("],R=["}","]",")"],L="`",U=['"',"'"],Oe=[].concat(C,R,U,[L]),w=function(){var e=window.getSelection(),n=0,a=0;if(e){var r=[e.anchorOffset,e.focusOffset];if(n=r[0],a=r[1],n>a){var s=[a,n];n=s[0],a=s[1]}}return{start:n,end:a}},p=function(e,n){var a=e.start,r=e.end,s=window.getSelection();if(s){if(n)s.setBaseAndExtent(n,a,n,r);else if(s.anchorNode){var i;s.anchorNode.nodeType===Node.TEXT_NODE?i=s.anchorNode:i=s.anchorNode.childNodes[0],s.setBaseAndExtent(i,a,i,r)}}},j=function(e,n){var a=e.start;return n.slice(0,a)},W=function(e,n){var a=e.end;return n.slice(a)},ge=function(e,n){var a=e.start,r,s=!n.slice(0,a).includes(`
`);if(s)n.slice(a).includes(`
`)?r=n.slice(0,n.indexOf(`
`)):r=n;else{var i=n.slice(0,a).lastIndexOf(`
`),d=n.indexOf(`
`,a);d!==-1?r=n.slice(i+1,d):r=n.slice(i+1)}return r},He=function(e){for(var n=0,a=0;a<e.length&&/\t/.test(e[a]);a++)n++;return"	".repeat(n)},Re=function(e){var n=w(),a=j(n,e),r;return r=He(ge(n,e)),(C.slice(0,2).includes(a[a.length-1])||a[a.length-1]===L)&&(r=r+"	"),r},k=function(e,n){var a=w(),r=j(a,n.innerText),s=W(a,n.innerText),i=document.createTextNode(""+r+e+s);n.innerHTML="",n.appendChild(i)},Be=function(e,n){var a=w(),r=j(a,e.innerText),s=W(a,e.innerText),i=Re(e.innerText),d;if(i){var u=C.includes(r[r.length-1])&&s[0]===R[C.indexOf(r[r.length-1])],S=r[r.length-1]===L&&s[0]===L;d=`
`+i+(u||S?`
`+i.slice(0,-1):"")}else d=`
`;k(d,e);var _=r.length+1+i.length;p({start:_,end:_}),n(e.innerText,{start:_,end:_}),e.scrollLeft=0},Fe=function(e,n){var a=w(),r=j(a,e.innerText),s=W(a,e.innerText);if(n.shiftKey){if(r[r.length-1]==="	"){var i=document.createTextNode(""+r.slice(0,r.length-1)+s);e.innerHTML="",e.appendChild(i);var d=r.length-1;p({start:d,end:d})}}else{k("	",e);var u=r.length+1;p({start:u,end:u})}},$e=function(e,n,a){var r=window.getSelection(),s=w(),i=n.key,d=j(s,e.innerText),u=W(s,e.innerText);if(r.type==="Caret"){var S=ge(s,e.innerText);if(C.includes(i)){n.preventDefault(),k(""+i+R[C.indexOf(i)],e);var _=d.length+1;p({start:_,end:_}),a(e.innerText,{start:_,end:_})}if(R.includes(i)&&u[0]===i){n.preventDefault();var B=d.length+1;p({start:B,end:B})}if(U.includes(i)){n.preventDefault();var V=S.split("").reduce(function(f,A){return A===i?f+1:f},0)%2==0,b=d.length+1;V?u[0]!==i?(k(i.repeat(2),e),p({start:b,end:b}),a(e.innerText,{start:b,end:b})):p({start:b,end:b}):(k(i,e),p({start:b,end:b}))}if(i===L){n.preventDefault();var G=e.innerText.split("").reduce(function(f,A){return A===L?f+1:f},0)%2==0,y=d.length+1;G?d[0]!==i?(k(i.repeat(2),e),p({start:y,end:y}),a(e.innerText,{start:y,end:y})):p({start:y,end:y}):(k(i,e),e.innerHTML=""+d+i+u,p({start:y,end:y}))}}if(r.type==="Range"){var F=e.innerText.slice(d.length,e.innerText.length-u.length),H,X=C.includes(i),Y=[].concat(U,[L]).includes(i);if(X&&(H=R[C.indexOf(i)]),Y&&(H=i),X||Y){n.preventDefault(),k(""+i+F+H,e);var $={start:d.length+1,end:d.length+F.length+1};p($),a(e.innerText,$)}}},ze=function(e,n){var a=w(),r=j(a,e.innerText),s=W(a,e.innerText),i=C.includes(r[r.length-1])&&s[0]===R[C.indexOf(r[r.length-1])],d=[].concat(U,[L]).includes(r[r.length-1])&&s[0]===r[r.length-1];if(i||d){n.preventDefault();var u=document.createTextNode(""+r.slice(0,-1)+s.slice(1));e.innerHTML="",e.appendChild(u);var S=r.length-1;p({start:S,end:S})}},Ke=function(e,n){return n.type===0?{past:[].concat(e.past,[e.present]),present:n.payload,future:[]}:n.type===1&&e.past.length?{past:e.past.slice(0,-1),present:e.past[e.past.length-1],future:[e.present].concat(e.future)}:n.type===2&&e.future.length?{past:[].concat(e.past,[e.present]),present:e.future[0],future:e.future.slice(1)}:e},Pe={past:[],present:{text:"",position:{start:0,end:0}},future:[]},re=function(e,n,a){var r=w(),s=j(r,e.innerHTML);k(n,e);var i=s.length+1;p({start:i,end:i}),a(e.innerText,{start:i,end:i})},Ue=function(e,n){var a=w(),r=j(a,e.innerText);n(e.innerText,a),k("",e);var s=r.length;p({start:s,end:s})};function We(l,e){e===void 0&&(e={});var n=e.insertAt;if(!(!l||typeof document=="undefined")){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=l:r.appendChild(document.createTextNode(l))}}var Ge=`@charset "UTF-8";
@import url("https://fonts.googleapis.com/css2?family=Azeret+Mono:ital,wght@0,400;0,500;1,500&display=swap");
.editor {
  display: flex;
  width: 100%;
  height: 100%;
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
  min-height: 100%;
  height: max-content;
  color: var(--color-fg-weak);
  font-weight: 400;
}
.editor--dynamic .editor__line-numbers {
  justify-content: space-around;
  line-height: 0;
}
.editor__main {
  position: relative;
  flex: 1;
  font-weight: 500;
  tab-size: 4;
}
.editor--dymanic .editor__main {
  line-height: 1.75;
}
.editor__textarea, .editor__previewer {
  padding: 0.5rem;
  outline: none;
  min-width: 100%;
  min-height: 100%;
  width: max-content;
  height: max-content;
}
.editor__textarea::after, .editor__previewer::after {
  content: "\u200B";
}
.editor__textarea::-webkit-scrollbar, .editor__previewer::-webkit-scrollbar {
  height: 0;
}
.editor__textarea {
  position: relative;
  z-index: 10;
  caret-color: var(--color-fg);
  color: #00000005;
}
.editor__previewer {
  position: absolute;
  top: 0;
  color: var(--color-fg);
  background-color: var(--color-bg);
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
}`;We(Ge);var Xe=function(e,n,a){e.preventDefault();var r=w(),s=j(r,n.innerText),i=e.clipboardData.getData("text/plain");a(n.innerText,r),k(i,n);var d=s.length+i.length;p({start:d,end:d}),a(n.innerText,{start:d,end:d})},Ye=function(e){var n=e.language,a=e.value,r=e.onChange,s=e.theme,i=s===void 0?"light":s,d=e.height,u=d===void 0?"auto":d,S=e.spellCheck,_=S===void 0?!1:S,B=e.handleHistory,V=B===void 0?!0:B,b=e.handleSpecialCharacters,G=b===void 0?!0:b,y=e.highlight,F=y===void 0?!0:y,H=e.lineNumbers,X=H===void 0?!0:H,Y=e.className,$=g.exports.useReducer(Ke,Pe),f=$[0],A=$[1],z=g.exports.useRef(null),ne=g.exports.useRef(null),ae=g.exports.useState(0),Ne=ae[0],we=ae[1],ie=g.exports.useState(""),D=ie[0],q=ie[1],le=M.listLanguages().includes(n),_e=function(o){we(o.split("").reduce(function(c,Z){return/\n/g.test(Z)?c+1:c},0)+1)};g.exports.useEffect(function(){le||console.error('\u{1F4A5} The language that you added is not supported by default\nYou can add it by importing the language, then regestering it with the command `hljs.registerLanguage("javascript", javascript).')},[]),g.exports.useEffect(function(){_e(D)},[D]),g.exports.useEffect(function(){var m=ne.current;if(F&&le){var o=M.highlight(n,D,{prefix:""});m.innerHTML=he(o)}else m.innerText=D;r(D)},[D,F]),g.exports.useEffect(function(){var m=z.current;if(f.present.text!==m.innerText){var o=document.createTextNode(f.present.text);m.innerHTML="",m.appendChild(o),p(f.present.position,o),q(m.innerText)}},[f.present]),g.exports.useEffect(function(){a!==D&&v(a,{start:a.length,end:a.length})},[a]);var v=function(o,c){A({type:0,payload:{text:o,position:c}})},be=function(o){var c=z.current,Z=c.innerText,K=w(),J=o.nativeEvent.code==="KeyZ"&&o.ctrlKey,ee=o.nativeEvent.code==="KeyY"&&o.ctrlKey,te=o.nativeEvent.code==="KeyA"&&o.ctrlKey;(J||ee||te||o.key==="Enter"||o.key==="Tab"||o.nativeEvent.code==="Space"||o.key===".")&&o.preventDefault(),K.start!==K.end&&![].concat(C,U,[L]).includes(o.key)&&!J&&!ee&&!te&&o.key!=="Meta"&&o.key!=="Control"&&o.key!=="Alt"&&o.key!=="Tab"&&o.nativeEvent.code!=="Space"&&o.key!=="Enter"&&!o.nativeEvent.code.startsWith("Arrow")&&(o.preventDefault(),o.key==="Backspace"?(Ue(c,v),v(c.innerText,w())):(v(c.innerText,K),re(c,o.key,v))),V&&(J&&(c.innerText!==f.present.text&&v(c.innerText,K),setTimeout(function(){return A({type:1})})),ee&&(c.innerText!==f.present.text?v(c.innerText,K):A({type:2}))),te&&p({start:0,end:c.innerText.length}),o.key==="Enter"&&Be(c,v),o.key==="Tab"&&Fe(c,o),Oe.includes(o.key)&&G&&$e(c,o,v),o.key==="Backspace"&&(G&&ze(c,o),c.innerHTML||o.preventDefault()),o.nativeEvent.code==="Space"&&re(c," ",v),o.key==="."&&re(c,".",v);var T=c.innerText;if(Z!==T&&q(T),T.endsWith(`
`)){var P=w();o.nativeEvent.code==="ArrowDown"&&P.start===P.end&&P.start<=T.lastIndexOf(`
`)&&P.start>T.slice(0,-1).lastIndexOf(`
`)&&(o.preventDefault(),p({start:T.length,end:T.length})),o.nativeEvent.code==="ArrowRight"&&P.start===T.lastIndexOf(`
`)&&(o.preventDefault(),p({start:T.length,end:T.length}))}};return I.createElement("div",{style:{height:u,width:"100%",overflowY:u==="auto"?"hidden":"scroll",overflowX:"scroll"},className:Y},I.createElement("div",{className:"editor editor--"+i+" "+(u==="auto"?"editor--dynamic":"")},X&&I.createElement("div",{className:"editor__lines-numbers"},Array.from({length:Ne}).map(function(m,o){return I.createElement("span",{key:o},o+1)})),I.createElement("div",{className:"editor__main"},I.createElement("div",{className:"editor__textarea",style:{whiteSpace:"pre"},ref:z,contentEditable:!0,spellCheck:_,onInput:function(){var o=z.current;q(o.innerText)},onKeyDown:be,onPaste:function(o){var c=z.current;Xe(o,c,v),q(c.innerText)}}),I.createElement("div",{className:"editor__previewer",ref:ne,style:{whiteSpace:"pre"}}))))};const qe={},Qe="wrapper";function me(n){var a=n,{components:l}=a,e=ce(a,["components"]);return t(Qe,E(x(x({},qe),e),{components:l,mdxType:"MDXLayout"}),t("h2",null,"Features"),t("ul",null,t("li",{parentName:"ul"},"\u{1F4E6} Small bundle-size",t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Only 3.84 kB (Minified + Gzipped)."))),t("li",{parentName:"ul"},"\u{1F308} Code highlighting",t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Atom-light and Atom-dark themes."),t("li",{parentName:"ul"},t("a",{parentName:"li",href:"https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md"},"140 supported languages")," that you can configure with ",t("a",{parentName:"li",href:"https://highlightjs.org/"},"highlight.js"),"."))),t("li",{parentName:"ul"},"\u{1F481}\u200D\u2642\uFE0F Handling special characters (`",t("inlineCode",{parentName:"li"},"\\"),",",t("inlineCode",{parentName:"li"},"'"),",",t("inlineCode",{parentName:"li"},'"'),",",t("inlineCode",{parentName:"li"},"["),",",t("inlineCode",{parentName:"li"},"{"),", and ",t("inlineCode",{parentName:"li"},"("),")",t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Adding the closing counterpart automatically."),t("li",{parentName:"ul"},"Wrapping selected text with them."))),t("li",{parentName:"ul"},"\u23F3 History"),t("li",{parentName:"ul"},"\u{1F431}\u200D\u{1F4BB} Appearance customizations",t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Light and dark themes."),t("li",{parentName:"ul"},"Line numbers.")))),t("h2",null,"Getting Started"),t("h3",null,"Installation"),t("pre",null,t("code",{parentName:"pre",className:"language-bash"},`npm install react-throwcode highlight.js lowlight hast-util-to-html
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
`)),t("h2",null,"LICENSE"),t("p",null,t("a",{parentName:"p",href:"LICENSE"},"MIT License")," 2021 ",t("a",{parentName:"p",href:"https://github.com/yosefbeder"},"Yosef Beder")))}me.isMDXComponent=!0;M.registerLanguage("bash",ke);M.registerLanguage("javascript",Te);M.registerLanguage("typescript",Ee);M.registerLanguage("xml",Se);const fe=l=>l.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"");function ve({children:l}){const e=fe(l),[n,a]=g.exports.useState(!1);return N("h2",{id:e,className:"flex gap-2 items-center transform -translate-x-8",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[h("a",{href:`#${e}`,className:`${n?"":"opacity-0"}`,children:h(ue,{className:"w-6 h-6"})}),l]})}function Ve({children:l}){const e=fe(l),[n,a]=g.exports.useState(!1);return N("h3",{id:e,className:"flex gap-1 items-center transform -translate-x-6",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[h("a",{href:`#${e}`,className:`${n?"":"opacity-0"}`,children:h(ue,{className:"w-5 h-5"})}),l]})}function O({isChecked:l,onToggle:e,children:n}){return N("div",{className:"flex items-center justify-between sm:justify-start sm:gap-2 ",children:[h("p",{className:"select-none",children:n}),h("div",{onClick:e,className:`flex ${l?"justify-end":"justify-start"} items-center ${l?"bg-blue-500 hover:bg-blue-600":"bg-gray-300 hover:bg-gray-400"} rounded-full w-10 h-5 px-0.5 cursor-pointer`,children:h("div",{className:"rounded-full w-4 h-4 bg-white"})})]})}function Ze(){const[l,e]=g.exports.useState(`import { useState } from 'react';
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

export default App;`),[n,a]=g.exports.useState({language:"typescript",theme:"light",value:l,onChange:r=>e(r),height:300,lineNumbers:!0,highlight:!0,spellCheck:!1,handleSpecialCharacters:!0,handleHistory:!0});return g.exports.useEffect(()=>{document.querySelectorAll("pre code").forEach(r=>{const s=r.className.split("-")[1],i=r.innerText;r.innerHTML=he(M.highlight(s,i)),r.classList.add("hljs")})},[]),N(Le,{children:[h(je,{href:"https://github.com/yosefbeder/react-code-editor",fixed:!0,zIndex:10,target:"_blank"}),N("div",{className:"max-w-screen-sm mx-auto py-4 px-2",children:[N("section",{children:[N("h1",{className:"flex",children:[h(pe,{className:"w-11 h-11 text-blue-500 mr-4"}),"React-",h("span",{className:"text-blue-500",children:"ThrowCode"})]}),h("p",{className:"w-96",children:"A mini code-editor for small apps with the most essential features for a code editor!"})]}),N("section",{children:[h(ve,{children:"Example"}),h(Ye,E(x({},n),{className:"editor rounded-md shadow-md border"})),N("div",{className:"grid sm:grid-cols-2 p-2 rounded-md shadow-md border bg-white",children:[h(O,{isChecked:n.height!=="auto",onToggle:()=>a(r=>E(x({},r),{height:r.height==="auto"?300:"auto"})),children:"Explicit height (300px)"}),h(O,{isChecked:n.theme==="dark",onToggle:()=>a(r=>E(x({},r),{theme:r.theme==="light"?"dark":"light"})),children:"Dark mode"}),h(O,{isChecked:n.lineNumbers,onToggle:()=>a(r=>E(x({},r),{lineNumbers:!r.lineNumbers})),children:"Line numbers"}),h(O,{isChecked:n.highlight,onToggle:()=>a(r=>E(x({},r),{highlight:!r.highlight})),children:"Highlight"}),h(O,{isChecked:n.spellCheck,onToggle:()=>a(r=>E(x({},r),{spellCheck:!r.spellCheck})),children:"Spell check"}),h(O,{isChecked:n.handleHistory,onToggle:()=>a(r=>E(x({},r),{handleHistory:!r.handleHistory})),children:"History handling"}),h(O,{isChecked:n.handleSpecialCharacters,onToggle:()=>a(r=>E(x({},r),{handleSpecialCharacters:!r.handleSpecialCharacters})),children:"Special characters handling"})]}),N("div",{className:"flex gap-4 ",children:[N("a",{className:"button",href:"#getting-started",children:[h(Ie,{className:"w-5 h-5"}),"Documentation"]}),N("a",{className:"button",href:"https://github.com/yosefbeder/react-code-editor",target:"_blank",children:[h(pe,{className:"w-5 h-5"}),"Source code"]})]})]}),h(Ae,{components:{h2:ve,h3:Ve},children:h(me,{})})]})]})}De.render(h(I.StrictMode,{children:h(Ze,{})}),document.getElementById("root"));
