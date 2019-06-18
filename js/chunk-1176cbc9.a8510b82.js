(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1176cbc9"],{"06c8":function(e,t,a){"use strict";a.d(t,"a",function(){return f});var n=a("aede"),r=a("d225"),i=a("b0b4"),o=a("9530"),s=a.n(o);function c(){var e=Object(n["a"])(["\n      mutation ccreatePost($body: String!, $id: ID!) {\n        createPost(body: $body, threadId: $id) {\n          id\n        }\n      }\n    "]);return c=function(){return e},e}function l(){var e=Object(n["a"])(["\n      mutation createThread($title: String!, $id: ID!, $body: String!) {\n        createThread(title: $title, categoryId: $id, body: $body) {\n          id\n          title\n        }\n      }\n    "]);return l=function(){return e},e}function u(){var e=Object(n["a"])(["\n      mutation createCategory($title: String!) {\n        createCategory(title: $title) {\n          id\n          title\n        }\n      }\n    "]);return u=function(){return e},e}function g(){var e=Object(n["a"])(["\n      mutation createUser($name: String!, $username: String!, $email: String!, $password: String!) {\n        createUser(\n          name: $name,\n          username: $username,\n          email: $email,\n          password: $password\n        ) {\n          id\n          username\n          email\n        }\n      }\n    "]);return g=function(){return e},e}function d(){var e=Object(n["a"])(["\n      mutation authenticate($email: String!, $password: String!) {\n        authenticate(email: $email, password: $password)\n      }\n    "]);return d=function(){return e},e}var f=function(){function e(){Object(r["a"])(this,e)}return Object(i["a"])(e,[{key:"authenticate",value:function(){return s()(d())}},{key:"createUser",value:function(){return s()(g())}},{key:"createCategory",value:function(){return s()(u())}},{key:"createThread",value:function(){return s()(l())}},{key:"createPost",value:function(){return s()(c())}}]),e}()},2638:function(e,t,a){"use strict";function n(){return n=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},n.apply(this,arguments)}var r=["attrs","props","domProps"],i=["class","style","directives"],o=["on","nativeOn"],s=function(e){return e.reduce(function(e,t){for(var a in t)if(e[a])if(-1!==r.indexOf(a))e[a]=n({},e[a],t[a]);else if(-1!==i.indexOf(a)){var s=e[a]instanceof Array?e[a]:[e[a]],l=t[a]instanceof Array?t[a]:[t[a]];e[a]=s.concat(l)}else if(-1!==o.indexOf(a))for(var u in t[a])if(e[a][u]){var g=e[a][u]instanceof Array?e[a][u]:[e[a][u]],d=t[a][u]instanceof Array?t[a][u]:[t[a][u]];e[a][u]=g.concat(d)}else e[a][u]=t[a][u];else if("hook"==a)for(var f in t[a])e[a][f]=e[a][f]?c(e[a][f],t[a][f]):t[a][f];else e[a]=t[a];else e[a]=t[a];return e},{})},c=function(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}};e.exports=s},4971:function(e,t,a){"use strict";a.r(t);a("ac6a");var n=a("cebc"),r=a("d225"),i=a("b0b4"),o=a("308d"),s=a("6bb5"),c=a("4e2b"),l=a("9ab4"),u=a("60a3"),g=a("65d9"),d=a.n(g),f=a("dad9"),p=a("06c8"),h=a("4bb5"),v=a("2638"),y=a.n(v),b={functional:!0,render:function(e,t){var a=t.props,n=function(){""!==a.title?a.apollo.mutate({variables:{title:a.title},mutation:a.mutation}).then(function(e){e.data.createCategory&&a.sucessHandler(e)}).catch(function(e){e.graphQLErrors&&a.errorHandler(e)}):alert("Title is required")};return e("div",{class:"pure-form -categories"},[e("input",y()([{on:{input:function(e){e.target.composing||(a.title=e.target.value)}},class:"input pure-input-1",attrs:{id:"title",placeholder:"Title",type:"text"},domProps:{value:a.title}},{directives:[{name:"model",value:a.title,modifiers:{}}]}])),e("button",{class:"pure-button pure-button-primary",on:{click:function(){return n()}}},["Create Category"])])}},m=a("c07f"),P={functional:!0,render:function(e,t){var a=t.props,n=function(){for(var t=[],n=function(n){t.push(e("li",{key:n,on:{click:function(){return a.pageHandler(n)}}},[e("a",{class:n===a.active?"link page active":"link page"},[n])]))},r=1;r<=a.totalPages;r++)n(r);return t};return e("ul",{class:"st-pagination"},[0===a.page?e("li",[e("i",{class:"page fas fa-angle-left"})]):e("li",{on:{click:function(){return a.handlePrevPage()}}},[e("a",{class:"link page"},[e("i",{class:"fas fa-angle-left"})])]),n(),a.page===a.totalPages-1?e("li",[e("i",{class:"page fas fa-angle-right"})]):e("li",{on:{click:function(){return a.handleNextPage()}}},[e("a",{class:"link page"},[e("i",{class:"fas fa-angle-right"})])])])}},L={functional:!0,render:function(e,t){var a=t.props,n=t.data,r=t.children;return e("main",y()([{},n]),[r,a.data.getLogin&&e(b,{attrs:{getLogin:a.data.getLogin,apollo:a.methods.apollo,title:a.data.title,mutation:a.methods.mutation,sucessHandler:a.methods.sucessHandler,errorHandler:a.methods.errorHandler}}),e(m["a"],{attrs:{list:a.data.categories,routeHandler:a.methods.routeHandler}}),a.data.totalPages>0&&e(P,{attrs:{active:a.data.active,handlePrevPage:a.methods.prevPage,pageHandler:a.methods.goToPage,page:a.data.page,totalPages:a.data.totalPages,handleNextPage:a.methods.nextPage}})])}},S=new p["a"],k=new f["a"],T=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(o["a"])(this,Object(s["a"])(t).apply(this,arguments)),e.active=1,e.page=0,e.perPage=20,e.categories="",e.title="",e.newCategoryMutation=S.createCategory(),e}return Object(c["a"])(t,e),Object(i["a"])(t,[{key:"categorySuccess",value:function(e){e.data.createCategory&&(alert("Category created successfully!"),this.$apollo.queries.categories.refetch())}},{key:"categoryError",value:function(e){console.log(e)}},{key:"goToCategory",value:function(e){this.$router.push("/blog/categories/".concat(e))}},{key:"prevPage",value:function(){this.page=this.page-1,this.active=this.active-1}},{key:"goToPage",value:function(e){e!==this.active&&(this.page=e-1,this.active=e-1)}},{key:"nextPage",value:function(){this.page=this.page+1,this.active=this.active+1}},{key:"render",value:function(e){return this.setTitle("Categories"),this.setBack(!0),e(L,{class:"section",attrs:{data:Object(n["a"])({},this.$data,{categories:this.categories&&this.categories.entries&&this.categories.entries.length>0?this.categories.entries:[],getLogin:this.getLogin,totalPages:this.categories?this.categories.totalPages:0}),methods:{apollo:this.$apollo,mutation:this.newCategoryMutation,sucessHandler:this.categorySuccess,errorHandler:this.categoryError,prevPage:this.prevPage,goToPage:this.goToPage,nextPage:this.nextPage,routeHandler:this.goToCategory}}})}}]),t}(u["d"]);l["b"]([Object(h["a"])("getLogin")],T.prototype,"getLogin",void 0),l["b"]([Object(h["b"])("setTitle")],T.prototype,"setTitle",void 0),l["b"]([Object(h["b"])("setBack")],T.prototype,"setBack",void 0),T=l["b"]([d()({apollo:{categories:{query:k.categories,variables:function(){return{page:this.page,perPage:this.perPage}},error:function(e){console.log("We've got an error!",e)},fetchPolicy:"network-only"}},name:"Categories"})],T);t["default"]=T},ac6a:function(e,t,a){for(var n=a("cadf"),r=a("0d58"),i=a("2aba"),o=a("7726"),s=a("32e9"),c=a("84f2"),l=a("2b4c"),u=l("iterator"),g=l("toStringTag"),d=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=r(f),h=0;h<p.length;h++){var v,y=p[h],b=f[y],m=o[y],P=m&&m.prototype;if(P&&(P[u]||s(P,u,d),P[g]||s(P,g,y),c[y]=d,b))for(v in n)P[v]||i(P,v,n[v],!0)}}}]);
//# sourceMappingURL=chunk-1176cbc9.a8510b82.js.map