(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4444:function(e,t,r){"use strict";r.d(t,{BH:function(){return _},L:function(){return l},LL:function(){return k},Pz:function(){return T},ZR:function(){return S},aH:function(){return I},b$:function(){return p},eu:function(){return g},hl:function(){return m},m9:function(){return M},ne:function(){return L},pd:function(){return x},q4:function(){return E},ru:function(){return h},tV:function(){return u},uI:function(){return d},vZ:function(){return function e(t,r){if(t===r)return!0;let n=Object.keys(t),i=Object.keys(r);for(let o of n){if(!i.includes(o))return!1;let s=t[o],a=r[o];if(R(s)&&R(a)){if(!e(s,a))return!1}else if(s!==a)return!1}for(let l of i)if(!n.includes(l))return!1;return!0}},w1:function(){return f},xO:function(){return P},xb:function(){return O},z$:function(){return c},zd:function(){return C}});var n=r(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let i=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):(64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},o=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){let s=e[r++],a=e[r++],l=e[r++],u=((7&i)<<18|(63&s)<<12|(63&a)<<6|63&l)-65536;t[n++]=String.fromCharCode(55296+(u>>10)),t[n++]=String.fromCharCode(56320+(1023&u))}else{let c=e[r++],d=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&c)<<6|63&d)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<e.length;i+=3){let o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,d=(3&o)<<4|a>>4,h=(15&a)<<2|u>>6,p=63&u;l||(p=64,s||(h=64)),n.push(r[c],r[d],r[h],r[p])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<e.length;){let o=r[e.charAt(i++)],s=i<e.length,a=s?r[e.charAt(i)]:0;++i;let l=i<e.length,u=l?r[e.charAt(i)]:64;++i;let c=i<e.length,d=c?r[e.charAt(i)]:64;if(++i,null==o||null==a||null==u||null==d)throw Error();let h=o<<2|a>>4;if(n.push(h),64!==u){let p=a<<4&240|u>>2;if(n.push(p),64!==d){let f=u<<6&192|d;n.push(f)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){let t=i(e);return s.encodeByteArray(t,!0)},l=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function c(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function d(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())}function h(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function p(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function f(){let e=c();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function m(){try{return"object"==typeof indexedDB}catch(e){return!1}}function g(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(o){t(o)}})}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let v=()=>(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,y=()=>{if(void 0===n||void 0===n.env)return;let e=n.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},b=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}let r=e&&u(e[1]);return r&&JSON.parse(r)},w=()=>{try{return v()||y()||b()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},E=e=>{var t,r;return null===(r=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},I=()=>{var e;return null===(e=w())||void 0===e?void 0:e.config},T=e=>{var t;return null===(t=w())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}class S extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],o=i?i.replace(A,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",s=`${this.serviceName}: ${o} (${n}).`,a=new S(n,s,r);return a}}let A=/\{\$([^}]+)}/g;function O(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function R(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function P(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function C(e){let t={},r=e.replace(/^\?/,"").split("&");return r.forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function x(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}function L(e,t){let r=new N(e,t);return r.subscribe.bind(r)}class N{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=D),void 0===n.error&&(n.error=D),void 0===n.complete&&(n.complete=D);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(r){"undefined"!=typeof console&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function M(e){return e&&e._delegate?e._delegate:e}},3785:function(e,t,r){"use strict";r.d(t,{E:function(){return s},J:function(){return n}});class n{getStringForLocale(e,t){let r=this.strings[t];r||(r=function(e,t,r="en-US"){if(t[e])return t[e];let n=Intl.Locale?new Intl.Locale(e).language:e.split("-")[0];if(t[n])return t[n];for(let i in t)if(i.startsWith(n+"-"))return t[i];return t[r]}(t,this.strings,this.defaultLocale),this.strings[t]=r);let n=r[e];if(!n)throw Error(`Could not find intl message ${e} in ${t} locale`);return n}constructor(e,t="en-US"){this.strings={...e},this.defaultLocale=t}}let i=new Map,o=new Map;class s{format(e,t){let r=this.strings.getStringForLocale(e,this.locale);return"function"==typeof r?r(t,this):r}plural(e,t,r="cardinal"){let n=t["="+e];if(n)return"function"==typeof n?n():n;let o=this.locale+":"+r,s=i.get(o);return s||(s=new Intl.PluralRules(this.locale,{type:r}),i.set(o,s)),"function"==typeof(n=t[s.select(e)]||t.other)?n():n}number(e){let t=o.get(this.locale);return t||(t=new Intl.NumberFormat(this.locale),o.set(this.locale,t)),t.format(e)}select(e,t){let r=e[t]||e.other;return"function"==typeof r?r():r}constructor(e,t){this.locale=e,this.strings=t}}},2524:function(e,t,r){"use strict";var n=r(6744);let i={fonts:{sans:"-apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif;",mono:"Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono','Courier New', monospace;"},fontSizes:{xs:"0.75rem",sm:"0.875rem",base:"1rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem","8xl":"6rem","9xl":"8rem"},fontWeights:{hairline:100,thin:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},lineHeights:{xs:1,sm:1.25,base:1.5,md:1.5,lg:1.75,xl:1.75,"2xl":2,"3xl":2.25,"4xl":2.5,"5xl":1,"6xl":1,"7xl":1,"8xl":1,"9xl":1},letterSpacings:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"},space:{0:"0rem",xs:"0.5rem",sm:"0.75rem",md:"1rem",lg:"1.25rem",xl:"2.25rem","2xl":"3rem","3xl":"5rem","4xl":"10rem","5xl":"14rem","6xl":"18rem","7xl":"24rem","8xl":"32rem","9xl":"40rem",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",full:"100%",px:"1px",1:"0.125rem",2:"0.25rem",3:"0.375rem",4:"0.5rem",5:"0.625rem",6:"0.75rem",7:"0.875rem",8:"1rem",9:"1.25rem",10:"1.5rem",11:"1.75rem",12:"2rem",13:"2.25rem",14:"2.5rem",15:"2.75rem",16:"3rem",17:"3.5rem",18:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},radii:{xs:"7px",sm:"9px",md:"12px",base:"14px",lg:"14px",xl:"18px","2xl":"24px","3xl":"32px",squared:"33%",rounded:"50%",pill:"9999px"},zIndices:{1:"100",2:"200",3:"300",4:"400",5:"500",10:"1000",max:"9999"},borderWeights:{light:"1px",normal:"2px",bold:"3px",extrabold:"4px",black:"5px"},transitions:{default:"all 250ms ease",button:"background 0.25s ease 0s, color 0.25s ease 0s, border-color 0.25s ease 0s, box-shadow 0.25s ease 0s, transform 0.25s ease 0s, opacity 0.25s ease 0s",avatar:"box-shadow 0.25s ease 0s, opacity 0.25s ease 0s",card:"transform 0.25s ease 0s, filter 0.25s ease 0s, box-shadow 0.25s ease 0s",dropdownItem:"background 0.12s ease, transform 0.12s ease, color 0.12s ease, box-shadow 0.12s ease 0s"},breakpoints:{xs:"650px",sm:"960px",md:"1280px",lg:"1400px",xl:"1920px"}},o={xs:`(min-width: ${i.breakpoints.xs})`,sm:`(min-width: ${i.breakpoints.sm})`,md:`(min-width: ${i.breakpoints.md})`,lg:`(min-width: ${i.breakpoints.lg})`,xl:`(min-width: ${i.breakpoints.xl})`,xsMin:`(min-width: ${i.breakpoints.xs})`,smMin:`(min-width: ${i.breakpoints.sm})`,mdMin:`(min-width: ${i.breakpoints.md})`,lgMin:`(min-width: ${i.breakpoints.lg})`,xlMin:`(min-width: ${i.breakpoints.xl})`,xsMax:`(max-width: ${i.breakpoints.xs})`,smMax:`(max-width: ${i.breakpoints.sm})`,mdMax:`(max-width: ${i.breakpoints.md})`,lgMax:`(max-width: ${i.breakpoints.lg})`,xlMax:`(max-width: ${i.breakpoints.xl})`,motion:"(prefers-reduced-motion: reduce)",safari:"not all and (min-resolution:.001dpcm)",hover:"(any-hover: hover)",dark:"(prefers-color-scheme: dark)",light:"(prefers-color-scheme: light)"},s={...n.E6,width:"space",height:"space",minWidth:"space",maxWidth:"space",minHeight:"space",maxHeight:"space",flexBasis:"space",gridTemplateColumns:"space",gridTemplateRows:"space",blockSize:"space",minBlockSize:"space",maxBlockSize:"space",inlineSize:"space",minInlineSize:"space",maxInlineSize:"space",borderWidth:"borderWeights"};t.ZP={prefix:"nextui",theme:{...i,colors:{white:"#ffffff",black:"#000000",primaryLight:"$blue200",primaryLightHover:"$blue300",primaryLightActive:"$blue400",primaryLightContrast:"$blue600",primary:"$blue600",primaryBorder:"$blue500",primaryBorderHover:"$blue600",primarySolidHover:"$blue700",primarySolidContrast:"$white",primaryShadow:"$blue500",secondaryLight:"$purple200",secondaryLightHover:"$purple300",secondaryLightActive:"$purple400",secondaryLightContrast:"$purple600",secondary:"$purple600",secondaryBorder:"$purple500",secondaryBorderHover:"$purple600",secondarySolidHover:"$purple700",secondarySolidContrast:"$white",secondaryShadow:"$purple500",successLight:"$green200",successLightHover:"$green300",successLightActive:"$green400",successLightContrast:"$green700",success:"$green600",successBorder:"$green500",successBorderHover:"$green600",successSolidHover:"$green700",successSolidContrast:"$white",successShadow:"$green500",warningLight:"$yellow200",warningLightHover:"$yellow300",warningLightActive:"$yellow400",warningLightContrast:"$yellow700",warning:"$yellow600",warningBorder:"$yellow500",warningBorderHover:"$yellow600",warningSolidHover:"$yellow700",warningSolidContrast:"$white",warningShadow:"$yellow500",errorLight:"$red200",errorLightHover:"$red300",errorLightActive:"$red400",errorLightContrast:"$red600",error:"$red600",errorBorder:"$red500",errorBorderHover:"$red600",errorSolidHover:"$red700",errorSolidContrast:"$white",errorShadow:"$red500",neutralLight:"$gray100",neutralLightHover:"$gray200",neutralLightActive:"$gray300",neutralLightContrast:"$gray800",neutral:"$gray600",neutralBorder:"$gray400",neutralBorderHover:"$gray500",neutralSolidHover:"$gray600",neutralSolidContrast:"$white",neutralShadow:"$gray400",gradient:"linear-gradient(112deg, $cyan600 -63.59%, $pink600 -20.3%, $blue600 70.46%)",accents0:"$gray50",accents1:"$gray100",accents2:"$gray200",accents3:"$gray300",accents4:"$gray400",accents5:"$gray500",accents6:"$gray600",accents7:"$gray700",accents8:"$gray800",accents9:"$gray900"},shadows:{},dropShadows:{}},media:o,utils:{p:e=>({padding:e}),pt:e=>({paddingTop:e}),pr:e=>({paddingRight:e}),pb:e=>({paddingBottom:e}),pl:e=>({paddingLeft:e}),px:e=>({paddingLeft:e,paddingRight:e}),py:e=>({paddingTop:e,paddingBottom:e}),m:e=>({margin:e}),mt:e=>({marginTop:e}),mr:e=>({marginRight:e}),mb:e=>({marginBottom:e}),ml:e=>({marginLeft:e}),mx:e=>({marginLeft:e,marginRight:e}),my:e=>({marginTop:e,marginBottom:e}),ta:e=>({textAlign:e}),tt:e=>({textTransform:e}),to:e=>({textOverflow:e}),d:e=>({display:e}),dflex:e=>({display:"flex",alignItems:e,justifyContent:e}),fd:e=>({flexDirection:e}),fw:e=>({flexWrap:e}),ai:e=>({alignItems:e}),ac:e=>({alignContent:e}),jc:e=>({justifyContent:e}),as:e=>({alignSelf:e}),fg:e=>({flexGrow:e}),fs:e=>({fontSize:e}),fb:e=>({flexBasis:e}),bc:e=>({backgroundColor:e}),bf:e=>({backdropFilter:e}),bg:e=>({background:e}),bgBlur:e=>({bf:"saturate(180%) blur(10px)",bg:e}),bgColor:e=>({backgroundColor:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),bgClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),br:e=>({borderRadius:e}),bw:e=>({borderWidth:e}),btrr:e=>({borderTopRightRadius:e}),bbrr:e=>({borderBottomRightRadius:e}),bblr:e=>({borderBottomLeftRadius:e}),btlr:e=>({borderTopLeftRadius:e}),bs:e=>({boxShadow:e}),ds:e=>({dropShadow:e}),shadow:e=>({boxShadow:e}),dshadow:e=>({dropShadow:e}),dropShadow:e=>({filter:`$dropShadows${e}`}),normalShadow:e=>({boxShadow:`0 4px 14px 0 $colors${e}`}),normalShadowVar:e=>({boxShadow:`0 4px 14px 0 ${e}`}),lh:e=>({lineHeight:e}),ov:e=>({overflow:e}),ox:e=>({overflowX:e}),oy:e=>({overflowY:e}),pe:e=>({pointerEvents:e}),events:e=>({pointerEvents:e}),us:e=>({WebkitUserSelect:e,userSelect:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),w:e=>({width:e}),h:e=>({height:e}),mw:e=>({maxWidth:e}),maxW:e=>({maxWidth:e}),mh:e=>({maxHeight:e}),maxH:e=>({maxHeight:e}),size:e=>({width:e,height:e}),minSize:e=>({minWidth:e,minHeight:e,width:e,height:e}),sizeMin:e=>({minWidth:e,minHeight:e,width:e,height:e}),maxSize:e=>({maxWidth:e,maxHeight:e}),sizeMax:e=>({maxWidth:e,maxHeight:e}),appearance:e=>({WebkitAppearance:e,appearance:e}),scale:e=>({transform:`scale(${e})`}),linearGradient:e=>({backgroundImage:`linear-gradient(${e})`}),tdl:e=>({textDecorationLine:e}),truncateText:e=>({maxWidth:e,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}),textGradient:e=>({backgroundImage:`linear-gradient(${e})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent","&::selection":{WebkitTextFillColor:"$colors$text"}})},themeMap:s}},1875:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n={colors:{background:"$white",backgroundAlpha:"rgba(255, 255, 255, 0.8)",foreground:"$black",backgroundContrast:"$white",blue50:"#EDF5FF",blue100:"#E1EFFF",blue200:"#CEE4FE",blue300:"#B7D5F8",blue400:"#96C1F2",blue500:"#5EA2EF",blue600:"#0072F5",blue700:"#005FCC",blue800:"#004799",blue900:"#00254D",purple50:"#F7F2FD",purple100:"#F1E8FB",purple200:"#EADCF8",purple300:"#E0CBF5",purple400:"#D1B1F0",purple500:"#BC8EE9",purple600:"#7828C8",purple700:"#6622AA",purple800:"#4D1980",purple900:"#290E44",green50:"#F1FDF7",green100:"#E8FCF1",green200:"#DAFBE8",green300:"#C8F9DD",green400:"#ADF5CC",green500:"#88F1B6",green600:"#17C964",green700:"#13A452",green800:"#108944",green900:"#06371B",yellow50:"#FEF9F0",yellow100:"#FEF5E7",yellow200:"#FDEFD8",yellow300:"#FCE7C5",yellow400:"#FBDBA7",yellow500:"#F9CB80",yellow600:"#F5A524",yellow700:"#B97509",yellow800:"#925D07",yellow900:"#4E3104",red50:"#FEF0F5",red100:"#FEE7EF",red200:"#FDD8E5",red300:"#FCC5D8",red400:"#FAA8C5",red500:"#F881AB",red600:"#F31260",red700:"#B80A47",red800:"#910838",red900:"#4E041E",cyan50:"#F0FCFF",cyan100:"#E6FAFE",cyan200:"#D7F8FE",cyan300:"#C3F4FD",cyan400:"#A5EEFD",cyan500:"#7EE7FC",cyan600:"#06B7DB",cyan700:"#09AACD",cyan800:"#0E8AAA",cyan900:"#053B48",pink50:"#FFF0FB",pink100:"#FFE5F8",pink200:"#FFD6F3",pink300:"#FFC2EE",pink400:"#FFA3E5",pink500:"#FF7AD9",pink600:"#FF4ECD",pink700:"#D6009A",pink800:"#B80084",pink900:"#4D0037",gray50:"#F1F3F5",gray100:"#ECEEF0",gray200:"#E6E8EB",gray300:"#DFE3E6",gray400:"#D7DBDF",gray500:"#C1C8CD",gray600:"#889096",gray700:"#7E868C",gray800:"#687076",gray900:"#11181C",text:"$gray900",link:"$blue600",codeLight:"$pink100",code:"$pink600",selection:"$blue200",border:"rgba(0, 0, 0, 0.15)"},shadows:{xs:"0 2px 8px 1px rgb(104 112 118 / 0.07), 0 1px 1px -1px rgb(104 112 118 / 0.04)",sm:"0 2px 8px 2px rgb(104 112 118 / 0.07), 0 2px 4px -1px rgb(104 112 118 / 0.04)",md:"0 12px 20px 6px rgb(104 112 118 / 0.08)",lg:"0 12px 34px 6px rgb(104 112 118 / 0.18)",xl:"0 25px 65px 0px rgb(104 112 118 / 0.35)"},dropShadows:{xs:"drop-shadow(0 2px 4px rgb(104 112 118 / 0.07)) drop-shadow(0 1px 1px rgb(104 112 118 / 0.04))",sm:"drop-shadow(0 2px 8px rgb(104 112 118 / 0.07)) drop-shadow(0 2px 4px rgb(104 112 118 / 0.04))",md:"drop-shadow(0 4px 12px rgb(104 112 118 / 0.08)) drop-shadow(0 20px 8px rgb(104 112 118 / 0.04))",lg:"drop-shadow(0 12px 24px rgb(104 112 118 / 0.15)) drop-shadow(0 12px 14px rgb(104 112 118 / 0.1))",xl:"drop-shadow(0 25px 34px rgb(104 112 118 / 0.35))"}}},275:function(e,t,r){"use strict";r.d(t,{F4:function(){return c},Gc:function(){return d},iv:function(){return l},rS:function(){return h},zY:function(){return u},zo:function(){return a}});var n=r(6744),i=r(2524),o=r(1875);let s=(0,n.Th)({...i.ZP,theme:{...i.ZP.theme,shadows:{...o.Z.shadows},dropShadows:{...o.Z.dropShadows},colors:{...i.ZP.theme.colors,...o.Z.colors}}});s.createTheme;let a=s.styled,l=s.css,u=s.globalCss,c=s.keyframes,d=s.getCssText,h=s.theme;s.config},2242:function(e,t,r){"use strict";r.d(t,{O:function(){return o}});var n=r(7294),i=r(275);let o={isDark:!1,theme:i.rS,type:"light"},s=n.createContext(o);t.Z=s},6680:function(e,t,r){"use strict";r.d(t,{Lr:function(){return d},Rm:function(){return u},Wi:function(){return a},Yo:function(){return c},jv:function(){return l}});var n=r(1309),i=r(4973),o=r(2524),s=r(1875);let a=(e,t,r=1)=>{if("undefined"==typeof document||!e)return"";let n=getComputedStyle(document.documentElement),s=`--${o.ZP.prefix}-${e}-${t}`,l=n.getPropertyValue(s);if(l&&l.includes("var")&&a(e,l),l&&1!==r){if(l.includes("rgb"))return(0,i.wB)(l,r);if(l.includes("#"))return(0,i.E9)(l,r)}return l},l=()=>{let e=[...Object.keys(o.ZP.theme.colors),...Object.keys(s.Z.colors)],t=Object.keys(s.Z.shadows);return{colors:e.reduce((e,t)=>{let r=a("colors",t);return r&&(e[t]={prefix:o.ZP.prefix,scale:"colors",token:t,value:r}),e},{}),shadows:t.reduce((e,t)=>{let r=a("shadows",t);return r&&(e[t]={prefix:o.ZP.prefix,scale:"shadows",token:t,value:r}),e},{})}},u=e=>{var t;let r=(null==e||null==(t=e.getAttribute("style"))?void 0:t.split(";").map(e=>e.trim()).filter(e=>e.includes("color-scheme")))||[],n=r.length>0?r[0].replace("color-scheme: ","").replace(";",""):"";return(null==e?void 0:e.getAttribute("data-theme"))||n},c=e=>"string"==typeof e&&null!=e&&e.includes("-theme")?null==e?void 0:e.replace("-theme",""):e,d=e=>{var t,r;if(!document)return;let i=document.documentElement,o=(null==i||null==(t=i.getAttribute("class"))?void 0:t.split(" ").filter(e=>!e.includes("theme")&&!e.includes("light")&&!e.includes("dark")))||[],s=(null==i||null==(r=i.getAttribute("style"))?void 0:r.split(";").filter(e=>!e.includes("color-scheme")&&e.length).map(e=>`${e};`))||[];null==i||i.setAttribute("class",(0,n.Z)(o,`${c(e)}-theme`)),null==i||i.setAttribute("style",(0,n.Z)(s,`color-scheme: ${e};`))}},2532:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294),i=()=>{let[e,t]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{t(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement))},[]),{isBrowser:e,isServer:!e}}},1309:function(e,t,r){"use strict";function n(...e){for(var t,r,n=0,i="";n<e.length;)(t=e[n++])&&(r=function e(t){var r,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(i&&(i+=" "),i+=n);else for(r in t)t[r]&&(i&&(i+=" "),i+=r)}return i}(t))&&(i&&(i+=" "),i+=r);return i}r.d(t,{Z:function(){return n}})},4973:function(e,t,r){"use strict";r.d(t,{E9:function(){return s},h1:function(){return a},jK:function(){return c},wB:function(){return d}});var n=r(5033);let i=(e,t=null)=>{if("undefined"==typeof document||!e)return"";let r=t||document.documentElement,n=o(e)?e.replace("var(","").replace(")",""):e.includes("--")?e:`--${e}`;return getComputedStyle(r).getPropertyValue(n)},o=e=>!(!e||0!==(null==e?void 0:e.indexOf("var("))),s=(e,t=1)=>{let r=0,n=0,i=0;return 4==e.length?(r="0x"+e[1]+e[1],n="0x"+e[2]+e[2],i="0x"+e[3]+e[3]):7==e.length&&(r="0x"+e[1]+e[2],n="0x"+e[3]+e[4],i="0x"+e[5]+e[6]),`rgba(${+r},${+n},${+i},${t})`},a=e=>null!=n.Vh.find(t=>t===e),l=e=>{let t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(e,t,r,n)=>`${t}${t}${r}${r}${n}${n}`),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);if(!r)throw Error(`Next UI: Unsupported ${e} color.`);return[Number.parseInt(r[1],16),Number.parseInt(r[2],16),Number.parseInt(r[3],16)]},u=e=>{let t=o(e)?i(e):e;if("#"===t.charAt(0))return l(t);let r=t.replace(/ /g,""),n=t.substr(0,4),s=r.match(/\((.+)\)/);return n.startsWith("rgb")&&s?s[1].split(",").map(e=>Number.parseFloat(e)):(console.warn('NextUI: Only supports ["RGB", "RGBA", "HEX"] color.'),[0,0,0])},c=(e,t=1)=>{if(!e)return"";let r=o(e)?i(e):e;if(/#[a-fA-F0-9]{3,6}/g.test(r))return s(r,t);if(!/^#|rgb|RGB/.test(r))return r;let[n,a,l]=u(r);return`rgba(${n}, ${a}, ${l}, ${t>1?1:t<0?0:t})`},d=(e,t=1)=>{let[r,n,i]=e.split(",").map(e=>Number.parseFloat(e));return`rgba(${r}, ${n}, ${i}, ${t>1?1:t<0?0:t})`}},8738:function(e,t,r){"use strict";r.d(t,{FB:function(){return s},Zw:function(){return i},sF:function(){return o}});let n=e=>e&&"object"==typeof e,i=e=>n(e)?e instanceof Array?[...e]:{...e}:e,o=(e,t)=>n(e)?e instanceof Array?[...e]:e[t]:e,s=e=>e.length&&Array.isArray(e)?e.reduce((e,t)=>({...e,...t}),{}):{}},5033:function(e,t,r){"use strict";r.d(t,{Vh:function(){return n},ZN:function(){return i}}),((...e)=>0)("xs","sm","md","lg","xl");let n=((...e)=>e)("default","primary","secondary","success","warning","error","gradient");((...e)=>0)("default","primary","secondary","success","warning","error"),((...e)=>0)("default","primary","secondary","success","warning","error","invert","gradient"),((...e)=>0)("default","primary","secondary","success","warning","error","invert"),((...e)=>0)("default","primary","secondary","success","warning","error","dark","lite","alert","purple","violet","gradient","cyan"),((...e)=>0)("default","points","points-opacity","gradient","spinner"),((...e)=>0)("light","normal","bold","extrabold","black"),((...e)=>0)("normal","bold","lighter","bolder","inherit","initial","revert","unset"),((...e)=>0)("none","capitalize","uppercase","lowercase","full-width","full-size-kana","inherit","initial","revert","unset"),((...e)=>0)("default","slient","prevent"),((...e)=>0)("hover","click"),((...e)=>0)("top","topStart","topEnd","left","leftStart","leftEnd","bottom","bottomStart","bottomEnd","right","rightStart","rightEnd"),((...e)=>0)("static","relative","absolute","fixed","sticky","inherit","initial","revert","unset"),((...e)=>0)("contain","cover","fill","none","scale-down","inherit","initial","revert","unset"),((...e)=>0)("start","center","end","left","right"),((...e)=>0)("flex-start","center","flex-end","space-between","space-around","space-evenly"),((...e)=>0)("flex-start","flex-end","center","stretch","baseline"),((...e)=>0)("stretch","center","flex-start","flex-end","space-between","space-around"),((...e)=>0)("row","row-reverse","column","column-reverse"),((...e)=>0)("nowrap","wrap","wrap-reverse"),((...e)=>0)("flex","block","grid","inline","inline-block","inline-flex","inline-grid"),((...e)=>0)("left","right"),((...e)=>0)("start","center","end");let i=((...e)=>e)("clearable","as","rounded","labelLeft","labelRight","contentLeft","contentRight","contentClickable","contentLeftStyling","contentRightStyling","onContentClick","onClearClick","css");((...e)=>0)("toggle","replace"),((...e)=>0)("none","single","multiple"),((...e)=>0)("flat","light","solid","shadow"),((...e)=>0)("flat","bordered","shadow")},88:function(e,t){"use strict";t.Z=(e,t)=>(e.defaultProps=t,e)},7139:function(e,t,r){"use strict";r.d(t,{Xe:function(){return v},bU:function(){return p},qb:function(){return m}});var n=r(7294),i=r(8831),o=r(3785);let s=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),a=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function l(){let e="undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch(t){e="en-US"}return{locale:e,direction:!function(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize().script;return s.has(t)}let r=e.split("-")[0];return a.has(r)}(e)?"ltr":"rtl"}}let u=l(),c=new Set;function d(){for(let e of(u=l(),c))e(u)}let h=n.createContext(null);function p(){let e=function(){let e=(0,i.Av)(),[t,r]=(0,n.useState)(u);return((0,n.useEffect)(()=>(0===c.size&&window.addEventListener("languagechange",d),c.add(r),()=>{c.delete(r),0===c.size&&window.removeEventListener("languagechange",d)}),[]),e)?{locale:"en-US",direction:"ltr"}:t}();return(0,n.useContext)(h)||e}let f=new WeakMap;function m(e){let{locale:t}=p(),r=(0,n.useMemo)(()=>{let t;return(t=f.get(e))||(t=new o.J(e),f.set(e,t)),t},[e]);return(0,n.useMemo)(()=>new o.E(t,r),[t,r])}let g=new Map;function v(e){let{locale:t}=p(),r=t+(e?Object.entries(e).sort((e,t)=>e[0]<t[0]?-1:1).join():"");if(g.has(r))return g.get(r);let n=new Intl.Collator(t,e);return g.set(r,n),n}},7354:function(e,t,r){"use strict";r.d(t,{E:function(){return M},Fc:function(){return K},Jz:function(){return $},KK:function(){return I},L_:function(){return F},TA:function(){return Z},XI:function(){return V},mG:function(){return U},r7:function(){return f},v5:function(){return J}});var n=r(3952),i=r(7294);let o="default",s="",a=new WeakMap;function l(e){(0,n.gn)()?("default"===o&&(s=document.documentElement.style.webkitUserSelect,document.documentElement.style.webkitUserSelect="none"),o="disabled"):(e instanceof HTMLElement||e instanceof SVGElement)&&(a.set(e,e.style.userSelect),e.style.userSelect="none")}function u(e){if((0,n.gn)())"disabled"===o&&(o="restoring",setTimeout(()=>{(0,n.QB)(()=>{"restoring"===o&&("none"===document.documentElement.style.webkitUserSelect&&(document.documentElement.style.webkitUserSelect=s||""),s="",o="default")})},300));else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&a.has(e)){let t=a.get(e);"none"===e.style.userSelect&&(e.style.userSelect=t),""===e.getAttribute("style")&&e.removeAttribute("style"),a.delete(e)}}function c(e){return 0===e.mozInputSource&&!!e.isTrusted||0===e.detail&&!e.pointerType}class d{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function h(e){let t=(0,i.useRef)({isFocused:!1,onBlur:e,observer:null});return t.current.onBlur=e,(0,n.bt)(()=>{let e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}},[]),(0,i.useCallback)(e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let r=e.target,n=e=>{var n,i;t.current.isFocused=!1,r.disabled&&(null===(i=(n=t.current).onBlur)||void 0===i||i.call(n,new d("blur",e))),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};r.addEventListener("focusout",n,{once:!0}),t.current.observer=new MutationObserver(()=>{t.current.isFocused&&r.disabled&&(t.current.observer.disconnect(),r.dispatchEvent(new FocusEvent("blur")),r.dispatchEvent(new FocusEvent("focusout",{bubbles:!0})))}),t.current.observer.observe(r,{attributes:!0,attributeFilter:["disabled"]})}},[])}let p=i.createContext(null);function f(e){let{onPress:t,onPressChange:r,onPressStart:o,onPressEnd:s,onPressUp:a,isDisabled:d,isPressed:h,preventFocusOnPress:f,shouldCancelOnPointerExit:I,allowTextSelectionOnPress:T,ref:_,...S}=function(e){let t=(0,i.useContext)(p);if(t){let{register:r,...o}=t;e=(0,n.dG)(o,e),r()}return(0,n.lE)(t,e.ref),e}(e),k=(0,i.useRef)(null);k.current={onPress:t,onPressChange:r,onPressStart:o,onPressEnd:s,onPressUp:a,isDisabled:d,shouldCancelOnPointerExit:I};let[A,O]=(0,i.useState)(!1),R=(0,i.useRef)({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:P,removeAllGlobalListeners:C}=(0,n.xi)(),x=(0,i.useMemo)(()=>{let e=R.current,t=(t,r)=>{let{onPressStart:n,onPressChange:i,isDisabled:o}=k.current;o||e.didFirePressStart||(n&&n({type:"pressstart",pointerType:r,target:t.currentTarget,shiftKey:t.shiftKey,metaKey:t.metaKey,ctrlKey:t.ctrlKey,altKey:t.altKey}),i&&i(!0),e.didFirePressStart=!0,O(!0))},r=(t,r,n=!0)=>{let{onPressEnd:i,onPressChange:o,onPress:s,isDisabled:a}=k.current;e.didFirePressStart&&(e.ignoreClickAfterPress=!0,e.didFirePressStart=!1,i&&i({type:"pressend",pointerType:r,target:t.currentTarget,shiftKey:t.shiftKey,metaKey:t.metaKey,ctrlKey:t.ctrlKey,altKey:t.altKey}),o&&o(!1),O(!1),s&&n&&!a&&s({type:"press",pointerType:r,target:t.currentTarget,shiftKey:t.shiftKey,metaKey:t.metaKey,ctrlKey:t.ctrlKey,altKey:t.altKey}))},i=(e,t)=>{let{onPressUp:r,isDisabled:n}=k.current;!n&&r&&r({type:"pressup",pointerType:t,target:e.currentTarget,shiftKey:e.shiftKey,metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey})},o=t=>{e.isPressed&&(e.isOverTarget&&r(y(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,C(),T||u(e.target))},s={onKeyDown(r){g(r.nativeEvent)&&r.currentTarget.contains(r.target)&&(E(r.target)&&r.preventDefault(),r.stopPropagation(),e.isPressed||r.repeat||(e.target=r.currentTarget,e.isPressed=!0,t(r,"keyboard"),P(document,"keyup",a,!1)))},onKeyUp(t){g(t.nativeEvent)&&!t.repeat&&t.currentTarget.contains(t.target)&&i(y(e.target,t),"keyboard")},onClick(o){(!o||o.currentTarget.contains(o.target))&&o&&0===o.button&&(o.stopPropagation(),d&&o.preventDefault(),!e.ignoreClickAfterPress&&!e.ignoreEmulatedMouseEvents&&("virtual"===e.pointerType||c(o.nativeEvent))&&(d||f||(0,n.Ao)(o.currentTarget),t(o,"virtual"),i(o,"virtual"),r(o,"virtual")),e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1)}},a=t=>{if(e.isPressed&&g(t)){E(t.target)&&t.preventDefault(),t.stopPropagation(),e.isPressed=!1;let n=t.target;r(y(e.target,t),"keyboard",e.target.contains(n)),C(),e.target instanceof HTMLElement&&(e.target.contains(n)&&m(e.target)||"link"===e.target.getAttribute("role"))&&e.target.click()}};if("undefined"!=typeof PointerEvent){s.onPointerDown=r=>{if(0===r.button&&r.currentTarget.contains(r.target)){var i;if(0===(i=r.nativeEvent).width&&0===i.height||1===i.width&&1===i.height&&0===i.pressure&&0===i.detail&&"mouse"===i.pointerType){e.pointerType="virtual";return}w(r.currentTarget)&&r.preventDefault(),e.pointerType=r.pointerType,r.stopPropagation(),e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=r.pointerId,e.target=r.currentTarget,d||f||(0,n.Ao)(r.currentTarget),T||l(e.target),t(r,e.pointerType),P(document,"pointermove",h,!1),P(document,"pointerup",p,!1),P(document,"pointercancel",I,!1))}},s.onMouseDown=e=>{e.currentTarget.contains(e.target)&&0===e.button&&(w(e.currentTarget)&&e.preventDefault(),e.stopPropagation())},s.onPointerUp=t=>{t.currentTarget.contains(t.target)&&"virtual"!==e.pointerType&&0===t.button&&b(t,t.currentTarget)&&i(t,e.pointerType||t.pointerType)};let h=n=>{n.pointerId===e.activePointerId&&(b(n,e.target)?e.isOverTarget||(e.isOverTarget=!0,t(y(e.target,n),e.pointerType)):e.isOverTarget&&(e.isOverTarget=!1,r(y(e.target,n),e.pointerType,!1),k.current.shouldCancelOnPointerExit&&o(n)))},p=t=>{t.pointerId===e.activePointerId&&e.isPressed&&0===t.button&&(b(t,e.target)?r(y(e.target,t),e.pointerType):e.isOverTarget&&r(y(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,C(),T||u(e.target))},I=e=>{o(e)};s.onDragStart=e=>{e.currentTarget.contains(e.target)&&o(e)}}else{s.onMouseDown=r=>{0===r.button&&r.currentTarget.contains(r.target)&&(w(r.currentTarget)&&r.preventDefault(),r.stopPropagation(),e.ignoreEmulatedMouseEvents||(e.isPressed=!0,e.isOverTarget=!0,e.target=r.currentTarget,e.pointerType=c(r.nativeEvent)?"virtual":"mouse",d||f||(0,n.Ao)(r.currentTarget),t(r,e.pointerType),P(document,"mouseup",_,!1)))},s.onMouseEnter=r=>{r.currentTarget.contains(r.target)&&(r.stopPropagation(),e.isPressed&&!e.ignoreEmulatedMouseEvents&&(e.isOverTarget=!0,t(r,e.pointerType)))},s.onMouseLeave=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&!e.ignoreEmulatedMouseEvents&&(e.isOverTarget=!1,r(t,e.pointerType,!1),k.current.shouldCancelOnPointerExit&&o(t)))},s.onMouseUp=t=>{t.currentTarget.contains(t.target)&&!e.ignoreEmulatedMouseEvents&&0===t.button&&i(t,e.pointerType)};let _=t=>{if(0===t.button){if(e.isPressed=!1,C(),e.ignoreEmulatedMouseEvents){e.ignoreEmulatedMouseEvents=!1;return}b(t,e.target)?r(y(e.target,t),e.pointerType):e.isOverTarget&&r(y(e.target,t),e.pointerType,!1),e.isOverTarget=!1}};s.onTouchStart=r=>{if(!r.currentTarget.contains(r.target))return;r.stopPropagation();let i=function(e){let{targetTouches:t}=e;return t.length>0?t[0]:null}(r.nativeEvent);i&&(e.activePointerId=i.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=r.currentTarget,e.pointerType="touch",d||f||(0,n.Ao)(r.currentTarget),T||l(e.target),t(r,e.pointerType),P(window,"scroll",S,!0))},s.onTouchMove=n=>{if(!n.currentTarget.contains(n.target)||(n.stopPropagation(),!e.isPressed))return;let i=v(n.nativeEvent,e.activePointerId);i&&b(i,n.currentTarget)?e.isOverTarget||(e.isOverTarget=!0,t(n,e.pointerType)):e.isOverTarget&&(e.isOverTarget=!1,r(n,e.pointerType,!1),k.current.shouldCancelOnPointerExit&&o(n))},s.onTouchEnd=t=>{if(!t.currentTarget.contains(t.target)||(t.stopPropagation(),!e.isPressed))return;let n=v(t.nativeEvent,e.activePointerId);n&&b(n,t.currentTarget)?(i(t,e.pointerType),r(t,e.pointerType)):e.isOverTarget&&r(t,e.pointerType,!1),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,T||u(e.target),C()},s.onTouchCancel=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&o(t))};let S=t=>{e.isPressed&&t.target.contains(e.target)&&o({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};s.onDragStart=e=>{e.currentTarget.contains(e.target)&&o(e)}}return s},[P,d,f,C,T]);return(0,i.useEffect)(()=>()=>{T||u(R.current.target)},[T]),{isPressed:h||A,pressProps:(0,n.dG)(S,x)}}function m(e){return"A"===e.tagName&&e.hasAttribute("href")}function g(e){let{key:t,code:r,target:n}=e,{tagName:i,isContentEditable:o}=n,s=n.getAttribute("role");return("Enter"===t||" "===t||"Spacebar"===t||"Space"===r)&&"INPUT"!==i&&"TEXTAREA"!==i&&!0!==o&&(!m(n)||"button"===s&&"Enter"!==t)&&!("link"===s&&"Enter"!==t)}function v(e,t){let r=e.changedTouches;for(let n=0;n<r.length;n++){let i=r[n];if(i.identifier===t)return i}return null}function y(e,t){return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey}}function b(e,t){let r,n,i=t.getBoundingClientRect(),o=(r=e.width/2||e.radiusX||0,n=e.height/2||e.radiusY||0,{top:e.clientY-n,right:e.clientX+r,bottom:e.clientY+n,left:e.clientX-r});return!(i.left>o.right)&&!(o.left>i.right)&&!(i.top>o.bottom)&&!(o.top>i.bottom)}function w(e){return!(e instanceof HTMLElement)||!e.draggable}function E(e){return!(("INPUT"===e.tagName||"BUTTON"===e.tagName)&&"submit"===e.type)}function I(e){let{isDisabled:t,onFocus:r,onBlur:n,onFocusChange:o}=e,s=(0,i.useCallback)(e=>{if(e.target===e.currentTarget)return n&&n(e),o&&o(!1),!0},[n,o]),a=h(s),l=(0,i.useCallback)(e=>{e.target===e.currentTarget&&(r&&r(e),o&&o(!0),a(e))},[o,r,a]);return{focusProps:{onFocus:!t&&(r||o||n)?l:void 0,onBlur:!t&&(n||o)?s:null}}}p.displayName="PressResponderContext";let T=null,_=new Set,S=!1,k=!1,A=!1,O={Tab:!0,Escape:!0};function R(e,t){for(let r of _)r(e,t)}function P(e){k=!0,e.metaKey||!(0,n.V5)()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key||(T="keyboard",R("keyboard",e))}function C(e){T="pointer",("mousedown"===e.type||"pointerdown"===e.type)&&(k=!0,R("pointer",e))}function x(e){c(e)&&(k=!0,T="virtual")}function L(e){e.target!==window&&e.target!==document&&(k||A||(T="virtual",R("virtual",e)),k=!1,A=!1)}function N(){k=!1,A=!0}function D(){if("undefined"==typeof window||S)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){k=!0,e.apply(this,arguments)},document.addEventListener("keydown",P,!0),document.addEventListener("keyup",P,!0),document.addEventListener("click",x,!0),window.addEventListener("focus",L,!0),window.addEventListener("blur",N,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",C,!0),document.addEventListener("pointermove",C,!0),document.addEventListener("pointerup",C,!0)):(document.addEventListener("mousedown",C,!0),document.addEventListener("mousemove",C,!0),document.addEventListener("mouseup",C,!0)),S=!0}function M(){return"pointer"!==T}function $(){return T}function U(e,t,r){D(),(0,i.useEffect)(()=>{let t=(t,n)=>{(!((null==r?void 0:r.isTextInput)&&"keyboard"===t&&n instanceof KeyboardEvent)||O[n.key])&&e(M())};return _.add(t),()=>{_.delete(t)}},t)}function F(e){let{isDisabled:t,onBlurWithin:r,onFocusWithin:n,onFocusWithinChange:o}=e,s=(0,i.useRef)({isFocusWithin:!1}),a=(0,i.useCallback)(e=>{s.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(s.current.isFocusWithin=!1,r&&r(e),o&&o(!1))},[r,o,s]),l=h(a),u=(0,i.useCallback)(e=>{s.current.isFocusWithin||(n&&n(e),o&&o(!0),s.current.isFocusWithin=!0,l(e))},[n,o,l]);return t?{focusWithinProps:{onFocus:null,onBlur:null}}:{focusWithinProps:{onFocus:u,onBlur:a}}}"undefined"!=typeof document&&("loading"!==document.readyState?D():document.addEventListener("DOMContentLoaded",D));let j=!1,B=0;function z(){j=!0,setTimeout(()=>{j=!1},50)}function H(e){"touch"===e.pointerType&&z()}function W(){if("undefined"!=typeof document)return"undefined"!=typeof PointerEvent?document.addEventListener("pointerup",H):document.addEventListener("touchend",z),B++,()=>{--B>0||("undefined"!=typeof PointerEvent?document.removeEventListener("pointerup",H):document.removeEventListener("touchend",z))}}function V(e){let{onHoverStart:t,onHoverChange:r,onHoverEnd:n,isDisabled:o}=e,[s,a]=(0,i.useState)(!1),l=(0,i.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;(0,i.useEffect)(W,[]);let{hoverProps:u,triggerHoverEnd:c}=(0,i.useMemo)(()=>{let e=(e,n)=>{if(l.pointerType=n,o||"touch"===n||l.isHovered||!e.currentTarget.contains(e.target))return;l.isHovered=!0;let i=e.currentTarget;l.target=i,t&&t({type:"hoverstart",target:i,pointerType:n}),r&&r(!0),a(!0)},i=(e,t)=>{if(l.pointerType="",l.target=null,"touch"===t||!l.isHovered)return;l.isHovered=!1;let i=e.currentTarget;n&&n({type:"hoverend",target:i,pointerType:t}),r&&r(!1),a(!1)},s={};return"undefined"!=typeof PointerEvent?(s.onPointerEnter=t=>{j&&"mouse"===t.pointerType||e(t,t.pointerType)},s.onPointerLeave=e=>{!o&&e.currentTarget.contains(e.target)&&i(e,e.pointerType)}):(s.onTouchStart=()=>{l.ignoreEmulatedMouseEvents=!0},s.onMouseEnter=t=>{l.ignoreEmulatedMouseEvents||j||e(t,"mouse"),l.ignoreEmulatedMouseEvents=!1},s.onMouseLeave=e=>{!o&&e.currentTarget.contains(e.target)&&i(e,"mouse")}),{hoverProps:s,triggerHoverEnd:i}},[t,r,n,o,l]);return(0,i.useEffect)(()=>{o&&c({currentTarget:l.target},l.pointerType)},[o]),{hoverProps:u,isHovered:s}}function K(e){let{ref:t,onInteractOutside:r,isDisabled:n,onInteractOutsideStart:o}=e,s=(0,i.useRef)({isPointerDown:!1,ignoreEmulatedMouseEvents:!1,onInteractOutside:r,onInteractOutsideStart:o}).current;s.onInteractOutside=r,s.onInteractOutsideStart=o,(0,i.useEffect)(()=>{if(n)return;let e=e=>{q(e,t)&&s.onInteractOutside&&(s.onInteractOutsideStart&&s.onInteractOutsideStart(e),s.isPointerDown=!0)};if("undefined"!=typeof PointerEvent){let r=e=>{s.isPointerDown&&s.onInteractOutside&&q(e,t)&&(s.isPointerDown=!1,s.onInteractOutside(e))};return document.addEventListener("pointerdown",e,!0),document.addEventListener("pointerup",r,!0),()=>{document.removeEventListener("pointerdown",e,!0),document.removeEventListener("pointerup",r,!0)}}{let i=e=>{s.ignoreEmulatedMouseEvents?s.ignoreEmulatedMouseEvents=!1:s.isPointerDown&&s.onInteractOutside&&q(e,t)&&(s.isPointerDown=!1,s.onInteractOutside(e))},o=e=>{s.ignoreEmulatedMouseEvents=!0,s.onInteractOutside&&s.isPointerDown&&q(e,t)&&(s.isPointerDown=!1,s.onInteractOutside(e))};return document.addEventListener("mousedown",e,!0),document.addEventListener("mouseup",i,!0),document.addEventListener("touchstart",e,!0),document.addEventListener("touchend",o,!0),()=>{document.removeEventListener("mousedown",e,!0),document.removeEventListener("mouseup",i,!0),document.removeEventListener("touchstart",e,!0),document.removeEventListener("touchend",o,!0)}}},[t,s,n])}function q(e,t){if(e.button>0)return!1;if(e.target){let r=e.target.ownerDocument;if(!r||!r.documentElement.contains(e.target))return!1}return t.current&&!t.current.contains(e.target)}function G(e){if(!e)return;let t=!0;return r=>{e({...r,preventDefault(){r.preventDefault()},isDefaultPrevented:()=>r.isDefaultPrevented(),stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}}),t&&r.stopPropagation()}}function J(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:G(e.onKeyDown),onKeyUp:G(e.onKeyUp)}}}function Z(e){let{isDisabled:t,onLongPressStart:r,onLongPressEnd:o,onLongPress:s,threshold:a=500,accessibilityDescription:l}=e,u=(0,i.useRef)(null),{addGlobalListener:c,removeGlobalListener:d}=(0,n.xi)(),{pressProps:h}=f({isDisabled:t,onPressStart(e){if(("mouse"===e.pointerType||"touch"===e.pointerType)&&(r&&r({...e,type:"longpressstart"}),u.current=setTimeout(()=>{e.target.dispatchEvent(new PointerEvent("pointercancel",{bubbles:!0})),s&&s({...e,type:"longpress"}),u.current=null},a),"touch"===e.pointerType)){let t=e=>{e.preventDefault()};c(e.target,"contextmenu",t,{once:!0}),c(window,"pointerup",()=>{setTimeout(()=>{d(e.target,"contextmenu",t)},30)},{once:!0})}},onPressEnd(e){u.current&&clearTimeout(u.current),o&&("mouse"===e.pointerType||"touch"===e.pointerType)&&o({...e,type:"longpressend"})}}),p=(0,n.PK)(s&&!t?l:null);return{longPressProps:(0,n.dG)(h,p)}}},8948:function(e,t,r){"use strict";r.d(t,{IB:function(){return A},Ir:function(){return k},N3:function(){return C},U4:function(){return D},Xj:function(){return x},dd:function(){return L},tN:function(){return _}});var n=r(7294),i=r(3952),o=r(7139),s=r(7354),a=r(3935),l=r(8831),u=r(4140);let c={top:"top",bottom:"top",left:"left",right:"left"},d={top:"bottom",bottom:"top",left:"right",right:"left"},h={top:"left",left:"top"},p={top:"height",left:"width"},f={},m="undefined"!=typeof window&&window.visualViewport;function g(e,t,r,n,i){let o=n.scroll[e],s=n[p[e]],a=t-i-o,l=t+i-o+r;return a<0?-a:l>s?Math.max(s-l,-a):0}function v(e){if(f[e])return f[e];let[t,r]=e.split(" "),n=c[t]||"right",i=h[n];c[r]||(r="center");let o=p[n],s=p[i];return f[e]={placement:t,crossPlacement:r,axis:n,crossAxis:i,size:o,crossSize:s},f[e]}function y(e,t,r,n,i,o,s,a){let{placement:l,crossPlacement:u,axis:c,crossAxis:h,size:p,crossSize:f}=n,m={};m[h]=e[h],"center"===u?m[h]+=(e[f]-r[f])/2:u!==h&&(m[h]+=e[f]-r[f]),m[h]+=o;let g=e[h]+e[f]/2-r[f],v=e[h]+e[f]/2;if(m[h]=Math.min(Math.max(g,m[h]),v),l===c){let y=a?s[p]:t[p];m[d[c]]=Math.floor(y-e[c]+i)}else m[c]=Math.floor(e[c]+e[p]+i);return m}function b(e,t,r,n,i,o){let{placement:s,axis:a,size:l}=o;return s===a?Math.max(0,r[a]-e[a]-e.scroll[a]+t[a]-n[a]-n[d[a]]-i):Math.max(0,e[l]+e[a]+e.scroll[a]-t[a]-r[a]-r[l]-n[a]-n[d[a]]-i)}function w(e){let{top:t,left:r,width:n,height:i}=e.getBoundingClientRect(),{scrollTop:o,scrollLeft:s,clientTop:a,clientLeft:l}=document.documentElement;return{top:t+o-a,left:r+s-l,width:n,height:i}}function E(e,t){let r,n=window.getComputedStyle(e);if("fixed"===n.position){let{top:i,left:o,width:s,height:a}=e.getBoundingClientRect();r={top:i,left:o,width:s,height:a}}else{r=w(e);let l=w(t),u=window.getComputedStyle(t);l.top+=(parseInt(u.borderTopWidth,10)||0)-t.scrollTop,l.left+=(parseInt(u.borderLeftWidth,10)||0)-t.scrollLeft,r.top-=l.top,r.left-=l.left}return r.top-=parseInt(n.marginTop,10)||0,r.left-=parseInt(n.marginLeft,10)||0,r}let I=new WeakMap,T="undefined"!=typeof window&&window.visualViewport;function _(e){let{direction:t}=(0,o.bU)(),{targetRef:r,overlayRef:s,scrollRef:a=s,placement:l="bottom",containerPadding:u=12,shouldFlip:c=!0,boundaryElement:h="undefined"!=typeof document?document.body:null,offset:p=0,crossOffset:f=0,shouldUpdatePosition:_=!0,isOpen:S=!0,onClose:k,maxHeight:A}=e,[O,R]=(0,n.useState)({position:{},arrowOffsetLeft:void 0,arrowOffsetTop:void 0,maxHeight:void 0,placement:void 0}),P=[_,l,s.current,r.current,a.current,u,c,h,p,f,S,t,A],C=(0,n.useCallback)(()=>{!1!==_&&S&&s.current&&r.current&&a.current&&h&&R(function(e){let t,{placement:r,targetNode:n,overlayNode:i,scrollNode:o,padding:s,shouldFlip:a,boundaryElement:l,offset:u,crossOffset:c,maxHeight:h}=e,p=i instanceof HTMLElement&&i.offsetParent||document.body,f="BODY"===p.tagName,I=window.getComputedStyle(p).position,T=f?w(n):E(n,p);if(!f){let{marginTop:_,marginLeft:S}=window.getComputedStyle(n);T.top+=parseInt(_,10)||0,T.left+=parseInt(S,10)||0}let k=w(i),A={top:parseInt((t=window.getComputedStyle(i)).marginTop,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0,right:parseInt(t.marginRight,10)||0};return k.width+=A.left+A.right,k.height+=A.top+A.bottom,function(e,t,r,n,i,o,s,a,l,u,c,h,p){var f;let m=v(e),{size:w,crossAxis:E,crossSize:I,placement:T,crossPlacement:_}=m,S=y(t,a,r,m,u,c,l,h),k=u,A=b(a,l,t,i,o+u,m);if(s&&n[w]>A){let O=v(`${d[T]} ${_}`),R=y(t,a,r,O,u,c,l,h);b(a,l,t,i,o+u,O)>A&&(m=O,S=R,k=u)}let P=g(E,S[E],r[I],a,o);S[E]+=P;let C=null!=(f=S).top?Math.max(0,a.height+a.top+a.scroll.top-(l.top+f.top)-(i.top+i.bottom+o)):Math.max(0,t.top+l.top-(a.top+a.scroll.top)-(i.top+i.bottom+o));p&&p<C&&(C=p),r.height=Math.min(r.height,C),P=g(E,(S=y(t,a,r,m,k,c,l,h))[E],r[I],a,o),S[E]+=P;let x={};return x[E]=t[E]-S[E]+t[I]/2,{position:S,maxHeight:C,arrowOffsetLeft:x.left,arrowOffsetTop:x.top,placement:m.placement}}(r,T,k,{top:o.scrollTop,left:o.scrollLeft,width:o.scrollWidth,height:o.scrollHeight},A,s,a,function(e){let t=0,r=0,n=0,i=0,o={};if("BODY"===e.tagName){var s,a;let l=document.documentElement;t=null!==(s=null==m?void 0:m.width)&&void 0!==s?s:l.clientWidth,r=null!==(a=null==m?void 0:m.height)&&void 0!==a?a:l.clientHeight,o.top=l.scrollTop||e.scrollTop,o.left=l.scrollLeft||e.scrollLeft}else({width:t,height:r,top:n,left:i}=w(e)),o.top=e.scrollTop,o.left=e.scrollLeft;return{width:t,height:r,scroll:o,top:n,left:i}}(l),"BODY"===l.tagName?w(p):E(p,l),u,c,!!I&&"static"!==I,h)}({placement:"rtl"===t?l.replace("start","right").replace("end","left"):l.replace("start","left").replace("end","right"),overlayNode:s.current,targetNode:r.current,scrollNode:a.current,padding:u,shouldFlip:c,boundaryElement:h,offset:p,crossOffset:f,maxHeight:A}))},P);(0,i.bt)(C,P),(0,i.bt)(()=>(window.addEventListener("resize",C,!1),()=>{window.removeEventListener("resize",C,!1)}),[C]);let x=(0,n.useRef)(!1);(0,i.bt)(()=>{let e;let t=()=>{x.current=!0,clearTimeout(e),e=setTimeout(()=>{x.current=!1},500),C()};return null==T||T.addEventListener("resize",t),()=>{null==T||T.removeEventListener("resize",t)}},[C]);let L=(0,n.useCallback)(()=>{x.current||k()},[k,x]);return!function(e){let{triggerRef:t,isOpen:r,onClose:i}=e;(0,n.useEffect)(()=>{if(!r)return;let e=e=>{let r=e.target;if(!t.current||r instanceof Node&&!r.contains(t.current))return;let n=i||I.get(t.current);n&&n()};return window.addEventListener("scroll",e,!0),()=>{window.removeEventListener("scroll",e,!0)}},[r,i,t])}({triggerRef:r,isOpen:S,onClose:k?L:void 0}),{overlayProps:{style:{position:"absolute",zIndex:1e5,...O.position,maxHeight:O.maxHeight}},placement:O.placement,arrowProps:{style:{left:O.arrowOffsetLeft,top:O.arrowOffsetTop}},updatePosition:C}}let S=[];function k(e,t){let{onClose:r,shouldCloseOnBlur:i,isOpen:o,isDismissable:a=!1,isKeyboardDismissDisabled:l=!1,shouldCloseOnInteractOutside:u}=e;(0,n.useEffect)(()=>(o&&S.push(t),()=>{let e=S.indexOf(t);e>=0&&S.splice(e,1)}),[o,t]);let c=()=>{S[S.length-1]===t&&r&&r()},d=e=>{(!u||u(e.target))&&S[S.length-1]===t&&(e.stopPropagation(),e.preventDefault())},h=e=>{(!u||u(e.target))&&(S[S.length-1]===t&&(e.stopPropagation(),e.preventDefault()),c())},p=e=>{"Escape"!==e.key||l||(e.stopPropagation(),e.preventDefault(),c())};(0,s.Fc)({ref:t,onInteractOutside:a?h:null,onInteractOutsideStart:d});let{focusWithinProps:f}=(0,s.L_)({isDisabled:!i,onBlurWithin(e){(!u||u(e.relatedTarget))&&r()}}),m=e=>{e.target===e.currentTarget&&e.preventDefault()};return{overlayProps:{onKeyDown:p,...f},underlayProps:{onPointerDown:m}}}function A(e,t,r){let o,{type:s}=e,{isOpen:a}=t;(0,n.useEffect)(()=>{r&&r.current&&I.set(r.current,t.close)}),"menu"===s?o=!0:"listbox"===s&&(o="listbox");let l=(0,i.Me)();return{triggerProps:{"aria-haspopup":o,"aria-expanded":a,"aria-controls":a?l:null,onPress:t.toggle},overlayProps:{id:l}}}"undefined"!=typeof window&&window.visualViewport;let O=n.createContext(null);function R(e){let{children:t}=e,r=(0,n.useContext)(O),[i,o]=(0,n.useState)(0),s=(0,n.useMemo)(()=>({parent:r,modalCount:i,addModal(){o(e=>e+1),r&&r.addModal()},removeModal(){o(e=>e-1),r&&r.removeModal()}}),[r,i]);return n.createElement(O.Provider,{value:s},t)}function P(e){let t;let{modalProviderProps:r}={modalProviderProps:{"aria-hidden":!!(t=(0,n.useContext)(O))&&t.modalCount>0||null}};return n.createElement("div",{"data-overlay-container":!0,...e,...r})}function C(e){return n.createElement(R,null,n.createElement(P,e))}function x(e){let t=(0,l.Av)(),{portalContainer:r=t?null:document.body,...i}=e;if(n.useEffect(()=>{if(null==r?void 0:r.closest("[data-overlay-container]"))throw Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")},[r]),!r)return null;let o=n.createElement(C,i);return a.createPortal(o,r)}function L(e){let t=(0,n.useContext)(O);if(!t)throw Error("Modal is not contained within a provider");return(0,n.useEffect)(()=>{if((null==e||!e.isDisabled)&&t&&t.parent)return t.parent.addModal(),()=>{t&&t.parent&&t.parent.removeModal()}},[t,t.parent,null==e?void 0:e.isDisabled]),{modalProps:{"data-ismodal":!(null==e?void 0:e.isDisabled)}}}var N={};function D(e){var t;let{onDismiss:r,...s}=e,a=(0,o.qb)((t=N)&&t.__esModule?t.default:t),l=(0,i.bE)(s,a.format("dismiss")),c=()=>{r&&r()};return n.createElement(u.T,null,n.createElement("button",{...l,tabIndex:-1,onClick:c}))}N={"ar-AE":{dismiss:`تجاهل`},"bg-BG":{dismiss:`Отхвърляне`},"cs-CZ":{dismiss:"Odstranit"},"da-DK":{dismiss:"Luk"},"de-DE":{dismiss:`Schlie\xdfen`},"el-GR":{dismiss:`Απόρριψη`},"en-US":{dismiss:"Dismiss"},"es-ES":{dismiss:"Descartar"},"et-EE":{dismiss:`L\xf5peta`},"fi-FI":{dismiss:`Hylk\xe4\xe4`},"fr-FR":{dismiss:"Rejeter"},"he-IL":{dismiss:`התעלם`},"hr-HR":{dismiss:"Odbaci"},"hu-HU":{dismiss:`Elutas\xedt\xe1s`},"it-IT":{dismiss:"Ignora"},"ja-JP":{dismiss:`閉じる`},"ko-KR":{dismiss:`무시`},"lt-LT":{dismiss:"Atmesti"},"lv-LV":{dismiss:`Nerādīt`},"nb-NO":{dismiss:"Lukk"},"nl-NL":{dismiss:"Negeren"},"pl-PL":{dismiss:"Zignoruj"},"pt-BR":{dismiss:"Descartar"},"pt-PT":{dismiss:"Dispensar"},"ro-RO":{dismiss:"Revocare"},"ru-RU":{dismiss:`Пропустить`},"sk-SK":{dismiss:`Zrušiť`},"sl-SI":{dismiss:"Opusti"},"sr-SP":{dismiss:"Odbaci"},"sv-SE":{dismiss:"Avvisa"},"tr-TR":{dismiss:"Kapat"},"uk-UA":{dismiss:`Скасувати`},"zh-CN":{dismiss:`取消`},"zh-TW":{dismiss:`關閉`}},new WeakMap},8831:function(e,t,r){"use strict";r.d(t,{Av:function(){return u},HK:function(){return s},gP:function(){return l}});var n=r(7294);let i={prefix:String(Math.round(1e10*Math.random())),current:0},o=n.createContext(i);function s(e){let t=(0,n.useContext)(o),r=(0,n.useMemo)(()=>({prefix:t===i?"":`${t.prefix}-${++t.current}`,current:0}),[t]);return n.createElement(o.Provider,{value:r},e.children)}let a=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement);function l(e){let t=(0,n.useContext)(o);return t!==i||a||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,n.useMemo)(()=>e||`react-aria${t.prefix}-${++t.current}`,[e])}function u(){let e=(0,n.useContext)(o)!==i,[t,r]=(0,n.useState)(e);return"undefined"!=typeof window&&e&&(0,n.useLayoutEffect)(()=>{r(!1)},[]),t}},3952:function(e,t,r){"use strict";r.d(t,{Ao:function(){return g},Dt:function(){return x},Me:function(){return l},PK:function(){return O},QB:function(){return E},V5:function(){return P},bE:function(){return T},bt:function(){return s},dG:function(){return d},gn:function(){return C},lE:function(){return S},mp:function(){return u},rf:function(){return _},tS:function(){return c},xi:function(){return I},zL:function(){return m}});var n=r(7294),i=r(8831),o=r(6010);let s="undefined"!=typeof window?n.useLayoutEffect:()=>{},a=new Map;function l(e){let[t,r]=(0,n.useState)(e),o=(0,n.useRef)(null),l=(0,i.gP)(t),u=(0,n.useCallback)(e=>{o.current=e},[]);return a.set(l,u),s(()=>()=>{a.delete(l)},[l]),(0,n.useEffect)(()=>{let e=o.current;e&&(o.current=null,r(e))}),l}function u(e=[]){let t=l(),[r,i]=function(e){let[t,r]=(0,n.useState)(e),i=(0,n.useRef)(t),o=(0,n.useRef)(null);i.current=t;let a=(0,n.useRef)(null);a.current=()=>{let e=o.current.next();if(e.done){o.current=null;return}t===e.value?a.current():r(e.value)},s(()=>{o.current&&a.current()});let l=(0,n.useCallback)(e=>{o.current=e(i.current),a.current()},[o,a]);return[t,l]}(t),o=(0,n.useCallback)(()=>{i(function*(){yield t,yield document.getElementById(t)?t:null})},[t,i]);return s(o,[t,o,...e]),r}function c(...e){return(...t)=>{for(let r of e)"function"==typeof r&&r(...t)}}function d(...e){let t={...e[0]};for(let r=1;r<e.length;r++){let n=e[r];for(let i in n){let s=t[i],l=n[i];"function"==typeof s&&"function"==typeof l&&"o"===i[0]&&"n"===i[1]&&i.charCodeAt(2)>=65&&90>=i.charCodeAt(2)?t[i]=c(s,l):("className"===i||"UNSAFE_className"===i)&&"string"==typeof s&&"string"==typeof l?t[i]=(0,o.Z)(s,l):"id"===i&&s&&l?t.id=function(e,t){if(e===t)return e;let r=a.get(e);if(r)return r(t),t;let n=a.get(t);return n?(n(e),e):t}(s,l):t[i]=void 0!==l?l:s}}return t}let h=new Set(["id"]),p=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),f=/^(data-.*)$/;function m(e,t={}){let{labelable:r,propNames:n}=t,i={};for(let o in e)Object.prototype.hasOwnProperty.call(e,o)&&(h.has(o)||r&&p.has(o)||(null==n?void 0:n.has(o))||f.test(o))&&(i[o]=e[o]);return i}function g(e){if(function(){if(null==v){v=!1;try{document.createElement("div").focus({get preventScroll(){return v=!0,!0}})}catch(e){}}return v}())e.focus({preventScroll:!0});else{let t=function(e){for(var t=e.parentNode,r=[],n=document.scrollingElement||document.documentElement;t instanceof HTMLElement&&t!==n;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&r.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return n instanceof HTMLElement&&r.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft}),r}(e);e.focus(),function(e){for(let{element:t,scrollTop:r,scrollLeft:n}of e)t.scrollTop=r,t.scrollLeft=n}(t)}}let v=null,y=new Map,b=new Set;function w(){if("undefined"==typeof window)return;let e=e=>{let r=y.get(e.target);r||(r=new Set,y.set(e.target,r),e.target.addEventListener("transitioncancel",t)),r.add(e.propertyName)},t=e=>{let r=y.get(e.target);if(r&&(r.delete(e.propertyName),0===r.size&&(e.target.removeEventListener("transitioncancel",t),y.delete(e.target)),0===y.size)){for(let n of b)n();b.clear()}};document.body.addEventListener("transitionrun",e),document.body.addEventListener("transitionend",t)}function E(e){requestAnimationFrame(()=>{0===y.size?e():b.add(e)})}function I(){let e=(0,n.useRef)(new Map),t=(0,n.useCallback)((t,r,n,i)=>{let o=(null==i?void 0:i.once)?(...t)=>{e.current.delete(n),n(...t)}:n;e.current.set(n,{type:r,eventTarget:t,fn:o,options:i}),t.addEventListener(r,n,i)},[]),r=(0,n.useCallback)((t,r,n,i)=>{var o;let s=(null===(o=e.current.get(n))||void 0===o?void 0:o.fn)||n;t.removeEventListener(r,s,i),e.current.delete(n)},[]),i=(0,n.useCallback)(()=>{e.current.forEach((e,t)=>{r(e.eventTarget,e.type,t,e.options)})},[r]);return(0,n.useEffect)(()=>i,[i]),{addGlobalListener:t,removeGlobalListener:r,removeAllGlobalListeners:i}}function T(e,t){let{id:r,"aria-label":n,"aria-labelledby":i}=e;return r=l(r),i&&n?i=[...new Set([...i.trim().split(/\s+/),r])].join(" "):i&&(i=i.trim().split(/\s+/).join(" ")),n||i||!t||(n=t),{id:r,"aria-label":n,"aria-labelledby":i}}function _(e,t){let r=(0,n.useRef)(!0);(0,n.useEffect)(()=>{r.current?r.current=!1:e()},t)}function S(e,t){s(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref.current=null}},[e,t])}"undefined"!=typeof document&&("loading"!==document.readyState?w():document.addEventListener("DOMContentLoaded",w)),"undefined"!=typeof window&&window.visualViewport;let k=0,A=new Map;function O(e){let[t,r]=(0,n.useState)(null);return s(()=>{if(!e)return;let t=A.get(e);if(t)r(t.element.id);else{let n=`react-aria-description-${k++}`;r(n);let i=document.createElement("div");i.id=n,i.style.display="none",i.textContent=e,document.body.appendChild(i),t={refCount:0,element:i},A.set(e,t)}return t.refCount++,()=>{0==--t.refCount&&(t.element.remove(),A.delete(e))}},[e]),{"aria-describedby":e?t:void 0}}function R(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function P(){return R(/^Mac/i)}function C(){return R(/^iPhone/i)||R(/^iPad/i)||P()&&navigator.maxTouchPoints>1}function x(){var e,t;return e=/Android/i,"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent))}},4140:function(e,t,r){"use strict";r.d(t,{T:function(){return a}});var n=r(3952),i=r(7294),o=r(7354);let s={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,margin:"0 -1px -1px 0",overflow:"hidden",padding:0,position:"absolute",width:1,whiteSpace:"nowrap"};function a(e){let{children:t,elementType:r="div",isFocusable:a,style:l,...u}=e,{visuallyHiddenProps:c}=function(e={}){let{style:t,isFocusable:r}=e,[n,a]=(0,i.useState)(!1),{focusProps:l}=(0,o.KK)({isDisabled:!r,onFocusChange:a}),u=(0,i.useMemo)(()=>n?t:t?{...s,...t}:s,[n]);return{visuallyHiddenProps:{...l,style:u}}}(e);return i.createElement(r,(0,n.dG)(u,c),t)}},6010:function(e,t,r){"use strict";t.Z=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(i&&(i+=" "),i+=n);else for(r in t)t[r]&&(i&&(i+=" "),i+=r)}return i}(e))&&(n&&(n+=" "),n+=t);return n}},2984:function(e,t,r){var n=r(3454);/*! For license information please see index.browser.js.LICENSE.txt */ (()=>{"use strict";var t={343(e,t,r){r.r(t),r.d(t,{AuthUserContext:()=>i,default:()=>o});var n=r(689),i=(0,n.createContext)();let o=()=>{var e=(0,n.useContext)(i);if(!e)throw Error("When using `useAuthUser`, the page must be wrapped in `withAuthUser`.");return e}},679(e,t,r){var n=r(296),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function l(e){return n.isMemo(e)?s:a[e.$$typeof]||i}a[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[n.Memo]=s;var u=Object.defineProperty,c=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,f=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(f){var i=p(r);i&&i!==f&&e(t,i,n)}var s=c(r);d&&(s=s.concat(d(r)));for(var a=l(t),m=l(r),g=0;g<s.length;++g){var v=s[g];if(!(o[v]||n&&n[v]||m&&m[v]||a&&a[v])){var y=h(r,v);try{u(t,v,y)}catch(b){}}}}return t}},103(e,t){var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,c=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,h=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,f=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,y=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case c:case d:case o:case a:case s:case p:return e;default:switch(e=e&&e.$$typeof){case u:case h:case g:case m:case l:return e;default:return t}}case i:return t}}}function I(e){return E(e)===d}t.AsyncMode=c,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=l,t.Element=n,t.ForwardRef=h,t.Fragment=o,t.Lazy=g,t.Memo=m,t.Portal=i,t.Profiler=a,t.StrictMode=s,t.Suspense=p,t.isAsyncMode=function(e){return I(e)||E(e)===c},t.isConcurrentMode=I,t.isContextConsumer=function(e){return E(e)===u},t.isContextProvider=function(e){return E(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return E(e)===h},t.isFragment=function(e){return E(e)===o},t.isLazy=function(e){return E(e)===g},t.isMemo=function(e){return E(e)===m},t.isPortal=function(e){return E(e)===i},t.isProfiler=function(e){return E(e)===a},t.isStrictMode=function(e){return E(e)===s},t.isSuspense=function(e){return E(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===d||e===a||e===s||e===p||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===l||e.$$typeof===u||e.$$typeof===h||e.$$typeof===y||e.$$typeof===b||e.$$typeof===w||e.$$typeof===v)},t.typeOf=E},296(e,t,r){e.exports=r(103)},324(e){e.exports=r(3977)},610(e){e.exports=r(7908)},853(e){e.exports=r(1163)},689(e){e.exports=r(7294)}},i={};function o(e){var r=i[e];if(void 0!==r)return r.exports;var n=i[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};(()=>{o.d(s,{default:()=>J});let e=r(215);var t,i,a=o.n(e),l=o(679),u=o.n(l);let c=r(8416);var d=o.n(c);let h=r(7156);var p=o.n(h);let f=()=>"undefined"!=typeof window;var m=["aud","auth_time","email","email_verified","exp","firebase","iat","iss","name","phone_number","picture","sub","uid","user_id"],g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return Object.keys(e).forEach(r=>{m.includes(r)||(t[r]=e[r])}),t};function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}let y=function(){var{firebaseUserClientSDK:e,firebaseUserAdminSDK:t,serializedAuthUser:r,clientInitialized:n=!1,token:i=null,claims:s}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if([e,t,r].reduce((e,t)=>t?e+1:e,0)>1)throw Error('createAuthUser cannot receive more than one of the following properties: "firebaseUserClientSDK", "firebaseUserAdminSDK", "serializedAuthUser"');if(n&&(t||r))throw Error('The "clientInitialized" value can only be true when called with the "firebaseUserClientSDK" property or no user.');if(s&&(t||r))throw Error('The "claims" value can only be set in conjunction with the "firebaseUserClientSDK" property.');if(i&&!t)throw Error('The "token" value can only be set if the "firebaseUserAdminSDK" property is defined.');var a={},l=null,u=null,c=!1,h=null,m=null,y=null,b=(I=p()(function*(){return null}),function(){return I.apply(this,arguments)}),w=(T=p()(function*(){}),function(){return T.apply(this,arguments)}),E=null;if(e){if(f()){var I,T,_,S,{getApp:k}=o(324),{getAuth:A,signOut:O}=o(610);S=p()(function*(){return O(A(k()))}),w=function(){return S.apply(this,arguments)}}a=g(s),l=e.uid,u=e.email,c=e.emailVerified,h=e.phoneNumber,m=e.displayName,y=e.photoURL,_=p()(function*(t){return e.getIdToken(t)}),b=function(e){return _.apply(this,arguments)},E=null}else if(t)a=g(t),l=t.uid,u=t.email,c=t.email_verified,h=t.phone_number,m=t.name,y=t.picture,R=p()(function*(){return i}),b=function(){return R.apply(this,arguments)},E=i;else if(r){var R,P,C=JSON.parse(r);a=C.claims,l=C.id,u=C.email,c=C.emailVerified,h=C.phoneNumber,m=C.displayName,y=C.photoURL,P=p()(function*(){return C._token||null}),b=function(){return P.apply(this,arguments)},E=C._token}return{id:l,email:u,emailVerified:c,phoneNumber:h,displayName:m,photoURL:y,claims:a,getIdToken:b,clientInitialized:n,firebaseUser:e||null,signOut:w,serialize:function(){var{includeToken:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return JSON.stringify(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach(function(t){d()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({id:l,claims:a,email:u,emailVerified:c,phoneNumber:h,displayName:m,photoURL:y,clientInitialized:n},e&&{_token:E}))}}};var b=o(689),w=o(324),E=o(610),I=!1;let T=function(){if(I){for(var e=f()?["%cnext-firebase-auth","background: #ffa000; color: #fff; border-radius: 2px; padding: 2px 6px"]:["next-firebase-auth:"],t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];console.log(...e,...r)}};var _,S=["cookies"];function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach(function(t){d()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var O={debug:!1,loginAPIEndpoint:void 0,logoutAPIEndpoint:void 0,onLoginRequestError:void 0,onLogoutRequestError:void 0,tokenChangedHandler:void 0,onVerifyTokenError(){},onTokenRefreshError(){},authPageURL:void 0,appPageURL:void 0,firebaseAdminInitConfig:void 0,firebaseClientInitConfig:void 0,firebaseAuthEmulatorHost:void 0,cookies:{name:void 0,keys:void 0,domain:void 0,httpOnly:!0,maxAge:6048e5,overwrite:!0,path:"/",sameSite:"strict",secure:!0,signed:!0}},R=e=>{var t=[];e.tokenChangedHandler&&(e.loginAPIEndpoint&&t.push('The "loginAPIEndpoint" setting should not be set if you are using a "tokenChangedHandler".'),e.logoutAPIEndpoint&&t.push('The "logoutAPIEndpoint" setting should not be set if you are using a "tokenChangedHandler".'),e.onLoginRequestError&&t.push('The "onLoginRequestError" setting should not be set if you are using a "tokenChangedHandler".'),e.onLogoutRequestError&&t.push('The "onLogoutRequestError" setting should not be set if you are using a "tokenChangedHandler".')),e.firebaseClientInitConfig&&e.firebaseClientInitConfig.apiKey||t.push('The "firebaseClientInitConfig.apiKey" value is required.'),e.firebaseAuthEmulatorHost&&e.firebaseAuthEmulatorHost.startsWith("http")&&t.push("The firebaseAuthEmulatorHost should be set without a prefix (e.g., localhost:9099)");var r=["function","undefined"];0>r.indexOf(typeof e.onVerifyTokenError)&&t.push('Invalid next-firebase-auth options: The "onVerifyTokenError" setting must be a function.'),0>r.indexOf(typeof e.onTokenRefreshError)&&t.push('Invalid next-firebase-auth options: The "onTokenRefreshError" setting must be a function.'),0>r.indexOf(typeof e.onLoginRequestError)&&t.push('Invalid next-firebase-auth options: The "onLoginRequestError" setting must be a function.'),0>r.indexOf(typeof e.onLogoutRequestError)&&t.push('Invalid next-firebase-auth options: The "onLogoutRequestError" setting must be a function.');var{keys:i}=e.cookies,o=i&&i.length&&(!i.filter||i.filter(e=>void 0!==e).length);return f()?(e.tokenChangedHandler||(e.loginAPIEndpoint||t.push('The "loginAPIEndpoint" setting is required.'),e.logoutAPIEndpoint||t.push('The "logoutAPIEndpoint" setting is required.')),e.firebaseAdminInitConfig&&e.firebaseAdminInitConfig.credential&&e.firebaseAdminInitConfig.credential.privateKey&&t.push('The "firebaseAdminInitConfig" private key setting should not be available on the client side.'),o&&t.push('The "cookies.keys" setting should not be available on the client side.')):(e.cookies.name||t.push('The "cookies.name" setting is required on the server side.'),e.firebaseAuthEmulatorHost&&(n.env.FIREBASE_AUTH_EMULATOR_HOST?n.env.FIREBASE_AUTH_EMULATOR_HOST!==e.firebaseAuthEmulatorHost&&t.push('The "FIREBASE_AUTH_EMULATOR_HOST" environment variable should be the same as the host set in the config'):t.push('The "FIREBASE_AUTH_EMULATOR_HOST" environment variable should be set if you are using the "firebaseAuthEmulatorHost" option')),e.cookies.maxAge>12096e5&&t.push('The "cookies.maxAge" setting must be less than two weeks ('.concat(12096e5," ms)."))),{isValid:0===t.length,errors:t}},P=e=>A(A({},e),{},{cookies:A(A({},e.cookies),{},{keys:["hidden"]})},e.firebaseAdminInitConfig&&{firebaseAdminInitConfig:A(A({},e.firebaseAdminInitConfig),e.firebaseAdminInitConfig.credential&&{credential:A(A({},e.firebaseAdminInitConfig.credential),{},{privateKey:"hidden",clientEmail:"hidden"})})}),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};T("[init] Setting config with provided value:",P(e));var{cookies:t={}}=e,r=a()(e,S),n=A(A(A({},O),r),{},{cookies:A(A({},O.cookies),t)}),{isValid:i,errors:o}=R(n);if(!i)throw Error("Invalid next-firebase-auth options: ".concat(o.join(" ")));_=n},x=()=>{if(!_)throw Error("next-firebase-auth must be initialized before rendering.");return _};function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach(function(t){d()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var D=(t=p()(function*(e){var t,{loginAPIEndpoint:r,logoutAPIEndpoint:n,onLoginRequestError:i,onLogoutRequestError:o}=x();if(e.id){if(T("[withAuthUser] Calling the login endpoint."),!(t=yield fetch(r,{method:"POST",headers:{Authorization:yield e.getIdToken()},credentials:"include"})).ok){var s=yield t.json();T("[withAuthUser] The call to the login endpoint failed with status ".concat(t.status," and response: ").concat(JSON.stringify(s)));var a=Error("Received ".concat(t.status," response from login API endpoint: ").concat(JSON.stringify(s)));if(!i)throw a;yield i(a)}}else if(T("[withAuthUser] Calling the logout endpoint."),!(t=yield fetch(n,{method:"POST",credentials:"include"})).ok){var l=yield t.json();T("[withAuthUser] The call to the logout endpoint failed with status ".concat(t.status," and response: ").concat(JSON.stringify(l)));var u=Error("Received ".concat(t.status," response from logout API endpoint: ").concat(JSON.stringify(l)));if(!o)throw u;yield o(u)}return t}),function(e){return t.apply(this,arguments)}),M=(i=p()(function*(e){var{tokenChangedHandler:t}=x(),r=y({firebaseUserClientSDK:e,clientInitialized:!0});return t?(T('[withAuthUser] Calling the custom "tokenChangedHandler" provided in the config.'),t(r)):D(r)}),function(e){return i.apply(this,arguments)});let $=()=>{var[e,t]=(0,b.useState)({user:void 0,claims:{},initialized:!1}),[r,n]=(0,b.useState)(!1);return(0,b.useEffect)(()=>{var e,r=!1,i=(e=p()(function*(e){T("[withAuthUser] The Firebase ID token changed. New Firebase user:",e),n(!1);var i={};e&&(i=g((yield(0,E.getIdTokenResult)(e)).claims)),t({user:e,claims:i,initialized:!0}),yield M(e),r?T("[withAuthUser] Component unmounted before completing the auth API request."):(n(!0),T("[withAuthUser] Completed the auth API request."))}),function(t){return e.apply(this,arguments)}),o=(0,E.onIdTokenChanged)((0,E.getAuth)((0,w.getApp)()),i);return()=>{o(),r=!0}},[]),N(N({},e),{},{authRequestCompleted:r})},U={RENDER:"render",SHOW_LOADER:"showLoader",RETURN_NULL:"returnNull",REDIRECT_TO_LOGIN:"redirectToLogin",REDIRECT_TO_APP:"redirectToApp"};function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach(function(t){d()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var B={basePath:!0,permanent:!1},z=e=>{var{ctx:t,AuthUser:r,redirectDestination:n}=e;if("function"==typeof n){var i=n({ctx:t,AuthUser:r});return z({ctx:t,AuthUser:r,redirectDestination:i})}return"string"==typeof n?j(j({},B),{},{destination:n}):"object"==typeof n?j(j({},B),n):null},H=e=>{var{redirectConfigName:t,redirectURL:r,ctx:n,AuthUser:i}=e;return((e,t)=>{if(!t||"string"!=typeof t&&!("destination"in t))throw Error('The "'.concat(e,'" must be set to a non-empty string, an object literal containing "destination", or a function that returns either.'));return t})(t,z({ctx:n,AuthUser:i,redirectDestination:r||x()[t]}))},W=e=>{var{redirectURL:t,AuthUser:r,ctx:n}=e;return H({redirectConfigName:"authPageURL",redirectURL:t,AuthUser:r,ctx:n})},V=e=>{var{redirectURL:t,AuthUser:r,ctx:n}=e;return H({redirectConfigName:"appPageURL",redirectURL:t,AuthUser:r,ctx:n})},K=["AuthUserSerialized"],q=o(343);let G=e=>{I=!0===e.debug,C(e)},J={init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};G(e),f()&&function(){var{firebaseClientInitConfig:e,firebaseAuthEmulatorHost:t}=x();if((0,w.getApps)().length)T("[init] Did not initialize the Firebase JS SDK because an app already exists.");else{if(!e)throw Error('If not initializing the Firebase JS SDK elsewhere, you must provide "firebaseClientInitConfig" to next-firebase-auth.');(0,w.initializeApp)(e),T("[init] Initialized the Firebase JS SDK.")}t&&(0,E.connectAuthEmulator)((0,E.getAuth)((0,w.getApp)()),"http://".concat(t))}()},withAuthUser:function(){var{whenAuthed:e=U.RENDER,whenUnauthedBeforeInit:t=U.RENDER,whenUnauthedAfterInit:r=U.RENDER,whenAuthedBeforeRedirect:n=U.RETURN_NULL,appPageURL:i=null,authPageURL:s=null,LoaderComponent:l=null}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c=>{T('[withAuthUser] Calling "withAuthUser".');try{h=o(689),({useEffect:p,useCallback:m,useMemo:g}=o(689)),({useRouter:v}=o(853)),{AuthUserContext:b}=o(343)}catch(d){throw"MODULE_NOT_FOUND"===d.code?Error('The dependencies "react" and "next" are required when calling `withAuthUser`.'):d}var h,p,m,g,v,b,w=o=>{var{AuthUserSerialized:u}=o,d=a()(o,K),w=g(()=>y({serializedAuthUser:u}),[u]),{user:E,claims:I,initialized:_,authRequestCompleted:S}=$(),k=g(()=>y({firebaseUserClientSDK:E,clientInitialized:_,claims:I}),[E,_,I]),A=_?k:w,O=!!A.id,R=A.clientInitialized,P=O&&e===U.REDIRECT_TO_APP,C=P&&f&&S,x=!O&&(!R&&t===U.REDIRECT_TO_LOGIN||R&&r===U.REDIRECT_TO_LOGIN),L=x&&f&&(t===U.REDIRECT_TO_LOGIN||S),N=v(),D=m(e=>{var{basePath:t,destination:r}=e;!1===t?window.location.replace(r):N.replace(r)},[N]),M=m(()=>{T("[withAuthUser] Redirecting to app."),D(V({AuthUser:A,redirectURL:i}))},[A,D]),F=m(()=>{T("[withAuthUser] Redirecting to login."),D(W({AuthUser:A,redirectURL:s}))},[A,D]);p(()=>{f()&&(C?M():L&&F())},[C,L,M,F]);var j,B=l?h.createElement(l,null):null,z=h.createElement(b.Provider,{value:A},h.createElement(c,d));return j=P?n===U.RENDER?z:n===U.SHOW_LOADER?B:null:x?t===U.RETURN_NULL?null:t===U.SHOW_LOADER?B:z:O||S?z:t===U.SHOW_LOADER?B:t===U.RETURN_NULL?null:z,T("[withAuthUser] Set AuthUser to:",A),j};return w.displayName="WithAuthUserHOC",u()(w,c),w}},useAuthUser:q.default,withAuthUserSSR(){throw Error('"withAuthUserSSR" can only be called server-side.')},withAuthUserTokenSSR(){throw Error('"withAuthUserTokenSSR" can only be called server-side.')},setAuthCookies(){throw Error('"setAuthCookies" can only be called server-side.')},unsetAuthCookies(){throw Error('"unsetAuthCookies" can only be called server-side.')},verifyIdToken(){throw Error('"verifyIdToken" can only be called server-side.')},AuthAction:U,getUserFromCookies(){throw Error('"getUserFromCookies" can only be called server-side.')}}})(),e.exports=s.default})()},3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(442)}])},5034:function(e,t,r){"use strict";var n=r(2984),i=r(3454);let o=()=>{i.env.FIREBASE_PRIVATE_KEY&&JSON.parse(i.env.FIREBASE_PRIVATE_KEY),(0,n.init)({debug:!1,authPageURL:"/auth/sign_in",appPageURL:"/templates",loginAPIEndpoint:"/api/auth/login",logoutAPIEndpoint:"/api/auth/logout",onLoginRequestError(e){console.error("Login Request Error:",e)},onLogoutRequestError(e){console.error(e)},firebaseAdminInitConfig:{credential:{projectId:"quickvid-ecff0",clientEmail:"firebase-adminsdk-owjmd@quickvid-ecff0.iam.gserviceaccount.com",databaseURL:"https://quickvid-ecff0-default-rtdb.firebaseio.com",privateKey:i.env.FIREBASE_PRIVATE_KEY?JSON.parse(i.env.FIREBASE_PRIVATE_KEY):void 0}},firebaseClientInitConfig:{apiKey:"AIzaSyB02JP7webjXx8lgE-4y7cTgFO2hTY29lg",authDomain:"quickvid-ecff0.firebaseapp.com",projectId:"quickvid-ecff0",measurementId:"G-4CC1PQT901",storageBucket:"quickvid-ecff0.appspot.com"},cookies:{name:"QuickVid",keys:[i.env.COOKIE_SECRET_CURRENT,i.env.COOKIE_SECRET_PREVIOUS],httpOnly:!0,maxAge:10368e5,overwrite:!0,path:"/",sameSite:"strict",secure:!0,signed:!0},onVerifyTokenError(e){console.log("Verify Token Error:",e)},onTokenRefreshError(e){console.log("Token Refresh Error:",e)}})};t.Z=o},442:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var n=r(5893);r(7475);var i=r(7294),o=(r(3454),()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})}),s=(e={debug:!0})=>{var t;if(!("undefined"!=typeof window))return;let r=function(e="auto"){return"auto"===e?"production":e}(e.mode);o(),e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend));let n="development"===r?"https://cdn.vercel-insights.com/v1/script.debug.js":"/_vercel/insights/script.js";if(document.head.querySelector(`script[src*="${n}"]`))return;let i=document.createElement("script");i.src=n,i.defer=!0,"development"===r&&!1===e.debug&&i.setAttribute("data-debug","false"),document.head.appendChild(i)};function a({beforeSend:e,debug:t=!0,mode:r="auto"}){return(0,i.useEffect)(()=>{s({beforeSend:e,debug:t,mode:r})},[e,t,r]),null}var l=r(8831),u=r(8948),c=r(275);let d=(0,c.zY)({"*, *:before, *:after":{boxSizing:"border-box",textRendering:"geometricPrecision",WebkitTapHighlightColor:"transparent"},html:{fontSize:"$base"},body:{margin:0,padding:0,minHeight:"100%",position:"relative",overflowX:"hidden",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",textRendering:"optimizeLegibility",fontSize:"$base",lineHeight:"$md",fontFamily:"$sans"},"html, body":{backgroundColor:"$background",color:"$text"},"p, small":{color:"inherit",letterSpacing:"$tighter",fontWeight:"$normal",fontFamily:"$sans"},p:{fontSize:"$base",lineHeight:"$lg"},small:{margin:0,lineHeight:"$xs",fontSize:"$xs"},b:{fontWeight:"$semibold"},span:{fontSize:"inherit",color:"inherit",fontWeight:"inherit"},img:{maxWidth:"100%"},a:{cursor:"pointer",fontSize:"inherit",WebkitTouchCallout:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitBoxAlign:"center",alignItems:"center",color:"$link",textDecoration:"none"},"a:hover":{textDecoration:"none"},"ul,ol":{padding:0,listStyleType:"none",margin:"$sm $sm $sm $lg",color:"$foreground"},ol:{listStyleType:"decimal"},li:{marginBottom:"$5",fontSize:"$base",lineHeight:"$lg"},"h1,h2,h3,h4,h5,h6":{color:"inherit",margin:"0 0 $5 0"},h1:{letterSpacing:"$tighter",fontSize:"$5xl",lineHeight:"$md",fontWeight:"$bold"},h2:{letterSpacing:"$tighter",fontSize:"$4xl",fontWeight:"$semibold"},h3:{letterSpacing:"$tighter",fontSize:"$2xl",fontWeight:"$semibold"},h4:{letterSpacing:"$tighter",fontSize:"$xl",fontWeight:"$semibold"},h5:{letterSpacing:"$tight",fontSize:"$md",fontWeight:"$semibold"},h6:{letterSpacing:"$tight",fontSize:"$sm",fontWeight:"$semibold"},"button, input, select,textarea":{fontFamily:"inherit",fontSize:"inherit",lineHeight:"inherit",color:"inherit",margin:0},"button:focus, input:focus, select:focus, textarea:focus":{outline:"none"},code:{color:"$code",padding:"$1 $2",borderRadius:"$xs",bg:"$codeLight",fontFamily:"$mono",fontSize:"$sm",whiteSpace:"pre-wrap",transition:"opacity 0.25s ease 0s"},"code:hover":{opacity:.8},pre:{overflow:"auto",whiteSpace:"pre",textAlign:"left",fontSize:"$sm",borderRadius:"$lg",padding:"$md $lg",margin:"$lg 0",fontFamily:"$mono",lineHeight:"$md",webkitOverflowScrolling:"touch"},"pre code":{color:"$foreground",fontSize:"$sm",lineHeight:"$sm",whiteSpace:"pre"},"pre code:before,pre code:after":{display:"none"},"pre p":{margin:0},"pre::-webkit-scrollbar":{display:"none",width:0,height:0,background:"transparent"},hr:{background:"$border",borderColor:"transparent",borderWidth:"0px",borderStyle:"none",height:"1px"},details:{backgroundColor:"$accents1",border:"none"},"details:focus, details:hover, details:active":{outline:"none"},summary:{cursor:"pointer",userSelect:"none",listStyle:"none",outline:"none"},"summary::-webkit-details-marker, summary::before":{display:"none"},"summary::-moz-list-bullet":{fontSize:0},"summary:focus, summary:hover, summary:active":{outline:"none",listStyle:"none"},"::selection":{backgroundColor:"$selection"},blockquote:{padding:"$md $lg",color:"$accents7",backgroundColor:"$accents0",borderRadius:"$lg",margin:"$10 0"},"blockquote *:first-child":{marginTop:0},"blockquote *:last-child":{marginBottom:0},kbd:{width:"fit-content",textAlign:"center",display:"inline-block",color:"$accents8",bg:"$accents0",border:"1px solid $border",boxShadow:"0 0 1px 0 rgb(0 0 0 / 14%)",fontFamily:"$sans",borderRadius:"5px",padding:"$1 $3",mx:"$1",lineHeight:"$sm",fontSize:"$sm"},"kbd + kbd":{ml:"$2"},"dl, dd, hr, figure, p":{margin:0}}),h=({children:e})=>(d(),(0,n.jsx)(i.Fragment,{children:e})),p=i.memo(h);p.flush=()=>(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:(0,c.Gc)()},id:"stitches"});var f=r(88),m=r(8738),g=r(2532),v=r(6680),y=r(2242),b=(0,f.Z)(({theme:e,disableBaseline:t,children:r})=>{let{isBrowser:o}=(0,g.Z)(),[s,a]=(0,i.useState)(y.O.type),c=e=>{a(t=>t!==e?e:t)},d=e=>{let t=(0,v.Rm)(e);t&&c(t)},h=(0,i.useMemo)(()=>{let e=o?(0,v.jv)():{},t=function e(t){for(var r,n,i=Array.prototype.slice.call(arguments,1);i.length;)for(n in r=i.shift())r.hasOwnProperty(n)&&("object"==typeof t[n]&&t[n]&&"[object Array]"!==Object.prototype.toString.call(t[n])&&"object"==typeof r[n]&&null!==r[n]?t[n]=e({},t[n],r[n]):t[n]=r[n]);return t}((0,m.Zw)(y.O.theme),e),r=(0,v.Yo)(s);return{theme:t,type:r,isDark:"dark"===r}},[s,o]);return(0,i.useEffect)(()=>{var e,t,r;d(null==(e=document)?void 0:e.documentElement);let n=new MutationObserver(e=>{var t,r,n,i,o;if(e&&e.length>0&&"BODY"===(null==(t=e[0])?void 0:t.target.nodeName)){let s=null==(r=document)||null==(n=r.body)||null==(i=n.dataset)?void 0:i.theme;s&&c(s)}else d(null==(o=document)?void 0:o.documentElement)});return n.observe(null==(t=document)?void 0:t.documentElement,{attributes:!0,attributeFilter:["data-theme","style"]}),n.observe(null==(r=document)?void 0:r.body,{attributes:!0,attributeFilter:["data-theme","style"]}),()=>n.disconnect()},[]),(0,i.useEffect)(()=>{o&&e&&null!=e&&e.className&&((0,v.Lr)(e.className),c((0,v.Yo)(e.className)))},[o,e]),(0,n.jsx)(l.HK,{children:(0,n.jsx)(u.N3,{children:(0,n.jsxs)(y.Z.Provider,{value:h,children:[!t&&(0,n.jsx)(p,{}),r]})})})},{disableBaseline:!1}),w=r(9008),E=r.n(w),I=r(4298),T=r.n(I);(0,r(5034).Z)();var _=function(e){let{Component:t,pageProps:r}=e;return(0,n.jsxs)(b,{children:[(0,n.jsx)(T(),{src:"https://www.googletagmanager.com/gtag/js?id=G-NG802ZW0Q0",strategy:"afterInteractive"}),(0,n.jsx)(T(),{id:"google-analytics",strategy:"afterInteractive",children:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){window.dataLayer.push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', 'G-NG802ZW0Q0');\n        "}),(0,n.jsxs)(E(),{children:[(0,n.jsx)("title",{children:"QuickVid"}),(0,n.jsx)("meta",{name:"description",content:"Generate a Youtube shorts 10x faster"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(t,{...r}),(0,n.jsx)(a,{})]})}},7475:function(){},7663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(n){r=s}}();var l=[],u=!1,c=-1;function d(){u&&n&&(u=!1,n.length?l=n.concat(l):c=-1,l.length&&h())}function h(){if(!u){var e=a(d);u=!0;for(var t=l.length;t;){for(n=l,l=[];++c<t;)n&&n[c].run();c=-1,t=l.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new p(e,t)),1!==l.length||u||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=f,i.addListener=f,i.once=f,i.off=f,i.removeListener=f,i.removeAllListeners=f,i.emit=f,i.prependListener=f,i.prependOnceListener=f,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},s=!0;try{t[e](o,o.exports,n),s=!1}finally{s&&delete r[e]}return o.exports}n.ab="//";var i=n(229);e.exports=i}()},9008:function(e,t,r){e.exports=r(3121)},1163:function(e,t,r){e.exports=r(880)},4298:function(e,t,r){e.exports=r(3573)},7156:function(e){function t(e,t,r,n,i,o,s){try{var a=e[o](s),l=a.value}catch(u){r(u);return}a.done?t(l):Promise.resolve(l).then(n,i)}e.exports=function(e){return function(){var r=this,n=arguments;return new Promise(function(i,o){var s=e.apply(r,n);function a(e){t(s,i,o,a,l,"next",e)}function l(e){t(s,i,o,a,l,"throw",e)}a(void 0)})}},e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},215:function(e,t,r){var n=r(7071);e.exports=function(e,t){if(null==e)return{};var r,i,o=n(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i},e.exports.__esModule=!0,e.exports.default=e.exports},5816:function(e,t,r){"use strict";let n,i;r.d(t,{ZR:function(){return l.ZR},Jn:function(){return U},l4:function(){return k},H9:function(){return P},Vr:function(){return C},Af:function(){return O},Z8:function(){return D},lz:function(){return R},qX:function(){return L},Xd:function(){return x},wN:function(){return N},P2:function(){return z},Mq:function(){return j},C6:function(){return B},ZF:function(){return F},TP:function(){return W},KN:function(){return H},Ub:function(){return V}});var o,s=r(8463),a=r(3333),l=r(4444);let u=(e,t)=>t.some(t=>e instanceof t),c=new WeakMap,d=new WeakMap,h=new WeakMap,p=new WeakMap,f=new WeakMap,m={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||h.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return g(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function g(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(g(e.result)),n()},o=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(t=>{t instanceof IDBCursor&&c.set(t,e)}).catch(()=>{}),f.set(t,e),t}(e);if(p.has(e))return p.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(v(this),e),g(c.get(this))}:function(...e){return g(t.apply(v(this),e))}:function(e,...r){let n=t.call(v(this),e,...r);return h.set(n,e.sort?e.sort():[e]),g(n)}:(t instanceof IDBTransaction&&function(e){if(d.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),n()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});d.set(e,t)}(t),u(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,m):t;return r!==e&&(p.set(e,r),f.set(r,e)),r}let v=e=>f.get(e),y=["get","getKey","getAll","getAllKeys","count"],b=["put","add","delete","clear"],w=new Map;function E(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(w.get(t))return w.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=b.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||y.includes(r)))return;let o=async function(e,...t){let o=this.transaction(e,i?"readwrite":"readonly"),s=o.store;return n&&(s=s.index(t.shift())),(await Promise.all([s[r](...t),i&&o.done]))[0]};return w.set(t,o),o}m={...o=m,get:(e,t,r)=>E(e,t)||o.get(e,t,r),has:(e,t)=>!!E(e,t)||o.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class I{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let T="@firebase/app",_="0.9.0",S=new a.Yd("@firebase/app"),k="[DEFAULT]",A={[T]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},O=new Map,R=new Map;function P(e,t){try{e.container.addComponent(t)}catch(r){S.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function C(e,t){e.container.addOrOverwriteComponent(t)}function x(e){let t=e.name;if(R.has(t))return S.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(R.set(t,e),O.values()))P(r,e);return!0}function L(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function N(e,t,r=k){L(e,t).clearInstance(r)}function D(){R.clear()}let M=new l.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ${constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new s.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw M.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let U="9.15.0";function F(e,t={}){let r=e;if("object"!=typeof t){let n=t;t={name:n}}let i=Object.assign({name:k,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw M.create("bad-app-name",{appName:String(o)});if(r||(r=(0,l.aH)()),!r)throw M.create("no-options");let a=O.get(o);if(a){if((0,l.vZ)(r,a.options)&&(0,l.vZ)(i,a.config))return a;throw M.create("duplicate-app",{appName:o})}let u=new s.H0(o);for(let c of R.values())u.addComponent(c);let d=new $(r,i,u);return O.set(o,d),d}function j(e=k){let t=O.get(e);if(!t&&e===k)return F();if(!t)throw M.create("no-app",{appName:e});return t}function B(){return Array.from(O.values())}async function z(e){let t=e.name;O.has(t)&&(O.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function H(e,t,r){var n;let i=null!==(n=A[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){let l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),S.warn(l.join(" "));return}x(new s.wA(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}function W(e,t){if(null!==e&&"function"!=typeof e)throw M.create("invalid-log-argument");(0,a.Am)(e,t)}function V(e){(0,a.Ub)(e)}let K="firebase-heartbeat-store",q=null;function G(){return q||(q=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:o}={}){let s=indexedDB.open(e,1),a=g(s);return n&&s.addEventListener("upgradeneeded",e=>{n(g(s.result),e.oldVersion,e.newVersion,g(s.transaction))}),r&&s.addEventListener("blocked",()=>r()),a.then(e=>{o&&e.addEventListener("close",()=>o()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade(e,t){0===t&&e.createObjectStore(K)}}).catch(e=>{throw M.create("idb-open",{originalErrorMessage:e.message})})),q}async function J(e){try{let t=await G();return t.transaction(K).objectStore(K).get(Y(e))}catch(n){if(n instanceof l.ZR)S.warn(n.message);else{let r=M.create("idb-get",{originalErrorMessage:null==n?void 0:n.message});S.warn(r.message)}}}async function Z(e,t){try{let r=await G(),n=r.transaction(K,"readwrite"),i=n.objectStore(K);return await i.put(t,Y(e)),n.done}catch(s){if(s instanceof l.ZR)S.warn(s.message);else{let o=M.create("idb-set",{originalErrorMessage:null==s?void 0:s.message});S.warn(o.message)}}}function Y(e){return`${e.name}!${e.options.appId}`}class X{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new ee(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=Q();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),r=Date.now();return r-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=Q(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let o=r.find(e=>e.agent===i.agent);if(o){if(o.dates.push(i.date),et(r)>t){o.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),et(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=(0,l.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function Q(){let e=new Date;return e.toISOString().substring(0,10)}class ee{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,l.hl)()&&(0,l.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let t=await J(this.app);return t||{heartbeats:[]}}}async overwrite(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let n=await this.read();return Z(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let n=await this.read();return Z(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function et(e){return(0,l.L)(JSON.stringify({version:2,heartbeats:e})).length}x(new s.wA("platform-logger",e=>new I(e),"PRIVATE")),x(new s.wA("heartbeat",e=>new X(e),"PRIVATE")),H(T,_,""),H(T,_,"esm2017"),H("fire-js","")},8463:function(e,t,r){"use strict";r.d(t,{H0:function(){return a},wA:function(){return i}});var n=r(4444);class i{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let o="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new n.BH;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch(o){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(let[r,n]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(r);try{let s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch(a){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[i,o]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(i);r===s&&o.resolve(n)}return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let o=this.instances.get(n);return o&&e(o,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===o?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(n){}return r||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,r){"use strict";var n,i;r.d(t,{Am:function(){return h},Ub:function(){return d},Yd:function(){return c},in:function(){return n}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let o=[];(i=n||(n={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let s={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},a=n.INFO,l={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},u=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=l[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class c{constructor(e){this.name=e,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,o.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}function d(e){o.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(let r of o){let i=null;t&&t.level&&(i=s[t.level]),null===e?r.userLogHandler=null:r.userLogHandler=(t,r,...o)=>{let s=o.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");r>=(null!=i?i:t.logLevel)&&e({level:n[r].toLowerCase(),message:s,args:o,type:t.name})}}}},6744:function(e,t,r){"use strict";r.d(t,{E6:function(){return a},Th:function(){return X}});var n=r(7294),i="colors",o="sizes",s="space",a={gap:s,gridGap:s,columnGap:s,gridColumnGap:s,rowGap:s,gridRowGap:s,inset:s,insetBlock:s,insetBlockEnd:s,insetBlockStart:s,insetInline:s,insetInlineEnd:s,insetInlineStart:s,margin:s,marginTop:s,marginRight:s,marginBottom:s,marginLeft:s,marginBlock:s,marginBlockEnd:s,marginBlockStart:s,marginInline:s,marginInlineEnd:s,marginInlineStart:s,padding:s,paddingTop:s,paddingRight:s,paddingBottom:s,paddingLeft:s,paddingBlock:s,paddingBlockEnd:s,paddingBlockStart:s,paddingInline:s,paddingInlineEnd:s,paddingInlineStart:s,top:s,right:s,bottom:s,left:s,scrollMargin:s,scrollMarginTop:s,scrollMarginRight:s,scrollMarginBottom:s,scrollMarginLeft:s,scrollMarginX:s,scrollMarginY:s,scrollMarginBlock:s,scrollMarginBlockEnd:s,scrollMarginBlockStart:s,scrollMarginInline:s,scrollMarginInlineEnd:s,scrollMarginInlineStart:s,scrollPadding:s,scrollPaddingTop:s,scrollPaddingRight:s,scrollPaddingBottom:s,scrollPaddingLeft:s,scrollPaddingX:s,scrollPaddingY:s,scrollPaddingBlock:s,scrollPaddingBlockEnd:s,scrollPaddingBlockStart:s,scrollPaddingInline:s,scrollPaddingInlineEnd:s,scrollPaddingInlineStart:s,fontSize:"fontSizes",background:i,backgroundColor:i,backgroundImage:i,borderImage:i,border:i,borderBlock:i,borderBlockEnd:i,borderBlockStart:i,borderBottom:i,borderBottomColor:i,borderColor:i,borderInline:i,borderInlineEnd:i,borderInlineStart:i,borderLeft:i,borderLeftColor:i,borderRight:i,borderRightColor:i,borderTop:i,borderTopColor:i,caretColor:i,color:i,columnRuleColor:i,fill:i,outline:i,outlineColor:i,stroke:i,textDecorationColor:i,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:o,minBlockSize:o,maxBlockSize:o,inlineSize:o,minInlineSize:o,maxInlineSize:o,width:o,minWidth:o,maxWidth:o,height:o,minHeight:o,maxHeight:o,flexBasis:o,gridTemplateColumns:o,gridTemplateRows:o,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},l=(e,t)=>"function"==typeof t?{"()":Function.prototype.toString.call(t)}:t,u=()=>{let e=Object.create(null);return(t,r,...n)=>{let i=JSON.stringify(t,l);return i in e?e[i]:e[i]=r(t,...n)}},c=Symbol.for("sxs.internal"),d=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),h=e=>{for(let t in e)return!0;return!1},{hasOwnProperty:p}=Object.prototype,f=e=>e.includes("-")?e:e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase()),m=/\s+(?![^()]*\))/,g=e=>t=>e(..."string"==typeof t?String(t).split(m):[t]),v={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:g((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:g((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:g((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:g((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:g((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:g((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},y=/([\d.]+)([^]*)/,b=(e,t)=>e.length?e.reduce((e,r)=>(e.push(...t.map(e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(e)?`:is(${r})`:r):r+" "+e)),e),[]):t,w=(e,t)=>e in E&&"string"==typeof t?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(t,r,n,i)=>r+("stretch"===n?`-moz-available${i};${f(e)}:${r}-webkit-fill-available`:`-moz-fit-content${i};${f(e)}:${r}fit-content`)+i):String(t),E={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},I=e=>e?e+"-":"",T=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(e,n,i,o,s)=>"$"==o==!!i?e:(n||"--"==o?"calc(":"")+"var(--"+("$"===o?I(t)+(s.includes("$")?"":I(r))+s.replace(/\$/g,"-"):s)+")"+(n||"--"==o?"*"+(n||"")+(i||"1")+")":"")),_=/\s*,\s*(?![^()]*\))/,S=Object.prototype.toString,k=(e,t,r,n,i)=>{let o,s,a;let l=(e,t,r)=>{let u,c;let d=e=>{var h;for(u in e){let p=64===u.charCodeAt(0),m=p&&Array.isArray(e[u])?e[u]:[e[u]];for(c of m){let g=/[A-Z]/.test(h=u)?h:h.replace(/-[^]/g,e=>e[1].toUpperCase()),E="object"==typeof c&&c&&c.toString===S&&(!n.utils[g]||!t.length);if(g in n.utils&&!E){let k=n.utils[g];if(k!==s){s=k,d(k(c)),s=null;continue}}else if(g in v){let R=v[g];if(R!==a){a=R,d(R(c)),a=null;continue}}if(p&&(u=(u.slice(1) in n.media?"@media "+n.media[u.slice(1)]:u).replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(e,t,r,n,i,o)=>{let s=y.test(t),a=.0625*(s?-1:1),[l,u]=s?[n,t]:[t,n];return"("+("="===r[0]?"":">"===r[0]===s?"max-":"min-")+l+":"+("="!==r[0]&&1===r.length?u.replace(y,(e,t,n)=>Number(t)+a*(">"===r?1:-1)+n):u)+(i?") and ("+(">"===i[0]?"min-":"max-")+l+":"+(1===i.length?o.replace(y,(e,t,r)=>Number(t)+a*(">"===i?-1:1)+r):o):"")+")"})),E){let P=p?r.concat(u):[...r],C=p?[...t]:b(t,u.split(_));void 0!==o&&i(A(...o)),o=void 0,l(c,C,P)}else void 0===o&&(o=[[],t,r]),u=p||36!==u.charCodeAt(0)?u:`--${I(n.prefix)}${u.slice(1).replace(/\$/g,"-")}`,c=E?c:"number"==typeof c?c&&g in O?String(c)+"px":String(c):T(w(g,null==c?"":c),n.prefix,n.themeMap[g]),o[0].push(`${p?`${u} `:`${f(u)}:`}${c}`)}}};d(e),void 0!==o&&i(A(...o)),o=void 0};l(e,t,r)},A=(e,t,r)=>`${r.map(e=>`${e}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,O={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},R=e=>String.fromCharCode(e+(e>25?39:97)),P=e=>(e=>{let t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=R(t%52)+r;return R(t%52)+r})(((e,t)=>{let r=t.length;for(;r;)e=33*e^t.charCodeAt(--r);return e})(5381,JSON.stringify(e))>>>0),C=["themed","global","styled","onevar","resonevar","allvar","inline"],x=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch(t){return!1}},L=e=>{let t;let r=()=>{let{cssRules:e}=t.sheet;return[].map.call(e,(r,n)=>{let{cssText:i}=r,o="";if(i.startsWith("--sxs"))return"";if(e[n-1]&&(o=e[n-1].cssText).startsWith("--sxs")){if(!r.cssRules.length)return"";for(let s in t.rules)if(t.rules[s].group===r)return`--sxs{--sxs:${[...t.rules[s].cache].join(" ")}}${i}`;return r.cssRules.length?`${o}${i}`:""}return i}).join("")},n=()=>{if(t){let{rules:i,sheet:o}=t;if(!o.deleteRule){for(;3===Object(Object(o.cssRules)[0]).type;)o.cssRules.splice(0,1);o.cssRules=[]}for(let s in i)delete i[s]}let a=Object(e).styleSheets||[];for(let l of a)if(x(l)){for(let u=0,c=l.cssRules;c[u];++u){let d=Object(c[u]);if(1!==d.type)continue;let h=Object(c[u+1]);if(4!==h.type)continue;++u;let{cssText:p}=d;if(!p.startsWith("--sxs"))continue;let f=p.slice(14,-3).trim().split(/\s+/),m=C[f[0]];m&&(t||(t={sheet:l,reset:n,rules:{},toString:r}),t.rules[m]={group:h,index:u,cache:new Set(f)})}if(t)break}if(!t){let g=(e,t)=>({type:t,cssRules:[],insertRule(e,t){this.cssRules.splice(t,0,g(e,{import:3,undefined:1}[(e.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return"@media{}"===e?`@media{${[].map.call(this.cssRules,e=>e.cssText).join("")}}`:e}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:g("","text/css"),rules:{},reset:n,toString:r}}let{sheet:v,rules:y}=t;for(let b=C.length-1;b>=0;--b){let w=C[b];if(!y[w]){let E=C[b+1],I=y[E]?y[E].index:v.cssRules.length;v.insertRule("@media{}",I),v.insertRule(`--sxs{--sxs:${b}}`,I),y[w]={group:v.cssRules[I+1],index:I,cache:new Set([b])}}N(y[w])}};return n(),t},N=e=>{let t=e.group,r=t.cssRules.length;e.apply=e=>{try{t.insertRule(e,r),++r}catch(n){}}},D=Symbol(),M=u(),$=(e,t)=>M(e,()=>(...r)=>{let n={type:null,composers:new Set};for(let i of r)if(null!=i){if(i[c])for(let o of(null==n.type&&(n.type=i[c].type),i[c].composers))n.composers.add(o);else i.constructor!==Object||i.$$typeof?null==n.type&&(n.type=i):n.composers.add(U(i,e))}return null==n.type&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),F(e,n,t)}),U=({variants:e,compoundVariants:t,defaultVariants:r,...n},i)=>{var o;let s=`${I(i.prefix)}c-${P(n)}`,a=[],l=[],u=Object.create(null),c=[];for(let d in r)u[d]=String(r[d]);if("object"==typeof e&&e)for(let f in e){o=f,p.call(u,o)||(u[f]="undefined");let m=e[f];for(let g in m){let v={[f]:String(g)};"undefined"===String(g)&&c.push(f);let y=m[g],b=[v,y,!h(y)];a.push(b)}}if("object"==typeof t&&t)for(let w of t){let{css:E,...T}=w;for(let _ in E="object"==typeof E&&E||{},T)T[_]=String(T[_]);let S=[T,E,!h(E)];l.push(S)}return[s,n,a,l,u,c]},F=(e,t,r)=>{let[n,i,o,s]=j(t.composers),a="function"==typeof t.type||t.type.$$typeof?(e=>{function t(){for(let r=0;r<t[D].length;r++){let[n,i]=t[D][r];e.rules[n].apply(i)}return t[D]=[],null}return t[D]=[],t.rules={},C.forEach(e=>t.rules[e]={apply:r=>t[D].push([e,r])}),t})(r):null,l=(a||r).rules,u=`.${n}${i.length>1?`:where(.${i.slice(1).join(".")})`:""}`,h=c=>{c="object"==typeof c&&c||z;let{css:d,...h}=c,p={};for(let f in o)if(delete h[f],f in c){let m=c[f];"object"==typeof m&&m?p[f]={"@initial":o[f],...m}:(m=String(m),p[f]="undefined"!==m||s.has(f)?m:o[f])}else p[f]=o[f];let g=new Set([...i]);for(let[v,y,b,w]of t.composers){r.rules.styled.cache.has(v)||(r.rules.styled.cache.add(v),k(y,[`.${v}`],[],e,e=>{l.styled.apply(e)}));let E=B(b,p,e.media),I=B(w,p,e.media,!0);for(let T of E)if(void 0!==T)for(let[_,S,A]of T){let O=`${v}-${P(S)}-${_}`;g.add(O);let R=(A?r.rules.resonevar:r.rules.onevar).cache,C=A?l.resonevar:l.onevar;R.has(O)||(R.add(O),k(S,[`.${O}`],[],e,e=>{C.apply(e)}))}for(let x of I)if(void 0!==x)for(let[L,N]of x){let D=`${v}-${P(N)}-${L}`;g.add(D),r.rules.allvar.cache.has(D)||(r.rules.allvar.cache.add(D),k(N,[`.${D}`],[],e,e=>{l.allvar.apply(e)}))}}if("object"==typeof d&&d){let M=`${n}-i${P(d)}-css`;g.add(M),r.rules.inline.cache.has(M)||(r.rules.inline.cache.add(M),k(d,[`.${M}`],[],e,e=>{l.inline.apply(e)}))}for(let $ of String(c.className||"").trim().split(/\s+/))$&&g.add($);let U=h.className=[...g].join(" ");return{type:t.type,className:U,selector:u,props:h,toString:()=>U,deferredInjector:a}};return d(h,{className:n,selector:u,[c]:t,toString:()=>(r.rules.styled.cache.has(n)||h(),n)})},j=e=>{let t="",r=[],n={},i=[];for(let[o,,,,s,a]of e)for(let l in""===t&&(t=o),r.push(o),i.push(...a),s){let u=s[l];(void 0===n[l]||"undefined"!==u||a.includes(u))&&(n[l]=u)}return[t,r,n,new Set(i)]},B=(e,t,r,n)=>{let i=[];e:for(let[o,s,a]of e){if(a)continue;let l,u=0,c=!1;for(l in o){let d=o[l],h=t[l];if(h!==d){if("object"!=typeof h||!h)continue e;{let p,f,m=0;for(let g in h){if(d===String(h[g])){if("@initial"!==g){let v=g.slice(1);(f=f||[]).push(v in r?r[v]:g.replace(/^@media ?/,"")),c=!0}u+=m,p=!0}++m}if(f&&f.length&&(s={["@media "+f.join(", ")]:s}),!p)continue e}}}(i[u]=i[u]||[]).push([n?"cv":`${l}-${o[l]}`,s,c])}return i},z={},H=u(),W=(e,t)=>H(e,()=>(...r)=>{let n=()=>{for(let n of r){let i=P(n="object"==typeof n&&n||{});if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in n){let o=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let s of[].concat(n["@import"]))s=s.includes('"')||s.includes("'")?s:`"${s}"`,t.sheet.insertRule(`@import ${s};`,o++);delete n["@import"]}k(n,[],[],e,e=>{t.rules.global.apply(e)})}}return""};return d(n,{toString:n})}),V=u(),K=(e,t)=>V(e,()=>r=>{let n=`${I(e.prefix)}k-${P(r)}`,i=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);let i=[];k(r,[],[],e,e=>i.push(e));let o=`@keyframes ${n}{${i.join("")}}`;t.rules.global.apply(o)}return n};return d(i,{get name(){return i()},toString:i})}),q=class{constructor(e,t,r,n){this.token=null==e?"":String(e),this.value=null==t?"":String(t),this.scale=null==r?"":String(r),this.prefix=null==n?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+I(this.prefix)+I(this.scale)+this.token}toString(){return this.computedValue}},G=u(),J=(e,t)=>G(e,()=>(r,n)=>{n="object"==typeof r&&r||Object(n);let i=`.${r=(r="string"==typeof r?r:"")||`${I(e.prefix)}t-${P(n)}`}`,o={},s=[];for(let a in n)for(let l in o[a]={},n[a]){let u=`--${I(e.prefix)}${a}-${l}`,c=T(String(n[a][l]),e.prefix,a);o[a][l]=new q(l,c,a,e.prefix),s.push(`${u}:${c}`)}let d=()=>{if(s.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);let i=`${n===e.theme?":root,":""}.${r}{${s.join(";")}}`;t.rules.themed.apply(i)}return r};return{...o,get className(){return d()},selector:i,toString:d}}),Z=u(),Y=u(),X=e=>{let t=(e=>{let t=!1,r=Z(e,e=>{t=!0;let r="prefix"in(e="object"==typeof e&&e||{})?String(e.prefix):"",n="object"==typeof e.media&&e.media||{},i="object"==typeof e.root?e.root||null:globalThis.document||null,o="object"==typeof e.theme&&e.theme||{},s={prefix:r,media:n,theme:o,themeMap:"object"==typeof e.themeMap&&e.themeMap||{...a},utils:"object"==typeof e.utils&&e.utils||{}},l=L(i),u={css:$(s,l),globalCss:W(s,l),keyframes:K(s,l),createTheme:J(s,l),reset(){l.reset(),u.theme.toString()},theme:{},sheet:l,config:s,prefix:r,getCssText:l.toString,toString:l.toString};return String(u.theme=u.createTheme(o)),u});return t||r.reset(),r})(e);return t.styled=(({config:e,sheet:t})=>Y(e,()=>{let r=$(e,t);return(...e)=>{let t=r(...e),i=t[c].type,o=n.forwardRef((e,r)=>{let o=e&&e.as||i,{props:s,deferredInjector:a}=t(e);return delete s.as,s.ref=r,a?n.createElement(n.Fragment,null,n.createElement(o,s),n.createElement(a,null)):n.createElement(o,s)});return o.className=t.className,o.displayName=`Styled.${i.displayName||i.name||i}`,o.selector=t.selector,o.toString=()=>t.selector,o[c]=t[c],o}}))(t),t}},3977:function(e,t,r){"use strict";r.r(t),r.d(t,{FirebaseError:function(){return n.ZR},SDK_VERSION:function(){return n.Jn},_DEFAULT_ENTRY_NAME:function(){return n.l4},_addComponent:function(){return n.H9},_addOrOverwriteComponent:function(){return n.Vr},_apps:function(){return n.Af},_clearComponents:function(){return n.Z8},_components:function(){return n.lz},_getProvider:function(){return n.qX},_registerComponent:function(){return n.Xd},_removeServiceInstance:function(){return n.wN},deleteApp:function(){return n.P2},getApp:function(){return n.Mq},getApps:function(){return n.C6},initializeApp:function(){return n.ZF},onLog:function(){return n.TP},registerVersion:function(){return n.KN},setLogLevel:function(){return n.Ub}});var n=r(5816);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (0,n.KN)("firebase","9.15.0","app")},7908:function(e,t,r){"use strict";r.r(t),r.d(t,{ActionCodeOperation:function(){return p},ActionCodeURL:function(){return eX},AuthCredential:function(){return eC},AuthErrorCodes:function(){return y},EmailAuthCredential:function(){return eH},EmailAuthProvider:function(){return e0},FacebookAuthProvider:function(){return e5},FactorId:function(){return u},GithubAuthProvider:function(){return e6},GoogleAuthProvider:function(){return e3},OAuthCredential:function(){return eV},OAuthProvider:function(){return e4},OperationType:function(){return h},PhoneAuthCredential:function(){return eY},PhoneAuthProvider:function(){return r$},PhoneMultiFactorGenerator:function(){return nI},ProviderId:function(){return c},RecaptchaVerifier:function(){return rP},SAMLAuthProvider:function(){return e9},SignInMethod:function(){return d},TwitterAuthProvider:function(){return e7},applyActionCode:function(){return tI},beforeAuthStateChanged:function(){return tG},browserLocalPersistence:function(){return t7},browserPopupRedirectResolver:function(){return nb},browserSessionPersistence:function(){return rt},checkActionCode:function(){return tT},confirmPasswordReset:function(){return tE},connectAuthEmulator:function(){return eO},createUserWithEmailAndPassword:function(){return tS},debugErrorMap:function(){return m},deleteUser:function(){return tQ},fetchSignInMethodsForEmail:function(){return tC},getAdditionalUserInfo:function(){return tV},getAuth:function(){return nR},getIdToken:function(){return Z},getIdTokenResult:function(){return Y},getMultiFactorResolver:function(){return t2},getRedirectResult:function(){return r9},inMemoryPersistence:function(){return ec},indexedDBLocalPersistence:function(){return ry},initializeAuth:function(){return P},isSignInWithEmailLink:function(){return tO},linkWithCredential:function(){return tp},linkWithPhoneNumber:function(){return rL},linkWithPopup:function(){return rq},linkWithRedirect:function(){return r6},multiFactor:function(){return t3},onAuthStateChanged:function(){return tJ},onIdTokenChanged:function(){return tq},parseActionCodeURL:function(){return eQ},prodErrorMap:function(){return g},reauthenticateWithCredential:function(){return tf},reauthenticateWithPhoneNumber:function(){return rN},reauthenticateWithPopup:function(){return rK},reauthenticateWithRedirect:function(){return r5},reload:function(){return ei},sendEmailVerification:function(){return tx},sendPasswordResetEmail:function(){return tw},sendSignInLinkToEmail:function(){return tA},setPersistence:function(){return tK},signInAnonymously:function(){return tn},signInWithCredential:function(){return th},signInWithCustomToken:function(){return tg},signInWithEmailAndPassword:function(){return tk},signInWithEmailLink:function(){return tR},signInWithPhoneNumber:function(){return rx},signInWithPopup:function(){return rV},signInWithRedirect:function(){return r2},signOut:function(){return tX},unlink:function(){return ta},updateCurrentUser:function(){return tY},updateEmail:function(){return tM},updatePassword:function(){return t$},updatePhoneNumber:function(){return rM},updateProfile:function(){return tD},useDeviceLanguage:function(){return tZ},verifyBeforeUpdateEmail:function(){return tL},verifyPasswordResetCode:function(){return t_}});var n,i=r(4444),o=r(5816),s=r(3333);function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}var l=r(8463);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let u={PHONE:"phone"},c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},d={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},h={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},p={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};function f(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let m=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},g=f,v=new i.LL("auth","Firebase",f()),y={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},b=new s.Yd("@firebase/auth");function w(e,...t){b.logLevel<=s.in.ERROR&&b.error(`Auth (${o.Jn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function E(e,...t){throw S(e,...t)}function I(e,...t){return S(e,...t)}function T(e,t,r){let n=Object.assign(Object.assign({},g()),{[t]:r}),o=new i.LL("auth","Firebase",n);return o.create(t,{appName:e.name})}function _(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&E(e,"argument-error"),T(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function S(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return v.create(e,...t)}function k(e,t,...r){if(!e)throw S(t,...r)}function A(e){let t="INTERNAL ASSERTION FAILED: "+e;throw w(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let O=new Map;function R(e){e instanceof Function||A("Expected a class definition");let t=O.get(e);return t?(t instanceof e||A("Instance stored in cache mismatched with class"),t):(t=new e,O.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function P(e,t){let r=(0,o.qX)(e,"auth");if(r.isInitialized()){let n=r.getImmediate(),s=r.getOptions();if((0,i.vZ)(s,null!=t?t:{}))return n;E(n,"already-initialized")}let a=r.initialize({options:t});return a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function C(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function x(){return"http:"===L()||"https:"===L()}function L(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class N{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||A("Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(x()||(0,i.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function D(e,t){e.emulator||A("Emulator should always be set here");let{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class M{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void A("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void A("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void A("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let $={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},U=new N(3e4,6e4);function F(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function j(e,t,r,n,o={}){return B(e,o,async()=>{let o={},s={};n&&("GET"===t?s=n:o={body:JSON.stringify(n)});let a=(0,i.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),M.fetch()(H(e,e.config.apiHost,r,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function B(e,t,r){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},$),t);try{let o=new W(e),s=await Promise.race([r(),o.promise]);o.clearNetworkTimeout();let a=await s.json();if("needConfirmation"in a)throw V(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{let l=s.ok?a.errorMessage:a.error.message,[u,c]=l.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===u)throw V(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===u)throw V(e,"email-already-in-use",a);if("USER_DISABLED"===u)throw V(e,"user-disabled",a);let d=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw T(e,d,c);E(e,d)}}catch(h){if(h instanceof i.ZR)throw h;E(e,"network-request-failed")}}async function z(e,t,r,n,i={}){let o=await j(e,t,r,n,i);return"mfaPendingCredential"in o&&E(e,"multi-factor-auth-required",{_serverResponse:o}),o}function H(e,t,r,n){let i=`${t}${r}?${n}`;return e.config.emulator?D(e.config,i):`${e.config.apiScheme}://${i}`}class W{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(I(this.auth,"network-request-failed")),U.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=I(e,t,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function K(e,t){return j(e,"POST","/v1/accounts:delete",t)}async function q(e,t){return j(e,"POST","/v1/accounts:update",t)}async function G(e,t){return j(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function J(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(r){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Z(e,t=!1){return(0,i.m9)(e).getIdToken(t)}async function Y(e,t=!1){let r=(0,i.m9)(e),n=await r.getIdToken(t),o=Q(n);k(o&&o.exp&&o.auth_time&&o.iat,r.auth,"internal-error");let s="object"==typeof o.firebase?o.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:o,token:n,authTime:J(X(o.auth_time)),issuedAtTime:J(X(o.iat)),expirationTime:J(X(o.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function X(e){return 1e3*Number(e)}function Q(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return w("JWT malformed, contained fewer than 3 sections"),null;try{let o=(0,i.tV)(r);if(!o)return w("Failed to decode base64 JWT payload"),null;return JSON.parse(o)}catch(s){return w("Caught error parsing JWT payload as JSON",null==s?void 0:s.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ee(e,t,r=!1){if(r)return t;try{return await t}catch(n){throw n instanceof i.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(n)&&e.auth.currentUser===e&&await e.auth.signOut(),n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class et{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}{this.errorBackoff=3e4;let n=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,i=n-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class er{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=J(this.lastLoginAt),this.creationTime=J(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function en(e){var t;let r=e.auth,n=await e.getIdToken(),i=await ee(e,G(r,{idToken:n}));k(null==i?void 0:i.users.length,r,"internal-error");let o=i.users[0];e._notifyReloadListener(o);let s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map(e=>{var{providerId:t}=e,r=a(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}):[],l=function(e,t){let r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,s),u=e.isAnonymous,c=!(e.email&&o.passwordHash)&&!(null==l?void 0:l.length),d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new er(o.createdAt,o.lastLoginAt),isAnonymous:!!u&&c};Object.assign(e,d)}async function ei(e){let t=(0,i.m9)(e);await en(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eo(e,t){let r=await B(e,{},async()=>{let r=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:o}=e.config,s=H(e,n,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",M.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(void 0!==e.idToken,"internal-error"),k(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=Q(e);return k(t,"internal-error"),k(void 0!==t.exp,"internal-error"),k(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(k(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await eo(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,o=new es;return r&&(k("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),n&&(k("string"==typeof n,"internal-error",{appName:e}),o.accessToken=n),i&&(k("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new es,this.toJSON())}_performRefresh(){return A("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ea(e,t){k("string"==typeof e||void 0===e,"internal-error",{appName:t})}class el{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new et(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new er(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await ee(this,this.stsTokenManager.getToken(this.auth,e));return k(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Y(this,e)}reload(){return ei(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new el(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await en(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await ee(this,K(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,o,s,a,l,u;let c=null!==(r=t.displayName)&&void 0!==r?r:void 0,d=null!==(n=t.email)&&void 0!==n?n:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(o=t.photoURL)&&void 0!==o?o:void 0,f=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:I}=t;k(y&&I,e,"internal-error");let T=es.fromJSON(this.name,I);k("string"==typeof y,e,"internal-error"),ea(c,e.name),ea(d,e.name),k("boolean"==typeof b,e,"internal-error"),k("boolean"==typeof w,e,"internal-error"),ea(h,e.name),ea(p,e.name),ea(f,e.name),ea(m,e.name),ea(g,e.name),ea(v,e.name);let _=new el({uid:y,auth:e,email:d,emailVerified:b,displayName:c,isAnonymous:w,photoURL:p,phoneNumber:h,tenantId:f,stsTokenManager:T,createdAt:g,lastLoginAt:v});return E&&Array.isArray(E)&&(_.providerData=E.map(e=>Object.assign({},e))),m&&(_._redirectEventId=m),_}static async _fromIdTokenResponse(e,t,r=!1){let n=new es;n.updateFromServerResponse(t);let i=new el({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await en(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}eu.type="NONE";let ec=eu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ed(e,t,r){return`firebase:${e}:${t}:${r}`}class eh{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=ed(this.userKey,n.apiKey,i),this.fullPersistenceKey=ed("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?el._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new eh(R(ec),e,r);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||R(ec),o=ed(r,e.config.apiKey,e.name),s=null;for(let a of t)try{let l=await a._get(o);if(l){let u=el._fromJSON(e,l);a!==i&&(s=u),i=a;break}}catch(c){}let d=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&d.length&&(i=d[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(t){}}))),new eh(i,e,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ep(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ev(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(ef(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(eb(t))return"Blackberry";if(ew(t))return"Webos";if(em(t))return"Safari";if((t.includes("chrome/")||eg(t))&&!t.includes("edge/"))return"Chrome";if(ey(t))return"Android";let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"}function ef(e=(0,i.z$)()){return/firefox\//i.test(e)}function em(e=(0,i.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function eg(e=(0,i.z$)()){return/crios\//i.test(e)}function ev(e=(0,i.z$)()){return/iemobile/i.test(e)}function ey(e=(0,i.z$)()){return/android/i.test(e)}function eb(e=(0,i.z$)()){return/blackberry/i.test(e)}function ew(e=(0,i.z$)()){return/webos/i.test(e)}function eE(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function eI(e=(0,i.z$)()){return eE(e)||ey(e)||ew(e)||eb(e)||/windows phone/i.test(e)||ev(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eT(e,t=[]){let r;switch(e){case"Browser":r=ep((0,i.z$)());break;case"Worker":r=`${ep((0,i.z$)())}-${e}`;break;default:r=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${o.Jn}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=t=>new Promise((r,n)=>{try{let i=e(t);r(i)}catch(o){n(o)}});r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(o){for(let n of(t.reverse(),t))try{n()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==o?void 0:o.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eS{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eA(this),this.idTokenSubscription=new eA(this),this.beforeStateQueue=new e_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=v,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=R(t)),this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await eh.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let r=await this.assertedPersistence.getCurrentUser(),n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let o=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===s)&&(null==a?void 0:a.user)&&(n=a.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(l){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await en(e)}catch(t){if((null==t?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?(0,i.m9)(e):null;return t&&k(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(R(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&R(e)||this._popupRedirectResolver;k(t,this,"argument-error"),this.redirectPersistenceManager=await eh.create(this,[R(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return(k(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"==typeof t)?e.addObserver(t,r,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function ek(e){return(0,i.m9)(e)}class eA{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)(e=>this.observer=e)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function eO(e,t,r){let n=ek(e);k(n._canInitEmulator,n,"emulator-config-failed"),k(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let i=!!(null==r?void 0:r.disableWarnings),o=eR(t),{host:s,port:a}=function(e){let t=eR(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};let n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){let o=i[1];return{host:o,port:eP(n.substr(o.length+1))}}{let[s,a]=n.split(":");return{host:s,port:eP(a)}}}(t),l=null===a?"":`:${a}`;n.config.emulator={url:`${o}//${s}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}function eR(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function eP(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eC{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return A("not implemented")}_getIdTokenResponse(e){return A("not implemented")}_linkToIdToken(e,t){return A("not implemented")}_getReauthenticationResolver(e){return A("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ex(e,t){return j(e,"POST","/v1/accounts:resetPassword",F(e,t))}async function eL(e,t){return j(e,"POST","/v1/accounts:update",t)}async function eN(e,t){return j(e,"POST","/v1/accounts:update",F(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eD(e,t){return z(e,"POST","/v1/accounts:signInWithPassword",F(e,t))}async function eM(e,t){return j(e,"POST","/v1/accounts:sendOobCode",F(e,t))}async function e$(e,t){return eM(e,t)}async function eU(e,t){return eM(e,t)}async function eF(e,t){return eM(e,t)}async function ej(e,t){return eM(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eB(e,t){return z(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}async function ez(e,t){return z(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eH extends eC{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new eH(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new eH(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return eD(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return eB(e,{email:this._email,oobCode:this._password});default:E(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return eL(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ez(e,{idToken:t,email:this._email,oobCode:this._password});default:E(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eW(e,t){return z(e,"POST","/v1/accounts:signInWithIdp",F(e,t))}class eV extends eC{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new eV(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):E("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=a(t,["providerId","signInMethod"]);if(!r||!n)return null;let o=new eV(r,n);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){let t=this.buildRequest();return eW(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,eW(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,eW(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.xO)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eK(e,t){return j(e,"POST","/v1/accounts:sendVerificationCode",F(e,t))}async function eq(e,t){return z(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t))}async function eG(e,t){let r=await z(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t));if(r.temporaryProof)throw V(e,"account-exists-with-different-credential",r);return r}let eJ={USER_NOT_FOUND:"user-not-found"};async function eZ(e,t){let r=Object.assign(Object.assign({},t),{operation:"REAUTH"});return z(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,r),eJ)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eY extends eC{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new eY({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new eY({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return eq(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return eG(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return eZ(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new eY({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}}class eX{constructor(e){var t,r,n,o,s,a;let l=(0,i.zd)((0,i.pd)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,c=null!==(r=l.oobCode)&&void 0!==r?r:null,d=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=l.mode)&&void 0!==n?n:null);k(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=l.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}static parseLink(e){let t=function(e){let t=(0,i.zd)((0,i.pd)(e)).link,r=t?(0,i.zd)((0,i.pd)(t)).deep_link_id:null,n=(0,i.zd)((0,i.pd)(e)).deep_link_id,o=n?(0,i.zd)((0,i.pd)(n)).link:null;return o||n||r||t||e}(e);try{return new eX(t)}catch(r){return null}}}function eQ(e){return eX.parseLink(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e0{constructor(){this.providerId=e0.PROVIDER_ID}static credential(e,t){return eH._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=eX.parseLink(t);return k(r,"argument-error"),eH._fromEmailAndCode(e,r.code,r.tenantId)}}e0.PROVIDER_ID="password",e0.EMAIL_PASSWORD_SIGN_IN_METHOD="password",e0.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e2 extends e1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class e4 extends e2{static credentialFromJSON(e){let t="string"==typeof e?JSON.parse(e):e;return k("providerId"in t&&"signInMethod"in t,"argument-error"),eV._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return k(e.idToken||e.accessToken,"argument-error"),eV._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return e4.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return e4.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:n,pendingToken:i,nonce:o,providerId:s}=e;if(!r&&!n&&!t&&!i||!s)return null;try{return new e4(s)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:i})}catch(a){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e5 extends e2{constructor(){super("facebook.com")}static credential(e){return eV._fromParams({providerId:e5.PROVIDER_ID,signInMethod:e5.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return e5.credentialFromTaggedObject(e)}static credentialFromError(e){return e5.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return e5.credential(e.oauthAccessToken)}catch(t){return null}}}e5.FACEBOOK_SIGN_IN_METHOD="facebook.com",e5.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e3 extends e2{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return eV._fromParams({providerId:e3.PROVIDER_ID,signInMethod:e3.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return e3.credentialFromTaggedObject(e)}static credentialFromError(e){return e3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return e3.credential(t,r)}catch(n){return null}}}e3.GOOGLE_SIGN_IN_METHOD="google.com",e3.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e6 extends e2{constructor(){super("github.com")}static credential(e){return eV._fromParams({providerId:e6.PROVIDER_ID,signInMethod:e6.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return e6.credentialFromTaggedObject(e)}static credentialFromError(e){return e6.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return e6.credential(e.oauthAccessToken)}catch(t){return null}}}e6.GITHUB_SIGN_IN_METHOD="github.com",e6.PROVIDER_ID="github.com";class e8 extends eC{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){let t=this.buildRequest();return eW(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,eW(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,eW(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n,pendingToken:i}=t;return r&&n&&i&&r===n?new e8(r,i):null}static _create(e,t){return new e8(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}class e9 extends e1{constructor(e){k(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return e9.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return e9.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){let t=e8.fromJSON(e);return k(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return e8._create(r,t)}catch(n){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e7 extends e2{constructor(){super("twitter.com")}static credential(e,t){return eV._fromParams({providerId:e7.PROVIDER_ID,signInMethod:e7.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return e7.credentialFromTaggedObject(e)}static credentialFromError(e){return e7.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return e7.credential(t,r)}catch(n){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function te(e,t){return z(e,"POST","/v1/accounts:signUp",F(e,t))}e7.TWITTER_SIGN_IN_METHOD="twitter.com",e7.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){let i=await el._fromIdTokenResponse(e,r,n),o=tr(r),s=new tt({user:i,providerId:o,_tokenResponse:r,operationType:t});return s}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let n=tr(r);return new tt({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function tr(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tn(e){var t;let r=ek(e);if(await r._initializationPromise,null===(t=r.currentUser)||void 0===t?void 0:t.isAnonymous)return new tt({user:r.currentUser,providerId:null,operationType:"signIn"});let n=await te(r,{returnSecureToken:!0}),i=await tt._fromIdTokenResponse(r,"signIn",n,!0);return await r._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ti extends i.ZR{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,ti.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new ti(e,t,r,n)}}function to(e,t,r,n){let i="reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e);return i.catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw ti._fromErrorAndOperation(e,r,t,n);throw r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ts(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ta(e,t){let r=(0,i.m9)(e);await tu(!0,r,t);let{providerUserInfo:n}=await q(r.auth,{idToken:await r.getIdToken(),deleteProvider:[t]}),o=ts(n||[]);return r.providerData=r.providerData.filter(e=>o.has(e.providerId)),o.has("phone")||(r.phoneNumber=null),await r.auth._persistUserIfCurrent(r),r}async function tl(e,t,r=!1){let n=await ee(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return tt._forOperation(e,"link",n)}async function tu(e,t,r){await en(t);let n=ts(t.providerData);k(n.has(r)===e,t.auth,!1===e?"provider-already-linked":"no-such-provider")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tc(e,t,r=!1){let{auth:n}=e,i="reauthenticate";try{let o=await ee(e,to(n,i,t,e),r);k(o.idToken,n,"internal-error");let s=Q(o.idToken);k(s,n,"internal-error");let{sub:a}=s;return k(e.uid===a,n,"user-mismatch"),tt._forOperation(e,i,o)}catch(l){throw(null==l?void 0:l.code)==="auth/user-not-found"&&E(n,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function td(e,t,r=!1){let n="signIn",i=await to(e,n,t),o=await tt._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(o.user),o}async function th(e,t){return td(ek(e),t)}async function tp(e,t){let r=(0,i.m9)(e);return await tu(!1,r,t.providerId),tl(r,t)}async function tf(e,t){return tc((0,i.m9)(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tm(e,t){return z(e,"POST","/v1/accounts:signInWithCustomToken",F(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tg(e,t){let r=ek(e),n=await tm(r,{token:t,returnSecureToken:!0}),i=await tt._fromIdTokenResponse(r,"signIn",n);return await r._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tv{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?ty._fromServerResponse(e,t):E(e,"internal-error")}}class ty extends tv{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new ty(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tb(e,t,r){var n;k((null===(n=r.url)||void 0===n?void 0:n.length)>0,e,"invalid-continue-uri"),k(void 0===r.dynamicLinkDomain||r.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=r.url,t.dynamicLinkDomain=r.dynamicLinkDomain,t.canHandleCodeInApp=r.handleCodeInApp,r.iOS&&(k(r.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=r.iOS.bundleId),r.android&&(k(r.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=r.android.installApp,t.androidMinimumVersionCode=r.android.minimumVersion,t.androidPackageName=r.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tw(e,t,r){let n=(0,i.m9)(e),o={requestType:"PASSWORD_RESET",email:t};r&&tb(n,o,r),await eU(n,o)}async function tE(e,t,r){await ex((0,i.m9)(e),{oobCode:t,newPassword:r})}async function tI(e,t){await eN((0,i.m9)(e),{oobCode:t})}async function tT(e,t){let r=(0,i.m9)(e),n=await ex(r,{oobCode:t}),o=n.requestType;switch(k(o,r,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":k(n.newEmail,r,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":k(n.mfaInfo,r,"internal-error");default:k(n.email,r,"internal-error")}let s=null;return n.mfaInfo&&(s=tv._fromServerResponse(ek(r),n.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===n.requestType?n.newEmail:n.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===n.requestType?n.email:n.newEmail)||null,multiFactorInfo:s},operation:o}}async function t_(e,t){let{data:r}=await tT((0,i.m9)(e),t);return r.email}async function tS(e,t,r){let n=ek(e),i=await te(n,{returnSecureToken:!0,email:t,password:r}),o=await tt._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(o.user),o}function tk(e,t,r){return th((0,i.m9)(e),e0.credential(t,r))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tA(e,t,r){let n=(0,i.m9)(e),o={requestType:"EMAIL_SIGNIN",email:t};k(r.handleCodeInApp,n,"argument-error"),r&&tb(n,o,r),await eF(n,o)}function tO(e,t){let r=eX.parseLink(t);return(null==r?void 0:r.operation)==="EMAIL_SIGNIN"}async function tR(e,t,r){let n=(0,i.m9)(e),o=e0.credentialWithLink(t,r||C());return k(o._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),th(n,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tP(e,t){return j(e,"POST","/v1/accounts:createAuthUri",F(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tC(e,t){let r=x()?C():"http://localhost",{signinMethods:n}=await tP((0,i.m9)(e),{identifier:t,continueUri:r});return n||[]}async function tx(e,t){let r=(0,i.m9)(e),n=await e.getIdToken(),o={requestType:"VERIFY_EMAIL",idToken:n};t&&tb(r.auth,o,t);let{email:s}=await e$(r.auth,o);s!==e.email&&await e.reload()}async function tL(e,t,r){let n=(0,i.m9)(e),o=await e.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:o,newEmail:t};r&&tb(n.auth,s,r);let{email:a}=await ej(n.auth,s);a!==e.email&&await e.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tN(e,t){return j(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tD(e,{displayName:t,photoURL:r}){if(void 0===t&&void 0===r)return;let n=(0,i.m9)(e),o=await n.getIdToken(),s=await ee(n,tN(n.auth,{idToken:o,displayName:t,photoUrl:r,returnSecureToken:!0}));n.displayName=s.displayName||null,n.photoURL=s.photoUrl||null;let a=n.providerData.find(({providerId:e})=>"password"===e);a&&(a.displayName=n.displayName,a.photoURL=n.photoURL),await n._updateTokensIfNecessary(s)}function tM(e,t){return tU((0,i.m9)(e),t,null)}function t$(e,t){return tU((0,i.m9)(e),null,t)}async function tU(e,t,r){let{auth:n}=e,i=await e.getIdToken(),o={idToken:i,returnSecureToken:!0};t&&(o.email=t),r&&(o.password=r);let s=await ee(e,eL(n,o));await e._updateTokensIfNecessary(s,!0)}class tF{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class tj extends tF{constructor(e,t,r,n){super(e,t,r),this.username=n}}class tB extends tF{constructor(e,t){super(e,"facebook.com",t)}}class tz extends tj{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class tH extends tF{constructor(e,t){super(e,"google.com",t)}}class tW extends tj{constructor(e,t,r){super(e,"twitter.com",t,r)}}function tV(e){let{user:t,_tokenResponse:r}=e;return t.isAnonymous&&!r?{providerId:null,isNewUser:!1,profile:null}:/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){var t,r;if(!e)return null;let{providerId:n}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},o=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!n&&(null==e?void 0:e.idToken)){let s=null===(r=null===(t=Q(e.idToken))||void 0===t?void 0:t.firebase)||void 0===r?void 0:r.sign_in_provider;if(s)return new tF(o,"anonymous"!==s&&"custom"!==s?s:null)}if(!n)return null;switch(n){case"facebook.com":return new tB(o,i);case"github.com":return new tz(o,i);case"google.com":return new tH(o,i);case"twitter.com":return new tW(o,i,e.screenName||null);case"custom":case"anonymous":return new tF(o,null);default:return new tF(o,n,i)}}(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tK(e,t){return(0,i.m9)(e).setPersistence(t)}function tq(e,t,r,n){return(0,i.m9)(e).onIdTokenChanged(t,r,n)}function tG(e,t,r){return(0,i.m9)(e).beforeAuthStateChanged(t,r)}function tJ(e,t,r,n){return(0,i.m9)(e).onAuthStateChanged(t,r,n)}function tZ(e){(0,i.m9)(e).useDeviceLanguage()}function tY(e,t){return(0,i.m9)(e).updateCurrentUser(t)}function tX(e){return(0,i.m9)(e).signOut()}async function tQ(e){return(0,i.m9)(e).delete()}class t0{constructor(e,t,r){this.type=e,this.credential=t,this.auth=r}static _fromIdtoken(e,t){return new t0("enroll",e,t)}static _fromMfaPendingCredential(e){return new t0("signin",e)}toJSON(){let e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,r;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return t0._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(r=e.multiFactorSession)||void 0===r?void 0:r.idToken)return t0._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t1{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){let r=ek(e),n=t.customData._serverResponse,i=(n.mfaInfo||[]).map(e=>tv._fromServerResponse(r,e));k(n.mfaPendingCredential,r,"internal-error");let o=t0._fromMfaPendingCredential(n.mfaPendingCredential);return new t1(o,i,async e=>{let i=await e._process(r,o);delete n.mfaInfo,delete n.mfaPendingCredential;let s=Object.assign(Object.assign({},n),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":let a=await tt._fromIdTokenResponse(r,t.operationType,s);return await r._updateCurrentUser(a.user),a;case"reauthenticate":return k(t.user,r,"internal-error"),tt._forOperation(t.user,t.operationType,s);default:E(r,"internal-error")}})}async resolveSignIn(e){return this.signInResolver(e)}}function t2(e,t){var r;let n=(0,i.m9)(e);return k(t.customData.operationType,n,"argument-error"),k(null===(r=t.customData._serverResponse)||void 0===r?void 0:r.mfaPendingCredential,n,"argument-error"),t1._fromError(n,t)}class t4{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>tv._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new t4(e)}async getSession(){return t0._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){let r=await this.getSession(),n=await ee(this.user,e._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(n),this.user.reload()}async unenroll(e){var t;let r="string"==typeof e?e:e.uid,n=await this.user.getIdToken(),i=await ee(this.user,j(t=this.user.auth,"POST","/v2/accounts/mfaEnrollment:withdraw",F(t,{idToken:n,mfaEnrollmentId:r})));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==r),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(o){if((null==o?void 0:o.code)!=="auth/user-token-expired")throw o}}}let t5=new WeakMap;function t3(e){let t=(0,i.m9)(e);return t5.has(t)||t5.set(t,t4._fromUser(t)),t5.get(t)}let t6="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t8{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(t6,"1"),this.storage.removeItem(t6),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class t9 extends t8{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(){let e=(0,i.z$)();return em(e)||eE(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=eI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});return}let r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let n=this.storage.getItem(r);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}let o=()=>{let e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},s=this.storage.getItem(r);(0,i.w1)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,10):o()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let n of Array.from(r))n(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}t9.type="LOCAL";let t7=t9;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class re extends t8{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}re.type="SESSION";let rt=re;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let r=new rr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:r,data:n}=e.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:r});let o=Array.from(i).map(async t=>t(e.origin,n)),s=await Promise.all(o.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(r){return{fulfilled:!1,reason:r}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rn(e="",t=10){let r="";for(let n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}rr.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ri{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let n,i;let o="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!o)throw Error("connection_unavailable");return new Promise((s,a)=>{let l=rn("",20);o.port1.start();let u=setTimeout(()=>{a(Error("unsupported_event"))},r);i={messageChannel:o,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),n=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(n),s(e.data.response);break;default:clearTimeout(u),clearTimeout(n),a(Error("invalid_response"))}}},this.handlers.add(i),o.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[o.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ro(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rs(){return void 0!==ro().WorkerGlobalScope&&"function"==typeof ro().importScripts}async function ra(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(t){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let rl="firebaseLocalStorageDb",ru="firebaseLocalStorage",rc="fbase_key";class rd{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function rh(e,t){return e.transaction([ru],t?"readwrite":"readonly").objectStore(ru)}function rp(){let e=indexedDB.open(rl,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(ru,{keyPath:rc})}catch(n){r(n)}}),e.addEventListener("success",async()=>{let r=e.result;r.objectStoreNames.contains(ru)?t(r):(r.close(),await function(){let e=indexedDB.deleteDatabase(rl);return new rd(e).toPromise()}(),t(await rp()))})})}async function rf(e,t,r){let n=rh(e,!0).put({[rc]:t,value:r});return new rd(n).toPromise()}async function rm(e,t){let r=rh(e,!1).get(t),n=await new rd(r).toPromise();return void 0===n?null:n.value}function rg(e,t){let r=rh(e,!0).delete(t);return new rd(r).toPromise()}class rv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await rp()),this.db}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rr._getInstance(rs()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let r=await this._poll();return{keyProcessed:r.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ra(),!this.activeServiceWorker)return;this.sender=new ri(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(r){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await rp();return await rf(e,t6,"1"),await rg(e,t6),!0}catch(t){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>rf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>rm(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=rh(e,!1).getAll();return new rd(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],r=new Set;for(let{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(let o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let n of Array.from(r))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}rv.type="LOCAL";let ry=rv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function rb(e){return(await j(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}function rw(e){return new Promise((t,r)=>{var n,i;let o=document.createElement("script");o.setAttribute("src",e),o.onload=t,o.onerror=e=>{let t=I("internal-error");t.customData=e,r(t)},o.type="text/javascript",o.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(o)})}function rE(e){return`__${e}${Math.floor(1e6*Math.random())}`}class rI{constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}render(e,t){let r=this.counter;return this._widgets.set(r,new rT(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;let r=e||1e12;null===(t=this._widgets.get(r))||void 0===t||t.delete(),this._widgets.delete(r)}getResponse(e){var t;return(null===(t=this._widgets.get(e||1e12))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;return null===(t=this._widgets.get(e||1e12))||void 0===t||t.execute(),""}}class rT{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};let n="string"==typeof e?document.getElementById(e):e;k(n,"argument-error",{appName:t}),this.container=n,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=function(e){let t=[],r="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<50;n++)t.push(r.charAt(Math.floor(Math.random()*r.length)));return t.join("")}(0);let{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(r){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw Error("reCAPTCHA mock was already deleted!")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let r_=rE("rcb"),rS=new N(3e4,6e4);class rk{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=ro().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return(k(t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t),e,"argument-error"),this.shouldResolveImmediately(t))?Promise.resolve(ro().grecaptcha):new Promise((r,n)=>{let o=ro().setTimeout(()=>{n(I(e,"network-request-failed"))},rS.get());ro()[r_]=()=>{ro().clearTimeout(o),delete ro()[r_];let i=ro().grecaptcha;if(!i){n(I(e,"internal-error"));return}let s=i.render;i.render=(e,t)=>{let r=s(e,t);return this.counter++,r},this.hostLanguage=t,r(i)};let s=`https://www.google.com/recaptcha/api.js??${(0,i.xO)({onload:r_,render:"explicit",hl:t})}`;rw(s).catch(()=>{clearTimeout(o),n(I(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=ro().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class rA{async load(e){return new rI(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let rO="recaptcha",rR={theme:"light",type:"image"};class rP{constructor(e,t=Object.assign({},rR),r){this.parameters=t,this.type=rO,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ek(r),this.isInvisible="invisible"===this.parameters.size,k("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");let n="string"==typeof e?document.getElementById(e):e;k(n,this.auth,"argument-error"),this.container=n,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new rA:new rk,this.validateStartingState()}async verify(){this.assertNotDestroyed();let e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(r=>{let n=e=>{e&&(this.tokenChangeListeners.delete(n),r(e))};this.tokenChangeListeners.add(n),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){k(!this.parameters.sitekey,this.auth,"argument-error"),k(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),k("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"==typeof e)e(t);else if("string"==typeof e){let r=ro()[e];"function"==typeof r&&r(t)}}}assertNotDestroyed(){k(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){let t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){let e;k(x()&&!rs(),this.auth,"internal-error"),await (e=null,new Promise(t=>{if("complete"===document.readyState){t();return}e=()=>t(),window.addEventListener("load",e)}).catch(t=>{throw e&&window.removeEventListener("load",e),t})),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);let t=await rb(this.auth);k(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return k(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rC{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){let t=eY._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function rx(e,t,r){let n=ek(e),o=await rD(n,t,(0,i.m9)(r));return new rC(o,e=>th(n,e))}async function rL(e,t,r){let n=(0,i.m9)(e);await tu(!1,n,"phone");let o=await rD(n.auth,t,(0,i.m9)(r));return new rC(o,e=>tp(n,e))}async function rN(e,t,r){let n=(0,i.m9)(e),o=await rD(n.auth,t,(0,i.m9)(r));return new rC(o,e=>tf(n,e))}async function rD(e,t,r){var n,i,o;let s=await r.verify();try{let a;if(k("string"==typeof s,e,"argument-error"),k(r.type===rO,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let l=a.session;if("phoneNumber"in a){k("enroll"===l.type,e,"internal-error");let u=await (i={idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:s}},j(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,i)));return u.phoneSessionInfo.sessionInfo}{k("signin"===l.type,e,"internal-error");let c=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;k(c,e,"missing-multi-factor-info");let d=await (o={mfaPendingCredential:l.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:s}},j(e,"POST","/v2/accounts/mfaSignIn:start",F(e,o)));return d.phoneResponseInfo.sessionInfo}}{let{sessionInfo:h}=await eK(e,{phoneNumber:a.phoneNumber,recaptchaToken:s});return h}}finally{r._reset()}}async function rM(e,t){await tl((0,i.m9)(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r${constructor(e){this.providerId=r$.PROVIDER_ID,this.auth=ek(e)}verifyPhoneNumber(e,t){return rD(this.auth,e,(0,i.m9)(t))}static credential(e,t){return eY._fromVerification(e,t)}static credentialFromResult(e){return r$.credentialFromTaggedObject(e)}static credentialFromError(e){return r$.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?eY._fromTokenResponse(t,r):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rU(e,t){return t?R(t):(k(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}r$.PROVIDER_ID="phone",r$.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rF extends eC{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eW(e,this._buildIdpRequest())}_linkToIdToken(e,t){return eW(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return eW(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rj(e){return td(e.auth,new rF(e),e.bypassAuthState)}function rB(e){let{auth:t,user:r}=e;return k(r,t,"internal-error"),tc(r,new rF(e),e.bypassAuthState)}async function rz(e){let{auth:t,user:r}=e;return k(r,t,"internal-error"),tl(r,new rF(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rH{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:o,type:s}=e;if(o){this.reject(o);return}let a={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rj;case"linkViaPopup":case"linkViaRedirect":return rz;case"reauthViaPopup":case"reauthViaRedirect":return rB;default:E(this.auth,"internal-error")}}resolve(e){this.pendingPromise||A("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||A("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let rW=new N(2e3,1e4);async function rV(e,t,r){let n=ek(e);_(e,t,e1);let i=rU(n,r),o=new rG(n,"signInViaPopup",t,i);return o.executeNotNull()}async function rK(e,t,r){let n=(0,i.m9)(e);_(n.auth,t,e1);let o=rU(n.auth,r),s=new rG(n.auth,"reauthViaPopup",t,o,n);return s.executeNotNull()}async function rq(e,t,r){let n=(0,i.m9)(e);_(n.auth,t,e1);let o=rU(n.auth,r),s=new rG(n.auth,"linkViaPopup",t,o,n);return s.executeNotNull()}class rG extends rH{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,rG.currentPopupAction&&rG.currentPopupAction.cancel(),rG.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||A("Popup operations only handle one event");let e=rn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(I(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(I(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rG.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(I(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,rW.get())};e()}}rG.currentPopupAction=null;let rJ=new Map;class rZ extends rH{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=rJ.get(this.auth._key());if(!e){try{let t=await rY(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rJ.set(this.auth._key(),e)}return this.bypassAuthState||rJ.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rY(e,t){let r=r1(t),n=r0(e);if(!await n._isAvailable())return!1;let i=await n._get(r)==="true";return await n._remove(r),i}async function rX(e,t){return r0(e)._set(r1(t),"true")}function rQ(e,t){rJ.set(e._key(),t)}function r0(e){return R(e._redirectPersistence)}function r1(e){return ed("pendingRedirect",e.config.apiKey,e.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function r2(e,t,r){return r4(e,t,r)}async function r4(e,t,r){let n=ek(e);_(e,t,e1);let i=rU(n,r);return await rX(i,n),i._openRedirect(n,t,"signInViaRedirect")}function r5(e,t,r){return r3(e,t,r)}async function r3(e,t,r){let n=(0,i.m9)(e);_(n.auth,t,e1);let o=rU(n.auth,r);await rX(o,n.auth);let s=await ne(n);return o._openRedirect(n.auth,t,"reauthViaRedirect",s)}function r6(e,t,r){return r8(e,t,r)}async function r8(e,t,r){let n=(0,i.m9)(e);_(n.auth,t,e1);let o=rU(n.auth,r);await tu(!1,n,t.providerId),await rX(o,n.auth);let s=await ne(n);return o._openRedirect(n.auth,t,"linkViaRedirect",s)}async function r9(e,t){return await ek(e)._initializationPromise,r7(e,t,!1)}async function r7(e,t,r=!1){let n=ek(e),i=rU(n,t),o=new rZ(n,i,r),s=await o.execute();return s&&!r&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,t)),s}async function ne(e){let t=rn(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}class nt{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nn(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!nn(e)){let n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(I(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(nr(e))}saveEventToCache(e){this.cachedEventUids.add(nr(e)),this.lastProcessedEventTime=Date.now()}}function nr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function nn({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ni(e,t={}){return j(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let no=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ns=/^https?/;async function na(e){if(e.config.emulator)return;let{authorizedDomains:t}=await ni(e);for(let r of t)try{if(function(e){let t=C(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!ns.test(r))return!1;if(no.test(e))return n===e;let o=e.replace(/\./g,"\\."),s=RegExp("^(.+\\."+o+"|"+o+")$","i");return s.test(n)}(r))return}catch(n){}E(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let nl=new N(3e4,6e4);function nu(){let e=ro().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}}let nc=null,nd=new N(5e3,15e3),nh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},np=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function nf(e){let t=await (nc=nc||new Promise((t,r)=>{var n,i,o;function s(){nu(),gapi.load("gapi.iframes",{callback(){t(gapi.iframes.getContext())},ontimeout(){nu(),r(I(e,"network-request-failed"))},timeout:nl.get()})}if(null===(i=null===(n=ro().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(o=ro().gapi)||void 0===o?void 0:o.load)s();else{let a=rE("iframefcb");return ro()[a]=()=>{gapi.load?s():r(I(e,"network-request-failed"))},rw(`https://apis.google.com/js/api.js?onload=${a}`).catch(e=>r(e))}}).catch(e=>{throw nc=null,e})),r=ro().gapi;return k(r,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;k(t.authDomain,e,"auth-domain-config-required");let r=t.emulator?D(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:o.Jn},s=np.get(e.config.apiHost);s&&(n.eid=s);let a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),`${r}?${(0,i.xO)(n).slice(1)}`}(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nh,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({setHideOnLeave:!1});let i=I(e,"network-request-failed"),o=ro().setTimeout(()=>{n(i)},nd.get());function s(){ro().clearTimeout(o),r(t)}t.ping(s).then(s,()=>{n(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let nm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ng{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function nv(e,t,r,n,s,a){k(e.config.authDomain,e,"auth-domain-config-required"),k(e.config.apiKey,e,"invalid-api-key");let l={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:o.Jn,eventId:s};if(t instanceof e1)for(let[u,c]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(a||{})))l[u]=c;if(t instanceof e2){let d=t.getScopes().filter(e=>""!==e);d.length>0&&(l.scopes=d.join(","))}e.tenantId&&(l.tid=e.tenantId);let h=l;for(let p of Object.keys(h))void 0===h[p]&&delete h[p];return`${function({config:e}){return e.emulator?D(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,i.xO)(h).slice(1)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ny="webStorageSupport",nb=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rt,this._completeRedirectFn=r7,this._overrideRedirectResult=rQ}async _openPopup(e,t,r,n){var o;(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager)||A("_initialize() not called before _openPopup()");let s=nv(e,t,r,C(),n);return function(e,t,r,n=500,o=600){let s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString(),l="",u=Object.assign(Object.assign({},nm),{width:n.toString(),height:o.toString(),top:s,left:a}),c=(0,i.z$)().toLowerCase();r&&(l=eg(c)?"_blank":r),ef(c)&&(t=t||"http://localhost",u.scrollbars="yes");let d=Object.entries(u).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=(0,i.z$)()){var t;return eE(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==l)return function(e,t){let r=document.createElement("a");r.href=e,r.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}(t||"",l),new ng(null);let h=window.open(t||"",l,d);k(h,e,"popup-blocked");try{h.focus()}catch(p){}return new ng(h)}(e,s,rn())}async _openRedirect(e,t,r,n){var i;return await this._originValidation(e),i=nv(e,t,r,C(),n),ro().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:r,promise:n}=this.eventManagers[t];return r?Promise.resolve(r):(n||A("If manager is not set, promise should be"),n)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await nf(e),r=new nt(e);return t.register("authEvent",t=>{k(null==t?void 0:t.authEvent,e,"invalid-auth-event");let n=r.onEvent(t.authEvent);return{status:n?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){let r=this.iframes[e._key()];r.send(ny,{type:ny},r=>{var n;let i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n[ny];void 0!==i&&t(!!i),E(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=na(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return eI()||em()||eE()}};class nw{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return A("unexpected MultiFactorSessionType")}}}class nE extends nw{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new nE(e)}_finalizeEnroll(e,t,r){return j(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class nI{constructor(){}static assertion(e){return nE._fromCredential(e)}}nI.FACTOR_ID="phone";var nT="@firebase/auth",n_="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let nk=(0,i.Pz)("authIdTokenMaxAge")||300,nA=null,nO=e=>async t=>{let r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>nk)return;let i=null==r?void 0:r.token;nA!==i&&(nA=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nR(e=(0,o.Mq)()){let t=(0,o.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();let r=P(e,{popupRedirectResolver:nb,persistence:[ry,t7,rt]}),n=(0,i.Pz)("authTokenSyncURL");if(n){let s=nO(n);tG(r,s,()=>s(r.currentUser)),tq(r,e=>s(e))}let a=(0,i.q4)("auth");return a&&eO(r,`http://${a}`),r}n="Browser",(0,o.Xd)(new l.wA("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((e,r)=>{k(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),k(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});let i={apiKey:o,authDomain:s,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eT(n)},a=new eS(e,r,i);return function(e,t){let r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(R);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{let n=e.getProvider("auth-internal");n.initialize()})),(0,o.Xd)(new l.wA("auth-internal",e=>{let t=ek(e.getProvider("auth").getImmediate());return new nS(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,o.KN)(nT,n_,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(n)),(0,o.KN)(nT,n_,"esm2017")}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);