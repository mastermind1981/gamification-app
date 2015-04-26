var requirejs,require,define;!function(e){function t(e,t){return v.call(e,t)}function r(e,t){var r,n,i,o,a,s,u,l,c,f,p,h=t&&t.split("/"),g=d.map,m=g&&g["*"]||{};if(e&&"."===e.charAt(0))if(t){for(h=h.slice(0,h.length-1),e=e.split("/"),a=e.length-1,d.nodeIdCompat&&y.test(e[a])&&(e[a]=e[a].replace(y,"")),e=h.concat(e),c=0;c<e.length;c+=1)if(p=e[c],"."===p)e.splice(c,1),c-=1;else if(".."===p){if(1===c&&(".."===e[2]||".."===e[0]))break;c>0&&(e.splice(c-1,2),c-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((h||m)&&g){for(r=e.split("/"),c=r.length;c>0;c-=1){if(n=r.slice(0,c).join("/"),h)for(f=h.length;f>0;f-=1)if(i=g[h.slice(0,f).join("/")],i&&(i=i[n])){o=i,s=c;break}if(o)break;!u&&m&&m[n]&&(u=m[n],l=c)}!o&&u&&(o=u,s=l),o&&(r.splice(0,s,o),e=r.join("/"))}return e}function n(t,r){return function(){return c.apply(e,w.call(arguments,0).concat([t,r]))}}function i(e){return function(t){return r(t,e)}}function o(e){return function(t){h[e]=t}}function a(r){if(t(g,r)){var n=g[r];delete g[r],m[r]=!0,l.apply(e,n)}if(!t(h,r)&&!t(m,r))throw new Error("No "+r);return h[r]}function s(e){var t,r=e?e.indexOf("!"):-1;return r>-1&&(t=e.substring(0,r),e=e.substring(r+1,e.length)),[t,e]}function u(e){return function(){return d&&d.config&&d.config[e]||{}}}var l,c,f,p,h={},g={},d={},m={},v=Object.prototype.hasOwnProperty,w=[].slice,y=/\.js$/;f=function(e,t){var n,o=s(e),u=o[0];return e=o[1],u&&(u=r(u,t),n=a(u)),u?e=n&&n.normalize?n.normalize(e,i(t)):r(e,t):(e=r(e,t),o=s(e),u=o[0],e=o[1],u&&(n=a(u))),{f:u?u+"!"+e:e,n:e,pr:u,p:n}},p={require:function(e){return n(e)},exports:function(e){var t=h[e];return"undefined"!=typeof t?t:h[e]={}},module:function(e){return{id:e,uri:"",exports:h[e],config:u(e)}}},l=function(r,i,s,u){var l,c,d,v,w,y,b=[],x=typeof s;if(u=u||r,"undefined"===x||"function"===x){for(i=!i.length&&s.length?["require","exports","module"]:i,w=0;w<i.length;w+=1)if(v=f(i[w],u),c=v.f,"require"===c)b[w]=p.require(r);else if("exports"===c)b[w]=p.exports(r),y=!0;else if("module"===c)l=b[w]=p.module(r);else if(t(h,c)||t(g,c)||t(m,c))b[w]=a(c);else{if(!v.p)throw new Error(r+" missing "+c);v.p.load(v.n,n(u,!0),o(c),{}),b[w]=h[c]}d=s?s.apply(h[r],b):void 0,r&&(l&&l.exports!==e&&l.exports!==h[r]?h[r]=l.exports:d===e&&y||(h[r]=d))}else r&&(h[r]=s)},requirejs=require=c=function(t,r,n,i,o){if("string"==typeof t)return p[t]?p[t](r):a(f(t,r).f);if(!t.splice){if(d=t,d.deps&&c(d.deps,d.callback),!r)return;r.splice?(t=r,r=n,n=null):t=e}return r=r||function(){},"function"==typeof n&&(n=i,i=o),i?l(e,t,r,n):setTimeout(function(){l(e,t,r,n)},4),c},c.config=function(e){return c(e)},requirejs._defined=h,define=function(e,r,n){r.splice||(n=r,r=[]),t(h,e)||t(g,e)||(g[e]=[e,r,n])},define.amd={jQuery:!0}}(),define("libs/almond.js",function(){}),function(e){var t=[],r={},n="routie",i=e[n],o=function(e,t){this.name=t,this.path=e,this.keys=[],this.fns=[],this.params={},this.regex=a(this.path,this.keys,!1,!1)};o.prototype.addHandler=function(e){this.fns.push(e)},o.prototype.removeHandler=function(e){for(var t=0,r=this.fns.length;r>t;t++){var n=this.fns[t];if(e==n)return void this.fns.splice(t,1)}},o.prototype.run=function(e){for(var t=0,r=this.fns.length;r>t;t++)this.fns[t].apply(this,e)},o.prototype.match=function(e,t){var r=this.regex.exec(e);if(!r)return!1;for(var n=1,i=r.length;i>n;++n){var o=this.keys[n-1],a="string"==typeof r[n]?decodeURIComponent(r[n]):r[n];o&&(this.params[o.name]=a),t.push(a)}return!0},o.prototype.toURL=function(e){var t=this.path;for(var r in e)t=t.replace("/:"+r,"/"+e[r]);if(t=t.replace(/\/:.*\?/g,"/").replace(/\?/g,""),-1!=t.indexOf(":"))throw Error("missing parameters for url: "+t);return t};var a=function(e,t,r,n){return e instanceof RegExp?e:(e instanceof Array&&(e="("+e.join("|")+")"),e=e.concat(n?"":"/?").replace(/\/\(/g,"(?:/").replace(/\+/g,"__plus__").replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g,function(e,r,n,i,o,a){return t.push({name:i,optional:!!a}),r=r||"",""+(a?"":r)+"(?:"+(a?r:"")+(n||"")+(o||n&&"([^/.]+?)"||"([^/]+?)")+")"+(a||"")}).replace(/([\/.])/g,"\\$1").replace(/__plus__/g,"(.+)").replace(/\*/g,"(.*)"),RegExp("^"+e+"$",r?"":"i"))},s=function(e,n){var i=e.split(" "),a=2==i.length?i[0]:null;e=2==i.length?i[1]:i[0],r[e]||(r[e]=new o(e,a),t.push(r[e])),r[e].addHandler(n)},u=function(e,t){if("function"==typeof t)s(e,t),u.reload();else if("object"==typeof e){for(var r in e)s(r,e[r]);u.reload()}else void 0===t&&u.navigate(e)};u.lookup=function(e,r){for(var n=0,i=t.length;i>n;n++){var o=t[n];if(o.name==e)return o.toURL(r)}},u.remove=function(e,t){var n=r[e];n&&n.removeHandler(t)},u.removeAll=function(){r={},t=[]},u.navigate=function(e,t){t=t||{};var r=t.silent||!1;r&&h(),setTimeout(function(){window.location.hash=e,r&&setTimeout(function(){p()},1)},1)},u.noConflict=function(){return e[n]=i,u};var l=function(){return window.location.hash.substring(1)},c=function(e,t){var r=[];return t.match(e,r)?(t.run(r),!0):!1},f=u.reload=function(){for(var e=l(),r=0,n=t.length;n>r;r++){var i=t[r];if(c(e,i))return}},p=function(){e.addEventListener?e.addEventListener("hashchange",f,!1):e.attachEvent("onhashchange",f)},h=function(){e.removeEventListener?e.removeEventListener("hashchange",f):e.detachEvent("onhashchange",f)};p(),e[n]=u}(window),define("libs/routie",function(){}),define("libs/core",["libs/routie"],function(){function e(e,n){if(-1==n)return s(this,e);if(this._subs[e])return s(this._subs[e],n);var i=t(this),a=this.index;if("string"==typeof e){var a=a;0===e.indexOf("./")&&(a++,e=e.substr(2));var u=o(e);i.path=i.path.slice(0,a).concat(u)}else webix.extend(i.path[a].params,e,!0);i.show(r(i.path),-1)}function t(e){for(;e;){if(e.app)return e;e=e.parent}return b}function r(e){for(var t=[],r=b.config.layout?1:0;r<e.length;r++){t.push("/"+e[r].page);var i=n(e[r].params);i&&t.push(":"+i)}return t.join("")}function n(e){var t=[];for(var r in e)t.length&&t.push(":"),t.push(r+"="+e[r]);return t.join("")}function i(t,r,n){if(l(w,t,r,n,this)!==!1){if(r.page!=this.name){this.name=r.page,this.ui=f,this.on=c,this.show=e,this.module=t,h.call(this),this._init=[],this._destroy=[],this._subs={},this.$layout=!1;var o=a(t,null,this);o.$scope=this,d.call(this,o),this.$layout&&(this.$layout={root:(this._ui.$$||webix.$$)(this.name+":subview"),sub:i,parent:this,index:this.index+1})}return l(v,t,r,n,this),t.$onurlchange&&t.$onurlchange.call(t,r.params,n,this)===!1?void 0:this.$layout}}function o(e){var t=e.split("/");t[0]||(b.config.layout?t[0]=b.config.layout:t.shift());for(var r=0;r<t.length;r++){var n=t[r],i=[],o=n.indexOf(":");if(-1!==o){var a=n.substr(o+1).split(":"),s=-1!==a[0].indexOf("=");if(s){i={};for(var u=0;u<a.length;u++){var l=a[u].split("=");i[l[0]]=l[1]}}else i=a}t[r]={page:o>-1?n.substr(0,o):n,params:i}}return t}function a(e,t,r){if(e.$oninit&&r._init.push(e.$oninit),e.$ondestroy&&r._destroy.push(e.$ondestroy),e.$subview)if("string"==typeof e.$subview){{var n=r.name+":subview:"+e.$subview;r._subs[e.$subview]={parent:this,root:n,sub:i,index:0,app:!0}}e.id=n}else e={id:r.name+":subview"},r.$layout=!0;if(e.$ui&&(e=e.$ui),e.$init)return e;t=t||(webix.isArray(e)?[]:{});for(var o in e)t[o]=e[o]&&"object"==typeof e[o]&&!webix.isDate(e[o])?a(e[o],webix.isArray(e[o])?[]:{},r):e[o];return t}function s(e,t){e.root&&(e.root=webix.$$(e.root));var r=o(t);e.path=[].concat(r),u(e,r)}function u(e,t){var r=t[0];if(r){var n=r.page,i=0===n.indexOf(".");if(i&&(n=(e.fullname||"")+n),n=n.replace(/\./g,"/"),l(y,n,r,t,e)===!1)return;require(["views/"+n],function(n){t.shift();var o=e.sub(n,r,t);o?(o.fullname=(i?e.fullname||"":"")+r.page,u(o,t)):(webix.ui.$freeze=!1,webix.ui.resize())})}else webix.ui.$freeze=!1,webix.ui.resize()}function l(e,t,r,n,i){for(var o=0;o<e.length;o++)if(e[o](t,r,n,i)===!1)return!1;return!0}function c(e,t,r){var n=e.attachEvent(t,r);return this._handlers.push({obj:e,id:n}),n}function f(e,t){var r,n={_init:[],_destroy:[]},i=a(e,null,n);return i.$scope=this,i.id&&(r=$$(i.id)),r||(r=webix.ui(i,t),this._uis.push(r),p(n._init,r,this)),r}function p(e,t,r){if(e)for(var n=0;n<e.length;n++)e[n](t,r)}function h(){if(this._ui){this.$layout&&h.call(this.$layout);for(var e=this._handlers,t=e.length-1;t>=0;t--)e[t].obj.detachEvent(e[t].id);this._handlers=[];for(var r=this._uis,t=r.length-1;t>=0;t--)r[t]&&r[t].destructor&&r[t].destructor();this._uis=[],p(this._destroy,this._ui,this),!this.parent&&this._ui&&this._ui.destructor()}}function g(e){delete webix.ui.views[e.config.id],e.config.id="";for(var t=e.getChildViews(),r=t.length-1;r>=0;r--)g(t[r])}function d(e){this._uis=[],this._handlers=[],this.root&&this.root.config&&g(this.root),this._ui=webix.ui(e,this.root),this.parent&&(this.root=this._ui),p(this._init,this._ui,this)}function m(e){if(b.debug&&console.log(e.stack),!e.requireModules)throw e;b.debug&&webix.message({type:"error",expire:5e3,text:"Can't load "+e.requireModules.join(", ")}),b.show(b.config.start)}var v=[],w=[],y=[],b={create:function(e){b.config=webix.extend({name:"App",version:"1.0",container:document.body,start:"/home"},e,!0),b.debug=e.debug,b.$layout={sub:i,root:b.config.container,index:0,add:!0},webix.extend(b,webix.EventSystem),setTimeout(function(){b.start()},1);var t=document.getElementsByTagName("title")[0];t&&(t.innerHTML=b.config.name);var r=b.config.container;return webix.html.addCss(r,"webixappstart"),setTimeout(function(){webix.html.removeCss(r,"webixappstart"),webix.html.addCss(r,"webixapp")},10),b},ui:f,router:function(e){var t=o(e);b.path=[].concat(t),webix.ui.$freeze=!0,u(b.$layout,t)},show:function(e,t){routie.navigate("!"+e,t)},start:function(e){routie("!*",b.router),window.location.hash?(webix.ui.$freeze=!1,webix.ui.resize()):b.show(b.config.start)},use:function(e,t){e.$oninit&&e.$oninit(this,t||{}),e.$onurlchange&&w.push(e.$onurlchange),e.$onurl&&y.push(e.$onurl),e.$onui&&v.push(e.$onui)},trigger:function(e){b.apply(e,[].splice.call(arguments,1))},apply:function(e,t){b.callEvent(e,t)},action:function(e){return function(){b.apply(e,arguments)}},on:function(e,t){this.attachEvent(e,t)},_uis:[],_handlers:[]};return requirejs.onError=m,b}),define("libs/rollbar",["require","exports","module"],function(require,exports,module){function _isUndefined(e){return"undefined"==typeof e}function computeStackTraceWrapper(e){function t(e){if(!y)return"";try{var t=function(){try{return new window.XMLHttpRequest}catch(e){return new window.ActiveXObject("Microsoft.XMLHTTP")}},r=t();return r.open("GET",e,!1),r.send(""),r.responseText}catch(n){return""}}function r(e){if(!w.hasOwnProperty(e)){var r="";-1!==e.indexOf(document.domain)&&(r=t(e)),w[e]=r?r.split("\n"):[]}return w[e]}function n(e,t){var n,i=/function ([^(]*)\(([^)]*)\)/,o=/['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,a="",s=10,u=r(e);if(!u.length)return UNKNOWN_FUNCTION;for(var l=0;s>l;++l)if(a=u[t-l]+a,!_isUndefined(a)){if(n=o.exec(a))return n[1];if(n=i.exec(a))return n[1]}return UNKNOWN_FUNCTION}function i(e,t){var n=r(e);if(!n.length)return null;var i=[],o=Math.floor(b/2),a=o+b%2,s=Math.max(0,t-o-1),u=Math.min(n.length,t+a-1);t-=1;for(var l=s;u>l;++l)_isUndefined(n[l])||i.push(n[l]);return i.length>0?i:null}function o(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g,"\\$&")}function a(e){return o(e).replace("<","(?:<|&lt;)").replace(">","(?:>|&gt;)").replace("&","(?:&|&amp;)").replace('"','(?:"|&quot;)').replace(/\s+/g,"\\s+")}function s(e,t){for(var n,i,o=0,a=t.length;a>o;++o)if((n=r(t[o])).length&&(n=n.join("\n"),i=e.exec(n)))return{url:t[o],line:n.substring(0,i.index).split("\n").length,column:i.index-n.lastIndexOf("\n",i.index)-1};return null}function u(e,t,n){var i,a=r(t),s=new RegExp("\\b"+o(e)+"\\b");return n-=1,a&&a.length>n&&(i=s.exec(a[n]))?i.index:null}function l(e){for(var t,r,n,i,u=[window.location.href],l=document.getElementsByTagName("script"),c=""+e,f=/^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,p=/^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,h=0;h<l.length;++h){var g=l[h];g.src&&u.push(g.src)}if(n=f.exec(c)){var d=n[1]?"\\s+"+n[1]:"",m=n[2].split(",").join("\\s*,\\s*");t=o(n[3]).replace(/;$/,";?"),r=new RegExp("function"+d+"\\s*\\(\\s*"+m+"\\s*\\)\\s*{\\s*"+t+"\\s*}")}else r=new RegExp(o(c).replace(/\s+/g,"\\s+"));if(i=s(r,u))return i;if(n=p.exec(c)){var v=n[1];if(t=a(n[2]),r=new RegExp("on"+v+"=[\\'\"]\\s*"+t+"\\s*[\\'\"]","i"),i=s(r,u[0]))return i;if(r=new RegExp(t),i=s(r,u))return i}return null}function c(e){if(!e.stack)return null;for(var t,r,o=/^\s*at (?:((?:\[object object\])?\S+(?: \[as \S+\])?) )?\(?((?:file|http|https):.*?):(\d+)(?::(\d+))?\)?\s*$/i,a=/^\s*(\S*)(?:\((.*?)\))?@((?:file|http|https).*?):(\d+)(?::(\d+))?\s*$/i,s=e.stack.split("\n"),l=[],c=/^(.*) is undefined$/.exec(e.message),f=0,p=s.length;p>f;++f){if(t=a.exec(s[f]))r={url:t[3],func:t[1]||UNKNOWN_FUNCTION,args:t[2]?t[2].split(","):"",line:+t[4],column:t[5]?+t[5]:null};else{if(!(t=o.exec(s[f])))continue;r={url:t[2],func:t[1]||UNKNOWN_FUNCTION,line:+t[3],column:t[4]?+t[4]:null}}!r.func&&r.line&&(r.func=n(r.url,r.line)),r.line&&(r.context=i(r.url,r.line)),l.push(r)}return l[0]&&l[0].line&&!l[0].column&&c&&(l[0].column=u(c[1],l[0].url,l[0].line)),l.length?{mode:"stack",name:e.name,message:e.message,url:document.location.href,stack:l,useragent:navigator.userAgent}:null}function f(e){for(var t,r=e.stacktrace,o=/ line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\) in (.*):\s*$/i,a=r.split("\n"),s=[],u=0,l=a.length;l>u;u+=2)if(t=o.exec(a[u])){var c={line:+t[1],column:+t[2],func:t[3]||t[4],args:t[5]?t[5].split(","):[],url:t[6]};if(!c.func&&c.line&&(c.func=n(c.url,c.line)),c.line)try{c.context=i(c.url,c.line)}catch(f){}c.context||(c.context=[a[u+1]]),s.push(c)}return s.length?{mode:"stacktrace",name:e.name,message:e.message,url:document.location.href,stack:s,useragent:navigator.userAgent}:null}function p(e){var t=e.message.split("\n");if(t.length<4)return null;var o,u,l,c,f=/^\s*Line (\d+) of linked script ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,p=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,h=/^\s*Line (\d+) of function script\s*$/i,g=[],d=document.getElementsByTagName("script"),m=[];for(u in d)d.hasOwnProperty(u)&&!d[u].src&&m.push(d[u]);for(u=2,l=t.length;l>u;u+=2){var v=null;if(o=f.exec(t[u]))v={url:o[2],func:o[3],line:+o[1]};else if(o=p.exec(t[u])){v={url:o[3],func:o[4]};var w=+o[1],y=m[o[2]-1];if(y&&(c=r(v.url))){c=c.join("\n");var b=c.indexOf(y.innerText);b>=0&&(v.line=w+c.substring(0,b).split("\n").length)}}else if(o=h.exec(t[u])){var x=window.location.href.replace(/#.*$/,""),_=o[1],N=new RegExp(a(t[u+1]));c=s(N,[x]),v={url:x,line:c?c.line:_,func:""}}if(v){v.func||(v.func=n(v.url,v.line));var E=i(v.url,v.line),L=E?E[Math.floor(E.length/2)]:null;v.context=E&&L.replace(/^\s*/,"")===t[u+1].replace(/^\s*/,"")?E:[t[u+1]],g.push(v)}}return g.length?{mode:"multiline",name:e.name,message:t[0],url:document.location.href,stack:g,useragent:navigator.userAgent}:null}function h(e,t,r,o){var a={url:t,line:r};if(a.url&&a.line){e.incomplete=!1,a.func||(a.func=n(a.url,a.line)),a.context||(a.context=i(a.url,a.line));var s=/ '([^']+)' /.exec(o);if(s&&(a.column=u(s[1],a.url,a.line)),e.stack.length>0&&e.stack[0].url===a.url){if(e.stack[0].line===a.line)return!1;if(!e.stack[0].line&&e.stack[0].func===a.func)return e.stack[0].line=a.line,e.stack[0].context=a.context,!1}return e.stack.unshift(a),e.partial=!0,!0}return e.incomplete=!0,!1}function g(e,t){for(var r,i,o,a=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,s=[],c={},f=!1,p=g.caller;p&&!f;p=p.caller)if(p!==d&&p!==x){if(i={url:null,func:UNKNOWN_FUNCTION,line:null,column:null},p.name?i.func=p.name:(r=a.exec(p.toString()))&&(i.func=r[1]),o=l(p)){i.url=o.url,i.line=o.line,i.func===UNKNOWN_FUNCTION&&(i.func=n(i.url,i.line));var m=/ '([^']+)' /.exec(e.message||e.description);m&&(i.column=u(m[1],o.url,o.line))}c[""+p]?f=!0:c[""+p]=!0,s.push(i)}t&&s.splice(0,t);var v={mode:"callers",name:e.name,message:e.message,url:document.location.href,stack:s,useragent:navigator.userAgent};return h(v,e.sourceURL||e.fileName,e.line||e.lineNumber,e.message||e.description),v}function d(e,t){var r=null;t=null==t?0:+t;try{if(r=f(e))return r}catch(n){if(v)throw n}try{if(r=c(e))return r}catch(n){if(v)throw n}try{if(r=p(e))return r}catch(n){if(v)throw n}try{if(r=g(e,t+1))return r}catch(n){if(v)throw n}return{mode:"failed"}}function m(e){e=(null==e?0:+e)+1;try{throw new Error}catch(t){return d(t,e+1)}}var v=!1,w={},y=e.remoteFetching,b=e.linesOfContext,x=e.tracekitReport;return d.augmentStackTraceWithInitialElement=h,d.guessFunctionName=n,d.gatherContext=i,d.ofCaller=m,d}function Notifier(e){_topLevelNotifier=_topLevelNotifier||this;var t=window.location.protocol;0!==t.indexOf("http")&&(t="https:");var r=t+"//"+Notifier.DEFAULT_ENDPOINT;this.options={enabled:!0,endpoint:r,environment:"production",scrubFields:Util.copy(Notifier.DEFAULT_SCRUB_FIELDS),checkIgnore:null,logLevel:Notifier.DEFAULT_LOG_LEVEL,reportLevel:Notifier.DEFAULT_REPORT_LEVEL,uncaughtErrorLevel:Notifier.DEFAULT_UNCAUGHT_ERROR_LEVEL,payload:{}},this.lastError=null,this.plugins={},this.parentNotifier=e,this.logger=function(){if(window.console&&"function"==typeof window.console.log){var e=["Rollbar:"].concat(Array.prototype.slice.call(arguments,0));window.console.log(e)}},e&&(e.hasOwnProperty("shimId")?e.notifier=this:(this.logger=e.logger,this.configure(e.options)))}function _wrapNotifierFn(e,t){return function(){var r=t||this;try{return e.apply(r,arguments)}catch(n){r&&r.logger(n)}}}function _guessErrorClass(e){if(!e)return["Unknown error. There was no error message to display.",""];var t=e.match(ERR_CLASS_REGEXP),r="(unknown)";return t&&(r=t[t.length-1],e=e.replace((t[t.length-2]||"")+r+":",""),e=e.replace(/(^[\s]+|[\s]+$)/g,"")),[r,e]}function _payloadProcessorTimer(e){for(var t;t=window._rollbarPayloadQueue.shift();)_processPayload(t.endpointUrl,t.accessToken,t.payload,t.callback);e||(payloadProcessorTimeout=setTimeout(_payloadProcessorTimer,1e3))}function _processPayload(e,t,r,n){n=n||function(){};var i=(new Date).getTime();i-rateLimitStartTime>=6e4&&(rateLimitStartTime=i,rateLimitPerMinCounter=0);var o=window._globalRollbarOptions.maxItems,a=window._globalRollbarOptions.itemsPerMinute,s=function(){return!r.ignoreRateLimit&&o>=1&&rateLimitCounter>=o},u=function(){return!r.ignoreRateLimit&&a>=1&&rateLimitPerMinCounter>=a};return s()?void n(new Error(o+" max items reached")):u()?void n(new Error(a+" items per minute reached")):(rateLimitCounter++,rateLimitPerMinCounter++,s()&&_topLevelNotifier._log(_topLevelNotifier.options.uncaughtErrorLevel,"maxItems has been hit. Ignoring errors for the remainder of the current page load.",null,{maxItems:o},null,!1,!0),r.ignoreRateLimit&&delete r.ignoreRateLimit,void XHR.post(e,t,r,function(e,t){return e?n(e):n(null,t)}))}function _rollbarWindowOnError(e,t,r){!r[4]&&window._rollbarWrappedError&&(r[4]=window._rollbarWrappedError,window._rollbarWrappedError=null),globalNotifier.uncaughtError.apply(globalNotifier,r),t&&t.apply(window,r)}function _extendListenerPrototype(e,t){if(t.hasOwnProperty&&t.hasOwnProperty("addEventListener")){var r=t.addEventListener;t.addEventListener=function(t,n,i){r.call(this,t,e.wrap(n),i)};var n=t.removeEventListener;t.removeEventListener=function(e,t,r){n.call(this,e,t._wrapped||t,r)}}}var setupCustomJSON=function(JSON){function f(e){return 10>e?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var r,n,i,o,a,s=gap,u=t[e];switch(u&&"object"==typeof u&&"function"==typeof u.toJSON&&(u=u.toJSON(e)),"function"==typeof rep&&(u=rep.call(t,e,u)),typeof u){case"string":return quote(u);case"number":return isFinite(u)?String(u):"null";case"boolean":case"null":return String(u);case"object":if(!u)return"null";if(gap+=indent,a=[],"[object Array]"===Object.prototype.toString.apply(u)){for(o=u.length,r=0;o>r;r+=1)a[r]=str(r,u)||"null";return i=0===a.length?"[]":gap?"[\n"+gap+a.join(",\n"+gap)+"\n"+s+"]":"["+a.join(",")+"]",gap=s,i}if(rep&&"object"==typeof rep)for(o=rep.length,r=0;o>r;r+=1)"string"==typeof rep[r]&&(n=rep[r],i=str(n,u),i&&a.push(quote(n)+(gap?": ":":")+i));else for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(i=str(n,u),i&&a.push(quote(n)+(gap?": ":":")+i));return i=0===a.length?"{}":gap?"{\n"+gap+a.join(",\n"+gap)+"\n"+s+"}":"{"+a.join(",")+"}",gap=s,i}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;r>n;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var r,n,i=e[t];if(i&&"object"==typeof i)for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n=walk(i,r),void 0!==n?i[r]=n:delete i[r]);return reviver.call(e,t,i)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})},UNKNOWN_FUNCTION="?",Util={merge:function(){var e,t,r,n,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!0;for("object"!=typeof a&&"function"!=typeof a&&(a={});u>s;s++)if(null!==(e=arguments[s]))for(t in e)e.hasOwnProperty(t)&&(r=a[t],n=e[t],a!==n&&(l&&n&&(n.constructor==Object||(i=n.constructor==Array))?(i?(i=!1,o=[]):o=r&&r.constructor==Object?r:{},a[t]=Util.merge(o,n)):void 0!==n&&(a[t]=n)));return a},copy:function(e){var t;return"object"==typeof e&&(e.constructor==Object?t={}:e.constructor==Array&&(t=[])),Util.merge(t,e),t},parseUriOptions:{strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},parseUri:function(e){if(!e||"string"!=typeof e&&!(e instanceof String))throw new Error("Util.parseUri() received invalid input");for(var t=Util.parseUriOptions,r=t.parser[t.strictMode?"strict":"loose"].exec(e),n={},i=14;i--;)n[t.key[i]]=r[i]||"";return n[t.q.name]={},n[t.key[12]].replace(t.q.parser,function(e,r,i){r&&(n[t.q.name][r]=i)}),n},sanitizeUrl:function(e){if(!e||"string"!=typeof e&&!(e instanceof String))throw new Error("Util.sanitizeUrl() received invalid input");var t=Util.parseUri(e);return""===t.anchor&&(t.source=t.source.replace("#","")),e=t.source.replace("?"+t.query,"")},traverse:function(e,t){var r,n,i,o="object"==typeof e,a=[];if(o)if(e.constructor===Object)for(r in e)e.hasOwnProperty(r)&&a.push(r);else if(e.constructor===Array)for(i=0;i<e.length;++i)a.push(i);for(i=0;i<a.length;++i)r=a[i],n=e[r],o="object"==typeof n,e[r]=o?null===n?t(r,n):n.constructor===Object?Util.traverse(n,t):n.constructor===Array?Util.traverse(n,t):t(r,n):t(r,n);return e},redact:function(e){return e=String(e),new Array(e.length+1).join("*")},uuid4:function(){var e=(new Date).getTime(),t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var r=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?r:7&r|8).toString(16)});return t}},RollbarJSON={};setupCustomJSON(RollbarJSON);var XHR={XMLHttpFactories:[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}],createXMLHTTPObject:function(){var e,t=!1,r=XHR.XMLHttpFactories,n=r.length;for(e=0;n>e;e++)try{t=r[e]();break}catch(i){}return t},post:function(e,t,r,n){if("object"!=typeof r)throw new Error("Expected an object to POST");r=RollbarJSON.stringify(r),n=n||function(){};var i=XHR.createXMLHTTPObject();if(i)try{try{var o=function(){try{o&&4===i.readyState&&(o=void 0,200===i.status?n(null,RollbarJSON.parse(i.responseText)):n("number"==typeof i.status&&i.status>=400&&i.status<600?new Error(i.status.toString()):new Error))}catch(e){var t;t="object"==typeof e&&e.stack?e:new Error(e),n(t)}};i.open("POST",e,!0),i.setRequestHeader&&(i.setRequestHeader("Content-Type","application/json"),i.setRequestHeader("X-Rollbar-Access-Token",t)),i.onreadystatechange=o,i.send(r)}catch(a){if("undefined"!=typeof XDomainRequest){var s=function(){n(new Error)},u=function(){n(new Error)},l=function(){n(null,RollbarJSON.parse(i.responseText))};i=new XDomainRequest,i.onprogress=function(){},i.ontimeout=s,i.onerror=u,i.onload=l,i.open("POST",e,!0),i.send(r)}}}catch(c){n(c)}}};Notifier.NOTIFIER_VERSION="1.1.9",Notifier.DEFAULT_ENDPOINT="api.rollbar.com/api/1/",Notifier.DEFAULT_SCRUB_FIELDS=["passwd","password","secret","confirm_password","password_confirmation"],Notifier.DEFAULT_LOG_LEVEL="debug",Notifier.DEFAULT_REPORT_LEVEL="debug",Notifier.DEFAULT_UNCAUGHT_ERROR_LEVEL="warning",Notifier.DEFAULT_ITEMS_PER_MIN=60,Notifier.DEFAULT_MAX_ITEMS=0,Notifier.LEVELS={debug:0,info:1,warning:2,error:3,critical:4},window._rollbarPayloadQueue=[],window._globalRollbarOptions={startTime:(new Date).getTime(),maxItems:Notifier.DEFAULT_MAX_ITEMS,itemsPerMinute:Notifier.DEFAULT_ITEMS_PER_MIN};var TK=computeStackTraceWrapper({remoteFetching:!1,linesOfContext:3}),_topLevelNotifier;Notifier._generateLogFn=function(e){return _wrapNotifierFn(function(){var t=this._getLogArgs(arguments);return this._log(e||t.level||this.options.logLevel||Notifier.DEFAULT_LOG_LEVEL,t.message,t.err,t.custom,t.callback)})},Notifier.prototype._getLogArgs=function(e){for(var t,r,n,i,o,a,s,u=this.options.logLevel||Notifier.DEFAULT_LOG_LEVEL,l=0;l<e.length;++l)s=e[l],a=typeof s,"string"===a?r=s:"function"===a?o=_wrapNotifierFn(s,this):s&&"object"===a&&("Date"===s.constructor.name?t=s:s instanceof Error||s.prototype===Error.prototype||s.hasOwnProperty("stack")?n=s:i=s);return{level:u,message:r,err:n,custom:i,callback:o}},Notifier.prototype._route=function(e){var t=this.options.endpoint,r=/\/$/.test(t),n=/^\//.test(e);return r&&n?e=e.substring(1):r||n||(e="/"+e),t+e},Notifier.prototype._processShimQueue=function(e){for(var t,r,n,i,o,a,s,u={};r=e.shift();)t=r.shim,n=r.method,i=r.args,o=t.parentShim,s=u[t.shimId],s||(o?(a=u[o.shimId],s=new Notifier(a)):s=this,u[t.shimId]=s),s[n]&&"function"==typeof s[n]&&s[n].apply(s,i)},Notifier.prototype._buildPayload=function(e,t,r,n,i){var o=this.options.accessToken,a=this.options.environment,s=Util.copy(this.options.payload),u=Util.uuid4();if(void 0===Notifier.LEVELS[t])throw new Error("Invalid level");if(!r&&!n&&!i)throw new Error("No message, stack info or custom data");var l={environment:a,endpoint:this.options.endpoint,uuid:u,level:t,platform:"browser",framework:"browser-js",language:"javascript",body:this._buildBody(r,n,i),request:{url:window.location.href,query_string:window.location.search,user_ip:"$remote_ip"},client:{runtime_ms:e.getTime()-window._globalRollbarOptions.startTime,timestamp:Math.round(e.getTime()/1e3),javascript:{browser:window.navigator.userAgent,language:window.navigator.language,cookie_enabled:window.navigator.cookieEnabled,screen:{width:window.screen.width,height:window.screen.height},plugins:this._getBrowserPlugins()}},server:{},notifier:{name:"rollbar-browser-js",version:Notifier.NOTIFIER_VERSION}};s.body&&delete s.body;var c={access_token:o,data:Util.merge(l,s)};return this._scrub(c.data),c},Notifier.prototype._buildBody=function(e,t,r){var n;return n=t&&"failed"!==t.mode?this._buildPayloadBodyTrace(e,t,r):this._buildPayloadBodyMessage(e,r)},Notifier.prototype._buildPayloadBodyMessage=function(e,t){e||(e=t?RollbarJSON.stringify(t):"");var r={body:e};return t&&(r.extra=Util.copy(t)),{message:r}},Notifier.prototype._buildPayloadBodyTrace=function(e,t,r){var n=_guessErrorClass(t.message),i=t.name||n[0],o=n[1],a={exception:{"class":i,message:o}};if(e&&(a.exception.description=e||"uncaught exception"),t.stack){var s,u,l,c,f,p,h,g;for(a.frames=[],h=0;h<t.stack.length;++h)s=t.stack[h],u={filename:s.url?Util.sanitizeUrl(s.url):"(unknown)",lineno:s.line||null,method:s.func&&"?"!==s.func?s.func:"[anonymous]",colno:s.column},l=c=f=null,p=s.context?s.context.length:0,p&&(g=Math.floor(p/2),c=s.context.slice(0,g),l=s.context[g],f=s.context.slice(g)),l&&(u.code=l),(c||f)&&(u.context={},c&&c.length&&(u.context.pre=c),f&&f.length&&(u.context.post=f)),s.args&&(u.args=s.args),a.frames.push(u);return r&&(a.extra=Util.copy(r)),{trace:a}}return this._buildPayloadBodyMessage(i+": "+o,r)},Notifier.prototype._getBrowserPlugins=function(){if(!this._browserPlugins){var e,t,r=window.navigator.plugins||[],n=r.length,i=[];for(t=0;n>t;++t)e=r[t],i.push({name:e.name,description:e.description});this._browserPlugins=i}return this._browserPlugins},Notifier.prototype._scrub=function(e){function t(e,t,r,n,i,o){return t+Util.redact(o)}function r(e){var r;if("string"==typeof e)for(r=0;r<s.length;++r)e=e.replace(s[r],t);return e}function n(e,t){var r;for(r=0;r<a.length;++r)if(a[r].test(e)){t=Util.redact(t);break}return t}function i(e,t){var i=n(e,t);return i===t?r(i):i}var o=this.options.scrubFields,a=this._getScrubFieldRegexs(o),s=this._getScrubQueryParamRegexs(o);return Util.traverse(e,i),e},Notifier.prototype._getScrubFieldRegexs=function(e){for(var t,r=[],n=0;n<e.length;++n)t="\\[?(%5[bB])?"+e[n]+"\\[?(%5[bB])?\\]?(%5[dD])?",r.push(new RegExp(t,"i"));return r},Notifier.prototype._getScrubQueryParamRegexs=function(e){for(var t,r=[],n=0;n<e.length;++n)t="\\[?(%5[bB])?"+e[n]+"\\[?(%5[bB])?\\]?(%5[dD])?",r.push(new RegExp("("+t+"=)([^&\\n]+)","igm"));return r},Notifier.prototype._urlIsWhitelisted=function(e){var t,r,n,i,o,a,s,u,l,c;try{if(t=this.options.hostWhiteList,r=e.data.body.trace,!t||0===t.length)return!0;if(!r)return!0;for(s=t.length,o=r.frames.length,l=0;o>l;l++){if(n=r.frames[l],i=n.filename,"string"!=typeof i)return!0;for(c=0;s>c;c++)if(a=t[c],u=new RegExp(a),u.test(i))return!0}}catch(f){return this.configure({hostWhiteList:null}),this.error("Error while reading your configuration's hostWhiteList option. Removing custom hostWhiteList.",f),!0}return!1},Notifier.prototype._messageIsIgnored=function(e){var t,r,n,i,o,a,s;try{if(o=!1,n=this.options.ignoredMessages,s=e.data.body.trace,!n||0===n.length)return!1;if(!s)return!1;for(t=s.exception.message,i=n.length,r=0;i>r&&(a=new RegExp(n[r],"gi"),!(o=a.test(t)));r++);}catch(u){this.configure({ignoredMessages:null}),this.error("Error while reading your configuration's ignoredMessages option. Removing custom ignoredMessages.")}return o},Notifier.prototype._enqueuePayload=function(e,t,r,n){var i={callback:n,accessToken:this.options.accessToken,endpointUrl:this._route("item/"),
payload:e},o=function(){if(n){var e="This item was not sent to Rollbar because it was ignored. This can happen if a custom checkIgnore() function was used or if the item's level was less than the notifier' reportLevel. See https://rollbar.com/docs/notifier/rollbar.js/configuration for more details.";n(null,{err:0,result:{id:null,uuid:null,message:e}})}};if(this._internalCheckIgnore(t,r,e))return void o();try{if(this.options.checkIgnore&&"function"==typeof this.options.checkIgnore&&this.options.checkIgnore(t,r,e))return void o()}catch(a){this.configure({checkIgnore:null}),this.error("Error while calling custom checkIgnore() function. Removing custom checkIgnore().",a)}if(this._urlIsWhitelisted(e)&&!this._messageIsIgnored(e)){if(this.options.verbose){if(e.data&&e.data.body&&e.data.body.trace){var s=e.data.body.trace,u=s.exception.message;this.logger(u)}this.logger("Sending payload -",i)}"function"==typeof this.options.logFunction&&this.options.logFunction(i);try{"function"==typeof this.options.transform&&this.options.transform(e)}catch(a){this.configure({transform:null}),this.error("Error while calling custom transform() function. Removing custom transform().",a)}this.options.enabled&&window._rollbarPayloadQueue.push(i)}},Notifier.prototype._internalCheckIgnore=function(e,t,r){var n=t[0],i=Notifier.LEVELS[n]||0,o=Notifier.LEVELS[this.options.reportLevel]||0;if(o>i)return!0;var a=this.options?this.options.plugins:{};return a&&a.jquery&&a.jquery.ignoreAjaxErrors&&r.body.message?r.body.messagejquery_ajax_error:!1},Notifier.prototype._log=function(e,t,r,n,i,o,a){var s=null;if(r){if(s=r._tkStackTrace?r._tkStackTrace:TK(r),r===this.lastError)return;this.lastError=r}var u=this._buildPayload(new Date,e,t,s,n);a&&(u.ignoreRateLimit=!0),this._enqueuePayload(u,o?!0:!1,[e,t,r,n],i)},Notifier.prototype.log=Notifier._generateLogFn(),Notifier.prototype.debug=Notifier._generateLogFn("debug"),Notifier.prototype.info=Notifier._generateLogFn("info"),Notifier.prototype.warn=Notifier._generateLogFn("warning"),Notifier.prototype.warning=Notifier._generateLogFn("warning"),Notifier.prototype.error=Notifier._generateLogFn("error"),Notifier.prototype.critical=Notifier._generateLogFn("critical"),Notifier.prototype.uncaughtError=_wrapNotifierFn(function(e,t,r,n,i,o){if(o=o||null,i&&i.stack)return void this._log(this.options.uncaughtErrorLevel,e,i,o,null,!0);if(t&&t.stack)return void this._log(this.options.uncaughtErrorLevel,e,t,o,null,!0);var a={url:t||"",line:r};a.func=TK.guessFunctionName(a.url,a.line),a.context=TK.gatherContext(a.url,a.line);var s={mode:"onerror",message:e||"uncaught exception",url:document.location.href,stack:[a],useragent:navigator.userAgent};i&&(s=i._tkStackTrace||TK(i));var u=this._buildPayload(new Date,this.options.uncaughtErrorLevel,e,s);this._enqueuePayload(u,!0,[this.options.uncaughtErrorLevel,e,t,r,n,i])}),Notifier.prototype.global=_wrapNotifierFn(function(e){e=e||{},Util.merge(window._globalRollbarOptions,e),void 0!==e.maxItems&&(rateLimitCounter=0),void 0!==e.itemsPerMinute&&(rateLimitPerMinCounter=0)}),Notifier.prototype.configure=_wrapNotifierFn(function(e){Util.merge(this.options,e)}),Notifier.prototype.scope=_wrapNotifierFn(function(e){var t=new Notifier(this);return Util.merge(t.options.payload,e),t}),Notifier.prototype.wrap=function(e,t){var r;if(r="function"==typeof t?t:function(){return t||{}},"function"!=typeof e)return e;if(e._isWrap)return e;if(!e._wrapped){e._wrapped=function(){try{e.apply(this,arguments)}catch(t){throw t.stack||(t._tkStackTrace=TK(t)),t._rollbarContext=r(),t._rollbarContext._wrappedSource=e.toString(),window._rollbarWrappedError=t,t}},e._wrapped._isWrap=!0;for(var n in e)e.hasOwnProperty(n)&&(e._wrapped[n]=e[n])}return e._wrapped};var ERR_CLASS_REGEXP=new RegExp("^(([a-zA-Z0-9-_$ ]*): *)?(Uncaught )?([a-zA-Z0-9-_$ ]*): "),payloadProcessorTimeout;Notifier.processPayloads=function(e){(!payloadProcessorTimeout||e)&&_payloadProcessorTimer(e)};var rateLimitStartTime=(new Date).getTime(),rateLimitCounter=0,rateLimitPerMinCounter=0,globalNotifier=new Notifier;window._rollbarWrappedError=null,globalNotifier.init=function(e){if(this.configure(e),e.captureUncaught){var t=window.onerror;window.onerror=function(){var e=Array.prototype.slice.call(arguments,0);_rollbarWindowOnError(globalNotifier,t,e)};var r,n,i=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"];for(r=0;r<i.length;++r)n=i[r],window[n]&&window[n].prototype&&_extendListenerPrototype(this,window[n].prototype)}Notifier.processPayloads()},module.exports=globalNotifier}),define("app",["libs/core","libs/rollbar"],function(e,t){webix.codebase=document.location.href.split("#")[0].replace("index.html","")+"libs/webix/",!webix.env.touch&&webix.ui.scrollSize&&webix.CustomScroll&&webix.CustomScroll.init(),webix.production&&t.init({accessToken:"650b007d5d794bb68d056584451a57a8",captureUncaught:!0,source_map_enabled:!0,code_version:"0.8.0",payload:{environment:"production"}});var r=e.create({id:"gamification-app",name:"Gamification",version:"0.1",debug:!0,start:"/app/dashboard"});return r}),define("views/app",[],function(){var e={view:"toolbar",elements:[{view:"label",label:"Gamification",width:200}]};return{$ui:{rows:[e]}}}),require(["app"]);
//# sourceMappingURL=app.js.map