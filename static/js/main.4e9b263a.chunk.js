(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(3),s=n.n(r),a=(n(12),n(4)),o=n(5),i=n(7),h=n(6),l=n(0),b=function(e){var t=e.email,n=e.username,c=e.name,r=e.id;return Object(l.jsxs)("div",{className:"bg-light-blue dib pa3 ma2 grow bw2 shadow-5",children:[Object(l.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(r,"?200x200")}),Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsxs)("h2",{children:[" ",c," "]}),Object(l.jsx)("p",{children:n}),Object(l.jsxs)("p",{children:[" ",t]})]})]})},u=function(e){var t=e.robot;return Object(l.jsx)("div",{children:t.map((function(e,n){return Object(l.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},d=function(e){e.searchfield;var t=e.searchChange;return Object(l.jsx)("div",{className:"pa3",children:Object(l.jsx)("input",{className:"pa2 bg-lightest-green ba",type:"search",placeholder:"search robots",onChange:t})})},j=(n(14),function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"4px black solid",height:"800px"},children:e.children})}),f=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robot:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robot:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robot.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robot.length?Object(l.jsx)("h1",{children:" LOADING "}):Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:" ROBOFRIENDS "}),Object(l.jsx)(d,{searchChange:this.onSearchChange}),Object(l.jsx)(j,{children:Object(l.jsx)(u,{robot:t})})]})}}]),n}(c.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(15);s.a.render(Object(l.jsx)(f,{}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.4e9b263a.chunk.js.map