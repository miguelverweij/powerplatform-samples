var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;(()=>{"use strict";var F={};F.d=(r,e)=>{for(var t in e)F.o(e,t)&&!F.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})},F.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),F.r=r=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var R={};/*!****************************************!*\
  !*** ./Facepile/index.ts + 16 modules ***!
  \****************************************/F.r(R),F.d(R,{Facepile:()=>Ye});const l=React,o=FluentUIReactv8290,U={outline:0},W=r=>({fontSize:r,margin:"0 4px",height:"16px",lineHeight:"16px",textAlign:"center",flexShrink:0}),se=(0,o.memoizeFunction)(r=>{const{semanticColors:e,effects:t,fonts:n}=r,a=e.buttonBorder,s=e.disabledBackground,i=e.disabledText,c={left:-2,top:-2,bottom:-2,right:-2,outlineColor:"ButtonText"};return{root:[(0,o.getFocusStyle)(r,{inset:1,highContrastStyle:c,borderColor:"transparent"}),r.fonts.medium,{boxSizing:"border-box",border:"1px solid "+a,userSelect:"none",display:"inline-block",textDecoration:"none",textAlign:"center",cursor:"pointer",padding:"0 16px",borderRadius:t.roundedCorner2,selectors:{":active > span":{position:"relative",left:0,top:0}}}],rootDisabled:[(0,o.getFocusStyle)(r,{inset:1,highContrastStyle:c,borderColor:"transparent"}),{backgroundColor:s,borderColor:s,color:i,cursor:"default",selectors:{":hover":U,":focus":U}}],iconDisabled:{color:i,selectors:{[o.HighContrastSelector]:{color:"GrayText"}}},menuIconDisabled:{color:i,selectors:{[o.HighContrastSelector]:{color:"GrayText"}}},flexContainer:{display:"flex",height:"100%",flexWrap:"nowrap",justifyContent:"center",alignItems:"center"},description:{display:"block"},textContainer:{flexGrow:1,display:"block"},icon:W(n.mediumPlus.fontSize),menuIcon:W(n.small.fontSize),label:{margin:"0 4px",lineHeight:"100%",display:"block"},screenReaderText:o.hiddenContentStyle}});var ie=Object.defineProperty,le=Object.defineProperties,ce=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable,K=(r,e,t)=>e in r?ie(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,de=(r,e)=>{for(var t in e||(e={}))ue.call(e,t)&&K(r,t,e[t]);if(H)for(var t of H(e))me.call(e,t)&&K(r,t,e[t]);return r},pe=(r,e)=>le(r,ce(e));const fe=(0,o.memoizeFunction)((r,e,t)=>{const n=se(r),a=(0,o.concatStyleSets)(n,t);return pe(de({},a),{root:[n.root,e,r.fonts.medium,t&&t.root]})});var $=Object.defineProperty,ve=Object.defineProperties,he=Object.getOwnPropertyDescriptor,ge=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,J=(r,e,t)=>e in r?$(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,_e=(r,e)=>{for(var t in e||(e={}))q.call(e,t)&&J(r,t,e[t]);if(x)for(var t of x(e))G.call(e,t)&&J(r,t,e[t]);return r},ye=(r,e)=>ve(r,ge(e)),Pe=(r,e)=>{var t={};for(var n in r)q.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&x)for(var n of x(r))e.indexOf(n)<0&&G.call(r,n)&&(t[n]=r[n]);return t},Ie=(r,e,t,n)=>{for(var a=n>1?void 0:n?he(e,t):e,s=r.length-1,i;s>=0;s--)(i=r[s])&&(a=(n?i(e,t,a):i(a))||a);return n&&a&&$(e,t,a),a};let S=class extends l.Component{render(){const r=this.props,{className:e,styles:t}=r,n=Pe(r,["className","styles"]),a=fe(this.props.theme,e,t);return l.createElement(o.BaseButton,ye(_e({},n),{variantClassName:"ms-Button--facepile",styles:a,onRenderDescription:o.nullRender}))}};S=Ie([(0,o.customizable)("FacepileButton",["theme","styles"],!0)],S);var we=Object.defineProperty,be=Object.defineProperties,Oe=Object.getOwnPropertyDescriptors,Q=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,X=(r,e,t)=>e in r?we(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,P=(r,e)=>{for(var t in e||(e={}))Fe.call(e,t)&&X(r,t,e[t]);if(Q)for(var t of Q(e))Ce.call(e,t)&&X(r,t,e[t]);return r},E=(r,e)=>be(r,Oe(e));const Se=(0,o.classNamesFunction)();class Y extends l.Component{constructor(e){super(e),this._classNames=Se(this.props.styles,{theme:this.props.theme,className:this.props.className}),this._getPersonaControl=t=>{const{getPersonaProps:n,personaSize:a}=this.props,s={details:{flex:"1 0 auto"}};return l.createElement(o.Persona,E(P({imageInitials:t.imageInitials,imageUrl:t.imageUrl,initialsColor:t.initialsColor,allowPhoneInitials:t.allowPhoneInitials,text:t.personaName,size:a},n?n(t):null),{styles:s}))},this._getPersonaCoinControl=t=>{const{getPersonaProps:n,personaSize:a}=this.props;return l.createElement(o.PersonaCoin,P({imageInitials:t.imageInitials,imageUrl:t.imageUrl,initialsColor:t.initialsColor,allowPhoneInitials:t.allowPhoneInitials,text:t.personaName,size:a},n?n(t):null))},(0,o.initializeComponentRef)(this),this._ariaDescriptionId=(0,o.getId)()}render(){let{overflowButtonProps:e}=this.props;const{chevronButtonProps:t,maxDisplayablePersonas:n,personas:a,overflowPersonas:s,showAddButton:i,ariaLabel:c,showTooltip:u=!0,tabIndex:m}=this.props,{_classNames:d}=this,f=typeof n=="number"?Math.min(a.length,n):a.length;t&&!e&&(e=t);const g=s&&s.length>0,I=g?a:a.slice(0,f),p=(g?s:a.slice(f))||[];return l.createElement("div",{className:d.root},this.onRenderAriaDescription(),l.createElement("div",{className:d.itemContainer},i?this._getAddNewElement(m):null,l.createElement("ul",{className:d.members,"aria-label":c},this._onRenderVisiblePersonas(I,p.length===0&&a.length===1,u,m)),e?this._getOverflowElement(p,m):null))}onRenderAriaDescription(){const{ariaDescription:e}=this.props,{_classNames:t}=this;return e&&l.createElement("span",{className:t.screenReaderOnly,id:this._ariaDescriptionId},e)}_onRenderVisiblePersonas(e,t,n,a){const{onRenderPersona:s=this._getPersonaControl,onRenderPersonaCoin:i=this._getPersonaCoinControl,onRenderPersonaWrapper:c}=this.props;return e.map((u,m)=>{const d=t?s(u):i(u),f=u.onClick?()=>this._getElementWithOnClickEvent(d,u,n,m,a):()=>this._getElementWithoutOnClickEvent(d,u,n,m);return l.createElement("li",{key:`${t?"persona":"personaCoin"}-${m}`,className:this._classNames.member},c?c(u,f):f())})}_getElementWithOnClickEvent(e,t,n,a,s){const{keytipProps:i}=t;return l.createElement(S,E(P(P({},(0,o.getNativeProps)(t,o.buttonProperties)),this._getElementProps(t,n,a)),{keytipProps:i,onClick:this._onPersonaClick.bind(this,t),tabIndex:s}),e)}_getElementWithoutOnClickEvent(e,t,n,a){return l.createElement("div",P(P({},(0,o.getNativeProps)(t,o.buttonProperties)),this._getElementProps(t,n,a)),e)}_getElementProps(e,t,n){const{_classNames:a}=this;return{key:(e.imageUrl?"i":"")+n,"data-is-focusable":!0,className:a.itemButton,title:t?e.personaName:void 0,onMouseMove:this._onPersonaMouseMove.bind(this,e),onMouseOut:this._onPersonaMouseOut.bind(this,e)}}_getOverflowElement(e,t){switch(this.props.overflowButtonType){case o.OverflowButtonType.descriptive:return this._getDescriptiveOverflowElement(e,t);case o.OverflowButtonType.downArrow:return this._getIconElement("ChevronDown",t);case o.OverflowButtonType.more:return this._getIconElement("More",t);default:return null}}_getDescriptiveOverflowElement(e,t){const{personaSize:n}=this.props;if(!e||e.length<1)return null;const a=e.map(u=>u.personaName).join(", "),s=P(P({},{title:a}),this.props.overflowButtonProps),i=Math.max(e.length,0),{_classNames:c}=this;return l.createElement(S,E(P({},s),{ariaDescription:s.title,className:c.descriptiveOverflowButton,tabIndex:t}),l.createElement(o.PersonaCoin,{size:n,onRenderInitials:this._renderInitialsNotPictured(i),initialsColor:o.PersonaInitialsColor.transparent}))}_getIconElement(e,t){const{overflowButtonProps:n,personaSize:a}=this.props,s=!0,{_classNames:i}=this;return l.createElement(S,E(P({},n),{className:i.overflowButton,tabIndex:t}),l.createElement(o.PersonaCoin,{size:a,onRenderInitials:this._renderInitials(e,s),initialsColor:o.PersonaInitialsColor.transparent}))}_getAddNewElement(e){const{addButtonProps:t,personaSize:n}=this.props,{_classNames:a}=this;return l.createElement(S,E(P({},t),{className:a.addButton,tabIndex:e}),l.createElement(o.PersonaCoin,{size:n,onRenderInitials:this._renderInitials("AddFriend")}))}_onPersonaClick(e,t){e.onClick(t,e),t.preventDefault(),t.stopPropagation()}_onPersonaMouseMove(e,t){e.onMouseMove&&e.onMouseMove(t,e)}_onPersonaMouseOut(e,t){e.onMouseOut&&e.onMouseOut(t,e)}_renderInitials(e,t){const{_classNames:n}=this;return()=>l.createElement(o.Icon,{iconName:e,className:t?n.overflowInitialsIcon:""})}_renderInitialsNotPictured(e){const{_classNames:t}=this;return()=>l.createElement("span",{className:t.overflowInitialsIcon},e<100?"+"+e:"99+")}}Y.defaultProps={maxDisplayablePersonas:5,personas:[],overflowPersonas:[],personaSize:o.PersonaSize.size32};const Be={root:"ms-Facepile",addButton:"ms-Facepile-addButton ms-Facepile-itemButton",descriptiveOverflowButton:"ms-Facepile-descriptiveOverflowButton ms-Facepile-itemButton",itemButton:"ms-Facepile-itemButton ms-Facepile-person",itemContainer:"ms-Facepile-itemContainer",members:"ms-Facepile-members",member:"ms-Facepile-member",overflowButton:"ms-Facepile-overflowButton ms-Facepile-itemButton"},Ee=r=>{const{className:e,theme:t,spacingAroundItemButton:n=2}=r,{palette:a,fonts:s}=t,i=(0,o.getGlobalClassNames)(Be,t),c={textAlign:"center",padding:0,borderRadius:"50%",verticalAlign:"top",display:"inline",backgroundColor:"transparent",border:"none",selectors:{"&::-moz-focus-inner":{padding:0,border:0}}};return{root:[i.root,t.fonts.medium,{width:"auto"},e],addButton:[i.addButton,(0,o.getFocusStyle)(t,{inset:-1}),c,{fontSize:s.medium.fontSize,color:a.white,backgroundColor:a.themePrimary,marginRight:n*2+"px",selectors:{"&:hover":{backgroundColor:a.themeDark},"&:focus":{backgroundColor:a.themeDark},"&:active":{backgroundColor:a.themeDarker},"&:disabled":{backgroundColor:a.neutralTertiaryAlt}}}],descriptiveOverflowButton:[i.descriptiveOverflowButton,(0,o.getFocusStyle)(t,{inset:-1}),c,{fontSize:s.small.fontSize,color:a.neutralSecondary,backgroundColor:a.neutralLighter,marginLeft:`${n*2}px`}],itemButton:[i.itemButton,c],itemContainer:[i.itemContainer,{display:"flex"}],members:[i.members,{display:"flex",overflow:"hidden",listStyleType:"none",padding:0,margin:`-${n}px`}],member:[i.member,{display:"inline-flex",flex:"0 0 auto",margin:`${n}px`}],overflowButton:[i.overflowButton,(0,o.getFocusStyle)(t,{inset:-1}),c,{fontSize:s.medium.fontSize,color:a.neutralSecondary,backgroundColor:a.neutralLighter,marginLeft:`${n*2}px`}],overflowInitialsIcon:[{color:a.neutralPrimary,selectors:{[o.HighContrastSelector]:{color:"WindowText"}}}],screenReaderOnly:o.hiddenContentStyle}},Ne=(0,o.styled)(Y,Ee,void 0,{scope:"Facepile"});var Z=(r=>(r.dataset="dataset",r))(Z||{}),w=(r=>(r.DisplayName="ItemPersonaName",r.Key="ItemPersonaKey",r.ImageUrl="ItemPersonaImageUrl",r.Image="ItemPersonaImage",r.ImageInfo="ItemPersonaImageInfo",r.Role="ItemPersonaRole",r.ImageType="ItemImageType",r.Presence="ItemPersonaPresence",r.Clickable="ItemPersonaClickable",r.IsImage="IsImage",r))(w||{}),ee=(r=>(r.SetFocus="SetFocus",r))(ee||{}),De=(r=>(r.InputEvent="InputEvent",r.SelectedKey="SelectedKey",r))(De||{}),z=(r=>(r.PersonaEvent="PersonaEvent",r.OverFlowButtonEvent="OverFlowButtonEvent",r.AddButtonEvent="AddButtonEvent",r))(z||{});function xe(r){var e;const t=(e=M(r.getValue(w.Image)))!=null?e:"";return t&&`data:image/jpeg;base64, ${t.fileContent}`}function ze(r){var e;return(e=r.getValue(w.ImageInfo))!=null?e:""}function M(r){return Te(r,void 0)}function Te(r,e){return r||e}function Ae(r){const e=M(r.getValue(w.Presence));if(e)switch(e.toLowerCase()){case"away":return o.PersonaPresence.away;case"blocked":return o.PersonaPresence.blocked;case"busy":return o.PersonaPresence.busy;case"dnd":return o.PersonaPresence.dnd;case"none":return o.PersonaPresence.none;case"offline":return o.PersonaPresence.offline;case"online":return o.PersonaPresence.online;default:return o.PersonaPresence.none}else return o.PersonaPresence.none}function ke(r){switch(r.toLowerCase()){case"size8":return o.PersonaSize.size8;case"size24":return o.PersonaSize.size24;case"size32":return o.PersonaSize.size32;case"size40":return o.PersonaSize.size40;case"size48":return o.PersonaSize.size48;case"size56":return o.PersonaSize.size56;default:return o.PersonaSize.size32}}function Re(r){switch(r.toLowerCase()){case"none":return o.OverflowButtonType.none;case"descriptive":return o.OverflowButtonType.descriptive;case"downarrow":return o.OverflowButtonType.downArrow;case"more":return o.OverflowButtonType.more;default:return o.OverflowButtonType.descriptive}}var Me=Object.defineProperty,te=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,re=(r,e,t)=>e in r?Me(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ve=(r,e)=>{for(var t in e||(e={}))je.call(e,t)&&re(r,t,e[t]);if(te)for(var t of te(e))Le.call(e,t)&&re(r,t,e[t]);return r};function Ue(r){if(r.error||r.paging.totalResultCount===void 0)return He();const e={};return r.sortedRecordIds.map(t=>{var n;const a=r.records[t];let s=a.getValue(w.Key);return e[s]!==void 0?(e[s]++,s+=`_${e[s]}`):e[s]=1,{id:a.getRecordId(),key:s,personaName:a.getFormattedValue(w.DisplayName),imageUrl:M(a.getValue(w.IsImage))?xe(a):ze(a),data:a,presence:a.getValue(w.Presence),clickable:(n=a.getValue(w.Clickable))!=null?n:!1}})}function We(r,e){return r.map(t=>Ve({id:t.id,key:t.key,personaName:t.personaName,presence:t.presence,imageUrl:t.imageUrl},t.clickable&&{onClick:e}))}function He(){return[{id:"1",key:"1",personaName:"Megan Bowen",imageUrl:"https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png",imageInitials:"Item "+1,initialsColor:1,presence:"none"},{id:"2",key:"2",personaName:"Diego Siciliano",imageUrl:"https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-male.png",imageInitials:"Item "+1,initialsColor:1,presence:"none"}]}function Ke(){return typeof window!="undefined"&&!!(window.document&&window.document.createElement)}var j=void 0;try{j=window}catch(r){}function T(r){if(!(!Ke()||typeof j=="undefined")){var e=r;return e&&e.ownerDocument&&e.ownerDocument.defaultView?e.ownerDocument.defaultView:j}}var $e=function(){function r(e,t){this._timeoutIds=null,this._immediateIds=null,this._intervalIds=null,this._animationFrameIds=null,this._isDisposed=!1,this._parent=e||null,this._onErrorHandler=t,this._noop=function(){}}return r.prototype.dispose=function(){var e;if(this._isDisposed=!0,this._parent=null,this._timeoutIds){for(e in this._timeoutIds)this._timeoutIds.hasOwnProperty(e)&&this.clearTimeout(parseInt(e,10));this._timeoutIds=null}if(this._immediateIds){for(e in this._immediateIds)this._immediateIds.hasOwnProperty(e)&&this.clearImmediate(parseInt(e,10));this._immediateIds=null}if(this._intervalIds){for(e in this._intervalIds)this._intervalIds.hasOwnProperty(e)&&this.clearInterval(parseInt(e,10));this._intervalIds=null}if(this._animationFrameIds){for(e in this._animationFrameIds)this._animationFrameIds.hasOwnProperty(e)&&this.cancelAnimationFrame(parseInt(e,10));this._animationFrameIds=null}},r.prototype.setTimeout=function(e,t){var n=this,a=0;return this._isDisposed||(this._timeoutIds||(this._timeoutIds={}),a=setTimeout(function(){try{n._timeoutIds&&delete n._timeoutIds[a],e.apply(n._parent)}catch(s){n._logError(s)}},t),this._timeoutIds[a]=!0),a},r.prototype.clearTimeout=function(e){this._timeoutIds&&this._timeoutIds[e]&&(clearTimeout(e),delete this._timeoutIds[e])},r.prototype.setImmediate=function(e,t){var n=this,a=0,s=T(t);if(!this._isDisposed){this._immediateIds||(this._immediateIds={});var i=function(){try{n._immediateIds&&delete n._immediateIds[a],e.apply(n._parent)}catch(c){n._logError(c)}};a=s.setTimeout(i,0),this._immediateIds[a]=!0}return a},r.prototype.clearImmediate=function(e,t){var n=T(t);this._immediateIds&&this._immediateIds[e]&&(n.clearTimeout(e),delete this._immediateIds[e])},r.prototype.setInterval=function(e,t){var n=this,a=0;return this._isDisposed||(this._intervalIds||(this._intervalIds={}),a=setInterval(function(){try{e.apply(n._parent)}catch(s){n._logError(s)}},t),this._intervalIds[a]=!0),a},r.prototype.clearInterval=function(e){this._intervalIds&&this._intervalIds[e]&&(clearInterval(e),delete this._intervalIds[e])},r.prototype.throttle=function(e,t,n){var a=this;if(this._isDisposed)return this._noop;var s=t||0,i=!0,c=!0,u=0,m,d,f=null;n&&typeof n.leading=="boolean"&&(i=n.leading),n&&typeof n.trailing=="boolean"&&(c=n.trailing);var g=function(p){var v=Date.now(),b=v-u,O=i?s-b:s;return b>=s&&(!p||i)?(u=v,f&&(a.clearTimeout(f),f=null),m=e.apply(a._parent,d)):f===null&&c&&(f=a.setTimeout(g,O)),m},I=function(){for(var p=[],v=0;v<arguments.length;v++)p[v]=arguments[v];return d=p,g(!0)};return I},r.prototype.debounce=function(e,t,n){var a=this;if(this._isDisposed){var s=function(){};return s.cancel=function(){},s.flush=function(){return null},s.pending=function(){return!1},s}var i=t||0,c=!1,u=!0,m=null,d=0,f=Date.now(),g,I,p=null;n&&typeof n.leading=="boolean"&&(c=n.leading),n&&typeof n.trailing=="boolean"&&(u=n.trailing),n&&typeof n.maxWait=="number"&&!isNaN(n.maxWait)&&(m=n.maxWait);var v=function(_){p&&(a.clearTimeout(p),p=null),f=_},b=function(_){v(_),g=e.apply(a._parent,I)},O=function(_){var y=Date.now(),A=!1;_&&(c&&y-d>=i&&(A=!0),d=y);var h=y-d,C=i-h,D=y-f,k=!1;return m!==null&&(D>=m&&p?k=!0:C=Math.min(C,m-D)),h>=i||k||A?b(y):(p===null||!_)&&u&&(p=a.setTimeout(O,C)),g},N=function(){return!!p},L=function(){N()&&v(Date.now())},V=function(){return N()&&b(Date.now()),g},B=function(){for(var _=[],y=0;y<arguments.length;y++)_[y]=arguments[y];return I=_,O(!0)};return B.cancel=L,B.flush=V,B.pending=N,B},r.prototype.requestAnimationFrame=function(e,t){var n=this,a=0,s=T(t);if(!this._isDisposed){this._animationFrameIds||(this._animationFrameIds={});var i=function(){try{n._animationFrameIds&&delete n._animationFrameIds[a],e.apply(n._parent)}catch(c){n._logError(c)}};a=s.requestAnimationFrame?s.requestAnimationFrame(i):s.setTimeout(i,0),this._animationFrameIds[a]=!0}return a},r.prototype.cancelAnimationFrame=function(e,t){var n=T(t);this._animationFrameIds&&this._animationFrameIds[e]&&(n.cancelAnimationFrame?n.cancelAnimationFrame(e):n.clearTimeout(e),delete this._animationFrameIds[e])},r.prototype._logError=function(e){this._onErrorHandler&&this._onErrorHandler(e)},r}();function qe(){var r=l.useRef();return r.current||(r.current=new $e),l.useEffect(function(){return function(){var e;(e=r.current)===null||e===void 0||e.dispose(),r.current=void 0}},[]),r.current}var Ge=Object.defineProperty,ne=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,ae=(r,e,t)=>e in r?Ge(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Xe=(r,e)=>{for(var t in e||(e={}))Je.call(e,t)&&ae(r,t,e[t]);if(ne)for(var t of ne(e))Qe.call(e,t)&&ae(r,t,e[t]);return r};const oe=l.memo(r=>{const{width:e,height:t,imagesFadeIn:n,displayedPersonas:a,onSelected:s,personaSize:i,setFocus:c,themeJSON:u,ariaLabel:m,items:d,overflowButtonType:f,showAddButton:g,overflowButtonAriaLabel:I,addbuttonAriaLabel:p,tabIndex:v}=r,b=l.useMemo(()=>{try{return u?(0,o.createTheme)(JSON.parse(u)):void 0}catch(h){console.error("Cannot parse theme",h)}},[u]),O=l.useCallback(h=>Xe({imageShouldFadeIn:n},typeof h.data!="undefined"&&{presence:Ae(h.data)}),[n]),N={ariaLabel:I,onClick:h=>s(z.OverFlowButtonEvent)},L={ariaLabel:p,onClick:h=>s(z.AddButtonEvent)},V=l.useMemo(()=>({display:"block",position:"absolute",width:e,height:t}),[e,t]),B=l.useCallback((h,C)=>{const D=C&&d.find(k=>k.id===(C==null?void 0:C.id));D&&s(z.PersonaEvent,D)},[d,s]),_=l.useRef(null),y=qe();l.useEffect(()=>{c&&c!==""&&_&&y.requestAnimationFrame(()=>{const h=_.current.getElementsByTagName("button");h&&h.length>0&&h[0].focus()})},[c,_,y]);const A=We(d,B);return l.createElement(o.ThemeProvider,{theme:b,style:V},l.createElement(Ne,{personaSize:i,personas:A,maxDisplayablePersonas:a,overflowButtonType:f,overflowButtonProps:N,getPersonaProps:O,ariaLabel:m,showAddButton:g,addButtonProps:L,tabIndex:v}))});oe.displayName="CanvasFacepile";class Ye{constructor(){this.eventName=void 0,this.focusKey="",this.onSelect=(e,t)=>{t&&t.data&&this.context.parameters.items.openDatasetItem(t.data.getNamedReference()),this.eventName=e,this.notifyOutputChanged()}}init(e,t){this.context=e,this.notifyOutputChanged=t,this.context.mode.trackContainerResize(!0)}updateView(e){var t,n,a,s,i,c,u;const m=parseInt(e.mode.allocatedWidth),d=parseInt(e.mode.allocatedHeight),f=(n=(t=e.accessibility)==null?void 0:t.assignedTabIndex)!=null?n:void 0,g=(s=(a=e.parameters)==null?void 0:a.AccessibilityLabel.raw)!=null?s:"",I=e.parameters.items,p=e.updatedProperties.indexOf(Z.dataset)>-1||!this.items,v=this.context.parameters.InputEvent.raw;v&&this.inputEvent!==v&&v.startsWith(ee.SetFocus)&&(this.focusKey=v),p&&(this.items=Ue(I));const O={height:d,width:m,tabIndex:f,items:this.items,setFocus:this.focusKey,displayedPersonas:(i=e.parameters.MaxDisplayablePersonas.raw)!=null?i:5,personaSize:ke(e.parameters.PersonaSize.raw),overflowButtonType:Re(e.parameters.OverflowButtonType.raw),ariaLabel:g,imagesFadeIn:e.parameters.ImageShouldFadeIn.raw,onSelected:this.onSelect,showAddButton:e.parameters.ShowAddButton.raw,overflowButtonAriaLabel:(c=e.parameters.OverflowButtonAriaLabel.raw)!=null?c:"",addbuttonAriaLabel:(u=e.parameters.AddbuttonAriaLabel.raw)!=null?u:""};return l.createElement(oe,O)}getOutputs(){return{EventName:this.eventName}}destroy(){}}pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad=R})();

if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('PowerCAT.Facepile', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Facepile);
} else {
	var PowerCAT = PowerCAT || {};
	PowerCAT.Facepile = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Facepile;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}