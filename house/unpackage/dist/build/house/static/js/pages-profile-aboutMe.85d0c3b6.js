(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-profile-aboutMe"],{"04ab":function(t,e,i){"use strict";i.r(e);var a=i("eaf2"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"10a2":function(t,e,i){"use strict";(function(t){i("4160"),i("a9e3"),i("b64b"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"LikeFx",data:function(){return{queue:{},ctx:null,timer:0}},props:{height:{type:Number,default:1920},width:{type:Number,default:375}},mounted:function(){this.ctx=uni.createCanvasContext("bubble"),this.queue={},t("log","likeFx mounted"," at components/likeFx/likeFx.vue:30")},destroyed:function(){t("log","likeFx destoryed"," at components/likeFx/likeFx.vue:33"),this.clearTimer()},methods:{likeClick:function(){t("log","开始点赞啦"," at components/likeFx/likeFx.vue:39");var e="/static/img/likeFx/"+this.getRandomInt(1,33)+".png",i={id:(new Date).getTime(),timer:0,opacity:0,pathData:this.generatePathData(),image:e,factor:{speed:6e-4,t:.6}};Object.keys(this.queue).length>0?this.queue[i.id]=i:(this.queue[i.id]=i,this.bubbleAnimate())},getRandom:function(t,e){return Math.random()*(e-t)+t},getRandomInt:function(t,e){return Math.floor(Math.random()*(e-t+1))+t},generatePathData:function(){var t=this.width,e=this.height,i={x:.72*t,y:e},a={x:this.getRandom(.22*t,.33*t),y:this.getRandom(.5*e,.75*e)},n={x:this.getRandom(0,.88*t),y:this.getRandom(.25*e,.5*e)},o={x:this.getRandom(0,.88*t),y:this.getRandom(0,.125*e)};return[i,a,n,o]},updatePath:function(t,e){var i=t[0],a=t[1],n=t[2],o=t[3],r=e.t,d=3*(a.x-i.x),u=3*(n.x-a.x)-d,c=o.x-i.x-d-u,s=3*(a.y-i.y),f=3*(n.y-a.y)-s,l=o.y-i.y-s-f,h=c*(r*r*r)+u*(r*r)+d*r+i.x,v=l*(r*r*r)+f*(r*r)+s*r+i.y;return{x:h,y:v}},bubbleAnimate:function(){var t=this,e=(this.width,this.height);Object.keys(this.queue).forEach((function(i){var a=t.queue[+i],n=t.updatePath(a.pathData,a.factor),o=n.x,r=n.y,d=a.factor.speed;a.factor.t+=d;var u=30;u=(e-r)/1.5,u=Math.min(30,u);var c=a.opacity;c=r/(.3*e),c=Math.min(1,c),t.ctx.globalAlpha=c,t.ctx.drawImage(a.image,o-u/2,r,u,u),a.factor.t>1&&delete t.queue[a.id],r>e&&delete t.queue[a.id]})),this.ctx.draw(),Object.keys(this.queue).length>0?this.timer=setTimeout((function(){t.bubbleAnimate()}),5):(this.clearTimer(),this.ctx.draw())},clearTimer:function(){this.timer&&clearTimeout(this.timer)}}};e.default=a}).call(this,i("0de9")["log"])},"32ad":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.like-fx[data-v-84b57b3e]{position:fixed;right:0;z-index:1024;pointer-events:none\r\n  /* background-color: red; */}',""]),t.exports=e},"4d17":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-canvas",{staticClass:"like-fx",style:"width:"+t.width+"px;height:"+t.height+"px",attrs:{"canvas-id":"bubble"}})],1)},o=[]},"59fd":function(t,e,i){"use strict";var a=i("ada4"),n=i.n(a);n.a},"6def":function(t,e,i){"use strict";i.r(e);var a=i("a071"),n=i("04ab");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("59fd");var r,d=i("f0c5"),u=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"3d8c8648",null,!1,a["a"],r);e["default"]=u.exports},7519:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".align-center[data-v-3d8c8648]{text-align:center}.titleZ[data-v-3d8c8648]{width:%?750?%;font-size:%?42?%;margin-top:%?60?%}.contentZ[data-v-3d8c8648]{width:%?650?%;margin:%?10?% auto 0;text-align:left}.about-bg[data-v-3d8c8648]{background-size:cover;width:100vw;height:100vh;justify-content:center;flex-direction:column;color:#fff}.edit-fixed[data-v-3d8c8648]{position:fixed;width:100%;bottom:0;z-index:1024;box-shadow:0 %?1?% %?6?% rgba(0,0,0,.1)}.detail-imgs uni-image[data-v-3d8c8648]{width:100%;float:left;\n    /* height:400rpx; 不定高了*/border:0;padding:0;margin:0}.share-img[data-v-3d8c8648]{position:fixed;padding:%?10?%;width:%?100?%;height:%?100?%;\n    /* top: 680rpx; */bottom:%?200?%;right:%?20?%;z-index:1024;opacity:.8;box-shadow:%?0?% %?8?% %?30?% %?0?% rgba(0,0,0,.3);border:none}.about[data-v-3d8c8648]{margin:0;width:100%;height:100vh;padding-top:20%;color:#fff;background:linear-gradient(-120deg,#f15bb5,#9a5ce5,#01beff,#00f5d4);\n    /* background: linear-gradient(-120deg, #0976ea, #c471f5, #f956b6, #ea7e0a); */background-size:500% 500%;-webkit-animation:gradientBG-data-v-3d8c8648 15s ease infinite;animation:gradientBG-data-v-3d8c8648 15s ease infinite}@-webkit-keyframes gradientBG-data-v-3d8c8648{0%{background-position:0 50%}50%{background-position:100% 50%}100%{background-position:0 50%}}@keyframes gradientBG-data-v-3d8c8648{0%{background-position:0 50%}50%{background-position:100% 50%}100%{background-position:0 50%}}.container[data-v-3d8c8648]{width:100%;position:absolute;text-align:center}.like-fx[data-v-3d8c8648]{position:fixed;right:0;z-index:1024;pointer-events:none\n    /* background-color: red; */}",""]),t.exports=e},a071:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"about"},[i("like-fx",{ref:"likeFx",attrs:{width:t.width,height:t.height}}),i("v-uni-view",{staticClass:"titleZ text-center align-center"},[i("v-uni-text",{staticClass:"text-bold"},[t._v("关于作者")]),i("v-uni-view",{staticClass:"contentZ"},[i("v-uni-text",{staticClass:"text-xl"},[t._v("项目作者：詹Sir，一名乌黑秀发的九零后全栈(Java)程序员，坐标杭州")]),i("v-uni-view",[i("v-uni-text",{staticClass:"text-bold"},[t._v("想学习？有需求？有项目？")])],1)],1)],1)],1)},o=[]},ac90:function(t,e,i){var a=i("32ad");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("861eccda",a,!0,{sourceMap:!1,shadowMode:!1})},ada4:function(t,e,i){var a=i("7519");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("3fe92267",a,!0,{sourceMap:!1,shadowMode:!1})},b201:function(t,e,i){"use strict";var a=i("ac90"),n=i.n(a);n.a},db3b:function(t,e,i){"use strict";i.r(e);var a=i("4d17"),n=i("e25a");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("b201");var r,d=i("f0c5"),u=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"84b57b3e",null,!1,a["a"],r);e["default"]=u.exports},e25a:function(t,e,i){"use strict";i.r(e);var a=i("10a2"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},eaf2:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("db3b")),o={components:{LikeFx:n.default},data:function(){return{animation_timer:null,width:375,height:1920}},onLoad:function(){this._startLikeAnimation()},onUnload:function(){clearTimeout(this.animation_timer)},methods:{_startLikeAnimation:function(){var t=this;this.animation_timer=setInterval((function(){t.$refs.likeFx.likeClick()}),300)}}};e.default=o}}]);