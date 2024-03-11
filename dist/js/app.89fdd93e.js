(function(){"use strict";var t={84:function(t,n,e){var r=e(328),s=e(760);const i={class:"Header"},a=(0,s.IL)('<a href="https://www.istu.edu/"><button class="logo"><img src="https://www.istu.edu/upload/iblock/f55/logo_1.png" class="logo"></button></a><div class="name"> Производственные партнеры <br> ИРНИТУ </div><div class="icons"><a href="https://t.me/ckirnitu"><button class="hat_butt"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1200px-Telegram_logo.svg.png" style="height:35px;width:35px;"></button></a><button class="hat_butt"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALBplMxySL51Y_dJZ5FTrLpa1rpD72FebJA&amp;usqp=CAU" style="height:35px;width:35px;margin-left:7px;"></button></div>',3),o=[a];function c(t,n){return(0,s.Wz)(),(0,s.An)("div",i,o)}var l=e(152);const u={},d=(0,l.c)(u,[["render",c]]);var p=d,v={__name:"App",setup(t){return(t,n)=>{const e=(0,s.E1)("RouterView");return(0,s.Wz)(),(0,s.An)(s.ae,null,[(0,s.K2)(p),(0,s.QD)("body",null,[(0,s.K2)(e)])],64)}}};const m=v;var f=m,g=e(216),h=e(752),b=e(568),y=e(774),Q=e(464);const D=(0,Q.O6)("instituteStore",{state:()=>({Insts:[]}),actions:{async getInstsFromServer(){y.c.get("/api/institutes/").then((t=>{this.Insts=t.data}))}}}),_=(0,Q.O6)("practiceStore",{state:()=>({practices:[],inst_id:0}),actions:{async getPracticeFromServer(){y.c.get("api/partners/practice",{params:{institute:this.inst_id}}).then((t=>{this.practices=t.data})).catch((t=>{this.practices=[]}))},async setInstId(t){this.inst_id=t}}}),w=["onClick"],A={class:"textInst"},k={style:{"margin-left":"10px","margin-bottom":"15px"}},W={class:"specText"},I=(0,s.QD)("strong",null,"Специальности:",-1),x={class:"specText"},z=(0,s.QD)("strong",null,"Должности:",-1);var O={__name:"InstituteTest",setup(t){const n=(0,b.IL)(D()),e=(0,b.IL)(_());return(0,s.u2)((()=>{n.value.getInstsFromServer()})),(t,r)=>{const i=(0,s.E1)("router-link");return(0,s.Wz)(),(0,s.An)("div",null,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(n.value.Insts,(t=>((0,s.Wz)(),(0,s.An)("div",null,[(0,s.QD)("button",{href:"#",class:"button",onClick:()=>{e.value.setInstId(t.id),e.value.getPracticeFromServer()}},[(0,s.K2)(i,{to:{name:"partner"}},{default:(0,s.Ql)((()=>[(0,s.QD)("div",{class:"Institutes",style:(0,h.MN)({BackgroundImage:t.image})},[(0,s.QD)("div",A,[(0,s.QD)("div",k,(0,h.WA)(t.name),1),(0,s.QD)("div",W,[I,(0,s.mY)(" "+(0,h.WA)(n.value.Insts[0].specialities.map((t=>t.name)).join(" ")),1)]),(0,s.QD)("div",x,[z,(0,s.mY)((0,h.WA)(t.works),1)])])],4)])),_:2},1024)],8,w)])))),256))])}}};const S=O;var j=S;const T={class:"container"},K={class:"container-fluid"},L={class:"row"},P={class:"col-sm p-3 min-vh-100"};var F={__name:"InstituteView",setup(t){return(t,n)=>((0,s.Wz)(),(0,s.An)("div",T,[(0,s.QD)("div",null,[(0,s.QD)("div",K,[(0,s.QD)("div",L,[(0,s.QD)("div",P,[(0,s.K2)(j)])])])])]))}};const C=F;var M=C;const E={key:0,style:{"background-color":"crimson"}},V=(0,s.QD)("h2",null,"Ошибка - не указан институт, перейдите на главную страницу и нажмите на нужный институт",-1),Y=[V],N={class:"card"},q={class:"card-header"},B={class:"card-title"},H=["src"],J={class:"card-body"},R={class:"card-text"},G={class:"list-group list-group-flush"},U={class:"list-group-item"},Z={key:0},X={class:"bi bi-globe"},$=["href"],tt={key:1},nt={class:"bi bi-file-earmark-arrow-down-fill"};var et={__name:"PracticeList",setup(t){const n=(0,b.IL)(_());return(0,s._O)((()=>{})),(t,e)=>((0,s.Wz)(),(0,s.An)("div",null,[0===n.value.practices.length?((0,s.Wz)(),(0,s.An)("div",E,Y)):(0,s.g1)("",!0),((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(n.value.practices,(t=>((0,s.Wz)(),(0,s.An)("div",null,[(0,s.QD)("div",N,[(0,s.QD)("div",q,[(0,s.QD)("h5",B,(0,h.WA)(t.partner.name),1)]),(0,s.QD)("img",{src:t.partner.image,class:"card-img-top",alt:"тут должна быть картинка",style:{width:"15rem"}},null,8,H),(0,s.QD)("div",J,[(0,s.QD)("p",R,(0,h.WA)(t.partner.agreement),1)]),(0,s.QD)("ul",G,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(t.doc_links,(t=>((0,s.Wz)(),(0,s.An)("li",U,["Веб-сайт"===t.type?((0,s.Wz)(),(0,s.An)("div",Z,[(0,s.QD)("i",X,[(0,s.QD)("a",{href:t.url},(0,h.WA)(" "+t.type),9,$)])])):((0,s.Wz)(),(0,s.An)("div",tt,[(0,s.QD)("i",nt,(0,h.WA)(t.type),1)]))])))),256))])])])))),256))]))}};const rt=et;var st=rt,it=e.p+"img/hat.a796b6e1.jpeg";const at={class:"card-body"},ot=(0,s.QD)("h2",{style:{width:"fit-content","background-color":"skyblue","border-radius":"3px",color:""}}," Промышленные партнеры ",-1),ct={href:"#",class:"btn btn-light"};var lt={__name:"HatInInstitute",setup(t){return(t,n)=>{const e=(0,s.E1)("router-link");return(0,s.Wz)(),(0,s.An)("div",{class:"card",style:(0,h.MN)({backgroundImage:"url("+(0,b.KV)(it)+")"})},[(0,s.QD)("div",at,[ot,(0,s.QD)("div",null,[(0,s.QD)("button",ct,[(0,s.K2)(e,{to:{name:"home"}},{default:(0,s.Ql)((()=>[(0,s.mY)("На главную ")])),_:1})])])])],4)}}};const ut=lt;var dt=ut;const pt={class:"container-xl"},vt={class:"container"},mt={class:"container-fluid"},ft={class:"col-sm p-3 min-vh-100"};var gt={__name:"PracticeView",setup(t){return(t,n)=>((0,s.Wz)(),(0,s.An)("div",null,[(0,s.QD)("div",pt,[(0,s.K2)(dt)]),(0,s.QD)("div",vt,[(0,s.QD)("div",mt,[(0,s.QD)("div",ft,[(0,s.K2)(st)])])])]))}};const ht=gt;var bt=ht;const yt=[{path:"/",name:"home",component:M},{path:"/partner",name:"partner",component:bt}],Qt=(0,g.gv)({history:(0,g.oz)("/"),routes:yt});var Dt=Qt;e(224),e(20);(0,r.W0)(f).use(Dt).use((0,Q.Kw)()).mount("#app")}},n={};function e(r){var s=n[r];if(void 0!==s)return s.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,r,s,i){if(!r){var a=1/0;for(u=0;u<t.length;u++){r=t[u][0],s=t[u][1],i=t[u][2];for(var o=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(e.O).every((function(t){return e.O[t](r[c])}))?r.splice(c--,1):(o=!1,i<a&&(a=i));if(o){t.splice(u--,1);var l=s();void 0!==l&&(n=l)}}return n}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,s,i]}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={524:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var s,i,a=r[0],o=r[1],c=r[2],l=0;if(a.some((function(n){return 0!==t[n]}))){for(s in o)e.o(o,s)&&(e.m[s]=o[s]);if(c)var u=c(e)}for(n&&n(r);l<a.length;l++)i=a[l],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(u)},r=self["webpackChunkouter_site_frint"]=self["webpackChunkouter_site_frint"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[999],(function(){return e(84)}));r=e.O(r)})();
//# sourceMappingURL=app.89fdd93e.js.map