(function(){"use strict";var t={5287:function(t,o,e){var n=e(9242),s=e(3396),a=e(7139);const l={id:"app"},r={class:"navbar bg-light mb-0 p-0"},i={class:"container-fluid d-flex flex-column mb-0 align-items-start"},c=(0,s._)("a",{href:"#",class:"navbar-brand mb-0 pb-0 h1"},"Composite Solution Próbafeladat",-1),d={class:"navbar p-0",id:"navbarSupportedContent"},u={class:"navbar-nav me-auto mb-0 mb-lg-0 d-flex flex-row"},p={class:"nav-item p-2"},h={class:"nav-item p-2"};function g(t,o,e,n,g,m){const v=(0,s.up)("router-link"),f=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("nav",r,[(0,s._)("div",i,[c,(0,s._)("div",d,[(0,s._)("ul",u,[(0,s._)("li",p,[(0,s.Wm)(v,{class:(0,a.C_)(["nav-link",{active:0===g.activeIndex}]),to:"/",onClick:o[0]||(o[0]=t=>m.setActive(0))},{default:(0,s.w5)((()=>[(0,s.Uk)(" ToDo ")])),_:1},8,["class"])]),(0,s._)("li",h,[(0,s.Wm)(v,{class:(0,a.C_)(["nav-link",{active:1===g.activeIndex}]),to:"/kepgaleria",onClick:o[1]||(o[1]=t=>m.setActive(1))},{default:(0,s.w5)((()=>[(0,s.Uk)("Képgaléria")])),_:1},8,["class"])])])])])]),(0,s.Wm)(f)])}var m={name:"App",data(){return{activeIndex:0}},methods:{setActive(t){this.activeIndex=t}}},v=e(89);const f=(0,v.Z)(m,[["render",g]]);var b=f,k=(e(3455),e(2483));const w={class:"container"},y={key:0,class:"text-center my-4"},_={key:3,class:"text-center"};function T(t,o,e,n,a,l){const r=(0,s.up)("todo-form"),i=(0,s.up)("todo-list");return(0,s.wg)(),(0,s.iD)("div",w,[l.uncheckedTodos.length>0||l.checkedTodos.length>0?((0,s.wg)(),(0,s.iD)("h1",y,"To Do List")):(0,s.kq)("",!0),(0,s.Wm)(r,{onAdd:l.addTodo},null,8,["onAdd"]),l.uncheckedTodos.length>0?((0,s.wg)(),(0,s.j4)(i,{key:1,title:"Unchecked",todos:l.uncheckedTodos,onDelete:l.deleteTodo,onToggle:l.toggleTodo},null,8,["todos","onDelete","onToggle"])):(0,s.kq)("",!0),l.checkedTodos.length>0?((0,s.wg)(),(0,s.j4)(i,{key:2,title:"Checked",todos:l.checkedTodos,onDelete:l.deleteTodo,onToggle:l.toggleTodo},null,8,["todos","onDelete","onToggle"])):(0,s.kq)("",!0),0===l.uncheckedTodos.length&&0===l.checkedTodos.length?((0,s.wg)(),(0,s.iD)("p",_,"A ToDo lista üres")):(0,s.kq)("",!0)])}const x=(0,s._)("button",{class:"btn btn-primary",type:"submit"},"Új elem",-1);function D(t,o,e,a,l,r){return(0,s.wg)(),(0,s.iD)("form",{class:"input-group mb-3",onSubmit:o[1]||(o[1]=(0,n.iM)(((...t)=>r.submitTodo&&r.submitTodo(...t)),["prevent"]))},[(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"Enter a task","onUpdate:modelValue":o[0]||(o[0]=t=>l.todo=t)},null,512),[[n.nr,l.todo]]),x],32)}var C={name:"TodoForm",data(){return{todo:""}},methods:{submitTodo(){this.todo&&(this.$emit("add",{text:this.todo,done:!1}),this.todo="")}}};const O=(0,v.Z)(C,[["render",D]]);var j=O;const A={key:0,class:"text-center my-2"},E={key:1,class:"list-group"},q=["checked","onChange"],I=["onClick"],K={key:2,class:"text-center"};function Z(t,o,e,n,l,r){return(0,s.wg)(),(0,s.iD)("div",null,[e.todos.length>0?((0,s.wg)(),(0,s.iD)("h2",A,(0,a.zw)(e.title),1)):(0,s.kq)("",!0),e.todos.length?((0,s.wg)(),(0,s.iD)("ul",E,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.todos,((t,o)=>((0,s.wg)(),(0,s.iD)("li",{key:t.text,class:"list-group-item"},[(0,s._)("input",{type:"checkbox",class:"form-check-input me-2",checked:t.done,onChange:o=>r.toggleTodo(t)},null,40,q),(0,s._)("span",{class:(0,a.C_)({"text-decoration-line-through":t.done})},(0,a.zw)(t.text),3),(0,s._)("button",{class:"btn btn-transparent-primary btn-sm float-end",onClick:o=>r.deleteTodo(t)}," Törlés ",8,I)])))),128))])):((0,s.wg)(),(0,s.iD)("p",K,"A ToDo lista üres"))])}var M={name:"TodoList",props:{title:String,todos:Array},methods:{deleteTodo(t){this.$emit("delete",t)},toggleTodo(t){this.$emit("toggle",t)}}};const P=(0,v.Z)(M,[["render",Z]]);var U=P,W={name:"ToDo",components:{TodoForm:j,TodoList:U},data(){return{todos:[]}},computed:{checkedTodos(){return this.todos.filter((t=>t.done))},uncheckedTodos(){return this.todos.filter((t=>!t.done))}},methods:{addTodo(t){this.todos.unshift(t)},deleteTodo(t){this.todos.splice(this.todos.indexOf(t),1)},toggleTodo(t){this.todos[this.todos.indexOf(t)].done=!this.todos[this.todos.indexOf(t)].done}}};const $=(0,v.Z)(W,[["render",T]]);var S=$;const F=t=>((0,s.dD)("data-v-f28a5d0c"),t=t(),(0,s.Cn)(),t),H={class:"container"},L=F((()=>(0,s._)("h1",{class:"text-center my-4"}," Képgaléria ",-1))),Y={class:"row row-cols-3"},z={class:"card text-bg-dark border border-1"},R={class:"card-body p-1"},N=["src","alt"];function V(t,o,e,n,a,l){const r=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",H,[L,(0,s._)("div",Y,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.photos,(t=>((0,s.wg)(),(0,s.iD)("div",{id:"card-elements",class:"col",key:t.id},[(0,s.Wm)(r,{to:"/kepgaleria/"+t.id},{default:(0,s.w5)((()=>[(0,s._)("div",z,[(0,s._)("div",R,[(0,s._)("img",{src:t.thumbnailUrl,class:"card-img-top m-0",alt:t.title},null,8,N)])])])),_:2},1032,["to"])])))),128))])])}var B={name:"Kepgaleria",data(){return{photos:[]}},async mounted(){try{const t=await fetch("https://jsonplaceholder.typicode.com/photos?_page=1&_limit=50");if(!t.ok)throw new Error("Request failed");{const o=await t.json();this.photos=o}}catch(t){console.log(t)}}};const G=(0,v.Z)(B,[["render",V],["__scopeId","data-v-f28a5d0c"]]);var J=G;const Q={class:"modal fade show d-block",tabindex:"-1",role:"dialog","aria-modal":"true"},X={class:"modal-dialog modal-fullscreen"},tt={class:"modal-content"},ot={class:"modal-header"},et={class:"modal-body"},nt={id:"carouselExampleControls",class:"carousel slide","data-bs-ride":"carousel"},st={class:"carousel-inner"},at=["src","alt"],lt=(0,s.uE)('<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',2);function rt(t,o,e,n,l,r){return(0,s.wg)(),(0,s.iD)("div",Q,[(0,s._)("div",X,[(0,s._)("div",tt,[(0,s._)("div",ot,[(0,s._)("button",{type:"button",class:"btn-close btn-close-white","aria-label":"Close",onClick:o[0]||(o[0]=(...t)=>r.closeModal&&r.closeModal(...t))})]),(0,s._)("div",et,[(0,s._)("div",nt,[(0,s._)("div",st,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.photos,(t=>((0,s.wg)(),(0,s.iD)("div",{class:(0,a.C_)(["carousel-item",{active:t.id==l.id}]),key:t.id},[(0,s._)("img",{src:t.url,class:"d-block w-100",alt:t.title},null,8,at)],2)))),128))]),lt])])])])])}e(560);var it={name:"Image",data(){return{id:null,photos:[]}},async mounted(){try{const t=await fetch("https://jsonplaceholder.typicode.com/photos?_page=1&_limit=50");if(this.id=this.$route.params.id,!t.ok)throw new Error("Request failed");{const o=await t.json();this.photos=o}}catch(t){console.log(t)}},methods:{closeModal(){this.$router.push("/kepgaleria")}}};const ct=(0,v.Z)(it,[["render",rt]]);var dt=ct;const ut=[{path:"/",component:S},{path:"/kepgaleria",component:J},{path:"/kepgaleria/:id",component:dt}],pt=(0,k.p7)({history:(0,k.PO)(),routes:ut});(0,n.ri)(b).use(pt).mount("#app")}},o={};function e(n){var s=o[n];if(void 0!==s)return s.exports;var a=o[n]={exports:{}};return t[n].call(a.exports,a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(o,n,s,a){if(!n){var l=1/0;for(d=0;d<t.length;d++){n=t[d][0],s=t[d][1],a=t[d][2];for(var r=!0,i=0;i<n.length;i++)(!1&a||l>=a)&&Object.keys(e.O).every((function(t){return e.O[t](n[i])}))?n.splice(i--,1):(r=!1,a<l&&(l=a));if(r){t.splice(d--,1);var c=s();void 0!==c&&(o=c)}}return o}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[n,s,a]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var s,a,l=n[0],r=n[1],i=n[2],c=0;if(l.some((function(o){return 0!==t[o]}))){for(s in r)e.o(r,s)&&(e.m[s]=r[s]);if(i)var d=i(e)}for(o&&o(n);c<l.length;c++)a=l[c],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(d)},n=self["webpackChunkp1_vuecli"]=self["webpackChunkp1_vuecli"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(5287)}));n=e.O(n)})();
//# sourceMappingURL=app.c2f71a11.js.map