(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{806:function(t,n,e){"use strict";e.r(n);var o={name:"Taokouling",head:function(){return this.$store.state.currentTool.head},data:function(){return{taoStr:"",conversionStr:"",requestIn:!1}},methods:{conversion:function(){var t=this;if(this.requestIn)return!1;/￥\w{8,11}￥/.test(this.taoStr)?(this.requestIn=!0,this.$axios.post("/taokouling",{str:this.taoStr}).then(function(n){t.requestIn=!1,t.conversionStr="https://item.taobao.com/item.htm?id=".concat(n.data.data)}).catch(function(n){t.requestIn=!1,t.$modal.show("dialog",{title:"转换失败",text:"ERROR: ".concat(n)})})):this.$modal.show("dialog",{title:"转换失败",text:"ERROR: 请输入正确的淘口令"})}}},r=e(2),component=Object(r.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"taokouling"},[e("nya-container",{attrs:{title:"淘口令转链接"}},[e("div",{staticClass:"inputbtn"},[e("nya-input",{attrs:{autofocus:"",label:"输入淘口令开始转换",placeholder:"￥AAAAAAAAAAA￥",autocomplete:"off"},on:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.conversion(n)}},model:{value:t.taoStr,callback:function(n){t.taoStr="string"==typeof n?n.trim():n},expression:"taoStr"}}),t._v(" "),e("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.conversion}},[t._v("\n                "+t._s(t.requestIn?"获取中":"开始获取")+"\n            ")])],1)]),t._v(" "),e("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.conversionStr,expression:"conversionStr"}],attrs:{title:"转换成功"}},[e("a",{attrs:{href:t.conversionStr,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(t.conversionStr)+"\n        ")])]),t._v(" "),e("nya-container",{attrs:{title:"Explain"}},[e("ul",{staticClass:"nya-list"},[e("li",[t._v("使用官方接口，不包含任何返利链接")])])])],1)},[],!1,null,null,null);n.default=component.exports}}]);