(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[830],{7087:function(e,t,r){"use strict";r.d(t,{ZP:function(){return y}});var n=r(7294),i=r(3952),o=r(9641),a=r(7354);function l(e,t){let r,{elementType:n="a",onPress:l,onPressStart:s,onPressEnd:c,onClick:u,isDisabled:d,...g}=e;"a"!==n&&(r={role:"link",tabIndex:d?void 0:0});let{focusableProps:h}=(0,o.kc)(e,t),{pressProps:$,isPressed:v}=(0,a.r7)({onPress:l,onPressStart:s,onPressEnd:c,isDisabled:d,ref:t}),m=(0,i.zL)(g,{labelable:!0}),b=(0,i.dG)(h,$);return{isPressed:v,linkProps:(0,i.dG)(m,{...b,...r,"aria-disabled":d||void 0,onClick(e){$.onClick(e),u&&(u(e),console.warn("onClick is deprecated, please use onPress"))}})}}Object.defineProperty({},"useLink",{get:()=>l,set:void 0,enumerable:!0,configurable:!0});var s=r(598),c=r(2903),u=r(1309),d=r(6249),g=r(6680),h=r(3569),$=r(275),v=r(9975);let m=(0,$.zo)("svg",{ml:"$1",as:"center",display:"flex",color:"currentColor"}),b=(0,$.zo)("a",{$$linkColor:"$colors$link",display:"flex",alignItems:"center",lineHeight:"inherit",textDecoration:"none",width:"fitContent",backgroundColor:"transparent",backgroundImage:"inherit",backgroundClip:"inherit",WebkitTextFillColor:"inherit",color:"$$linkColor",outline:"none",maxW:"max-content","&:hover":{opacity:.8},"@motion":{transition:"none"},variants:{color:{inherit:{$$linkColor:"inherit"},default:{$$linkColor:"$colors$link"},text:{$$linkColor:"$colors$text"},primary:{$$linkColor:"$colors$primary"},secondary:{$$linkColor:"$colors$secondary"},success:{$$linkColor:"$colors$success"},warning:{$$linkColor:"$colors$warning"},error:{$$linkColor:"$colors$error"}},underline:{true:{"&:hover, &:active, &:focus":{textDecoration:"underline"}}},block:{true:{padding:"$2 $4",borderRadius:"$base","&:hover":{backgroundColor:"$$linkBackgroundColor"}}},animated:{true:{transition:"opacity 0.25s ease 0s, box-shadow 0.25s ease 0s"}}},compoundVariants:[{block:!0,animated:!0,css:{transition:"opacity 0.25s ease 0s, box-shadow 0.25s ease 0s, background 0.25s ease 0s","@motion":{transition:"none"}}}],defaultVariants:{color:"default",animated:!0}},v.BM);var p=r(5893);let f=()=>(0,p.jsxs)(m,{className:"nextui-link-icon",fill:"none",height:"1em",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:"1em",children:[(0,p.jsx)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),(0,p.jsx)("path",{d:"M15 3h6v6"}),(0,p.jsx)("path",{d:"M10 14L21 3"})]});f.toString=()=>".nextui-link-icon";var x=n.memo(f);let C=(0,s.G)((e,t)=>{let{children:r,isExternal:a=!1,as:s,css:h,color:$="default",autoFocus:v,className:m,...f}=e,{isDark:C}=(0,d.Z)(),y=(0,c.gy)(t),{linkProps:k}=l({...f,elementType:s},y),{isFocusVisible:I,focusProps:w}=(0,o.Fx)({autoFocus:v}),S=(0,n.useMemo)(()=>{let e=`$colors$${$}Light`;switch($){case"inherit":case"text":e=(0,g.Wi)("colors","text",.2);break;case"default":e=(0,g.Wi)("colors","link",.2)}return{...h,$$linkBackgroundColor:e}},[h,$,C]);return(0,p.jsx)(b,{ref:y,as:s,className:(0,u.Z)("nextui-link",m),color:$,css:S,isFocusVisible:I,...(0,i.dG)(k,w,f),children:(0,p.jsxs)(p.Fragment,{children:[r,a&&(0,p.jsx)(x,{})]})})});h.Ts&&(C.displayName="NextUI.Link"),C.toString=()=>".nextui-link";var y=C},1065:function(e,t,r){"use strict";r.d(t,{ZP:function(){return eo}});var n=r(7294),i=r(598),o=r(2903),a=r(1309),l=r(3569),s=r(275),c=r(9975);let u={default:{$$navbarItemActiveColor:"$colors$link",$$navbarItemHighlightBackgroundColor:"$colors$primaryLight",$$navbarItemHighlightTextColor:"$colors$primaryLightContrast",$$navbarItemHighlightSolidBackgroundColor:"$colors$primary",$$navbarItemHighlightSolidTextColor:"$colors$primarySolidContrast"},neutral:{$$navbarItemActiveColor:"$colors$neutral",$$navbarItemHighlightBackgroundColor:"$colors$neutralLight",$$navbarItemHighlightTextColor:"$colors$text",$$navbarItemHighlightSolidBackgroundColor:"$colors$neutral",$$navbarItemHighlightSolidTextColor:"$colors$neutralSolidContrast"},primary:{$$navbarItemActiveColor:"$colors$primary",$$navbarItemHighlightBackgroundColor:"$colors$primaryLight",$$navbarItemHighlightTextColor:"$colors$primaryLightContrast",$$navbarItemHighlightSolidBackgroundColor:"$colors$primary",$$navbarItemHighlightSolidTextColor:"$colors$primarySolidContrast"},secondary:{$$navbarItemActiveColor:"$colors$secondary",$$navbarItemHighlightBackgroundColor:"$colors$secondaryLight",$$navbarItemHighlightTextColor:"$colors$secondaryLightContrast",$$navbarItemHighlightSolidBackgroundColor:"$colors$secondary",$$navbarItemHighlightSolidTextColor:"$colors$secondarySolidContrast"},success:{$$navbarItemActiveColor:"$colors$success",$$navbarItemHighlightBackgroundColor:"$colors$successLight",$$navbarItemHighlightTextColor:"$colors$successLightContrast",$$navbarItemHighlightSolidBackgroundColor:"$colors$success",$$navbarItemHighlightSolidTextColor:"$colors$successSolidContrast"},warning:{$$navbarItemActiveColor:"$colors$warning",$$navbarItemHighlightBackgroundColor:"$colors$warningLight",$$navbarItemHighlightTextColor:"$colors$warningLightContrast",$$navbarItemHighlightSolidBackgroundColor:"$colors$warning",$$navbarItemHighlightSolidTextColor:"$colors$warningSolidContrast"},error:{$$navbarItemActiveColor:"$colors$error",$$navbarItemHighlightBackgroundColor:"$colors$errorLight",$$navbarItemHighlightTextColor:"$colors$errorLightContrast",$$navbarItemHighlightSolidBackgroundColor:"$colors$error",$$navbarItemHighlightSolidTextColor:"$colors$errorSolidContrast"}},d=(0,s.zo)("li",{mb:0,display:"flex",alignItems:"center",listStyleType:"none",lineHeight:"inherit"}),g=(0,s.zo)("ul",{m:0,listStyle:"none",lineHeight:"$xs",li:{mb:0}}),h=(0,s.zo)(d,{opacity:0,paddingBottom:"$6",fontSize:"$lg",lineHeight:"$lg",fontWeight:"$normal",transformOrigin:"top",variants:{activeColor:u,isActive:{true:{color:"$$navbarItemActiveColor",fontWeight:"$semibold"}},disableAnimation:{true:{transition:"none"}}},defaultVariants:{activeColor:"default"}}),$=(0,s.zo)(g,{py:"$8",px:"$$navbarPadding",overflowY:"scroll",maxHeight:"100%"}),v=(0,s.zo)("div",{$$navbarListColor:"$colors$text",$$navbarListBackgroundColor:"$colors$background",$$navbarListBlurBackgroundColor:"$colors$backgroundAlpha",$$navbarListBlur:"16px",position:"absolute",top:0,left:0,right:0,background:"$$navbarListBackgroundColor",width:"100%",height:"0px",zIndex:"$4",boxSizing:"border-box",overflow:"hidden",variants:{isOpen:{true:{top:"$$navbarHeight",pb:"$$navbarHeight",height:"100vh"}},disableBlur:{false:{"@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))":{bg:"$$navbarListBlurBackgroundColor",backdropFilter:"saturate(180%) blur($$navbarListBlur)","@safari":{[`& ${$}`]:{bg:"$$navbarListBlurBackgroundColor",backdropFilter:"saturate(180%) blur($$navbarListBlur)"}}}}},disableAnimation:{true:{[`& ${h}`]:{transition:"none"}}}},defaultVariants:{disableBlur:"false"}},c.Zj),m=(0,s.zo)("div",{dflex:"center",flexDirection:"column",pointerEvents:"none",size:"22px","& .line":{height:"1px",width:"100%",backgroundColor:"$$navbarTextColor",transition:"transform 0.3s ease","&.top":{transform:"translateY(-4px) rotate(0deg)"},"&.bottom":{transform:"translateY(4px) rotate(0deg)"}},variants:{isExpanded:{true:{"& .line":{"&.top":{transform:"translateY(1px) rotate(45deg)"},"&.bottom":{transform:"translateY(0px) rotate(-45deg)"}}}}}}),b=(0,s.zo)("button",{appearance:"none",background:"transparent",border:"none",cursor:"pointer",p:"$2",transition:"box-shadow 0.25s ease 0s, opacity 0.25s ease 0s",variants:{isPressed:{true:{opacity:.7}}}},c.Zj,c.BM),p=(0,s.zo)("span",{display:"flex",flexWrap:"nowrap",flexDirection:"row",justifyContent:"flex-start",bg:"transparent",alignItems:"center",textDecoration:"none",fontSize:"$base",whiteSpace:"nowrap",boxSizing:"border-box"},c.Zj),f=(0,s.zo)(d,{$$navbarItemFontSize:"inherit",$$navbarItemFontWeight:"$fontWeights$normal",fontSize:"$$navbarItemFontSize",fontWeight:"$$navbarItemFontWeight",position:"relative","> *":{zIndex:"$2",fontSize:"inherit !important",fontWeight:"inherit !important"},"&:before":{opacity:0,zIndex:"$1",content:'""',display:"block",position:"absolute",top:0,left:0,right:0,bottom:0,borderRadius:"$sm"},"&:after":{opacity:0,zIndex:"$1",content:'""',display:"block",position:"absolute",left:"0",right:"0",bottom:"0",height:"$$navbarItemUnderlineHeight",borderRadius:"0px",background:"$$navbarItemActiveColor"},variants:{activeColor:u,isActive:{true:{color:"$$navbarItemActiveColor",$$navbarItemFontWeight:"$fontWeights$semibold"}},variant:{default:{},underline:{color:"inherit",height:"100%"},"underline-rounded":{color:"inherit",height:"100%"},highlight:{},"highlight-solid":{},"highlight-rounded":{},"highlight-solid-rounded":{}},underlineHeight:{light:{$$navbarItemUnderlineHeight:"2px"},normal:{$$navbarItemUnderlineHeight:"4px"},bold:{$$navbarItemUnderlineHeight:"6px"},extrabold:{$$navbarItemUnderlineHeight:"8px"},black:{$$navbarItemUnderlineHeight:"10px"}},isDisabled:{true:{opacity:.5,cursor:"not-allowed"}}},compoundVariants:[{isActive:!0,variant:"underline",css:{color:"inherit","&:after":{opacity:1}}},{isActive:!0,variant:"underline-rounded",css:{color:"inherit","&:after":{opacity:1,borderRadius:"calc($$navbarItemUnderlineHeight / 2)"}}},{isActive:!0,variant:"highlight",css:{color:"$$navbarItemHighlightTextColor","*:first-child":{color:"inherit"},"&:before":{opacity:1,background:"$$navbarItemHighlightBackgroundColor"}}},{isActive:!0,variant:"highlight-solid",css:{color:"$$navbarItemHighlightSolidTextColor","*:first-child":{color:"inherit"},"&:before":{opacity:1,background:"$$navbarItemHighlightSolidBackgroundColor"}}},{isActive:!0,variant:"highlight-rounded",css:{color:"$$navbarItemHighlightTextColor","*:first-child":{color:"inherit"},"&:before":{opacity:1,background:"$$navbarItemHighlightBackgroundColor"}}},{isActive:!0,variant:"highlight-solid-rounded",css:{color:"$$navbarItemHighlightSolidTextColor","*:first-child":{color:"inherit"},"&:before":{opacity:1,background:"$$navbarItemHighlightSolidBackgroundColor"}}}],defaultVariants:{variant:"default",activeColor:"default",underlineHeight:"normal"}},c.Zj),x=(0,s.zo)(d,{position:"absolute",top:"calc(50% - $$navbarItemMaxHeight * 0.5)",height:"$$navbarItemMaxHeight",background:"$neutralLight",borderRadius:"$sm",transition:"width 0.2s ease 0s, transform 0.2s ease 0s, opacity 0.2s ease 0s",variants:{color:u,isHighlightVariant:{true:{background:"$$navbarItemHighlightBackgroundColor"}},isHighlightSolidVariant:{true:{background:"$$navbarItemHighlightSolidBackgroundColor"}},isRounded:{true:{borderRadius:"$pill"}}}}),C=(0,s.zo)(g,{$$navbarContentItemGap:"$space$10",$$navbarContentItemHorizontalPadding:"$space$10",d:"flex",height:"100%",flexWrap:"nowrap",alignItems:"center",gap:"$$navbarContentItemGap",color:"inherit",variants:{enableCursorHighlight:{true:{zIndex:"$2",position:"relative"}}}},c.Zj),y=(0,s.zo)("div",{width:"100%",height:"$$navbarHeight",minHeight:"$$navbarHeight",display:"flex",flexWrap:"nowrap",justifyContent:"space-between",alignItems:"center",position:"relative",boxSizing:"border-box",color:"inherit",px:"$$navbarPadding",bg:"$$navbarBackgroundColor",maxW:"$$navbarContainerMaxWidth",zIndex:"$5","@xsMax":{$$navbarPadding:"$space$6",$$navbarFloatingMargin:"$space$6"}}),k=(0,s.zo)("nav",{width:"100%",dflex:"center",position:"relative",height:"auto",color:"$$navbarTextColor",zIndex:"$2",variants:{variant:{static:{position:"static"},sticky:{top:0,right:0,left:0,position:"sticky"},floating:{top:0,right:0,left:0,position:"sticky","@safari":{top:"-5px"},[`& ${y}`]:{mt:"calc($$navbarFloatingMargin * 0.5)",mx:"$$navbarFloatingMargin",borderRadius:"$$navbarBorderRadius"},[`& ${$}`]:{px:"calc($$navbarFloatingMargin + $space$4)"}}},maxWidth:{xs:{$$navbarContainerMaxWidth:"$breakpoints$xs"},sm:{$$navbarContainerMaxWidth:"$breakpoints$sm"},md:{$$navbarContainerMaxWidth:"$breakpoints$md"},lg:{$$navbarContainerMaxWidth:"$breakpoints$lg"},xl:{$$navbarContainerMaxWidth:"$breakpoints$xl"},fluid:{$$navbarContainerMaxWidth:"100%"}},isBordered:{true:{[`& ${y}`]:{borderBottom:"$$navbarBorderWeight solid $$navbarBorderColor"}}},isCompact:{true:{$$navbarHeight:"$$navbarCompactHeight",$$navbarItemMaxHeight:"$$navbarCompactItemMaxHeight",$$navbarBorderRadius:"$radii$md"}},disableShadow:{false:{boxShadow:"$$navbarShadow"}},disableBlur:{false:{"@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))":{[`& ${y}`]:{bg:"$$navbarBlurBackgroundColor",backdropFilter:"saturate(180%) blur($$navbarBlur)"}}}}},compoundVariants:[{isBordered:!0,variant:"floating",css:{[`& ${y}`]:{border:"$$navbarBorderWeight solid $$navbarBorderColor"}}},{variant:"floating",disableShadow:!1,css:{boxShadow:"none",[`& ${y}`]:{boxShadow:"$$navbarShadow"}}}],defaultVariants:{variant:"static",maxWidth:"lg",isBordered:!1,disableShadow:!1,disableBlur:!1}});var I=r(5893);let w=(0,i.G)((e,t)=>{let r=(0,o.gy)(t),{children:n,className:i,...l}=e;return(0,I.jsx)(p,{ref:r,className:(0,a.Z)("nextui-navbar-brand",i),...l,children:n})});l.Ts&&(w.displayName="NextUI.NavbarBrand"),w.toString=()=>".nextui-navbar-brand";var S=r(8420),H=r(4077);let[B,N]=(0,H.k)({strict:!1,name:"NavbarContentContext"});var M=r(3952);let z=(0,i.G)((e,t)=>{let{children:r,...i}=e,l=function(e={}){let{gap:t="$10",variant:r="default",activeColor:i="default",underlineHeight:o="normal",enableCursorHighlight:a=!1,isCursorHighlightRounded:l=!1,css:s,style:c,className:u,...d}=e,[g,h]=(0,n.useState)(null),[$,v]=(0,n.useState)(null),[m,b]=(0,n.useState)(null),[p,f]=(0,n.useState)(null),[x,C]=(0,n.useState)(!0),y=(0,n.useRef)(null),k=(0,n.useRef)(null),I=null==r||null==r.toString?void 0:r.toString(),w=null==I.includes?void 0:I.includes("highlight"),S=null==I.includes?void 0:I.includes("highlight-solid"),H=(0,n.useMemo)(()=>l||(null==I.includes?void 0:I.includes("rounded")),[l,I]),B=(0,n.useMemo)(()=>w&&"$10"===t?"0px":t,[w,t]),N=(0,n.useMemo)(()=>x?"0ms":"200ms",[x]),z=(0,n.useMemo)(()=>m||p?1:0,[p,m]),T=(0,n.useMemo)(()=>g?w?`${g.width}px`:`calc(${g.width}px + var(--nextui--navbarContentItemHorizontalPadding))`:"0px",[I,g]),R=(0,n.useMemo)(()=>g&&$&&`translate(${g.left-$.left}px)`,[g,$]),j=(0,n.useMemo)(()=>w?"0px":"calc(var(--nextui--navbarContentItemHorizontalPadding) * 0.5 * -1)",[w]),E=(0,n.useMemo)(()=>(0,M.dG)({"--nextui--transitionDuration":N,"--nextui--opacity":z,"--nextui--width":T,"--nextui--transform":R,"--nextui--left":j},c||{}),[N,j,z,T,R,c]),P=(0,n.useMemo)(()=>g&&$&&a?{transitionDuration:"var(--nextui--transitionDuration)",opacity:"var(--nextui--opacity)",width:"var(--nextui--width)",transform:"var(--nextui--transform)",left:"var(--nextui--left)"}:{},[g,$,a]);return{css:s,gap:B,variant:r,activeColor:i,activeItem:p,updateActiveItem(e){var t;f(e),b(e),h(null==e||null==e.getBoundingClientRect?void 0:e.getBoundingClientRect()),v(null==(t=k.current)||null==t.getBoundingClientRect?void 0:t.getBoundingClientRect())},highlightedItem:m,underlineHeight:o,cursorHighlightRef:y,isRounded:H,isHighlightVariant:w,isHighlightSolidVariant:S,isCursorHighlightRounded:l,enableCursorHighlight:a,cursorHighlightCss:P,repositionHighlight(e,t){var r,n;(null==e?void 0:e.target)instanceof Element&&(h(null==(r=e.target)||null==r.getBoundingClientRect?void 0:r.getBoundingClientRect()),v(null==(n=k.current)||null==n.getBoundingClientRect?void 0:n.getBoundingClientRect()),C(!m),b(t))},resetHighlight(){p?(b(p),h(null==p||null==p.getBoundingClientRect?void 0:p.getBoundingClientRect())):b(null)},wrapperRef:k,className:u,style:E,otherProps:d}}(i),s=(0,o.gy)(t);return(0,I.jsx)(B,{value:l,children:(0,I.jsxs)(C,{ref:(0,S.l)(l.wrapperRef,s),className:(0,a.Z)("nextui-navbar-content",l.className),css:{gap:l.gap,...l.css},enableCursorHighlight:l.enableCursorHighlight,style:l.style,onMouseLeave:l.resetHighlight,...l.otherProps,children:[l.enableCursorHighlight&&(0,I.jsx)(x,{ref:l.cursorHighlightRef,className:"nextui-navbar-cursor-highlight",color:l.activeColor,css:l.cursorHighlightCss,isHighlightSolidVariant:l.isHighlightSolidVariant,isHighlightVariant:l.isHighlightVariant,isRounded:l.isRounded}),r]})})});l.Ts&&(z.displayName="NextUI.NavbarContent"),z.toString=()=>".nextui-navbar-content";var T=r(7354),R=r(8738),j=r(6979);let E=(0,i.G)((e,t)=>{var r;let{id:i,css:l,children:s,variant:c,activeColor:u,isActive:d,underlineHeight:g,onMouseEnter:h,onMouseLeave:$,isDisabled:v,className:m,...b}=e,p=N(),x=(0,o.gy)(t),C=c||(null==p?void 0:p.variant),y=null==C?void 0:C.toString(),k=null==y.includes?void 0:y.includes("highlight"),w=null==y.includes?void 0:y.includes("highlight-solid"),{hoverProps:S,isHovered:H}=(0,T.XI)({isDisabled:v}),B=(0,M.Me)(i);(0,n.useEffect)(()=>{x.current&&p&&null!=p&&p.enableCursorHighlight&&d&&k&&p.updateActiveItem(null==x?void 0:x.current)},[x,k,d]);let z=(0,n.useMemo)(()=>{var e;return!!p&&(null==(e=p.highlightedItem)?void 0:e.id)===B},[B,p]),E=(0,n.useMemo)(()=>{var e;return!(z||null==p||!p.enableCursorHighlight||!w||B!==(null==p||null==(e=p.activeItem)?void 0:e.id))},[p,B,z,w]),P=(0,n.useMemo)(()=>{let e=[],t=null==y.includes?void 0:y.includes("highlight-solid");return p||e.push({$$navbarContentItemGap:"$space$8"}),k&&(e.push({dflex:"center",height:"$$navbarItemMaxHeight"}),"string"==typeof s?e.push({px:"calc($$navbarContentItemHorizontalPadding * 0.5)"}):e.push({"*:first-child":{size:"100%",px:"calc($$navbarContentItemHorizontalPadding * 0.5)"}})),k&&null!=y.includes&&y.includes("rounded")&&!p.enableCursorHighlight&&e.push({"&:before":{borderRadius:"$pill"}}),p.enableCursorHighlight&&e.push({"&:before":{display:"none"}}),d&&!k&&e.push({$$navbarItemFontWeight:"$fontWeights$semibold"}),H&&p.enableCursorHighlight&&(k&&e.push({color:"$$navbarItemHighlightTextColor"}),t&&e.push({color:"$$navbarItemHighlightSolidTextColor"})),E&&e.push({color:"$$navbarItemActiveColor"}),{...(0,R.FB)(e),...l}},[s,l,p,y,E,d,H,k]),L="string"==typeof s?(0,I.jsx)(j.Z,{children:s}):n.Children.only(s),W=n.cloneElement(L,{id:(null==(r=L.props)?void 0:r.id)||B,onMouseEnter(e){var t;if(null==p||!p.repositionHighlight)return void(null==h||h(e));(null==(t=e.target)?void 0:t.id)===B&&p.repositionHighlight(e,null==x?void 0:x.current),null==h||h(e)},onMouseLeave(e){null!=p&&p.resetHighlight&&p.enableCursorHighlight&&k&&p.resetHighlight(),null==$||$(e)}});return(0,I.jsx)(f,{ref:x,activeColor:u||(null==p?void 0:p.activeColor),className:(0,a.Z)("nextui-navbar-item",m),css:P,id:B,isActive:d,underlineHeight:g||(null==p?void 0:p.underlineHeight),variant:C,...(0,M.dG)(S,b),children:W})});l.Ts&&(E.displayName="NextUI.NavbarItem"),E.toString=()=>".nextui-navbar-item";var P=r(7087);let L=(0,i.G)((e,t)=>{let r=(0,o.gy)(t),{css:i,children:l,isActive:s,color:c,activeColor:u,underlineHeight:d,itemCss:g,itemClassName:h,isDisabled:$,hideIn:v,showIn:m,variant:b,className:p,...f}=e,x=(0,n.useMemo)(()=>c||null!=i&&i.$$linkColor?{...i}:{color:"inherit",height:"100%",...i},[c,i]);return(0,I.jsx)(E,{activeColor:u,className:h,css:g,hideIn:v,isActive:s,isDisabled:$,showIn:m,underlineHeight:d,variant:b,children:(0,I.jsx)(P.ZP,{ref:r,className:(0,a.Z)("nextui-navbar-link",p),color:c,css:x,...f,children:l})})});l.Ts&&(L.displayName="NextUI.NavbarLink"),L.toString=()=>".nextui-navbar-link";var W=r(4663),A=r(7133),O=r(9641),F=r(2355);let[D,Z]=(0,H.k)({strict:!0,name:"NavbarContext",errorMessage:"useNavbarContext: `context` is undefined. Seems you forgot to wrap all navbar components within `<Navbar />`"}),V=e=>{let{isExpanded:t=!1,className:r,...n}=e;return(0,I.jsxs)(m,{"aria-hidden":!0,className:(0,a.Z)("nextui-navbar-toggle-icon",r),isExpanded:t,tabIndex:-1,...n,children:[(0,I.jsx)("span",{className:"line top"}),(0,I.jsx)("span",{className:"line bottom"})]})};l.Ts&&(V.displayName="NextUI.NavbarToggleIcon"),V.toString=()=>".nextui-navbar-toggle-icon";let _=(0,i.G)((e,t)=>{let{children:r,className:i,autoFocus:l,onChange:s,as:c,css:u,...d}=e,{parentRef:g,setIsCollapseOpen:h}=Z(),[,$]=(0,F.Z)(g,{scrollLayer:!0}),v=(0,o.gy)(t),m=(0,A.l)({...e,onChange(e){h(e),null==s||s(e),$(e)}}),{buttonProps:p,isPressed:f}=(0,W.k)(e,m,v),{isFocusVisible:x,focusProps:C}=(0,O.Fx)({autoFocus:l}),y=(0,n.useMemo)(()=>r||(0,I.jsx)(V,{isExpanded:m.isSelected}),[r,m.isSelected]);return(0,I.jsx)(b,{ref:v,as:c,className:(0,a.Z)("nextui-navbar-toggle",i),css:u,isFocusVisible:x,isPressed:f,...(0,M.dG)(p,C,d),children:y})});l.Ts&&(_.displayName="NextUI.NavbarToggle"),_.toString=()=>".nextui-navbar-toggle";let[G,U]=(0,H.k)({strict:!1,name:"NavbarCollapseContext"});var Y=r(9644),q=function(e,{threshold:t=0,root:r=null,rootMargin:i="0%",freezeOnceVisible:o=!1}={}){let[a,l]=(0,n.useState)(),s=(null==a?void 0:a.isIntersecting)&&o,c=!(null==a||!a.isIntersecting),u=([e])=>{l(e)};return(0,n.useEffect)(()=>{if("undefined"==typeof window)return;let n=null==e?void 0:e.current;if(!window.IntersectionObserver||s||!n)return;let o=new IntersectionObserver(u,{threshold:t,root:r,rootMargin:i});return o.observe(n),()=>o.disconnect()},[e,t,r,i,s]),{entry:a,setEntry:l,isVisible:c,isFrozen:s}};let K=(0,i.G)((e,t)=>{var r;let{children:i,className:l,transitionDelay:s,transitionTime:c,transitionMatrix:u,disableAnimation:d,style:g,css:$,...v}=e,m=Z(),b=U(),p=(0,o.gy)(t),{isVisible:f,setEntry:x}=q(p,{root:null==m||null==(r=m.parentRef)?void 0:r.current,freezeOnceVisible:m.isCollapseOpen});(0,n.useEffect)(()=>{!m.isCollapseOpen&&f&&x(null)},[f,m.isCollapseOpen]);let C=(0,n.useMemo)(()=>{var e;return null!=b&&b.items?null==(e=b.items)?void 0:e.findIndex(e=>{var t;return(null==e||null==(t=e.props)?void 0:t.children)===i}):-1},[null==b?void 0:b.items]),y=(0,n.useMemo)(()=>{var e,t,r;return{transitionDelay:null!=(e=null!=s?s:null==b?void 0:b.transitionDelay)?e:0,transitionTime:null!=(t=null!=c?c:null==b?void 0:b.transitionTime)?t:0,transitionMatrix:null!=(r=null!=u?u:null==b?void 0:b.transitionMatrix)?r:{in:"matrix(1, 0, 0, 1, 0, 0)",out:"matrix(0.97, 0, 0, 1, 0, 20)"}}},[s,c,u,b.transitionMatrix,b.transitionDelay,b.transitionTime]),k=(0,n.useMemo)(()=>b.items&&C>-1?C/b.items.length*500+y.transitionDelay:.1,[C,y.transitionDelay,null==b?void 0:b.items]),w=(0,n.useMemo)(()=>{let e=f&&!b.hasScrolled?k:0;return{"--nextui--collapseItemOpacity":f?1:0,"--nextui--collapseItemTransform":f?y.transitionMatrix.in:y.transitionMatrix.out,"--netxui--collapseItemTransition":!d&&m.isCollapseOpen?`opacity ${y.transitionTime}ms cubic-bezier(0.5, 0, 0, 1) ${e}ms, transform ${y.transitionTime}ms cubic-bezier(0.5, 0, 0, 1) ${e}ms`:"none"}},[C,f,d,k,y.transitionMatrix,y.transitionTime,m.isCollapseOpen,b.hasScrolled]);return(0,I.jsx)(h,{ref:p,className:(0,a.Z)("nextui-navbar-collapse-item",l),css:{opacity:"var(--nextui--collapseItemOpacity)",transition:"var(--netxui--collapseItemTransition)",transform:"var(--nextui--collapseItemTransform)",...$},disableAnimation:d,style:{...g,...w},...v,children:i})});l.Ts&&(K.displayName="NextUI.NavbarCollapseItem"),K.toString=()=>".nextui-navbar-collapse-item";let J=(0,i.G)((e,t)=>{let r=function(e={}){var t;let{css:r,children:i,ref:a,transitionDelay:l=0,transitionTime:s=350,transitionMatrix:c={in:"matrix(1, 0, 0, 1, 0, 0)",out:"matrix(0.97, 0, 0, 1, 0, 20)"},className:u,...d}=e,[g,h]=(0,n.useState)(!1),$=Z(),v=(0,o.gy)(a),[,m]=(0,Y.xC)(i,K),[,b]=(0,F.Z)(null,{scrollLayer:!0});(0,n.useEffect)(()=>{var e,t;$.isCollapseOpen?b(!0):(v.current&&(null==(t=v.current)||null==t.scrollTo||t.scrollTo({top:0})),h(!1),b(!1));let r=()=>{var e;v.current&&(null==(e=v.current)?void 0:e.scrollTop)>0&&!g&&h(!0)};return null==(e=v.current)||e.addEventListener("scroll",r),()=>{var e;null==(e=v.current)||e.removeEventListener("scroll",r)}},[$.isCollapseOpen]);let p=(0,n.useMemo)(()=>{var e;let t=[];return $.parentRef&&$.parentRef.current&&t.push({maxHeight:null==(e=$.parentRef.current)?void 0:e.clientHeight}),{...(0,R.FB)(t),...r}},[null==(t=$.parentRef)?void 0:t.current,r]);return{css:r,domRef:v,children:i,items:m,collpaseCss:p,isOpen:$.isCollapseOpen,hasScrolled:g,transitionDelay:l,transitionTime:s,transitionMatrix:c,className:u,otherProps:d}}({ref:t,...e});return(0,I.jsx)(G,{value:r,children:(0,I.jsx)(v,{className:(0,a.Z)("nextui-navbar-collapse",r.className),css:r.collpaseCss,isOpen:r.isOpen,...r.otherProps,children:(0,I.jsx)($,{ref:r.domRef,className:"nextui-navbar-collapse-wrapper",children:r.children})})})});l.Ts&&(J.displayName="NextUI.NavbarCollapse"),J.toString=()=>".nextui-navbar-collapse";var X=r(4973);let Q="undefined"!=typeof window;function ee(e){return Q?e?{x:e.scrollLeft,y:e.scrollTop}:{x:window.scrollX,y:window.scrollY}:{x:0,y:0}}var et=e=>{let{elementRef:t,wait:r=30,callback:i,enabled:o}=e,a=(0,n.useRef)(o?ee(null==t?void 0:t.current):{x:0,y:0}),l=null,s=()=>{let e=ee(null==t?void 0:t.current);"function"==typeof i&&i({prevPos:a.current,currPos:e}),a.current=e,l=null};return(0,n.useEffect)(()=>{if(!o)return;let e=()=>{r?null===l&&(l=setTimeout(s,r)):s()},n=(null==t?void 0:t.current)||window;return n.addEventListener("scroll",e),()=>n.removeEventListener("scroll",e)},[null==t?void 0:t.current,r,o]),a.current},er=r(6249);let en=(0,i.G)((e,t)=>{let{children:r,...i}=e,l=(0,o.gy)(t),c=function(e={}){let{css:t,containerCss:r,parentRef:i,isBordered:o,variant:a="static",height:l="76px",borderWeight:c="light",shouldHideOnScroll:u=!1,disableScrollHandler:d=!1,onScrollPositionChange:g,disableBlur:h=!1,className:$,...v}=e,[m,b]=(0,n.useState)(!1),[p,f]=(0,n.useState)(!1),{theme:x}=(0,er.Z)(),C=(0,n.useMemo)(()=>o?`$borderWeights$${c}`:"0px",[o,c]),y=(0,n.useMemo)(()=>h||p,[h,p]),k=(0,n.useMemo)(()=>"number"==typeof l?`${l}px`:l,[l]);(0,s.zY)({":root":{$$navbarHeight:k,$$navbarCompactHeight:"calc($$navbarHeight * 0.7)",$$navbarTextColor:"$colors$text",$$navbarBackgroundColor:"$colors$background",$$navbarBlurBackgroundColor:"$colors$backgroundAlpha",$$navbarItemMaxHeight:"calc($$navbarHeight * 0.5)",$$navbarCompactItemMaxHeight:"calc($$navbarHeight * 0.5)",$$navbarBorderColor:"$colors$border",$$navbarBorderRadius:"$radii$lg",$$navbarPadding:"$space$10",$$navbarFloatingMargin:"$space$10",$$navbarContainerMaxWidth:"$breakpoints$lg",$$navbarShadow:"$shadows$md",$$navbarBorderWeight:C,$$navbarBlur:"10px"}})(),et({elementRef:i,enabled:u||!d,callback({prevPos:e,currPos:t}){null==g||g(t.y),u&&b(r=>{let n=t.y>e.y;return n!==r?n:r})}});let I=(0,n.useMemo)(()=>{var e,r,n,i,o,l;let s=[];return"floating"===a&&s.push({bg:`linear-gradient(180deg, ${(0,X.jK)(null==x||null==(e=x.colors)||null==(r=e.background)?void 0:r.value,.95)} 44%, ${(0,X.jK)(null==x||null==(n=x.colors)||null==(i=n.background)?void 0:i.value,.46)} 73%, ${(0,X.jK)(null==x||null==(o=x.colors)||null==(l=o.background)?void 0:l.value,0)})`}),u&&s.push({position:"sticky",top:0,right:0,left:0,transform:m?"translateY(-100%)":"translateY(0)",transition:"transform 400ms ease"}),{...(0,R.FB)(s),...t}},[t,null==x?void 0:x.colors,a,u,m]);return{css:t,variant:a,sticky:m,isBordered:o,containerCss:r,navbarCss:I,parentRef:i,borderWeight:c,shouldHideOnScroll:u,disableBlur:y,isCollapseOpen:p,setIsCollapseOpen:f,className:$,otherProps:v}}(i),[u,d]=(0,Y.xC)(r,J);return(0,I.jsx)(D,{value:c,children:(0,I.jsxs)(k,{ref:l,className:(0,a.Z)("nextui-navbar",c.className),css:c.navbarCss,disableBlur:c.disableBlur,isBordered:c.isBordered,variant:c.variant,...c.otherProps,children:[(0,I.jsx)(y,{className:"nextui-navbar-container",css:c.containerCss,children:u}),d]})})});l.Ts&&(en.displayName="NextUI.Navbar"),en.toString=()=>".nextui-navbar";var ei=en;ei.Brand=w,ei.Content=z,ei.Item=E,ei.Link=L,ei.Toggle=_,ei.Collapse=J,ei.CollapseItem=K;var eo=ei},6979:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(7294),i=r(2903),o=r(3569),a=r(4973),l=r(275),s=r(9975);let c=(0,l.zo)("p",{variants:{weight:{hairline:{fontWeight:"$hairline"},thin:{fontWeight:"$thin"},light:{fontWeight:"$light"},normal:{fontWeight:"$normal"},medium:{fontWeight:"$medium"},semibold:{fontWeight:"$semibold"},bold:{fontWeight:"$bold"},extrabold:{fontWeight:"$extrabold"},black:{fontWeight:"$black"}}}},s.Zj);var u=r(5893);let d=n.forwardRef((e,t)=>{let{children:r,tag:o,color:l="default",transform:s,size:d,css:g,...h}=e,$=(0,i.gy)(t),v=(0,n.useMemo)(()=>(0,a.h1)(l)?"default"===l?"$text":`$${l}`:l,[l]);return(0,u.jsx)(c,{ref:$,as:o,css:{color:v,fontSize:d,tt:s,...g},...h,children:r})});o.Ts&&(d.displayName="NextUI.TextChild"),d.toString=()=>".nextui-text-child";var g=n.memo(d);let h=(e,t,r,n)=>{if(!e.length)return t;let i=e.slice(1,e.length);return(0,u.jsx)(g,{size:r,tag:e[0],transform:n,children:h(i,t,r)})},$=n.forwardRef((e,t)=>{let{h1:r=!1,h2:o=!1,h3:a=!1,h4:l=!1,h5:s=!1,h6:c=!1,b:d=!1,small:$=!1,i:v=!1,span:m=!1,del:b=!1,em:p=!1,blockquote:f=!1,transform:x="none",size:C,children:y,...k}=e,I=(0,i.gy)(t),w={h1:r,h2:o,h3:a,h4:l,h5:s,h6:c,blockquote:f},S={span:m,small:$,b:d,em:p,i:v,del:b},H=Object.keys(w).filter(e=>w[e]),B=Object.keys(S).filter(e=>S[e]),N=(0,n.useMemo)(()=>H[0]?H[0]:B[0]?B[0]:"p",[H,B]),M=B.filter(e=>e!==N),z=(0,n.useMemo)(()=>M.length?h(M,y,C,x):y,[M,y,C,x]);return(0,u.jsx)(g,{ref:I,size:C,tag:N,transform:x,...k,children:z})});o.Ts&&($.displayName="NextUI.Text"),$.toString=()=>".nextui-text";var v=n.memo($)},2355:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7294);let i={scrollLayer:!1},o=new Map,a=e=>!!(e.touches&&e.touches.length>1)||(e.preventDefault(),!1);var l=(e,t)=>{if("undefined"==typeof document)return[!1,e=>e];let r=e||(0,n.useRef)(document.body),[l,s]=(0,n.useState)(!1),c={...i,...t||{}},u=()=>!c.scrollLayer&&!("undefined"==typeof window||!window.navigator)&&/iP(ad|hone|od)/.test(window.navigator.platform);return(0,n.useEffect)(()=>{if(!r||!r.current)return;let e=r.current.style.overflow;if(l){if(o.has(r.current))return;return u()?document.addEventListener("touchmove",a,{passive:!1}):r.current.style.overflow="hidden",void o.set(r.current,{last:e})}if(o.has(r.current)){if(u())document.removeEventListener("touchmove",a);else{let t=o.get(r.current);r.current.style.overflow=t.last}o.delete(r.current)}},[l,r]),[l,s]}},4077:function(e,t,r){"use strict";r.d(t,{k:function(){return i}});var n=r(7294);function i(e={}){let{strict:t=!0,errorMessage:r="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:i}=e,o=n.createContext(void 0);return o.displayName=i,[o.Provider,function e(){let i=n.useContext(o);if(!i&&t){let a=Error(r);throw a.name="ContextError",null==Error.captureStackTrace||Error.captureStackTrace(a,e),a}return i},o]}},8420:function(e,t,r){"use strict";r.d(t,{l:function(){return i}});var n=r(3569);function i(...e){return t=>{e.forEach(e=>(function(e,t){if(null!=e){if((0,n.mf)(e))e(t);else try{e.current=t}catch(r){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}})(e,t))}}},7133:function(e,t,r){"use strict";r.d(t,{l:function(){return i}});var n=r(7430);function i(e={}){let{isReadOnly:t}=e,[r,i]=(0,n.zk)(e.isSelected,e.defaultSelected||!1,e.onChange);return{isSelected:r,setSelected:function(e){t||i(e)},toggle:function(){t||i(!r)}}}},7430:function(e,t,r){"use strict";r.d(t,{zk:function(){return i}});var n=r(7294);function i(e,t,r){let[i,o]=(0,n.useState)(e||t),a=(0,n.useRef)(void 0!==e),l=a.current,s=void 0!==e,c=(0,n.useRef)(i);l!==s&&console.warn(`WARN: A component changed from ${l?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}.`),a.current=s;let u=(0,n.useCallback)((e,...t)=>{let n=(e,...t)=>{r&&!Object.is(c.current,e)&&r(e,...t),s||(c.current=e)};"function"==typeof e?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),o((r,...i)=>{let o=e(s?c.current:r,...i);return(n(o,...t),s)?r:o})):(s||o(e),n(e,...t))},[s,r]);return s?c.current=e:e=i,[e,u]}},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t,r;var i,{src:o,sizes:m,unoptimized:p=!1,priority:f=!1,loading:x,className:C,quality:y,width:k,height:I,fill:w,style:S,onLoad:H,onLoadingComplete:B,placeholder:N="empty",blurDataURL:M,layout:z,objectFit:T,objectPosition:R,lazyBoundary:j,lazyRoot:E}=e,P=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let L=l.useContext(d.ImageConfigContext),W=l.useMemo(()=>{let e=h||L||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[L]),A=P,O=A.loader||g.default;if(delete A.loader,"__next_img_default"in O){if("custom"===W.loader)throw Error('Image with src "'.concat(o,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let F=O;O=e=>{let{config:t}=e,r=a(e,["config"]);return F(r)}}if(z){"fill"===z&&(w=!0);let D={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];D&&(S=n({},S,D));let Z={responsive:"100vw",fill:"100vw"}[z];Z&&!m&&(m=Z)}let V="",_=v(k),G=v(I);if("object"==typeof(i=o)&&($(i)||void 0!==i.src)){let U=$(o)?o.default:o;if(!U.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(U)));if(!U.height||!U.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(U)));if(t=U.blurWidth,r=U.blurHeight,M=M||U.blurDataURL,V=U.src,!w){if(_||G){if(_&&!G){let Y=_/U.width;G=Math.round(U.height*Y)}else if(!_&&G){let q=G/U.height;_=Math.round(U.width*q)}}else _=U.width,G=U.height}}let K=!f&&("lazy"===x||void 0===x);((o="string"==typeof o?o:V).startsWith("data:")||o.startsWith("blob:"))&&(p=!0,K=!1),W.unoptimized&&(p=!0);let[J,X]=l.useState(!1),[Q,ee]=l.useState(!1),et=v(y),er=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:T,objectPosition:R}:{},Q?{}:{color:"transparent"},S),en="blur"===N&&M&&!J?{backgroundSize:er.objectFit||"cover",backgroundPosition:er.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:_,heightInt:G,blurWidth:t,blurHeight:r,blurDataURL:M}),'")')}:{},ei=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let o=/(^|\s)(1?\d?\d)vw/g,a=[];for(let l;l=o.exec(r);l)a.push(parseInt(l[2]));if(a.length){let s=.01*Math.min(...a);return{widths:i.filter(e=>e>=n[0]*s),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let c=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:c,kind:"x"}}(t,i,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,n)=>"".concat(l({config:t,src:r,quality:o,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:l({config:t,src:r,quality:o,width:s[u]})}}({config:W,src:o,unoptimized:p,width:_,quality:et,sizes:m,loader:O}),eo=o,ea={imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:A.crossOrigin},el=l.useRef(H);l.useEffect(()=>{el.current=H},[H]);let es=l.useRef(B);l.useEffect(()=>{es.current=B},[B]);let ec=n({isLazy:K,imgAttributes:ei,heightInt:G,widthInt:_,qualityInt:et,className:C,imgStyle:er,blurStyle:en,loading:x,config:W,fill:w,unoptimized:p,placeholder:N,loader:O,srcString:eo,onLoadRef:el,onLoadingCompleteRef:es,setBlurComplete:X,setShowAltText:ee},A);return l.default.createElement(l.default.Fragment,null,l.default.createElement(b,Object.assign({},ec)),f?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src},ea))):null)};var n=r(6495).Z,i=r(2648).Z,o=r(1598).Z,a=r(7273).Z,l=o(r(7294)),s=i(r(3121)),c=r(2675),u=r(139),d=r(8730);r(7238);var g=i(r(9824));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function $(e){return void 0!==e.default}function v(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,i,o,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&a(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,s=!1;i.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>s,persist(){},preventDefault(){l=!0,t.preventDefault()},stopPropagation(){s=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let b=e=>{var{imgAttributes:t,heightInt:r,widthInt:i,qualityInt:o,className:s,imgStyle:c,blurStyle:u,isLazy:d,fill:g,placeholder:h,loading:$,srcString:v,config:b,unoptimized:p,loader:f,onLoadRef:x,onLoadingCompleteRef:C,setBlurComplete:y,setShowAltText:k,onLoad:I,onError:w}=e,S=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return $=d?"lazy":$,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},S,t,{width:i,height:r,decoding:"async","data-nimg":g?"fill":"1",className:s,loading:$,style:n({},c,u),ref:l.useCallback(e=>{e&&(w&&(e.src=e.src),e.complete&&m(e,v,h,x,C,y,p))},[v,h,x,C,y,w,p]),onLoad(e){let t=e.currentTarget;m(t,v,h,x,C,y,p)},onError(e){k(!0),"blur"===h&&y(!0),w&&w(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o}=e,a=n||t,l=i||r,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&i?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},5675:function(e,t,r){r(9749)}}]);