(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{349:function(t,e,n){var content=n(777);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("babb496e",content,!0,{sourceMap:!1})},776:function(t,e,n){"use strict";var o=n(349);n.n(o).a},777:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".youtube_video_downloader .nya-checkbox{margin-top:.9375rem}",""])},837:function(t,e,n){"use strict";n.r(e);n(137),n(91);var o={name:"YoutubeVideoDownloader",head:function(){return this.$store.state.currentTool.head},data:function(){return{youtubeLink:"",requestIn:!1,tags:{}}},computed:{handleVideoType:function(){return function(t){return 0===t.indexOf("audio")?"音频":0===t.indexOf("video")?"视频":""}},handleFormat:function(){return function(t){return t.match(/(video|audio)\/\w+/)[0].split("/")[1]}}},methods:{getTags:function(){var t=this;if(this.requestIn)return!1;/(https?:\/\/)(m\.)?(www\.)?(youtube\.com|youtu\.be)\//.test(this.youtubeLink)?(this.requestIn=!0,this.tags={},this.$axios.post("/youtube_video_downloader",{url:this.youtubeLink}).then(function(e){t.requestIn=!1,t.tags=e.data.data}).catch(function(e){t.requestIn=!1,t.$modal.show("dialog",{title:"获取失败",text:"ERROR: ".concat(e)})})):this.$modal.show("dialog",{title:"获取失败",text:"ERROR: 请输入正确的链接"})}}},r=(n(776),n(2)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"youtube_video_downloader"},[n("nya-container",{attrs:{title:"YouTube 视频下载"}},[n("div",{staticClass:"inputbtn"},[n("nya-input",{attrs:{label:"输入链接开始下载",placeholder:"https://www.youtube.com/watch?v=BEULybZnLO8",autocomplete:"off",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getTags(e)}},model:{value:t.youtubeLink,callback:function(e){t.youtubeLink="string"==typeof e?e.trim():e},expression:"youtubeLink"}}),t._v(" "),n("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.getTags}},[t._v("\n                "+t._s(t.requestIn?"获取中":"开始获取")+"\n            ")])],1)]),t._v(" "),n("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.tags.title,expression:"tags.title"}],attrs:{title:"获取视频信息成功"}},[n("h2",[t._v("标题："+t._s(t.tags.title))]),t._v(" "),n("table",{staticClass:"nya-table",staticStyle:{width:"100%"}},[n("thead",[n("tr",[n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("格式")]),t._v(" "),n("th",[t._v("分辨率")]),t._v(" "),n("th",[t._v("操作")])])]),t._v(" "),n("tbody",t._l(t.tags.videoList,function(e,o){return n("tr",{key:o},[n("td",[t._v("\n                        "+t._s(t.handleVideoType(e.type))+"\n                    ")]),t._v(" "),n("td",[t._v("\n                        "+t._s(t.handleFormat(e.type))+"\n                    ")]),t._v(" "),n("td",[e.size?[t._v("\n                            "+t._s(e.size)+"\n                        ")]:[t._v("\n                            "+t._s(e.resolution?e.resolution:e.audio_sample_rate/1e3+" kHz")+"\n                        ")]],2),t._v(" "),n("td",[n("a",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                            下载\n                        ")])])])}),0)])]),t._v(" "),n("nya-container",{attrs:{title:"Explain"}},[n("ul",{staticClass:"nya-list"},[n("li",[n("b",[t._v("地区限制和版权视频将无法下载")])]),t._v(" "),n("li",[t._v("本站不提供音视频合并服务，请自行合并转换")])])])],1)},[],!1,null,null,null);e.default=component.exports}}]);