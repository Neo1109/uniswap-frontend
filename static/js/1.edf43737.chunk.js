(this.webpackJsonpuniswap=this.webpackJsonpuniswap||[]).push([[1],{789:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r=t(3),a=t(0),i=t.n(a),o=t(4);function u(){var e=Object(r.a)(["\n  position: absolute;\n  top: 80%;\n  left: 0;\n  height: 1rem;\n  width: 100%;\n  background-color: ",";\n"]);return u=function(){return e},e}function c(){var e=Object(r.a)(["\n  content: '';\n  position: absolute;\n  top: -0.5rem;\n  left: 0;\n  height: 1rem;\n  width: 100%;\n  background-color: ",";\n"]);return c=function(){return e},e}function l(){var e=Object(r.a)(["\n  position: relative;\n  background-color: ",";\n  width: calc(100% - 1rem);\n  margin: 0 auto;\n  border-radius: 0.625rem;\n"]);return l=function(){return e},e}var s=o.d.div(l(),(function(e){return e.theme.concreteGray})),d=o.d.div(c(),(function(e){return e.theme.concreteGray})),p=o.d.div(u(),(function(e){return e.theme.concreteGray}));function f(e){var n=e.hideTop,t=e.hideBottom,r=e.children;return i.a.createElement(s,null,n||i.a.createElement(d,null),r,t||i.a.createElement(p,null))}},793:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(0),a=t.n(r);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createElement("path",{d:"M0.97168 1L6.20532 6L11.439 1",stroke:"#2F80ED"}),c=function(e){var n=e.svgRef,t=e.title,r=o(e,["svgRef","title"]);return a.a.createElement("svg",i({width:12,height:7,viewBox:"0 0 12 7",fill:"none",ref:n},r),t?a.a.createElement("title",null,t):null,u)},l=a.a.forwardRef((function(e,n){return a.a.createElement(c,i({svgRef:n},e))}));t.p},806:function(e,n,t){"use strict";t.d(n,"a",(function(){return x}));var r=t(7),a=t(3),i=t(0),o=t.n(i),u=t(4),c=t(57),l=t(11),s=t(5),d=t(10);function p(){var e=Object(a.a)(["\n  font-size: 1rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  background-color: ",";\n\n  color: ",";\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  ::placeholder {\n    color: ",";\n  }\n"]);return p=function(){return e},e}function f(){var e=Object(a.a)(["\n  ","\n  align-items: center;\n  padding: 0.25rem 0.85rem 0.75rem;\n"]);return f=function(){return e},e}function m(){var e=Object(a.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]);return m=function(){return e},e}function b(){var e=Object(a.a)(["\n  ","\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem;\n"]);return b=function(){return e},e}function h(){var e=Object(a.a)(["\n  flex: 1;\n"]);return h=function(){return e},e}function v(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ",";\n\n  background-color: ",";\n"]);return v=function(){return e},e}function g(){var e=Object(a.a)(["\n  ","\n  box-shadow: 0 4px 8px 0 ",";\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ",";\n  z-index: 1;\n"]);return g=function(){return e},e}var E=u.d.div(g(),(function(e){return e.theme.flexColumnNoWrap}),(function(e){var n=e.theme;return Object(l.c)(.95,n.shadowColor)}),(function(e){return e.theme.inputBackground})),y=u.d.div(v(),(function(e){var n=e.error,t=e.theme;return n?t.salmonRed:t.mercuryGray}),(function(e){return e.theme.inputBackground})),O=u.d.div(h()),j=u.d.div(b(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.doveGray})),w=u.d.div(m()),k=u.d.div(f(),(function(e){return e.theme.flexRowNoWrap})),T=u.d.input(p(),(function(e){return e.theme.inputBackground}),(function(e){var n=e.error,t=e.theme;return n?t.salmonRed:t.royalBlue}),(function(e){return e.theme.placeholderGray}));function x(e){var n=e.title,t=e.initialInput,a=void 0===t?"":t,u=e.onChange,l=void 0===u?function(){}:u,p=e.onError,f=void 0===p?function(){}:p,m=Object(c.b)().t,b=Object(d.k)().library,h=Object(i.useState)(a.address?a.address:""),v=Object(r.a)(h,2),g=v[0],x=v[1],S=Object(d.c)(g,150),C=Object(i.useState)({address:void 0,name:void 0}),N=Object(r.a)(C,2),D=N[0],R=N[1],I=Object(i.useState)(!1),A=Object(r.a)(I,2),P=A[0],L=A[1];return Object(i.useEffect)((function(){l({address:D.address,name:D.name})}),[l,D.address,D.name]),Object(i.useEffect)((function(){f(P)}),[f,P]),Object(i.useEffect)((function(){var e=!1;if(Object(s.t)(S))try{b.lookupAddress(S).then((function(n){e||(n?x(n):(R({address:S,name:""}),L(null)))})).catch((function(){e||(R({address:S,name:""}),L(null))}))}catch(n){R({address:S,name:""}),L(null)}else if(""!==S)try{b.resolveName(S).then((function(n){e||(n?(R({address:n,name:S}),L(null)):L(!0))})).catch((function(){e||L(!0)}))}catch(t){L(!0)}return function(){e=!0}}),[S,b,l,f]),o.a.createElement(E,null,o.a.createElement(y,{error:""!==g&&P},o.a.createElement(O,null,o.a.createElement(j,null,o.a.createElement(w,null,o.a.createElement("span",null,n||m("recipientAddress")))),o.a.createElement(k,null,o.a.createElement(T,{type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:"0x1234...",error:""!==g&&P,onChange:function(e){void 0===D.address&&void 0===D.name||R({address:void 0,name:void 0}),void 0!==P&&L();var n=e.target.value,t=Object(s.t)(n);x(t||n)},value:g})))))}},808:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 9 10",fill:"currentColor"},e),a.a.createElement("path",{d:"M5.298 0H4.24v7.911h-.075L1.256 4.932l-.717.735L4.769 10 9 5.667l-.718-.735-2.908 2.979h-.076V0z",fill:"currentColor"}))}},842:function(e,n,t){"use strict";var r=t(16),a=t.n(r),i=t(92),o=t(7),u=t(9),c=t(104),l=t(3),s=t(0),d=t.n(s),p=t(58),f=t(45),m=t(17),b=t(4),h=t(57),v=t(10),g=t(15),E=t(5),y=t(76),O=t(75),j=t(72),w=t(139),k=t(35),T=t(14),x=t(810),S=t(806),C=t(789),N=t(11),D=t(226),R=t.n(D),I=t(807),A=t(793);function P(){var e=Object(l.a)(["\n        stroke: ",";\n      "]);return P=function(){return e},e}function L(){var e=Object(l.a)(["\n  path {\n    stroke: ",";\n\n    ","\n  }\n"]);return L=function(){return e},e}function W(){var e=Object(l.a)(["\n        stroke: ",";\n      "]);return W=function(){return e},e}function U(){var e=Object(l.a)(["\n  path {\n    stroke: ",";\n\n    ","\n  }\n"]);return U=function(){return e},e}function B(){var e=Object(l.a)(["\n          background-color: ",";\n          font-weight: 600;\n          padding: 0.25rem;\n        "]);return B=function(){return e},e}function V(){var e=Object(l.a)(["\n          color: ",";\n          font-weight: 600;\n        "]);return V=function(){return e},e}function M(){var e=Object(l.a)(["\n  margin-right: 12px;\n  font-size: 0.75rem;\n  line-height: 0.75rem;\n\n  color: ",";\n  ","\n"]);return M=function(){return e},e}function F(){var e=Object(l.a)(["\n  background-color: ",";\n  /* padding: 1.25rem 1.25rem 1rem 1.25rem; */\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  margin: 1rem 0.5rem 0 0.5rem;\n"]);return F=function(){return e},e}function H(){var e=Object(l.a)(["\n  ",";\n  color: ",";\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n\n  img {\n    height: 0.75rem;\n    width: 0.75rem;\n  }\n"]);return H=function(){return e},e}function G(){var e=Object(l.a)(["\n  color: ",";\n  font-size: 0.75rem;\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n"]);return G=function(){return e},e}var _=b.d.div(G(),(function(e){var n=e.error,t=e.brokenTokenWarning,r=e.theme;return n||t?r.salmonRed:r.doveGray})),z=b.d.div(H(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.royalBlue})),Z=b.d.div(F(),(function(e){return e.theme.concreteGray})),$=b.d.span(M(),(function(e){var n=e.isError,t=e.theme;return n&&t.salmonRed}),(function(e){var n=e.slippageWarning,t=e.highSlippageWarning,r=e.theme;return t?Object(b.c)(V(),r.salmonRed):n&&Object(b.c)(B(),Object(N.c)(.6,r.warningYellow))})),Y=Object(b.d)((function(e){e.isError,e.highSlippageWarning;var n=Object(c.a)(e,["isError","highSlippageWarning"]);return d.a.createElement(I.a,n)}))(U(),(function(e){var n=e.isError,t=e.theme;return n?t.salmonRed:t.royalBlue}),(function(e){var n=e.highSlippageWarning,t=e.theme;return n&&Object(b.c)(W(),t.salmonRed)})),q=Object(b.d)((function(e){e.isError,e.highSlippageWarning;var n=Object(c.a)(e,["isError","highSlippageWarning"]);return d.a.createElement(A.a,n)}))(L(),(function(e){var n=e.isError,t=e.theme;return n?t.salmonRed:t.royalBlue}),(function(e){var n=e.highSlippageWarning,t=e.theme;return n&&Object(b.c)(P(),t.salmonRed)}));function J(e){var n=e.openDetailsText,t=void 0===n?"Advanced Details":n,r=e.closeDetailsText,a=void 0===r?"Hide Advanced":r,i=e.contextualInfo,u=void 0===i?"":i,c=e.allowExpand,l=void 0!==c&&c,f=e.isError,m=void 0!==f&&f,b=e.slippageWarning,h=e.highSlippageWarning,v=e.brokenTokenWarning,g=e.dropDownContent,E=Object(s.useState)(!1),y=Object(o.a)(E,2),O=y[0],j=y[1];return l?d.a.createElement(d.a.Fragment,null,d.a.createElement(z,{onClick:function(){!O&&p.a.event({category:"Advanced Interaction",action:"Open Advanced Details",label:"Swap/Send Page Details"}),j((function(e){return!e}))}},d.a.createElement(d.a.Fragment,null,d.a.createElement($,{isError:m,slippageWarning:b,highSlippageWarning:h},(b||h)&&d.a.createElement("span",{role:"img","aria-label":"warning"},"\u26a0\ufe0f"),u||(O?a:t)),O?d.a.createElement(Y,{isError:m,highSlippageWarning:h}):d.a.createElement(q,{isError:m,highSlippageWarning:h}))),O&&d.a.createElement(Z,null,g())):d.a.createElement(_,{brokenTokenWarning:v},u)}function K(){var e=Object(l.a)(["\n  background-color: ",";\n  padding: 1rem 1.25rem 1rem 1.25rem;\n  border-radius: 0 0 12px 12px;\n"]);return K=function(){return e},e}function Q(){var e=Object(l.a)(["\n  padding: 0.125rem 0.3rem 0.1rem 0.3rem;\n  background-color: ",";\n  border-radius: 12px;\n  font-variant: tabular-nums;\n"]);return Q=function(){return e},e}function X(){var e=Object(l.a)(["\n  padding: 1.25rem 1.25rem 1rem 1.25rem;\n"]);return X=function(){return e},e}function ee(){var e=Object(l.a)(["\n  opacity: 0.7;\n"]);return ee=function(){return e},e}function ne(){var e=Object(l.a)(["\n        color: ",";\n      "]);return ne=function(){return e},e}function te(){var e=Object(l.a)(["\n        color: ",";\n      "]);return te=function(){return e},e}function re(){var e=Object(l.a)(["\n  color: inherit;\n  font-size: 0, 8rem;\n  flex-grow: 0;\n\n  ",";\n"]);return re=function(){return e},e}function ae(){var e=Object(l.a)(["\n  background-color: ",";\n  padding: 1rem 1.25rem 1rem 1.25rem;\n  border-radius: 12px 12px 0 0;\n"]);return ae=function(){return e},e}function ie(){var e=Object(l.a)(["\n  padding-top: 0.5rem;\n"]);return ie=function(){return e},e}function oe(){var e=Object(l.a)(["\n  font-weight: 500;\n"]);return oe=function(){return e},e}function ue(){var e=Object(l.a)(["\n      border: 1px solid ",";\n    "]);return ue=function(){return e},e}function ce(){var e=Object(l.a)(["\n      border: 1px solid ",";\n      :hover {\n        border: 1px solid ",";\n      }\n    "]);return ce=function(){return e},e}function le(){var e=Object(l.a)(["\n  height: 2rem;\n  position: relative;\n  width: 120px;\n  margin-top: 6px;\n  padding: 0 0.75rem;\n\n  ","\n\n  ","\n\n  input {\n    width: 100%;\n    height: 100%;\n    border: 0px;\n    border-radius: 2rem;\n  }\n"]);return le=function(){return e},e}function se(){var e=Object(l.a)(["\n      color: ",";\n    "]);return se=function(){return e},e}function de(){var e=Object(l.a)(["\n      padding-top: 12px;\n    "]);return de=function(){return e},e}function pe(){var e=Object(l.a)(["\n  ","\n  color: ",";\n  ","\n"]);return pe=function(){return e},e}function fe(){var e=Object(l.a)(["\n      color: ",";\n    "]);return fe=function(){return e},e}function me(){var e=Object(l.a)(["\n      text-align: right;\n      color: ",";\n    "]);return me=function(){return e},e}function be(){var e=Object(l.a)(["\n      color: initial;\n      cursor: initial;\n      text-align: right;\n    "]);return be=function(){return e},e}function he(){var e=Object(l.a)(["\n  background: ",";\n  flex-grow: 1;\n  font-size: 12px;\n  min-width: 20px;\n\n  outline: none;\n  box-sizing: border-box;\n\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  cursor: inherit;\n\n  color: ",";\n  text-align: left;\n  ","\n\n  ","\n\n  ","\n"]);return he=function(){return e},e}function ve(){var e=Object(l.a)(["\n  width: 120px;\n"]);return ve=function(){return e},e}function ge(){var e=Object(l.a)(["\n      background-color: ",";\n      color: ",";\n      border: none;\n\n      :hover {\n        border: none;\n        box-shadow: none;\n        background-color: ",";\n      }\n\n      :focus {\n        border: none;\n        box-shadow: none;\n        background-color: ",";\n      }\n\n      :active {\n        background-color: ",";\n      }\n\n      :hover:focus {\n        background-color: ",";\n      }\n      :hover:focus:active {\n        background-color: ",";\n      }\n    "]);return ge=function(){return e},e}function Ee(){var e=Object(l.a)(["\n  margin-right: 8px;\n  margin-top: 6px;\n\n  :hover {\n    cursor: pointer;\n  }\n\n  ","\n"]);return Ee=function(){return e},e}function ye(){var e=Object(l.a)(["\n  color: ",";\n  align-items: center;\n  min-width: 55px;\n  height: 2rem;\n  border-radius: 36px;\n  font-size: 12px;\n  border: 1px solid ",";\n  outline: none;\n  background: ",";\n\n  :hover {\n    cursor: inherit;\n    border: 1px solid ",";\n  }\n  :focus {\n    border: 1px solid ",";\n  }\n"]);return ye=function(){return e},e}function Oe(){var e=Object(l.a)(["\n    left: -20px;\n  "]);return Oe=function(){return e},e}function je(){var e=Object(l.a)(["\n  position: absolute;\n  width: 228px;\n  left: -78px;\n  top: -94px;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.6rem 1rem;\n  line-height: 150%;\n  background: ",";\n  border: 1px solid ",";\n\n  border-radius: 8px;\n\n  animation: "," 0.15s linear;\n\n  color: ",";\n  font-style: italic;\n\n  ","\n"]);return je=function(){return e},e}function we(){var e=Object(l.a)(["\n  from {\n    opacity : 0;\n  }\n\n  to {\n    opacity : 1;\n  }\n"]);return we=function(){return e},e}function ke(){var e=Object(l.a)(["\n  height: 18px;\n  width: 18px;\n"]);return ke=function(){return e},e}function Te(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n  margin-left: 0.4rem;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"]);return Te=function(){return e},e}function xe(){var e=Object(l.a)(["\n  position: relative;\n  flex-wrap: ",";\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  padding: 0;\n  padding-top: ",";\n"]);return xe=function(){return e},e}function Se(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n"]);return Se=function(){return e},e}function Ce(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Ce=function(){return e},e}var Ne=Object.freeze({none:"none",emptyInput:"emptyInput",invalidEntryBound:"invalidEntryBound",riskyEntryHigh:"riskyEntryHigh",riskyEntryLow:"riskyEntryLow"}),De=b.d.div(Ce()),Re=b.d.div(Se()),Ie=Object(b.d)((function(e){e.wrap;var n=Object(c.a)(e,["wrap"]);return d.a.createElement(De,n)}))(xe(),(function(e){return e.wrap&&"wrap"}),(function(e){return e.wrap&&"0.25rem"})),Ae=b.d.button(Te()),Pe=b.d.img(ke()),Le=Object(b.e)(we()),We=Object(b.d)(De)(je(),(function(e){return e.theme.inputBackground}),(function(e){return e.theme.mercuryGray}),Le,(function(e){return e.theme.textColor}),(function(e){return e.theme.mediaWidth.upToSmall(Oe())})),Ue=b.d.button(ye(),(function(e){return e.theme.textColor}),(function(e){return e.theme.mercuryGray}),(function(e){return e.theme.inputBackground}),(function(e){return e.theme.chaliceGray}),(function(e){return e.theme.royalBlue})),Be=Object(b.d)(Ue)(Ee(),(function(e){var n=e.active;e.theme;return n&&Object(b.c)(ge(),(function(e){return e.theme.royalBlue}),(function(e){return e.theme.white}),(function(e){var n=e.theme;return Object(N.a)(.05,n.royalBlue)}),(function(e){var n=e.theme;return Object(N.b)(.05,n.royalBlue)}),(function(e){var n=e.theme;return Object(N.a)(.05,n.royalBlue)}),(function(e){return e.theme.royalBlue}),(function(e){var n=e.theme;return Object(N.a)(.05,n.royalBlue)}))})),Ve=Object(b.d)(Be)(ve()),Me=b.d.input(he(),(function(e){return e.theme.inputBackground}),(function(e){return e.theme.doveGray}),(function(e){return e.active&&Object(b.c)(be())}),(function(e){return"Custom"!==e.placeholder&&Object(b.c)(me(),(function(e){return e.theme.textColor}))}),(function(e){return"red"===e.color&&Object(b.c)(fe(),(function(e){return e.theme.salmonRed}))})),Fe=b.d.div(pe(),(function(e){return e.show&&Object(b.c)(de())}),(function(e){return e.theme.doveGray}),(function(e){return"red"===e.color&&Object(b.c)(se(),(function(e){return e.theme.salmonRed}))})),He=Object(b.d)(Ue)(le(),(function(e){return e.active&&Object(b.c)(ce(),(function(e){return e.theme.royalBlue}),(function(e){var n=e.theme;return Object(N.a)(.1,n.royalBlue)}))}),(function(e){return"red"===e.color&&Object(b.c)(ue(),(function(e){return e.theme.salmonRed}))})),Ge=b.d.span(oe()),_e=b.d.div(ie()),ze=b.d.div(ae(),(function(e){var n=e.theme;return Object(N.a)(.04,n.concreteGray)})),Ze=b.d.div(re(),(function(e){var n=e.color,t=e.theme;return"faded"===n&&Object(b.c)(te(),t.doveGray)||"red"===n&&Object(b.c)(ne(),t.salmonRed)})),$e=b.d.span(ee()),Ye=b.d.div(X()),qe=b.d.span(Q(),(function(e){var n=e.theme;return Object(N.a)(.04,n.concreteGray)})),Je=b.d.div(K(),(function(e){var n=e.theme;return Object(N.a)(.04,n.concreteGray)})),Ke=Ie,Qe=He;function Xe(e){var n=Object(h.b)().t,t=Object(s.useState)(3),r=Object(o.a)(t,2),a=r[0],i=r[1],u=Object(s.useState)(Ne.none),c=Object(o.a)(u,2),l=c[0],p=c[1],f=Object(s.useRef)(),m=Object(s.useState)(!1),b=Object(o.a)(m,2),g=b[0],y=b[1],O=Object(s.useState)(""),j=Object(o.a)(O,2),w=j[0],k=j[1],T=Object(v.c)(w,150);Object(s.useEffect)((function(){4===a&&F(T)}));var x=Object(s.useState)(""),S=Object(o.a)(x,2),C=S[0],N=S[1];var D=function(){return d.a.createElement(d.a.Fragment,null,$(),d.a.createElement(ze,null,d.a.createElement(Ie,null,"Limit additional price slippage",d.a.createElement(Ae,{onClick:function(){y(!g)},onMouseEnter:function(){y(!0)},onMouseLeave:function(){y(!1)}},d.a.createElement(Pe,{src:R.a,alt:"popup"})),g?d.a.createElement(We,null,"Lowering this limit decreases your risk of frontrunning. However, this makes it more likely that your transaction will fail due to normal price movements."):""),d.a.createElement(Ie,{wrap:!0},d.a.createElement(Be,{onClick:function(){B(1,.1)},active:1===a},"0.1%"),d.a.createElement(Ve,{onClick:function(){B(2,.5)},active:2===a},"0.5% ",d.a.createElement($e,null,"(suggested)")),d.a.createElement(Be,{onClick:function(){B(3,1)},active:3===a},"1%"),d.a.createElement(He,{active:4===a,color:l===Ne.emptyInput?"":l!==Ne.none&&l!==Ne.riskyEntryLow?"red":"",onClick:function(){I()}},d.a.createElement(Re,null,!(l===Ne.none||l===Ne.emptyInput)&&d.a.createElement("span",{role:"img","aria-label":"warning"},"\u26a0\ufe0f"),d.a.createElement(Me,{tabIndex:-1,ref:f,active:4===a,placeholder:4===a?w?"":"0":4!==a&&""!==w?w:"Custom",value:4===a?w:"",onChange:H,color:l===Ne.emptyInput?"":l!==Ne.none&&l!==Ne.riskyEntryLow?"red":""}),d.a.createElement(Ze,{color:4!==a?"faded":l===Ne.riskyEntryHigh||l===Ne.invalidEntryBound?"red":""},"%")))),d.a.createElement(Ie,null,d.a.createElement(Fe,{show:4===a,color:l===Ne.emptyInput?"":l!==Ne.none&&l!==Ne.riskyEntryLow?"red":""},4===a&&"none"===l.toString()&&"Custom slippage value",l===Ne.emptyInput&&"Enter a slippage percentage",l===Ne.invalidEntryBound&&"Please select a value no greater than 50%",l===Ne.riskyEntryHigh&&"Your transaction may be frontrun",l===Ne.riskyEntryLow&&"Your transaction may fail"))),d.a.createElement(Je,null,"Set swap deadline (minutes from now)",d.a.createElement(Ke,{wrap:!0},d.a.createElement(Qe,null,d.a.createElement(Me,{placeholder:"Deadline",value:C,onChange:z})))))},I=function(){i(4),f.current.focus(),F(T)},A=e.setRawSlippage,P=e.setRawTokenSlippage,L=e.setcustomSlippageError,W=e.setDeadline,U=Object(s.useCallback)((function(e){var n=parseInt(100*e);A(n),P(n)}),[A,P]),B=Object(s.useCallback)((function(e,n){U(n),p(Ne.none),i(e),L("valid`")}),[L,U]),V=Object(s.useState)(e.rawSlippage),M=Object(o.a)(V,1)[0];Object(s.useEffect)((function(){switch(Number.parseInt(M)){case 10:B(1,.1);break;case 50:B(2,.5);break;case 100:B(3,1);break;default:[/^$/,/^\d{1,2}$/,/^\d{0,2}\.\d{0,2}$/].some((function(e){return e.test(M/100)}))&&(k(M/100),i(4))}}),[M,B]);var F=Object(s.useCallback)((function(e){return p(Ne.none),L("valid"),""===e||"."===e?(L("invalid"),p(Ne.emptyInput)):Number(e)<0||Number(e)>50?(L("invalid"),p(Ne.invalidEntryBound)):(Number(e)>=0&&Number(e)<.1&&(L("valid"),p(Ne.riskyEntryLow)),Number(e)>5&&(L("warning"),p(Ne.riskyEntryHigh)),void U(Number(e)))}),[L,U]),H=function(e){var n=e.target.value;[/^$/,/^\d{1,2}$/,/^\d{0,2}\.\d{0,2}$/].some((function(e){return e.test(n)}))&&k(n)},G=Object(s.useState)(e.deadline),_=Object(o.a)(G,1)[0];Object(s.useEffect)((function(){N(_/60)}),[_]);var z=function(e){var n=e.target.value;[/^$/,/^\d+$/].some((function(e){return e.test(n)}))&&(N(n),W(60*parseInt(n)))},Z=function(e){return d.a.createElement(Ge,null,e)},$=function(){return e.independentField===e.INPUT?e.sending?d.a.createElement(Ye,null,d.a.createElement("div",null,n("youAreSelling")," ",d.a.createElement(qe,null,Z("".concat(Object(E.a)(e.independentValueParsed,e.independentDecimals,Math.min(4,e.independentDecimals))," ").concat(e.inputSymbol)))),d.a.createElement(_e,null,Z(e.recipientAddress)," ",n("willReceive")," ",d.a.createElement(qe,null,Z("".concat(Object(E.a)(e.dependentValueMinumum,e.dependentDecimals,Math.min(4,e.dependentDecimals))," ").concat(e.outputSymbol)))," "),d.a.createElement(_e,null,n("priceChange")," ",d.a.createElement(qe,null,Z("".concat(e.percentSlippageFormatted,"%"))))):d.a.createElement(Ye,null,d.a.createElement("div",null,n("youAreSelling")," ",d.a.createElement(qe,null,Z("".concat(Object(E.a)(e.independentValueParsed,e.independentDecimals,Math.min(4,e.independentDecimals))," ").concat(e.inputSymbol)))," ",n("forAtLeast"),d.a.createElement(qe,null,Z("".concat(Object(E.a)(e.dependentValueMinumum,e.dependentDecimals,Math.min(4,e.dependentDecimals))," ").concat(e.outputSymbol)))),d.a.createElement(_e,null,n("priceChange")," ",d.a.createElement(qe,null,Z("".concat(e.percentSlippageFormatted,"%"))))):e.sending?d.a.createElement(Ye,null,d.a.createElement("div",null,n("youAreSending")," ",d.a.createElement(qe,null,Z("".concat(Object(E.a)(e.independentValueParsed,e.independentDecimals,Math.min(4,e.independentDecimals))," ").concat(e.outputSymbol)))," ",n("to")," ",Z(e.recipientAddress)," ",n("forAtMost")," ",d.a.createElement(qe,null,Z("".concat(Object(E.a)(e.dependentValueMaximum,e.dependentDecimals,Math.min(4,e.dependentDecimals))," ").concat(e.inputSymbol)))," "),d.a.createElement(_e,null,n("priceChange")," ",d.a.createElement(qe,null,Z("".concat(e.percentSlippageFormatted,"%"))))):d.a.createElement(Ye,null,n("youAreBuying")," ",d.a.createElement(qe,null,Z("".concat(Object(E.a)(e.independentValueParsed,e.independentDecimals,Math.min(4,e.independentDecimals))," ").concat(e.outputSymbol)))," ",n("forAtMost")," ",d.a.createElement(qe,null,Z("".concat(Object(E.a)(e.dependentValueMaximum,e.dependentDecimals,Math.min(4,e.dependentDecimals))," ").concat(e.inputSymbol)))," ",d.a.createElement(_e,null,n("priceChange")," ",d.a.createElement(qe,null,Z("".concat(e.percentSlippageFormatted,"%")))))};return d.a.createElement(d.a.Fragment,null,function(){var t="",r=!1;e.brokenTokenWarning?(t=n("brokenToken"),r=!0):e.inputError||e.independentError?(t=e.inputError||e.independentError,r=!0):e.inputCurrency&&e.outputCurrency?e.independentValue?e.sending&&!e.recipientAddress?t=n("noRecipient"):e.sending&&!Object(E.t)(e.recipientAddress)?t=n("invalidRecipient"):e.account||(t=n("noWallet"),r=!0):t=n("enterValueCont"):t=n("selectTokenCont");var a=e.highSlippageWarning?n("highSlippageWarning"):e.slippageWarning?n("slippageWarning"):"";return d.a.createElement(J,{openDetailsText:n("transactionDetails"),closeDetailsText:n("hideDetails"),contextualInfo:t||a,allowExpand:!(!(!e.brokenTokenWarning&&e.inputCurrency&&e.outputCurrency&&e.inputValueParsed&&e.outputValueParsed)||e.sending&&!e.recipientAddress),isError:r,slippageWarning:e.slippageWarning&&!t,highSlippageWarning:e.highSlippageWarning&&!t,brokenTokenWarning:e.brokenTokenWarning,renderTransactionDetails:$,dropDownContent:D})}())}var en=t(808);function nn(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n\n  button {\n    max-width: 20rem;\n  }\n"]);return nn=function(){return e},e}function tn(){var e=Object(l.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  color: ",";\n"]);return tn=function(){return e},e}function rn(){var e=Object(l.a)(["\n  ",";\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  padding: 0.5rem 1rem;\n"]);return rn=function(){return e},e}function an(){var e=Object(l.a)(["\n  color: ",";\n  width: 0.625rem;\n  height: 0.625rem;\n  position: relative;\n  padding: 0.875rem;\n  cursor: ",";\n"]);return an=function(){return e},e}function on(){var e=Object(l.a)(["\n  ","\n  justify-content: center;\n  align-items: center;\n"]);return on=function(){return e},e}t.d(n,"a",(function(){return xn}));var un=0,cn=1,ln=0,sn=1,dn=2,pn=50,fn=50,mn=900,bn=m.ethers.utils.bigNumberify(1e3),hn=b.d.div(on(),(function(e){return e.theme.flexRowNoWrap})),vn=Object(b.d)((function(e){e.clickable,e.active;var n=Object(c.a)(e,["clickable","active"]);return d.a.createElement(en.a,n)}))(an(),(function(e){var n=e.theme;return e.active?n.uniswapBlue:n.uniswapDarkblue}),(function(e){return e.clickable&&"pointer"})),gn=b.d.div(rn(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.doveGray})),En=b.d.span(tn(),(function(e){return e.theme.doveGray})),yn=b.d.div(nn());function On(e,n,t){var r=e.mul(m.ethers.utils.bigNumberify(997)),a=r.mul(t),i=n.mul(m.ethers.utils.bigNumberify(1e3)).add(r);return a.div(i)}function jn(e,n,t){var r=n.mul(e).mul(m.ethers.utils.bigNumberify(1e3)),a=t.sub(e).mul(m.ethers.utils.bigNumberify(997));return r.div(a).add(m.ethers.constants.One)}function wn(e){return{independentValue:e.exactFieldURL&&e.exactAmountURL?e.exactAmountURL:"",dependentValue:"",independentField:"output"===e.exactFieldURL?cn:un,inputCurrency:e.inputCurrencyURL?e.inputCurrencyURL:"ETH",outputCurrency:e.outputCurrencyURL?"ETH"===e.outputCurrencyURL?e.inputCurrencyURL&&"ETH"!==e.inputCurrencyURL?"ETH":"":e.outputCurrencyURL:e.initialCurrency?e.initialCurrency:""}}function kn(e,n){switch(n.type){case"FLIP_INDEPENDENT":var t=e.independentField,r=e.inputCurrency,a=e.outputCurrency;return Object(u.a)({},e,{dependentValue:"",independentField:t===un?cn:un,inputCurrency:a,outputCurrency:r});case"SELECT_CURRENCY":var i=e.inputCurrency,o=e.outputCurrency,c=n.payload,l=c.field,s=c.currency,d=l===un?s:i,p=l===cn?s:o;return d===p?Object(u.a)({},e,{inputCurrency:l===un?s:"",outputCurrency:l===cn?s:""}):Object(u.a)({},e,{inputCurrency:d,outputCurrency:p});case"UPDATE_INDEPENDENT":var f=n.payload,m=f.field,b=f.value,h=e.dependentValue,v=e.independentValue;return Object(u.a)({},e,{independentValue:b,dependentValue:b===v?h:"",independentField:m});case"UPDATE_DEPENDENT":return Object(u.a)({},e,{dependentValue:n.payload});default:return wn()}}function Tn(e,n,t,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];try{if(e&&(n||0===n)&&t&&(r||0===r)){var i=m.ethers.utils.bigNumberify(10).pow(m.ethers.utils.bigNumberify(18));return a?e.mul(i).div(t).mul(m.ethers.utils.bigNumberify(10).pow(m.ethers.utils.bigNumberify(r))).div(m.ethers.utils.bigNumberify(10).pow(m.ethers.utils.bigNumberify(n))):t.mul(i).div(e).mul(m.ethers.utils.bigNumberify(10).pow(m.ethers.utils.bigNumberify(n))).div(m.ethers.utils.bigNumberify(10).pow(m.ethers.utils.bigNumberify(r)))}}catch(o){}}function xn(e){var n=e.initialCurrency,t=e.sending,r=void 0!==t&&t,u=e.params,c=Object(h.b)().t,l=Object(v.k)(),b=l.account,N=l.error,D=Object(j.e)(),R=Object(O.e)(),I=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Number.parseInt(u.slippage);return!isNaN(n)&&(0===n||n>=1)?n:e?fn:pn},A=Object(s.useState)(),P=Object(o.a)(A,2),L=P[0],W=P[1],U=Object(s.useState)(mn),B=Object(o.a)(U,2),V=B[0],M=B[1],F=Object(s.useState)((function(){return I()})),H=Object(o.a)(F,2),G=H[0],_=H[1],z=Object(s.useState)((function(){return I(!0)})),Z=Object(o.a)(z,2),$=Z[0],Y=Z[1],q=m.ethers.utils.bigNumberify(G),J=m.ethers.utils.bigNumberify($);Object(s.useEffect)((function(){p.a.pageview(window.location.pathname+window.location.search)}),[]);var K=Object(s.useReducer)(kn,{initialCurrency:n,inputCurrencyURL:u.inputCurrency,outputCurrencyURL:u.outputCurrency,exactFieldURL:u.exactField,exactAmountURL:u.exactAmount},wn),Q=Object(o.a)(K,2),X=Q[0],ee=Q[1],ne=X.independentValue,te=X.dependentValue,re=X.independentField,ae=X.inputCurrency,ie=X.outputCurrency;Object(s.useEffect)((function(){W(!1);for(var e=0;e<g.e.length;e++)g.e[e].toLowerCase()!==ie.toLowerCase()&&g.e[e].toLowerCase()!==ae.toLowerCase()||W(!0)}),[ie,ae]);var oe=Object(s.useState)({address:r&&u.recipient?u.recipient:"",name:""}),ue=Object(o.a)(oe,2),ce=ue[0],le=ue[1],se=Object(s.useState)(),de=Object(o.a)(se,2),pe=de[0],fe=de[1],me=function(e,n){return e&&n?"ETH"===e?ln:"ETH"===n?sn:dn:null}(ae,ie),be=Object(y.c)(ae),he=be.symbol,ve=be.decimals,ge=be.exchangeAddress,Ee=Object(y.c)(ie),ye=Ee.symbol,Oe=Ee.decimals,je=Ee.exchangeAddress,we=Object(v.f)(ge),ke=Object(v.f)(je),Te=me===ln?ke:we,xe=Object(w.b)(b,ae,ge),Se=Object(j.f)(ae),Ce=Se.reserveETH,Ne=Se.reserveToken,De=Object(j.f)(ie),Re=De.reserveETH,Ie=De.reserveToken,Ae=Object(j.c)(b,ae),Pe=Object(j.c)(b,ie),Le=Ae&&Number.isInteger(ve)?Object(E.a)(Ae,ve,Math.min(4,ve)):"",We=Pe&&Number.isInteger(Oe)?Object(E.a)(Pe,Oe,Math.min(4,Oe)):"",Ue=re===un?ve:Oe,Be=re===cn?ve:Oe,Ve=Object(s.useState)(),Me=Object(o.a)(Ve,2),Fe=Me[0],He=Me[1],Ge=te&&(Be||0===Be)?Object(E.a)(te,Be,Math.min(4,Be),!1):"",_e=re===un?Fe:te,ze=re===un?ne:Ge,Ze=re===cn?Fe:te,$e=re===cn?ne:Ge,Ye=Object(s.useState)(),qe=Object(o.a)(Ye,2),Je=qe[0],Ke=qe[1];Object(s.useEffect)((function(){if(ne&&(Ue||0===Ue)){try{var e=m.ethers.utils.parseUnits(ne,Ue);if(e.lte(m.ethers.constants.Zero)||e.gte(m.ethers.constants.MaxUint256))throw Error();He(e),Ke(null)}catch(n){Ke(c("inputNotValid"))}return function(){He(),Ke()}}}),[ne,Ue,c]);var Qe=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;if(e){var a=e.mul(n?t:r).div(m.ethers.utils.bigNumberify(1e4)),i=e.sub(a),o=e.add(a);return{minimum:i.lt(m.ethers.constants.Zero)?m.ethers.constants.Zero:i,maximum:o.gt(m.ethers.constants.MaxUint256)?m.ethers.constants.MaxUint256:o}}return{}}(te,me===dn,J,q),en=Qe.minimum,nn=Qe.maximum,tn=Object(s.useState)(),rn=Object(o.a)(tn,2),an=rn[0],on=rn[1],xn=Object(s.useState)(!1),Sn=Object(o.a)(xn,2),Cn=Sn[0],Nn=Sn[1];Object(s.useEffect)((function(){var e=re===un?Fe:nn;if(Ae&&(xe||"ETH"===ae)&&e)return Ae.lt(e)?on(c("insufficientBalance")):"ETH"!==ae&&xe.lt(e)?(on(c("unlockTokenCont")),Nn(!0)):(on(null),Nn(!1)),function(){on(),Nn(!1)}}),[re,Fe,nn,Ae,ae,xe,c]),Object(s.useEffect)((function(){var e=Fe;if(me===ln){var n=Re,t=Ie;if(e&&n&&t){try{var r=re===un?On(e,n,t):jn(e,n,t);if(r.lte(m.ethers.constants.Zero))throw Error();ee({type:"UPDATE_DEPENDENT",payload:r})}catch(v){Ke(c("insufficientLiquidity"))}return function(){ee({type:"UPDATE_DEPENDENT",payload:""})}}}else if(me===sn){var a=Ce,i=Ne;if(e&&a&&i){try{var o=re===un?On(e,i,a):jn(e,i,a);if(o.lte(m.ethers.constants.Zero))throw Error();ee({type:"UPDATE_DEPENDENT",payload:o})}catch(g){Ke(c("insufficientLiquidity"))}return function(){ee({type:"UPDATE_DEPENDENT",payload:""})}}}else if(me===dn){var u=Ce,l=Ne,s=Re,d=Ie;if(e&&u&&l&&s&&d){try{if(re===un){var p=On(e,l,u);if(p.lte(m.ethers.constants.Zero))throw Error();var f=On(p,s,d);if(f.lte(m.ethers.constants.Zero))throw Error();ee({type:"UPDATE_DEPENDENT",payload:f})}else{var b=jn(e,s,d);if(b.lte(m.ethers.constants.Zero))throw Error();var h=jn(b,l,u);if(h.lte(m.ethers.constants.Zero))throw Error();ee({type:"UPDATE_DEPENDENT",payload:h})}}catch(E){Ke(c("insufficientLiquidity"))}return function(){ee({type:"UPDATE_DEPENDENT",payload:""})}}}}),[Fe,me,Re,Ie,Ce,Ne,re,c]),Object(s.useEffect)((function(){Object(f.a)().push(window.location.pathname+"")}),[]);var Dn=Object(s.useState)(!1),Rn=Object(o.a)(Dn,2),In=(Rn[0],Rn[1]),An=Tn(_e,ve,Ze,Oe),Pn=Tn(_e,ve,Ze,Oe,!0),Ln=function(e,n,t,r,a,i,o){var u=arguments.length>7&&void 0!==arguments[7]&&arguments[7];if(e===ln)return Tn(a,18,i,o,u);if(e===sn)return Tn(t,r,n,18,u);if(e===dn){var c=m.ethers.utils.bigNumberify(10).pow(m.ethers.utils.bigNumberify(18)),l=Tn(t,r,n,18),s=Tn(a,18,i,o);try{return l&&s?l.mul(s).div(c):void 0}catch(d){}}}(me,Ce,Ne,ve,Re,Ie,Oe),Wn=An&&Ln?An.sub(Ln).abs().mul(m.ethers.utils.bigNumberify(10).pow(m.ethers.utils.bigNumberify(18))).div(Ln).sub(m.ethers.utils.bigNumberify(3).mul(m.ethers.utils.bigNumberify(10).pow(m.ethers.utils.bigNumberify(15)))):void 0,Un=Wn&&Object(E.a)(Wn,16,2),Bn=Wn&&Wn.gte(m.ethers.utils.parseEther(".05"))&&Wn.lt(m.ethers.utils.parseEther(".2")),Vn=Wn&&Wn.gte(m.ethers.utils.parseEther(".2")),Mn=r?An&&null===an&&null===Je&&null===pe&&V:An&&null===an&&null===Je&&V,Fn="(".concat(c("estimated"),")");function Hn(e){return"Balance: ".concat(e)}var Gn=Object(s.useState)(""),_n=Object(o.a)(Gn,2),zn=_n[0],Zn=_n[1],$n=Object(k.e)();return d.a.createElement(d.a.Fragment,null,d.a.createElement(x.a,{title:c("input"),description:ze&&re===cn?Fn:"",extraText:Le&&Hn(Le),extraTextClickHander:function(){if(Ae&&ve){var e="ETH"===ae?Ae.sub(m.ethers.utils.parseEther(".1")):Ae;e.gt(m.ethers.constants.Zero)&&ee({type:"UPDATE_INDEPENDENT",payload:{value:Object(E.a)(e,ve,ve,!1),field:un}})}},onCurrencySelected:function(e){ee({type:"SELECT_CURRENCY",payload:{currency:e,field:un}})},onValueChange:function(e){ee({type:"UPDATE_INDEPENDENT",payload:{value:e,field:un}})},showUnlock:Cn,selectedTokens:[ae,ie],selectedTokenAddress:ae,value:ze,errorMessage:an||(re===un?Je:"")}),d.a.createElement(C.a,null,d.a.createElement(hn,null,d.a.createElement(vn,{onClick:function(){ee({type:"FLIP_INDEPENDENT"})},clickable:!0,alt:"swap",active:Mn}))),d.a.createElement(x.a,{title:c("output"),description:$e&&re===un?Fn:"",extraText:We&&Hn(We),onCurrencySelected:function(e){ee({type:"SELECT_CURRENCY",payload:{currency:e,field:cn}})},onValueChange:function(e){ee({type:"UPDATE_INDEPENDENT",payload:{value:e,field:cn}})},selectedTokens:[ae,ie],selectedTokenAddress:ie,value:$e,errorMessage:re===cn?Je:"",disableUnlock:!0}),r?d.a.createElement(d.a.Fragment,null,d.a.createElement(C.a,null,d.a.createElement(hn,null,d.a.createElement(vn,{active:Mn,alt:"arrow"}))),d.a.createElement(S.a,{onChange:le,onError:fe,initialInput:ce})):"",d.a.createElement(C.a,{hideBottom:!0},d.a.createElement(gn,{onClick:function(){In((function(e){return!e}))}},d.a.createElement(En,null,c("exchangeRate")),d.a.createElement("span",null,An?"1 ".concat(he," = ").concat(Object(E.a)(An,18,7,!1)," ").concat(ye):" - ")),d.a.createElement(gn,{onClick:function(){In((function(e){return!e}))}},d.a.createElement(En,null,c("invertedRate")),d.a.createElement("span",null,An?"1 ".concat(ye," = ").concat(Object(E.a)(Pn,18,7,!1)," ").concat(he):" - "))),d.a.createElement(Xe,{account:b,setRawSlippage:_,setRawTokenSlippage:Y,rawSlippage:G,slippageWarning:Bn,highSlippageWarning:Vn,brokenTokenWarning:L,setDeadline:M,deadline:V,inputError:an,independentError:Je,inputCurrency:ae,outputCurrency:ie,independentValue:ne,independentValueParsed:Fe,independentField:re,INPUT:un,inputValueParsed:_e,outputValueParsed:Ze,inputSymbol:he,outputSymbol:ye,dependentValueMinumum:en,dependentValueMaximum:nn,dependentDecimals:Be,independentDecimals:Ue,percentSlippageFormatted:Un,setcustomSlippageError:Zn,recipientAddress:ce.address,sending:r}),d.a.createElement(yn,null,d.a.createElement(T.b,{disabled:!!L||!(!b&&!N)&&(!Mn||"invalid"===zn),onClick:b&&!N?function(){var e,n,t,o,u,c,l,s;return a.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return V!==mn&&p.a.event({category:"Advanced Interaction",action:"Set Custom Deadline",value:V/60}),e=Math.ceil(Date.now()/1e3)+V,me===dn?parseInt(J.toString())!==fn&&p.a.event({category:"Advanced Interaction",action:"Set Custom Slippage",value:parseInt(J.toString())}):parseInt(q.toString())!==pn&&p.a.event({category:"Advanced Interaction",action:"Set Custom Slippage",value:parseInt(q.toString())}),c=1,"ETH"!==ae&&(c=Ne&&Ce?Ce/Ne:null),l=D*c*ze,re===un?(p.a.event({category:"Transaction",action:r?"SendInput":"SwapInput",label:ie,value:l}),me===ln?(n=r?Te.estimate.ethToTokenTransferInput:Te.estimate.ethToTokenSwapInput,t=r?Te.ethToTokenTransferInput:Te.ethToTokenSwapInput,o=r?[en,e,ce.address]:[en,e],u=Fe):me===sn?(n=r?Te.estimate.tokenToEthTransferInput:Te.estimate.tokenToEthSwapInput,t=r?Te.tokenToEthTransferInput:Te.tokenToEthSwapInput,o=r?[Fe,en,e,ce.address]:[Fe,en,e],u=m.ethers.constants.Zero):me===dn&&(n=r?Te.estimate.tokenToTokenTransferInput:Te.estimate.tokenToTokenSwapInput,t=r?Te.tokenToTokenTransferInput:Te.tokenToTokenSwapInput,o=r?[Fe,en,m.ethers.constants.One,e,ce.address,ie]:[Fe,en,m.ethers.constants.One,e,ie],u=m.ethers.constants.Zero)):re===cn&&(p.a.event({category:"Transaction",action:r?"SendOutput":"SwapOutput",label:ie,value:l}),me===ln?(n=r?Te.estimate.ethToTokenTransferOutput:Te.estimate.ethToTokenSwapOutput,t=r?Te.ethToTokenTransferOutput:Te.ethToTokenSwapOutput,o=r?[Fe,e,ce.address]:[Fe,e],u=nn):me===sn?(n=r?Te.estimate.tokenToEthTransferOutput:Te.estimate.tokenToEthSwapOutput,t=r?Te.tokenToEthTransferOutput:Te.tokenToEthSwapOutput,o=r?[Fe,nn,e,ce.address]:[Fe,nn,e],u=m.ethers.constants.Zero):me===dn&&(n=r?Te.estimate.tokenToTokenTransferOutput:Te.estimate.tokenToTokenSwapOutput,t=r?Te.tokenToTokenTransferOutput:Te.tokenToTokenSwapOutput,o=r?[Fe,nn,m.ethers.constants.MaxUint256,e,ce.address,ie]:[Fe,nn,m.ethers.constants.MaxUint256,e,ie],u=m.ethers.constants.Zero)),d.next=9,a.a.awrap(n.apply(void 0,Object(i.a)(o).concat([{value:u}])));case 9:s=d.sent,t.apply(void 0,Object(i.a)(o).concat([{value:u,gasLimit:Object(E.b)(s,bn)}])).then((function(e){R(e)}));case 11:case"end":return d.stop()}}))}:$n,warning:Vn||"warning"===zn,loggedOut:!b},L?"Swap":b?c(r?Vn||"warning"===zn?"sendAnyway":"send":Vn||"warning"===zn?"swapAnyway":"swap"):"Connect to a Wallet")))}}}]);
//# sourceMappingURL=1.edf43737.chunk.js.map