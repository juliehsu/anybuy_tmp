/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
(function(){var e=function(e,t){function c(){var e=arguments,t=this.getContentElement("advanced","txtdlgGenStyle");t&&t.commit.apply(t,e),this.foreach(function(t){t.commit&&t.id!="txtdlgGenStyle"&&t.commit.apply(t,e)})}function p(e){if(h)return;h=1;var t=this.getDialog(),r=t.imageElement;if(r){this.commit(n,r),e=[].concat(e);var i=e.length,s;for(var o=0;o<i;o++)s=t.getContentElement.apply(t,e[o].split(":")),s&&s.setup(n,r)}h=0}var n=1,r=2,i=4,s=8,o=/^\s*(\d+)((px)|\%)?\s*$/i,u=/(^\s*(\d+)((px)|\%)?\s*$)|^$/i,a=/^\d+px$/,f=function(){var e=this.getValue(),t=this.getDialog(),n=e.match(o);n&&(n[2]=="%"&&d(t,!1),e=n[1]);if(t.lockRatio){var r=t.originalElement;r.getCustomData("isReady")=="true"&&(this.id=="txtHeight"?(e&&e!="0"&&(e=Math.round(r.$.width*(e/r.$.height))),isNaN(e)||t.setValueOf("info","txtWidth",e)):(e&&e!="0"&&(e=Math.round(r.$.height*(e/r.$.width))),isNaN(e)||t.setValueOf("info","txtHeight",e)))}l(t)},l=function(e){return!e.originalElement||!e.preview?1:(e.commitContent(i,e.preview),0)},h,d=function(e,t){if(!e.getContentElement("info","ratioLock"))return null;var n=e.originalElement;if(!n)return null;if(t=="check"){if(!e.userlockRatio&&n.getCustomData("isReady")=="true"){var r=e.getValueOf("info","txtWidth"),i=e.getValueOf("info","txtHeight"),s=n.$.width*1e3/n.$.height,o=r*1e3/i;e.lockRatio=!1,!r&&!i?e.lockRatio=!0:!isNaN(s)&&!isNaN(o)&&Math.round(s)==Math.round(o)&&(e.lockRatio=!0)}}else t!=undefined?e.lockRatio=t:(e.userlockRatio=1,e.lockRatio=!e.lockRatio);var u=CKEDITOR.document.getById(E);e.lockRatio?u.removeClass("cke_btn_unlocked"):u.addClass("cke_btn_unlocked"),u.setAttribute("aria-checked",e.lockRatio);if(CKEDITOR.env.hc){var a=u.getChild(0);a.setHtml(e.lockRatio?CKEDITOR.env.ie?"■":"▣":CKEDITOR.env.ie?"□":"▢")}return e.lockRatio},v=function(e){var t=e.originalElement;if(t.getCustomData("isReady")=="true"){var n=e.getContentElement("info","txtWidth"),r=e.getContentElement("info","txtHeight");n&&n.setValue(t.$.width),r&&r.setValue(t.$.height)}l(e)},m=function(e,t){function r(e,t){var n=e.match(o);return n?(n[2]=="%"&&(n[1]+="%",d(i,!1)),n[1]):t}if(e!=n)return;var i=this.getDialog(),s="",u=this.id=="txtWidth"?"width":"height",a=t.getAttribute(u);a&&(s=r(a,s)),s=r(t.getStyle(u),s),this.setValue(s)},g,y=function(){var e=this.originalElement;e.setCustomData("isReady","true"),e.removeListener("load",y),e.removeListener("error",b),e.removeListener("abort",b),CKEDITOR.document.getById(x).setStyle("display","none"),this.dontResetSize||v(this),this.firstLoad&&CKEDITOR.tools.setTimeout(function(){d(this,"check")},0,this),this.firstLoad=!1,this.dontResetSize=!1},b=function(){var t=this,n=t.originalElement;n.removeListener("load",y),n.removeListener("error",b),n.removeListener("abort",b);var r=CKEDITOR.getUrl(e.skinPath+"images/noimage.png");t.preview&&t.preview.setAttribute("src",r),CKEDITOR.document.getById(x).setStyle("display","none"),d(t,!1)},w=function(e){return CKEDITOR.tools.getNextId()+"_"+e},E=w("btnLockSizes"),S=w("btnResetSize"),x=w("ImagePreviewLoader"),T=w("previewLink"),N=w("previewImage");return{title:e.lang.image[t=="image"?"title":"titleButton"],minWidth:420,minHeight:360,onShow:function(){var e=this;e.imageElement=!1,e.linkElement=!1,e.imageEditMode=!1,e.linkEditMode=!1,e.lockRatio=!0,e.userlockRatio=0,e.dontResetSize=!1,e.firstLoad=!0,e.addLink=!1;var i=e.getParentEditor(),s=i.getSelection(),o=s&&s.getSelectedElement(),u=o&&o.getAscendant("a");CKEDITOR.document.getById(x).setStyle("display","none"),g=new CKEDITOR.dom.element("img",i.document),e.preview=CKEDITOR.document.getById(N),e.originalElement=i.document.createElement("img"),e.originalElement.setAttribute("alt",""),e.originalElement.setCustomData("isReady","false");if(u){e.linkElement=u,e.linkEditMode=!0;var a=u.getChildren();if(a.count()==1){var f=a.getItem(0).getName();if(f=="img"||f=="input")e.imageElement=a.getItem(0),e.imageElement.getName()=="img"?e.imageEditMode="img":e.imageElement.getName()=="input"&&(e.imageEditMode="input")}t=="image"&&e.setupContent(r,u)}if(o&&o.getName()=="img"&&!o.data("cke-realelement")||o&&o.getName()=="input"&&o.getAttribute("type")=="image")e.imageEditMode=o.getName(),e.imageElement=o;e.imageEditMode?(e.cleanImageElement=e.imageElement,e.imageElement=e.cleanImageElement.clone(!0,!0),e.setupContent(n,e.imageElement)):e.imageElement=i.document.createElement("img"),d(e,!0),CKEDITOR.tools.trim(e.getValueOf("info","txtUrl"))||(e.preview.removeAttribute("src"),e.preview.setStyle("display","none"))},onOk:function(){var i=this;if(i.imageEditMode){var s=i.imageEditMode;t=="image"&&s=="input"&&confirm(e.lang.image.button2Img)?(s="img",i.imageElement=e.document.createElement("img"),i.imageElement.setAttribute("alt",""),e.insertElement(i.imageElement)):t!="image"&&s=="img"&&confirm(e.lang.image.img2Button)?(s="input",i.imageElement=e.document.createElement("input"),i.imageElement.setAttributes({type:"image",alt:""}),e.insertElement(i.imageElement)):(i.imageElement=i.cleanImageElement,delete i.cleanImageElement)}else t=="image"?i.imageElement=e.document.createElement("img"):(i.imageElement=e.document.createElement("input"),i.imageElement.setAttribute("type","image")),i.imageElement.setAttribute("alt","");i.linkEditMode||(i.linkElement=e.document.createElement("a")),i.commitContent(n,i.imageElement),i.commitContent(r,i.linkElement),i.imageElement.getAttribute("style")||i.imageElement.removeAttribute("style"),i.imageEditMode?!i.linkEditMode&&i.addLink?(e.insertElement(i.linkElement),i.imageElement.appendTo(i.linkElement)):i.linkEditMode&&!i.addLink&&(e.getSelection().selectElement(i.linkElement),e.insertElement(i.imageElement)):i.addLink?i.linkEditMode?e.insertElement(i.imageElement):(e.insertElement(i.linkElement),i.linkElement.append(i.imageElement,!1)):e.insertElement(i.imageElement)},onLoad:function(){var e=this;t!="image"&&e.hidePage("Link");var n=e._.element.getDocument();e.getContentElement("info","ratioLock")&&(e.addFocusable(n.getById(S),5),e.addFocusable(n.getById(E),5)),e.commitContent=c},onHide:function(){var e=this;e.preview&&e.commitContent(s,e.preview),e.originalElement&&(e.originalElement.removeListener("load",y),e.originalElement.removeListener("error",b),e.originalElement.removeListener("abort",b),e.originalElement.remove(),e.originalElement=!1),delete e.imageElement},contents:[{id:"info",label:e.lang.image.infoTab,accessKey:"I",elements:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["280px","110px"],align:"right",children:[{id:"txtUrl",type:"text",label:e.lang.common.url,required:!0,onChange:function(){var e=this.getDialog(),t=this.getValue();if(t.length>0){e=this.getDialog();var n=e.originalElement;e.preview.removeStyle("display"),n.setCustomData("isReady","false");var r=CKEDITOR.document.getById(x);r&&r.setStyle("display",""),n.on("load",y,e),n.on("error",b,e),n.on("abort",b,e),n.setAttribute("src",t),g.setAttribute("src",t),e.preview.setAttribute("src",g.$.src),l(e)}else e.preview&&(e.preview.removeAttribute("src"),e.preview.setStyle("display","none"))},setup:function(e,t){if(e==n){var r=t.data("cke-saved-src")||t.getAttribute("src"),i=this;this.getDialog().dontResetSize=!0,i.setValue(r),i.setInitValue()}},commit:function(e,t){var r=this;e==n&&(r.getValue()||r.isChanged())?(t.data("cke-saved-src",r.getValue()),t.setAttribute("src",r.getValue())):e==s&&(t.setAttribute("src",""),t.removeAttribute("src"))},validate:CKEDITOR.dialog.validate.notEmpty(e.lang.image.urlMissing)},{type:"button",id:"browse",style:"display:inline-block;margin-top:10px;",align:"center",label:e.lang.common.browseServer,hidden:!0,filebrowser:"info:txtUrl"}]}]},{id:"txtAlt",type:"text",label:e.lang.image.alt,accessKey:"T","default":"",onChange:function(){l(this.getDialog())},setup:function(e,t){e==n&&this.setValue(t.getAttribute("alt"))},commit:function(e,t){var r=this;e==n?(r.getValue()||r.isChanged())&&t.setAttribute("alt",r.getValue()):e==i?t.setAttribute("alt",r.getValue()):e==s&&t.removeAttribute("alt")}},{type:"hbox",children:[{id:"basic",type:"vbox",children:[{type:"hbox",widths:["50%","50%"],children:[{type:"vbox",padding:1,children:[{type:"text",width:"40px",id:"txtWidth",label:e.lang.common.width,onKeyUp:f,onChange:function(){p.call(this,"advanced:txtdlgGenStyle")},validate:function(){var t=this.getValue().match(u),n=!!t&&parseInt(t[1],10)!==0;return n||alert(e.lang.common.invalidWidth),n},setup:m,commit:function(e,t,r){var u=this.getValue();if(e==n)u?t.setStyle("width",CKEDITOR.tools.cssLength(u)):t.removeStyle("width"),!r&&t.removeAttribute("width");else if(e==i){var a=u.match(o);if(!a){var f=this.getDialog().originalElement;f.getCustomData("isReady")=="true"&&t.setStyle("width",f.$.width+"px")}else t.setStyle("width",CKEDITOR.tools.cssLength(u))}else e==s&&(t.removeAttribute("width"),t.removeStyle("width"))}},{type:"text",id:"txtHeight",width:"40px",label:e.lang.common.height,onKeyUp:f,onChange:function(){p.call(this,"advanced:txtdlgGenStyle")},validate:function(){var t=this.getValue().match(u),n=!!t&&parseInt(t[1],10)!==0;return n||alert(e.lang.common.invalidHeight),n},setup:m,commit:function(e,t,r){var u=this.getValue();if(e==n)u?t.setStyle("height",CKEDITOR.tools.cssLength(u)):t.removeStyle("height"),!r&&t.removeAttribute("height");else if(e==i){var a=u.match(o);if(!a){var f=this.getDialog().originalElement;f.getCustomData("isReady")=="true"&&t.setStyle("height",f.$.height+"px")}else t.setStyle("height",CKEDITOR.tools.cssLength(u))}else e==s&&(t.removeAttribute("height"),t.removeStyle("height"))}}]},{id:"ratioLock",type:"html",style:"margin-top:30px;width:40px;height:40px;",onLoad:function(){var e=CKEDITOR.document.getById(S),t=CKEDITOR.document.getById(E);e&&(e.on("click",function(e){v(this),e.data&&e.data.preventDefault()},this.getDialog()),e.on("mouseover",function(){this.addClass("cke_btn_over")},e),e.on("mouseout",function(){this.removeClass("cke_btn_over")},e)),t&&(t.on("click",function(e){var t=this,n=d(t),r=t.originalElement,i=t.getValueOf("info","txtWidth");if(r.getCustomData("isReady")=="true"&&i){var s=r.$.height/r.$.width*i;isNaN(s)||(t.setValueOf("info","txtHeight",Math.round(s)),l(t))}e.data&&e.data.preventDefault()},this.getDialog()),t.on("mouseover",function(){this.addClass("cke_btn_over")},t),t.on("mouseout",function(){this.removeClass("cke_btn_over")},t))},html:'<div><a href="javascript:void(0)" tabindex="-1" title="'+e.lang.image.lockRatio+'" class="cke_btn_locked" id="'+E+'" role="checkbox"><span class="cke_icon"></span><span class="cke_label">'+e.lang.image.lockRatio+"</span></a>"+'<a href="javascript:void(0)" tabindex="-1" title="'+e.lang.image.resetSize+'" class="cke_btn_reset" id="'+S+'" role="button"><span class="cke_label">'+e.lang.image.resetSize+"</span></a>"+"</div>"}]},{type:"vbox",padding:1,children:[{type:"text",id:"txtBorder",width:"60px",label:e.lang.image.border,"default":"",onKeyUp:function(){l(this.getDialog())},onChange:function(){p.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(e.lang.image.validateBorder),setup:function(e,t){if(e==n){var r,i=t.getStyle("border-width");i=i&&i.match(/^(\d+px)(?: \1 \1 \1)?$/),r=i&&parseInt(i[1],10),isNaN(parseInt(r,10))&&(r=t.getAttribute("border")),this.setValue(r)}},commit:function(e,t,r){var o=parseInt(this.getValue(),10);e==n||e==i?(isNaN(o)?!o&&this.isChanged()&&(t.removeStyle("border-width"),t.removeStyle("border-style"),t.removeStyle("border-color")):(t.setStyle("border-width",CKEDITOR.tools.cssLength(o)),t.setStyle("border-style","solid")),!r&&e==n&&t.removeAttribute("border")):e==s&&(t.removeAttribute("border"),t.removeStyle("border-width"),t.removeStyle("border-style"),t.removeStyle("border-color"))}},{type:"text",id:"txtHSpace",width:"60px",label:e.lang.image.hSpace,"default":"",onKeyUp:function(){l(this.getDialog())},onChange:function(){p.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(e.lang.image.validateHSpace),setup:function(e,t){if(e==n){var r,i,s,o=t.getStyle("margin-left"),u=t.getStyle("margin-right");o=o&&o.match(a),u=u&&u.match(a),i=parseInt(o,10),s=parseInt(u,10),r=i==s&&i,isNaN(parseInt(r,10))&&(r=t.getAttribute("hspace")),this.setValue(r)}},commit:function(e,t,r){var o=parseInt(this.getValue(),10);e==n||e==i?(isNaN(o)?!o&&this.isChanged()&&(t.removeStyle("margin-left"),t.removeStyle("margin-right")):(t.setStyle("margin-left",CKEDITOR.tools.cssLength(o)),t.setStyle("margin-right",CKEDITOR.tools.cssLength(o))),!r&&e==n&&t.removeAttribute("hspace")):e==s&&(t.removeAttribute("hspace"),t.removeStyle("margin-left"),t.removeStyle("margin-right"))}},{type:"text",id:"txtVSpace",width:"60px",label:e.lang.image.vSpace,"default":"",onKeyUp:function(){l(this.getDialog())},onChange:function(){p.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(e.lang.image.validateVSpace),setup:function(e,t){if(e==n){var r,i,s,o=t.getStyle("margin-top"),u=t.getStyle("margin-bottom");o=o&&o.match(a),u=u&&u.match(a),i=parseInt(o,10),s=parseInt(u,10),r=i==s&&i,isNaN(parseInt(r,10))&&(r=t.getAttribute("vspace")),this.setValue(r)}},commit:function(e,t,r){var o=parseInt(this.getValue(),10);e==n||e==i?(isNaN(o)?!o&&this.isChanged()&&(t.removeStyle("margin-top"),t.removeStyle("margin-bottom")):(t.setStyle("margin-top",CKEDITOR.tools.cssLength(o)),t.setStyle("margin-bottom",CKEDITOR.tools.cssLength(o))),!r&&e==n&&t.removeAttribute("vspace")):e==s&&(t.removeAttribute("vspace"),t.removeStyle("margin-top"),t.removeStyle("margin-bottom"))}},{id:"cmbAlign",type:"select",widths:["35%","65%"],style:"width:90px",label:e.lang.common.align,"default":"",items:[[e.lang.common.notSet,""],[e.lang.common.alignLeft,"left"],[e.lang.common.alignRight,"right"]],onChange:function(){l(this.getDialog()),p.call(this,"advanced:txtdlgGenStyle")},setup:function(e,t){if(e==n){var r=t.getStyle("float");switch(r){case"inherit":case"none":r=""}!r&&(r=(t.getAttribute("align")||"").toLowerCase()),this.setValue(r)}},commit:function(e,t,r){var o=this.getValue();if(e==n||e==i){o?t.setStyle("float",o):t.removeStyle("float");if(!r&&e==n){o=(t.getAttribute("align")||"").toLowerCase();switch(o){case"left":case"right":t.removeAttribute("align")}}}else e==s&&t.removeStyle("float")}}]}]},{type:"vbox",height:"250px",children:[{type:"html",id:"htmlPreview",style:"width:95%;",html:"<div>"+CKEDITOR.tools.htmlEncode(e.lang.common.preview)+"<br>"+'<div id="'+x+'" class="ImagePreviewLoader" style="display:none"><div class="loading">&nbsp;</div></div>'+'<div class="ImagePreviewBox"><table><tr><td>'+'<a href="javascript:void(0)" target="_blank" onclick="return false;" id="'+T+'">'+'<img id="'+N+'" alt="" /></a>'+(e.config.image_previewText||"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas feugiat consequat diam. Maecenas metus. Vivamus diam purus, cursus a, commodo non, facilisis vitae, nulla. Aenean dictum lacinia tortor. Nunc iaculis, nibh non iaculis aliquam, orci felis euismod neque, sed ornare massa mauris sed velit. Nulla pretium mi et risus. Fusce mi pede, tempor id, cursus ac, ullamcorper nec, enim. Sed tortor. Curabitur molestie. Duis velit augue, condimentum at, ultrices a, luctus ut, orci. Donec pellentesque egestas eros. Integer cursus, augue in cursus faucibus, eros pede bibendum sem, in tempus tellus justo quis ligula. Etiam eget tortor. Vestibulum rutrum, est ut placerat elementum, lectus nisl aliquam velit, tempor aliquam eros nunc nonummy metus. In eros metus, gravida a, gravida sed, lobortis id, turpis. Ut ultrices, ipsum at venenatis fringilla, sem nulla lacinia tellus, eget aliquet turpis mauris non enim. Nam turpis. Suspendisse lacinia. Curabitur ac tortor ut ipsum egestas elementum. Nunc imperdiet gravida mauris.")+"</td></tr></table></div></div>"}]}]}]},{id:"Link",label:e.lang.link.title,padding:0,elements:[{id:"txtUrl",type:"text",label:e.lang.common.url,style:"width: 100%","default":"",setup:function(e,t){if(e==r){var n=t.data("cke-saved-href");n||(n=t.getAttribute("href")),this.setValue(n)}},commit:function(t,n){var i=this;if(t==r)if(i.getValue()||i.isChanged()){var s=decodeURI(i.getValue());n.data("cke-saved-href",s),n.setAttribute("href",s);if(i.getValue()||!e.config.image_removeLinkByEmptyURL)i.getDialog().addLink=!0}}},{type:"button",id:"browse",filebrowser:{action:"Browse",target:"Link:txtUrl",url:e.config.filebrowserImageBrowseLinkUrl},style:"float:right",hidden:!0,label:e.lang.common.browseServer},{id:"cmbTarget",type:"select",label:e.lang.common.target,"default":"",items:[[e.lang.common.notSet,""],[e.lang.common.targetNew,"_blank"],[e.lang.common.targetTop,"_top"],[e.lang.common.targetSelf,"_self"],[e.lang.common.targetParent,"_parent"]],setup:function(e,t){e==r&&this.setValue(t.getAttribute("target")||"")},commit:function(e,t){e==r&&(this.getValue()||this.isChanged())&&t.setAttribute("target",this.getValue())}}]},{id:"Upload",hidden:!0,filebrowser:"uploadButton",label:e.lang.image.upload,elements:[{type:"file",id:"upload",label:e.lang.image.btnUpload,style:"height:40px",size:38},{type:"fileButton",id:"uploadButton",filebrowser:"info:txtUrl",label:e.lang.image.btnUpload,"for":["Upload","upload"]}]},{id:"advanced",label:e.lang.common.advancedTab,elements:[{type:"hbox",widths:["50%","25%","25%"],children:[{type:"text",id:"linkId",label:e.lang.common.id,setup:function(e,t){e==n&&this.setValue(t.getAttribute("id"))},commit:function(e,t){e==n&&(this.getValue()||this.isChanged())&&t.setAttribute("id",this.getValue())}},{id:"cmbLangDir",type:"select",style:"width : 100px;",label:e.lang.common.langDir,"default":"",items:[[e.lang.common.notSet,""],[e.lang.common.langDirLtr,"ltr"],[e.lang.common.langDirRtl,"rtl"]],setup:function(e,t){e==n&&this.setValue(t.getAttribute("dir"))},commit:function(e,t){e==n&&(this.getValue()||this.isChanged())&&t.setAttribute("dir",this.getValue())}},{type:"text",id:"txtLangCode",label:e.lang.common.langCode,"default":"",setup:function(e,t){e==n&&this.setValue(t.getAttribute("lang"))},commit:function(e,t){e==n&&(this.getValue()||this.isChanged())&&t.setAttribute("lang",this.getValue())}}]},{type:"text",id:"txtGenLongDescr",label:e.lang.common.longDescr,setup:function(e,t){e==n&&this.setValue(t.getAttribute("longDesc"))},commit:function(e,t){e==n&&(this.getValue()||this.isChanged())&&t.setAttribute("longDesc",this.getValue())}},{type:"hbox",widths:["50%","50%"],children:[{type:"text",id:"txtGenClass",label:e.lang.common.cssClass,"default":"",setup:function(e,t){e==n&&this.setValue(t.getAttribute("class"))},commit:function(e,t){e==n&&(this.getValue()||this.isChanged())&&t.setAttribute("class",this.getValue())}},{type:"text",id:"txtGenTitle",label:e.lang.common.advisoryTitle,"default":"",onChange:function(){l(this.getDialog())},setup:function(e,t){e==n&&this.setValue(t.getAttribute("title"))},commit:function(e,t){var r=this;e==n?(r.getValue()||r.isChanged())&&t.setAttribute("title",r.getValue()):e==i?t.setAttribute("title",r.getValue()):e==s&&t.removeAttribute("title")}}]},{type:"text",id:"txtdlgGenStyle",label:e.lang.common.cssStyle,validate:CKEDITOR.dialog.validate.inlineStyle(e.lang.common.invalidInlineStyle),"default":"",setup:function(e,t){if(e==n){var r=t.getAttribute("style");!r&&t.$.style.cssText&&(r=t.$.style.cssText),this.setValue(r);var i=t.$.style.height,s=t.$.style.width,u=(i?i:"").match(o),a=(s?s:"").match(o);this.attributesInStyle={height:!!u,width:!!a}}},onChange:function(){p.call(this,["info:cmbFloat","info:cmbAlign","info:txtVSpace","info:txtHSpace","info:txtBorder","info:txtWidth","info:txtHeight"]),l(this)},commit:function(e,t){e==n&&(this.getValue()||this.isChanged())&&t.setAttribute("style",this.getValue())}}]}]}};CKEDITOR.dialog.add("image",function(t){return e(t,"image")}),CKEDITOR.dialog.add("imagebutton",function(t){return e(t,"imagebutton")})})();