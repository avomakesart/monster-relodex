(this.webpackJsonpmonsters=this.webpackJsonpmonsters||[]).push([[0],{17:function(e,n,t){e.exports=t(29)},22:function(e,n,t){},23:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(7),i=t.n(o),c=(t(22),t(8)),s=t(9),l=t(13),u=t(10),m=t(14),d=(t(23),t(1)),h=t(2);function p(){var e=Object(d.a)(["\n  width: 85vw;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 20px;\n"]);return p=function(){return e},e}var f=h.a.div(p());function g(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: #95dada;\n  border: 1px solid grey;\n  border-radius: 5px;\n  padding: 25px;\n  cursor: pointer;\n  -moz-osx-font-smoothing: grayscale;\n  backface-visibility: hidden;\n  transform: translateZ(0);\n  transition: transform 0.25s ease-out;\n\n  &:hover {\n    transform: scale(1.05);\n  }\n"]);return g=function(){return e},e}var v=h.a.div(g()),b=function(e){return a.a.createElement(v,null,a.a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster"}),a.a.createElement("h2",null,e.monster.name),a.a.createElement("p",null,e.monster.email))},w=function(e){return a.a.createElement(f,null,e.monsters.map((function(e){return a.a.createElement(b,{key:e.id,monster:e})})))};function x(){var e=Object(d.a)(["\n  -webkit-appearance: none;\n  border: none;\n  outline: none;\n  padding: 10px;\n  width: 150px;\n  line-height: 30px;\n  margin-bottom: 30px;\n"]);return x=function(){return e},e}var y=h.a.input(x()),E=function(e){var n=e.placeholder,t=e.handleChange;return a.a.createElement(y,{type:"search",placeholder:n,onChange:t})},j=function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(a)))).state={monsters:[],searchField:""},t.handleChange=function(e){t.setState({searchField:e.target.value})},t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({monsters:n})}))}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Monster Relodex"),a.a.createElement(E,{placeholder:"search monsters",handleChange:this.handleChange}),a.a.createElement(w,{monsters:r}))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.229da07c.chunk.js.map