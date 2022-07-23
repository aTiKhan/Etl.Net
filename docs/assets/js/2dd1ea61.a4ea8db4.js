"use strict";(self.webpackChunketlnetdocumentation=self.webpackChunketlnetdocumentation||[]).push([[8353],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7711:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:5},i="Data access native SQL Server",s={unversionedId:"recipes/sqlServer",id:"recipes/sqlServer",title:"Data access native SQL Server",description:"ETL.NET official extension to access SQL server without Entity Framework is Paillave.EtlNet.SqlServer.",source:"@site/docs/recipes/5_sqlServer.md",sourceDirName:"recipes",slug:"/recipes/sqlServer",permalink:"/Etl.Net/docs/recipes/sqlServer",draft:!1,editUrl:"https://github.com/paillave/Etl.Net/blob/develop/documentation/docs/recipes/5_sqlServer.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Create files",permalink:"/Etl.Net/docs/recipes/createFiles"},next:{title:"Data access with entity framework",permalink:"/Etl.Net/docs/recipes/ef"}},l={},p=[{value:"Setup the connection",id:"setup-the-connection",level:2},{value:"Read",id:"read",level:2},{value:"Lookup",id:"lookup",level:2},{value:"Save",id:"save",level:2},{value:"Execute a SQL process for every row",id:"execute-a-sql-process-for-every-row",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-access-native-sql-server"},"Data access native SQL Server"),(0,r.kt)("p",null,"ETL.NET official extension to access SQL server without Entity Framework is ",(0,r.kt)("inlineCode",{parentName:"p"},"Paillave.EtlNet.SqlServer"),"."),(0,r.kt)("p",null,"ETL.NET official extensions for database permit to save correlated or not correlated using a smart upsert method."),(0,r.kt)("h2",{id:"setup-the-connection"},"Setup the connection"),(0,r.kt)("p",null,"Obviously, for Sql Server operators to work, they need a connection to the database. ",(0,r.kt)("a",{parentName:"p",href:"/docs/recipes/useExternalData"},"Dependency injection")," must be used to inject the connection in the process when triggering the process with ",(0,r.kt)("inlineCode",{parentName:"p"},"ProcessRunner"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"var processRunner = StreamProcessRunner.Create<string>(DefineProcess);\nusing (var cnx = new SqlConnection(args[1]))\n{\n    cnx.Open();\n    var executionOptions = new ExecutionOptions<string>\n    {\n        Resolver = new SimpleDependencyResolver().Register(cnx),\n    };\n    var res = await processRunner.ExecuteAsync(args[0], executionOptions);\n}\n")),(0,r.kt)("p",null,"Check ",(0,r.kt)("a",{parentName:"p",href:"/docs/recipes/useExternalData"},"here")," to have more details about dependency injection."),(0,r.kt)("h2",{id:"read"},"Read"),(0,r.kt)("p",null,"Reading data from the database is based on a ",(0,r.kt)("inlineCode",{parentName:"p"},"CrossApply")," operator type. This means that the operation will execute the query and issue new rows ",(0,r.kt)("strong",{parentName:"p"},"for each event of the input stream"),"."),(0,r.kt)("p",null,"Get data with no criteria using a class that matches ",(0,r.kt)("strong",{parentName:"p"},"exactly")," the structure of the returned dataset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'contextStream\n    .CrossApplySqlServerQuery("get people", o => o\n        .FromQuery("select p.* from dbo.Person as p")\n        .WithMapping<Person>())\n    .Do("show people on console", i => Console.WriteLine($"{i.FirstName} {i.LastName}: ${i.DateOfBirth:yyyy-MM-dd}"));\n')),(0,r.kt)("p",null,"Here is how to do to accomplish the same if working using a class that doesn't match the structure of even with an anonymous type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'contextStream\n    .CrossApplySqlServerQuery("get people", o => o\n        .FromQuery("select p.* from dbo.Person as p")\n        .WithMapping(i => new\n        {\n            Name = i.ToColumn("FirstName"),\n            Birthday = i.ToDateColumn("DateOfBirth")\n        }))\n    .Do("show people on console", i => Console.WriteLine($"{i.Name}: ${i.Birthday:yyyy-MM-dd}"));\n')),(0,r.kt)("p",null,"To apply a criteria for each execution, the input payload must contain properties with a name and a type that corresponds the necessary SQL variable that is used in the SQL statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'contextStream\n    .Select("build criteria", i => new { Reputation = 345 })\n    .CrossApplySqlServerQuery("get people", o => o\n        .FromQuery("select p.* from dbo.Person as p where p.Reputation = @Reputation")\n        .WithMapping(i => new\n        {\n            Name = i.ToColumn("FirstName"),\n            Birthday = i.ToDateColumn("DateOfBirth")\n        }))\n    .Do("show people on console", i => Console.WriteLine($"{i.Name}: ${i.Birthday:yyyy-MM-dd}"));\n')),(0,r.kt)("h2",{id:"lookup"},"Lookup"),(0,r.kt)("p",null,"To make a lookup, extensions for Sql Server don't provide any operator out of the box. The work around is to use the in memory lookup of ETL.NET core."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'var authorStream = contextStream\n    .CrossApplySqlServerQuery("get authors", o => o\n        .FromQuery("select a.* from dbo.Author as a")\n        .WithMapping(i => new\n        {\n            Id = i.ToNumberColumn<int>("Id"),\n            Name = i.ToColumn("Name"),\n            Reputation = i.ToNumberColumn<int>("Reputation")\n        }));\n\npostStream\n    .Lookup("get related author", authorStream,\n        l => l.AuthorId,\n        r => r.Id,\n        (l, r) => new { Post = l, Author = r })\n    .Do("show value on console", i => Console.WriteLine($"{i.Post.Title} ({i.Author.Name})"));\n\n')),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Keep in mind that the lookup operator is compelled to wait for the whole target stream to be completed to actually start the actual lookup operation. Of course, ",(0,r.kt)("strong",{parentName:"p"},"at the same time it is storing the full right stream in memory, it does the same with the left stream the right one is completed"),". To avoid this, consider the ",(0,r.kt)("inlineCode",{parentName:"p"},"LeftJoin")," operator, but this one need both streams to be sorted on the pivot value."))),(0,r.kt)("p",null,"As mentioned in the previous warning, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Lookup")," operator is not without problem, and the alternative can be the ",(0,r.kt)("inlineCode",{parentName:"p"},"LeftJoin")," of both input stream are properly sorted. With the two stream sorted on the pivot key, just the latest row of both streams will be stored in memory. If any stream is already sorted, it makes absolutely no sense to sort it. This is where ",(0,r.kt)("inlineCode",{parentName:"p"},"EnsureSorted")," comes. It permits to check that the stream is properly sorted. If it is not properly sorted, and error will be raised and the process will stop. For the target stream, ",(0,r.kt)("inlineCode",{parentName:"p"},"EnsureKeyed")," will make the same but will check that there is no duplicate either."),(0,r.kt)("p",null,"This way, the process will be as fast and memory saving as it can be, even with billions rows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{3,10,13,14}","{3,10,13,14}":!0},'var authorStream = contextStream\n    .CrossApplySqlServerQuery("get authors", o => o\n        .FromQuery("select a.* from dbo.Author as a order by a.Id")\n        .WithMapping(i => new\n        {\n            Id = i.ToNumberColumn<int>("Id"),\n            Name = i.ToColumn("Name"),\n            Reputation = i.ToNumberColumn<int>("Reputation")\n        }))\n    .EnsureKeyed("ensure authors are sorted by Id with no duplicate without actually sorting it", i => i.Id);\n\npostStream\n    .EnsureSorted("ensure posts are sorted by AuthorId without actually sorting it", i => i.AuthorId);\n    .LeftJoin("get related author", authorStream,\n        l => l.AuthorId,\n        r => r.Id,\n        (l, r) => new { Post = l, Author = r })\n    .Do("show value on console", i => Console.WriteLine($"{i.Post.Title} ({i.Author.Name})"));\n')),(0,r.kt)("p",null,"Look ",(0,r.kt)("a",{parentName:"p",href:"/docs/recipes/linkStreams"},"here")," for more details about how to combine streams."),(0,r.kt)("h2",{id:"save"},"Save"),(0,r.kt)("p",null,"Saving data in the database works with the operator ",(0,r.kt)("inlineCode",{parentName:"p"},"SqlServerSave"),". For each row, this operator does the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tries the get an occurrence with the same pivot value"),(0,r.kt)("li",{parentName:"ul"},"If not found create a new row by excluding values not to save (if any). If found, update the retrieved row - in the same manner."),(0,r.kt)("li",{parentName:"ul"},"Save the updated or created row"),(0,r.kt)("li",{parentName:"ul"},"Get every value as it is in the database to update the current payload with it")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The payload to be saved must be a ",(0,r.kt)("strong",{parentName:"p"},"class")," that has a structure that must match the target table."))),(0,r.kt)("p",null,"Here is how to save a list of people that are identified by their ",(0,r.kt)("inlineCode",{parentName:"p"},"Email")," in a table that has a primary key ",(0,r.kt)("inlineCode",{parentName:"p"},"Id")," that is auto generated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'peopleStream\n    .SqlServerSave("upsert using Email as key and ignore the Id", o => o\n        .ToTable("dbo.Person")\n        .SeekOn(p => p.Email)\n        .DoNotSave(p => p.Id));\n')),(0,r.kt)("p",null,"The property ",(0,r.kt)("inlineCode",{parentName:"p"},"Id")," of the person will be updated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Id")," from the update or created row."),(0,r.kt)("p",null,"If the business key is on several field, and/or if there are several column that are computed at database level, the upsert must be done this way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'peopleStream\n    .SqlServerSave("upsert using Email as key and ignore the Id", o => o\n        .ToTable("dbo.Person")\n        .SeekOn(p => new { p.DateOfBirth, p.Number })\n        .DoNotSave(p => new { p.Id, p.Timestamp }));\n')),(0,r.kt)("p",null,"Of course, making a regular insert with no update is possible:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'traceStream\n    .SqlServerSave("insert in a trace table", o => o\n        .ToTable("dbo.Trace")\n        .DoNotSave(p => p.Id));\n')),(0,r.kt)("p",null,"If the class has the same name than the target table and that the target table is in the default schema (in 99% of cases: ",(0,r.kt)("inlineCode",{parentName:"p"},"dbo"),"), it is not necessary to mention the target table explicitly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'traceStream.SqlServerSave("insert in a trace table", o => o.DoNotSave(p => p.Id));\n')),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For the moment, saving with the SQL extension executes an ",(0,r.kt)("strong",{parentName:"p"},"upsert sql statement for each row")," behind the scenes. It doesn't proceed using bulk load with one single merge statement for a full bulk of rows. To have a bulkload, the extension using Entity Framework must be used instead."))),(0,r.kt)("h2",{id:"execute-a-sql-process-for-every-row"},"Execute a SQL process for every row"),(0,r.kt)("p",null,"Calling an arbitrary SQL statement or a stored procedure is made with the operator ",(0,r.kt)("inlineCode",{parentName:"p"},"ToSqlCommand"),". It is given a statement with parameters that must have their equivalent in properties of the payload of the stream."),(0,r.kt)("p",null,"Here, the goal is to change the reputation for the one who have 345 and 45 as a current reputation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'contextStream\n    .CrossApply("build criteria", i => new[] \n    {\n        new { Reputation = 345, NewReputation = 346 },\n        new { Reputation = 45, NewReputation = 201 }\n    })\n    .ToSqlCommand("update reputation", \n        "update p set Reputation = @NewReputation from dbo.Person as p where p.Reputation = @Reputation");\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ToSqlCommand")," always returns the input events as is. The following can be done for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'contextStream\n    .CrossApply("build criteria", i => new[] \n    {\n        new { Reputation = 345, NewReputation = 346 },\n        new { Reputation = 45, NewReputation = 201 }\n    })\n    .ToSqlCommand("update reputation", \n        "update p set Reputation = @NewReputation from dbo.Person as p where p.Reputation = @Reputation")\n    .ToSqlCommand("update reputation like before", \n        "update p set Reputation = @Reputation from dbo.Person as p where p.Reputation = @NewReputation");\n')))}c.isMDXComponent=!0}}]);