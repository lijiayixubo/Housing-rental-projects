(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-712f179b"],{"1f34":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:4,xs:24}},[s("div",{staticClass:"head-container"},[s("el-input",{staticStyle:{"margin-bottom":"20px"},attrs:{placeholder:"请输入部门名称",clearable:"",size:"mini","prefix-icon":"el-icon-search"},model:{value:e.deptName,callback:function(t){e.deptName=t},expression:"deptName"}})],1),s("div",{staticClass:"head-container"},[s("el-tree",{ref:"tree",attrs:{data:e.deptOptions,props:e.defaultProps,"expand-on-click-node":!1,"filter-node-method":e.filterNode,"default-expand-all":""},on:{"node-click":e.handleNodeClick}})],1)]),s("el-col",{attrs:{span:20,xs:24}},[s("el-row",{staticClass:"mb8",attrs:{gutter:10}},[s("el-col",{attrs:{span:1.5}},[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:add"],expression:"['system:user:add']"}],attrs:{plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),s("el-col",{attrs:{span:1.5}},[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:edit"],expression:"['system:user:edit']"}],attrs:{plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),s("el-col",{attrs:{span:1.5}},[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:remove"],expression:"['system:user:remove']"}],attrs:{plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),s("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",staticClass:"el-form-search",attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[s("el-form-item",{staticClass:"el-form-search-item",attrs:{label:"用户名称",prop:"userName"}},[s("el-input",{staticStyle:{width:"140px"},attrs:{placeholder:"请输入用户名称",clearable:"",size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.userName,callback:function(t){e.$set(e.queryParams,"userName",t)},expression:"queryParams.userName"}})],1),s("el-form-item",{staticClass:"el-form-search-item",attrs:{label:"手机号码",prop:"phonenumber"}},[s("el-input",{staticStyle:{width:"140px"},attrs:{placeholder:"请输入手机号码",clearable:"",size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.phonenumber,callback:function(t){e.$set(e.queryParams,"phonenumber",t)},expression:"queryParams.phonenumber"}})],1),s("el-form-item",{staticClass:"el-form-search-item"},[s("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),s("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1)],1),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"dataTable",attrs:{height:e.tableHeight,data:e.userList},on:{"selection-change":e.handleSelectionChange}},[s("el-table-column",{attrs:{type:"selection",width:"50",align:"center"}}),s("el-table-column",{attrs:{label:"#",type:"index",width:"50",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s((e.queryParams.pageNum-1)*e.queryParams.pageSize+t.$index+1))])]}}])}),e.columns[0].visible?s("el-table-column",{key:"userId",attrs:{label:"用户编号",align:"center",prop:"userId"}}):e._e(),e.columns[1].visible?s("el-table-column",{key:"userName",attrs:{label:"用户名称",align:"center",prop:"userName","show-overflow-tooltip":!0}}):e._e(),e.columns[2].visible?s("el-table-column",{key:"nickName",attrs:{label:"用户昵称",align:"center",prop:"nickName","show-overflow-tooltip":!0}}):e._e(),e.columns[3].visible?s("el-table-column",{key:"deptName",attrs:{label:"部门",align:"center",prop:"dept.deptName","show-overflow-tooltip":!0}}):e._e(),e.columns[4].visible?s("el-table-column",{key:"phonenumber",attrs:{label:"手机号码",align:"center",prop:"phonenumber",width:"120"}}):e._e(),e.columns[5].visible?s("el-table-column",{key:"status",attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-switch",{attrs:{"active-value":"0","inactive-value":"1"},on:{change:function(s){return e.handleStatusChange(t.row)}},model:{value:t.row.status,callback:function(s){e.$set(t.row,"status",s)},expression:"scope.row.status"}})]}}],null,!1,3955094654)}):e._e(),e.columns[6].visible?s("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}],null,!1,3078210614)}):e._e(),s("el-table-column",{attrs:{label:"操作",align:"center",width:"160","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return 1!==t.row.userId?[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:edit"],expression:"['system:user:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(s){return e.handleUpdate(t.row)}}},[e._v("修改")]),s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:remove"],expression:"['system:user:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(s){return e.handleDelete(t.row)}}},[e._v("删除")]),s("el-dropdown",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:resetPwd","system:user:edit"],expression:"['system:user:resetPwd', 'system:user:edit']"}],attrs:{size:"mini"},on:{command:function(s){return e.handleCommand(s,t.row)}}},[s("span",{staticClass:"el-dropdown-link"},[s("i",{staticClass:"el-icon-d-arrow-right el-icon--right"}),e._v("更多 ")]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:resetPwd"],expression:"['system:user:resetPwd']"}],attrs:{command:"handleResetPwd",icon:"el-icon-key"}},[e._v("重置密码")]),s("el-dropdown-item",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:edit"],expression:"['system:user:edit']"}],attrs:{command:"handleAuthRole",icon:"el-icon-circle-check"}},[e._v("分配角色")])],1)],1)]:void 0}}],null,!0)})],1),s("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)],1),s("el-dialog",{attrs:{title:e.title,visible:e.open,width:"600px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[s("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[s("el-row",[s("el-col",{attrs:{span:12}},[void 0==e.form.userId?s("el-form-item",{attrs:{label:"用户名称",prop:"userName"}},[s("el-input",{attrs:{placeholder:"请输入用户名称",maxlength:"30"},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}})],1):e._e()],1),s("el-col",{attrs:{span:12}},[void 0==e.form.userId?s("el-form-item",{attrs:{label:"用户密码",prop:"password"}},[s("el-input",{attrs:{placeholder:"请输入用户密码",type:"password",maxlength:"20","show-password":""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1):e._e()],1)],1),s("el-row",[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"用户昵称",prop:"nickName"}},[s("el-input",{attrs:{placeholder:"请输入用户昵称",maxlength:"30"},model:{value:e.form.nickName,callback:function(t){e.$set(e.form,"nickName",t)},expression:"form.nickName"}})],1)],1),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"归属部门",prop:"deptId"}},[s("treeselect",{attrs:{options:e.deptOptions,"show-count":!0,placeholder:"请选择归属部门"},model:{value:e.form.deptId,callback:function(t){e.$set(e.form,"deptId",t)},expression:"form.deptId"}})],1)],1)],1),s("el-row",[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"角色",prop:"roleIds"}},[s("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.form.roleIds,callback:function(t){e.$set(e.form,"roleIds",t)},expression:"form.roleIds"}},e._l(e.roleOptions,(function(e){return s("el-option",{key:e.roleId,attrs:{label:e.roleName,value:e.roleId,disabled:1==e.status}})})),1)],1)],1),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"手机号码",prop:"phonenumber"}},[s("el-input",{attrs:{placeholder:"请输入手机号码",maxlength:"11"},model:{value:e.form.phonenumber,callback:function(t){e.$set(e.form,"phonenumber",t)},expression:"form.phonenumber"}})],1)],1)],1),s("el-row",[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[s("el-input",{attrs:{placeholder:"请输入邮箱",maxlength:"50"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"用户性别"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},e._l(e.dict.type.sys_user_sex,(function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),s("el-row",[s("el-col",{attrs:{span:24}},[s("el-form-item",{attrs:{label:"状态"}},[s("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.dict.type.sys_normal_disable,(function(t){return s("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1)],1)],1),s("el-row",[s("el-col",{attrs:{span:24}},[s("el-form-item",{attrs:{label:"备注"}},[s("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1)],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),s("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),s("el-dialog",{attrs:{title:e.upload.title,visible:e.upload.open,width:"400px","append-to-body":""},on:{"update:visible":function(t){return e.$set(e.upload,"open",t)}}},[s("el-upload",{ref:"upload",attrs:{limit:1,accept:".xlsx, .xls",headers:e.upload.headers,action:e.upload.url+"?updateSupport="+e.upload.updateSupport,disabled:e.upload.isUploading,"on-progress":e.handleFileUploadProgress,"on-success":e.handleFileSuccess,"auto-upload":!1,drag:""}},[s("i",{staticClass:"el-icon-upload"}),s("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),s("em",[e._v("点击上传")])]),s("div",{staticClass:"el-upload__tip text-center",attrs:{slot:"tip"},slot:"tip"},[s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[s("el-checkbox",{model:{value:e.upload.updateSupport,callback:function(t){e.$set(e.upload,"updateSupport",t)},expression:"upload.updateSupport"}}),e._v(" 是否更新已经存在的用户数据 ")],1),s("span",[e._v("仅允许导入xls、xlsx格式文件。")]),s("el-link",{staticStyle:{"font-size":"12px","vertical-align":"baseline"},attrs:{type:"primary",underline:!1},on:{click:e.importTemplate}},[e._v("下载模板")])],1)]),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:e.submitFileForm}},[e._v("确 定")]),s("el-button",{on:{click:function(t){e.upload.open=!1}}},[e._v("取 消")])],1)],1)],1)},a=[],n=s("5530"),l=(s("4de4"),s("d3b7"),s("d81d"),s("c0c7")),o=s("5f87"),i=s("fcb7"),u=s("ca17"),d=s.n(u),c=(s("542c"),{name:"User",dicts:["sys_normal_disable","sys_user_sex"],components:{Treeselect:d.a},data:function(){return{tableHeight:document.documentElement.clientHeight-180,loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,userList:null,title:"",deptOptions:void 0,open:!1,deptName:void 0,initPassword:void 0,dateRange:[],postOptions:[],roleOptions:[],form:{},defaultProps:{children:"children",label:"label"},upload:{open:!1,title:"",isUploading:!1,updateSupport:0,headers:{Authorization:"Bearer "+Object(o["a"])()},url:"/web-api/system/user/importData"},queryParams:{pageNum:1,pageSize:20,userName:void 0,phonenumber:void 0,status:void 0,deptId:void 0},columns:[{key:0,label:"用户编号",visible:!1},{key:1,label:"用户名称",visible:!0},{key:2,label:"用户昵称",visible:!0},{key:3,label:"部门",visible:!0},{key:4,label:"手机号码",visible:!0},{key:5,label:"状态",visible:!0},{key:6,label:"创建时间",visible:!0}],rules:{userName:[{required:!0,message:"用户名称不能为空",trigger:"blur"},{min:2,max:20,message:"用户名称长度必须介于 2 和 20 之间",trigger:"blur"}],nickName:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],password:[{required:!0,message:"用户密码不能为空",trigger:"blur"},{min:5,max:20,message:"用户密码长度必须介于 5 和 20 之间",trigger:"blur"}],deptId:[{required:!0,message:"归属部门不能为空",trigger:"blur"}],roleIds:[{required:!0,message:"角色不能为空",trigger:"blur"}],email:[{type:"email",message:"'请输入正确的邮箱地址",trigger:["blur","change"]}],phonenumber:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}}},watch:{deptName:function(e){this.$refs.tree.filter(e)}},created:function(){var e=this;this.getList(),this.getTreeselect(),this.getConfigKey("sys.user.initPassword").then((function(t){e.initPassword=t.msg}))},methods:{getList:function(){var e=this;this.loading=!0,Object(l["g"])(this.addDateRange(this.queryParams,this.dateRange)).then((function(t){e.userList=t.rows,e.total=t.total,e.loading=!1}))},getTreeselect:function(){var e=this;Object(i["g"])().then((function(t){e.deptOptions=t.data}))},filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},handleNodeClick:function(e){this.queryParams.deptId=e.id,this.handleQuery()},handleStatusChange:function(e){var t=this,s="0"===e.status?"启用":"停用";this.$modal.confirm('确认要"'+s+'""'+e.userName+'"用户吗？').then((function(){return Object(l["b"])(e.userId,e.status)})).then((function(){t.$modal.msgSuccess(s+"成功")})).catch((function(){e.status="0"===e.status?"1":"0"}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={userId:void 0,deptId:void 0,userName:void 0,nickName:void 0,password:void 0,phonenumber:void 0,email:void 0,sex:void 0,status:"0",remark:void 0,postIds:[],roleIds:[]},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.dateRange=[],this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.userId})),this.single=1!=e.length,this.multiple=!e.length},handleCommand:function(e,t){switch(e){case"handleResetPwd":this.handleResetPwd(t);break;case"handleAuthRole":this.handleAuthRole(t);break;default:break}},handleAdd:function(){var e=this;this.reset(),this.getTreeselect(),Object(l["e"])().then((function(t){e.postOptions=t.posts,e.roleOptions=t.roles,e.open=!0,e.title="添加用户",e.form.password=e.initPassword}))},handleUpdate:function(e){var t=this;this.reset(),this.getTreeselect();var s=e.userId||this.ids;Object(l["e"])(s).then((function(e){t.form=e.data,t.postOptions=e.posts,t.roleOptions=e.roles,t.form.postIds=e.postIds,t.form.roleIds=e.roleIds,t.open=!0,t.title="修改用户",t.form.password=""}))},handleResetPwd:function(e){var t=this;this.$prompt('请输入"'+e.userName+'"的新密码',"提示",{confirmButtonText:"确定",cancelButtonText:"取消",closeOnClickModal:!1,inputPattern:/^.{5,20}$/,inputErrorMessage:"用户密码长度必须介于 5 和 20 之间"}).then((function(s){var r=s.value;Object(l["h"])(e.userId,r).then((function(e){t.$modal.msgSuccess("修改成功，新密码是："+r)}))})).catch((function(){}))},handleAuthRole:function(e){var t=e.userId;this.$router.push("/system/user-auth/role/"+t)},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(void 0!=e.form.userId?Object(l["j"])(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):Object(l["a"])(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,s=e.userId||this.ids,r=e.userName;this.$modal.confirm("确认删除"+r+"吗？").then((function(){return Object(l["c"])(s)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("system/user/export",Object(n["a"])({},this.queryParams),"user_".concat((new Date).getTime(),".xlsx"))},handleImport:function(){this.upload.title="用户导入",this.upload.open=!0},importTemplate:function(){this.download("system/user/importTemplate",{},"user_template_".concat((new Date).getTime(),".xlsx"))},handleFileUploadProgress:function(e,t,s){this.upload.isUploading=!0},handleFileSuccess:function(e,t,s){this.upload.open=!1,this.upload.isUploading=!1,this.$refs.upload.clearFiles(),this.$alert("<div style='overflow: auto;overflow-x: hidden;max-height: 70vh;padding: 10px 20px 0;'>"+e.msg+"</div>","导入结果",{dangerouslyUseHTMLString:!0}),this.getList()},submitFileForm:function(){this.$refs.upload.submit()},setDataTable:function(){var e=this;this.$nextTick((function(){e.$refs.dataTable.doLayout()}))}}}),m=c,p=s("2877"),h=Object(p["a"])(m,r,a,!1,null,null,null);t["default"]=h.exports},c0c7:function(e,t,s){"use strict";s.d(t,"g",(function(){return n})),s.d(t,"e",(function(){return l})),s.d(t,"a",(function(){return o})),s.d(t,"j",(function(){return i})),s.d(t,"c",(function(){return u})),s.d(t,"h",(function(){return d})),s.d(t,"b",(function(){return c})),s.d(t,"f",(function(){return m})),s.d(t,"k",(function(){return p})),s.d(t,"l",(function(){return h})),s.d(t,"m",(function(){return f})),s.d(t,"d",(function(){return b})),s.d(t,"i",(function(){return v}));var r=s("b775"),a=s("c38a");function n(e){return Object(r["a"])({url:"/system/user/list",method:"get",params:e})}function l(e){return Object(r["a"])({url:"/system/user/"+Object(a["e"])(e),method:"get"})}function o(e){return Object(r["a"])({url:"/system/user",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/system/user",method:"put",data:e})}function u(e){return Object(r["a"])({url:"/system/user/"+e,method:"delete"})}function d(e,t){var s={userId:e,password:t};return Object(r["a"])({url:"/system/user/resetPwd",method:"put",data:s})}function c(e,t){var s={userId:e,status:t};return Object(r["a"])({url:"/system/user/changeStatus",method:"put",data:s})}function m(){return Object(r["a"])({url:"/system/user/profile",method:"get"})}function p(e){return Object(r["a"])({url:"/system/user/profile",method:"put",data:e})}function h(e,t){var s={oldPassword:e,newPassword:t};return Object(r["a"])({url:"/system/user/profile/updatePwd",method:"put",params:s})}function f(e){return Object(r["a"])({url:"/system/user/profile/avatar",method:"post",data:e})}function b(e){return Object(r["a"])({url:"/system/user/authRole/"+e,method:"get"})}function v(e){return Object(r["a"])({url:"/system/user/authRole",method:"put",params:e})}},fcb7:function(e,t,s){"use strict";s.d(t,"d",(function(){return a})),s.d(t,"e",(function(){return n})),s.d(t,"c",(function(){return l})),s.d(t,"g",(function(){return o})),s.d(t,"f",(function(){return i})),s.d(t,"a",(function(){return u})),s.d(t,"h",(function(){return d})),s.d(t,"b",(function(){return c}));var r=s("b775");function a(e){return Object(r["a"])({url:"/system/dept/list",method:"get",params:e})}function n(e){return Object(r["a"])({url:"/system/dept/list/exclude/"+e,method:"get"})}function l(e){return Object(r["a"])({url:"/system/dept/"+e,method:"get"})}function o(){return Object(r["a"])({url:"/system/dept/treeselect",method:"get"})}function i(e){return Object(r["a"])({url:"/system/dept/roleDeptTreeselect/"+e,method:"get"})}function u(e){return Object(r["a"])({url:"/system/dept",method:"post",data:e})}function d(e){return Object(r["a"])({url:"/system/dept",method:"put",data:e})}function c(e){return Object(r["a"])({url:"/system/dept/"+e,method:"delete"})}}}]);