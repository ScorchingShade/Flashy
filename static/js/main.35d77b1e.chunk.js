(this.webpackJsonpflashy=this.webpackJsonpflashy||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(16),s=n.n(a),i=(n(22),n(17)),o=n(3),u=(n.p,n(23),n(0));function l(e){var t=e.flashcard,n=Object(c.useState)(!1),r=Object(o.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)("initial"),l=Object(o.a)(i,2),d=l[0],j=l[1],f=Object(c.useRef)(),b=Object(c.useRef)();function h(){var e=f.current.getBoundingClientRect().height,t=b.current.getBoundingClientRect().height;j(Math.max(e,t,100))}return Object(c.useEffect)(h,[t.question,t.answer,t.options]),Object(c.useEffect)((function(){return window.addEventListener("resize",h),function(){return window.removeEventListener("resize",h)}}),[]),Object(u.jsxs)("div",{className:"card ".concat(a?"flip":""),style:{height:d},onClick:function(){return s(!a)},children:[Object(u.jsxs)("div",{className:"front",ref:f,children:[t.question,Object(u.jsx)("div",{className:"flashcard-options",children:t.options.map((function(e){return Object(u.jsx)("div",{className:"flashcard-option",children:e},e)}))})]}),Object(u.jsx)("div",{className:"back",ref:b,children:t.answer})]})}function d(e){var t=e.flashcards;return Object(u.jsx)("div",{className:"card-grid",children:t.map((function(e){return Object(u.jsx)(l,{flashcard:e},e.id)}))})}var j=n(7),f=n.n(j);var b=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useRef)(),s=Object(c.useRef)(),l=Object(c.useState)([]),j=Object(o.a)(l,2),b=j[0],h=j[1];Object(c.useEffect)((function(){f.a.get("https://opentdb.com/api_category.php").then((function(e){h(e.data.trivia_categories)}))})),Object(c.useEffect)((function(){}),[]);var m=function(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("form",{className:"header",onSubmit:function(e){e.preventDefault(),f.a.get("https://opentdb.com/api.php",{params:{amount:s.current.value,category:a.current.value}}).then((function(e){r(e.data.results.map((function(e,t){var n=m(e.correct_answer),c=[].concat(Object(i.a)(e.incorrect_answers.map((function(e){return m(e)}))),[n]);return{id:"".concat(t,"-").concat(Date.now()),question:m(e.question),answer:n,options:c.sort((function(){return Math.random()-.5}))}}))),console.log(e.data)}))},children:[Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("label",{htmlFor:"num",children:"Made by Ankush Sharma"})}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"category",children:"Category"}),Object(u.jsx)("select",{id:"category",ref:a,children:b.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"amount",children:"Number of Questions"}),Object(u.jsx)("input",{type:"number",id:"amount",min:"1",step:"1",defaultValue:10,ref:s})]}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("button",{className:"btn",children:"View Questions"})})]}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(d,{flashcards:n})})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),h()}},[[43,1,2]]]);
//# sourceMappingURL=main.35d77b1e.chunk.js.map