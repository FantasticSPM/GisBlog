import{i as Ro,c as v,a as fo,b as K,d as f,u as ho,e as po,f as Go,g as k,h as co,r as uo,N as Wo,j as vo,k as Oo,l as _o,m as Mo,n as No,o as t,p as X}from"./light-CtjHvf03.js";import{x as go,y as N,s as mo,z as Co,A as jo,d as J,h as x,T as Lo,B as yo,r as V,C as Ko,D as Vo,G as Qo}from"./index-B1S78SGt.js";const Z=typeof document<"u"&&typeof window<"u";function bo(o){return o.replace(/#|\(|\)|,|\s|\./g,"_")}const xo=Co("n-form-item");function qo(o,{defaultSize:s="medium",mergedSize:d,mergedDisabled:u}={}){const n=go(xo,null);jo(xo,null);const b=N(d?()=>d(n):()=>{const{size:S}=o;if(S)return S;if(n){const{mergedSize:j}=n;if(j.value!==void 0)return j.value}return s}),W=N(u?()=>u(n):()=>{const{disabled:S}=o;return S!==void 0?S:n?n.disabled.value:!1}),O=N(()=>{const{status:S}=o;return S||(n==null?void 0:n.mergedValidationStatus.value)});return mo(()=>{n&&n.restoreValidation()}),{mergedSizeRef:b,mergedDisabledRef:W,mergedStatusRef:O,nTriggerFormBlur(){n&&n.handleContentBlur()},nTriggerFormChange(){n&&n.handleContentChange()},nTriggerFormFocus(){n&&n.handleContentFocus()},nTriggerFormInput(){n&&n.handleContentInput()}}}const $o=J({name:"BaseIconSwitchTransition",setup(o,{slots:s}){const d=Ro();return()=>x(Lo,{name:"icon-switch-transition",appear:d.value},s)}}),{cubicBezierEaseInOut:Ao}=fo;function io({originalTransform:o="",left:s=0,top:d=0,transition:u=`all .3s ${Ao} !important`}={}){return[v("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:`${o} scale(0.75)`,left:s,top:d,opacity:0}),v("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${o}`,left:s,top:d,opacity:1}),v("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:s,top:d,transition:u})]}const Yo=v([v("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),K("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[f("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[io()]),f("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[io({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),f("container",`
 animation: rotator 3s linear infinite both;
 `,[f("icon",`
 height: 1em;
 width: 1em;
 `)])])]),so="1.6s",Xo={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},Uo=J({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},Xo),setup(o){ho("-base-loading",Yo,yo(o,"clsPrefix"))},render(){const{clsPrefix:o,radius:s,strokeWidth:d,stroke:u,scale:n}=this,b=s/n;return x("div",{class:`${o}-base-loading`,role:"img","aria-label":"loading"},x($o,null,{default:()=>this.show?x("div",{key:"icon",class:`${o}-base-loading__transition-wrapper`},x("div",{class:`${o}-base-loading__container`},x("svg",{class:`${o}-base-loading__icon`,viewBox:`0 0 ${2*b} ${2*b}`,xmlns:"http://www.w3.org/2000/svg",style:{color:u}},x("g",null,x("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${b} ${b};270 ${b} ${b}`,begin:"0s",dur:so,fill:"freeze",repeatCount:"indefinite"}),x("circle",{class:`${o}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":d,"stroke-linecap":"round",cx:b,cy:b,r:s-d/2,"stroke-dasharray":5.67*s,"stroke-dashoffset":18.48*s},x("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${b} ${b};135 ${b} ${b};450 ${b} ${b}`,begin:"0s",dur:so,fill:"freeze",repeatCount:"indefinite"}),x("animate",{attributeName:"stroke-dashoffset",values:`${5.67*s};${1.42*s};${5.67*s}`,begin:"0s",dur:so,fill:"freeze",repeatCount:"indefinite"})))))):x("div",{key:"placeholder",class:`${o}-base-loading__placeholder`},this.$slots)}))}}),{cubicBezierEaseInOut:G}=fo;function Jo({duration:o=".2s",delay:s=".1s"}={}){return[v("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),v("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),v("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${G},
 max-width ${o} ${G} ${s},
 margin-left ${o} ${G} ${s},
 margin-right ${o} ${G} ${s};
 `),v("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${G} ${s},
 max-width ${o} ${G},
 margin-left ${o} ${G},
 margin-right ${o} ${G};
 `)]}const Zo=K("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),oe=J({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(o){ho("-base-wave",Zo,yo(o,"clsPrefix"));const s=V(null),d=V(!1);let u=null;return mo(()=>{u!==null&&window.clearTimeout(u)}),{active:d,selfRef:s,play(){u!==null&&(window.clearTimeout(u),d.value=!1,u=null),Ko(()=>{var n;(n=s.value)===null||n===void 0||n.offsetHeight,d.value=!0,u=window.setTimeout(()=>{d.value=!1,u=null},1e3)})}}},render(){const{clsPrefix:o}=this;return x("div",{ref:"selfRef","aria-hidden":!0,class:[`${o}-base-wave`,this.active&&`${o}-base-wave--active`]})}}),ee=Z&&"chrome"in window;Z&&navigator.userAgent.includes("Firefox");const re=Z&&navigator.userAgent.includes("Safari")&&!ee;function M(o){return po(o,[255,255,255,.16])}function U(o){return po(o,[0,0,0,.12])}const te=Co("n-button-group"),ne={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"};function se(o){const{heightTiny:s,heightSmall:d,heightMedium:u,heightLarge:n,borderRadius:b,fontSizeTiny:W,fontSizeSmall:O,fontSizeMedium:S,fontSizeLarge:j,opacityDisabled:oo,textColor2:P,textColor3:eo,primaryColorHover:g,primaryColorPressed:T,borderColor:Q,primaryColor:F,baseColor:l,infoColor:B,infoColorHover:$,infoColorPressed:r,successColor:a,successColorHover:C,successColorPressed:e,warningColor:z,warningColorHover:w,warningColorPressed:E,errorColor:H,errorColorHover:m,errorColorPressed:R,fontWeight:D,buttonColor2:L,buttonColor2Hover:I,buttonColor2Pressed:c,fontWeightStrong:q}=o;return Object.assign(Object.assign({},ne),{heightTiny:s,heightSmall:d,heightMedium:u,heightLarge:n,borderRadiusTiny:b,borderRadiusSmall:b,borderRadiusMedium:b,borderRadiusLarge:b,fontSizeTiny:W,fontSizeSmall:O,fontSizeMedium:S,fontSizeLarge:j,opacityDisabled:oo,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:L,colorSecondaryHover:I,colorSecondaryPressed:c,colorTertiary:L,colorTertiaryHover:I,colorTertiaryPressed:c,colorQuaternary:"#0000",colorQuaternaryHover:I,colorQuaternaryPressed:c,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:P,textColorTertiary:eo,textColorHover:g,textColorPressed:T,textColorFocus:g,textColorDisabled:P,textColorText:P,textColorTextHover:g,textColorTextPressed:T,textColorTextFocus:g,textColorTextDisabled:P,textColorGhost:P,textColorGhostHover:g,textColorGhostPressed:T,textColorGhostFocus:g,textColorGhostDisabled:P,border:`1px solid ${Q}`,borderHover:`1px solid ${g}`,borderPressed:`1px solid ${T}`,borderFocus:`1px solid ${g}`,borderDisabled:`1px solid ${Q}`,rippleColor:F,colorPrimary:F,colorHoverPrimary:g,colorPressedPrimary:T,colorFocusPrimary:g,colorDisabledPrimary:F,textColorPrimary:l,textColorHoverPrimary:l,textColorPressedPrimary:l,textColorFocusPrimary:l,textColorDisabledPrimary:l,textColorTextPrimary:F,textColorTextHoverPrimary:g,textColorTextPressedPrimary:T,textColorTextFocusPrimary:g,textColorTextDisabledPrimary:P,textColorGhostPrimary:F,textColorGhostHoverPrimary:g,textColorGhostPressedPrimary:T,textColorGhostFocusPrimary:g,textColorGhostDisabledPrimary:F,borderPrimary:`1px solid ${F}`,borderHoverPrimary:`1px solid ${g}`,borderPressedPrimary:`1px solid ${T}`,borderFocusPrimary:`1px solid ${g}`,borderDisabledPrimary:`1px solid ${F}`,rippleColorPrimary:F,colorInfo:B,colorHoverInfo:$,colorPressedInfo:r,colorFocusInfo:$,colorDisabledInfo:B,textColorInfo:l,textColorHoverInfo:l,textColorPressedInfo:l,textColorFocusInfo:l,textColorDisabledInfo:l,textColorTextInfo:B,textColorTextHoverInfo:$,textColorTextPressedInfo:r,textColorTextFocusInfo:$,textColorTextDisabledInfo:P,textColorGhostInfo:B,textColorGhostHoverInfo:$,textColorGhostPressedInfo:r,textColorGhostFocusInfo:$,textColorGhostDisabledInfo:B,borderInfo:`1px solid ${B}`,borderHoverInfo:`1px solid ${$}`,borderPressedInfo:`1px solid ${r}`,borderFocusInfo:`1px solid ${$}`,borderDisabledInfo:`1px solid ${B}`,rippleColorInfo:B,colorSuccess:a,colorHoverSuccess:C,colorPressedSuccess:e,colorFocusSuccess:C,colorDisabledSuccess:a,textColorSuccess:l,textColorHoverSuccess:l,textColorPressedSuccess:l,textColorFocusSuccess:l,textColorDisabledSuccess:l,textColorTextSuccess:a,textColorTextHoverSuccess:C,textColorTextPressedSuccess:e,textColorTextFocusSuccess:C,textColorTextDisabledSuccess:P,textColorGhostSuccess:a,textColorGhostHoverSuccess:C,textColorGhostPressedSuccess:e,textColorGhostFocusSuccess:C,textColorGhostDisabledSuccess:a,borderSuccess:`1px solid ${a}`,borderHoverSuccess:`1px solid ${C}`,borderPressedSuccess:`1px solid ${e}`,borderFocusSuccess:`1px solid ${C}`,borderDisabledSuccess:`1px solid ${a}`,rippleColorSuccess:a,colorWarning:z,colorHoverWarning:w,colorPressedWarning:E,colorFocusWarning:w,colorDisabledWarning:z,textColorWarning:l,textColorHoverWarning:l,textColorPressedWarning:l,textColorFocusWarning:l,textColorDisabledWarning:l,textColorTextWarning:z,textColorTextHoverWarning:w,textColorTextPressedWarning:E,textColorTextFocusWarning:w,textColorTextDisabledWarning:P,textColorGhostWarning:z,textColorGhostHoverWarning:w,textColorGhostPressedWarning:E,textColorGhostFocusWarning:w,textColorGhostDisabledWarning:z,borderWarning:`1px solid ${z}`,borderHoverWarning:`1px solid ${w}`,borderPressedWarning:`1px solid ${E}`,borderFocusWarning:`1px solid ${w}`,borderDisabledWarning:`1px solid ${z}`,rippleColorWarning:z,colorError:H,colorHoverError:m,colorPressedError:R,colorFocusError:m,colorDisabledError:H,textColorError:l,textColorHoverError:l,textColorPressedError:l,textColorFocusError:l,textColorDisabledError:l,textColorTextError:H,textColorTextHoverError:m,textColorTextPressedError:R,textColorTextFocusError:m,textColorTextDisabledError:P,textColorGhostError:H,textColorGhostHoverError:m,textColorGhostPressedError:R,textColorGhostFocusError:m,textColorGhostDisabledError:H,borderError:`1px solid ${H}`,borderHoverError:`1px solid ${m}`,borderPressedError:`1px solid ${R}`,borderFocusError:`1px solid ${m}`,borderDisabledError:`1px solid ${H}`,rippleColorError:H,waveOpacity:"0.6",fontWeight:D,fontWeightStrong:q})}const ie={common:Go,self:se},le=v([K("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[k("color",[f("border",{borderColor:"var(--n-border-color)"}),k("disabled",[f("border",{borderColor:"var(--n-border-color-disabled)"})]),co("disabled",[v("&:focus",[f("state-border",{borderColor:"var(--n-border-color-focus)"})]),v("&:hover",[f("state-border",{borderColor:"var(--n-border-color-hover)"})]),v("&:active",[f("state-border",{borderColor:"var(--n-border-color-pressed)"})]),k("pressed",[f("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),k("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[f("border",{border:"var(--n-border-disabled)"})]),co("disabled",[v("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[f("state-border",{border:"var(--n-border-focus)"})]),v("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[f("state-border",{border:"var(--n-border-hover)"})]),v("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[f("state-border",{border:"var(--n-border-pressed)"})]),k("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[f("state-border",{border:"var(--n-border-pressed)"})])]),k("loading","cursor: wait;"),K("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[k("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),Z&&"MozBoxSizing"in document.createElement("div").style?v("&::moz-focus-inner",{border:0}):null,f("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),f("border",{border:"var(--n-border)"}),f("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),f("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[K("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[io({top:"50%",originalTransform:"translateY(-50%)"})]),Jo()]),f("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[v("~",[f("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),k("block",`
 display: flex;
 width: 100%;
 `),k("dashed",[f("border, state-border",{borderStyle:"dashed !important"})]),k("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),v("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),v("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),ae=Object.assign(Object.assign({},vo.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!re}}),ue=J({name:"Button",props:ae,slots:Object,setup(o){const s=V(null),d=V(null),u=V(!1),n=Vo(()=>!o.quaternary&&!o.tertiary&&!o.secondary&&!o.text&&(!o.color||o.ghost||o.dashed)&&o.bordered),b=go(te,{}),{mergedSizeRef:W}=qo({},{defaultSize:"medium",mergedSize:r=>{const{size:a}=o;if(a)return a;const{size:C}=b;if(C)return C;const{mergedSize:e}=r||{};return e?e.value:"medium"}}),O=N(()=>o.focusable&&!o.disabled),S=r=>{var a;O.value||r.preventDefault(),!o.nativeFocusBehavior&&(r.preventDefault(),!o.disabled&&O.value&&((a=s.value)===null||a===void 0||a.focus({preventScroll:!0})))},j=r=>{var a;if(!o.disabled&&!o.loading){const{onClick:C}=o;C&&Mo(C,r),o.text||(a=d.value)===null||a===void 0||a.play()}},oo=r=>{switch(r.key){case"Enter":if(!o.keyboard)return;u.value=!1}},P=r=>{switch(r.key){case"Enter":if(!o.keyboard||o.loading){r.preventDefault();return}u.value=!0}},eo=()=>{u.value=!1},{inlineThemeDisabled:g,mergedClsPrefixRef:T,mergedRtlRef:Q}=Qo(o),F=vo("Button","-button",le,ie,o,T),l=Oo("Button",Q,T),B=N(()=>{const r=F.value,{common:{cubicBezierEaseInOut:a,cubicBezierEaseOut:C},self:e}=r,{rippleDuration:z,opacityDisabled:w,fontWeight:E,fontWeightStrong:H}=e,m=W.value,{dashed:R,type:D,ghost:L,text:I,color:c,round:q,circle:ro,textColor:_,secondary:Po,tertiary:lo,quaternary:wo,strong:So}=o,To={"--n-font-weight":So?H:E};let h={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const A=D==="tertiary",ao=D==="default",i=A?"default":D;if(I){const p=_||c;h={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":p||e[t("textColorText",i)],"--n-text-color-hover":p?M(p):e[t("textColorTextHover",i)],"--n-text-color-pressed":p?U(p):e[t("textColorTextPressed",i)],"--n-text-color-focus":p?M(p):e[t("textColorTextHover",i)],"--n-text-color-disabled":p||e[t("textColorTextDisabled",i)]}}else if(L||R){const p=_||c;h={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":c||e[t("rippleColor",i)],"--n-text-color":p||e[t("textColorGhost",i)],"--n-text-color-hover":p?M(p):e[t("textColorGhostHover",i)],"--n-text-color-pressed":p?U(p):e[t("textColorGhostPressed",i)],"--n-text-color-focus":p?M(p):e[t("textColorGhostHover",i)],"--n-text-color-disabled":p||e[t("textColorGhostDisabled",i)]}}else if(Po){const p=ao?e.textColor:A?e.textColorTertiary:e[t("color",i)],y=c||p,Y=D!=="default"&&D!=="tertiary";h={"--n-color":Y?X(y,{alpha:Number(e.colorOpacitySecondary)}):e.colorSecondary,"--n-color-hover":Y?X(y,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-pressed":Y?X(y,{alpha:Number(e.colorOpacitySecondaryPressed)}):e.colorSecondaryPressed,"--n-color-focus":Y?X(y,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-disabled":e.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":y,"--n-text-color-hover":y,"--n-text-color-pressed":y,"--n-text-color-focus":y,"--n-text-color-disabled":y}}else if(lo||wo){const p=ao?e.textColor:A?e.textColorTertiary:e[t("color",i)],y=c||p;lo?(h["--n-color"]=e.colorTertiary,h["--n-color-hover"]=e.colorTertiaryHover,h["--n-color-pressed"]=e.colorTertiaryPressed,h["--n-color-focus"]=e.colorSecondaryHover,h["--n-color-disabled"]=e.colorTertiary):(h["--n-color"]=e.colorQuaternary,h["--n-color-hover"]=e.colorQuaternaryHover,h["--n-color-pressed"]=e.colorQuaternaryPressed,h["--n-color-focus"]=e.colorQuaternaryHover,h["--n-color-disabled"]=e.colorQuaternary),h["--n-ripple-color"]="#0000",h["--n-text-color"]=y,h["--n-text-color-hover"]=y,h["--n-text-color-pressed"]=y,h["--n-text-color-focus"]=y,h["--n-text-color-disabled"]=y}else h={"--n-color":c||e[t("color",i)],"--n-color-hover":c?M(c):e[t("colorHover",i)],"--n-color-pressed":c?U(c):e[t("colorPressed",i)],"--n-color-focus":c?M(c):e[t("colorFocus",i)],"--n-color-disabled":c||e[t("colorDisabled",i)],"--n-ripple-color":c||e[t("rippleColor",i)],"--n-text-color":_||(c?e.textColorPrimary:A?e.textColorTertiary:e[t("textColor",i)]),"--n-text-color-hover":_||(c?e.textColorHoverPrimary:e[t("textColorHover",i)]),"--n-text-color-pressed":_||(c?e.textColorPressedPrimary:e[t("textColorPressed",i)]),"--n-text-color-focus":_||(c?e.textColorFocusPrimary:e[t("textColorFocus",i)]),"--n-text-color-disabled":_||(c?e.textColorDisabledPrimary:e[t("textColorDisabled",i)])};let to={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};I?to={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:to={"--n-border":e[t("border",i)],"--n-border-hover":e[t("borderHover",i)],"--n-border-pressed":e[t("borderPressed",i)],"--n-border-focus":e[t("borderFocus",i)],"--n-border-disabled":e[t("borderDisabled",i)]};const{[t("height",m)]:no,[t("fontSize",m)]:zo,[t("padding",m)]:Ho,[t("paddingRound",m)]:Io,[t("iconSize",m)]:Fo,[t("borderRadius",m)]:Bo,[t("iconMargin",m)]:ko,waveOpacity:Do}=e,Eo={"--n-width":ro&&!I?no:"initial","--n-height":I?"initial":no,"--n-font-size":zo,"--n-padding":ro||I?"initial":q?Io:Ho,"--n-icon-size":Fo,"--n-icon-margin":ko,"--n-border-radius":I?"initial":ro||q?no:Bo};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":a,"--n-bezier-ease-out":C,"--n-ripple-duration":z,"--n-opacity-disabled":w,"--n-wave-opacity":Do},To),h),to),Eo)}),$=g?_o("button",N(()=>{let r="";const{dashed:a,type:C,ghost:e,text:z,color:w,round:E,circle:H,textColor:m,secondary:R,tertiary:D,quaternary:L,strong:I}=o;a&&(r+="a"),e&&(r+="b"),z&&(r+="c"),E&&(r+="d"),H&&(r+="e"),R&&(r+="f"),D&&(r+="g"),L&&(r+="h"),I&&(r+="i"),w&&(r+=`j${bo(w)}`),m&&(r+=`k${bo(m)}`);const{value:c}=W;return r+=`l${c[0]}`,r+=`m${C[0]}`,r}),B,o):void 0;return{selfElRef:s,waveElRef:d,mergedClsPrefix:T,mergedFocusable:O,mergedSize:W,showBorder:n,enterPressed:u,rtlEnabled:l,handleMousedown:S,handleKeydown:P,handleBlur:eo,handleKeyup:oo,handleClick:j,customColorCssVars:N(()=>{const{color:r}=o;if(!r)return null;const a=M(r);return{"--n-border-color":r,"--n-border-color-hover":a,"--n-border-color-pressed":U(r),"--n-border-color-focus":a,"--n-border-color-disabled":r}}),cssVars:g?void 0:B,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender}},render(){const{mergedClsPrefix:o,tag:s,onRender:d}=this;d==null||d();const u=uo(this.$slots.default,n=>n&&x("span",{class:`${o}-button__content`},n));return x(s,{ref:"selfElRef",class:[this.themeClass,`${o}-button`,`${o}-button--${this.type}-type`,`${o}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${o}-button--rtl`,this.disabled&&`${o}-button--disabled`,this.block&&`${o}-button--block`,this.enterPressed&&`${o}-button--pressed`,!this.text&&this.dashed&&`${o}-button--dashed`,this.color&&`${o}-button--color`,this.secondary&&`${o}-button--secondary`,this.loading&&`${o}-button--loading`,this.ghost&&`${o}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&u,x(Wo,{width:!0},{default:()=>uo(this.$slots.icon,n=>(this.loading||this.renderIcon||n)&&x("span",{class:`${o}-button__icon`,style:{margin:No(this.$slots.default)?"0":""}},x($o,null,{default:()=>this.loading?x(Uo,{clsPrefix:o,key:"loading",class:`${o}-icon-slot`,strokeWidth:20}):x("div",{key:"icon",class:`${o}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():n)})))}),this.iconPlacement==="left"&&u,this.text?null:x(oe,{ref:"waveElRef",clsPrefix:o}),this.showBorder?x("div",{"aria-hidden":!0,class:`${o}-button__border`,style:this.customColorCssVars}):null,this.showBorder?x("div",{"aria-hidden":!0,class:`${o}-button__state-border`,style:this.customColorCssVars}):null)}});export{ue as B};
