(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{337:function(t,e,n){"use strict";(function(t){n(137);e.a={name:"ToutiaoVideoDownloader",head:function(){return this.$store.state.currentTool.head},data:function(){return{videoLink:"",data:"",requestIn:!1}},methods:{download:function(){var t=this;if(this.requestIn)return!1;var e=/(https?:\/\/)(m\.toutiaoimg\.cn)(\/group\/)([0-9]+)\/?|(https?:\/\/)(www\.365yg\.com)\/(\w+)|(https?:\/\/)(m\.toutiaoimg\.cn)\/(\w+)/;e.test(this.videoLink)?(this.requestIn=!0,this.data="",this.$axios.post("/toutiao_video_downloader",{url:this.videoLink.match(e)[0]}).then(function(e){t.requestIn=!1,t.data=e.data.data}).catch(function(e){t.requestIn=!1,t.$modal.show("dialog",{title:"下载失败",text:"ERROR: ".concat(e)})})):this.$modal.show("dialog",{title:"下载失败",text:"ERROR: 请输入正确的链接"})},deBase64:function(e){return t.from(e,"base64")}}}}).call(this,n(138).Buffer)},858:function(t,e,n){"use strict";n.r(e);var o=n(337).a,r=n(2),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twitter_video_downloader"},[n("nya-container",{attrs:{title:"今日头条视频下载"}},[n("div",{staticClass:"inputbtn"},[n("nya-input",{attrs:{autofocus:"",label:"输入链接开始下载",placeholder:"http://www.365yg.com/a6660790867638373640",autocomplete:"off"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.download(e)}},model:{value:t.videoLink,callback:function(e){t.videoLink="string"==typeof e?e.trim():e},expression:"videoLink"}}),t._v(" "),n("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.download}},[t._v("\n                "+t._s(t.requestIn?"获取中":"开始获取")+"\n            ")])],1)]),t._v(" "),n("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.data.length,expression:"data.length"}],attrs:{title:"获取成功"}},t._l(t.data,function(e,o){return n("div",{key:o},[n("p",[n("span",[t._v(t._s(e.definition)+"：")]),t._v(" "),n("a",{attrs:{href:t.deBase64(e.main_url),target:"_blank",title:"右键另存为下载或长按保存",rel:"noopener noreferrer"}},[t._v("\n                    "+t._s(t.deBase64(e.main_url))+"\n                ")])])])}),0)],1)},[],!1,null,null,null);e.default=component.exports}}]);