(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{257:function(t,e){t.exports=function(t,e){var a=document.createElement("a");a.href=t,a.download=e,a.click()}},258:function(t,e,n){!function(e){"use strict";var n=function(){return{escape:function(t){return t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:e,mimeType:function(t){var n=e(t).toLowerCase();return(r="application/font-woff",{woff:r,woff2:r,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[n]||"";var r},dataAsUrl:function(content,t){return"data:"+t+";base64,"+content},isDataUrl:function(t){return-1!==t.search(/^(data:)/)},canvasToBlob:function(canvas){return canvas.toBlob?new Promise(function(t){canvas.toBlob(t)}):function(canvas){return new Promise(function(t){for(var e=window.atob(canvas.toDataURL().split(",")[1]),n=e.length,r=new Uint8Array(n),i=0;i<n;i++)r[i]=e.charCodeAt(i);t(new Blob([r],{type:"image/png"}))})}(canvas)},resolveUrl:function(t,e){var n=document.implementation.createHTMLDocument(),base=n.createElement("base");n.head.appendChild(base);var a=n.createElement("a");return n.body.appendChild(a),base.href=e,a.href=t,a.href},getAndEncode:function(t){var e=3e4;f.impl.options.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime());return new Promise(function(n){var r,o=new XMLHttpRequest;if(o.onreadystatechange=function(){if(4!==o.readyState)return;if(200!==o.status)return void(r?n(r):l("cannot fetch resource: "+t+", status: "+o.status));var e=new FileReader;e.onloadend=function(){var content=e.result.split(/,/)[1];n(content)},e.readAsDataURL(o.response)},o.ontimeout=function(){r?n(r):l("timeout of "+e+"ms occured while fetching resource: "+t)},o.responseType="blob",o.timeout=e,o.open("GET",t,!0),o.send(),f.impl.options.imagePlaceholder){var c=f.impl.options.imagePlaceholder.split(/,/);c&&c[1]&&(r=c[1])}function l(t){console.error(t),n("")}})},uid:(t=0,function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+t++}),delay:function(t){return function(e){return new Promise(function(n){setTimeout(function(){n(e)},t)})}},asArray:function(t){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e},escapeXhtml:function(t){return t.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(t){return new Promise(function(e,n){var image=new Image;image.onload=function(){e(image)},image.onerror=n,image.src=t})},width:function(t){var e=n(t,"border-left-width"),r=n(t,"border-right-width");return t.scrollWidth+e+r},height:function(t){var e=n(t,"border-top-width"),r=n(t,"border-bottom-width");return t.scrollHeight+e+r}};var t;function e(t){var e=/\.([^\.\/]*?)$/g.exec(t);return e?e[1]:""}function n(t,e){var n=window.getComputedStyle(t).getPropertyValue(e);return parseFloat(n.replace("px",""))}}(),r=function(){var t=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(t,n,c){return e(t)?Promise.resolve(t).then(r).then(function(e){var r=Promise.resolve(t);return e.forEach(function(t){r=r.then(function(e){return o(e,t,n,c)})}),r}):Promise.resolve(t)},shouldProcess:e,impl:{readUrls:r,inline:o}};function e(e){return-1!==e.search(t)}function r(e){for(var r,o=[];null!==(r=t.exec(e));)o.push(r[1]);return o.filter(function(t){return!n.isDataUrl(t)})}function o(t,e,r,o){return Promise.resolve(e).then(function(t){return r?n.resolveUrl(t,r):t}).then(o||n.getAndEncode).then(function(data){return n.dataAsUrl(data,n.mimeType(e))}).then(function(r){return t.replace(function(t){return new RegExp("(url\\(['\"]?)("+n.escape(t)+")(['\"]?\\))","g")}(e),"$1"+r+"$3")})}}(),o=function(){return{resolveAll:function(){return t(document).then(function(t){return Promise.all(t.map(function(t){return t.resolve()}))}).then(function(t){return t.join("\n")})},impl:{readAll:t}};function t(){return Promise.resolve(n.asArray(document.styleSheets)).then(function(t){var e=[];return t.forEach(function(t){try{n.asArray(t.cssRules||[]).forEach(e.push.bind(e))}catch(e){console.log("Error while reading CSS rules from "+t.href,e.toString())}}),e}).then(function(t){return t.filter(function(t){return t.type===CSSRule.FONT_FACE_RULE}).filter(function(t){return r.shouldProcess(t.style.getPropertyValue("src"))})}).then(function(e){return e.map(t)});function t(t){return{resolve:function(){var e=(t.parentStyleSheet||{}).href;return r.inlineAll(t.cssText,e)},src:function(){return t.style.getPropertyValue("src")}}}}}(),c=function(){return{inlineAll:function e(o){if(!(o instanceof Element))return Promise.resolve(o);return function(t){var e=t.style.getPropertyValue("background");return e?r.inlineAll(e).then(function(e){t.style.setProperty("background",e,t.style.getPropertyPriority("background"))}).then(function(){return t}):Promise.resolve(t)}(o).then(function(){return o instanceof HTMLImageElement?t(o).inline():Promise.all(n.asArray(o.childNodes).map(function(t){return e(t)}))})},impl:{newImage:t}};function t(element){return{inline:function(t){return n.isDataUrl(element.src)?Promise.resolve():Promise.resolve(element.src).then(t||n.getAndEncode).then(function(data){return n.dataAsUrl(data,n.mimeType(element.src))}).then(function(t){return new Promise(function(e,n){element.onload=e,element.onerror=n,element.src=t})})}}}}(),l={imagePlaceholder:void 0,cacheBust:!1},f={toSvg:h,toPng:function(t,e){return d(t,e||{}).then(function(canvas){return canvas.toDataURL()})},toJpeg:function(t,e){return d(t,e=e||{}).then(function(canvas){return canvas.toDataURL("image/jpeg",e.quality||1)})},toBlob:function(t,e){return d(t,e||{}).then(n.canvasToBlob)},toPixelData:function(t,e){return d(t,e||{}).then(function(canvas){return canvas.getContext("2d").getImageData(0,0,n.width(t),n.height(t)).data})},impl:{fontFaces:o,images:c,util:n,inliner:r,options:{}}};function h(t,e){return function(t){void 0===t.imagePlaceholder?f.impl.options.imagePlaceholder=l.imagePlaceholder:f.impl.options.imagePlaceholder=t.imagePlaceholder;void 0===t.cacheBust?f.impl.options.cacheBust=l.cacheBust:f.impl.options.cacheBust=t.cacheBust}(e=e||{}),Promise.resolve(t).then(function(t){return function(t,filter,e){if(!e&&filter&&!filter(t))return Promise.resolve();return Promise.resolve(t).then(function(t){return t instanceof HTMLCanvasElement?n.makeImage(t.toDataURL()):t.cloneNode(!1)}).then(function(e){return function(t,e,filter){var r=t.childNodes;return 0===r.length?Promise.resolve(e):function(t,e,filter){var n=Promise.resolve();return e.forEach(function(e){n=n.then(function(){return m(e,filter)}).then(function(e){e&&t.appendChild(e)})}),n}(e,n.asArray(r),filter).then(function(){return e})}(t,e,filter)}).then(function(e){return function(t,e){return e instanceof Element?Promise.resolve().then(function(){var source,r;source=window.getComputedStyle(t),r=e.style,source.cssText?r.cssText=source.cssText:function(source,t){n.asArray(source).forEach(function(e){t.setProperty(e,source.getPropertyValue(e),source.getPropertyPriority(e))})}(source,r)}).then(function(){[":before",":after"].forEach(function(element){!function(element){var style=window.getComputedStyle(t,element),content=style.getPropertyValue("content");if(""!==content&&"none"!==content){var r=n.uid();e.className=e.className+" "+r;var o=document.createElement("style");o.appendChild(function(t,element,style){var e="."+t+":"+element,r=style.cssText?function(style){var content=style.getPropertyValue("content");return style.cssText+" content: "+content+";"}(style):function(style){return n.asArray(style).map(function(t){return t+": "+style.getPropertyValue(t)+(style.getPropertyPriority(t)?" !important":"")}).join("; ")+";"}(style);return document.createTextNode(e+"{"+r+"}")}(r,element,style)),e.appendChild(o)}}(element)})}).then(function(){t instanceof HTMLTextAreaElement&&(e.innerHTML=t.value),t instanceof HTMLInputElement&&e.setAttribute("value",t.value)}).then(function(){e instanceof SVGElement&&(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e instanceof SVGRectElement&&["width","height"].forEach(function(t){var n=e.getAttribute(t);n&&e.style.setProperty(t,n)}))}).then(function(){return e}):e}(t,e)})}(t,e.filter,!0)}).then(v).then(y).then(function(t){e.bgcolor&&(t.style.backgroundColor=e.bgcolor);e.width&&(t.style.width=e.width+"px");e.height&&(t.style.height=e.height+"px");e.style&&Object.keys(e.style).forEach(function(n){t.style[n]=e.style[n]});return t}).then(function(r){return function(t,e,r){return Promise.resolve(t).then(function(t){return t.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(t)}).then(n.escapeXhtml).then(function(t){return'<foreignObject x="0" y="0" width="100%" height="100%">'+t+"</foreignObject>"}).then(function(foreignObject){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+r+'">'+foreignObject+"</svg>"}).then(function(svg){return"data:image/svg+xml;charset=utf-8,"+svg})}(r,e.width||n.width(t),e.height||n.height(t))})}function d(t,e){return h(t,e).then(n.makeImage).then(n.delay(100)).then(function(image){var canvas=function(t){var canvas=document.createElement("canvas");if(canvas.width=e.width||n.width(t),canvas.height=e.height||n.height(t),e.bgcolor){var r=canvas.getContext("2d");r.fillStyle=e.bgcolor,r.fillRect(0,0,canvas.width,canvas.height)}return canvas}(t);return canvas.getContext("2d").drawImage(image,0,0),canvas})}function m(t,filter,e){if(!e&&filter&&!filter(t))return Promise.resolve();return Promise.resolve(t).then(r).then(function(e){return o(t,e,filter)}).then(function(e){return c(t,e)});function r(t){return t instanceof HTMLCanvasElement?n.makeImage(t.toDataURL()):t.cloneNode(!1)}function o(t,e,filter){var r=t.childNodes;return 0===r.length?Promise.resolve(e):function(t,e,filter){var n=Promise.resolve();return e.forEach(function(e){n=n.then(function(){return m(e,filter)}).then(function(e){e&&t.appendChild(e)})}),n}(e,n.asArray(r),filter).then(function(){return e});function o(t,e,filter){var n=Promise.resolve();return e.forEach(function(e){n=n.then(function(){return m(e,filter)}).then(function(e){e&&t.appendChild(e)})}),n}}function c(t,e){return e instanceof Element?Promise.resolve().then(function(){!function(source,t){source.cssText?t.cssText=source.cssText:function(source,t){n.asArray(source).forEach(function(e){t.setProperty(e,source.getPropertyValue(e),source.getPropertyPriority(e))})}(source,t)}(window.getComputedStyle(t),e.style)}).then(function(){[":before",":after"].forEach(function(element){!function(element){var style=window.getComputedStyle(t,element),content=style.getPropertyValue("content");if(""===content||"none"===content)return;var r=n.uid();e.className=e.className+" "+r;var o=document.createElement("style");o.appendChild(function(t,element,style){var e="."+t+":"+element,r=style.cssText?function(style){var content=style.getPropertyValue("content");return style.cssText+" content: "+content+";"}(style):function(style){return n.asArray(style).map(function(t){return t+": "+style.getPropertyValue(t)+(style.getPropertyPriority(t)?" !important":"")}).join("; ")+";"}(style);return document.createTextNode(e+"{"+r+"}")}(r,element,style)),e.appendChild(o)}(element)})}).then(function(){t instanceof HTMLTextAreaElement&&(e.innerHTML=t.value);t instanceof HTMLInputElement&&e.setAttribute("value",t.value)}).then(function(){if(!(e instanceof SVGElement))return;if(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),!(e instanceof SVGRectElement))return;["width","height"].forEach(function(t){var n=e.getAttribute(t);n&&e.style.setProperty(t,n)})}).then(function(){return e}):e;function r(){function r(source,t){if(source.cssText)t.cssText=source.cssText;else e(source,t);function e(source,t){n.asArray(source).forEach(function(e){t.setProperty(e,source.getPropertyValue(e),source.getPropertyPriority(e))})}}r(window.getComputedStyle(t),e.style)}function o(){function r(element){var style=window.getComputedStyle(t,element),content=style.getPropertyValue("content");if(content===""||content==="none")return;var r=n.uid();e.className=e.className+" "+r;var o=document.createElement("style");function c(t,element,style){var e="."+t+":"+element,r=style.cssText?o(style):c(style);return document.createTextNode(e+"{"+r+"}");function o(style){var content=style.getPropertyValue("content");return style.cssText+" content: "+content+";"}function c(style){return n.asArray(style).map(t).join("; ")+";";function t(t){return t+": "+style.getPropertyValue(t)+(style.getPropertyPriority(t)?" !important":"")}}}o.appendChild(c(r,element,style)),e.appendChild(o)}[":before",":after"].forEach(function(element){r(element)})}function c(){if(t instanceof HTMLTextAreaElement)e.innerHTML=t.value;if(t instanceof HTMLInputElement)e.setAttribute("value",t.value)}function l(){if(!(e instanceof SVGElement))return;if(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),!(e instanceof SVGRectElement))return;["width","height"].forEach(function(t){var n=e.getAttribute(t);if(!n)return;e.style.setProperty(t,n)})}}}function v(t){return o.resolveAll().then(function(e){var n=document.createElement("style");return t.appendChild(n),n.appendChild(document.createTextNode(e)),t})}function y(t){return c.inlineAll(t).then(function(){return t})}t.exports=f}()},267:function(t,e,n){var r=n(8),o=n(10),c=n(24),l=/"/g,f=function(t,e,n,r){var o=String(c(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+String(r).replace(l,"&quot;")+'"'),f+">"+o+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(f),r(r.P+r.F*o(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},291:function(t,e,n){"use strict";n(267)("bold",function(t){return function(){return t(this,"b","","")}})},319:function(t,e,n){var content=n(685);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("b2c9426e",content,!0,{sourceMap:!1})},683:function(t,e,n){t.exports=n.p+"img/9a94915.png"},684:function(t,e,n){"use strict";var r=n(319);n.n(r).a},685:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,"@font-face{font-family:shufa;src:url(https://public.imiku.me/linghe.ttf)}.linghe .nya-checkbox,.linghe .nya-input,.linghe .nya-subtitle{margin-top:.9375rem}.linghe .nya-input{width:100%}.linghe .box{width:600px;width:37.5rem;max-width:100%;position:relative;font-family:shufa}.linghe .box .text{z-index:-1;width:32%;height:56.5%;position:absolute;-webkit-transform:rotate(-3.5deg);transform:rotate(-3.5deg);left:11.5%;top:6.8%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;background-color:#d3dae2;background-repeat:no-repeat;background-size:cover;background-position:50%}.linghe .box img{pointer-events:none;width:100%}",""])},856:function(t,e,n){"use strict";n.r(e);n(291),n(259);var r,o=n(268),c=n(258),l=n.n(c),f=n(257);r=n(260);var h={name:"Linghe",head:function(){return this.$store.state.currentTool.head},components:{"compact-picker":o.Compact,VueSlider:r},data:function(){return{n:"",text:"",fontSize:110,colors:"",color:"#242424",vertical:!0,bold:!0,results:"",file:null,bgimg:"",requestIn:!1}},computed:{style:function(){return{"font-size":"".concat(this.fontSize,"px"),color:this.color,"writing-mode":this.vertical?"vertical-rl":"inherit","font-weight":this.bold?"bold":"inherit","background-image":"url(".concat(this.bgimg,")")}}},mounted:function(){window.innerWidth<650&&(this.fontSize=50)},methods:{create:function(){var t=this;if(this.requestIn)return!1;this.requestIn=!0,this.results="",l.a.toPng(this.$refs.preview).then(function(e){t.results=e,t.requestIn=!1,f(e,"linghe.png")}).catch(function(e){t.requestIn=!1,t.$modal.show("dialog",{title:"生成失败",text:"ERROR: ".concat(e)})})},updateColor:function(t){this.color=t.hex},handleChange:function(t){var e=t.target.files;if(!e.length)return!1;this.file=e[0],this.bgimg=URL.createObjectURL(this.file)}}},d=(n(684),n(2)),component=Object(d.a)(h,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"linghe"},[r("nya-container",{attrs:{title:"令和元号举牌图片生成"}},[r("div",{staticClass:"inputbtn"},[r("nya-input",{attrs:{label:"请输入文字",placeholder:"令和",autocomplete:"off",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.create(e)}},model:{value:t.text,callback:function(e){t.text="string"==typeof e?e.trim():e},expression:"text"}}),t._v(" "),r("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.create}},[t._v("\n                "+t._s(t.requestIn?"生成中":"开始生成")+"\n            ")])],1),t._v(" "),r("nya-input",{staticClass:"upfile",attrs:{type:"file",accept:"image/*",label:"添加背景图片",placeholder:"点击这里上传文件"},on:{change:t.handleChange},model:{value:t.n,callback:function(e){t.n=e},expression:"n"}}),t._v(" "),r("nya-checkbox",{attrs:{label:"使用竖版文字"},model:{value:t.vertical,callback:function(e){t.vertical=e},expression:"vertical"}}),t._v(" "),r("br"),t._v(" "),r("nya-checkbox",{attrs:{label:"加粗"},model:{value:t.bold,callback:function(e){t.bold=e},expression:"bold"}}),t._v(" "),r("div",{staticClass:"nya-subtitle"},[t._v("\n            字体大小\n        ")]),t._v(" "),r("no-ssr",[r("vue-slider",{attrs:{lazy:"",min:30,max:150},model:{value:t.fontSize,callback:function(e){t.fontSize=e},expression:"fontSize"}})],1),t._v(" "),r("div",{staticClass:"nya-subtitle"},[t._v("\n            文字颜色\n        ")]),t._v(" "),r("no-ssr",[r("compact-picker",{on:{input:t.updateColor},model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}})],1),t._v(" "),r("div",{staticClass:"nya-subtitle"},[t._v("\n            预览\n        ")]),t._v(" "),r("div",{ref:"preview",staticClass:"box"},[r("img",{attrs:{src:n(683),alt:"linghe"}}),t._v(" "),r("div",{staticClass:"text",style:t.style},[t._v("\n                "+t._s(t.text)+"\n            ")])])],1),t._v(" "),t.results?r("nya-container",{attrs:{title:"生成成功"}},[r("img",{attrs:{src:t.results,alt:"results"}})]):t._e(),t._v(" "),r("nya-container",{attrs:{title:"Explain"}},[r("ul",{staticClass:"nya-list"},[r("li",[r("b",[t._v("如果你看到的文字不是书法字体，请等待1分钟左右，或更换浏览器使用")])]),t._v(" "),r("li",[t._v("如果生成时间过长或生成失败，请使用其他浏览器，推荐使用 "),r("b",[t._v("Chrome")])])])])],1)},[],!1,null,null,null);e.default=component.exports}}]);