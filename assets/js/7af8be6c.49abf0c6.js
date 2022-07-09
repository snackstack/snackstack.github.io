"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[195],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=o,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return t?a.createElement(k,r(r({ref:n},l),{},{components:t})):a.createElement(k,r({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4911:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const i={sidebar_position:2,title:"Displaying notifications"},r=void 0,s={unversionedId:"guides/displaying-notifications",id:"guides/displaying-notifications",title:"Displaying notifications",description:"@snackstack/core itself does not come with a way for displaying notifications.",source:"@site/docs/guides/displaying-notifications.md",sourceDirName:"guides",slug:"/guides/displaying-notifications",permalink:"/docs/guides/displaying-notifications",draft:!1,editUrl:"https://github.com/snackstack/docs/tree/main/docs/guides/displaying-notifications.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Displaying notifications"},sidebar:"tutorialSidebar",previous:{title:"Managing notifications",permalink:"/docs/guides/managing-notifications"},next:{title:"Material UI",permalink:"/docs/adapters/mui"}},c={},p=[{value:"Using an adapter",id:"using-an-adapter",level:2},{value:"Using a custom component",id:"using-a-custom-component",level:2},{value:"Fixed component height",id:"fixed-component-height",level:3},{value:"Dynamic component height",id:"dynamic-component-height",level:3}],l={toc:p};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@snackstack/core")," itself does not come with a way for displaying notifications."),(0,o.kt)("p",null,"It only deals with managing the notifications - the display is up to the user or a pre-built adapter."),(0,o.kt)("h2",{id:"using-an-adapter"},"Using an adapter"),(0,o.kt)("p",null,"In order to make using snackstack as easy as possible, we have built some adapters for popular component libraries."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/adapters/mui"},"Checkout our pre-built adapters for popular component libraries")),(0,o.kt)("h2",{id:"using-a-custom-component"},"Using a custom component"),(0,o.kt)("p",null,"If the adapters do not support your use-case, you can always build your own notification component."),(0,o.kt)("p",null,"You can create a new component and use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/hooks/useActiveSnacks"},"useActiveSnacks")," hook to get access to all notifications that should be rendered."),(0,o.kt)("p",null,"Once you have all of the active notifications, you can render your custom notification component for each of them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useActiveSnacks } from "@snackstack/core";\n\nfunction MyNotificationContainer() {\n  const activeSnacks = useActiveSnacks();\n\n  return (\n    <ul>\n      {activeSnacks.map((snack) => (\n        <li key={snack.id}>{snack.message}</li>\n      ))}\n    </ul>\n  );\n}\n')),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The above code would not be correct, since ",(0,o.kt)("inlineCode",{parentName:"p"},"snack.message")," can also be a function that takes the current ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/types/Snack"},"Snack")," as an argument."),(0,o.kt)("p",{parentName:"div"},"In order to make it work, we need to ",(0,o.kt)("em",{parentName:"p"},"resolve")," the actual message by invoking the method."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<ul>\n  {activeSnacks.map((snack) => {\n    let message = snack.message;\n\n    if (typeof message === "function") {\n      message = message(snack);\n    }\n\n    return <li key={snack.id}>{message}</li>;\n  })}\n</ul>\n')),(0,o.kt)("p",{parentName:"div"},"The same is true for ",(0,o.kt)("inlineCode",{parentName:"p"},"snack.action"),"."))),(0,o.kt)("h3",{id:"fixed-component-height"},"Fixed component height"),(0,o.kt)("p",null,"For scenarios beside using ",(0,o.kt)("inlineCode",{parentName:"p"},"li"),", you are most likely going to need to calculate some sort of offset to display notifications on top of each other."),(0,o.kt)("p",null,"If you know the height of your component and this height does not change, you could simply use the index to compute an offset."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const spacing = 5;\nconst componentHeight = 80;\n\n<ul>\n  {activeSnacks.map((snack, index) => {\n    const heightOffset = index * (componentHeight + spacing);\n\n    return (\n      <li key={snack.id} style={{ bottom: heightOffset }}>\n        ...\n      </li>\n    );\n  })}\n</ul>;\n")),(0,o.kt)("h3",{id:"dynamic-component-height"},"Dynamic component height"),(0,o.kt)("p",null,"If you do not know the definite height of your component or your component might change in height, you can wrap your component in a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/components/SnackItem"},"SnackItem")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'import { useActiveSnacks } from "@snackstack/core";\n+ import { SnackItem } from "@snackstack/core";\n\nfunction MyNotificationContainer() {\n  const activeSnacks = useActiveSnacks();\n  const spacing = 5;\n\n  return (\n    <>\n      {activeSnacks.map((snack, index) => {\n        const heightOffset = index * (snack.height + spacing);\n\n        return (\n+         <SnackItem key={snack.id} snackId={snack.id}>\n            <div key={snack.id} style={{ bottom: heightOffset }}>\n              ...\n            </div>\n+         </SnackItem>\n        );\n      })}\n    </>\n  );\n}\n')),(0,o.kt)("p",null,"This component will attach a ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"ref")," to your custom component and calculate its size using a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/ResizeObserver"},"ResizeObserver"),". This size is then stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"snack.height")," property, so you can use it for offset calculations."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There are some constraints on the type of children the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/components/SnackItem"},"SnackItem")," component can accept."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/components/SnackItem#constraints-on-children"},"Learn more about these constraints")))))}m.isMDXComponent=!0}}]);