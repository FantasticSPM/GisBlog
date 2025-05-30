import{H as So,I as zo,s as Ao,J as Po,j as Ce,r as U,d as V,C as No,h as v,K as Ro,q as ko,f as Ue,B as J,G as Ie,y,z as ue,x as X,L as no,M as Se,T as Ho,D as se,A as Y,F as ro,N as qe,O as fe,E as $o,p as _o,a as Oo,o as io,b as Ko,e as de,u as To,n as Eo,k as Fo,w as ve}from"./index-B1S78SGt.js";import{_ as Lo}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{q as Mo,b as C,c as w,u as Bo,a as lo,s as Te,f as ze,p as be,e as jo,j as ie,g as E,l as Ee,h as ce,d as z,o as le,m as oe,N as Do}from"./light-CtjHvf03.js";import{h as Go,o as pe,a as me,c as Vo,b as Wo,p as ao,_ as co,d as Fe,f as Uo,B as qo,V as Zo,e as Xo,g as so,X as Jo,r as Qo,m as Yo,i as et,k as xe,u as He,j as ot,l as tt,n as nt}from"./Popover-BmXaWauV.js";function Ze(e,t){let{target:o}=e;for(;o;){if(o.dataset&&o.dataset[t]!==void 0)return!0;o=o.parentElement}return!1}function rt(e={},t){const o=So({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:r}=e,i=a=>{switch(a.key){case"Control":o.ctrl=!0;break;case"Meta":o.command=!0,o.win=!0;break;case"Shift":o.shift=!0;break;case"Tab":o.tab=!0;break}n!==void 0&&Object.keys(n).forEach(s=>{if(s!==a.key)return;const f=n[s];if(typeof f=="function")f(a);else{const{stop:h=!1,prevent:p=!1}=f;h&&a.stopPropagation(),p&&a.preventDefault(),f.handler(a)}})},l=a=>{switch(a.key){case"Control":o.ctrl=!1;break;case"Meta":o.command=!1,o.win=!1;break;case"Shift":o.shift=!1;break;case"Tab":o.tab=!1;break}r!==void 0&&Object.keys(r).forEach(s=>{if(s!==a.key)return;const f=r[s];if(typeof f=="function")f(a);else{const{stop:h=!1,prevent:p=!1}=f;h&&a.stopPropagation(),p&&a.preventDefault(),f.handler(a)}})},d=()=>{(t===void 0||t.value)&&(me("keydown",document,i),me("keyup",document,l)),t!==void 0&&Ce(t,a=>{a?(me("keydown",document,i),me("keyup",document,l)):(pe("keydown",document,i),pe("keyup",document,l))})};return Go()?(zo(d),Ao(()=>{(t===void 0||t.value)&&(pe("keydown",document,i),pe("keyup",document,l))})):d(),Po(o)}function it(e,t,o){const n=U(e.value);let r=null;return Ce(e,i=>{r!==null&&window.clearTimeout(r),i===!0?o&&!o.value?n.value=!0:r=window.setTimeout(()=>{n.value=!0},t):n.value=!1}),n}const re="v-hidden",lt=Vo("[v-hidden]",{display:"none!important"}),at=V({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const o=U(null),n=U(null);function r(l){const{value:d}=o,{getCounter:a,getTail:s}=e;let f;if(a!==void 0?f=a():f=n.value,!d||!f)return;f.hasAttribute(re)&&f.removeAttribute(re);const{children:h}=d;if(l.showAllItemsBeforeCalculate)for(const K of h)K.hasAttribute(re)&&K.removeAttribute(re);const p=d.offsetWidth,H=[],x=t.tail?s==null?void 0:s():null;let $=x?x.offsetWidth:0,N=!1;const O=d.children.length-(t.tail?1:0);for(let K=0;K<O-1;++K){if(K<0)continue;const m=h[K];if(N){m.hasAttribute(re)||m.setAttribute(re,"");continue}else m.hasAttribute(re)&&m.removeAttribute(re);const g=m.offsetWidth;if($+=g,H[K]=g,$>p){const{updateCounter:F}=e;for(let R=K;R>=0;--R){const M=O-1-R;F!==void 0?F(M):f.textContent=`${M}`;const j=f.offsetWidth;if($-=H[R],$+j<=p||R===0){N=!0,K=R-1,x&&(K===-1?(x.style.maxWidth=`${p-j}px`,x.style.boxSizing="border-box"):x.style.maxWidth="");const{onUpdateCount:T}=e;T&&T(M);break}}}}const{onUpdateOverflow:W}=e;N?W!==void 0&&W(!0):(W!==void 0&&W(!1),f.setAttribute(re,""))}const i=Mo();return lt.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Wo,ssr:i}),ko(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:o,counterRef:n,sync:r}},render(){const{$slots:e}=this;return No(()=>this.sync({showAllItemsBeforeCalculate:!1})),v("div",{class:"v-overflow",ref:"selfRef"},[Ro(e,"default"),e.counter?e.counter():v("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function dt(e){return t=>{t?e.value=t.$el:e.value=null}}function Le(e){return Object.keys(e)}function te(e,...t){return typeof e=="function"?e(...t):typeof e=="string"?Ue(e):typeof e=="number"?Ue(String(e)):null}const ct=C("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[w("svg",`
 height: 1em;
 width: 1em;
 `)]),st=V({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){Bo("-base-icon",ct,J(e,"clsPrefix"))},render(){return v("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),ut=V({name:"ChevronDownFilled",render(){return v("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),vt=V({name:"ChevronRight",render(){return v("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});function Xe(e){return Array.isArray(e)?e:[e]}const $e={STOP:"STOP"};function uo(e,t){const o=t(e);e.children!==void 0&&o!==$e.STOP&&e.children.forEach(n=>uo(n,t))}function ft(e,t={}){const{preserveGroup:o=!1}=t,n=[],r=o?l=>{l.isLeaf||(n.push(l.key),i(l.children))}:l=>{l.isLeaf||(l.isGroup||n.push(l.key),i(l.children))};function i(l){l.forEach(r)}return i(e),n}function ht(e,t){const{isLeaf:o}=e;return o!==void 0?o:!t(e)}function pt(e){return e.children}function mt(e){return e.key}function gt(){return!1}function bt(e,t){const{isLeaf:o}=e;return!(o===!1&&!Array.isArray(t(e)))}function xt(e){return e.disabled===!0}function yt(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function Ne(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function Re(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function wt(e,t){const o=new Set(e);return t.forEach(n=>{o.has(n)||o.add(n)}),Array.from(o)}function Ct(e,t){const o=new Set(e);return t.forEach(n=>{o.has(n)&&o.delete(n)}),Array.from(o)}function It(e){return(e==null?void 0:e.type)==="group"}class St extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function zt(e,t,o,n){return we(t.concat(e),o,n,!1)}function At(e,t){const o=new Set;return e.forEach(n=>{const r=t.treeNodeMap.get(n);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||o.has(i.key));)o.add(i.key),i=i.parent}}),o}function Pt(e,t,o,n){const r=we(t,o,n,!1),i=we(e,o,n,!0),l=At(e,o),d=[];return r.forEach(a=>{(i.has(a)||l.has(a))&&d.push(a)}),d.forEach(a=>r.delete(a)),r}function ke(e,t){const{checkedKeys:o,keysToCheck:n,keysToUncheck:r,indeterminateKeys:i,cascade:l,leafOnly:d,checkStrategy:a,allowNotLoaded:s}=e;if(!l)return n!==void 0?{checkedKeys:wt(o,n),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:Ct(o,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(o),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:f}=t;let h;r!==void 0?h=Pt(r,o,t,s):n!==void 0?h=zt(n,o,t,s):h=we(o,t,s,!1);const p=a==="parent",H=a==="child"||d,x=h,$=new Set,N=Math.max.apply(null,Array.from(f.keys()));for(let O=N;O>=0;O-=1){const W=O===0,K=f.get(O);for(const m of K){if(m.isLeaf)continue;const{key:g,shallowLoaded:F}=m;if(H&&F&&m.children.forEach(T=>{!T.disabled&&!T.isLeaf&&T.shallowLoaded&&x.has(T.key)&&x.delete(T.key)}),m.disabled||!F)continue;let R=!0,M=!1,j=!0;for(const T of m.children){const q=T.key;if(!T.disabled){if(j&&(j=!1),x.has(q))M=!0;else if($.has(q)){M=!0,R=!1;break}else if(R=!1,M)break}}R&&!j?(p&&m.children.forEach(T=>{!T.disabled&&x.has(T.key)&&x.delete(T.key)}),x.add(g)):M&&$.add(g),W&&H&&x.has(g)&&x.delete(g)}}return{checkedKeys:Array.from(x),indeterminateKeys:Array.from($)}}function we(e,t,o,n){const{treeNodeMap:r,getChildren:i}=t,l=new Set,d=new Set(e);return e.forEach(a=>{const s=r.get(a);s!==void 0&&uo(s,f=>{if(f.disabled)return $e.STOP;const{key:h}=f;if(!l.has(h)&&(l.add(h),d.add(h),yt(f.rawNode,i))){if(n)return $e.STOP;if(!o)throw new St}})}),d}function Nt(e,{includeGroup:t=!1,includeSelf:o=!0},n){var r;const i=n.treeNodeMap;let l=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const d={keyPath:[],treeNodePath:[],treeNode:l};if(l!=null&&l.ignored)return d.treeNode=null,d;for(;l;)!l.ignored&&(t||!l.isGroup)&&d.treeNodePath.push(l),l=l.parent;return d.treeNodePath.reverse(),o||d.treeNodePath.pop(),d.keyPath=d.treeNodePath.map(a=>a.key),d}function Rt(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function kt(e,t){const o=e.siblings,n=o.length,{index:r}=e;return t?o[(r+1)%n]:r===o.length-1?null:o[r+1]}function Je(e,t,{loop:o=!1,includeDisabled:n=!1}={}){const r=t==="prev"?Ht:kt,i={reverse:t==="prev"};let l=!1,d=null;function a(s){if(s!==null){if(s===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){d=e;return}}else if((!s.disabled||n)&&!s.ignored&&!s.isGroup){d=s;return}if(s.isGroup){const f=Me(s,i);f!==null?d=f:a(r(s,o))}else{const f=r(s,!1);if(f!==null)a(f);else{const h=$t(s);h!=null&&h.isGroup?a(r(h,o)):o&&a(r(s,!0))}}}}return a(e),d}function Ht(e,t){const o=e.siblings,n=o.length,{index:r}=e;return t?o[(r-1+n)%n]:r===0?null:o[r-1]}function $t(e){return e.parent}function Me(e,t={}){const{reverse:o=!1}=t,{children:n}=e;if(n){const{length:r}=n,i=o?r-1:0,l=o?-1:r,d=o?-1:1;for(let a=i;a!==l;a+=d){const s=n[a];if(!s.disabled&&!s.ignored)if(s.isGroup){const f=Me(s,t);if(f!==null)return f}else return s}}return null}const _t={getChild(){return this.ignored?null:Me(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Je(this,"next",e)},getPrev(e={}){return Je(this,"prev",e)}};function Ot(e,t){const o=t?new Set(t):void 0,n=[];function r(i){i.forEach(l=>{n.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||o===void 0||o.has(l.key))&&r(l.children)})}return r(e),n}function Kt(e,t){const o=e.key;for(;t;){if(t.key===o)return!0;t=t.parent}return!1}function vo(e,t,o,n,r,i=null,l=0){const d=[];return e.forEach((a,s)=>{var f;const h=Object.create(n);if(h.rawNode=a,h.siblings=d,h.level=l,h.index=s,h.isFirstChild=s===0,h.isLastChild=s+1===e.length,h.parent=i,!h.ignored){const p=r(a);Array.isArray(p)&&(h.children=vo(p,t,o,n,r,h,l+1))}d.push(h),t.set(h.key,h),o.has(l)||o.set(l,[]),(f=o.get(l))===null||f===void 0||f.push(h)}),d}function ye(e,t={}){var o;const n=new Map,r=new Map,{getDisabled:i=xt,getIgnored:l=gt,getIsGroup:d=It,getKey:a=mt}=t,s=(o=t.getChildren)!==null&&o!==void 0?o:pt,f=t.ignoreEmptyChildren?m=>{const g=s(m);return Array.isArray(g)?g.length?g:null:g}:s,h=Object.assign({get key(){return a(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return d(this.rawNode)},get isLeaf(){return ht(this.rawNode,f)},get shallowLoaded(){return bt(this.rawNode,f)},get ignored(){return l(this.rawNode)},contains(m){return Kt(this,m)}},_t),p=vo(e,n,r,h,f);function H(m){if(m==null)return null;const g=n.get(m);return g&&!g.isGroup&&!g.ignored?g:null}function x(m){if(m==null)return null;const g=n.get(m);return g&&!g.ignored?g:null}function $(m,g){const F=x(m);return F?F.getPrev(g):null}function N(m,g){const F=x(m);return F?F.getNext(g):null}function O(m){const g=x(m);return g?g.getParent():null}function W(m){const g=x(m);return g?g.getChild():null}const K={treeNodes:p,treeNodeMap:n,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:f,getFlattenedNodes(m){return Ot(p,m)},getNode:H,getPrev:$,getNext:N,getParent:O,getChild:W,getFirstAvailableNode(){return Rt(p)},getPath(m,g={}){return Nt(m,g,K)},getCheckedKeys(m,g={}){const{cascade:F=!0,leafOnly:R=!1,checkStrategy:M="all",allowNotLoaded:j=!1}=g;return ke({checkedKeys:Ne(m),indeterminateKeys:Re(m),cascade:F,leafOnly:R,checkStrategy:M,allowNotLoaded:j},K)},check(m,g,F={}){const{cascade:R=!0,leafOnly:M=!1,checkStrategy:j="all",allowNotLoaded:T=!1}=F;return ke({checkedKeys:Ne(g),indeterminateKeys:Re(g),keysToCheck:m==null?[]:Xe(m),cascade:R,leafOnly:M,checkStrategy:j,allowNotLoaded:T},K)},uncheck(m,g,F={}){const{cascade:R=!0,leafOnly:M=!1,checkStrategy:j="all",allowNotLoaded:T=!1}=F;return ke({checkedKeys:Ne(g),indeterminateKeys:Re(g),keysToUncheck:m==null?[]:Xe(m),cascade:R,leafOnly:M,checkStrategy:j,allowNotLoaded:T},K)},getNonLeafKeys(m={}){return ft(p,m)}};return K}const{cubicBezierEaseIn:Qe,cubicBezierEaseOut:Ye}=lo;function Tt({transformOrigin:e="inherit",duration:t=".2s",enterScale:o=".9",originalTransform:n="",originalTransition:r=""}={}){return[w("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${t} ${Qe}, transform ${t} ${Qe} ${r&&`,${r}`}`}),w("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${t} ${Ye}, transform ${t} ${Ye} ${r&&`,${r}`}`}),w("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${n} scale(${o})`}),w("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${n} scale(1)`})]}const{cubicBezierEaseInOut:ee,cubicBezierEaseOut:Et,cubicBezierEaseIn:Ft}=lo;function Lt({overflow:e="hidden",duration:t=".3s",originalTransition:o="",leavingDelay:n="0s",foldPadding:r=!1,enterToProps:i=void 0,leaveToProps:l=void 0,reverse:d=!1}={}){const a=d?"leave":"enter",s=d?"enter":"leave";return[w(`&.fade-in-height-expand-transition-${s}-from,
 &.fade-in-height-expand-transition-${a}-to`,Object.assign(Object.assign({},i),{opacity:1})),w(`&.fade-in-height-expand-transition-${s}-to,
 &.fade-in-height-expand-transition-${a}-from`,Object.assign(Object.assign({},l),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:r?"0 !important":void 0,paddingBottom:r?"0 !important":void 0})),w(`&.fade-in-height-expand-transition-${s}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${ee} ${n},
 opacity ${t} ${Et} ${n},
 margin-top ${t} ${ee} ${n},
 margin-bottom ${t} ${ee} ${n},
 padding-top ${t} ${ee} ${n},
 padding-bottom ${t} ${ee} ${n}
 ${o?`,${o}`:""}
 `),w(`&.fade-in-height-expand-transition-${a}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${ee},
 opacity ${t} ${Ft},
 margin-top ${t} ${ee},
 margin-bottom ${t} ${ee},
 padding-top ${t} ${ee},
 padding-bottom ${t} ${ee}
 ${o?`,${o}`:""}
 `)]}const Mt={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"};function Bt(e){const{primaryColor:t,textColor2:o,dividerColor:n,hoverColor:r,popoverColor:i,invertedColor:l,borderRadius:d,fontSizeSmall:a,fontSizeMedium:s,fontSizeLarge:f,fontSizeHuge:h,heightSmall:p,heightMedium:H,heightLarge:x,heightHuge:$,textColor3:N,opacityDisabled:O}=e;return Object.assign(Object.assign({},Mt),{optionHeightSmall:p,optionHeightMedium:H,optionHeightLarge:x,optionHeightHuge:$,borderRadius:d,fontSizeSmall:a,fontSizeMedium:s,fontSizeLarge:f,fontSizeHuge:h,optionTextColor:o,optionTextColorHover:o,optionTextColorActive:t,optionTextColorChildActive:t,color:i,dividerColor:n,suffixColor:o,prefixColor:o,optionColorHover:r,optionColorActive:be(t,{alpha:.1}),groupHeaderTextColor:N,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:l,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:t,optionColorActiveInverted:t,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:O})}const fo=Te({name:"Dropdown",common:ze,peers:{Popover:ao},self:Bt}),jt={padding:"8px 14px"};function Dt(e){const{borderRadius:t,boxShadow2:o,baseColor:n}=e;return Object.assign(Object.assign({},jt),{borderRadius:t,boxShadow:o,color:jo(n,"rgba(0, 0, 0, .85)"),textColor:n})}const ho=Te({name:"Tooltip",common:ze,peers:{Popover:ao},self:Dt}),Gt=Object.assign(Object.assign({},Fe),ie.props),Vt=V({name:"Tooltip",props:Gt,slots:Object,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=Ie(e),o=ie("Tooltip","-tooltip",void 0,ho,e,t),n=U(null);return Object.assign(Object.assign({},{syncPosition(){n.value.syncPosition()},setShow(i){n.value.setShow(i)}}),{popoverRef:n,mergedTheme:o,popoverThemeOverrides:y(()=>o.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return v(co,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),Be=ue("n-dropdown-menu"),Ae=ue("n-dropdown"),eo=ue("n-dropdown-option"),po=V({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return v("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Wt=V({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:t}=X(Be),{renderLabelRef:o,labelFieldRef:n,nodePropsRef:r,renderOptionRef:i}=X(Ae);return{labelField:n,showIcon:e,hasSubmenu:t,renderLabel:o,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:t,hasSubmenu:o,showIcon:n,nodeProps:r,renderLabel:i,renderOption:l}=this,{rawNode:d}=this.tmNode,a=v("div",Object.assign({class:`${t}-dropdown-option`},r==null?void 0:r(d)),v("div",{class:`${t}-dropdown-option-body ${t}-dropdown-option-body--group`},v("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__prefix`,n&&`${t}-dropdown-option-body__prefix--show-icon`]},te(d.icon)),v("div",{class:`${t}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(d):te((e=d.title)!==null&&e!==void 0?e:d[this.labelField])),v("div",{class:[`${t}-dropdown-option-body__suffix`,o&&`${t}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:a,option:d}):a}});function Ut(e){const{textColorBase:t,opacity1:o,opacity2:n,opacity3:r,opacity4:i,opacity5:l}=e;return{color:t,opacity1Depth:o,opacity2Depth:n,opacity3Depth:r,opacity4Depth:i,opacity5Depth:l}}const qt={common:ze,self:Ut},Zt=C("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[E("color-transition",{transition:"color .3s var(--n-bezier)"}),E("depth",{color:"var(--n-color)"},[w("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),w("svg",{height:"1em",width:"1em"})]),Xt=Object.assign(Object.assign({},ie.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),Jt=V({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Xt,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ie(e),n=ie("Icon","-icon",Zt,qt,e,t),r=y(()=>{const{depth:l}=e,{common:{cubicBezierEaseInOut:d},self:a}=n.value;if(l!==void 0){const{color:s,[`opacity${l}Depth`]:f}=a;return{"--n-bezier":d,"--n-color":s,"--n-opacity":f}}return{"--n-bezier":d,"--n-color":"","--n-opacity":""}}),i=o?Ee("icon",y(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:t,mergedStyle:y(()=>{const{size:l,color:d}=e;return{fontSize:Uo(l),color:d}}),cssVars:o?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:t,depth:o,mergedClsPrefix:n,component:r,onRender:i,themeClass:l}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&no("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),v("i",Se(this.$attrs,{role:"img",class:[`${n}-icon`,l,{[`${n}-icon--depth`]:o,[`${n}-icon--color-transition`]:o!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?v(r):this.$slots)}});function _e(e,t){return e.type==="submenu"||e.type===void 0&&e[t]!==void 0}function Qt(e){return e.type==="group"}function mo(e){return e.type==="divider"}function Yt(e){return e.type==="render"}const go=V({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const t=X(Ae),{hoverKeyRef:o,keyboardKeyRef:n,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:l,animatedRef:d,mergedShowRef:a,renderLabelRef:s,renderIconRef:f,labelFieldRef:h,childrenFieldRef:p,renderOptionRef:H,nodePropsRef:x,menuPropsRef:$}=t,N=X(eo,null),O=X(Be),W=X(so),K=y(()=>e.tmNode.rawNode),m=y(()=>{const{value:P}=p;return _e(e.tmNode.rawNode,P)}),g=y(()=>{const{disabled:P}=e.tmNode;return P}),F=y(()=>{if(!m.value)return!1;const{key:P,disabled:G}=e.tmNode;if(G)return!1;const{value:Q}=o,{value:ne}=n,{value:b}=r,{value:I}=i;return Q!==null?I.includes(P):ne!==null?I.includes(P)&&I[I.length-1]!==P:b!==null?I.includes(P):!1}),R=y(()=>n.value===null&&!d.value),M=it(F,300,R),j=y(()=>!!(N!=null&&N.enteringSubmenuRef.value)),T=U(!1);Y(eo,{enteringSubmenuRef:T});function q(){T.value=!0}function A(){T.value=!1}function D(){const{parentKey:P,tmNode:G}=e;G.disabled||a.value&&(r.value=P,n.value=null,o.value=G.key)}function k(){const{tmNode:P}=e;P.disabled||a.value&&o.value!==P.key&&D()}function _(P){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:G}=P;G&&!Ze({target:G},"dropdownOption")&&!Ze({target:G},"scrollbarRail")&&(o.value=null)}function Z(){const{value:P}=m,{tmNode:G}=e;a.value&&!P&&!G.disabled&&(t.doSelect(G.key,G.rawNode),t.doUpdateShow(!1))}return{labelField:h,renderLabel:s,renderIcon:f,siblingHasIcon:O.showIconRef,siblingHasSubmenu:O.hasSubmenuRef,menuProps:$,popoverBody:W,animated:d,mergedShowSubmenu:y(()=>M.value&&!j.value),rawNode:K,hasSubmenu:m,pending:se(()=>{const{value:P}=i,{key:G}=e.tmNode;return P.includes(G)}),childActive:se(()=>{const{value:P}=l,{key:G}=e.tmNode,Q=P.findIndex(ne=>G===ne);return Q===-1?!1:Q<P.length-1}),active:se(()=>{const{value:P}=l,{key:G}=e.tmNode,Q=P.findIndex(ne=>G===ne);return Q===-1?!1:Q===P.length-1}),mergedDisabled:g,renderOption:H,nodeProps:x,handleClick:Z,handleMouseMove:k,handleMouseEnter:D,handleMouseLeave:_,handleSubmenuBeforeEnter:q,handleSubmenuAfterEnter:A}},render(){var e,t;const{animated:o,rawNode:n,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:l,siblingHasSubmenu:d,renderLabel:a,renderIcon:s,renderOption:f,nodeProps:h,props:p,scrollable:H}=this;let x=null;if(r){const W=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);x=v(bo,Object.assign({},W,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const $={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},N=h==null?void 0:h(n),O=v("div",Object.assign({class:[`${i}-dropdown-option`,N==null?void 0:N.class],"data-dropdown-option":!0},N),v("div",Se($,p),[v("div",{class:[`${i}-dropdown-option-body__prefix`,l&&`${i}-dropdown-option-body__prefix--show-icon`]},[s?s(n):te(n.icon)]),v("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},a?a(n):te((t=n[this.labelField])!==null&&t!==void 0?t:n.title)),v("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,d&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?v(Jt,null,{default:()=>v(vt,null)}):null)]),this.hasSubmenu?v(qo,null,{default:()=>[v(Zo,null,{default:()=>v("div",{class:`${i}-dropdown-offset-container`},v(Xo,{show:this.mergedShowSubmenu,placement:this.placement,to:H&&this.popoverBody||void 0,teleportDisabled:!H},{default:()=>v("div",{class:`${i}-dropdown-menu-wrapper`},o?v(Ho,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>x}):x)}))})]}):null);return f?f({node:O,option:n}):O}}),en=V({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:t,clsPrefix:o}=this,{children:n}=e;return v(ro,null,v(Wt,{clsPrefix:o,tmNode:e,key:e.key}),n==null?void 0:n.map(r=>{const{rawNode:i}=r;return i.show===!1?null:mo(i)?v(po,{clsPrefix:o,key:r.key}):r.isGroup?(no("dropdown","`group` node is not allowed to be put in `group` node."),null):v(go,{clsPrefix:o,tmNode:r,parentKey:t,key:r.key})}))}}),on=V({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:t}}=this.tmNode;return v("div",t,[e==null?void 0:e()])}}),bo=V({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:t,childrenFieldRef:o}=X(Ae);Y(Be,{showIconRef:y(()=>{const r=t.value;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>r?r(a):a.icon);const{rawNode:d}=i;return r?r(d):d.icon})}),hasSubmenuRef:y(()=>{const{value:r}=o;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>_e(a,r));const{rawNode:d}=i;return _e(d,r)})})});const n=U(null);return Y(Yo,null),Y(et,null),Y(so,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:t,scrollable:o}=this,n=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Yt(i)?v(on,{tmNode:r,key:r.key}):mo(i)?v(po,{clsPrefix:t,key:r.key}):Qt(i)?v(en,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):v(go,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:o})});return v("div",{class:[`${t}-dropdown-menu`,o&&`${t}-dropdown-menu--scrollable`],ref:"bodyRef"},o?v(Jo,{contentClass:`${t}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?Qo({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),tn=C("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Tt(),C("dropdown-option",`
 position: relative;
 `,[w("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[w("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),C("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[w("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ce("disabled",[E("pending",`
 color: var(--n-option-text-color-hover);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),w("&::before","background-color: var(--n-option-color-hover);")]),E("active",`
 color: var(--n-option-text-color-active);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),w("&::before","background-color: var(--n-option-color-active);")]),E("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),E("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),E("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[z("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[E("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),z("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[E("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),C("icon",`
 font-size: var(--n-option-icon-size);
 `)]),z("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),z("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[E("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),C("icon",`
 font-size: var(--n-option-icon-size);
 `)]),C("dropdown-menu","pointer-events: all;")]),C("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),C("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),C("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),w(">",[C("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ce("scrollable",`
 padding: var(--n-padding);
 `),E("scrollable",[z("content",`
 padding: var(--n-padding);
 `)])]),nn={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},rn=Object.keys(Fe),ln=Object.assign(Object.assign(Object.assign({},Fe),nn),ie.props),an=V({name:"Dropdown",inheritAttrs:!1,props:ln,setup(e){const t=U(!1),o=He(J(e,"show"),t),n=y(()=>{const{keyField:A,childrenField:D}=e;return ye(e.options,{getKey(k){return k[A]},getDisabled(k){return k.disabled===!0},getIgnored(k){return k.type==="divider"||k.type==="render"},getChildren(k){return k[D]}})}),r=y(()=>n.value.treeNodes),i=U(null),l=U(null),d=U(null),a=y(()=>{var A,D,k;return(k=(D=(A=i.value)!==null&&A!==void 0?A:l.value)!==null&&D!==void 0?D:d.value)!==null&&k!==void 0?k:null}),s=y(()=>n.value.getPath(a.value).keyPath),f=y(()=>n.value.getPath(e.value).keyPath),h=se(()=>e.keyboard&&o.value);rt({keydown:{ArrowUp:{prevent:!0,handler:g},ArrowRight:{prevent:!0,handler:m},ArrowDown:{prevent:!0,handler:F},ArrowLeft:{prevent:!0,handler:K},Enter:{prevent:!0,handler:R},Escape:W}},h);const{mergedClsPrefixRef:p,inlineThemeDisabled:H}=Ie(e),x=ie("Dropdown","-dropdown",tn,fo,e,p);Y(Ae,{labelFieldRef:J(e,"labelField"),childrenFieldRef:J(e,"childrenField"),renderLabelRef:J(e,"renderLabel"),renderIconRef:J(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:l,lastToggledSubmenuKeyRef:d,pendingKeyPathRef:s,activeKeyPathRef:f,animatedRef:J(e,"animated"),mergedShowRef:o,nodePropsRef:J(e,"nodeProps"),renderOptionRef:J(e,"renderOption"),menuPropsRef:J(e,"menuProps"),doSelect:$,doUpdateShow:N}),Ce(o,A=>{!e.animated&&!A&&O()});function $(A,D){const{onSelect:k}=e;k&&oe(k,A,D)}function N(A){const{"onUpdate:show":D,onUpdateShow:k}=e;D&&oe(D,A),k&&oe(k,A),t.value=A}function O(){i.value=null,l.value=null,d.value=null}function W(){N(!1)}function K(){j("left")}function m(){j("right")}function g(){j("up")}function F(){j("down")}function R(){const A=M();A!=null&&A.isLeaf&&o.value&&($(A.key,A.rawNode),N(!1))}function M(){var A;const{value:D}=n,{value:k}=a;return!D||k===null?null:(A=D.getNode(k))!==null&&A!==void 0?A:null}function j(A){const{value:D}=a,{value:{getFirstAvailableNode:k}}=n;let _=null;if(D===null){const Z=k();Z!==null&&(_=Z.key)}else{const Z=M();if(Z){let P;switch(A){case"down":P=Z.getNext();break;case"up":P=Z.getPrev();break;case"right":P=Z.getChild();break;case"left":P=Z.getParent();break}P&&(_=P.key)}}_!==null&&(i.value=null,l.value=_)}const T=y(()=>{const{size:A,inverted:D}=e,{common:{cubicBezierEaseInOut:k},self:_}=x.value,{padding:Z,dividerColor:P,borderRadius:G,optionOpacityDisabled:Q,[le("optionIconSuffixWidth",A)]:ne,[le("optionSuffixWidth",A)]:b,[le("optionIconPrefixWidth",A)]:I,[le("optionPrefixWidth",A)]:c,[le("fontSize",A)]:S,[le("optionHeight",A)]:L,[le("optionIconSize",A)]:Pe}=_,B={"--n-bezier":k,"--n-font-size":S,"--n-padding":Z,"--n-border-radius":G,"--n-option-height":L,"--n-option-prefix-width":c,"--n-option-icon-prefix-width":I,"--n-option-suffix-width":b,"--n-option-icon-suffix-width":ne,"--n-option-icon-size":Pe,"--n-divider-color":P,"--n-option-opacity-disabled":Q};return D?(B["--n-color"]=_.colorInverted,B["--n-option-color-hover"]=_.optionColorHoverInverted,B["--n-option-color-active"]=_.optionColorActiveInverted,B["--n-option-text-color"]=_.optionTextColorInverted,B["--n-option-text-color-hover"]=_.optionTextColorHoverInverted,B["--n-option-text-color-active"]=_.optionTextColorActiveInverted,B["--n-option-text-color-child-active"]=_.optionTextColorChildActiveInverted,B["--n-prefix-color"]=_.prefixColorInverted,B["--n-suffix-color"]=_.suffixColorInverted,B["--n-group-header-text-color"]=_.groupHeaderTextColorInverted):(B["--n-color"]=_.color,B["--n-option-color-hover"]=_.optionColorHover,B["--n-option-color-active"]=_.optionColorActive,B["--n-option-text-color"]=_.optionTextColor,B["--n-option-text-color-hover"]=_.optionTextColorHover,B["--n-option-text-color-active"]=_.optionTextColorActive,B["--n-option-text-color-child-active"]=_.optionTextColorChildActive,B["--n-prefix-color"]=_.prefixColor,B["--n-suffix-color"]=_.suffixColor,B["--n-group-header-text-color"]=_.groupHeaderTextColor),B}),q=H?Ee("dropdown",y(()=>`${e.size[0]}${e.inverted?"i":""}`),T,e):void 0;return{mergedClsPrefix:p,mergedTheme:x,tmNodes:r,mergedShow:o,handleAfterLeave:()=>{e.animated&&O()},doUpdateShow:N,cssVars:H?void 0:T,themeClass:q==null?void 0:q.themeClass,onRender:q==null?void 0:q.onRender}},render(){const e=(n,r,i,l,d)=>{var a;const{mergedClsPrefix:s,menuProps:f}=this;(a=this.onRender)===null||a===void 0||a.call(this);const h=(f==null?void 0:f(void 0,this.tmNodes.map(H=>H.rawNode)))||{},p={ref:dt(r),class:[n,`${s}-dropdown`,this.themeClass],clsPrefix:s,tmNodes:this.tmNodes,style:[...i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:d};return v(bo,Se(this.$attrs,p,h))},{mergedTheme:t}=this,o={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return v(co,Object.assign({},xe(this.$props,rn),o),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}});function dn(e,t,o,n){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:n}}function cn(e){const{borderRadius:t,textColor3:o,primaryColor:n,textColor2:r,textColor1:i,fontSize:l,dividerColor:d,hoverColor:a,primaryColorHover:s}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorHover:a,itemColorActive:be(n,{alpha:.1}),itemColorActiveHover:be(n,{alpha:.1}),itemColorActiveCollapsed:be(n,{alpha:.1}),itemTextColor:r,itemTextColorHover:r,itemTextColorActive:n,itemTextColorActiveHover:n,itemTextColorChildActive:n,itemTextColorChildActiveHover:n,itemTextColorHorizontal:r,itemTextColorHoverHorizontal:s,itemTextColorActiveHorizontal:n,itemTextColorActiveHoverHorizontal:n,itemTextColorChildActiveHorizontal:n,itemTextColorChildActiveHoverHorizontal:n,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:n,itemIconColorActiveHover:n,itemIconColorChildActive:n,itemIconColorChildActiveHover:n,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:s,itemIconColorActiveHorizontal:n,itemIconColorActiveHoverHorizontal:n,itemIconColorChildActiveHorizontal:n,itemIconColorChildActiveHoverHorizontal:n,itemHeight:"42px",arrowColor:r,arrowColorHover:r,arrowColorActive:n,arrowColorActiveHover:n,arrowColorChildActive:n,arrowColorChildActiveHover:n,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:l,dividerColor:d},dn("#BBB",n,"#FFF","#AAA"))}const sn=Te({name:"Menu",common:ze,peers:{Tooltip:ho,Dropdown:fo},self:cn}),un=ue("n-layout-sider"),he=ue("n-menu"),je=ue("n-submenu"),De=ue("n-menu-item-group"),oo=[w("&::before","background-color: var(--n-item-color-hover);"),z("arrow",`
 color: var(--n-arrow-color-hover);
 `),z("icon",`
 color: var(--n-item-icon-color-hover);
 `),C("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[w("a",`
 color: var(--n-item-text-color-hover);
 `),z("extra",`
 color: var(--n-item-text-color-hover);
 `)])],to=[z("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),C("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[w("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),z("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],vn=w([C("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[E("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[C("submenu","margin: 0;"),C("menu-item","margin: 0;"),C("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[w("&::before","display: none;"),E("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),C("menu-item-content",[E("selected",[z("icon","color: var(--n-item-icon-color-active-horizontal);"),C("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[w("a","color: var(--n-item-text-color-active-horizontal);"),z("extra","color: var(--n-item-text-color-active-horizontal);")])]),E("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[C("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[w("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),z("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),z("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ce("disabled",[ce("selected, child-active",[w("&:focus-within",to)]),E("selected",[ae(null,[z("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),C("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[w("a","color: var(--n-item-text-color-active-hover-horizontal);"),z("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),E("child-active",[ae(null,[z("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),C("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[w("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),z("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),ae("border-bottom: 2px solid var(--n-border-color-horizontal);",to)]),C("menu-item-content-header",[w("a","color: var(--n-item-text-color-horizontal);")])])]),ce("responsive",[C("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),E("collapsed",[C("menu-item-content",[E("selected",[w("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),C("menu-item-content-header","opacity: 0;"),z("arrow","opacity: 0;"),z("icon","color: var(--n-item-icon-color-collapsed);")])]),C("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),C("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[w("> *","z-index: 1;"),w("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),E("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),E("collapsed",[z("arrow","transform: rotate(0);")]),E("selected",[w("&::before","background-color: var(--n-item-color-active);"),z("arrow","color: var(--n-arrow-color-active);"),z("icon","color: var(--n-item-icon-color-active);"),C("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[w("a","color: var(--n-item-text-color-active);"),z("extra","color: var(--n-item-text-color-active);")])]),E("child-active",[C("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[w("a",`
 color: var(--n-item-text-color-child-active);
 `),z("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),z("arrow",`
 color: var(--n-arrow-color-child-active);
 `),z("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ce("disabled",[ce("selected, child-active",[w("&:focus-within",oo)]),E("selected",[ae(null,[z("arrow","color: var(--n-arrow-color-active-hover);"),z("icon","color: var(--n-item-icon-color-active-hover);"),C("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[w("a","color: var(--n-item-text-color-active-hover);"),z("extra","color: var(--n-item-text-color-active-hover);")])])]),E("child-active",[ae(null,[z("arrow","color: var(--n-arrow-color-child-active-hover);"),z("icon","color: var(--n-item-icon-color-child-active-hover);"),C("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[w("a","color: var(--n-item-text-color-child-active-hover);"),z("extra","color: var(--n-item-text-color-child-active-hover);")])])]),E("selected",[ae(null,[w("&::before","background-color: var(--n-item-color-active-hover);")])]),ae(null,oo)]),z("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),z("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),C("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[w("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[w("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),z("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),C("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[C("menu-item-content",`
 height: var(--n-item-height);
 `),C("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Lt({duration:".2s"})])]),C("menu-item-group",[C("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),C("menu-tooltip",[w("a",`
 color: inherit;
 text-decoration: none;
 `)]),C("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function ae(e,t){return[E("hover",e,t),w("&:hover",e,t)]}const xo=V({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:t}=X(he);return{menuProps:t,style:y(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:y(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:r}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:n,renderExtra:r,expandIcon:i}}=this,l=o?o(t.rawNode):te(this.icon);return v("div",{onClick:d=>{var a;(a=this.onClick)===null||a===void 0||a.call(this,d)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},l&&v("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[l]),v("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:n?n(t.rawNode):te(this.title),this.extra||r?v("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(t.rawNode):te(this.extra)):null),this.showArrow?v(st,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(t.rawNode):v(ut,null)}):null)}}),ge=8;function Ge(e){const t=X(he),{props:o,mergedCollapsedRef:n}=t,r=X(je,null),i=X(De,null),l=y(()=>o.mode==="horizontal"),d=y(()=>l.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),a=y(()=>{var p;return Math.max((p=o.collapsedIconSize)!==null&&p!==void 0?p:o.iconSize,o.iconSize)}),s=y(()=>{var p;return!l.value&&e.root&&n.value&&(p=o.collapsedIconSize)!==null&&p!==void 0?p:o.iconSize}),f=y(()=>{if(l.value)return;const{collapsedWidth:p,indent:H,rootIndent:x}=o,{root:$,isGroup:N}=e,O=x===void 0?H:x;return $?n.value?p/2-a.value/2:O:i&&typeof i.paddingLeftRef.value=="number"?H/2+i.paddingLeftRef.value:r&&typeof r.paddingLeftRef.value=="number"?(N?H/2:H)+r.paddingLeftRef.value:0}),h=y(()=>{const{collapsedWidth:p,indent:H,rootIndent:x}=o,{value:$}=a,{root:N}=e;return l.value||!N||!n.value?ge:(x===void 0?H:x)+$+ge-(p+$)/2});return{dropdownPlacement:d,activeIconSize:s,maxIconSize:a,paddingLeft:f,iconMarginRight:h,NMenu:t,NSubmenu:r}}const Ve={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},fn=V({name:"MenuDivider",setup(){const e=X(he),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:v("div",{class:`${t.value}-menu-divider`})}}),yo=Object.assign(Object.assign({},Ve),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),hn=Le(yo),pn=V({name:"MenuOption",props:yo,setup(e){const t=Ge(e),{NSubmenu:o,NMenu:n}=t,{props:r,mergedClsPrefixRef:i,mergedCollapsedRef:l}=n,d=o?o.mergedDisabledRef:{value:!1},a=y(()=>d.value||e.disabled);function s(h){const{onClick:p}=e;p&&p(h)}function f(h){a.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),s(h))}return{mergedClsPrefix:i,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:r,dropdownEnabled:se(()=>e.root&&l.value&&r.mode!=="horizontal"&&!a.value),selected:se(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:a,handleClick:f}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:n,nodeProps:r}}=this,i=r==null?void 0:r(o.rawNode);return v("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),v(Vt,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):te(this.title),trigger:()=>v(xo,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),wo=Object.assign(Object.assign({},Ve),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),mn=Le(wo),gn=V({name:"MenuOptionGroup",props:wo,setup(e){Y(je,null);const t=Ge(e);Y(De,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:n}=X(he);return function(){const{value:r}=o,i=t.paddingLeft.value,{nodeProps:l}=n,d=l==null?void 0:l(e.tmNode.rawNode);return v("div",{class:`${r}-menu-item-group`,role:"group"},v("div",Object.assign({},d,{class:[`${r}-menu-item-group-title`,d==null?void 0:d.class],style:[(d==null?void 0:d.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),te(e.title),e.extra?v(ro,null," ",te(e.extra)):null),v("div",null,e.tmNodes.map(a=>We(a,n))))}}});function Oe(e){return e.type==="divider"||e.type==="render"}function bn(e){return e.type==="divider"}function We(e,t){const{rawNode:o}=e,{show:n}=o;if(n===!1)return null;if(Oe(o))return bn(o)?v(fn,Object.assign({key:e.key},o.props)):null;const{labelField:r}=t,{key:i,level:l,isGroup:d}=e,a=Object.assign(Object.assign({},o),{title:o.title||o[r],extra:o.titleExtra||o.extra,key:i,internalKey:i,level:l,root:l===0,isGroup:d});return e.children?e.isGroup?v(gn,xe(a,mn,{tmNode:e,tmNodes:e.children,key:i})):v(Ke,xe(a,xn,{key:i,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):v(pn,xe(a,hn,{key:i,tmNode:e}))}const Co=Object.assign(Object.assign({},Ve),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),xn=Le(Co),Ke=V({name:"Submenu",props:Co,setup(e){const t=Ge(e),{NMenu:o,NSubmenu:n}=t,{props:r,mergedCollapsedRef:i,mergedThemeRef:l}=o,d=y(()=>{const{disabled:p}=e;return n!=null&&n.mergedDisabledRef.value||r.disabled?!0:p}),a=U(!1);Y(je,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:d}),Y(De,null);function s(){const{onClick:p}=e;p&&p()}function f(){d.value||(i.value||o.toggleExpand(e.internalKey),s())}function h(p){a.value=p}return{menuProps:r,mergedTheme:l,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:a,paddingLeft:t.paddingLeft,mergedDisabled:d,mergedValue:o.mergedValueRef,childActive:se(()=>{var p;return(p=e.virtualChildActive)!==null&&p!==void 0?p:o.activePathRef.value.includes(e.internalKey)}),collapsed:y(()=>r.mode==="horizontal"?!1:i.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:y(()=>!d.value&&(r.mode==="horizontal"||i.value)),handlePopoverShowChange:h,handleClick:f}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:n}}=this,r=()=>{const{isHorizontal:l,paddingLeft:d,collapsed:a,mergedDisabled:s,maxIconSize:f,activeIconSize:h,title:p,childActive:H,icon:x,handleClick:$,menuProps:{nodeProps:N},dropdownShow:O,iconMarginRight:W,tmNode:K,mergedClsPrefix:m,isEllipsisPlaceholder:g,extra:F}=this,R=N==null?void 0:N(K.rawNode);return v("div",Object.assign({},R,{class:[`${m}-menu-item`,R==null?void 0:R.class],role:"menuitem"}),v(xo,{tmNode:K,paddingLeft:d,collapsed:a,disabled:s,iconMarginRight:W,maxIconSize:f,activeIconSize:h,title:p,extra:F,showArrow:!l,childActive:H,clsPrefix:m,icon:x,hover:O,onClick:$,isEllipsisPlaceholder:g}))},i=()=>v(Do,null,{default:()=>{const{tmNodes:l,collapsed:d}=this;return d?null:v("div",{class:`${t}-submenu-children`,role:"menu"},l.map(a=>We(a,this.menuProps)))}});return this.root?v(an,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>v("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},r(),this.isHorizontal?null:i())}):v("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},r(),i())}}),yn=Object.assign(Object.assign({},ie.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),wn=V({name:"Menu",inheritAttrs:!1,props:yn,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ie(e),n=ie("Menu","-menu",vn,sn,e,t),r=X(un,null),i=y(()=>{var b;const{collapsed:I}=e;if(I!==void 0)return I;if(r){const{collapseModeRef:c,collapsedRef:S}=r;if(c.value==="width")return(b=S.value)!==null&&b!==void 0?b:!1}return!1}),l=y(()=>{const{keyField:b,childrenField:I,disabledField:c}=e;return ye(e.items||e.options,{getIgnored(S){return Oe(S)},getChildren(S){return S[I]},getDisabled(S){return S[c]},getKey(S){var L;return(L=S[b])!==null&&L!==void 0?L:S.name}})}),d=y(()=>new Set(l.value.treeNodes.map(b=>b.key))),{watchProps:a}=e,s=U(null);a!=null&&a.includes("defaultValue")?qe(()=>{s.value=e.defaultValue}):s.value=e.defaultValue;const f=J(e,"value"),h=He(f,s),p=U([]),H=()=>{p.value=e.defaultExpandAll?l.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||l.value.getPath(h.value,{includeSelf:!1}).keyPath};a!=null&&a.includes("defaultExpandedKeys")?qe(H):H();const x=tt(e,["expandedNames","expandedKeys"]),$=He(x,p),N=y(()=>l.value.treeNodes),O=y(()=>l.value.getPath(h.value).keyPath);Y(he,{props:e,mergedCollapsedRef:i,mergedThemeRef:n,mergedValueRef:h,mergedExpandedKeysRef:$,activePathRef:O,mergedClsPrefixRef:t,isHorizontalRef:y(()=>e.mode==="horizontal"),invertedRef:J(e,"inverted"),doSelect:W,toggleExpand:m});function W(b,I){const{"onUpdate:value":c,onUpdateValue:S,onSelect:L}=e;S&&oe(S,b,I),c&&oe(c,b,I),L&&oe(L,b,I),s.value=b}function K(b){const{"onUpdate:expandedKeys":I,onUpdateExpandedKeys:c,onExpandedNamesChange:S,onOpenNamesChange:L}=e;I&&oe(I,b),c&&oe(c,b),S&&oe(S,b),L&&oe(L,b),p.value=b}function m(b){const I=Array.from($.value),c=I.findIndex(S=>S===b);if(~c)I.splice(c,1);else{if(e.accordion&&d.value.has(b)){const S=I.findIndex(L=>d.value.has(L));S>-1&&I.splice(S,1)}I.push(b)}K(I)}const g=b=>{const I=l.value.getPath(b??h.value,{includeSelf:!1}).keyPath;if(!I.length)return;const c=Array.from($.value),S=new Set([...c,...I]);e.accordion&&d.value.forEach(L=>{S.has(L)&&!I.includes(L)&&S.delete(L)}),K(Array.from(S))},F=y(()=>{const{inverted:b}=e,{common:{cubicBezierEaseInOut:I},self:c}=n.value,{borderRadius:S,borderColorHorizontal:L,fontSize:Pe,itemHeight:B,dividerColor:Io}=c,u={"--n-divider-color":Io,"--n-bezier":I,"--n-font-size":Pe,"--n-border-color-horizontal":L,"--n-border-radius":S,"--n-item-height":B};return b?(u["--n-group-text-color"]=c.groupTextColorInverted,u["--n-color"]=c.colorInverted,u["--n-item-text-color"]=c.itemTextColorInverted,u["--n-item-text-color-hover"]=c.itemTextColorHoverInverted,u["--n-item-text-color-active"]=c.itemTextColorActiveInverted,u["--n-item-text-color-child-active"]=c.itemTextColorChildActiveInverted,u["--n-item-text-color-child-active-hover"]=c.itemTextColorChildActiveInverted,u["--n-item-text-color-active-hover"]=c.itemTextColorActiveHoverInverted,u["--n-item-icon-color"]=c.itemIconColorInverted,u["--n-item-icon-color-hover"]=c.itemIconColorHoverInverted,u["--n-item-icon-color-active"]=c.itemIconColorActiveInverted,u["--n-item-icon-color-active-hover"]=c.itemIconColorActiveHoverInverted,u["--n-item-icon-color-child-active"]=c.itemIconColorChildActiveInverted,u["--n-item-icon-color-child-active-hover"]=c.itemIconColorChildActiveHoverInverted,u["--n-item-icon-color-collapsed"]=c.itemIconColorCollapsedInverted,u["--n-item-text-color-horizontal"]=c.itemTextColorHorizontalInverted,u["--n-item-text-color-hover-horizontal"]=c.itemTextColorHoverHorizontalInverted,u["--n-item-text-color-active-horizontal"]=c.itemTextColorActiveHorizontalInverted,u["--n-item-text-color-child-active-horizontal"]=c.itemTextColorChildActiveHorizontalInverted,u["--n-item-text-color-child-active-hover-horizontal"]=c.itemTextColorChildActiveHoverHorizontalInverted,u["--n-item-text-color-active-hover-horizontal"]=c.itemTextColorActiveHoverHorizontalInverted,u["--n-item-icon-color-horizontal"]=c.itemIconColorHorizontalInverted,u["--n-item-icon-color-hover-horizontal"]=c.itemIconColorHoverHorizontalInverted,u["--n-item-icon-color-active-horizontal"]=c.itemIconColorActiveHorizontalInverted,u["--n-item-icon-color-active-hover-horizontal"]=c.itemIconColorActiveHoverHorizontalInverted,u["--n-item-icon-color-child-active-horizontal"]=c.itemIconColorChildActiveHorizontalInverted,u["--n-item-icon-color-child-active-hover-horizontal"]=c.itemIconColorChildActiveHoverHorizontalInverted,u["--n-arrow-color"]=c.arrowColorInverted,u["--n-arrow-color-hover"]=c.arrowColorHoverInverted,u["--n-arrow-color-active"]=c.arrowColorActiveInverted,u["--n-arrow-color-active-hover"]=c.arrowColorActiveHoverInverted,u["--n-arrow-color-child-active"]=c.arrowColorChildActiveInverted,u["--n-arrow-color-child-active-hover"]=c.arrowColorChildActiveHoverInverted,u["--n-item-color-hover"]=c.itemColorHoverInverted,u["--n-item-color-active"]=c.itemColorActiveInverted,u["--n-item-color-active-hover"]=c.itemColorActiveHoverInverted,u["--n-item-color-active-collapsed"]=c.itemColorActiveCollapsedInverted):(u["--n-group-text-color"]=c.groupTextColor,u["--n-color"]=c.color,u["--n-item-text-color"]=c.itemTextColor,u["--n-item-text-color-hover"]=c.itemTextColorHover,u["--n-item-text-color-active"]=c.itemTextColorActive,u["--n-item-text-color-child-active"]=c.itemTextColorChildActive,u["--n-item-text-color-child-active-hover"]=c.itemTextColorChildActiveHover,u["--n-item-text-color-active-hover"]=c.itemTextColorActiveHover,u["--n-item-icon-color"]=c.itemIconColor,u["--n-item-icon-color-hover"]=c.itemIconColorHover,u["--n-item-icon-color-active"]=c.itemIconColorActive,u["--n-item-icon-color-active-hover"]=c.itemIconColorActiveHover,u["--n-item-icon-color-child-active"]=c.itemIconColorChildActive,u["--n-item-icon-color-child-active-hover"]=c.itemIconColorChildActiveHover,u["--n-item-icon-color-collapsed"]=c.itemIconColorCollapsed,u["--n-item-text-color-horizontal"]=c.itemTextColorHorizontal,u["--n-item-text-color-hover-horizontal"]=c.itemTextColorHoverHorizontal,u["--n-item-text-color-active-horizontal"]=c.itemTextColorActiveHorizontal,u["--n-item-text-color-child-active-horizontal"]=c.itemTextColorChildActiveHorizontal,u["--n-item-text-color-child-active-hover-horizontal"]=c.itemTextColorChildActiveHoverHorizontal,u["--n-item-text-color-active-hover-horizontal"]=c.itemTextColorActiveHoverHorizontal,u["--n-item-icon-color-horizontal"]=c.itemIconColorHorizontal,u["--n-item-icon-color-hover-horizontal"]=c.itemIconColorHoverHorizontal,u["--n-item-icon-color-active-horizontal"]=c.itemIconColorActiveHorizontal,u["--n-item-icon-color-active-hover-horizontal"]=c.itemIconColorActiveHoverHorizontal,u["--n-item-icon-color-child-active-horizontal"]=c.itemIconColorChildActiveHorizontal,u["--n-item-icon-color-child-active-hover-horizontal"]=c.itemIconColorChildActiveHoverHorizontal,u["--n-arrow-color"]=c.arrowColor,u["--n-arrow-color-hover"]=c.arrowColorHover,u["--n-arrow-color-active"]=c.arrowColorActive,u["--n-arrow-color-active-hover"]=c.arrowColorActiveHover,u["--n-arrow-color-child-active"]=c.arrowColorChildActive,u["--n-arrow-color-child-active-hover"]=c.arrowColorChildActiveHover,u["--n-item-color-hover"]=c.itemColorHover,u["--n-item-color-active"]=c.itemColorActive,u["--n-item-color-active-hover"]=c.itemColorActiveHover,u["--n-item-color-active-collapsed"]=c.itemColorActiveCollapsed),u}),R=o?Ee("menu",y(()=>e.inverted?"a":"b"),F,e):void 0,M=nt(),j=U(null),T=U(null);let q=!0;const A=()=>{var b;q?q=!1:(b=j.value)===null||b===void 0||b.sync({showAllItemsBeforeCalculate:!0})};function D(){return document.getElementById(M)}const k=U(-1);function _(b){k.value=e.options.length-b}function Z(b){b||(k.value=-1)}const P=y(()=>{const b=k.value;return{children:b===-1?[]:e.options.slice(b)}}),G=y(()=>{const{childrenField:b,disabledField:I,keyField:c}=e;return ye([P.value],{getIgnored(S){return Oe(S)},getChildren(S){return S[b]},getDisabled(S){return S[I]},getKey(S){var L;return(L=S[c])!==null&&L!==void 0?L:S.name}})}),Q=y(()=>ye([{}]).treeNodes[0]);function ne(){var b;if(k.value===-1)return v(Ke,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:Q.value,domId:M,isEllipsisPlaceholder:!0});const I=G.value.treeNodes[0],c=O.value,S=!!(!((b=I.children)===null||b===void 0)&&b.some(L=>c.includes(L.key)));return v(Ke,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:S,tmNode:I,domId:M,rawNodes:I.rawNode.children||[],tmNodes:I.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:t,controlledExpandedKeys:x,uncontrolledExpanededKeys:p,mergedExpandedKeys:$,uncontrolledValue:s,mergedValue:h,activePath:O,tmNodes:N,mergedTheme:n,mergedCollapsed:i,cssVars:o?void 0:F,themeClass:R==null?void 0:R.themeClass,overflowRef:j,counterRef:T,updateCounter:()=>{},onResize:A,onUpdateOverflow:Z,onUpdateCount:_,renderCounter:ne,getCounter:D,onRender:R==null?void 0:R.onRender,showOption:g,deriveResponsiveState:A}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:n}=this;n==null||n();const r=()=>this.tmNodes.map(a=>We(a,this.$props)),l=t==="horizontal"&&this.responsive,d=()=>v("div",Se(this.$attrs,{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,l&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),l?v(at,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:r,counter:this.renderCounter}):r());return l?v(ot,{onResize:this.onResize},{default:d}):d()}}),Cn={class:"pw-header"},In={__name:"PwHeader",setup(e){const t=U(window.globalConfig.menuOptions.map(r=>({label:r.label,key:r.component,icon:()=>v($o,{size:16},{default:()=>v(fe(r.iconName))}),childern:r.children}))),o=_o();function n(r){o.push({name:r})}return(r,i)=>{const l=wn;return io(),Oo("div",Cn,[i[1]||(i[1]=Ko("div",{class:"logo"}," GIS LIU ",-1)),de(l,{class:"pw-header-menu",value:r.$route.name,"onUpdate:value":[i[0]||(i[0]=d=>r.$route.name=d),n],mode:"horizontal",options:To(t),responsive:"","dropdown-placement":"right-start"},null,8,["value","options"])])}}},Sn=Lo(In,[["__scopeId","data-v-041b0084"]]),Rn={__name:"HomeView",setup(e){const t=Eo(),o=U(!0);return Ce(()=>t.name,n=>{o.value=n!=="ExampleView"},{immediate:!0}),(n,r)=>{const i=fe("el-header"),l=fe("RouterView"),d=fe("el-main"),a=fe("el-container");return io(),Fo(a,{class:"Gis-View"},{default:ve(()=>[de(i,{class:"Gis-View-header"},{default:ve(()=>[de(Sn)]),_:1}),de(a,{class:"Gis-View-container"},{default:ve(()=>[de(a,null,{default:ve(()=>[de(d,{class:"Gis-View-main"},{default:ve(()=>[de(l)]),_:1})]),_:1})]),_:1})]),_:1})}}};export{Rn as default};
