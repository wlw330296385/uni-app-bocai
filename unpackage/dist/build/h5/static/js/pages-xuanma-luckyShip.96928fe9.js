(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xuanma-luckyShip"],{"170bd":function(t,n,e){"use strict";e.r(n);var i=e("e9bd"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=r.a},"1f36":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var r=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"image-list uni-flex uni-row my-image-list"},t._l(t.shiplist,(function(n,r){return i("v-uni-view",{key:r,staticClass:"image-content flex-item my-image",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.choose_ship(n)}}},[i("v-uni-image",{staticStyle:{width:"100upx",height:"100upx"},style:{background:t.randomcolor(r)},attrs:{mode:"aspectFit",src:e("f695")},on:{error:function(n){arguments[0]=n=t.$handleEvent(n)}}}),i("v-uni-view",{staticClass:"image-title"},[t._v(t._s(n))])],1)})),1),i("v-uni-view",{staticClass:"line"})],1)},a=[]},"40cd":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 选码圈圈格式 */\r\n/* 选项文字格式 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 弹框间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-image[data-v-54c5afc2]{will-change:transform}.my-image-list[data-v-54c5afc2]{width:100%;margin:auto;-webkit-flex-wrap:wrap;flex-wrap:wrap;text-align:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background-color:#f4f4f5}.my-image-list .my-image[data-v-54c5afc2]{margin:%?20?% %?25?%}.line[data-v-54c5afc2]{border-bottom:%?5?% #909399 solid}',""]),t.exports=n},"513d":function(t,n,e){"use strict";var i=e("c824"),r=e.n(i);r.a},"68a7":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("lucky-ship",{attrs:{shiplist:t.shiplist}})],1)},a=[]},"863c":function(t,n,e){"use strict";e.r(n);var i=e("68a7"),r=e("db26");for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);var c,u=e("f0c5"),s=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"15d7372c",null,!1,i["a"],c);n["default"]=s.exports},c824:function(t,n,e){var i=e("40cd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("4f06").default;r("3a201a6e",i,!0,{sourceMap:!1,shadowMode:!1})},db26:function(t,n,e){"use strict";e.r(n);var i=e("e696"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=r.a},e696:function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e("fc08")),a={components:{luckyShip:r.default},data:function(){return{shiplist:["01","02","03","04","05","06","07","08","09","10"]}},methods:{}};n.default=a},e9bd:function(t,n,e){"use strict";(function(t){e("c975"),e("d3b7"),e("e25e"),e("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={props:["shiplist"],data:function(){return{choose_list:[]}},methods:{choose_ship:function(n){this.choose_list.indexOf(n)<0&&this.choose_list.push(n),t("log",this.choose_list," at components/myUnits/lucky-ship.vue:34")}},computed:{randomcolor:function(t){return function(t){for(var n="#",e=0;e<6;e++)n+=parseInt(16*Math.random()).toString(16);return n}}}};n.default=i}).call(this,e("0de9")["log"])},f695:function(t,n,e){t.exports=e.p+"static/img/luckyShip.f5214c39.png"},fc08:function(t,n,e){"use strict";e.r(n);var i=e("1f36"),r=e("170bd");for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("513d");var c,u=e("f0c5"),s=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"54c5afc2",null,!1,i["a"],c);n["default"]=s.exports}}]);