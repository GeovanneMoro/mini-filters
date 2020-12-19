(this["webpackJsonp20-redux-filter"]=this["webpackJsonp20-redux-filter"]||[]).push([[0],{26:function(e,c,t){},27:function(e,c,t){"use strict";t.r(c);var r=t(1),n=t(0),i=t.n(n),a=t(6),s=t.n(a),l=t(14),o=t(5),u=t(3),j=t(8),b=Object(j.b)({name:"products",initialState:{data:[{id:1,name:"T-Shirt",color:"blue",price:25},{id:2,name:"T-Shirt",color:"black",price:25},{id:3,name:"Shorts ",color:"black",price:35},{id:4,name:"Skirt",color:"black",price:22},{id:5,name:"Polo Shirt",color:"blue",price:42},{id:6,name:"Dress",color:"blue",price:60},{id:7,name:"Shirt",color:"pink",price:30}],filters:{colors:[],prices:{max:0,min:0},order:0}},reducers:{changeFilters:function(e,c){e.filters[c.payload.name]=c.payload.value}}}),d=function(e){var c=e.products;return Array.from(new Set(c.data.map((function(e){return e.color}))))},h=b.actions.changeFilters,m=b.reducer,O=function(){var e=Object(u.c)(d),c=Object(n.useState)(""),t=Object(o.a)(c,2),a=t[0],s=t[1],j=Object(n.useState)(""),b=Object(o.a)(j,2),m=b[0],O=b[1],x=Object(n.useState)([]),p=Object(o.a)(x,2),f=p[0],v=p[1],S=Object(n.useState)(0),k=Object(o.a)(S,2),g=k[0],P=k[1],y=Object(u.b)();function N(e){var c=e.target;c.checked?v([].concat(Object(l.a)(f),[c.value])):v(f.filter((function(e){return e!==c.value})))}return i.a.useEffect((function(){y(h({name:"order",value:g}))}),[g,y]),i.a.useEffect((function(){y(h({name:"colors",value:f}))}),[f,y]),i.a.useEffect((function(){y(h({name:"prices",value:{min:Number(a),max:Number(m)}}))}),[a,m,y]),Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{children:"Filters"}),Object(r.jsx)("label",{className:"subTitle",htmlFor:"minPrice",children:"Minimum Price"}),Object(r.jsx)("input",{id:"minPrice",type:"number",value:a,onChange:function(e){var c=e.target;return s(c.value)},placeholder:"min"}),Object(r.jsx)("label",{className:"subTitle",htmlFor:"maxPrice",children:"Maximum Price"}),Object(r.jsx)("input",{id:"maxPrice",type:"number",value:m,onChange:function(e){var c=e.target;return O(c.value)},placeholder:"max"}),Object(r.jsx)("span",{className:"subTitle",children:"Cores"}),Object(r.jsx)("div",{className:"checkbox",children:null===e||void 0===e?void 0:e.map((function(e){return Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",value:e,checked:(c=e,f.includes(c)),onChange:N}),e]},e);var c}))}),Object(r.jsx)("span",{className:"subTitle",children:"Sort by price"}),Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)("button",{onClick:function(){return P(!0)},children:"High"}),Object(r.jsx)("button",{onClick:function(){return P(!1)},children:"Low"})]})]})},x=function(e){var c,t,r,n=e.products,i=n.data,a=n.filters;return i.filter((r=a.colors,function(e){return!r.length||r.includes(e.color)})).filter((t=a.prices,function(e){return(!t.max||e.price<=t.max)&&(!t.min||e.price>=t.min)})).sort((c=a.order,function(e,t){switch(c){case!0:return t.price-e.price;case!1:return e.price-t.price;default:return t}}))},p=function(){var e=Object(u.c)(x);return Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{children:"Products"}),Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Product"}),Object(r.jsx)("th",{children:"Color"}),Object(r.jsx)("th",{children:"Price"})]})}),Object(r.jsx)("tbody",{children:e.map((function(e){var c=e.id,t=e.name,n=e.color,i=e.price;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t}),Object(r.jsx)("td",{children:n}),Object(r.jsx)("td",{children:i})]},c)}))})]})]})};t(26);var f=function(){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(O,{}),Object(r.jsx)(p,{})]})},v=t(2),S=Object(v.c)({products:m}),k=Object(j.a)({reducer:S});s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(u.a,{store:k,children:Object(r.jsx)(f,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.883d7a2a.chunk.js.map