(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{201:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,i=Object.prototype.toString,a=Object.defineProperty,s=Object.getOwnPropertyDescriptor,o=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===i.call(e)},l=function(e){if(!e||"[object Object]"!==i.call(e))return!1;var t,n=r.call(e,"constructor"),a=e.constructor&&e.constructor.prototype&&r.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!n&&!a)return!1;for(t in e);return void 0===t||r.call(e,t)},c=function(e,t){a&&"__proto__"===t.name?a(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},u=function(e,t){if("__proto__"===t){if(!r.call(e,t))return;if(s)return s(e,t).value}return e[t]};e.exports=function e(){var t,n,r,i,a,s,g=arguments[0],d=1,h=arguments.length,f=!1;for("boolean"==typeof g&&(f=g,g=arguments[1]||{},d=2),(null==g||"object"!=typeof g&&"function"!=typeof g)&&(g={});d<h;++d)if(null!=(t=arguments[d]))for(n in t)r=u(g,n),g!==(i=u(t,n))&&(f&&i&&(l(i)||(a=o(i)))?(a?(a=!1,s=r&&o(r)?r:[]):s=r&&l(r)?r:{},c(g,{name:n,newValue:e(f,s,i)})):void 0!==i&&c(g,{name:n,newValue:i}));return g}},302:function(e,t){function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){var r=e[t];"object"!=typeof r||Object.isFrozen(r)||n(r)})),e}var r=n,i=n;r.default=i;class a{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function s(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function o(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t];return t.forEach((function(e){for(const t in e)n[t]=e[t]})),n}const l=e=>!!e.kind;class c{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=s(e)}openNode(e){if(!l(e))return;let t=e.kind;e.sublanguage||(t=`${this.classPrefix}${t}`),this.span(t)}closeNode(e){l(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class u{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(t=>this._walk(e,t)),e.closeNode(t)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{u._collapse(e)}))}}class g extends u{constructor(e){super(),this.options=e}addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){return new c(this,this.options).value()}finalize(){return!0}}function d(e){return e?"string"==typeof e?e:e.source:null}const h=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;const f="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",p={begin:"\\\\[\\s\\S]",relevance:0},b={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[p]},m={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[p]},E={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},x=function(e,t,n={}){const r=o({className:"comment",begin:e,end:t,contains:[]},n);return r.contains.push(E),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),r},w=x("//","$"),y=x("/\\*","\\*/"),v=x("#","$"),N={className:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},_={className:"number",begin:f,relevance:0},R={className:"number",begin:"\\b(0b[01]+)",relevance:0},k={className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},O={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[p,{begin:/\[/,end:/\]/,relevance:0,contains:[p]}]}]},A={className:"title",begin:"[a-zA-Z]\\w*",relevance:0},M={className:"title",begin:"[a-zA-Z_]\\w*",relevance:0},I={begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0};var j=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:f,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map(e=>d(e)).join("")}(t,/.*\b/,e.binary,/\b.*/)),o({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:p,APOS_STRING_MODE:b,QUOTE_STRING_MODE:m,PHRASAL_WORDS_MODE:E,COMMENT:x,C_LINE_COMMENT_MODE:w,C_BLOCK_COMMENT_MODE:y,HASH_COMMENT_MODE:v,NUMBER_MODE:N,C_NUMBER_MODE:_,BINARY_NUMBER_MODE:R,CSS_NUMBER_MODE:k,REGEXP_MODE:O,TITLE_MODE:A,UNDERSCORE_TITLE_MODE:M,METHOD_GUARD:I,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})}});function L(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function S(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=L,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function B(e,t){Array.isArray(e.illegal)&&(e.illegal=function(...e){return"("+e.map(e=>d(e)).join("|")+")"}(...e.illegal))}function T(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function P(e,t){void 0===e.relevance&&(e.relevance=1)}const C=["of","and","for","in","not","or","if","then","parent","list","value"];function D(e,t){return t?Number(t):function(e){return C.includes(e.toLowerCase())}(e)?0:1}function H(e,{plugins:t}){function n(t,n){return new RegExp(d(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=n(function(e,t="|"){let n=0;return e.map(e=>{n+=1;const t=n;let r=d(e),i="";for(;r.length>0;){const e=h.exec(r);if(!e){i+=r;break}i+=r.substring(0,e.index),r=r.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?i+="\\"+String(Number(e[1])+t):(i+=e[0],"("===e[0]&&n++)}return i}).map(e=>`(${e})`).join(t)}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const t=this.matcherRe.exec(e);if(!t)return null;const n=t.findIndex((e,t)=>t>0&&void 0!==e),r=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,r)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const t=new r;return this.rules.slice(e).forEach(([e,n])=>t.addRule(e,n)),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=o(e.classNameAliases||{}),function t(r,a){const s=r;if(r.isCompiled)return s;[T].forEach(e=>e(r,a)),e.compilerExtensions.forEach(e=>e(r,a)),r.__beforeBegin=null,[S,B,P].forEach(e=>e(r,a)),r.isCompiled=!0;let l=null;if("object"==typeof r.keywords&&(l=r.keywords.$pattern,delete r.keywords.$pattern),r.keywords&&(r.keywords=function e(t,n,r="keyword"){const i={};return"string"==typeof t?a(r,t.split(" ")):Array.isArray(t)?a(r,t):Object.keys(t).forEach((function(r){Object.assign(i,e(t[r],n,r))})),i;function a(e,t){n&&(t=t.map(e=>e.toLowerCase())),t.forEach((function(t){const n=t.split("|");i[n[0]]=[e,D(n[0],n[1])]}))}}(r.keywords,e.case_insensitive)),r.lexemes&&l)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l=l||r.lexemes||/\w+/,s.keywordPatternRe=n(l,!0),a&&(r.begin||(r.begin=/\B|\b/),s.beginRe=n(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(s.endRe=n(r.end)),s.terminatorEnd=d(r.end)||"",r.endsWithParent&&a.terminatorEnd&&(s.terminatorEnd+=(r.end?"|":"")+a.terminatorEnd)),r.illegal&&(s.illegalRe=n(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((function(e){return function(e){e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(t){return o(e,{variants:null},t)})));if(e.cachedVariants)return e.cachedVariants;if(function e(t){return!!t&&(t.endsWithParent||e(t.starts))}(e))return o(e,{starts:e.starts?o(e.starts):null});if(Object.isFrozen(e))return o(e);return e}("self"===e?r:e)}))),r.contains.forEach((function(e){t(e,s)})),r.starts&&t(r.starts,a),s.matcher=function(e){const t=new i;return e.contains.forEach(e=>t.addRule(e.begin,{rule:e,type:"begin"})),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t}(s),s}(e)}function U(e){const t={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,s(this.code);let t={};return this.autoDetect?(t=e.highlightAuto(this.code),this.detectedLanguage=t.language):(t=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),t.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:t,VuePlugin:{install(e){e.component("highlightjs",t)}}}}const $={"after:highlightElement":({el:e,result:t,text:n})=>{const r=V(e);if(!r.length)return;const i=document.createElement("div");i.innerHTML=t.value,t.value=function(e,t,n){let r=0,i="";const a=[];function o(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function l(e){i+="<"+z(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+s(e.value)+'"'})).join("")+">"}function c(e){i+="</"+z(e)+">"}function u(e){("start"===e.event?l:c)(e.node)}for(;e.length||t.length;){let t=o();if(i+=s(n.substring(r,t[0].offset)),r=t[0].offset,t===e){a.reverse().forEach(c);do{u(t.splice(0,1)[0]),t=o()}while(t===e&&t.length&&t[0].offset===r);a.reverse().forEach(l)}else"start"===t[0].event?a.push(t[0].node):a.pop(),u(t.splice(0,1)[0])}return i+s(n.substr(r))}(r,V(i),n)}};function z(e){return e.nodeName.toLowerCase()}function V(e){const t=[];return function e(n,r){for(let i=n.firstChild;i;i=i.nextSibling)3===i.nodeType?r+=i.nodeValue.length:1===i.nodeType&&(t.push({event:"start",offset:r,node:i}),r=e(i,r),z(i).match(/br|hr|img|input/)||t.push({event:"stop",offset:r,node:i}));return r}(e,0),t}const K=e=>{console.error(e)},G=(e,...t)=>{console.log("WARN: "+e,...t)},F=(e,t)=>{console.log(`Deprecated as of ${e}. ${t}`)},W=s,X=o,q=Symbol("nomatch");var Z=function(e){const t=Object.create(null),n=Object.create(null),i=[];let s=!0;const o=/(^(<[^>]+>|\t|)+|\n)/gm,l="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let u={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:g};function d(e){return u.noHighlightRe.test(e)}function h(e,t,n,r){let i="",a="";"object"==typeof t?(i=e,n=t.ignoreIllegals,a=t.language,r=void 0):(F("10.7.0","highlight(lang, code, ...args) has been deprecated."),F("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),a=e,i=t);const s={code:i,language:a};k("before:highlight",s);const o=s.result?s.result:f(s.language,s.code,n,r);return o.code=s.code,k("after:highlight",o),o}function f(e,n,r,o){function c(e,t){const n=w.case_insensitive?t[0].toLowerCase():t[0];return Object.prototype.hasOwnProperty.call(e.keywords,n)&&e.keywords[n]}function g(){null!=_.subLanguage?function(){if(""===O)return;let e=null;if("string"==typeof _.subLanguage){if(!t[_.subLanguage])return void k.addText(O);e=f(_.subLanguage,O,!0,R[_.subLanguage]),R[_.subLanguage]=e.top}else e=p(O,_.subLanguage.length?_.subLanguage:null);_.relevance>0&&(A+=e.relevance),k.addSublanguage(e.emitter,e.language)}():function(){if(!_.keywords)return void k.addText(O);let e=0;_.keywordPatternRe.lastIndex=0;let t=_.keywordPatternRe.exec(O),n="";for(;t;){n+=O.substring(e,t.index);const r=c(_,t);if(r){const[e,i]=r;if(k.addText(n),n="",A+=i,e.startsWith("_"))n+=t[0];else{const n=w.classNameAliases[e]||e;k.addKeyword(t[0],n)}}else n+=t[0];e=_.keywordPatternRe.lastIndex,t=_.keywordPatternRe.exec(O)}n+=O.substr(e),k.addText(n)}(),O=""}function d(e){return e.className&&k.openNode(w.classNameAliases[e.className]||e.className),_=Object.create(e,{parent:{value:_}}),_}function h(e){return 0===_.matcher.regexIndex?(O+=e[0],1):(j=!0,0)}function b(e){const t=e[0],n=e.rule,r=new a(n),i=[n.__beforeBegin,n["on:begin"]];for(const n of i)if(n&&(n(e,r),r.isMatchIgnored))return h(t);return n&&n.endSameAsBegin&&(n.endRe=new RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),n.skip?O+=t:(n.excludeBegin&&(O+=t),g(),n.returnBegin||n.excludeBegin||(O=t)),d(n),n.returnBegin?0:t.length}function m(e){const t=e[0],r=n.substr(e.index),i=function e(t,n,r){let i=function(e,t){const n=e&&e.exec(t);return n&&0===n.index}(t.endRe,r);if(i){if(t["on:end"]){const e=new a(t);t["on:end"](n,e),e.isMatchIgnored&&(i=!1)}if(i){for(;t.endsParent&&t.parent;)t=t.parent;return t}}if(t.endsWithParent)return e(t.parent,n,r)}(_,e,r);if(!i)return q;const s=_;s.skip?O+=t:(s.returnEnd||s.excludeEnd||(O+=t),g(),s.excludeEnd&&(O=t));do{_.className&&k.closeNode(),_.skip||_.subLanguage||(A+=_.relevance),_=_.parent}while(_!==i.parent);return i.starts&&(i.endSameAsBegin&&(i.starts.endRe=i.endRe),d(i.starts)),s.returnEnd?0:t.length}let E={};function x(t,i){const a=i&&i[0];if(O+=t,null==a)return g(),0;if("begin"===E.type&&"end"===i.type&&E.index===i.index&&""===a){if(O+=n.slice(i.index,i.index+1),!s){const t=new Error("0 width match regex");throw t.languageName=e,t.badRule=E.rule,t}return 1}if(E=i,"begin"===i.type)return b(i);if("illegal"===i.type&&!r){const e=new Error('Illegal lexeme "'+a+'" for mode "'+(_.className||"<unnamed>")+'"');throw e.mode=_,e}if("end"===i.type){const e=m(i);if(e!==q)return e}if("illegal"===i.type&&""===a)return 1;if(I>1e5&&I>3*i.index){throw new Error("potential infinite loop, way more iterations than matches")}return O+=a,a.length}const w=N(e);if(!w)throw K(l.replace("{}",e)),new Error('Unknown language: "'+e+'"');const y=H(w,{plugins:i});let v="",_=o||y;const R={},k=new u.__emitter(u);!function(){const e=[];for(let t=_;t!==w;t=t.parent)t.className&&e.unshift(t.className);e.forEach(e=>k.openNode(e))}();let O="",A=0,M=0,I=0,j=!1;try{for(_.matcher.considerAll();;){I++,j?j=!1:_.matcher.considerAll(),_.matcher.lastIndex=M;const e=_.matcher.exec(n);if(!e)break;const t=x(n.substring(M,e.index),e);M=e.index+t}return x(n.substr(M)),k.closeAllNodes(),k.finalize(),v=k.toHTML(),{relevance:Math.floor(A),value:v,language:e,illegal:!1,emitter:k,top:_}}catch(t){if(t.message&&t.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:t.message,context:n.slice(M-100,M+100),mode:t.mode},sofar:v,relevance:0,value:W(n),emitter:k};if(s)return{illegal:!1,relevance:0,value:W(n),emitter:k,language:e,top:_,errorRaised:t};throw t}}function p(e,n){n=n||u.languages||Object.keys(t);const r=function(e){const t={relevance:0,emitter:new u.__emitter(u),value:W(e),illegal:!1,top:c};return t.emitter.addText(e),t}(e),i=n.filter(N).filter(R).map(t=>f(t,e,!1));i.unshift(r);const a=i.sort((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(N(e.language).supersetOf===t.language)return 1;if(N(t.language).supersetOf===e.language)return-1}return 0}),[s,o]=a,l=s;return l.second_best=o,l}const b={"before:highlightElement":({el:e})=>{u.useBR&&(e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))},"after:highlightElement":({result:e})=>{u.useBR&&(e.value=e.value.replace(/\n/g,"<br>"))}},m=/^(<[^>]+>|\t)+/gm,E={"after:highlightElement":({result:e})=>{u.tabReplace&&(e.value=e.value.replace(m,e=>e.replace(/\t/g,u.tabReplace)))}};function x(e){let t=null;const r=function(e){let t=e.className+" ";t+=e.parentNode?e.parentNode.className:"";const n=u.languageDetectRe.exec(t);if(n){const t=N(n[1]);return t||(G(l.replace("{}",n[1])),G("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}return t.split(/\s+/).find(e=>d(e)||N(e))}(e);if(d(r))return;k("before:highlightElement",{el:e,language:r}),t=e;const i=t.textContent,a=r?h(i,{language:r,ignoreIllegals:!0}):p(i);k("after:highlightElement",{el:e,result:a,text:i}),e.innerHTML=a.value,function(e,t,r){const i=t?n[t]:r;e.classList.add("hljs"),i&&e.classList.add(i)}(e,r,a.language),e.result={language:a.language,re:a.relevance,relavance:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance,relavance:a.second_best.relevance})}const w=()=>{if(w.called)return;w.called=!0,F("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead.");document.querySelectorAll("pre code").forEach(x)};let y=!1;function v(){if("loading"===document.readyState)return void(y=!0);document.querySelectorAll("pre code").forEach(x)}function N(e){return e=(e||"").toLowerCase(),t[e]||t[n[e]]}function _(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach(e=>{n[e.toLowerCase()]=t})}function R(e){const t=N(e);return t&&!t.disableAutodetect}function k(e,t){const n=e;i.forEach((function(e){e[n]&&e[n](t)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){y&&v()}),!1),Object.assign(e,{highlight:h,highlightAuto:p,highlightAll:v,fixMarkup:function(e){return F("10.2.0","fixMarkup will be removed entirely in v11.0"),F("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),t=e,u.tabReplace||u.useBR?t.replace(o,e=>"\n"===e?u.useBR?"<br>":e:u.tabReplace?e.replace(/\t/g,u.tabReplace):e):t;var t},highlightElement:x,highlightBlock:function(e){return F("10.7.0","highlightBlock will be removed entirely in v12.0"),F("10.7.0","Please use highlightElement now."),x(e)},configure:function(e){e.useBR&&(F("10.3.0","'useBR' will be removed entirely in v11.0"),F("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),u=X(u,e)},initHighlighting:w,initHighlightingOnLoad:function(){F("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),y=!0},registerLanguage:function(n,r){let i=null;try{i=r(e)}catch(e){if(K("Language definition for '{}' could not be registered.".replace("{}",n)),!s)throw e;K(e),i=c}i.name||(i.name=n),t[n]=i,i.rawDefinition=r.bind(null,e),i.aliases&&_(i.aliases,{languageName:n})},unregisterLanguage:function(e){delete t[e];for(const t of Object.keys(n))n[t]===e&&delete n[t]},listLanguages:function(){return Object.keys(t)},getLanguage:N,registerAliases:_,requireLanguage:function(e){F("10.4.0","requireLanguage will be removed entirely in v11."),F("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const t=N(e);if(t)return t;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:R,inherit:X,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{e["before:highlightBlock"](Object.assign({block:t.el},t))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{e["after:highlightBlock"](Object.assign({block:t.el},t))})}(e),i.push(e)},vuePlugin:U(e).VuePlugin}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="10.7.1";for(const e in j)"object"==typeof j[e]&&r(j[e]);return Object.assign(e,j),e.addPlugin(b),e.addPlugin($),e.addPlugin(E),e}({});e.exports=Z},303:function(e,t,n){"use strict";var r=n(304),i=a(Error);function a(e){return t.displayName=e.displayName||e.name,t;function t(t){return t&&(t=r.apply(null,arguments)),new e(t)}}e.exports=i,i.eval=a(EvalError),i.range=a(RangeError),i.reference=a(ReferenceError),i.syntax=a(SyntaxError),i.type=a(TypeError),i.uri=a(URIError),i.create=a},304:function(e,t,n){!function(){var t;function n(e){for(var t,n,r,i,a=1,s=[].slice.call(arguments),o=0,l=e.length,c="",u=!1,g=!1,d=function(){return s[a++]},h=function(){for(var n="";/\d/.test(e[o]);)n+=e[o++],t=e[o];return n.length>0?parseInt(n):null};o<l;++o)if(t=e[o],u)switch(u=!1,"."==t?(g=!1,t=e[++o]):"0"==t&&"."==e[o+1]?(g=!0,t=e[o+=2]):g=!0,i=h(),t){case"b":c+=parseInt(d(),10).toString(2);break;case"c":c+="string"==typeof(n=d())||n instanceof String?n:String.fromCharCode(parseInt(n,10));break;case"d":c+=parseInt(d(),10);break;case"f":r=String(parseFloat(d()).toFixed(i||6)),c+=g?r:r.replace(/^0/,"");break;case"j":c+=JSON.stringify(d());break;case"o":c+="0"+parseInt(d(),10).toString(8);break;case"s":c+=d();break;case"x":c+="0x"+parseInt(d(),10).toString(16);break;case"X":c+="0x"+parseInt(d(),10).toString(16).toUpperCase();break;default:c+=t}else"%"===t?u=!0:c+=t;return c}(t=e.exports=n).format=n,t.vsprintf=function(e,t){return n.apply(null,[e].concat(t))},"undefined"!=typeof console&&"function"==typeof console.log&&(t.printf=function(){console.log(n.apply(null,arguments))})}()}}]);