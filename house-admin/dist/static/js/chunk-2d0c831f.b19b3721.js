(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c831f"],{"549c":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-row",{staticClass:"mb5",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:banner:add"],expression:"['system:banner:add']"}],attrs:{plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:banner:edit"],expression:"['system:banner:edit']"}],attrs:{plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:banner:remove"],expression:"['system:banner:remove']"}],attrs:{plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:banner:export"],expression:"['system:banner:export']"}],attrs:{plain:"",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1),a("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",staticClass:"el-form-search",attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[a("el-form-item",{staticClass:"el-form-search-item",attrs:{label:"轮播图标题",prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入轮播图标题",clearable:"",size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.title,callback:function(t){e.$set(e.queryParams,"title",t)},expression:"queryParams.title"}})],1),a("el-form-item",{staticClass:"el-form-search-item",attrs:{label:"轮播图链接",prop:"link"}},[a("el-input",{attrs:{placeholder:"请输入轮播图链接",clearable:"",size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.link,callback:function(t){e.$set(e.queryParams,"link",t)},expression:"queryParams.link"}})],1),a("el-form-item",{staticClass:"el-form-search-item",attrs:{label:"轮播图状态",prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择轮播图状态",clearable:"",size:"mini"},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.dict.type.mall_goods_shelf,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{staticClass:"el-form-search-item"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{height:e.tableHeight,data:e.bannerList},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{label:"#",type:"index",width:"50",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s((e.queryParams.pageNum-1)*e.queryParams.pageSize+t.$index+1))])]}}])}),a("el-table-column",{attrs:{label:"#",align:"center",prop:"id"}}),a("el-table-column",{attrs:{label:"轮播图标题",align:"center",prop:"title"}}),a("el-table-column",{attrs:{label:"轮播图链接",align:"center",prop:"link"}}),a("el-table-column",{attrs:{label:"轮播图图片",align:"center",prop:"image",width:"100"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("image-preview",{attrs:{src:e.row.image,width:30,height:30}})]}}])}),a("el-table-column",{attrs:{label:"轮播图状态",align:"center",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.mall_goods_shelf,value:t.row.status}})]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:banner:edit"],expression:"['system:banner:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("修改")]),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:banner:remove"],expression:"['system:banner:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:e.title,visible:e.open,width:"800px","append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"轮播图标题",prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入轮播图标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"轮播图链接",prop:"link"}},[a("el-input",{attrs:{placeholder:"请输入轮播图链接"},model:{value:e.form.link,callback:function(t){e.$set(e.form,"link",t)},expression:"form.link"}})],1),a("el-form-item",{attrs:{label:"轮播图图片"}},[a("image-upload",{model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1),a("el-form-item",{attrs:{label:"轮播图状态"}},[a("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.dict.type.mall_goods_shelf,(function(t){return a("el-radio",{key:t.value,attrs:{label:parseInt(t.value)}},[e._v(e._s(t.label))])})),1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},l=[],i=a("5530"),s=(a("d81d"),a("b775"));function r(e){return Object(s["a"])({url:"/system/banner/list",method:"get",params:e})}function o(e){return Object(s["a"])({url:"/system/banner/"+e,method:"get"})}function u(e){return Object(s["a"])({url:"/system/banner",method:"post",data:e})}function m(e){return Object(s["a"])({url:"/system/banner",method:"put",data:e})}function c(e){return Object(s["a"])({url:"/system/banner/"+e,method:"delete"})}console.log("111");var d={name:"Banner",dicts:["mall_goods_shelf"],data:function(){return{tableHeight:document.documentElement.clientHeight-180,loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,bannerList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:20,orderByColumn:"create_time",isAsc:"desc",title:null,link:null,image:null,status:null},form:{},rules:{}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,r(this.queryParams).then((function(t){e.bannerList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={id:null,title:null,link:null,image:null,status:0,createTime:null,modifyTime:null,delTime:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.id})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加轮播图"},handleUpdate:function(e){var t=this;this.reset();var a=e.id||this.ids;o(a).then((function(e){t.form=e.data,t.open=!0,t.title="修改轮播图"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.id?m(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):u(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,a=e.id||this.ids;this.$modal.confirm("是否确认删除记录？").then((function(){return c(a)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("system/banner/export",Object(i["a"])({},this.queryParams),"banner_".concat((new Date).getTime(),".xlsx"))}}},p=d,h=a("2877"),f=Object(h["a"])(p,n,l,!1,null,null,null);t["default"]=f.exports}}]);