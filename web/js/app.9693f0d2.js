(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],d=0,f=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2e78":function(t,e,a){},"51a0":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("7ef5"),a("6255"),a("5360"),a("19dc");var n=a("0261"),i=a("08c1"),s=a("7632"),o=a.n(s),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"all"},[a("Nav"),a("News"),a("Footer")],1)])},c=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav",attrs:{id:"nav"}},[a("div",{staticClass:"nav-left"},[t._m(0),a("a",{staticClass:"nav-link",attrs:{target:"_blank",href:"https://www.cnblogs.com/gengwenhao"}},[t._v("个人博客")]),a("div",{staticClass:"input-group"},[a("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"},on:{click:t.onSearch}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],attrs:{type:"text",placeholder:"search"},domProps:{value:t.searchText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSearch(e)},input:function(e){e.target.composing||(t.searchText=e.target.value)}}})])]),a("div",{staticClass:"nav-right"},[t.isLogin?a("div",{staticClass:"user-info animated fadeIn"},[a("a",{staticClass:"nav-link",on:{mouseenter:t.onUserInfoHover}},[t._v(" 用户信息 "),a("i",{staticClass:"fa fa-info-circle",staticStyle:{"margin-left":"4px"},attrs:{"aria-hidden":"true"}})]),a("a",{staticClass:"nav-link red",on:{click:t.onLogoutBtnClick}},[t._v(" 注销 "+t._s(t.username)+" "),a("i",{staticClass:"fa fa-sign-out",staticStyle:{"margin-left":"4px"},attrs:{"aria-hidden":"true"}})])]):t._e(),t.isShowUserInfo?a("div",{staticClass:"userinfo-detail",on:{mouseleave:function(e){t.isShowUserInfo=!1}}},[a("div",{staticClass:"ui header dividing"},[t._v(" 用户收藏数 "+t._s(t.favCount)),a("i",{staticClass:"fa fa-spin fa-refresh",staticStyle:{"margin-left":"4px"},attrs:{"aria-hidden":"true"}})]),a("span",[t._v("最近收藏：")]),a("span",{staticClass:"ui button inverted red pull-right",on:{click:t.downFav}},[t._v("下载全部收藏"),a("i",{staticClass:"fa fa-download",staticStyle:{"margin-left":"4px"},attrs:{"aria-hidden":"true"}})]),a("ul",t._l(t.favList,(function(e){return a("li",{key:e.id},[a("a",{attrs:{target:"_blank",href:e.url}},[t._v(t._s(e.title))])])})),0)]):t._e(),t.isLogin?t._e():a("div",{staticClass:"user-info"},[a("a",{staticClass:"nav-link",on:{click:t.onLoginBtnClick}},[t._v(" 登录用户 "),a("i",{staticClass:"fa fa-sign-in",staticStyle:{"margin-left":"4px"},attrs:{"aria-hidden":"true"}})]),t.isShowLoginPanel?a("login-panel",{staticClass:"animated fadeIn",on:{onRegBtnClick:t.onRegBtnClick,onLoginPanelBGClick:t.onLoginPanelBGClick}}):t._e(),t.isShowRegPanel?a("reg-panel",{staticClass:"animated fadeIn",on:{onRegPanelBGClick:t.onRegPanelBGClick}}):t._e()],1)])])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"nav-link",attrs:{target:"_blank",href:"//github.com/gengwenhao"}},[a("i",{staticClass:"fa fa-github-alt",staticStyle:{"margin-right":"4px"},attrs:{"aria-hidden":"true"}}),t._v(" GitHub ")])}],d=(a("6962"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mask",attrs:{id:"mask"},on:{click:function(e){return e.stopPropagation(),t.onLoginPanelBGClick(e)}}},[a("notifications"),a("div",{attrs:{id:"login-panel"}},[a("div",{staticClass:"ui middle aligned center aligned grid"},[a("div",{staticClass:"column"},[t._m(0),a("form",{staticClass:"ui large form"},[a("div",{staticClass:"ui stacked segment"},[a("div",{staticClass:"field"},[a("div",{staticClass:"ui left icon input"},[a("i",{staticClass:"user icon"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("div",{staticClass:"ui left icon input"},[a("i",{staticClass:"lock icon"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"密码"},domProps:{value:t.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onLoginBtnClick(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),a("div",{staticClass:"ui fluid large teal button",attrs:{id:"login-button"},on:{click:t.onLoginBtnClick}},[t._v("登录")])])]),a("div",{staticClass:"ui message"},[t._v(" 新用户？ "),a("a",{on:{click:function(e){return e.preventDefault(),t.onRegBtnClick(e)}}},[t._v("注册")])])])])])],1)}),f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"ui inverted grey image header"},[a("div",{staticClass:"content"},[t._v(" 登录到账号 ")])])}],p=(a("fff0"),a("c887"),a("c1f0")),h=a.n(p),v="https://api.jisuapi.com",m="7850b0e5d08266f1";h.a.jsonp=function(t){if(t)return new Promise((function(e){window.jsonCallBack=function(t){e(t)};var a=document.createElement("script");a.type="text/javascript",a.src="".concat(t,"&callback=jsonCallBack"),document.getElementsByTagName("head")[0].appendChild(a),setTimeout((function(){document.getElementsByTagName("head")[0].removeChild(a)}),500)}));window.console.error("Axios.JSONP 至少需要一个url参数!")};var g=function(){return h.a.jsonp("".concat(v,"/news/channel?appkey=").concat(m))},C=function(t){return h.a.jsonp("".concat(v,"/news/get?channel=").concat(t,"&start=0&num=10&appkey=").concat(m))},w=function(t){return h.a.jsonp("".concat(v,"/news/search?keyword=").concat(t,"&appkey=").concat(m))},k=function(t,e){var a={username:t,password:e};return h.a.post("/login.do",a)},_=function(t,e){var a={username:t,password:e};return h.a.post("/register.do",a)},y=function(){return h.a.get("/logout.do")},b=function(){return h.a.get("/check_login.do")},P=function(t,e){var a={title:t,url:e};return h.a.get("/add_favurl.do",{params:a})},x=function(){return h.a.get("/get_fav.do")},L=function(t){return h.a.get("/check_username.do",{params:{username:t}})},R={name:"LoginPanel",data:function(){return{username:"",password:""}},methods:{onLoginBtnClick:function(){var t=this;""!==this.username&&""!==this.password?k(this.username,this.password).then((function(e){1===e.data[0].status?(t.$store.commit("login"),t.isShowLoginPanel=!1):(t.username="",t.password="",t.$notify({message:"登录失败, 请检查用户名或密码!"}))})).catch((function(){t.username="",t.password="",t.$notify({message:"登录失败, 请检查用户名或密码!"})})):this.$notify({message:"请检查输入"})},onRegBtnClick:function(){this.$emit("onRegBtnClick")},onLoginPanelBGClick:function(t){t.target.classList.contains("mask")&&this.$emit("onLoginPanelBGClick")}}},S=R,B=(a("7822"),a("5511")),$=Object(B["a"])(S,d,f,!1,null,"7ff666b0",null),j=$.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mask",attrs:{id:"mask"},on:{click:function(e){return e.stopPropagation(),t.onRegPanelBGClick(e)}}},[a("notifications"),a("div",{attrs:{id:"login-panel"}},[a("div",{staticClass:"ui middle aligned center aligned grid"},[a("div",{staticClass:"column"},[t._m(0),a("form",{staticClass:"ui large form"},[a("div",{staticClass:"ui stacked segment"},[a("div",{staticClass:"field"},[a("div",{staticClass:"ui left icon input"},[a("i",{staticClass:"user icon"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],ref:"inputusername",attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.username},on:{blur:t.onCheckUsername,input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("div",{staticClass:"ui left icon input"},[a("i",{staticClass:"lock icon"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],ref:"inputpassword",attrs:{type:"password",name:"password",placeholder:"密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("div",{staticClass:"ui left icon input"},[a("i",{staticClass:"lock icon"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordRepeat,expression:"passwordRepeat"}],attrs:{type:"password",name:"password",placeholder:"密码确认"},domProps:{value:t.passwordRepeat},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onRegBtnClick(e)},input:function(e){e.target.composing||(t.passwordRepeat=e.target.value)}}})])]),a("div",{staticClass:"ui fluid large teal button",attrs:{id:"login-button"},on:{click:t.onRegBtnClick}},[t._v("注册")])])])])])])],1)},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"ui inverted grey image header"},[a("div",{staticClass:"content"},[t._v(" 注册新账号 ")])])}],N={name:"RegPanel",data:function(){return{username:"",password:"",passwordRepeat:""}},methods:{onCheckUsername:function(){var t=this;L(this.username).then((function(e){e.data.status&&(t.$refs.inputusername.focus(),t.$notify({message:e.data.result}))}))},onRegPanelBGClick:function(t){t.target.classList.contains("mask")&&this.$emit("onRegPanelBGClick")},onRegBtnClick:function(){var t=this;this.passwordRepeat!==this.password?(this.$notify({message:"两次输入的密码不一样哦!"}),this.$refs.inputpassword.focus(),this.passwordRepeat=""):""===this.passwordRepeat||""===this.password?this.$notify({message:"输入不允许为空!"}):_(this.username,this.passwordRepeat).then((function(e){e.status&&(t.$notify({message:"resp.result"}),t.$emit("onRegPanelBGClick"))}))}}},E=N,I=(a("cda1"),Object(B["a"])(E,O,T,!1,null,"23baa5a7",null)),G=I.exports,U=a("ecc0"),D=a.n(U),F={name:"Nav",components:{RegPanel:G,LoginPanel:j},computed:{isLogin:function(){return this.$store.state.isLogin},favCount:function(){return this.$store.state.favList.length},favList:function(){return this.$store.state.favList.slice(0,15)}},data:function(){return{searchText:"",username:"",password:"",isShowLoginPanel:!1,isShowRegPanel:!1,isShowUserInfo:!1}},methods:{onUserInfoHover:function(){var t=this;this.isShowUserInfo=!0,x().then((function(e){t.$store.commit("updateFavList",e.data)}))},downFav:function(){var t=JSON.stringify(this.$store.state.favList),e=new Blob([t],{type:"text/plain;charset=utf-8"});D.a.saveAs(e,"favlist.json")},onRegBtnClick:function(){this.isShowLoginPanel=!1,this.isShowRegPanel=!0},onLogoutBtnClick:function(){var t=this;y().then((function(e){1===e.data[0].status&&t.$store.commit("logout")}))},onSearch:function(){var t=this;w(this.searchText).then((function(e){e.result?location.href="/?search=".concat(t.searchText):alert("未找到相关新闻")}))},onLoginBtnClick:function(){this.isShowRegPanel=!1,this.isShowLoginPanel=!0},onLoginPanelBGClick:function(){this.isShowLoginPanel=!1,this.username="",this.password=""},onRegPanelBGClick:function(){this.isShowRegPanel=!1,this.username="",this.password=""}},created:function(){var t=this;b().then((function(e){t.username=e.data[0].user.username,t.$store.commit("login")})).catch((function(){t.$store.commit("logout")})),x().then((function(e){t.$store.commit("updateFavList",e.data)}))}},H=F,M=(a("aaac"),Object(B["a"])(H,l,u,!1,null,"6815ce6e",null)),J=M.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center w",attrs:{id:"news"}},[n("notifications"),n("div",{staticClass:"c-left"},[n("img",{staticClass:"logo-img",attrs:{src:a("cf05"),alt:""},on:{click:t.goBackHome,mousedown:function(t){t.preventDefault()}}}),n("div",{staticClass:"text"},t._l(t.channel,(function(e,a){return n("a",{key:e.id,class:{active:t.activeIndex==a},attrs:{href:"#"},on:{click:function(e){return t.updateDetail(a)}}},[t._v(t._s(e))])})),0)]),n("div",{staticClass:"c-center"},[n("div",{staticClass:"detail"},[t.isSearchResult?n("h1",[t._v("搜索结果..")]):t._e(),t._l(t.detail,(function(e,a){return n("div",{key:e.id,staticClass:"item"},[n("div",{staticClass:"import-all"},[n("img",{attrs:{src:e.pic,alt:""}}),n("div",{staticClass:"i-one-text"},[n("a",{attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),t.showDetail(a)}}},[t._v(t._s(e.title))]),n("div",{staticClass:"i-one-logo"},[n("a",{attrs:{href:"#"}},[t._v(t._s(e.src)+" ⋅"+t._s(e.time))])])])])])}))],2)]),t.isShowDetail?n("div",{staticClass:"c-right"},[n("div",{staticClass:"toolbar"},[n("span",{staticClass:"add_favurl",on:{click:t.addFavURLBtnClick}},[t._v(" 添加收藏 "),n("i",{staticClass:"fa fa-heart-o",staticStyle:{"margin-left":"2px"},attrs:{"aria-hidden":"true"}})])]),n("i",{staticClass:"fa fa-times detial-close",attrs:{"aria-hidden":"true"},on:{click:function(e){t.isShowDetail=!1}}}),t.isShowDetail?n("div",{staticClass:"detail animated fadeIn news-detail ui piled segment",domProps:{innerHTML:t._s(t.detailHTML)}}):t._e()]):t._e()],1)},q=[],z=(a("104d"),a("9c58"),a("30ce"),a("57dd"),a("dabc"),{name:"News",methods:{updateDetail:function(t){var e=this;this.activeIndex=t,C(this.channel[t]).then((function(t){e.detail=t.result.list}))},showDetail:function(t){this.detailTitle=this.detail[t].title.trim(),this.detailURL=this.detail[t].url.trim(),this.detailHTML=this.detail[t].content,this.isShowDetail=!0},addFavURLBtnClick:function(){var t=this;P(this.detailTitle,this.detailURL).then((function(e){t.$notify({message:e.data.result})}))},goBackHome:function(){location.href="/"}},data:function(){return{channel:[],detail:{},activeIndex:0,isShowDetail:!1,detailHTML:"",detailURL:"",detailTitle:"",isSearchResult:!1}},created:function(){for(var t=this,e=location.search.replace("?","").split("&"),a={},n=0;n<e.length;n++){var i=e[n].split("=");i&&i.length>1&&(a[i[0]]=i[1])}"search"in a?(this.searchText=decodeURI(a["search"]),w(this.searchText).then((function(e){t.detail=e.result.list,t.channel=[]})),this.isSearchResult=!0):g().then((function(e){t.channel=e.result,t.updateDetail(0)}))}}),K=z,Q=(a("fd71"),Object(B["a"])(K,A,q,!1,null,"2ccb8aa8",null)),V=Q.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer",attrs:{id:"footer"}},[a("div",{staticClass:"content"},[a("h5",{staticClass:"words"},[t._v(" News · 版权所有："),a("span",{on:{click:t.toPage}},[t._v("gengwenhao.cn")]),t._v(" · 辽ICP备19006965号-1 ")])])])},X=[],Y={name:"Footer",methods:{toPage:function(){location.href="//www.gengwenhao.cn"}}},Z=Y,tt=(a("686f"),Object(B["a"])(Z,W,X,!1,null,"1249a946",null)),et=tt.exports,at={name:"app",components:{Footer:et,News:V,Nav:J}},nt=at,it=Object(B["a"])(nt,r,c,!1,null,null,null),st=it.exports;a("b0e7");n["default"].config.productionTip=!1,n["default"].use(i["a"]),n["default"].use(o.a,{type:"primary",timeout:2e3});var ot=new i["a"].Store({state:{isLogin:!1,favList:[]},mutations:{login:function(t){t.isLogin=!0},logout:function(t){t.isLogin=!1},updateFavList:function(t,e){t.favList=e}}});new n["default"]({render:function(t){return t(st)},store:ot}).$mount("#app")},"686f":function(t,e,a){"use strict";var n=a("e079"),i=a.n(n);i.a},7822:function(t,e,a){"use strict";var n=a("b8f6"),i=a.n(n);i.a},a83b:function(t,e,a){},aaac:function(t,e,a){"use strict";var n=a("a83b"),i=a.n(n);i.a},b8f6:function(t,e,a){},cda1:function(t,e,a){"use strict";var n=a("51a0"),i=a.n(n);i.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.838f194e.png"},e079:function(t,e,a){},fd71:function(t,e,a){"use strict";var n=a("2e78"),i=a.n(n);i.a}});
//# sourceMappingURL=app.9693f0d2.js.map