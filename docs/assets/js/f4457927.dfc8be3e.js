"use strict";(self.webpackChunketlnetdocumentation=self.webpackChunketlnetdocumentation||[]).push([[4528],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),h=o,d=f["".concat(s,".").concat(h)]||f[h]||p[h]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},12008:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return h}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Why ETL.NET?",author:"St\xe9phane Royer",author_title:"ETL.NET Lead developer",author_url:"https://github.com/paillave",author_image_url:"https://avatars.githubusercontent.com/paillave"},s="Why ETL.NET?",u={permalink:"/Etl.Net/blog/2021/08/01/WhyETLNET",editUrl:"https://paillave.github.io/Etl.Net/edit/master/website/blog/blog/2021-08-01-WhyETLNET.md",source:"@site/blog/2021-08-01-WhyETLNET.md",title:"Why ETL.NET?",description:"Years after years, contexts I faced led me to the conclusion that ETL engines (even SSIS that is that is still one of the bests 15 years after its initial release) should now reach a next generation.",date:"2021-08-01T00:00:00.000Z",formattedDate:"August 1, 2021",tags:[],readingTime:1.915,truncated:!0,authors:[{name:"St\xe9phane Royer",title:"ETL.NET Lead developer",url:"https://github.com/paillave",imageURL:"https://avatars.githubusercontent.com/paillave"}],nextItem:{title:"First Release!",permalink:"/Etl.Net/blog/2021/07/31/FirstRelease"}},c={authorsImageUrls:[void 0]},p=[],f={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Years after years, contexts I faced led me to the conclusion that ETL engines (even SSIS that is that is still one of the bests 15 years after its initial release) should now reach a next generation."),(0,a.kt)("p",null,"\ud83d\ude32 SSIS for instance, misses so many out of the box features that make ",(0,a.kt)("em",{parentName:"p"},"a lot")," of developers very frustrated. Just to mention one typical example among many I could enumerate: the terrible absence of an efficient and fast upsert."),(0,a.kt)("p",null,"\ud83d\ude15 As most of ETL engines are nearly exclusively focused on performance, I noticed that in real life, they are mostly used to integrate relatively small volumes of data. This reveals a wrong alignment between offer and demand. Most developers need to process between thousands and hundreds thousands rows, but editors keep on advertising how good they are in the integration of billions rows! At the end of the day, the sad fact is... indeed, ETL engines are monsters of performance when it is about to import billions of records... but for real life usual use cases, it is too heavy and very unproductive to develop with it. Not even to mention their integration in an application architecture."),(0,a.kt)("p",null,"\ud83d\ude0f Here, many BI specialists would answer the following:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"BI is a discipline of IT that is different, with a specific architecture that must be followed to get the best results. Ralph Kimball or Bill Inmon approaches shall be studied. Your vision is too much biased by your development approach.")),(0,a.kt)("p",null,"\ud83d\ude14 My personal belief is that the world changed; now it is this vision that is biased by an old fashioned BI approach. Computers are, like always, way more powerful than before: extracting, transforming and loading hundreds thousands rows of data is now a problem for nearly nobody anymore. Nowadays, the main problem is this one:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Can we implement ",(0,a.kt)("strong",{parentName:"p"},"with an acceptable effort")," an efficient, maintainable and complex ETL process in any simple architecture?")),(0,a.kt)("p",null,"\ud83d\udca1 ETL.NET Is meant to solve this problem.\nFor BI developers, it will look like... a simple .NET library. Nothing to do with heavy weighed tools with visual designers!"),(0,a.kt)("p",null,"ETL.NET has been done in the context of a ",(0,a.kt)("a",{parentName:"p",href:"https://www.fundprocess.lu"},"financial solution")," and it would be fantastic to see it being used by a larger community than myself and the team of ",(0,a.kt)("a",{parentName:"p",href:"https://www.fundprocess.lu"},"FundProcess"),"."))}h.isMDXComponent=!0}}]);