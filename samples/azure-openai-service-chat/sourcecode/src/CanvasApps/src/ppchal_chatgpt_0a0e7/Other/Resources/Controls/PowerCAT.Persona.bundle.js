var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;(()=>{"use strict";var o={};o.d=(n,r)=>{for(var a in r)o.o(r,a)&&!o.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:r[a]})},o.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),o.r=n=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var t={};/*!**************************************!*\
  !*** ./Persona/index.ts + 4 modules ***!
  \**************************************/o.r(t),o.d(t,{Persona:()=>G});const s=React,e=FluentUIReactv8290;var S=Object.defineProperty,i=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,P=(n,r,a)=>r in n?S(n,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[r]=a,T=(n,r)=>{for(var a in r||(r={}))h.call(r,a)&&P(n,a,r[a]);if(i)for(var a of i(r))O.call(r,a)&&P(n,a,r[a]);return n};const u=s.memo(n=>{const{themeJSON:r}=n,a=s.useMemo(()=>{try{return r?(0,e.createTheme)(JSON.parse(r)):void 0}catch(l){console.error("Cannot parse theme",l)}},[r]);return s.createElement(e.ThemeProvider,{theme:a},s.createElement(e.Persona,T({},n)))});u.displayName="CanvasPersona";const k={0:e.PersonaPresence.none,1:e.PersonaPresence.offline,2:e.PersonaPresence.online,3:e.PersonaPresence.away,4:e.PersonaPresence.dnd,5:e.PersonaPresence.blocked,6:e.PersonaPresence.busy},j={17:e.PersonaSize.size8,10:e.PersonaSize.size24,11:e.PersonaSize.size32,12:e.PersonaSize.size40,13:e.PersonaSize.size48,16:e.PersonaSize.size56,14:e.PersonaSize.size72,15:e.PersonaSize.size100,18:e.PersonaSize.size120},R={lightBlue:e.PersonaInitialsColor.lightBlue,blue:e.PersonaInitialsColor.blue,darkBlue:e.PersonaInitialsColor.darkBlue,teal:e.PersonaInitialsColor.teal,green:e.PersonaInitialsColor.green,darkGreen:e.PersonaInitialsColor.darkGreen,lightPink:e.PersonaInitialsColor.lightPink,pink:e.PersonaInitialsColor.pink,magenta:e.PersonaInitialsColor.magenta,purple:e.PersonaInitialsColor.purple,orange:e.PersonaInitialsColor.orange,lightRed:e.PersonaInitialsColor.lightRed,darkRed:e.PersonaInitialsColor.darkRed,violet:e.PersonaInitialsColor.violet,gold:e.PersonaInitialsColor.gold,burgundy:e.PersonaInitialsColor.burgundy,warmGray:e.PersonaInitialsColor.warmGray,cyan:e.PersonaInitialsColor.cyan,rust:e.PersonaInitialsColor.rust,coolGray:e.PersonaInitialsColor.coolGray};class G{init(r){this.context=r,this.context.mode.trackContainerResize(!0)}updateView(r){var a,l,c,p,m,d,_,g,v,I,y,C,b,w,f,z;const E={themeJSON:(a=r.parameters.Theme.raw)!=null?a:"",imageUrl:(c=(l=r.parameters)==null?void 0:l.ImageUrl.raw)!=null?c:"",imageInitials:(m=(p=r.parameters)==null?void 0:p.ImageInitials.raw)!=null?m:"",text:(_=(d=r.parameters)==null?void 0:d.Text.raw)!=null?_:"",secondaryText:(v=(g=r.parameters)==null?void 0:g.SecondaryText.raw)!=null?v:"",tertiaryText:(y=(I=r.parameters)==null?void 0:I.TertiaryText.raw)!=null?y:"",optionalText:(b=(C=r.parameters)==null?void 0:C.OptionalText.raw)!=null?b:"",imageAlt:(f=(w=r.parameters)==null?void 0:w.ImageAlt.raw)!=null?f:"",presence:k[r.parameters.Presence.raw],size:j[r.parameters.PersonaSize.raw],hidePersonaDetails:r.parameters.HidePersonaDetails.raw,ariaLabel:(z=r.parameters.AccessibilityLabel.raw)!=null?z:"",initialsColor:R[r.parameters.PersonaInitialsColor.raw]};return s.createElement(u,E)}getOutputs(){return{}}destroy(){}}pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad=t})();

if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('PowerCAT.Persona', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Persona);
} else {
	var PowerCAT = PowerCAT || {};
	PowerCAT.Persona = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Persona;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}