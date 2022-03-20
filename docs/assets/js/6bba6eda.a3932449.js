"use strict";(self.webpackChunketlnetdocumentation=self.webpackChunketlnetdocumentation||[]).push([[7430],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=r,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return n?i.createElement(d,o(o({ref:t},p),{},{components:n})):i.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},64890:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={sidebar_position:4},s="Create files",c={unversionedId:"recipes/createFiles",id:"recipes/createFiles",title:"Create files",description:"Handling files in ETL.NET involves manipulating streams of payloads implementing the interface IFileValue. But how to actually create these payloads from nothing if they are not taken from any file source?",source:"@site/docs/recipes/4_createFiles.md",sourceDirName:"recipes",slug:"/recipes/createFiles",permalink:"/Etl.Net/docs/recipes/createFiles",editUrl:"https://github.com/paillave/Etl.Net/blob/develop/documentation/docs/recipes/4_createFiles.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Read files",permalink:"/Etl.Net/docs/recipes/readFiles"},next:{title:"Data access native SQL Server",permalink:"/Etl.Net/docs/recipes/sqlServer"}},p={},u=[{value:"One file",id:"one-file",level:2},{value:"One file with no specific format",id:"one-file-with-no-specific-format",level:3},{value:"One file in CSV or Excel format",id:"one-file-in-csv-or-excel-format",level:3},{value:"Many files",id:"many-files",level:2},{value:"Many files with no specific format",id:"many-files-with-no-specific-format",level:3},{value:"Many files in CSV or Excel format",id:"many-files-in-csv-or-excel-format",level:3}],f={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-files"},"Create files"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/dealWithFiles"},"Handling files in ETL.NET")," involves manipulating streams of payloads implementing the interface ",(0,a.kt)("inlineCode",{parentName:"p"},"IFileValue"),". But how to actually create these payloads from nothing if they are not taken from any file source?"),(0,a.kt)("h2",{id:"one-file"},"One file"),(0,a.kt)("h3",{id:"one-file-with-no-specific-format"},"One file with no specific format"),(0,a.kt)("p",null,"The first way to create a file, is to create a file with a content with no specific or known format. In this situation, the principle is to create an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"FileValueWriter")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"FileValueWriter.Create")," static method. ",(0,a.kt)("inlineCode",{parentName:"p"},"FileValueWriter")," implements ",(0,a.kt)("inlineCode",{parentName:"p"},"IFileValue")," and that wraps nearly every method of ",(0,a.kt)("inlineCode",{parentName:"p"},"StreamWriter"),". ",(0,a.kt)("em",{parentName:"p"},"Note: all these methods return the current instance so that they can be called in a fluent way."),"\nBefore this, the stream must be aggregated for it to issue lists of rows instead of single rows. To change a stream into a single stream event (",(0,a.kt)("inlineCode",{parentName:"p"},"ISingleStream"),") the operator ",(0,a.kt)("inlineCode",{parentName:"p"},"ToList")," can be used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'var streamOfFile = streamOfRows\n    .ToList("aggregate all rows")\n    .Select("create file", rows => FileValueWriter\n        .Create("fileExport.txt")\n        .WriteLine("this content has no specific format")\n        .Write(String.Join(", ", rows.Select(row => row.Name).ToList())));\n')),(0,a.kt)("h3",{id:"one-file-in-csv-or-excel-format"},"One file in CSV or Excel format"),(0,a.kt)("p",null,"In many occasions, writing a file will consist in creating an excel file, or a csv file with fixed width or delimited columns"),(0,a.kt)("p",null,"File creation extensions ",(0,a.kt)("inlineCode",{parentName:"p"},"Paillave.EtlNet.TextFile")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Paillave.EtlNet.ExcelFile")," can change a stream into a ",(0,a.kt)("inlineCode",{parentName:"p"},"IFileValue")," instance out of the box."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'var streamOfFile = streamOfRows\n    .Select("create row to save", i => new { i.Index, i.Name })\n    .ToTextFileValue("save into csv file", "fileExport.csv", FlatFileDefinition.Create(i => new\n    {\n        Index = i.ToNumberColumn<int>("Idx", "."),\n        Name = i.ToColumn("Title")\n    }).IsColumnSeparated(\',\'));\n')),(0,a.kt)("h2",{id:"many-files"},"Many files"),(0,a.kt)("h3",{id:"many-files-with-no-specific-format"},"Many files with no specific format"),(0,a.kt)("p",null,"The way to create several files in a single process is to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"GroupBy")," operator."),(0,a.kt)("p",null,"The first way to use it is only possible if ",(0,a.kt)("inlineCode",{parentName:"p"},"FileValueWriter")," is used. This way to use ",(0,a.kt)("inlineCode",{parentName:"p"},"GroupBy")," is to simply give the grouping key/keys. This way, the operator will issue one event per group containing the list of values contained in the group."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'var streamOfFile = streamOfRows\n    .GroupBy("group rows", i => i.CategoryId) \n    // can also be written this way to permit several grouping keys:\n    // .GroupBy("group rows", i => new { i.CategoryId }) \n    .Select("create file", rows => FileValueWriter\n        .Create($"otherFileExport{rows.FirstValue.CategoryId}.txt")\n        .WriteLine($"here is the list of indexes in the category {rows.FirstValue.CategoryId}")\n        .Write(String.Join(", ", rows.Aggregation.Select(row => row.Name).ToList())));\n')),(0,a.kt)("p",null,"The other way is to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"GroupBy")," operator by giving a subprocess along with the grouping key. The subprocess is the definition of a process from a stream that will issue every event belonging to the group. With the substream, the ",(0,a.kt)("inlineCode",{parentName:"p"},"GroupBy")," operator will give the first element of the group as it is very likely to be useful to create the file name. To achieve the same than what is above, it is just necessary to reproduce the pattern described higher within the subprocess:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'var streamOfFile = streamOfRows\n    .GroupBy("process per group", i => i.CategoryId, (subStream, firstRow) => subStream\n        .ToList("aggregate all rows")\n        .Select("create file", rows => FileValueWriter\n            .Create($"fileExport{firstRow?.CategoryId}.txt")\n            .WriteLine($"here is the list of indexes in the category {firstRow?.CategoryId}")\n            .Write(String.Join(", ", rows.Select(row => row.Name).ToList()))));\n')),(0,a.kt)("h3",{id:"many-files-in-csv-or-excel-format"},"Many files in CSV or Excel format"),(0,a.kt)("p",null,"Defining a subprocess like shown in the example right above is the only way to go to produce several files by using ",(0,a.kt)("inlineCode",{parentName:"p"},"Paillave.EtlNet.TextFile")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Paillave.EtlNet.ExcelFile")," extensions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'var streamOfFile = streamOfRows\n    .GroupBy("process per group", i => i.CategoryId, (subStream, firstRow) => subStream\n        .Select("create row to save", i => new { i.Index, i.Name })\n        .ToTextFileValue(\n            "save into csv file", \n            $"fileExport{firstRow?.CategoryId}.csv", \n            FlatFileDefinition.Create(i => new\n            {\n                Index = i.ToNumberColumn<int>("Idx", "."),\n                Name = i.ToColumn("Title")\n            })));\n')),(0,a.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Keep in mind that the given first row will be null when called to evaluate the execution plan by the runtime. Therefore, ensure that no null exception is raised when using it.\nOf course, during the actual process, it will ",(0,a.kt)("strong",{parentName:"p"},"never")," be null."))))}m.isMDXComponent=!0}}]);