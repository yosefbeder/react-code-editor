var Ce=Object.defineProperty,ke=Object.defineProperties;var Te=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var he=(l,e,r)=>e in l?Ce(l,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[e]=r,b=(l,e)=>{for(var r in e||(e={}))de.call(e,r)&&he(l,r,e[r]);if(Q)for(var r of Q(e))ce.call(e,r)&&he(l,r,e[r]);return l},C=(l,e)=>ke(l,Te(e));var re=(l,e)=>{var r={};for(var a in l)de.call(l,a)&&e.indexOf(a)<0&&(r[a]=l[a]);if(l!=null&&Q)for(var a of Q(l))e.indexOf(a)<0&&ce.call(l,a)&&(r[a]=l[a]);return r};import{r as g,l as P,t as pe,R as D,c as t,b as Ee,j as Se,a as Le,x as je,d as _,F as Ie,e as c,g as Ae,C as ue,D as Me,M as De,L as ge,f as He}from"./vendor.ad2631ff.js";const Oe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}};Oe();var k=["{","[","("],B=["}","]",")"],L="`",G=['"',"'"],Re=[].concat(k,B,G,[L]),w=function(){var e=window.getSelection(),r=0,a=0;if(e){var n=[e.anchorOffset,e.focusOffset];if(r=n[0],a=n[1],r>a){var o=[a,r];r=o[0],a=o[1]}}return{start:r,end:a}},p=function(e,r){var a=e.start,n=e.end,o=window.getSelection();if(o){if(r)o.setBaseAndExtent(r,a,r,n);else if(o.anchorNode){var i;o.anchorNode.nodeType===Node.TEXT_NODE?i=o.anchorNode:i=o.anchorNode.childNodes[0],o.setBaseAndExtent(i,a,i,n)}}},S=function(e,r){var a=e.start;return r.slice(0,a)},X=function(e,r){var a=e.end;return r.slice(a)},me=function(e,r){var a=e.start,n,o=!r.slice(0,a).includes(`
`);if(o)r.slice(a).includes(`
`)?n=r.slice(0,r.indexOf(`
`)):n=r;else{var i=r.slice(0,a).lastIndexOf(`
`),d=r.indexOf(`
`,a);d!==-1?n=r.slice(i+1,d):n=r.slice(i+1)}return n},Fe=function(e){for(var r=0,a=0;a<e.length&&/\t/.test(e[a]);a++)r++;return"	".repeat(r)},Pe=function(e){var r=w(),a=S(r,e),n;return n=Fe(me(r,e)),(k.slice(0,2).includes(a[a.length-1])||a[a.length-1]===L)&&(n=n+"	"),n},T=function(e,r){var a=w(),n=S(a,r.innerText),o=X(a,r.innerText),i=document.createTextNode(""+n+e+o);r.innerHTML="",r.appendChild(i)},$e=function(e,r,a,n){var o=w(),i=S(o,e.innerText),d=X(o,e.innerText),u=Pe(e.innerText),x;if(u){var j=k.includes(i[i.length-1])&&d[0]===B[k.indexOf(i[i.length-1])],H=i[i.length-1]===L&&d[0]===L;x=`
`+u+(j||H?`
`+u.slice(0,-1):"")}else x=`
`;T(x,e);var I=i.length+1+u.length;if(p({start:I,end:I}),n(e.innerText,{start:I,end:I}),r.scrollLeft=0,!a){var m=parseInt(getComputedStyle(e).getPropertyValue("line-height")),O=S(w(),e.innerText).split("").reduce(function(A,M){return/\n/g.test(M)?A+1:A},0)+1,f=parseInt(getComputedStyle(e).getPropertyValue("padding-top"));O*m>r.scrollTop+r.clientHeight&&(r.scrollTop=O*m+f-r.clientHeight)}},Be=function(e,r){var a=w(),n=S(a,e.innerText),o=X(a,e.innerText);if(r.shiftKey){if(n[n.length-1]==="	"){var i=document.createTextNode(""+n.slice(0,n.length-1)+o);e.innerHTML="",e.appendChild(i);var d=n.length-1;p({start:d,end:d})}}else{T("	",e);var u=n.length+1;p({start:u,end:u})}},ze=function(e,r,a){var n=window.getSelection(),o=w(),i=r.key,d=S(o,e.innerText),u=X(o,e.innerText);if(n.type==="Caret"){var x=me(o,e.innerText);if(k.includes(i)){r.preventDefault(),T(""+i+B[k.indexOf(i)],e);var j=d.length+1;p({start:j,end:j}),a(e.innerText,{start:j,end:j})}if(B.includes(i)&&u[0]===i){r.preventDefault();var H=d.length+1;p({start:H,end:H})}if(G.includes(i)){r.preventDefault();var I=x.split("").reduce(function(N,R){return R===i?N+1:N},0)%2==0,m=d.length+1;I?u[0]!==i?(T(i.repeat(2),e),p({start:m,end:m}),a(e.innerText,{start:m,end:m})):p({start:m,end:m}):(T(i,e),p({start:m,end:m}))}if(i===L){r.preventDefault();var O=e.innerText.split("").reduce(function(N,R){return R===L?N+1:N},0)%2==0,f=d.length+1;O?d[0]!==i?(T(i.repeat(2),e),p({start:f,end:f}),a(e.innerText,{start:f,end:f})):p({start:f,end:f}):(T(i,e),e.innerHTML=""+d+i+u,p({start:f,end:f}))}}if(n.type==="Range"){var A=e.innerText.slice(d.length,e.innerText.length-u.length),M,Y=k.includes(i),q=[].concat(G,[L]).includes(i);if(Y&&(M=B[k.indexOf(i)]),q&&(M=i),Y||q){r.preventDefault(),T(""+i+A+M,e);var z={start:d.length+1,end:d.length+A.length+1};p(z),a(e.innerText,z)}}},Ke=function(e,r){var a=w(),n=S(a,e.innerText),o=X(a,e.innerText),i=k.includes(n[n.length-1])&&o[0]===B[k.indexOf(n[n.length-1])],d=[].concat(G,[L]).includes(n[n.length-1])&&o[0]===n[n.length-1];if(i||d){r.preventDefault();var u=document.createTextNode(""+n.slice(0,-1)+o.slice(1));e.innerHTML="",e.appendChild(u);var x=n.length-1;p({start:x,end:x})}},Ue=function(e,r){return r.type===0?{past:[].concat(e.past,[e.present]),present:r.payload,future:[]}:r.type===1&&e.past.length?{past:e.past.slice(0,-1),present:e.past[e.past.length-1],future:[e.present].concat(e.future)}:r.type===2&&e.future.length?{past:[].concat(e.past,[e.present]),present:e.future[0],future:e.future.slice(1)}:e},We={past:[],present:{text:"",position:{start:0,end:0}},future:[]},ne=function(e,r,a){var n=w(),o=S(n,e.innerHTML);T(r,e);var i=o.length+1;p({start:i,end:i}),a(e.innerText,{start:i,end:i})},Ge=function(e,r){var a=w(),n=S(a,e.innerText);r(e.innerText,a),T("",e);var o=n.length;p({start:o,end:o})};function Xe(l,e){e===void 0&&(e={});var r=e.insertAt;if(!(!l||typeof document=="undefined")){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",r==="top"&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=l:n.appendChild(document.createTextNode(l))}}var Ye=`@charset "UTF-8";
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
}`;Xe(Ye);var qe=function(e,r,a){e.preventDefault();var n=w(),o=S(n,r.innerText),i=e.clipboardData.getData("text/plain");a(r.innerText,n),T(i,r);var d=o.length+i.length;p({start:d,end:d}),a(r.innerText,{start:d,end:d})},Ve=function(e){var r=e.language,a=e.value,n=e.onChange,o=e.theme,i=o===void 0?"light":o,d=e.height,u=d===void 0?"auto":d,x=e.spellCheck,j=x===void 0?!1:x,H=e.handleHistory,I=H===void 0?!0:H,m=e.handleSpecialCharacters,O=m===void 0?!0:m,f=e.highlight,A=f===void 0?!0:f,M=e.lineNumbers,Y=M===void 0?!0:M,q=e.className,z=g.exports.useReducer(Ue,We),N=z[0],R=z[1],ae=g.exports.useRef(null),K=g.exports.useRef(null),ie=g.exports.useRef(null),le=g.exports.useState(0),Ne=le[0],ye=le[1],oe=g.exports.useState(""),F=oe[0],V=oe[1],se=P.listLanguages().includes(r),be=function(s){ye(s.split("").reduce(function(h,Z){return/\n/g.test(Z)?h+1:h},0)+1)};g.exports.useEffect(function(){se||console.error('\u{1F4A5} The language that you added is not supported by default\nYou can add it by importing the language, then regestering it with the command `hljs.registerLanguage("javascript", javascript).')},[]),g.exports.useEffect(function(){be(F)},[F]),g.exports.useEffect(function(){var v=ie.current;if(A&&se){var s=P.highlight(r,F,{prefix:""});v.innerHTML=pe(s)}else v.innerText=F;n(F)},[F,A]),g.exports.useEffect(function(){var v=K.current;if(N.present.text!==v.innerText){var s=document.createTextNode(N.present.text);v.innerHTML="",v.appendChild(s),p(N.present.position,s),V(v.innerText)}},[N.present]),g.exports.useEffect(function(){a!==F&&y(a,{start:a.length,end:a.length})},[a]);var y=function(s,h){R({type:0,payload:{text:s,position:h}})},_e=function(s){var h=K.current,Z=ae.current,xe=h.innerText,U=w(),J=s.nativeEvent.code==="KeyZ"&&s.ctrlKey,ee=s.nativeEvent.code==="KeyY"&&s.ctrlKey,te=s.nativeEvent.code==="KeyA"&&s.ctrlKey;(J||ee||te||s.key==="Enter"||s.key==="Tab"||s.nativeEvent.code==="Space"||s.key===".")&&s.preventDefault(),U.start!==U.end&&![].concat(k,G,[L]).includes(s.key)&&!J&&!ee&&!te&&s.key!=="Meta"&&s.key!=="Control"&&s.key!=="Alt"&&s.key!=="Tab"&&s.nativeEvent.code!=="Space"&&s.key!=="Enter"&&!s.nativeEvent.code.startsWith("Arrow")&&(s.preventDefault(),s.key==="Backspace"?(Ge(h,y),y(h.innerText,w())):(y(h.innerText,U),ne(h,s.key,y))),I&&(J&&(h.innerText!==N.present.text&&y(h.innerText,U),setTimeout(function(){return R({type:1})})),ee&&(h.innerText!==N.present.text?y(h.innerText,U):R({type:2}))),te&&p({start:0,end:h.innerText.length}),s.key==="Enter"&&$e(h,Z,u==="auto",y),s.key==="Tab"&&Be(h,s),Re.includes(s.key)&&O&&ze(h,s,y),s.key==="Backspace"&&(O&&Ke(h,s),h.innerHTML||s.preventDefault()),s.nativeEvent.code==="Space"&&ne(h," ",y),s.key==="."&&ne(h,".",y);var E=h.innerText;if(xe!==E&&V(E),E.endsWith(`
`)){var W=w();s.nativeEvent.code==="ArrowDown"&&W.start===W.end&&W.start<=E.lastIndexOf(`
`)&&W.start>E.slice(0,-1).lastIndexOf(`
`)&&(s.preventDefault(),p({start:E.length,end:E.length})),s.nativeEvent.code==="ArrowRight"&&W.start===E.lastIndexOf(`
`)&&(s.preventDefault(),p({start:E.length,end:E.length}))}};return D.createElement("div",{style:{height:u,width:"100%",overflowY:u==="auto"?"hidden":"scroll",overflowX:"scroll"},className:q,ref:ae},D.createElement("div",{className:"editor editor--"+i+" "+(u==="auto"?"editor--dynamic":"")},Y&&D.createElement("div",{className:"editor__lines-numbers"},Array.from({length:Ne}).map(function(v,s){return D.createElement("span",{key:s},s+1)})),D.createElement("div",{className:"editor__main"},D.createElement("div",{className:"editor__textarea",style:{whiteSpace:"pre"},ref:K,contentEditable:!0,spellCheck:j,onInput:function(){var s=K.current;V(s.innerText)},onKeyDown:_e,onPaste:function(s){var h=K.current;qe(s,h,y),V(h.innerText)}}),D.createElement("div",{className:"editor__previewer",ref:ie,style:{whiteSpace:"pre"}}))))};const Qe={},Ze="wrapper";function fe(r){var a=r,{components:l}=a,e=re(a,["components"]);return t(Ze,C(b(b({},Qe),e),{components:l,mdxType:"MDXLayout"}),t("h2",null,"Features"),t("ul",null,t("li",{parentName:"ul"},"\u{1F4E6} Small bundle-size",t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Only 3.84 kB (Minified + Gzipped)."))),t("li",{parentName:"ul"},"\u{1F308} Code highlighting",t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Atom-light and Atom-dark themes."),t("li",{parentName:"ul"},t("a",{parentName:"li",href:"https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md"},"140 supported languages")," that can be configured via ",t("a",{parentName:"li",href:"https://www.npmjs.com/package/lowlight"},"lowlight"),"."))),t("li",{parentName:"ul"},"\u{1F481}\u200D\u2642\uFE0F Handling special characters (",t("code",null,"`"),",",t("inlineCode",{parentName:"li"},"'"),",",t("inlineCode",{parentName:"li"},'"'),",",t("inlineCode",{parentName:"li"},"["),",",t("inlineCode",{parentName:"li"},"{"),", and ",t("inlineCode",{parentName:"li"},"("),")",t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Adding the closing counterpart automatically."),t("li",{parentName:"ul"},"Wrapping selected text with them."))),t("li",{parentName:"ul"},"\u23F3 History"),t("li",{parentName:"ul"},"\u{1F3A8} Appearance customizations",t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Light and dark themes."),t("li",{parentName:"ul"},"Line numbers."))),t("li",{parentName:"ul"},"\u{1F4C3} Auto-scrolling",t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Scrolls automatically to the position of the caret if it's out of the viewport.")))),t("h2",null,"Getting Started"),t("h3",null,"Installation"),t("pre",null,t("code",{parentName:"pre",className:"language-bash"},`npm install react-throwcode highlight.js lowlight hast-util-to-html
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
`)),t("ul",null,t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"value"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Represents the code that is displayed."),t("li",{parentName:"ul"},"If you want to update the code you just have to rewrite with ",t("inlineCode",{parentName:"li"},"setValue"),"."))),t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"onChange"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Takes a callback that receives ",t("inlineCode",{parentName:"li"},"content")," arg which is a string."),t("li",{parentName:"ul"},"Is called whenever the content of the editor is changed whether it's changed by undoing/redoing or by the user typing."))),t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"theme"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},t("a",{parentName:"li",href:"https://highlightjs.org/"},"highlight.js")," is used as a peer dependency for highlighting."),t("li",{parentName:"ul"},"I just included two themes in the library becuase I wanted it to be easier to use and the reason mentioned in ",t("a",{parentName:"li",href:"#caveats"},"caveats section"),"."))),t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"language"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"I decided to use ",t("a",{parentName:"li",href:"https://www.npmjs.com/package/lowlight"},"lowlight"),", which is built on ",t("a",{parentName:"li",href:"https://highlightjs.org/"},"highlight.js"),"."),t("li",{parentName:"ul"},"The reason for that is giving you the ability to ",t("a",{parentName:"li",href:"#using-lowlight-in-other-parts-of-your-application"},"use lowlight in other parts of your application"),"."),t("li",{parentName:"ul"},"If you want to use any language follow these steps.")))),t("pre",null,t("code",{parentName:"pre",className:"language-js"},`// Note: You should import it from /lib/core
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
`)),t("ul",null,t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"height"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"You can either make it implicit by passing ",t("inlineCode",{parentName:"li"},"auto")," or explicit by passing a number or a string (a number with a unit)."))),t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"spellCheck"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Enables spell check."))),t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"handleHistory"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Enables undoing and redoing."))),t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"handleSpecialCharacters"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Closes quotes (`",t("inlineCode",{parentName:"li"},"\\"),",",t("inlineCode",{parentName:"li"},"'"),",",t("inlineCode",{parentName:"li"},'"'),") and brackets (",t("inlineCode",{parentName:"li"},"["),",",t("inlineCode",{parentName:"li"},"{"),",",t("inlineCode",{parentName:"li"},"("),") automatically."),t("li",{parentName:"ul"},"Wraps selected text with them."))),t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"highlight"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Enables code highlighting."))),t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"lineNumbers"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Enables line numbers."))),t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"className"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Applies styles to the wrapper of the editor.")))),t("h2",null,"Using lowlight in other parts of your application"),t("p",null,t("a",{parentName:"p",href:"https://www.npmjs.com/package/lowlight"},"lowlight")," is a peer depedency for this library, so you should be able to use it in your app."),t("p",null,"Unfortunatelly, when ",t("a",{parentName:"p",href:"https://www.npmjs.com/package/lowlight"},"lowlight")," is installed in a project you can't use ",t("inlineCode",{parentName:"p"},"hljs.highlightAll")," function to highlight the other code blocks in your app."),t("p",null,"I faced this problem while creating the ",t("a",{parentName:"p",href:"https://yosefbeder.github.io/react-throwcode/"},"home page")," of the library, so I had to come up with a solution."),t("pre",null,t("code",{parentName:"pre",className:"language-js"},`// Register the language
import { lowlight } from 'lowlight/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';

lowlight.registerLanguage('typescript', typescript);

// Import a theme from highlight.js themes
import 'highlight.js/styles/atom-one-light.css';

// Highlight all code blocks
document.querySelectorAll('pre > code').forEach(codeblock => {
    const language = codeblock.className.split('-')[1];
    const content = codeblock.innerText;

    // toHtml is imported from hast-util-to-html which is also a peer depedency
    codeblock.innerHTML = toHtml(lowlight.highlight(language, content));
    codeblock.classList.add('hljs');
});
`)),t("h2",null,"Caveats"),t("p",null,"Due to the way this lib is implemented (a layer for highlighting and a layer for editing above it), You can only change the colors of the keywords, so I had to take to themes and modify them so that they don't change the style of the font."),t("h2",null,"Contribution"),t("p",null,"If you want to contribute run these commands"),t("pre",null,t("code",{parentName:"pre",className:"language-bash"},`# Clone the repo
git clone https://github.com/yosefbeder/react-throwcode.git
# Compile the library whenever any file is changed
npm run start
cd ./example
# Start the development server of the demo version
npm run dev
`)),t("h2",null,"LICENSE"),t("p",null,t("a",{parentName:"p",href:"LICENSE"},"MIT License")," 2021 ",t("a",{parentName:"p",href:"https://github.com/yosefbeder"},"Yosef Beder")))}fe.isMDXComponent=!0;P.registerLanguage("bash",Ee);P.registerLanguage("javascript",Se);P.registerLanguage("typescript",Le);P.registerLanguage("xml",je);const ve=l=>l.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"");function we({children:l}){const e=ve(l),[r,a]=g.exports.useState(!1);return _("h2",{id:e,className:"flex gap-2 items-center transform -translate-x-8",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[c("a",{href:`#${e}`,className:`${r?"":"opacity-0"}`,children:c(ge,{className:"w-6 h-6"})}),l]})}function Je({children:l}){const e=ve(l),[r,a]=g.exports.useState(!1);return _("h3",{id:e,className:"flex gap-1 items-center transform -translate-x-6",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[c("a",{href:`#${e}`,className:`${r?"":"opacity-0"}`,children:c(ge,{className:"w-5 h-5"})}),l]})}function et(a){var n=a,{children:l,href:e}=n,r=re(n,["children","href"]);const o=e.startsWith("#");return c("a",C(b({},r),{href:e,target:o?"_self":"_blank",children:l}))}function $({isChecked:l,onToggle:e,children:r}){return _("div",{className:"flex items-center justify-between sm:justify-start sm:gap-2 ",children:[c("p",{className:"select-none",children:r}),c("div",{onClick:e,className:`flex ${l?"justify-end":"justify-start"} items-center ${l?"bg-blue-500 hover:bg-blue-600":"bg-gray-300 hover:bg-gray-400"} rounded-full w-10 h-5 px-0.5 cursor-pointer`,children:c("div",{className:"rounded-full w-4 h-4 bg-white"})})]})}function tt(){const[l,e]=g.exports.useState(`import { useState } from 'react';
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

export default App;`),[r,a]=g.exports.useState({language:"javascript",theme:"light",value:l,onChange:n=>e(n),height:300,lineNumbers:!0,highlight:!0,spellCheck:!1,handleSpecialCharacters:!0,handleHistory:!0});return g.exports.useEffect(()=>{document.querySelectorAll("pre > code").forEach(n=>{const o=n.className.split("-")[1],i=n.innerText;n.innerHTML=pe(P.highlight(o,i)),n.classList.add("hljs")})},[]),_(Ie,{children:[c(Ae,{href:"https://github.com/yosefbeder/react-code-editor",fixed:!0,zIndex:10,target:"_blank"}),_("div",{className:"max-w-screen-sm mx-auto py-4 px-2",children:[_("section",{children:[_("h1",{className:"flex",children:[c(ue,{className:"w-11 h-11 text-blue-500 mr-4"}),"React-",c("span",{className:"text-blue-500",children:"ThrowCode"})]}),c("p",{className:"w-96",children:"A mini code-editor for small apps with the most essential features for a code editor!"})]}),_("section",{children:[c(we,{children:"Example"}),c(Ve,C(b({},r),{className:"editor rounded-md shadow-md border"})),_("div",{className:"grid sm:grid-cols-2 p-2 rounded-md shadow-md border bg-white",children:[c($,{isChecked:r.height!=="auto",onToggle:()=>a(n=>C(b({},n),{height:n.height==="auto"?300:"auto"})),children:"Explicit height (300px)"}),c($,{isChecked:r.theme==="dark",onToggle:()=>a(n=>C(b({},n),{theme:n.theme==="light"?"dark":"light"})),children:"Dark mode"}),c($,{isChecked:r.lineNumbers,onToggle:()=>a(n=>C(b({},n),{lineNumbers:!n.lineNumbers})),children:"Line numbers"}),c($,{isChecked:r.highlight,onToggle:()=>a(n=>C(b({},n),{highlight:!n.highlight})),children:"Highlight"}),c($,{isChecked:r.spellCheck,onToggle:()=>a(n=>C(b({},n),{spellCheck:!n.spellCheck})),children:"Spell check"}),c($,{isChecked:r.handleHistory,onToggle:()=>a(n=>C(b({},n),{handleHistory:!n.handleHistory})),children:"History handling"}),c($,{isChecked:r.handleSpecialCharacters,onToggle:()=>a(n=>C(b({},n),{handleSpecialCharacters:!n.handleSpecialCharacters})),children:"Special characters handling"})]}),_("div",{className:"flex gap-4 ",children:[_("a",{className:"button",href:"#getting-started",children:[c(Me,{className:"w-5 h-5"}),"Documentation"]}),_("a",{className:"button",href:"https://github.com/yosefbeder/react-code-editor",target:"_blank",children:[c(ue,{className:"w-5 h-5"}),"Source code"]})]})]}),c(De,{components:{h2:we,h3:Je,a:et},children:c(fe,{})})]})]})}He.render(c(D.StrictMode,{children:c(tt,{})}),document.getElementById("root"));
