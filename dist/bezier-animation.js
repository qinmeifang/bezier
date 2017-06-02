!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.bezierAnimation=e():t.bezierAnimation=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,n){(function(e){var n=["moz","webkit"],r="AnimationFrame",i=e||window,o=i["request"+r],s=o,u=i["cancel"+r]||i["cancelRequest"+r],a=u;if(!o)for(var c=0;c<n.length;c++)o=i[n[c]+"Request"+r],u=i[n[c]+"Cancel"+r]||i[n+"CancelRequest"+r];if(!o||!u){var f=0,l=0,p=[];o=function(t){if(0==p.length){var e=Date.now(),n=Math.max(0,1e3/60-e+f),r=0==f?Math.round(1e3/60):Math.round(n);f=e+Math.round(n),setTimeout(function(){var t=p.slice(0);p.length>0&&(p=[]);for(var e=0,n=t.length;e<n;e++)try{t[e].canceled||t[e].callback(f)}catch(t){setTimeout(function(){throw t})}},r)}return p.push({id:++l,callback:t,canceled:!1}),l},u=function(t){for(var e=0,n=p.length;e<n;e++)p[e].id===t&&(p[e].canceled=!0)}}t.exports=function(t){return o.call(i,t)},t.exports.cancel=function(){u.apply(i,arguments)},t.exports.polyfill=function(){i.requestAnimationFrame=o,i.cancelAnimationFrame=u},t.exports.unPolyfill=function(){i.requestAnimationFrame=s,i.cancelAnimationFrame=a}}).call(e,n(3))},function(t,e){function n(t,e,n,r){this.cx=3*t,this.bx=3*(n-t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*e,this.by=3*(r-e)-this.cy,this.ay=1-this.cy-this.by}var r=n.prototype;r.sampleCurveX=function(t){return((this.ax*t+this.bx)*t+this.cx)*t},r.sampleCurveY=function(t){return((this.ay*t+this.by)*t+this.cy)*t},r.sampleCurveDerivativeX=function(t){return(3*this.ax*t+2*this.bx)*t+this.cx},r.solveCurveX=function(t){for(var e,n,r=Math.abs,i=t,o=0;o<8;o++){if(n=this.sampleCurveX(i)-t,r(n)<1e-6)return i;if(e=this.sampleCurveDerivativeX(i),r(e)<1e-6)break;i-=n/e}var s=1,u=0;for(i=t;s>u;){if(n=this.sampleCurveX(i)-t,r(n)<1e-6)return i;n>0?s=i:u=i,i=(s+u)/2}return i},r.solve=function(t){return this.sampleCurveY(this.solveCurveX(t))},n.linear=new n(0,0,1,1),n.ease=new n(.25,.1,.25,1),n.easeIn=new n(.42,0,1,1),n.easeOut=new n(0,0,.58,1),n.easeInOut=new n(.42,0,.58,1),t.exports=n},function(t,e,n){function r(t){function e(t){n()}this.execute=function(n,r){return i(function(){n.progress=(n.passedTime+Date.now()-n.startTime)/(1e3*n.duration),n.progress>=1&&(n.progress=1);for(var i=0,o=t.length;i<o;i++)t[i].call(null,n.progress.toFixed(6),r.solve(n.progress).toFixed(6));e()}),this};var n;this.then=function(t){"function"==typeof t&&(n=t)}}var i=n(0);t.exports=r},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){function r(t,e,n,o){if(!this instanceof r)return new r(t,e,n,o);var u,a=i(e);"function"==typeof n?u=new s([n]):"[object Array]"===Object.prototype.toString.call(n)&&(u=new s(n)),o||(o=0);var c=!1,f=!0,l=null,p={startTime:0,passedTime:0,duration:t,progress:0};this.play=function(){function t(){u.execute(p,a).then(function(){n()})}function e(){c=!1,f=!0,p.passedTime=0,p.startTime=0,p.progress=0,l=null;for(var t=0,e=h.length;t<e;t++)h[t]()}function n(){c&&(p.progress>=1?e():t())}p.startTime||(p.startTime=Date.now()),c||(f&&(f=!1),c=!0,o?l?t():l=setTimeout(function(){p.startTime=Date.now(),t()},1e3*o):t())},this.stop=function(){p.passedTime=Date.now()-p.startTime,p.startTime=0,c=!1},this.isRunning=function(){return c},this.isDone=function(){return f},this.isStopped=function(){return!f&&!c};var h=[];this.end=function(t){h.push(t)}}function i(t){return"string"==typeof t?o[t]?o[t]:void console.error("未找到预置的贝塞尔函数"):"[object Array]"===Object.prototype.toString.call(t)&&4===t.length?new o(t[0],t[1],t[2],t[3]):"function"==typeof t&&t instanceof o?t:void 0}var o=n(1),s=(n(0),n(2));t.exports=r}])});