(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f995018"],{"2c12":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-row",{staticClass:"mb5",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:order:export"],expression:"['system:order:export']"}],attrs:{plain:"",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1),a("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",staticClass:"el-form-search",attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[a("el-form-item",{staticClass:"el-form-search-item",attrs:{label:"订单号",prop:"orderCode"}},[a("el-input",{attrs:{placeholder:"请输入订单号",clearable:"",size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.orderCode,callback:function(t){e.$set(e.queryParams,"orderCode",t)},expression:"queryParams.orderCode"}})],1),a("el-form-item",{staticClass:"el-form-search-item",attrs:{label:"订单状态",prop:"orderStatus"}},[a("el-select",{attrs:{placeholder:"请选择订单状态",clearable:"",size:"mini"},model:{value:e.queryParams.orderStatus,callback:function(t){e.$set(e.queryParams,"orderStatus",t)},expression:"queryParams.orderStatus"}},e._l(e.dict.type.mall_order_status,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{staticClass:"el-form-search-item"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{height:e.tableHeight,data:e.orderList},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{label:"#",type:"index",width:"50",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s((e.queryParams.pageNum-1)*e.queryParams.pageSize+t.$index+1))])]}}])}),a("el-table-column",{attrs:{label:"订单号",align:"center",prop:"orderCode",width:"160"}}),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"orderCreateTime",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.orderCreateTime,"{y}-{m}-{d} {h}:{i}:{s}")))])]}}])}),a("el-table-column",{attrs:{label:"收货人",align:"center",prop:"receiver"}}),a("el-table-column",{attrs:{label:"联系方式",align:"center",prop:"receiverPhone",width:"110"}}),a("el-table-column",{attrs:{label:"收货地址",align:"center",prop:"receiverAddress",width:"120","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"支付金额",align:"center",prop:"payAmount"}}),a("el-table-column",{attrs:{label:"支付方式",align:"center",prop:"payMethod"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.mall_pay_method,value:t.row.payMethod}})]}}])}),a("el-table-column",{attrs:{label:"支付时间",align:"center",prop:"payTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.payTime,"{y}-{m}-{d} {h}:{i}:{s}")))])]}}])}),a("el-table-column",{attrs:{label:"支付状态",align:"center",prop:"payStatus"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.mall_pay_status,value:t.row.payStatus}})]}}])}),a("el-table-column",{attrs:{label:"订单状态",align:"center",prop:"orderStatus"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.mall_order_status,value:t.row.orderStatus}})]}}])}),a("el-table-column",{attrs:{label:"备注",align:"center",prop:"remark"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center","class-name":"small-padding fixed-width",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:order:edit"],expression:"['system:order:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-view"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("详情")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:e.open,width:"800px","append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(t){e.open=t}}},[a("div",{staticClass:"hearder-order"},[e._v("订单信息")]),a("div",{staticClass:"content-order"},[a("div",{staticClass:"order-item"},[a("div",{staticClass:"item-title"},[e._v("订单编号")]),a("div",{staticClass:"item-value"},[a("el-label",[e._v(e._s(e.form.orderCode))])],1)]),a("div",{staticClass:"order-item"},[a("div",{staticClass:"item-title"},[e._v("订单状态")]),a("div",{staticClass:"item-value"},[a("el-label",[a("dict-tag",{attrs:{options:e.dict.type.mall_order_status,value:e.form.orderStatus}})],1)],1)]),a("div",{staticClass:"order-item"},[a("div",{staticClass:"item-title"},[e._v("支付状态")]),a("div",{staticClass:"item-value"},[a("el-label",[a("dict-tag",{attrs:{options:e.dict.type.mall_pay_status,value:e.form.payStatus}})],1)],1)]),a("div",{staticClass:"order-item"},[a("div",{staticClass:"item-title"},[e._v("支付金额")]),a("div",{staticClass:"item-value"},[a("el-label",[e._v(e._s(e.form.payAmount))])],1)]),a("div",{staticClass:"order-item"},[a("div",{staticClass:"item-title"},[e._v("支付方式")]),a("div",{staticClass:"item-value"},[a("el-label",[a("dict-tag",{attrs:{options:e.dict.type.mall_pay_method,value:e.form.payMethod}})],1)],1)]),a("div",{staticClass:"order-item"},[a("div",{staticClass:"item-title"},[e._v("创建时间")]),a("div",{staticClass:"item-value"},[a("el-label",[e._v(e._s(e.parseTime(e.form.orderCreateTime,"{y}-{m}-{d} {h}:{i}:{s}")))])],1)])]),a("div",{staticClass:"hearder-order"},[e._v("商品信息")]),a("div",{staticClass:"content-order"},e._l(e.mallOrderGoodsList,(function(t,s){return a("div",{key:s,staticClass:"order-item"},[a("div",{staticClass:"item-image"},[a("el-image",{style:"width:80px;height:80px;",attrs:{src:t.image}})],1),a("div",{staticClass:"item-desc"},[a("div",{staticClass:"title"},[e._v(e._s(t.title))]),a("div",{staticClass:"desc"},[e._v(e._s(t.desc))]),a("div",{staticClass:"price"},[e._v(e._s(t.price)+e._s(t.value))])])])})),0),a("div",{staticClass:"hearder-order"},[e._v("收货信息")]),a("div",{staticClass:"content-order"},[a("div",{staticClass:"order-item"},[a("div",{staticClass:"item-title"},[e._v("收 货 人")]),a("div",{staticClass:"item-value"},[a("el-label",[e._v(e._s(e.form.receiver))])],1)]),a("div",{staticClass:"order-item"},[a("div",{staticClass:"item-title"},[e._v("联系方式")]),a("div",{staticClass:"item-value"},[a("el-label",[e._v(e._s(e.form.receiverPhone))])],1)]),a("div",{staticClass:"order-item"},[a("div",{staticClass:"item-title"},[e._v("收货地址")]),a("div",{staticClass:"item-value"},[a("el-label",[e._v(e._s(e.form.receiverAddress))])],1)])]),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.cancel}},[e._v("关 闭")])],1)])],1)},i=[],l=a("5530"),r=(a("d81d"),a("b775"));function o(e){return Object(r["a"])({url:"/system/order/list",method:"get",params:e})}function n(e){return Object(r["a"])({url:"/system/order/"+e,method:"get"})}function d(e){return Object(r["a"])({url:"/system/order",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/system/order",method:"put",data:e})}function u(e){return Object(r["a"])({url:"/system/order/"+e,method:"delete"})}var m={name:"Order",dicts:["mall_pay_status","mall_order_status","mall_pay_method"],data:function(){return{tableHeight:document.documentElement.clientHeight-180,loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,orderList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:20,orderByColumn:"create_time",isAsc:"desc",orderCode:null,orderStatus:null},form:{},mallOrderGoodsList:[{image:"https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595648833825306090.jpg",title:"娇兰口红330kiss亲亲唇膏344滋润（演示商品，不发货）",desc:"黑管344#性感橘",price:"￥279",value:"x1"},{image:"https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595655334145811959.jpg",title:"圣罗兰（YSL）纯口红 （演示商品，不发货）",desc:"黑管344#性感橘",price:"￥279",value:"x1"},{image:"https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/1595657991708941861.jpg",title:"PANSUR豹纹丝绒雾面唇釉滋润（演示商品，不发货）",desc:"黑管344#性感橘",price:"￥279",value:"x1"}]}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,o(this.queryParams).then((function(t){e.orderList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={id:null,orderCode:null,orderCreateTime:null,payAmount:null,payMethod:null,payTime:null,payStatus:null,disAmount:null,orderStatus:null,sortNo:null,userId:null,addressId:null,createBy:null,createTime:null,updateBy:null,updateTime:null,remark:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.id})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加订单信息"},handleUpdate:function(e){var t=this;this.reset();var a=e.id||this.ids;n(a).then((function(e){t.form=e.data,t.open=!0,t.title="订单信息"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.id?c(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):d(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,a=e.id||this.ids;this.$modal.confirm("是否确认删除记录？").then((function(){return u(a)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("system/order/export",Object(l["a"])({},this.queryParams),"order_".concat((new Date).getTime(),".xlsx"))}}},p=m,v=(a("57d0"),a("2877")),h=Object(v["a"])(p,s,i,!1,null,"3c5cbf44",null);t["default"]=h.exports},"4e75":function(e,t,a){},"57d0":function(e,t,a){"use strict";a("4e75")}}]);