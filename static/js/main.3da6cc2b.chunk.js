(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var s=n(5),c=n.n(s),r=n(4),i=n(1),o=n(2),a=n.n(o),u=(n(10),n(11),n(0)),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b="abc",d="length";var j=function(){var t=Object(i.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(i.useState)(!1),o=Object(r.a)(c,2),j=o[0],h=o[1],m=function(t,e){var n=e.sortField,s=e.isReversed,c=t.map((function(t,e){return{id:e+1,name:t}}));return n&&c.sort((function(t,e){var s=t.name,c=e.name;switch(n){case b:return s.localeCompare(c);case d:return s.length-c.length;default:return 0}})),s?c.reverse():c}(l,{sortField:n,isReversed:j});return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:a()("button is-info",{"is-light":n!==b}),onClick:function(){return s(b)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:a()("button is-success",{"is-light":n!==d}),onClick:function(){return s(d)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:a()("button is-warning",{"is-light":!j}),onClick:function(){return h(!j)},children:"Reverse"}),(""!==n||j)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){h(!1),s("")},children:"Reset"})]}),Object(u.jsx)("ul",{children:m.map((function(t){var e=t.name,n=t.id;return Object(u.jsx)("li",{"data-cy":"Good",children:e},n)}))})]})};c.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.3da6cc2b.chunk.js.map