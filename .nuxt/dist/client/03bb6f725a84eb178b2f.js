(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{197:function(t,e,n){var content=n(207);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("55c8da78",content,!0,{sourceMap:!1})},198:function(t,e,n){var content=n(209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("fea0b648",content,!0,{sourceMap:!1})},199:function(t,e,n){var content=n(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("7c64d470",content,!0,{sourceMap:!1})},200:function(t,e,n){var content=n(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("70ba1310",content,!0,{sourceMap:!1})},206:function(t,e,n){"use strict";var r=n(197);n.n(r).a},207:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,".hover-overlay[data-v-331540f8]{position:absolute;border:1px solid #8e10d6;opacity:.5}.hover-overlay[data-v-331540f8],.image-container[data-v-331540f8]{width:200px;height:200px}.image[data-v-331540f8]{height:100%;width:100%;font-size:150px;text-align:center;color:#b8b3b3;border:1px solid #d3d3d3;line-height:200px}.replace-enter-active[data-v-331540f8],.replace-leave-active[data-v-331540f8]{transition:all 1s}.replace-enter[data-v-331540f8],.replace-leave-to[data-v-331540f8]{opacity:0}.fade-enter-active[data-v-331540f8],.fade-leave-active[data-v-331540f8]{transition:all .5s}.fade-enter[data-v-331540f8],.fade-leave-to[data-v-331540f8]{opacity:0}",""])},208:function(t,e,n){"use strict";var r=n(198);n.n(r).a},209:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,".home-banner[data-v-394e907a]{padding-bottom:30px}.banner-content[data-v-394e907a]{color:#747272}.banner-owner[data-v-394e907a]{color:#8e10d6}",""])},210:function(t,e,n){"use strict";var r=n(199);n.n(r).a},211:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,".description[data-v-04617c54]{color:#fff}.wrapper[data-v-04617c54]{display:grid;grid-template-columns:auto;grid-gap:20px}.project[data-v-04617c54]{width:100%}.banner-container[data-v-04617c54]{width:100%;max-height:250px;overflow:hidden;position:relative;box-sizing:border-box}.banner-container[data-v-04617c54]:hover{cursor:pointer;border:none}.overlay[data-v-04617c54]{display:flex;align-items:center;justify-content:center;height:100%;background-color:rgba(37,37,37,.71765);position:absolute;box-sizing:border-box}.banner[data-v-04617c54],.overlay[data-v-04617c54]{width:100%}",""])},212:function(t,e,n){"use strict";var r=n(200);n.n(r).a},213:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,"",""])},214:function(t,e,n){"use strict";n.r(e);n(111);var r={props:{tileIndex:{required:!0,type:Number}},data:function(){return{isHovered:!1,intervalId:0,randomValue:0}},computed:{tileContent:function(){return this.$store.getters["grid/tileContent"](this.tileIndex)},currentTurn:function(){return this.$store.getters["grid/entity"]("currentTurn")},currentIcon:function(){return{"far fa-circle":"player"===this.tileContent,"fas fa-times":"IA"===this.tileContent}}},methods:{changeState:function(t){this.isHovered=t}},created:function(){},beforeDestroy:function(){}},o=(n(206),n(4)),c=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image-container",on:{mouseenter:function(e){return t.changeState(!0)},mouseleave:function(e){return t.changeState(!1)}}},[n("transition",{attrs:{name:"fade"}},[t.isHovered?n("div",{staticClass:"hover-overlay"}):t._e()]),t._v(" "),n("div",{staticClass:"image"},[n("transition",{attrs:{name:"replace",mode:"out-in"}},["empty"!==t.tileContent?n("i",{class:t.currentIcon}):t._e()])],1)],1)},[],!1,null,"331540f8",null).exports,l=(n(208),Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-banner"},[e("h5",{staticClass:"banner-owner"},[this._v("narajaon's")]),this._v(" "),e("h1",{staticClass:"banner-title"},[this._v("Website Portfolio")]),this._v(" "),e("p",{staticClass:"banner-content"},[this._v("\n        Fullstack generalist 👊 High and low level programming enthusiast 🙏\n        Creative and passionate 🤘 Studied at "),e("strong",[this._v("42 Paris 🚀")])])])}],!1,null,"394e907a",null).exports),d=(n(56),n(10)),f={data:function(){return{projects:[{title:"PROJECT 1",description:"DOING SOME COOL STUFF",src:"https://www.humanesociety.org/sites/default/files/styles/1441x612/public/2018/08/kitten-440379.jpg?h=f6a7b1af&itok=HVqvfhtg",show:!1},{title:"PROJECT 2",description:"DOING SOME AWESOME STUFF",src:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",show:!1},{title:"PROJECT 3",description:"DOING SOME AMAZING STUFF",src:"https://images.unsplash.com/photo-1488740304459-45c4277e7daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",show:!1}],isLoading:!1,hoveredBanner:null}},computed:{},methods:{trackBannerState:function(t){this.hoveredBanner=t},showBanner:function(t){var e=this;setTimeout(function(){e.projects[t].show=!0},500*t)},isHovered:function(t){return this.hoveredBanner===t}},mounted:function(){var t=Object(d.a)(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.isLoading=!0,this.projects.forEach(function(element,t){e.showBanner(t)}),this.isLoading=!1;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},v=(n(210),{components:{ImageCard:c,HomeBanner:l,ProjectGrid:Object(o.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},t._l(t.projects,function(e,r){return n("div",{key:e.title,staticClass:"project"},[n("transition",{attrs:{name:"transform"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"project.show"}]},[n("h3",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{class:{"banner-container":!0},on:{mouseenter:function(e){return t.trackBannerState(r)},mouseleave:function(e){return t.trackBannerState(null)}}},[n("transition",{attrs:{name:"fade",mode:"in-out"}},[t.isHovered(r)?n("div",{staticClass:"overlay"},[n("span",{staticClass:"description"},[t._v(t._s(e.description))])]):t._e()]),t._v(" "),n("img",{staticClass:"banner",attrs:{src:e.src,alt:"Project image"}})],1)])])],1)}),0)},[],!1,null,"04617c54",null).exports}}),h=(n(212),Object(o.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-page"},[e("home-banner"),this._v(" "),e("project-grid")],1)},[],!1,null,"65693760",null));e.default=h.exports}}]);