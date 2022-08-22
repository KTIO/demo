(function(){"use strict";var e={3244:function(e,t,s){var a=s(6369),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"users-title"},[e._v("用户管理")]),t("el-card",{staticClass:"user-card"},[t("Users",{attrs:{"table-data":e.tableData,"history-data":e.historyData},on:{delUser:e.delUser,delChecked:e.delChecked,undoHistoryStep:e.undoHistoryStep}}),t("UserDialog",{on:{addUser:function(t){return e.addUser(arguments)}}})],1)],1)},n=[],l=s(2140),i=s.n(l),o=function(){var e=this,t=e._self._c;return t("div",[t("el-row",{staticClass:"users-header",attrs:{type:"flex",justify:"space-between"}},[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.createUser}},[e._v("新建")]),t("el-col",[t("el-input",{staticClass:"user-serach",attrs:{placeholder:"请输入用户",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),t("el-button",{attrs:{type:"danger",size:"mini",disabled:e.undoDisabled},on:{click:e.undoHistory}},[e._v("撤销")])],1),t("el-table",{staticClass:"user-table",staticStyle:{width:"100%"},attrs:{data:e.userData,border:""},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),t("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180","header-align":"center",align:"center"}}),t("el-table-column",{attrs:{prop:"age",label:"年龄",width:"180","header-align":"center",align:"center"}}),t("el-table-column",{attrs:{prop:"sex",label:"性别",width:"180","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("span",[e._v(e._s(0==s.row.sex?"女":"男"))])]}}])}),t("el-table-column",{attrs:{prop:"tel",label:"联系电话",width:"180","header-align":"center",align:"center"}}),t("el-table-column",{attrs:{prop:"DetailedAddress",label:"地址","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("span",[e._v(e._s(e._f("addrFormat")(s.row)))])]}}])}),t("el-table-column",{attrs:{label:"操作","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.handleEdit(s.$index,s.row)}}},[e._v("编辑")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(s.$index,s.row)}}},[e._v("删除")])]}}])})],1),t("el-button",{attrs:{type:"danger",size:"mini"},on:{click:e.deleteChecked}},[e._v("批量删除")])],1)},d=[],u={props:{tableData:{type:Array,default:[]},historyData:{type:Object,default:{index:-1,maxStep:5,steps:[]}}},data(){return{search:"",multipleSelection:[]}},computed:{undoDisabled(){return!(this.historyData.index>0&&this.historyData.steps.length>0)},userData(){if(this.search){var e=this.search;return this.tableData.filter((function(t){return-1!=t.name.indexOf(e)}))}return this.tableData}},methods:{handleEdit(e,t){this.$bus.$emit("showDialog",t,e)},handleDelete(e){this.$emit("delUser",e)},createUser(){this.$bus.$emit("showDialog")},handleSelectionChange(e){this.multipleSelection=e.map((e=>e.userId))},deleteChecked(){this.$emit("delChecked",this.multipleSelection),this.multipleSelection=[]},undoHistory(){this.$emit("undoHistoryStep")}},filters:{addrFormat(e){return e.DetailedAddress?e.address.join("/")+"/"+e.DetailedAddress:e.address.join("/")}}},c=u,h=s(1001),f=(0,h.Z)(c,o,d,!1,null,"1af4b847",null),p=f.exports,m=function(){var e=this,t=e._self._c;return t("div",[t("el-dialog",{staticClass:"user-form",attrs:{title:"新建/编辑用户",visible:e.showEdit,center:""},on:{"update:visible":function(t){e.showEdit=t}}},[t("el-form",{ref:"userForm",attrs:{model:e.userInfo,"label-position":"top",rules:e.rules}},[t("el-row",{attrs:{gutter:24,type:"flex",justify:"center"}},[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"姓名",prop:"name"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.userInfo.name,callback:function(t){e.$set(e.userInfo,"name",t)},expression:"userInfo.name"}})],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"性别"}},[t("el-select",{staticClass:"size-full",attrs:{placeholder:"请选择"},model:{value:e.userInfo.sex,callback:function(t){e.$set(e.userInfo,"sex",t)},expression:"userInfo.sex"}},[t("el-option",{attrs:{label:"女",value:"0"}}),t("el-option",{attrs:{label:"男",value:"1"}})],1)],1)],1)],1),t("el-row",{attrs:{gutter:24,type:"flex",justify:"center"}},[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"联系电话"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.userInfo.tel,callback:function(t){e.$set(e.userInfo,"tel",t)},expression:"userInfo.tel"}})],1)],1),t("el-col",{attrs:{span:10}})],1),t("el-row",{attrs:{gutter:24,type:"flex",justify:"center"}},[t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"详细地址",prop:"address"}},[t("el-cascader",{staticClass:"size-full",attrs:{options:e.options,props:{expandTrigger:"hover"}},model:{value:e.userInfo.address,callback:function(t){e.$set(e.userInfo,"address",t)},expression:"userInfo.address"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:" "}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入详细地址"},model:{value:e.userInfo.DetailedAddress,callback:function(t){e.$set(e.userInfo,"DetailedAddress",t)},expression:"userInfo.DetailedAddress"}})],1)],1)],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.cancel}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(e._s("add"===this.type?"添加":"保存"))])],1)],1)],1)},b=[],y={data(){return{showEdit:!1,options:[{value:"广东省",label:"广东省",children:[{value:"广州市",label:"广州市",children:[{value:"荔湾区",label:"荔湾区"},{value:"越秀区",label:"越秀区"},{value:"海珠区",label:"海珠区"},{value:"天河区",label:"天河区"}]}]}],userInfo:{userId:"",name:"",date:null,sex:null,tel:"",address:[],DetailedAddress:""},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,max:10,message:"名称长度在 3 到 5 个字符",trigger:"blur"}],address:[{required:!0,message:"地址不能为空"}]},type:"",userIndex:null}},mounted(){this.$bus.$on("showDialog",((e,t)=>{this.userInfo={userId:"",name:"",date:null,sex:null,tel:"",address:[],DetailedAddress:""},e?(this.type="edit",this.userInfo={...e},this.userIndex=t):(this.type="add",this.userIndex=null),this.showEdit=!0}))},beforeDestroy(){},methods:{onSubmit(){this.$refs.userForm.validate((e=>{if(!e)return!1;this.$emit("addUser",this.userInfo,this.userIndex),this.userInfo={userId:"",name:"",date:null,sex:null,tel:"",address:[],DetailedAddress:""},this.showEdit=!1,this.userIndex=-1}))},cancel(){this.userInfo={name:"",date:null,sex:null,tel:"",address:[],DetailedAddress:"",type:""},this.showEdit=!1}}},g=y,D=(0,h.Z)(g,m,b,!1,null,"1407a701",null),v=D.exports;const x=function(){return Math.floor(1e5*Math.random()+2e4*Math.random()+5e3*Math.random())},I=function(e){if(void 0!==e)return JSON.parse(JSON.stringify(e))};var S=[{userId:"81920",date:"2016-05-02",name:"小白",age:20,sex:"男",tel:"13005628556",address:["广东省","广州市","越秀区"],DetailedAddress:"XX街道XX幢XX号"},{userId:"83320",date:"2016-05-02",name:"小李",age:18,sex:"男",tel:"15632599656",address:["广东省","广州市","天河区"],DetailedAddress:"XX街道XX幢XX号"},{userId:"83129",date:"2016-05-02",name:"小牙",age:16,sex:"男",tel:"18026355660",address:["广东省","广州市","荔湾区"],DetailedAddress:"XX街道XX幢XX号"}],w={name:"App",components:{Users:p,UserDialog:v},data(){return{tableData:[],historyData:{index:-1,maxStep:5,steps:[]}}},methods:{addUser(e){null!=e[1]?(this.tableData.splice(e[1],1,I(e[0])),this.emitHistoryChange(),i()({type:"success",message:"修改成功!"})):(e[0].userId=x(),this.tableData.push(I(e[0])),this.emitHistoryChange(),i()({type:"success",message:"保存成功!"})),sessionStorage.setItem("tableData",JSON.stringify(this.tableData))},delUser(e){e>=0&&(this.tableData.splice(e,1),this.emitHistoryChange(),sessionStorage.setItem("tableData",JSON.stringify(this.tableData)),i()({type:"success",message:"删除成功!"}))},delChecked(e){this.tableData=this.tableData.filter((t=>-1==e.indexOf(t.userId))),sessionStorage.setItem("tableData",JSON.stringify(this.tableData)),this.emitHistoryChange(),i()({type:"success",message:"删除成功!"})},emitHistoryChange(){this.historyData.index===this.historyData.maxStep-1?this.historyData.steps.shift():this.historyData.index++,this.historyData.steps[this.historyData.index]=_.cloneDeep(this.tableData),this.historyData.index<this.historyData.steps.length-1&&(this.historyData.steps=this.historyData.steps.slice(0,this.historyData.index+1))},undoHistoryStep(){0!==this.historyData.index&&this.historyData.index--,this.tableData=I(this.historyData.steps[this.historyData.index])}},mounted(){sessionStorage.getItem("tableData")?this.tableData=JSON.parse(sessionStorage.getItem("tableData")):this.tableData=S,this.emitHistoryChange()}},k=w,C=(0,h.Z)(k,r,n,!1,null,"4af4c0db",null),O=C.exports,$=s(860),X=s.n($),j=s(2572),A=s.n(j),U=s(7342),H=s.n(U),E=s(2244),z=s.n(E),M=s(5583),J=s.n(M),N=s(9371),T=s.n(N),F=s(4514),P=s.n(F),Z=s(3480),q=s.n(Z),B=s(2086),G=s.n(B),K=s(5981),L=s.n(K),Q=s(1168),R=s.n(Q),V=s(8319),W=s.n(V),Y=s(1540),ee=s.n(Y);a["default"].use(ee()),a["default"].use(W()),a["default"].use(R()),a["default"].use(L()),a["default"].use(G()),a["default"].use(q()),a["default"].use(P()),a["default"].use(T()),a["default"].use(J()),a["default"].use(z()),a["default"].use(H()),a["default"].use(A()),a["default"].use(X());var te=s(4806),se=s.n(te);a["default"].prototype._=se(),a["default"].config.productionTip=!1,a["default"].prototype.$bus=new a["default"],new a["default"]({render:e=>e(O)}).$mount("#app")}},t={};function s(a){var r=t[a];if(void 0!==r)return r.exports;var n=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}s.m=e,function(){var e=[];s.O=function(t,a,r,n){if(!a){var l=1/0;for(u=0;u<e.length;u++){a=e[u][0],r=e[u][1],n=e[u][2];for(var i=!0,o=0;o<a.length;o++)(!1&n||l>=n)&&Object.keys(s.O).every((function(e){return s.O[e](a[o])}))?a.splice(o--,1):(i=!1,n<l&&(l=n));if(i){e.splice(u--,1);var d=r();void 0!==d&&(t=d)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[a,r,n]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,n,l=a[0],i=a[1],o=a[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(r in i)s.o(i,r)&&(s.m[r]=i[r]);if(o)var u=o(s)}for(t&&t(a);d<l.length;d++)n=l[d],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(u)},a=self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(3244)}));a=s.O(a)})();
//# sourceMappingURL=app.2a92e5e0.js.map