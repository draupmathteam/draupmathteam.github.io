(()=>{var $e=Object.create;var te=Object.defineProperty;var Ge=Object.getOwnPropertyDescriptor;var Ze=Object.getOwnPropertyNames,V=Object.getOwnPropertySymbols,Je=Object.getPrototypeOf,ie=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var de=(e,t,n)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,H=(e,t)=>{for(var n in t||(t={}))ie.call(t,n)&&de(e,n,t[n]);if(V)for(var n of V(t))ue.call(t,n)&&de(e,n,t[n]);return e};var fe=(e,t)=>{var n={};for(var r in e)ie.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&V)for(var r of V(e))t.indexOf(r)<0&&ue.call(e,r)&&(n[r]=e[r]);return n};var Ke=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Qe=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Ze(t))!ie.call(e,a)&&a!==n&&te(e,a,{get:()=>t[a],enumerable:!(r=Ge(t,a))||r.enumerable});return e};var et=(e,t,n)=>(n=e!=null?$e(Je(e)):{},Qe(t||!e||!e.__esModule?te(n,"default",{value:e,enumerable:!0}):n,e));var De=Ke((Fe,le)=>{(function(){"use strict";function e(){var t=window,n=document;if("scrollBehavior"in n.documentElement.style&&t.__forceSmoothScrollPolyfill__!==!0)return;var r=t.HTMLElement||t.Element,a=468,i={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:r.prototype.scroll||_,scrollIntoView:r.prototype.scrollIntoView},s=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now;function l(d){var b=["MSIE ","Trident/","Edge/"];return new RegExp(b.join("|")).test(d)}var c=l(t.navigator.userAgent)?1:0;function _(d,b){this.scrollLeft=d,this.scrollTop=b}function o(d){return .5*(1-Math.cos(Math.PI*d))}function v(d){if(d===null||typeof d!="object"||d.behavior===void 0||d.behavior==="auto"||d.behavior==="instant")return!0;if(typeof d=="object"&&d.behavior==="smooth")return!1;throw new TypeError("behavior member of ScrollOptions "+d.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(d,b){if(b==="Y")return d.clientHeight+c<d.scrollHeight;if(b==="X")return d.clientWidth+c<d.scrollWidth}function f(d,b){var C=t.getComputedStyle(d,null)["overflow"+b];return C==="auto"||C==="scroll"}function h(d){var b=p(d,"Y")&&f(d,"Y"),C=p(d,"X")&&f(d,"X");return b||C}function k(d){for(;d!==n.body&&h(d)===!1;)d=d.parentNode||d.host;return d}function m(d){var b=s(),C,T,w,S=(b-d.startTime)/a;S=S>1?1:S,C=o(S),T=d.startX+(d.x-d.startX)*C,w=d.startY+(d.y-d.startY)*C,d.method.call(d.scrollable,T,w),(T!==d.x||w!==d.y)&&t.requestAnimationFrame(m.bind(t,d))}function y(d,b,C){var T,w,S,L,I=s();d===n.body?(T=t,w=t.scrollX||t.pageXOffset,S=t.scrollY||t.pageYOffset,L=i.scroll):(T=d,w=d.scrollLeft,S=d.scrollTop,L=_),m({scrollable:T,method:L,startTime:I,startX:w,startY:S,x:b,y:C})}t.scroll=t.scrollTo=function(){if(arguments[0]!==void 0){if(v(arguments[0])===!0){i.scroll.call(t,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:t.scrollX||t.pageXOffset,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:t.scrollY||t.pageYOffset);return}y.call(t,n.body,arguments[0].left!==void 0?~~arguments[0].left:t.scrollX||t.pageXOffset,arguments[0].top!==void 0?~~arguments[0].top:t.scrollY||t.pageYOffset)}},t.scrollBy=function(){if(arguments[0]!==void 0){if(v(arguments[0])){i.scrollBy.call(t,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:0,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:0);return}y.call(t,n.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset))}},r.prototype.scroll=r.prototype.scrollTo=function(){if(arguments[0]!==void 0){if(v(arguments[0])===!0){if(typeof arguments[0]=="number"&&arguments[1]===void 0)throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left:typeof arguments[0]!="object"?~~arguments[0]:this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top:arguments[1]!==void 0?~~arguments[1]:this.scrollTop);return}var d=arguments[0].left,b=arguments[0].top;y.call(this,this,typeof d=="undefined"?this.scrollLeft:~~d,typeof b=="undefined"?this.scrollTop:~~b)}},r.prototype.scrollBy=function(){if(arguments[0]!==void 0){if(v(arguments[0])===!0){i.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},r.prototype.scrollIntoView=function(){if(v(arguments[0])===!0){i.scrollIntoView.call(this,arguments[0]===void 0?!0:arguments[0]);return}var d=k(this),b=d.getBoundingClientRect(),C=this.getBoundingClientRect();d!==n.body?(y.call(this,d,d.scrollLeft+C.left-b.left,d.scrollTop+C.top-b.top),t.getComputedStyle(d).position!=="fixed"&&t.scrollBy({left:b.left,top:b.top,behavior:"smooth"})):t.scrollBy({left:C.left,top:C.top,behavior:"smooth"})}}typeof Fe=="object"&&typeof le!="undefined"?le.exports={polyfill:e}:e()})()});var X,g,ge,tt,R,pe,it,D={},be=[],nt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function P(e,t){for(var n in t)e[n]=t[n];return e}function ye(e){var t=e.parentNode;t&&t.removeChild(e)}function u(e,t,n){var r,a,i,s={};for(i in t)i=="key"?r=t[i]:i=="ref"?a=t[i]:s[i]=t[i];if(arguments.length>2&&(s.children=arguments.length>3?X.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)s[i]===void 0&&(s[i]=e.defaultProps[i]);return Y(e,s,r,a,null)}function Y(e,t,n,r,a){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a==null?++ge:a};return a==null&&g.vnode!=null&&g.vnode(i),i}function E(e){return e.children}function F(e,t){this.props=e,this.context=t}function A(e,t){if(t==null)return e.__?A(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?A(e):null}function Se(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Se(e)}}function _e(e){(!e.__d&&(e.__d=!0)&&R.push(e)&&!q.__r++||pe!==g.debounceRendering)&&((pe=g.debounceRendering)||setTimeout)(q)}function q(){for(var e;q.__r=R.length;)e=R.sort(function(t,n){return t.__v.__b-n.__v.__b}),R=[],e.some(function(t){var n,r,a,i,s,l;t.__d&&(s=(i=(n=t).__v).__e,(l=n.__P)&&(r=[],(a=P({},i)).__v=i.__v+1,ne(l,i,a,n.__n,l.ownerSVGElement!==void 0,i.__h!=null?[s]:null,r,s==null?A(i):s,i.__h),Ce(r,i),i.__e!=s&&Se(i)))})}function we(e,t,n,r,a,i,s,l,c,_){var o,v,p,f,h,k,m,y=r&&r.__k||be,d=y.length;for(n.__k=[],o=0;o<t.length;o++)if((f=n.__k[o]=(f=t[o])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?Y(null,f,null,null,f):Array.isArray(f)?Y(E,{children:f},null,null,null):f.__b>0?Y(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(p=y[o])===null||p&&f.key==p.key&&f.type===p.type)y[o]=void 0;else for(v=0;v<d;v++){if((p=y[v])&&f.key==p.key&&f.type===p.type){y[v]=void 0;break}p=null}ne(e,f,p=p||D,a,i,s,l,c,_),h=f.__e,(v=f.ref)&&p.ref!=v&&(m||(m=[]),p.ref&&m.push(p.ref,null,f),m.push(v,f.__c||h,f)),h!=null?(k==null&&(k=h),typeof f.type=="function"&&f.__k===p.__k?f.__d=c=Te(f,c,e):c=ke(e,f,p,y,h,c),typeof n.type=="function"&&(n.__d=c)):c&&p.__e==c&&c.parentNode!=e&&(c=A(p))}for(n.__e=k,o=d;o--;)y[o]!=null&&(typeof n.type=="function"&&y[o].__e!=null&&y[o].__e==n.__d&&(n.__d=A(r,o+1)),xe(y[o],y[o]));if(m)for(o=0;o<m.length;o++)Ee(m[o],m[++o],m[++o])}function Te(e,t,n){for(var r,a=e.__k,i=0;a&&i<a.length;i++)(r=a[i])&&(r.__=e,t=typeof r.type=="function"?Te(r,t,n):ke(n,r,r,a,r.__e,t));return t}function ke(e,t,n,r,a,i){var s,l,c;if(t.__d!==void 0)s=t.__d,t.__d=void 0;else if(n==null||a!=i||a.parentNode==null)e:if(i==null||i.parentNode!==e)e.appendChild(a),s=null;else{for(l=i,c=0;(l=l.nextSibling)&&c<r.length;c+=2)if(l==a)break e;e.insertBefore(a,i),s=i}return s!==void 0?s:a.nextSibling}function rt(e,t,n,r,a){var i;for(i in n)i==="children"||i==="key"||i in t||U(e,i,null,n[i],r);for(i in t)a&&typeof t[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===t[i]||U(e,i,t[i],n[i],r)}function me(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||nt.test(t)?n:n+"px"}function U(e,t,n,r,a){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||me(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||me(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?ve:he,i):e.removeEventListener(t,i?ve:he,i);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch(s){}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function he(e){this.l[e.type+!1](g.event?g.event(e):e)}function ve(e){this.l[e.type+!0](g.event?g.event(e):e)}function ne(e,t,n,r,a,i,s,l,c){var _,o,v,p,f,h,k,m,y,d,b,C,T,w=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,l=t.__e=n.__e,t.__h=null,i=[l]),(_=g.__b)&&_(t);try{e:if(typeof w=="function"){if(m=t.props,y=(_=w.contextType)&&r[_.__c],d=_?y?y.props.value:_.__:r,n.__c?k=(o=t.__c=n.__c).__=o.__E:("prototype"in w&&w.prototype.render?t.__c=o=new w(m,d):(t.__c=o=new F(m,d),o.constructor=w,o.render=st),y&&y.sub(o),o.props=m,o.state||(o.state={}),o.context=d,o.__n=r,v=o.__d=!0,o.__h=[]),o.__s==null&&(o.__s=o.state),w.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=P({},o.__s)),P(o.__s,w.getDerivedStateFromProps(m,o.__s))),p=o.props,f=o.state,v)w.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(w.getDerivedStateFromProps==null&&m!==p&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(m,d),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(m,o.__s,d)===!1||t.__v===n.__v){o.props=m,o.state=o.__s,t.__v!==n.__v&&(o.__d=!1),o.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(S){S&&(S.__=t)}),o.__h.length&&s.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(m,o.__s,d),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(p,f,h)})}if(o.context=d,o.props=m,o.__v=t,o.__P=e,b=g.__r,C=0,"prototype"in w&&w.prototype.render)o.state=o.__s,o.__d=!1,b&&b(t),_=o.render(o.props,o.state,o.context);else do o.__d=!1,b&&b(t),_=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++C<25);o.state=o.__s,o.getChildContext!=null&&(r=P(P({},r),o.getChildContext())),v||o.getSnapshotBeforeUpdate==null||(h=o.getSnapshotBeforeUpdate(p,f)),T=_!=null&&_.type===E&&_.key==null?_.props.children:_,we(e,Array.isArray(T)?T:[T],t,n,r,a,i,s,l,c),o.base=t.__e,t.__h=null,o.__h.length&&s.push(o),k&&(o.__E=o.__=null),o.__e=!1}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=ot(n.__e,t,n,r,a,i,s,c);(_=g.diffed)&&_(t)}catch(S){t.__v=null,(c||i!=null)&&(t.__e=l,t.__h=!!c,i[i.indexOf(l)]=null),g.__e(S,t,n)}}function Ce(e,t){g.__c&&g.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){g.__e(r,n.__v)}})}function ot(e,t,n,r,a,i,s,l){var c,_,o,v=n.props,p=t.props,f=t.type,h=0;if(f==="svg"&&(a=!0),i!=null){for(;h<i.length;h++)if((c=i[h])&&"setAttribute"in c==!!f&&(f?c.localName===f:c.nodeType===3)){e=c,i[h]=null;break}}if(e==null){if(f===null)return document.createTextNode(p);e=a?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,p.is&&p),i=null,l=!1}if(f===null)v===p||l&&e.data===p||(e.data=p);else{if(i=i&&X.call(e.childNodes),_=(v=n.props||D).dangerouslySetInnerHTML,o=p.dangerouslySetInnerHTML,!l){if(i!=null)for(v={},h=0;h<e.attributes.length;h++)v[e.attributes[h].name]=e.attributes[h].value;(o||_)&&(o&&(_&&o.__html==_.__html||o.__html===e.innerHTML)||(e.innerHTML=o&&o.__html||""))}if(rt(e,p,v,a,l),o)t.__k=[];else if(h=t.props.children,we(e,Array.isArray(h)?h:[h],t,n,r,a&&f!=="foreignObject",i,s,i?i[0]:n.__k&&A(n,0),l),i!=null)for(h=i.length;h--;)i[h]!=null&&ye(i[h]);l||("value"in p&&(h=p.value)!==void 0&&(h!==e.value||f==="progress"&&!h||f==="option"&&h!==v.value)&&U(e,"value",h,v.value,!1),"checked"in p&&(h=p.checked)!==void 0&&h!==e.checked&&U(e,"checked",h,v.checked,!1))}return e}function Ee(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){g.__e(r,n)}}function xe(e,t,n){var r,a;if(g.unmount&&g.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Ee(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){g.__e(i,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&xe(r[a],t,typeof e.type!="function");n||e.__e==null||ye(e.__e),e.__=e.__e=e.__d=void 0}function st(e,t,n){return this.constructor(e,n)}function W(e,t,n){var r,a,i;g.__&&g.__(e,t),a=(r=typeof n=="function")?null:n&&n.__k||t.__k,i=[],ne(t,e=(!r&&n||t).__k=u(E,null,[e]),a||D,D,t.ownerSVGElement!==void 0,!r&&n?[n]:a?null:t.firstChild?X.call(t.childNodes):null,i,!r&&n?n:a?a.__e:t.firstChild,r),Ce(i,e)}X=be.slice,g={__e:function(e,t,n,r){for(var a,i,s;t=t.__;)if((a=t.__c)&&!a.__)try{if((i=a.constructor)&&i.getDerivedStateFromError!=null&&(a.setState(i.getDerivedStateFromError(e)),s=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),s=a.__d),s)return a.__E=a}catch(l){e=l}throw e}},ge=0,tt=function(e){return e!=null&&e.constructor===void 0},F.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof e=="function"&&(e=e(P({},n),this.props)),e&&P(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),_e(this))},F.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),_e(this))},F.prototype.render=E,R=[],q.__r=0,it=0;function at(e){return u("div",{className:"col-md-4 col-6 col-lg-3"},u("a",{href:`/create/${e.slug}`,className:"card card--market d-block"},u("img",{className:"card-img-top mb-3 img-fluid lazy",style:"aspect-ratio: 4/3",alt:e.title,src:`/site/img/vizzards/${e.slug}-400x.png`,srcset:`/site/img/vizzards/${e.slug}-400x.png 1x, /site/img/vizzards/${e.slug}.png 2x`}),u("div",{className:"card-body p-0"},u("h4",{className:"card-title"},e.title),u("p",{className:"card-text"},e.desc))),u("div",{class:"card-bottom-border"}))}function Ie(){var n;let e=document.querySelector("#portfolio_search_query_input");e.focus();let t=(n=new URLSearchParams(window.location.search))==null?void 0:n.get("q");t&&(e.value=t,fetch(`/siteapi/portfolio-search?q=${encodeURIComponent(t)}`).then(r=>r.json()).then(r=>{var i;(i=document.querySelector(".market-nav-tabs-wrapper"))==null||i.remove();let a=document.querySelector("#portfolio_search_results");a.innerHTML="",W(u(E,null,u("div",{className:"market-nav-tabs-wrapper"},u("div",{className:"nav nav-tabs--market"},u("a",{href:"/graphs",className:"nav-link"},u("i",{class:"svg-icon svg-icon--20"},u("svg",null,u("use",{xlinkHref:"/site/img/icons.svg#chevron-left"}))),"Back"),u("span",{className:"nav-link active"},r.length," result",r.length!=1?"s":""," for \u201C",t,"\u201D"))),u("section",{className:"cards"},u("div",{className:"row row-md-top"},r.map(s=>at(s))))),a)}))}var lt=({image:e,onClick:t,size:n=160,gutter:r=16})=>u("img",{onClick:t,src:e.src.replace("[SIZE]","400x"),alt:e.alt,loading:"lazy",style:{width:n+"px",marginRight:r+"px"},className:"thumbnail"}),Le=lt;var Z,x,re,Ne,G=0,Re=[],j=[],Pe=g.__b,Oe=g.__r,ze=g.diffed,Ae=g.__c,Be=g.unmount;function se(e,t){g.__h&&g.__h(x,e,G||t),G=0;var n=x.__H||(x.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:j}),n.__[e]}function N(e){return G=1,ct(Me,e)}function ct(e,t,n){var r=se(Z++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Me(void 0,t),function(i){var s=r.__N?r.__N[0]:r.__[0],l=r.t(s,i);s!==l&&(r.__N=[l,r.__[1]],r.__c.setState({}))}],r.__c=x,!x.u)){x.u=!0;var a=x.shouldComponentUpdate;x.shouldComponentUpdate=function(i,s,l){if(!r.__c.__H)return!0;var c=r.__c.__H.__.filter(function(o){return o.__c});if(c.every(function(o){return!o.__N}))return!a||a.call(this,i,s,l);var _=!1;return c.forEach(function(o){if(o.__N){var v=o.__[0];o.__=o.__N,o.__N=void 0,v!==o.__[0]&&(_=!0)}}),!!_&&(!a||a.call(this,i,s,l))}}return r.__N||r.__}function O(e,t){var n=se(Z++,3);!g.__s&&We(n.__H,t)&&(n.__=e,n.i=t,x.__H.__h.push(n))}function J(e){return G=5,dt(function(){return{current:e}},[])}function dt(e,t){var n=se(Z++,7);return We(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function ut(){for(var e;e=Re.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach($),e.__H.__h.forEach(oe),e.__H.__h=[]}catch(t){e.__H.__h=[],g.__e(t,e.__v)}}g.__b=function(e){typeof e.type!="function"||e.o||e.type===E?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),x=null,Pe&&Pe(e)},g.__r=function(e){Oe&&Oe(e),Z=0;var t=(x=e.__c).__H;t&&(re===x?(t.__h=[],x.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=j,n.__N=n.i=void 0})):(t.__h.forEach($),t.__h.forEach(oe),t.__h=[])),re=x},g.diffed=function(e){ze&&ze(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Re.push(t)!==1&&Ne===g.requestAnimationFrame||((Ne=g.requestAnimationFrame)||ft)(ut)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==j&&(n.__=n.__V),n.i=void 0,n.__V=j})),re=x=null},g.__c=function(e,t){t.some(function(n){try{n.__h.forEach($),n.__h=n.__h.filter(function(r){return!r.__||oe(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],g.__e(r,n.__v)}}),Ae&&Ae(e,t)},g.unmount=function(e){Be&&Be(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{$(r)}catch(a){t=a}}),n.__H=void 0,t&&g.__e(t,n.__v))};var He=typeof requestAnimationFrame=="function";function ft(e){var t,n=function(){clearTimeout(r),He&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);He&&(t=requestAnimationFrame(n))}function $(e){var t=x,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),x=t}function oe(e){var t=x;e.__c=e.__(),x=t}function We(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Me(e,t){return typeof t=="function"?t(e):t}var pt=({images:e,onClick:t,size:n=160,gutter:r=16,scrollbar:a=!1})=>{let i=J(),s=()=>{i.current.scrollBy({behavior:"smooth",left:-(n+r)})},l=()=>{i.current.scrollBy({behavior:"smooth",left:n+r})};return u(E,null,u("div",{ref:i,className:`d-flex flex-row mt-3 ${a?"overflow-auto":"overflow-hidden"} slider`},e.map((_,o)=>u("div",{key:o},u(Le,{size:n,gutter:r,image:_,onClick:()=>t(o)})))),u("div",{className:"slider-arrow prev",onClick:s},u("svg",{viewBox:"0 0 24 24",width:24,height:24},u("path",{fill:"currentColor",d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}))),u("div",{className:"slider-arrow next",onClick:l},u("svg",{viewBox:"0 0 24 24",width:24,height:24},u("path",{fill:"currentColor",d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}))))},K=pt;var _t=({images:e,videoId:t,imageSize:n,currentIndex:r,vizzard:a})=>{let[i,s]=N(r),[l,c]=N(0),[_,o]=N(!1),v=J(),p=()=>{s(m=>m<=0?e.length-1:m-1)},f=()=>{s(m=>m>=e.length-1?0:m+1)};O(()=>{var m;(m=v.current)==null||m.scrollTo({behavior:"smooth",left:l*i})},[i,l,v]);let h=m=>m===1&&!!t;O(()=>{let m=()=>{var y;c((y=v.current)==null?void 0:y.clientWidth)};return window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]),O(()=>{c(v.current.clientWidth)},[v.current]),O(()=>{let m;h(i)?o(!0):_&&(m=setTimeout(()=>o(!1),1e3))},[i]);let k=e.length>0?e:a!=null&&a.image?[a.image]:[];return u("div",{className:"position-relative"},u("div",{ref:v,className:"d-flex flex-row overflow-hidden"},k.map((m,y)=>{var d,b;return u("div",{key:y,className:"col-12 m-0 p-0"},h(y)?_&&u("iframe",{width:(d=v.current)==null?void 0:d.clientWidth,height:((b=v.current)==null?void 0:b.clientWidth)*.5695,src:"https://www.youtube.com/embed/"+t,frameBorder:0,allowFullScreen:!0,title:"video"}):u("img",{loading:"lazy",src:m.src.replace("[SIZE]",n+"x"),alt:m.alt,className:"w-100"}))})),k.length>1&&u(E,null,u("div",{className:"slider-arrow prev big",onClick:p},u("svg",{viewBox:"0 0 24 24",width:48,height:48},u("path",{fill:"currentColor",d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}))),u("div",{className:"slider-arrow next big",onClick:f},u("svg",{viewBox:"0 0 24 24",width:48,height:48},u("path",{fill:"currentColor",d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})))))},z=_t;var Q=n=>{var r=n,{onClose:e}=r,t=fe(r,["onClose"]);return u(E,null,u("div",{className:"modal fade show p-0 d-md-block d-none"},u("div",{className:"position-absolute backdrop w-100 h-100",onClick:e}),u("div",{className:"modal-dialog market-details-modal modal-dialog-centered modal-lg"},u("div",{className:"modal-content"},u("div",{className:"modal-body p-0"},u(z,H({imageSize:1600},t)))))))};var ae=()=>{let[e,t]=N(window.innerWidth);return O(()=>{let n=()=>{t(window.innerWidth)};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e},Ve=e=>{let[t,n]=N(!1),[r,a]=N(0),{screenshot:i,images:s}=e,l=ae(),c=[...s];i&&c.splice(0,0,i),e.videoId&&c.splice(1,0,{src:`https://img.youtube.com/vi/${e.videoId}/maxresdefault.jpg`,alt:"Video Thumbnail"});let _=[...c],o=_.splice(0,1)[0],v=f=>{a(f+1),n(!0)},p=()=>{a(0),n(!0)};return u(E,null,l>=992&&u(E,null,o?u("div",{className:"w-100 d-none d-lg-block"},u("div",{className:"position-relative"},u("img",{loading:"lazy",src:o.src.replace("[SIZE]","800x"),alt:o.alt,className:"w-100"}),u("div",{onClick:p,className:"preview-cover position-absolute d-flex align-items-center justify-content-center"},u("svg",{viewBox:"0 0 24 24",width:100,height:100},u("path",{fill:"white",d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})))),u("div",{className:"position-relative"},u(K,{images:_,onClick:v,scrollbar:!1,gutter:16,size:160}))):u("div",{className:"w-100 d-none d-lg-block"},u("img",{loading:"lazy",src:e.vizzard.image.src,alt:`Create ${e.vizzard.title}`,className:"w-100"})),t&&u(Q,{onClose:()=>n(!1),currentIndex:r,images:c,videoId:e.videoId,vizzard:e.vizzard})),l<992&&u("div",{className:"w-100 flex-column "},u("div",{className:"col-12 col-lg-8 m-0 p-0"},l>567&&u(z,{videoId:e.videoId,images:c,imageSize:800,currentIndex:0,vizzard:e.vizzard}),l<567&&u(z,{videoId:e.videoId,images:c,imageSize:400,currentIndex:0,vizzard:e.vizzard}))))};var mt=({images:e,scrollbar:t=!1,size:n=160,gutter:r=16})=>{let[a,i]=N(!1),[s,l]=N(0),c=ae(),_=v=>{l(v),i(!0)},o=768;return u("div",{className:"position-relative m-4"},c>=o&&u(E,null,u(K,{size:n,gutter:r,scrollbar:t,images:e,onClick:_}),a&&u(Q,{onClose:()=>i(!1),currentIndex:s,images:e})),c<o&&u(E,null,u(z,{images:e,imageSize:800,currentIndex:s})))},Ye=mt;var je=et(De());var qe=(()=>{let e=".stickySidebar",t="3.3.1",n={topSpacing:0,bottomSpacing:0,containerSelector:!1,innerWrapperSelector:".inner-wrapper-sticky",stickyClass:"is-affixed",resizeSensor:!0,minWidth:!1};class r{constructor(i,s={}){if(this.options=r.extend(n,s),this.sidebar=typeof i=="string"?document.querySelector(i):i,typeof this.sidebar=="undefined")throw new Error("There is no specific sidebar element.");this.sidebarInner=!1,this.container=this.sidebar.parentElement,this.affixedType="STATIC",this.direction="down",this.support={transform:!1,transform3d:!1},this._initialized=!1,this._reStyle=!1,this._breakpoint=!1,this._resizeListeners=[],this.dimensions={translateY:0,topSpacing:0,lastTopSpacing:0,bottomSpacing:0,lastBottomSpacing:0,sidebarHeight:0,sidebarWidth:0,containerTop:0,containerHeight:0,viewportHeight:0,viewportTop:0,lastViewportTop:0},["handleEvent"].forEach(l=>{this[l]=this[l].bind(this)}),this.initialize()}initialize(){if(this._setSupportFeatures(),this.options.innerWrapperSelector&&(this.sidebarInner=this.sidebar.querySelector(this.options.innerWrapperSelector),this.sidebarInner===null&&(this.sidebarInner=!1)),!this.sidebarInner){let i=document.createElement("div");for(i.setAttribute("class","inner-wrapper-sticky"),this.sidebar.appendChild(i);this.sidebar.firstChild!=i;)i.appendChild(this.sidebar.firstChild);this.sidebarInner=this.sidebar.querySelector(".inner-wrapper-sticky")}if(this.options.containerSelector){let i=document.querySelectorAll(this.options.containerSelector);if(i=Array.prototype.slice.call(i),i.forEach((s,l)=>{!s.contains(this.sidebar)||(this.container=s)}),!i.length)throw new Error("The container does not contains on the sidebar.")}typeof this.options.topSpacing!="function"&&(this.options.topSpacing=parseInt(this.options.topSpacing)||0),typeof this.options.bottomSpacing!="function"&&(this.options.bottomSpacing=parseInt(this.options.bottomSpacing)||0),this._widthBreakpoint(),this.calcDimensions(),this.stickyPosition(),this.bindEvents(),this._initialized=!0}bindEvents(){window.addEventListener("resize",this,{passive:!0,capture:!1}),window.addEventListener("scroll",this,{passive:!0,capture:!1}),this.sidebar.addEventListener("update"+e,this),this.options.resizeSensor&&typeof ResizeSensor!="undefined"&&(new ResizeSensor(this.sidebarInner,this.handleEvent),new ResizeSensor(this.container,this.handleEvent))}handleEvent(i){this.updateSticky(i)}calcDimensions(){if(!this._breakpoint){var i=this.dimensions;i.containerTop=r.offsetRelative(this.container).top,i.containerHeight=this.container.clientHeight,i.containerBottom=i.containerTop+i.containerHeight,i.sidebarHeight=this.sidebarInner.offsetHeight,i.sidebarWidth=this.sidebar.offsetWidth,i.viewportHeight=window.innerHeight,this._calcDimensionsWithScroll()}}_calcDimensionsWithScroll(){var i=this.dimensions;i.sidebarLeft=r.offsetRelative(this.sidebar).left,i.viewportTop=document.documentElement.scrollTop||document.body.scrollTop,i.viewportBottom=i.viewportTop+i.viewportHeight,i.viewportLeft=document.documentElement.scrollLeft||document.body.scrollLeft,i.topSpacing=this.options.topSpacing,i.bottomSpacing=this.options.bottomSpacing,typeof i.topSpacing=="function"&&(i.topSpacing=parseInt(i.topSpacing(this.sidebar))||0),typeof i.bottomSpacing=="function"&&(i.bottomSpacing=parseInt(i.bottomSpacing(this.sidebar))||0),this.affixedType==="VIEWPORT-TOP"?i.topSpacing<i.lastTopSpacing&&(i.translateY+=i.lastTopSpacing-i.topSpacing,this._reStyle=!0):this.affixedType==="VIEWPORT-BOTTOM"&&i.bottomSpacing<i.lastBottomSpacing&&(i.translateY+=i.lastBottomSpacing-i.bottomSpacing,this._reStyle=!0),i.lastTopSpacing=i.topSpacing,i.lastBottomSpacing=i.bottomSpacing}isSidebarFitsViewport(){return this.dimensions.sidebarHeight<this.dimensions.viewportHeight}observeScrollDir(){var i=this.dimensions;if(i.lastViewportTop!==i.viewportTop){var s=this.direction==="down"?Math.min:Math.max;i.viewportTop===s(i.viewportTop,i.lastViewportTop)&&(this.direction=this.direction==="down"?"up":"down")}}getAffixType(){var i=this.dimensions,s=!1;this._calcDimensionsWithScroll();var l=i.sidebarHeight+i.containerTop,c=i.viewportTop+i.topSpacing,_=i.viewportBottom-i.bottomSpacing;return this.direction==="up"?c<=i.containerTop?(i.translateY=0,s="STATIC"):c<=i.translateY+i.containerTop?(i.translateY=c-i.containerTop,s="VIEWPORT-TOP"):!this.isSidebarFitsViewport()&&i.containerTop<=c&&(s="VIEWPORT-UNBOTTOM"):this.isSidebarFitsViewport()?i.sidebarHeight+c>=i.containerBottom?(i.translateY=i.containerBottom-l,s="CONTAINER-BOTTOM"):c>=i.containerTop&&(i.translateY=c-i.containerTop,s="VIEWPORT-TOP"):i.containerBottom<=_?(i.translateY=i.containerBottom-l,s="CONTAINER-BOTTOM"):l+i.translateY<=_?(i.translateY=_-l,s="VIEWPORT-BOTTOM"):i.containerTop+i.translateY<=c&&(s="VIEWPORT-UNBOTTOM"),i.translateY=Math.max(0,i.translateY),i.translateY=Math.min(i.containerHeight,i.translateY),i.lastViewportTop=i.viewportTop,s}_getStyle(i){if(typeof i!="undefined"){var s={inner:{},outer:{}},l=this.dimensions;switch(i){case"VIEWPORT-TOP":s.inner={position:"fixed",top:l.topSpacing,left:l.sidebarLeft-l.viewportLeft,width:l.sidebarWidth};break;case"VIEWPORT-BOTTOM":s.inner={position:"fixed",top:"auto",left:l.sidebarLeft,bottom:l.bottomSpacing,width:l.sidebarWidth};break;case"CONTAINER-BOTTOM":case"VIEWPORT-UNBOTTOM":let c=this._getTranslate(0,l.translateY+"px");c?s.inner={transform:c}:s.inner={position:"absolute",top:l.translateY,width:l.sidebarWidth};break}switch(i){case"VIEWPORT-TOP":case"VIEWPORT-BOTTOM":case"VIEWPORT-UNBOTTOM":case"CONTAINER-BOTTOM":s.outer={height:l.sidebarHeight,position:"relative"};break}return s.outer=r.extend({height:"",position:""},s.outer),s.inner=r.extend({position:"relative",top:"",left:"",bottom:"",width:"",transform:this._getTranslate()},s.inner),s}}stickyPosition(i){if(!this._breakpoint){i=this._reStyle||i||!1;var s=this.options.topSpacing,l=this.options.bottomSpacing,c=this.getAffixType(),_=this._getStyle(c);if((this.affixedType!=c||i)&&c){let o="affix."+c.toLowerCase().replace("viewport-","")+e;r.eventTrigger(this.sidebar,o),c==="STATIC"?r.removeClass(this.sidebar,this.options.stickyClass):r.addClass(this.sidebar,this.options.stickyClass);for(let p in _.outer){let f=typeof _.outer[p]=="number"?"px":"";this.sidebar.style[p]=_.outer[p]}for(let p in _.inner){let f=typeof _.inner[p]=="number"?"px":"";this.sidebarInner.style[p]=_.inner[p]+f}let v="affixed."+c.toLowerCase().replace("viewport-","")+e;r.eventTrigger(this.sidebar,v)}else this._initialized&&(this.sidebarInner.style.left=_.inner.left);this.affixedType=c}}_widthBreakpoint(){window.innerWidth<=this.options.minWidth?(this._breakpoint=!0,this.affixedType="STATIC",this.sidebar.removeAttribute("style"),r.removeClass(this.sidebar,this.options.stickyClass),this.sidebarInner.removeAttribute("style")):this._breakpoint=!1}updateSticky(i={}){this._running||(this._running=!0,(s=>{requestAnimationFrame(()=>{switch(s){case"scroll":this._calcDimensionsWithScroll(),this.observeScrollDir(),this.stickyPosition();break;case"resize":default:this._widthBreakpoint(),this.calcDimensions(),this.stickyPosition(!0);break}this._running=!1})})(i.type))}_setSupportFeatures(){var i=this.support;i.transform=r.supportTransform(),i.transform3d=r.supportTransform(!0)}_getTranslate(i=0,s=0,l=0){return this.support.transform3d?"translate3d("+i+", "+s+", "+l+")":this.support.translate?"translate("+i+", "+s+")":!1}destroy(){window.removeEventListener("resize",this,{caption:!1}),window.removeEventListener("scroll",this,{caption:!1}),this.sidebar.classList.remove(this.options.stickyClass),this.sidebar.style.minHeight="",this.sidebar.removeEventListener("update"+e,this);var i={inner:{},outer:{}};i.inner={position:"",top:"",left:"",bottom:"",width:"",transform:""},i.outer={height:"",position:""};for(let s in i.outer)this.sidebar.style[s]=i.outer[s];for(let s in i.inner)this.sidebarInner.style[s]=i.inner[s];this.options.resizeSensor&&typeof ResizeSensor!="undefined"&&(ResizeSensor.detach(this.sidebarInner,this.handleEvent),ResizeSensor.detach(this.container,this.handleEvent))}static supportTransform(i){var s=!1,l=i?"perspective":"transform",c=l.charAt(0).toUpperCase()+l.slice(1),_=["Webkit","Moz","O","ms"],o=document.createElement("support"),v=o.style;return(l+" "+_.join(c+" ")+c).split(" ").forEach(function(p,f){if(v[p]!==void 0)return s=p,!1}),s}static eventTrigger(i,s,l){try{var c=new CustomEvent(s,{detail:l})}catch(_){var c=document.createEvent("CustomEvent");c.initCustomEvent(s,!0,!0,l)}i.dispatchEvent(c)}static extend(i,s){var l={};for(let c in i)typeof s[c]!="undefined"?l[c]=s[c]:l[c]=i[c];return l}static offsetRelative(i){var s={left:0,top:0};do{let l=i.offsetTop,c=i.offsetLeft;isNaN(l)||(s.top+=l),isNaN(c)||(s.left+=c),i=i.tagName==="BODY"?i.parentElement:i.offsetParent}while(i);return s}static addClass(i,s){r.hasClass(i,s)||(i.classList?i.classList.add(s):i.className+=" "+s)}static removeClass(i,s){r.hasClass(i,s)&&(i.classList?i.classList.remove(s):i.className=i.className.replace(new RegExp("(^|\\b)"+s.split(" ").join("|")+"(\\b|$)","gi")," "))}static hasClass(i,s){return i.classList?i.classList.contains(s):new RegExp("(^| )"+s+"( |$)","gi").test(i.className)}}return r})(),Ue=qe;window.StickySidebar=qe;function Xe(){var v;let e=document.querySelectorAll("#descriptionContent > h1, #descriptionContent > h2, #descriptionContent > h3, #descriptionContent > h4, #descriptionContent > h5, #descriptionContent > h6"),t=null,n,r=document.querySelector("#mobileNavigationBtn"),a=document.querySelector("#alternativesHeading"),i=document.querySelector("#alternatives");function s(){let p=document.querySelector("#stickySidebarContent"),f=document.querySelector("#mobileSectionNavigator"),h=document.querySelector("#stickySidebar"),k=null,m=null,y=null,d=!1;setTimeout(function(){d=!0},500);let b=(T,w)=>{n&&n.classList.remove("sticky-sidebar__item--active"),T.classList.add("sticky-sidebar__item--active"),w.setAttribute("selected",!0),n=T},C=T=>{let w=parseInt(T.getAttribute("data-index"),10),S=100,L=300;if(w!==1e3){let B=e[w],M=B.getBoundingClientRect().top+window.scrollY;window.scroll({top:M-S,left:0,behavior:"smooth"}),o("#"+B.getAttribute("id"));return}let I=i.getBoundingClientRect().top+window.scrollY;window.scroll({top:I-L,left:0,behavior:"smooth"}),o("#"+i.getAttribute("id"))};if(e.length<2){f.classList.remove("d-block");return}h.classList.add("d-lg-block"),f.classList.remove("d-none"),e.forEach(function(T,w){let S=document.createElement("li"),L=document.createElement("a"),I=document.createElement("span"),B=T.textContent,M=w===e.length-1,ce="#"+T.id;S.classList.add("py-1"),S.classList.add("sticky-sidebar__item"),S.setAttribute("data-index",w.toString()),I.classList.add("dropdown-item"),I.setAttribute("data-index",w.toString()),w===0&&(k=S),(w===0||ce===window.location.hash)&&b(S,I),L.setAttribute("href",ce),L.innerText=B,S.appendChild(L),I.innerText=B,p.appendChild(S),document.querySelectorAll("#mobileSectionNavigator > .dropdown-menu").forEach(ee=>ee.appendChild(I)),!a&&M&&(m=S),a&&M&&(S=document.createElement("li"),I=I.cloneNode(),L=document.createElement("a"),S.classList.add("py-1"),S.classList.add("sticky-sidebar__item"),S.setAttribute("data-index","1000"),I.setAttribute("data-index","1000"),L.setAttribute("href","#"+i.id),L.innerText=a.textContent,S.appendChild(L),I.innerText=a.textContent,m=S,p.appendChild(S),document.querySelectorAll("#mobileSectionNavigator > .dropdown-menu").forEach(ee=>ee.appendChild(I)),window.location.hash==="#alternatives"&&b(S,I))}),document.querySelectorAll("#mobileSectionNavigator > .dropdown-menu").forEach(T=>{T.addEventListener("click",function(){r.textContent=T.textContent,C(T)})}),document.querySelectorAll(".sticky-sidebar__item").forEach(T=>{T.addEventListener("click",function(w){r.textContent=T.textContent;let S=T;w.preventDefault(),d=!1,C(S),y&&clearTimeout(y),y=setTimeout(function(){d=!0},1e3)})}),t=new Ue("#stickySidebar",{topSpacing:350,containerSelector:"#stickyContainer",innerWrapperSelector:".sticky-sidebar__inner"}),h.addEventListener("affix.static.stickySidebar",function(){!d||(n.classList.remove("sticky-sidebar__item--active"),k.classList.add("sticky-sidebar__item--active"),n=k)}),h.addEventListener("affix.container-bottom.stickySidebar",function(T){!d||(n.classList.remove("sticky-sidebar__item--active"),m.classList.add("sticky-sidebar__item--active"),n=m)})}function l(){document.querySelectorAll(".sticky-sidebar__item").forEach(p=>{var b;let f=parseInt(p.getAttribute("data-index"),10),h=f!==1e3?e[f]:i,k=window.pageYOffset,m=((b=h==null?void 0:h.getBoundingClientRect())==null?void 0:b.top)+window.scrollY,y=f!==1e3?100:300,d=Math.floor(m)-y;k>=d&&(p.classList.add("sticky-sidebar__item--active"),n!==p&&(n.classList.remove("sticky-sidebar__item--active"),n=p))})}function c(){t&&t.updateSticky()}function _(){let p=document.querySelector("#descriptionContent").querySelectorAll("p"),f=p.length,h=e.length;if(!window.vizzloExamples.length||!h&&!f)return;let k=document.createElement("img");k.setAttribute("src",window.vizzloLogoImage),k.setAttribute("loading","lazy"),k.setAttribute("alt","{{ page.title ~ 'description example'}}"),k.addEventListener("load",c),k.classList.add("market-details__logo-image img-fluid");let m=document.createElement("div");if(m.classList.add("market-details__logo-wrap text-center mb-4"),m.appendChild(k),h){document.insertBefore(e[1].previousElementSibling,m);return}f&&document.insertBefore(p[0],m)}function o(p){let f=p.replace(/^.*#/,""),h=document.getElementById(f);h.id=f+"-tmp",window.location.hash=p,h.id=f}(v=document.querySelector("#topScrollButton"))==null||v.addEventListener("click",function(p){p.preventDefault(),window.scroll({top:document.querySelector("#top").getBoundingClientRect().top,left:0,behavior:"smooth"}),o("#top")}),document.addEventListener("DOMContentLoaded",function(){s(),document.body.scrollTop>0?_():document.addEventListener("scroll",function(){_()})}),document.addEventListener("scroll",()=>{l()})}window.startPortfolioSearchApp=Ie;window.enableSmoothScroll=()=>{window.__forceSmoothScrollPolyfill__=!0,je.default.polyfill()};window.startSliderApp=(e,t)=>{W(u(Ve,H({},e)),t)};window.startInlineSliderApp=(e,t)=>{W(u(Ye,H({},e)),t)};window.startStickySidebar=Xe;window.CustomEvent&&document.body.dispatchEvent(new CustomEvent("site-app-init"));})();
/**
 * Sticky Sidebar JavaScript Plugin.
 * @version 3.3.1
 * @author Ahmed Bouhuolia <a.bouhuolia@gmail.com>
 * @license The MIT License (MIT)
 */
//# sourceMappingURL=website.js.map
