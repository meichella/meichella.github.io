(function(e){function t(t){for(var r,n,s=t[0],c=t[1],l=t[2],d=0,u=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,n=1;n<a.length;n++){var s=a[n];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"12f83edf"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={about:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"0a539726"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===o))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[e],f.parentNode.removeChild(f),a(i)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){n[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,a){r=o[e]=[t,a]}));t.push(r[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(f);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",u.name="ChunkLoadError",u.type=r,u.request=n,a[1](u)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var f=d;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:"",color:"primary"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{router:"",to:"/"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-home")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Halaman 1")])],1)],1),a("v-list-item",{attrs:{router:"",to:"/about"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-pencil")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Halaman 2")])],1)],1)],1)],1),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",[e._v("Application")])],1),a("v-content",[a("router-view")],1)],1)},o=[],i={data:function(){return{drawer:null}}},s=i,c=a("2877"),l=a("6544"),d=a.n(l),u=a("7496"),f=a("40dc"),m=a("5bc1"),v=a("a75b"),p=a("132d"),b=a("8860"),h=a("da13"),g=a("1800"),I=a("5d23"),x=a("f774"),w=a("2a7f"),y=Object(c["a"])(s,n,o,!1,null,null,null),_=y.exports;d()(y,{VApp:u["a"],VAppBar:f["a"],VAppBarNavIcon:m["a"],VContent:v["a"],VIcon:p["a"],VList:b["a"],VListItem:h["a"],VListItemAction:g["a"],VListItemContent:I["a"],VListItemTitle:I["b"],VNavigationDrawer:x["a"],VToolbarTitle:w["a"]});var k=a("9483");Object(k["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var C=a("f309");r["a"].use(C["a"]);var V=new C["a"]({}),A=a("0ff2"),j=(a("d3b7"),a("8c4f")),O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},T=[],E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},r),[e._v("buat makanan")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Dessert name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Calories"},model:{value:e.editedItem.calories,callback:function(t){e.$set(e.editedItem,"calories",t)},expression:"editedItem.calories"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Fat (g)"},model:{value:e.editedItem.fat,callback:function(t){e.$set(e.editedItem,"fat",t)},expression:"editedItem.fat"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Carbs (g)"},model:{value:e.editedItem.carbs,callback:function(t){e.$set(e.editedItem,"carbs",t)},expression:"editedItem.carbs"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Protein (g)"},model:{value:e.editedItem.protein,callback:function(t){e.$set(e.editedItem,"protein",t)},expression:"editedItem.protein"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.close()}}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.save()}}},[e._v("Save")])],1)],1)],1)],1)],[a("v-container",[a("v-flex",[a("v-row",e._l(e.desserts,(function(t){return a("v-col",{key:t.id,attrs:{cols:"4"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[a("v-card-text",[a("p",{staticClass:"display-1 text--primary"},[e._v(" "+e._s(t.name)+" ")]),a("p",[e._v(" calories : "+e._s(t.calories)+" ")]),a("p",[e._v(" fat : "+e._s(t.fat)+" ")]),a("p",[e._v(" carbs : "+e._s(t.carbs)+" ")]),a("p",[e._v(" protein : "+e._s(t.protein)+" ")])]),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"deep-purple accent-4"},on:{click:function(a){return e.editItem(t)}}},[e._v(" Edit ")]),a("v-btn",{attrs:{text:"",color:"deep-purple accent-4"},on:{click:function(a){return e.deleteItem(t)}}},[e._v(" Delete ")])],1)],1)],1)})),1)],1)],1)]],2)},P=[],S=(a("b0c0"),a("dc59")),L={data:function(){return{cek:-1,search:"",dialog:!1,headers:[{text:"Dessert (100g serving)",align:"left",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Actions",value:"action",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{name:"",calories:0,fat:0,carbs:0,protein:0},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}},firebase:{desserts:S["a"]},computed:{formTitle:function(){return-1===this.cek?"New Item":"Edit Item"}},watch:{dialog:function(e){e||this.close()}},methods:{close:function(){this.dialog=!1},save:function(){this.cek>-1?(S["a"].child(this.editedIndex).set({name:this.editedItem.name,calories:this.editedItem.calories,fat:this.editedItem.fat,carbs:this.editedItem.carbs,protein:this.editedItem.protein}),this.clear()):(S["a"].push({name:this.editedItem.name,calories:this.editedItem.calories,fat:this.editedItem.fat,carbs:this.editedItem.carbs,protein:this.editedItem.protein}),this.clear()),this.close()},editItem:function(e){this.editedIndex=e[".key"],this.cek=0,this.editedItem=Object.assign({},e),this.dialog=!0},clear:function(){this.editedItem={},this.editedItem.name="",this.editedItem.calories=0,this.editedItem.fat=0,this.editedItem.carbs=0,this.editedItem.protein=0,this.cek=-1},deleteItem:function(e){confirm("Are you sure you want to delete this item?")&&S["a"].child(e[".key"]).remove()}}},N=L,$=a("8336"),D=a("b0af"),B=a("99d9"),F=a("62ad"),H=a("a523"),M=a("169a"),q=a("ce7e"),W=a("0e8f"),J=a("0fd9"),R=a("2fa4"),U=a("8654"),z=a("71d9"),K=Object(c["a"])(N,E,P,!1,null,null,null),Y=K.exports;d()(K,{VBtn:$["a"],VCard:D["a"],VCardActions:B["a"],VCardText:B["b"],VCardTitle:B["c"],VCol:F["a"],VContainer:H["a"],VDialog:M["a"],VDivider:q["a"],VFlex:W["a"],VRow:J["a"],VSpacer:R["a"],VTextField:U["a"],VToolbar:z["a"]});var G={name:"home",components:{HelloWorld:Y}},Q=G,X=Object(c["a"])(Q,O,T,!1,null,null,null),Z=X.exports;r["a"].use(j["a"]);var ee=[{path:"/",name:"home",component:Z},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],te=new j["a"]({mode:"history",base:"/",routes:ee}),ae=te;r["a"].use(A["a"]),r["a"].config.productionTip=!1,new r["a"]({router:ae,vuetify:V,render:function(e){return e(_)}}).$mount("#app")},dc59:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));var r=a("59ca"),n=a.n(r),o=(a("66ce"),n.a.initializeApp({databaseURL:"https://vueandfirebase-ef4ae.firebaseio.com"}).database()),i=o.ref("desserts"),s=o.ref("drinks")}});
//# sourceMappingURL=app.c3aba567.js.map