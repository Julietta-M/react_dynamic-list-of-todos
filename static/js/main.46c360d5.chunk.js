(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),s=a.n(c),l=a(6),o=a(1),u=a(2),i=a(4),d=a(3),m=(a(17),a(18),a(5)),p=a(7),h=a.n(p),f=(a(19),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedStatus:"",filteredTitle:""},e.handleChange=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(m.a)({},r,n))},e.searchedTodos=function(t){return null===t.title?t.title:t.title.includes(e.state.filteredTitle)},e.selectedByStatus=function(t){return"completed"===e.state.selectedStatus?t.completed:"active"===e.state.selectedStatus?!t.completed:t},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.todos,a=e.selectUser,n=e.selectedUserId,c=e.changeStatus,s=this.state,l=s.selectedStatus,o=s.filteredTitle,u=t.filter(this.searchedTodos).filter(this.selectedByStatus);return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("input",{className:"form-control",name:"filteredTitle",value:o,placeholder:"Filter",onChange:this.handleChange}),r.a.createElement("select",{className:"form-select",name:"selectedStatus",value:l,onChange:this.handleChange},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"active"},"Active"),r.a.createElement("option",{value:"completed"},"Completed")),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},u.map((function(e){return r.a.createElement("li",{className:h()("TodoList__item",{"TodoList__item--unchecked":!1===e.completed,"TodoList__item--checked":!0===e.completed}),key:e.id},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:e.completed,onClick:function(){return c(e.id)},readOnly:!0}),r.a.createElement("p",null,e.title)),r.a.createElement("button",{className:h()("TodoList__user-button","button",{"TodoList__user-button--selected":e.userId===n}),type:"button",onClick:function(){a(e.userId)}},"User\xa0",e.userId))})))))}}]),a}(r.a.PureComponent)),v=a(8),b=a.n(v),E=a(11),_=function(e){return fetch("".concat("https://mate-api.herokuapp.com").concat(e)).then((function(e){return e.json()})).then((function(e){return e.data}))},y=(a(21),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:{}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.loadData()}},{key:"loadData",value:function(){var e=Object(E.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a=this.props.userId,_("/users/".concat(a));case 2:t=e.sent,this.setState({user:t});case 4:case"end":return e.stop()}var a}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.user;return r.a.createElement(r.a.Fragment,null,null!==e?r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("button",{className:"btn btn-outline-danger",onClick:this.props.clearUser,type:"button"},"Clear"),r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:",e.id)),r.a.createElement("h3",{className:"CurrentUser__name"},e.name),r.a.createElement("p",{className:"CurrentUser__email"},e.email),r.a.createElement("p",{className:"CurrentUser__phone"},e.phone)):"No user found")}}]),a}(r.a.PureComponent)),k=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0},e.clearUser=function(){e.setState({selectedUserId:0})},e.changeStatus=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(l.a)(Object(l.a)({},e),{},{completed:!e.completed}):Object(l.a)({},e)}))}}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;_("/todos").then((function(t){e.setState({todos:t})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.todos,n=t.selectedUserId;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(f,{todos:a,selectedUserId:n,changeStatus:this.changeStatus,selectUser:function(t){e.setState({selectedUserId:t})}})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},n?r.a.createElement(y,{userId:n,clearUser:this.clearUser}):"No user selected")))}}]),a}(r.a.Component);s.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.46c360d5.chunk.js.map