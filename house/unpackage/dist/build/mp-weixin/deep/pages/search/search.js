require('../../common/runtime.js');require('../../common/vendor.js');require('../../common/main.js');(global["webpackJsonp_deep"]=global["webpackJsonp_deep"]||[]).push([["pages/search/search"],{"187a":function(t,n,e){"use strict";var i=e("d54a"),c=e.n(i);c.a},"1fc4":function(t,n,e){"use strict";e.r(n);var i=e("6257"),c=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=c.a},"299d":function(t,n,e){"use strict";(function(t,n){var i=e("4ea4");e("7cc8"),e("5c17");i(e("66fd"));var c=i(e("40aa"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(c.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},"40aa":function(t,n,e){"use strict";e.r(n);var i=e("ff86"),c=e("1fc4");for(var r in c)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return c[t]}))}(r);e("187a"),e("45ce");var u=e("f0c5"),a=Object(u["a"])(c["default"],i["b"],i["c"],!1,null,"a37a2384",null,!1,i["a"],void 0);n["default"]=a.exports},"45ce":function(t,n,e){"use strict";var i=e("a7a2"),c=e.n(i);c.a},6257:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{historyList:[],keyword:""}},onLoad:function(){var n=t.getStorageSync("searchHistory");this.historyList=n?JSON.parse(n):[]},onReady:function(){},methods:{clickSearch:function(){if(""===this.keyword)return t.showToast({title:"关键词不能为空",icon:"none"});t.hideKeyboard(),this.addHistory(),this.$u.route({url:"/pages/search/searchList",params:{villageName:this.keyword}})},cancelSearch:function(){t.navigateBack({delta:1})},clickSearchTag:function(t){this.keyword=t,this.clickSearch()},addHistory:function(){var n=this.historyList.indexOf(this.keyword),e=this.historyList;-1===n?e.unshift(this.keyword):e.unshift(e.splice(n,1)[0]),t.setStorageSync("searchHistory",JSON.stringify(e))},clearHistory:function(){var n=this;t.showModal({title:"提示",content:"是否清除搜索历史？",cancelText:"取消",confirmText:"确认",success:function(e){e.confirm&&(t.removeStorageSync("searchHistory"),n.historyList=[],n.keyword="",n.$mytip.toast("清除成功"))}})}}};n.default=e}).call(this,e("543d")["default"])},a7a2:function(t,n,e){},d54a:function(t,n,e){},ff86:function(t,n,e){"use strict";e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var i={uNavbar:function(){return e.e("uview-ui/components/u-navbar/u-navbar").then(e.bind(null,"bd84"))},uSearch:function(){return e.e("uview-ui/components/u-search/u-search").then(e.bind(null,"36ed"))},uCard:function(){return e.e("uview-ui/components/u-card/u-card").then(e.bind(null,"294a"))},uCellGroup:function(){return e.e("uview-ui/components/u-cell-group/u-cell-group").then(e.bind(null,"e49c"))},uCellItem:function(){return e.e("uview-ui/components/u-cell-item/u-cell-item").then(e.bind(null,"b61c"))},uIcon:function(){return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null,"ab9b"))}},c=function(){var t=this.$createElement,n=(this._self._c,this.historyList.length);this.$mp.data=Object.assign({},{$root:{g0:n}})},r=[]}},[["299d","common/runtime","common/vendor"]]]);