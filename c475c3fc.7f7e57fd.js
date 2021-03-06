(window.webpackJsonp=window.webpackJsonp||[]).push([[602],{660:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var o=a(2),n=a(6),r=(a(0),a(866)),l={id:"class-download",title:"class: Download"},d={unversionedId:"api/class-download",id:"version-0.18.0/api/class-download",isDocsHomePage:!1,title:"class: Download",description:"Download] objects are dispatched by page via the ['download' event.",source:"@site/versioned_docs/version-0.18.0/api/class-download.md",slug:"/api/class-download",permalink:"/playwright/docs/0.18.0/api/class-download",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-0.18.0/api/class-download.md",version:"0.18.0",sidebar:"version-0.18.0/api",previous:{title:"class: Dialog",permalink:"/playwright/docs/0.18.0/api/class-dialog"},next:{title:"class: FileChooser",permalink:"/playwright/docs/0.18.0/api/class-filechooser"}},c=[{value:"download.createReadStream()",id:"downloadcreatereadstream",children:[]},{value:"download.delete()",id:"downloaddelete",children:[]},{value:"download.failure()",id:"downloadfailure",children:[]},{value:"download.path()",id:"downloadpath",children:[]},{value:"download.url()",id:"downloadurl",children:[]}],i={rightToc:c};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/playwright/docs/0.18.0/api/class-download#class-download",title:"Download"}),"Download")," objects are dispatched by page via the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/playwright/docs/0.18.0/api/class-page#event-download"}),"'download'")," event."),Object(r.b)("p",null,"All the downloaded files belonging to the browser context are deleted when the browser context is closed. All downloaded files are deleted when the browser closes."),Object(r.b)("p",null,"Download event is emitted once the download starts. Download path becomes available\nonce download completes:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const [ download ] = await Promise.all([\n  page.waitForEvent('download'), // wait for download to start\n  page.click('a')\n]);\n// wait for download to complete\nconst path = await download.path();\n...\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"NOTE")," Browser context ",Object(r.b)("strong",{parentName:"p"},"must")," be created with the ",Object(r.b)("inlineCode",{parentName:"p"},"acceptDownloads")," set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when user needs access to the downloaded content. If ",Object(r.b)("inlineCode",{parentName:"p"},"acceptDownloads")," is not set or set to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),", download events are emitted, but the actual download is not performed and user has no access to the downloaded files.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/playwright/docs/0.18.0/api/class-download#downloadcreatereadstream"}),"download.createReadStream()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/playwright/docs/0.18.0/api/class-download#downloaddelete"}),"download.delete()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/playwright/docs/0.18.0/api/class-download#downloadfailure"}),"download.failure()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/playwright/docs/0.18.0/api/class-download#downloadpath"}),"download.path()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/playwright/docs/0.18.0/api/class-download#downloadurl"}),"download.url()"))),Object(r.b)("h2",{id:"downloadcreatereadstream"},"download.createReadStream()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<null|",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://nodejs.org/api/stream.htmlapi.md#stream_class_stream_readable",title:"Readable"}),"Readable"),">>")),Object(r.b)("p",null,"Returns readable stream for current download or ",Object(r.b)("inlineCode",{parentName:"p"},"null")," if download failed."),Object(r.b)("h2",{id:"downloaddelete"},"download.delete()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(r.b)("p",null,"Deletes the downloaded file."),Object(r.b)("h2",{id:"downloadfailure"},"download.failure()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<null|",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">>")),Object(r.b)("p",null,"Returns download error if any."),Object(r.b)("h2",{id:"downloadpath"},"download.path()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<null|",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">>")),Object(r.b)("p",null,"Returns path to the downloaded file in case of successful download."),Object(r.b)("h2",{id:"downloadurl"},"download.url()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">")),Object(r.b)("p",null,"Returns downloaded url."))}s.isMDXComponent=!0},866:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return w}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),s=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},p=function(e){var t=s(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=s(a),u=o,w=p["".concat(l,".").concat(u)]||p[u]||b[u]||r;return a?n.a.createElement(w,d(d({ref:t},i),{},{components:a})):n.a.createElement(w,d({ref:t},i))}));function w(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:o,l[1]=d;for(var i=2;i<r;i++)l[i]=a[i];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);