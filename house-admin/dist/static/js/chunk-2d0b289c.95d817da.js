(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b289c"],{2514:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-row",{staticClass:"mb5",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:feedback:add"],expression:"['system:feedback:add']"}],attrs:{plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:feedback:edit"],expression:"['system:feedback:edit']"}],attrs:{plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:feedback:remove"],expression:"['system:feedback:remove']"}],attrs:{plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:feedback:export"],expression:"['system:feedback:export']"}],attrs:{plain:"",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1),a("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",staticClass:"el-form-search",attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[a("el-form-item",{staticClass:"el-form-search-item",attrs:{label:"类别",prop:"feedType"}},[a("el-select",{attrs:{placeholder:"请选择类别",clearable:"",size:"mini"},model:{value:e.queryParams.feedType,callback:function(t){e.$set(e.queryParams,"feedType",t)},expression:"queryParams.feedType"}},e._l(e.dict.type.sys_feedback_type,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{staticClass:"el-form-search-item",attrs:{label:"标题",prop:"feedTitle"}},[a("el-input",{attrs:{placeholder:"请输入标题",clearable:"",size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.feedTitle,callback:function(t){e.$set(e.queryParams,"feedTitle",t)},expression:"queryParams.feedTitle"}})],1),a("el-form-item",{staticClass:"el-form-search-item"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")]),a("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{height:e.tableHeight,data:e.feedbackList},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"50",align:"center"}}),a("el-table-column",{attrs:{label:"#",type:"index",width:"50",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s((e.queryParams.pageNum-1)*e.queryParams.pageSize+t.$index+1))])]}}])}),a("el-table-column",{attrs:{label:"类别",align:"center",prop:"feedType"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.sys_feedback_type,value:t.row.feedType}})]}}])}),a("el-table-column",{attrs:{label:"标题",align:"center",prop:"feedTitle"}}),a("el-table-column",{attrs:{label:"详情",align:"center",prop:"feedContent"}}),a("el-table-column",{attrs:{label:"备注",align:"center",prop:"remark"}}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:feedback:edit"],expression:"['system:feedback:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("修改")]),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:feedback:remove"],expression:"['system:feedback:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:e.title,visible:e.open,width:"500px","append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"类别",prop:"feedType"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择类别"},model:{value:e.form.feedType,callback:function(t){e.$set(e.form,"feedType",t)},expression:"form.feedType"}},e._l(e.dict.type.sys_feedback_type,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"标题",prop:"feedTitle"}},[a("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.form.feedTitle,callback:function(t){e.$set(e.form,"feedTitle",t)},expression:"form.feedTitle"}})],1),a("el-form-item",{attrs:{label:"详情",prop:"feedContent"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.feedContent,callback:function(t){e.$set(e.form,"feedContent",t)},expression:"form.feedContent"}})],1),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{placeholder:"请输入备注"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},i=[],n=a("5530"),r=(a("d81d"),a("b775"));function s(e){return Object(r["a"])({url:"/system/feedback/list",method:"get",params:e})}function o(e){return Object(r["a"])({url:"/system/feedback/"+e,method:"get"})}function c(e){return Object(r["a"])({url:"/system/feedback",method:"post",data:e})}function d(e){return Object(r["a"])({url:"/system/feedback",method:"put",data:e})}function u(e){return Object(r["a"])({url:"/system/feedback/"+e,method:"delete"})}var m={name:"Feedback",dicts:["sys_feedback_type"],data:function(){return{tableHeight:document.documentElement.clientHeight-180,loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,feedbackList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:20,feedType:null,feedTitle:null},form:{},rules:{feedType:[{required:!0,message:"类型不能为空",trigger:"change"}],feedTitle:[{required:!0,message:"标题不能为空",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,s(this.queryParams).then((function(t){e.feedbackList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={id:null,feedType:null,feedTitle:null,feedContent:null,createBy:null,createTime:null,updateBy:null,updateTime:null,remark:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.id})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加意见反馈"},handleUpdate:function(e){var t=this;this.reset();var a=e.id||this.ids;o(a).then((function(e){t.form=e.data,t.open=!0,t.title="修改意见反馈"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.id?d(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):c(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,a=e.id||this.ids;this.$modal.confirm("是否确认删除记录？").then((function(){return u(a)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("system/feedback/export",Object(n["a"])({},this.queryParams),"feedback_".concat((new Date).getTime(),".xlsx"))}}},f=m,p=a("2877"),h=Object(p["a"])(f,l,i,!1,null,null,null);t["default"]=h.exports}}]);