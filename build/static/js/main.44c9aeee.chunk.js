(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{54:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t(23),a=t(9),u=t(12),o=t(4),i=t(0),s=function(e){var n=e.filterQuery,t=e.handleFilterChange;return Object(i.jsxs)("div",{children:["filter shown with:"," ",Object(i.jsx)("input",{value:n,onChange:t})]})},d=function(e){var n=e.handleFormSubmit,t=e.newName,c=e.handleNameChange,r=e.newNumber,a=e.handleNumberChange;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:t,onChange:c})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:r,onChange:a})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},j=function(e){var n=e.person,t=e.query,c=e.onDelete,r=Object(a.a)(n).filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(i.jsx)("div",{children:r.map((function(e){return Object(i.jsxs)("div",{id:e.id,children:[e.name," ",e.number,Object(i.jsx)("button",{onClick:c,value:e.name,children:"delete"})]},e.id)}))})},b=function(e){var n=e.message,t=e.status,c="notification ".concat(t);return Object(i.jsx)("div",{className:c,children:n})},h=t(6),l=t.n(h),f="/api/persons",m=function(){return l.a.get(f).then((function(e){return e.data}))},O=function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1];Object(c.useEffect)((function(){m().then((function(e){return r(e)}))}),[]);var h=Object(c.useState)(""),O=Object(o.a)(h,2),v=O[0],g=O[1],x=Object(c.useState)(""),p=Object(o.a)(x,2),w=p[0],C=p[1],N=Object(c.useState)(""),y=Object(o.a)(N,2),S=y[0],k=y[1],D=Object(c.useState)([]),F=Object(o.a)(D,2),L=F[0],E=F[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),0!==L.length?Object(i.jsx)(b,{message:L[0],status:L[1]}):"",Object(i.jsx)(s,{filterQuery:v,handleFilterChange:function(e){g(e.target.value)}}),Object(i.jsx)("h2",{children:"Add a new"}),Object(i.jsx)(d,{handleFormSubmit:function(e){e.preventDefault();var n={name:w,number:S},c=t.find((function(e){return e.name.toLowerCase()===w.toLowerCase()})),o=Object(u.a)(Object(u.a)({},c),{},{number:S});void 0===c?function(e){return l.a.post(f,e).then((function(e){return e.data}))}(n).then((function(e){r([].concat(Object(a.a)(t),[e])),E(["Added ".concat(n.name),"success"])})):window.confirm("".concat(c.name," is already added to your phonebook, replace with a new one ?"))&&function(e,n){return l.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data})).catch((function(e){return console.log(e.message)}))}(c.id,o).then((function(e){return e.data})).then((function(){return E(["Change ".concat(n.name," number"),"success"])})).then((function(){return m().then((function(e){return r(e)}))}))},newName:w,handleNameChange:function(e){C(e.target.value)},newNumber:S,handleNumberChange:function(e){k(e.target.value)}}),Object(i.jsx)("h3",{children:"Numbers"}),Object(i.jsx)(j,{person:t,query:v,onDelete:function(e){var n;E(["Information of ".concat(e.target.value," has already been removed from server"),"warning"]),window.confirm("Delete ".concat(e.target.value," ?"))?(n=e.target.parentElement.id,l.a.delete("".concat(f,"/").concat(n))).then((function(){return m().then((function(e){return r(e)}))})):E([])}})]})},v=(t(54),document.getElementById("root"));Object(r.createRoot)(v).render(Object(i.jsx)(c.StrictMode,{children:Object(i.jsx)(O,{})}))}},[[55,1,2]]]);
//# sourceMappingURL=main.44c9aeee.chunk.js.map