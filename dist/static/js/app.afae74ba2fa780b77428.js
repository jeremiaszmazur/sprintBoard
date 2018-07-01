webpackJsonp([2,0],[function(t,i,e){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=e(19),a=s(n),o=e(15),l=s(o);e(7),e(8),new a.default({el:"#app",template:"<App/>",components:{App:l.default}})},,function(t,i,e){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(i,"__esModule",{value:!0});var n=e(16),a=s(n);i.default={name:"app",components:{Hello:a.default}}},function(t,i,e){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(i,"__esModule",{value:!0});var n=e(4),a=s(n),o=e(20),l=s(o);i.default={name:"hello",components:{draggable:l.default},data:function(){return{list:[],list2:[],list3:[],active:-1,editable:!0,isDragging:!1,delayedDragging:!1,debug:!1}},mounted:function(){localStorage.getItem("board")&&this.load()},methods:{create:function(){this.list.push({name:"New ticket",order:this.count+1,fixed:!1,description:"",storyPoint:1})},load:function(){try{var t=JSON.parse(localStorage.getItem("board"));this.list=t.todo,this.list2=t.inProgress,this.list3=t.done}catch(t){alert("Error. Open console"),console.log("error",t)}},removeItem:function(t){this.active=-1;var i=-1;i=this.list.findIndex(function(i){return i==t}),i!=-1?this.list.splice(i,1):(i=this.list2.findIndex(function(i){return i==t}),i!=-1?this.list2.splice(i,1):(i=this.list3.findIndex(function(i){return i==t}),i!=-1?this.list3.splice(i,1):alert("ERROR")))},remove:function(){localStorage.removeItem("board"),this.list=[],this.list2=[],this.list3=[],alert("Removed!")},save:function(){localStorage.setItem("board",(0,a.default)({todo:this.list,inProgress:this.list2,done:this.list3})),alert("Saved!")},orderList:function(){this.list=this.list.sort(function(t,i){return t.order-i.order})},onMove:function(t){var i=t.relatedContext,e=t.draggedContext,s=i.element,n=e.element;return!(s&&s.fixed||n.fixed)}},computed:{count1:function(){var t=0;return this.list.forEach(function(i){t+=Number(i.storyPoint)}),t},count2:function(){var t=0;return this.list2.forEach(function(i){t+=Number(i.storyPoint)}),t},count3:function(){var t=0;return this.list3.forEach(function(i){t+=Number(i.storyPoint)}),t},count:function(){return this.list.length+this.list2.length+this.list3.length},dragOptions:function(){return{animation:0,group:"description",disabled:!this.editable,ghostClass:"ghost"}},listString:function(){return(0,a.default)(this.list,null,2)},list2String:function(){return(0,a.default)(this.list2,null,2)},list3String:function(){return(0,a.default)(this.list3,null,2)}},watch:{isDragging:function(t){var i=this;return t?void(this.delayedDragging=!0):void this.$nextTick(function(){i.delayedDragging=!1})}}}},,,,function(t,i){},function(t,i){},function(t,i){},function(t,i){},,,,,function(t,i,e){e(10);var s=e(1)(e(2),e(18),null,null);t.exports=s.exports},function(t,i,e){e(9);var s=e(1)(e(3),e(17),null,null);t.exports=s.exports},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("nav",{staticClass:"navbar navbar-inverse"},[e("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[e("ul",{staticClass:"nav navbar-nav"},[e("li",[e("a",{attrs:{href:"#"},on:{click:t.create}},[t._v("Create task")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"},on:{click:t.load}},[t._v("Load board")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"},on:{click:t.save}},[t._v("Save board")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"},on:{click:t.remove}},[t._v("Format board")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"},on:{click:t.orderList}},[t._v("Order list")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"},on:{click:function(i){t.editable=!t.editable}}},[t.editable?e("span",[t._v("Block editable")]):e("span",[t._v("Blocked")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"},on:{click:function(i){t.debug=!t.debug}}},[t.debug?e("span",[t._v("Active debug")]):e("span",[t._v("Deactived debug")])])])])])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 todo-list"},[e("h1",[t._v("\n              TODO\n              "),e("span",{staticClass:"badge"},[t._v(t._s(t.list.length))]),t._v(" "),e("span",{staticClass:"badge"},[t._v(t._s(t.count1))])]),t._v(" "),e("draggable",{staticClass:"list-group",attrs:{element:"ul",options:t.dragOptions,move:t.onMove},on:{start:function(i){t.isDragging=!0},end:function(i){t.isDragging=!1}},model:{value:t.list,callback:function(i){t.list=i},expression:"list"}},[e("transition-group",{attrs:{type:"transition",name:"flip-list"}},t._l(t.list,function(i){return e("li",{key:i.order,staticClass:"list-group-item",class:{active:i==t.active},on:{click:function(e){t.active=i}}},[e("i",{class:i.fixed?"fa fa-anchor":"glyphicon glyphicon-pushpin",attrs:{"aria-hidden":"true"},on:{click:function(t){i.fixed=!i.fixed}}}),t._v("\n                    "+t._s(i.name)+"\n                    "),e("span",{staticClass:"badge"},[t._v(t._s(i.storyPoint))])])}))],1)],1),t._v(" "),e("div",{staticClass:"col-md-4 inProgress-list"},[e("h1",[t._v("\n              IN PROGRESS\n              "),e("span",{staticClass:"badge"},[t._v(t._s(t.list2.length))]),t._v(" "),e("span",{staticClass:"badge"},[t._v(t._s(t.count2))])]),t._v(" "),e("draggable",{attrs:{element:"span",options:t.dragOptions,move:t.onMove},model:{value:t.list2,callback:function(i){t.list2=i},expression:"list2"}},[e("transition-group",{staticClass:"list-group",attrs:{name:"no",tag:"ul"}},t._l(t.list2,function(i){return e("li",{key:i.order,staticClass:"list-group-item",class:{active:i==t.active},on:{click:function(e){t.active=i}}},[e("i",{class:i.fixed?"fa fa-anchor":"glyphicon glyphicon-pushpin",attrs:{"aria-hidden":"true"},on:{click:function(t){i.fixed=!i.fixed}}}),t._v("\n                    "+t._s(i.name)+"\n                    "),e("span",{staticClass:"badge"},[t._v(t._s(i.storyPoint))])])}))],1)],1),t._v(" "),e("div",{staticClass:"col-md-4 done-list"},[e("h1",[t._v("\n              DONE\n              "),e("span",{staticClass:"badge"},[t._v(t._s(t.list3.length))]),t._v(" "),e("span",{staticClass:"badge"},[t._v(t._s(t.count3))])]),t._v(" "),e("draggable",{attrs:{element:"span",options:t.dragOptions,move:t.onMove},model:{value:t.list3,callback:function(i){t.list3=i},expression:"list3"}},[e("transition-group",{staticClass:"list-group",attrs:{name:"no",tag:"ul"}},t._l(t.list3,function(i){return e("li",{key:i.order,staticClass:"list-group-item",class:{active:i==t.active},on:{click:function(e){t.active=i}}},[e("i",{class:i.fixed?"fa fa-anchor":"glyphicon glyphicon-pushpin",attrs:{"aria-hidden":"true"},on:{click:function(t){i.fixed=!i.fixed}}}),t._v("\n                    "+t._s(i.name)+"\n                    "),e("span",{staticClass:"badge label-warning"},[t._v(t._s(i.storyPoint))])])}))],1)],1)]),t._v(" "),t.debug?e("div",{staticClass:"row"},[e("div",{staticClass:"list-group col-md-4"},[e("pre",[t._v(t._s(t.listString))])]),t._v(" "),e("div",{staticClass:"list-group col-md-4"},[e("pre",[t._v(t._s(t.list2String))])]),t._v(" "),e("div",{staticClass:"list-group col-md-4"},[e("pre",[t._v(t._s(t.list3String))])])]):t._e()]),t._v(" "),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"form-group form-group-lg panel panel-default"},[t._m(1),t._v(" "),t.active!=-1?e("div",{staticClass:"panel-body"},[e("h6",[t._v("Task name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.active.name,expression:"active.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.active.name},on:{input:function(i){i.target.composing||t.$set(t.active,"name",i.target.value)}}}),t._v(" "),e("h6",[t._v("Storypoint")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.active.storyPoint,expression:"active.storyPoint"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.active.storyPoint},on:{input:function(i){i.target.composing||t.$set(t.active,"storyPoint",i.target.value)}}}),t._v(" "),e("h6",[t._v("Description")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.active.description,expression:"active.description"}],staticClass:"form-control",domProps:{value:t.active.description},on:{input:function(i){i.target.composing||t.$set(t.active,"description",i.target.value)}}}),t._v(" "),e("hr"),t._v(" "),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(i){t.removeItem(t.active)}}},[t._v("Remove")]),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(i){t.active=-1}}},[t._v("Close")])]):e("div",{staticClass:"panel-body"},[t._v("\n              Select task\n            ")])])])])])])},staticRenderFns:[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"navbar-header"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("SprintBoard")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"panel-heading"},[e("h3",{staticClass:"panel-title"},[t._v("Task details")])])}]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500&subset=latin-ext",rel:"stylesheet"}}),t._v(" "),e("hello")],1)},staticRenderFns:[]}}]);
//# sourceMappingURL=app.afae74ba2fa780b77428.js.map