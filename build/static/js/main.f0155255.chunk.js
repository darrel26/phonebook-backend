(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{54:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t(23),c=t(9),u=t(12),o=t(4),i=t(0),s=function(e){var n=e.filterQuery,t=e.handleFilterChange;return Object(i.jsxs)("div",{children:["filter shown with:"," ",Object(i.jsx)("input",{value:n,onChange:t})]})},d=function(e){var n=e.handleFormSubmit,t=e.newName,r=e.handleNameChange,a=e.newNumber,c=e.handleNumberChange;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:t,onChange:r})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:a,onChange:c})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},j=function(e){var n=e.person,t=e.query,r=e.onDelete,a=Object(c.a)(n).filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(i.jsx)("div",{children:a.map((function(e){return Object(i.jsxs)("div",{id:e.id,children:[e.name," ",e.number,Object(i.jsx)("button",{onClick:r,value:e.name,children:"delete"})]},e.id)}))})},b=function(e){var n=e.message,t=e.status,r="notification ".concat(t);return Object(i.jsx)("div",{className:r,children:n})},h=t(6),l=t.n(h),f="/api/persons",m=function(){return l.a.get(f).then((function(e){return e.data}))},O=function(){var e=Object(r.useState)([]),n=Object(o.a)(e,2),t=n[0],a=n[1];Object(r.useEffect)((function(){m().then((function(e){return a(e)}))}),[]);var h=Object(r.useState)(""),O=Object(o.a)(h,2),v=O[0],g=O[1],x=Object(r.useState)(""),p=Object(o.a)(x,2),w=p[0],C=p[1],N=Object(r.useState)(""),y=Object(o.a)(N,2),S=y[0],k=y[1],D=Object(r.useState)([]),F=Object(o.a)(D,2),L=F[0],E=F[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),0!==L.length?Object(i.jsx)(b,{message:L[0],status:L[1]}):"",Object(i.jsx)(s,{filterQuery:v,handleFilterChange:function(e){g(e.target.value)}}),Object(i.jsx)("h2",{children:"Add a new"}),Object(i.jsx)(d,{handleFormSubmit:function(e){e.preventDefault();var n={name:w,number:S},r=t.find((function(e){return e.name.toLowerCase()===w.toLowerCase()})),o=Object(u.a)(Object(u.a)({},r),{},{number:S});void 0===r?function(e){return l.a.post(f,e).then((function(e){return e.data}))}(n).then((function(e){a([].concat(Object(c.a)(t),[e])),E(["Added ".concat(n.name),"success"])})).catch((function(e){return E([e.response.data.error,"warning"])})):window.confirm("".concat(r.name," is already added to your phonebook, replace with a new one ?"))&&function(e,n){return l.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))}(r.id,o).then((function(e){return e.data})).then((function(){return E(["Change ".concat(n.name," number"),"success"])})).then((function(){return m().then((function(e){return a(e)}))})).catch((function(e){return E([e.response.data.error,"warning"])}))},newName:w,handleNameChange:function(e){C(e.target.value)},newNumber:S,handleNumberChange:function(e){k(e.target.value)}}),Object(i.jsx)("h3",{children:"Numbers"}),Object(i.jsx)(j,{person:t,query:v,onDelete:function(e){var n;E(["Information of ".concat(e.target.value," has already been removed from server"),"warning"]),window.confirm("Delete ".concat(e.target.value," ?"))?(n=e.target.parentElement.id,l.a.delete("".concat(f,"/").concat(n))).then((function(){return m().then((function(e){return a(e)}))})):E([])}})]})},v=(t(54),document.getElementById("root"));Object(a.createRoot)(v).render(Object(i.jsx)(r.StrictMode,{children:Object(i.jsx)(O,{})}))}},[[55,1,2]]]);
//# sourceMappingURL=main.f0155255.chunk.js.map