"use strict";(self.webpackChunketlnetdocumentation=self.webpackChunketlnetdocumentation||[]).push([[3049],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||r;return n?i.createElement(f,l(l({ref:t},p),{},{components:n})):i.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41231:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],s={sidebar_position:2},o="ETL process",c={unversionedId:"tutorials/defineProcess",id:"tutorials/defineProcess",isDocsHomePage:!1,title:"ETL process",description:"Read Process",source:"@site/docs/tutorials/2-defineProcess.md",sourceDirName:"tutorials",slug:"/tutorials/defineProcess",permalink:"/Etl.Net/docs/tutorials/defineProcess",editUrl:"https://paillave.github.io/Etl.Net/edit/master/website/docs/tutorials/2-defineProcess.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Backbone",permalink:"/Etl.Net/docs/tutorials/backbone"},next:{title:"Execute, Track & Check",permalink:"/Etl.Net/docs/tutorials/trackAndCheck"}},p=[{value:"List zip files",id:"list-zip-files",children:[]},{value:"Extract the right files from zip files",id:"extract-the-right-files-from-zip-files",children:[]},{value:"Parse csv files",id:"parse-csv-files",children:[]},{value:"Setup the connection",id:"setup-the-connection",children:[]},{value:"Create a class to replace the anonymous type",id:"create-a-class-to-replace-the-anonymous-type",children:[]},{value:"Parse csv files using the new class",id:"parse-csv-files-using-the-new-class",children:[]},{value:"Ensure there are no duplicates based on the email",id:"ensure-there-are-no-duplicates-based-on-the-email",children:[]},{value:"Upsert each occurrence in the target table",id:"upsert-each-occurrence-in-the-target-table",children:[]},{value:"Full source code at this stage",id:"full-source-code-at-this-stage",children:[]}],u={toc:p};function m(e){var t=e.components,s=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"etl-process"},"ETL process"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Read Process",src:n(92876).Z})),(0,r.kt)("p",null,"The definition of the ETL process is done in the method ",(0,r.kt)("inlineCode",{parentName:"p"},"DefineProcess"),". The following will be the implementation of this method."),(0,r.kt)("h2",{id:"list-zip-files"},"List zip files"),(0,r.kt)("p",null,"Add a reference to ",(0,r.kt)("inlineCode",{parentName:"p"},"Paillave.Etl.FileSystem"),", the extensions to interact with the local file system: read a file, list files from folder, write file on the file system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"dotnet add package Etl.Net.FileSystem\n")),(0,r.kt)("p",null,"By using extensions from ",(0,r.kt)("inlineCode",{parentName:"p"},"Paillave.Etl.FileSystem"),", we will recursively list all the zip files in the root folder that was transmitted when triggering the execution:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{2-3}","{2-3}":!0},'contextStream\n    .CrossApplyFolderFiles("list all required files", "*.zip", true)\n    .Do("display zip file name on console", i => Console.WriteLine(i.Name));\n')),(0,r.kt)("h2",{id:"extract-the-right-files-from-zip-files"},"Extract the right files from zip files"),(0,r.kt)("p",null,"Add a reference to ",(0,r.kt)("inlineCode",{parentName:"p"},"Paillave.Etl.Zip"),", the extension to Unzip files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"dotnet add package Paillave.Etl.Zip\n")),(0,r.kt)("p",null,"By using extensions from ",(0,r.kt)("inlineCode",{parentName:"p"},"Paillave.Etl.Zip"),", we will recursively list all the csv files contained in all the enumerated zip files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{3-4}","{3-4}":!0},'contextStream\n    .CrossApplyFolderFiles("list all required files", "*.zip", true)\n    .CrossApplyZipFiles("extract files from zip", "*.csv")\n    .Do("display extracted csv file name on console", i => Console.WriteLine(i.Name));\n')),(0,r.kt)("h2",{id:"parse-csv-files"},"Parse csv files"),(0,r.kt)("p",null,"Add a reference to ",(0,r.kt)("inlineCode",{parentName:"p"},"Paillave.Etl.TextFile"),", the extensions to serialize or deserialize text files (delimited or fixed width):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"dotnet add package Paillave.Etl.TextFile\n")),(0,r.kt)("p",null,"By using extensions from ",(0,r.kt)("inlineCode",{parentName:"p"},"Paillave.Etl.TextFile"),", we will parse every csv file that has been unzipped:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{4-12}","{4-12}":!0},'contextStream\n    .CrossApplyFolderFiles("list all required files", "*.zip", true)\n    .CrossApplyZipFiles("extract files from zip", "*.csv")\n    .CrossApplyTextFile("parse file", FlatFileDefinition.Create(i => new\n    {\n        Email = i.ToColumn("email"),\n        FirstName = i.ToColumn("first name"),\n        LastName = i.ToColumn("last name"),\n        DateOfBirth = i.ToDateColumn("date of birth", "yyyy-MM-dd"),\n        Reputation = i.ToNumberColumn<int?>("reputation", ".")\n    }).IsColumnSeparated(\',\'))\n    .Do("display parsed person email on console", i => Console.WriteLine(i.Email));\n')),(0,r.kt)("h2",{id:"setup-the-connection"},"Setup the connection"),(0,r.kt)("p",null,"By using ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Data.SqlClient"),", we create a connection to the database and we will inject it into the ETL process when triggering it."),(0,r.kt)("p",null,"The extension that needs to operate with the database will get its connection through the DI setup here."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{4-11,13}","{4-11,13}":!0},'static async Task Main(string[] args)\n{\n    var processRunner = StreamProcessRunner.Create<string>(DefineProcess);\n    using (var cnx = new SqlConnection(args[1]))\n    {\n        cnx.Open();\n        var executionOptions = new ExecutionOptions<string>\n        {\n            Resolver = new SimpleDependencyResolver().Register(cnx)\n        };\n        var res = await processRunner.ExecuteAsync(args[0], executionOptions);\n        Console.Write(res.Failed ? "Failed" : "Succeeded");\n    }\n}\n')),(0,r.kt)("h2",{id:"create-a-class-to-replace-the-anonymous-type"},"Create a class to replace the anonymous type"),(0,r.kt)("p",null,"This class is necessary for 2 reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We want to retrieve the Id for every record that is upserted and it is not in the input file"),(0,r.kt)("li",{parentName:"ul"},"The object will be updated by the process so it cannot be anonymous")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The structure of the class must match the table."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"private class Person\n{\n    public int Id { get; set; }\n    public string Email { get; set; }\n    public string FirstName { get; set; }\n    public string LastName { get; set; }\n    public DateTime DateOfBirth { get; set; }\n    public int? Reputation { get; set; }\n}\n")),(0,r.kt)("h2",{id:"parse-csv-files-using-the-new-class"},"Parse csv files using the new class"),(0,r.kt)("p",null,"The flat file parser works with concrete types as well. We will use the new class ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," instead of an anonymous type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{4}","{4}":!0},'contextStream\n    .CrossApplyFolderFiles("list all required files", "*.zip", true)\n    .CrossApplyZipFiles("extract files from zip", "*.csv")\n    .CrossApplyTextFile("parse file", FlatFileDefinition.Create(i => new Person\n        {\n            Email = i.ToColumn("email"),\n            FirstName = i.ToColumn("first name"),\n            LastName = i.ToColumn("last name"),\n            DateOfBirth = i.ToDateColumn("date of birth", "yyyy-MM-dd"),\n            Reputation = i.ToNumberColumn<int?>("reputation", ".")\n        }).IsColumnSeparated(\',\'))\n    .Do("display parsed person email on console", i => Console.WriteLine(i.Email));\n')),(0,r.kt)("h2",{id:"ensure-there-are-no-duplicates-based-on-the-email"},"Ensure there are no duplicates based on the email"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Distinct")," operator, in its common usage will ignore any recurring input based on the given key (the key can be an anonymous type with several properties)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{12}","{12}":!0},'contextStream\n    .CrossApplyFolderFiles("list all required files", "*.zip", true)\n    .CrossApplyZipFiles("extract files from zip", "*.csv")\n    .CrossApplyTextFile("parse file", FlatFileDefinition.Create(i => new Person\n        {\n            Email = i.ToColumn("email"),\n            FirstName = i.ToColumn("first name"),\n            LastName = i.ToColumn("last name"),\n            DateOfBirth = i.ToDateColumn("date of birth", "yyyy-MM-dd"),\n            Reputation = i.ToNumberColumn<int?>("reputation", ".")\n        }).IsColumnSeparated(\',\'))\n    .Distinct("exclude duplicates", i => i.Email)\n    .Do("display parsed person email on console", i => Console.WriteLine(i.Email));\n')),(0,r.kt)("h2",{id:"upsert-each-occurrence-in-the-target-table"},"Upsert each occurrence in the target table"),(0,r.kt)("p",null,"We will save everything in the database using the following and very common rules during the integration of data in a database:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We will exclude duplicates on the business key (the email)"),(0,r.kt)("li",{parentName:"ul"},"We will make an upsert in the target table based on the business key (the email)"),(0,r.kt)("li",{parentName:"ul"},"The object that is upserted is updated with the value of every field of the table, taking in consideration all the computed values at database level like the Id")),(0,r.kt)("p",null,"Add a reference to ",(0,r.kt)("inlineCode",{parentName:"p"},"Paillave.Etl.SqlServer"),", the extensions to interact with Sql Server ",(0,r.kt)("strong",{parentName:"p"},"without")," Entity Framework:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"dotnet add package Paillave.Etl.SqlServer\n")),(0,r.kt)("p",null,"By using ",(0,r.kt)("inlineCode",{parentName:"p"},"Paillave.Etl.SqlServer"),", save every occurrence in the database, and get updates so that every object is exactly like it is in the table after the upsert."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{13-17}","{13-17}":!0},'contextStream\n    .CrossApplyFolderFiles("list all required files", "*.zip", true)\n    .CrossApplyZipFiles("extract files from zip", "*.csv")\n    .CrossApplyTextFile("parse file", FlatFileDefinition.Create(i => new Person\n        {\n            Email = i.ToColumn("email"),\n            FirstName = i.ToColumn("first name"),\n            LastName = i.ToColumn("last name"),\n            DateOfBirth = i.ToDateColumn("date of birth", "yyyy-MM-dd"),\n            Reputation = i.ToNumberColumn<int?>("reputation", ".")\n        }).IsColumnSeparated(\',\'))\n    .Distinct("exclude duplicates", i => i.Email)\n    .SqlServerSave("save in DB", o => o\n        .ToTable("dbo.Person")\n        .SeekOn(p => p.Email)\n        .DoNotSave(p => p.Id))\n    .Do("display ids on console", i => Console.WriteLine(i.Id));\n')),(0,r.kt)("h2",{id:"full-source-code-at-this-stage"},"Full source code at this stage"),(0,r.kt)("p",null,"This piece of program is a typical process to make a reliable upsert of the content of every zipped csv file in a folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Program.cs"',title:'"Program.cs"'},'using System;\nusing System.Threading.Tasks;\nusing Paillave.Etl.FileSystem;\nusing Paillave.Etl.Zip;\nusing Paillave.Etl.TextFile;\nusing Paillave.Etl.SqlServer;\nusing System.Data.SqlClient;\nusing Paillave.Etl.Core;\n\nnamespace SimpleTutorial\n{\n    class Program\n    {\n        static async Task Main(string[] args)\n        {\n            var processRunner = StreamProcessRunner.Create<string>(DefineProcess);\n            using (var cnx = new SqlConnection(args[1]))\n            {\n                cnx.Open();\n                var executionOptions = new ExecutionOptions<string>\n                {\n                    Resolver = new SimpleDependencyResolver().Register(cnx)\n                };\n                var res = await processRunner.ExecuteAsync(args[0], executionOptions);\n                Console.Write(res.Failed ? "Failed" : "Succeeded");\n            }\n        }\n        private static void DefineProcess(ISingleStream<string> contextStream)\n        {\n            contextStream\n                .CrossApplyFolderFiles("list all required files", "*.zip", true)\n                .CrossApplyZipFiles("extract files from zip", "*.csv")\n                .CrossApplyTextFile("parse file", \n                    FlatFileDefinition.Create(i => new Person\n                    {\n                        Email = i.ToColumn("email"),\n                        FirstName = i.ToColumn("first name"),\n                        LastName = i.ToColumn("last name"),\n                        DateOfBirth = i.ToDateColumn("date of birth", "yyyy-MM-dd"),\n                        Reputation = i.ToNumberColumn<int?>("reputation", ".")\n                    }).IsColumnSeparated(\',\'))\n                .Distinct("exclude duplicates based on the Email", i => i.Email)\n                .SqlServerSave("upsert using Email as key and ignore the Id", o => o\n                    .ToTable("dbo.Person")\n                    .SeekOn(p => p.Email)\n                    .DoNotSave(p => p.Id))\n                .Select("define row to report", i => new { i.Email, i.Id })\n                .ToTextFileValue("write summary to file", \n                    "report.csv", \n                    FlatFileDefinition.Create(i => new\n                    {\n                        Email = i.ToColumn("Email"),\n                        Id = i.ToNumberColumn<int>("new or existing Id", ".")\n                    }).IsColumnSeparated(\',\'))\n                .WriteToFile("save log file", i => i.Name);\n        }\n        private class Person\n        {\n            public int Id { get; set; }\n            public string Email { get; set; }\n            public string FirstName { get; set; }\n            public string LastName { get; set; }\n            public DateTime DateOfBirth { get; set; }\n            public int? Reputation { get; set; }\n        }\n    }\n}\n')))}m.isMDXComponent=!0},92876:function(e,t,n){t.Z=n.p+"assets/images/integrate-database-library-graphs-3f4f28cfe695fc2a42bdeb8f4a8686af.svg"}}]);