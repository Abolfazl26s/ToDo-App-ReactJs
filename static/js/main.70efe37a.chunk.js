(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(t,e,c){},15:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),a=c(7),i=c.n(a),l=(c(13),c(8)),o=c(2),r=c(0),u=function(t){var e=t.itemCount,c=t.handelFilterTasks,s=Object(n.useState)("all"),a=Object(o.a)(s,2),i=a[0],l=a[1],u=function(t){l(t),c(t)};return Object(r.jsxs)("footer",{children:[Object(r.jsx)("div",{className:"actions",children:Object(r.jsxs)("ul",{className:"actionsList",children:[Object(r.jsx)("li",{className:"listItem",children:Object(r.jsx)("button",{className:"all"===i?"active":"",onClick:function(){u("all")},children:"\u0647\u0645\u0647"})}),Object(r.jsx)("li",{className:"listItem",children:Object(r.jsx)("button",{onClick:function(){u("active")},className:"active"===i?"active":"",children:"\u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645"})}),Object(r.jsx)("li",{className:"listItem",children:Object(r.jsx)("button",{className:"completed"===i?"active":"",onClick:function(){u("completed")},children:"\u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647"})})]})}),Object(r.jsx)("div",{className:"countItem",children:e})]})},j=c(5),d=function(t){var e=t.addTask,c=Object(n.useState)(""),s=Object(o.a)(c,2),a=s[0],i=s[1];return Object(r.jsxs)("form",{className:"addToDo",onSubmit:function(t){t&&t.preventDefault(),""===a?alert("\u06a9\u0627\u0631 \u0627\u0645\u0631\u0648\u0632\u062a \u0631\u0648 \u0628\u0646\u0648\u06cc\u0633"):(e(a),i(""))},children:[Object(r.jsx)("input",{type:"text",placeholder:"\u06a9\u0627\u0631 \u0627\u0645\u0631\u0648\u0632\u062a \u0686\u06cc\u0647\u061f\u061f\u061f",value:a,onChange:function(t){t&&t.preventDefault(),i(t.target.value)}}),Object(r.jsx)("button",{type:"submit",className:"btn-grad",children:Object(r.jsx)(j.b,{size:"35"})})]})},b=function(){return Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"\u06a9\u0627\u0631\u0647\u0627\u06cc \u0631\u0648\u0632\u0627\u0646\u0647"})})},f=function(t){var e=t.ToDos,c=t.deleteTask,n=t.handelChangeStatus;return Object(r.jsx)("div",{className:"toDos",children:Object(r.jsx)("ul",{className:"toDos--List",children:e.map((function(t){return Object(r.jsxs)("li",{className:"toDos-Item ".concat(t.style),children:[Object(r.jsx)("input",{type:"checkbox",checked:t.status,onChange:function(){return n(t.id)}}),Object(r.jsx)("h3",{className:"title",children:t.title}),Object(r.jsx)("button",{onClick:function(){c(t.id)},children:Object(r.jsx)(j.a,{size:"30"})})]},"task-".concat(t.id))})).reverse()})})},O=c(18),h=function(){var t=Object(n.useState)([]),e=Object(o.a)(t,2),c=e[0],s=e[1],a=Object(n.useState)([]),i=Object(o.a)(a,2),j=i[0],h=i[1],x=Object(n.useState)("all"),m=Object(o.a)(x,2),v=m[0],p=m[1];Object(n.useEffect)((function(){s([])}),[]),Object(n.useEffect)((function(){switch(v){case"all":h(c);break;case"active":var t=c.filter((function(t){return!t.status}));h(t);break;case"completed":var e=c.filter((function(t){return t.status}));h(e);break;default:console.log(h(c))}}),[v,c]);return Object(r.jsxs)("div",{className:"toDoApp",children:[Object(r.jsx)(b,{}),Object(r.jsx)(d,{addTask:function(t){s([].concat(Object(l.a)(c),[{id:Object(O.a)(),title:t,status:!1,style:"addTodo"}]))}}),Object(r.jsx)(f,{ToDos:j,deleteTask:function(t){var e=c,n=e.findIndex((function(e){return e.id===t}));setTimeout((function(){delete e[n],e=e.filter((function(t){return t})),s(e)}),300)},handelChangeStatus:function(t){var e=c,n=e.findIndex((function(e){return e.id===t}));e[n].status=!e[n].status,e=e.filter((function(t){return t})),s(e)}}),Object(r.jsx)(u,{itemCount:j.length,handelFilterTasks:p})]})};c(15);var x=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(h,{})})},m=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,a=e.getLCP,i=e.getTTFB;c(t),n(t),s(t),a(t),i(t)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.70efe37a.chunk.js.map