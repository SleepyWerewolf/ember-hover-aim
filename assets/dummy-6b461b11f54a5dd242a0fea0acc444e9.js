"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,a,n,r){var d=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,d=t.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:a.default}),(0,n.default)(d,r.default.modulePrefix),e.default=d}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,a){var n=a.default.APP.name,r=a.default.APP.version;e.default=t.default.extend({version:r,name:n})}),define("dummy/components/dropdown-menu",["exports","ember","ember-cli-foundation-6-sass/components/zf-dropdown-menu","ember-hover-aim/mixins/hover-aim"],function(e,t,a,n){e.default=a.default.extend(n.default,{classNames:["test-dropdown-menu"],anchorSelector:">li",targetSubElementSelector:".submenu.is-dropdown-submenu",targetElementDirection:"right",aimTolerance:50,activateElement:function(e){this.$(e).addClass("open")},deactivateElement:function(e){this.$(e).removeClass("open")}})}),define("dummy/components/zf-accordion-menu",["exports","ember-cli-foundation-6-sass/components/zf-accordion-menu"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/zf-accordion",["exports","ember-cli-foundation-6-sass/components/zf-accordion"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/zf-drilldown-menu",["exports","ember-cli-foundation-6-sass/components/zf-drilldown-menu"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/zf-dropdown-menu",["exports","ember-cli-foundation-6-sass/components/zf-dropdown-menu"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/zf-dropdown",["exports","ember-cli-foundation-6-sass/components/zf-dropdown"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/zf-magellan",["exports","ember-cli-foundation-6-sass/components/zf-magellan"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/zf-off-canvas",["exports","ember-cli-foundation-6-sass/components/zf-off-canvas"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/zf-orbit",["exports","ember-cli-foundation-6-sass/components/zf-orbit"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/zf-reveal",["exports","ember-cli-foundation-6-sass/components/zf-reveal"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/zf-slider",["exports","ember-cli-foundation-6-sass/components/zf-slider"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/zf-tabs",["exports","ember-cli-foundation-6-sass/components/zf-tabs"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/zf-tooltip",["exports","ember-cli-foundation-6-sass/components/zf-tooltip"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/application",["exports","ember"],function(e,t){var a=t.default.Controller;e.default=a.extend({})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,a){e.default={name:"App Version",initialize:(0,t.default)(a.default.APP.name,a.default.APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,a){e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a.default.exportApplicationGlobal!==!1){var n,r=a.default.exportApplicationGlobal;n="string"==typeof r?r:t.default.String.classify(a.default.modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("dummy/initializers/zf-widget",["exports","ember-cli-foundation-6-sass/initializers/zf-widget"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){var n=t.default.Router.extend({location:a.default.locationType,rootURL:a.default.rootURL});n.map(function(){}),e.default=n}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/hover-aim",["exports","ember-hover-aim/services/hover-aim"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:18,column:6},end:{line:63,column:6}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("        ");e.appendChild(t,a);var a=e.createElement("li"),n=e.createTextNode("\n          ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","#");var r=e.createTextNode("Item 1");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n          ");e.appendChild(a,n);var n=e.createElement("ul");e.setAttribute(n,"class","menu");var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 1A");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 1B");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 1C");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 1D");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 1E");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 1F");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n          ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n        ");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n        ");e.appendChild(t,a);var a=e.createElement("li"),n=e.createTextNode("\n          ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","#");var r=e.createTextNode("Item 2");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n          ");e.appendChild(a,n);var n=e.createElement("ul");e.setAttribute(n,"class","menu");var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 2A");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 2B");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 2C");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 2D");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 2E");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 2F");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n          ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n        ");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n        ");e.appendChild(t,a);var a=e.createElement("li"),n=e.createTextNode("\n          ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","#");var r=e.createTextNode("Item 3");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n          ");e.appendChild(a,n);var n=e.createElement("ul");e.setAttribute(n,"class","menu");var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 3A");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 3B");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 3C");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 3D");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 3E");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 3F");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n          ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n        ");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n        ");e.appendChild(t,a);var a=e.createElement("li"),n=e.createTextNode("\n          ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","#");var r=e.createTextNode("Item 4");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n          ");e.appendChild(a,n);var n=e.createElement("ul");e.setAttribute(n,"class","menu");var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 4A");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 4B");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 4C");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 4D");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 4E");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n            ");e.appendChild(n,r);var r=e.createElement("li"),d=e.createElement("a");e.setAttribute(d,"href","#");var i=e.createTextNode("Item 4F");e.appendChild(d,i),e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n          ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n        ");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:16,column:4},end:{line:64,column:4}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("      Example form in a dropdown.\n");e.appendChild(t,a);var a=e.createComment("");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,1,1,a),e.insertBoundary(t,null),n},statements:[["block","dropdown-menu",[],["class","vertical","closingTime",0,"disableHover",!0],0,null,["loc",[null,[18,6],[63,24]]]]],locals:[],templates:[e]}}(),t=function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:72,column:10},end:{line:72,column:68}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("scarabaeus");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:80,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment(" Title Bar ");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","title-bar");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","title-bar-left");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("button");e.setAttribute(r,"class","menu-icon"),e.setAttribute(r,"type","button"),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("span");e.setAttribute(r,"class","title-bar-title");var d=e.createTextNode("Ember Hover Aim");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","title-bar-right");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("button");e.setAttribute(r,"class","menu-icon"),e.setAttribute(r,"type","button"),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","row");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","small-4 large-expand columns");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("h2"),d=e.createTextNode("Dropdown Menu");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("button");e.setAttribute(r,"class","button"),e.setAttribute(r,"data-toggle","example-dropdown");var d=e.createTextNode("Hover to Show Dropdown");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","row");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","small-8 large-expand columns");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("h2"),d=e.createTextNode("Tooltip");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),d=e.createTextNode("\n      The ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode(" hung quite\n      clear of any branches, and, if allowed to fall, would have fallen at our feet. Legrand\n      immediately took the scythe, and cleared with it a circular space, three or four yards\n      in diameter, just beneath the insect, and, having accomplished this, ordered Jupiter to\n      let go the string and come down from the tree.\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(2);return n[0]=e.createMorphAt(e.childAt(t,[4,1]),5,5),n[1]=e.createMorphAt(e.childAt(t,[6,1,3]),1,1),n},statements:[["block","zf-dropdown",[],["id","example-dropdown","hover",!0,"hoverDelay",0,"hoverPane",!0,"closeOnClick",!0],0,null,["loc",[null,[16,4],[64,20]]]],["block","zf-tooltip",[],["title","Fancy word for a beetle."],1,null,["loc",[null,[72,10],[72,83]]]]],locals:[],templates:[e,t]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=document.querySelector('meta[name="'+a+'"]').getAttribute("content"),r=JSON.parse(unescape(n)),d={default:r};return Object.defineProperty(d,"__esModule",{value:!0}),d}catch(e){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-hover-aim",version:"0.0.0+9392ca86"});