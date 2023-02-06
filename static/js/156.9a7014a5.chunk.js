"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[156],{1616:function(n,t,e){e.d(t,{j:function(){return u}});var r,a=e(168),i=e(6444).ZP.p(r||(r=(0,a.Z)(["\n  color: red;\n  text-align: center;\n  font-size: 25px;\n"]))),c=e(184),u=function(){return(0,c.jsx)(i,{children:"Something went wrong... Try reloading the page"})}},854:function(n,t,e){e.d(t,{a:function(){return i}});var r=e(5243),a=e(184),i=function(){return(0,a.jsx)(r.p2,{height:"80",width:"80",color:"#5f0000",ariaLabel:"circles-loading",wrapperStyle:{margin:"0 auto",display:"block"},wrapperClass:"",visible:!0})}},9881:function(n,t,e){e.d(t,{O:function(){return w}});var r,a,i,c,u,o=e(7692),s=e(168),p=e(6444),f=e(1087),d=p.ZP.li(r||(r=(0,s.Z)(["\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n  }\n"]))),l=(0,p.ZP)(f.rU)(a||(a=(0,s.Z)(["\n  color: #5f0000;\n"]))),h=p.ZP.h3(i||(i=(0,s.Z)(["\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin-top: 5px;\n  font-size: 20px;\n"]))),x=p.ZP.img(c||(c=(0,s.Z)(["\n  width: 100%;\n  height: 500px;\n  object-fit: cover;\n  cursor: pointer;\n"]))),m=e(184),v=function(n){var t=n.id,e=n.title,r=n.poster_path,a=n.state;return(0,m.jsx)(d,{children:(0,m.jsxs)(l,{to:"/movies/".concat(t),state:a,children:[(0,m.jsx)(x,{src:r?"https://image.tmdb.org/t/p/w500".concat(r):"https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-",alt:e,loading:"lazy"}),(0,m.jsxs)(h,{children:[(0,m.jsx)(o.FXJ,{}),e]})]})},t)},g=p.ZP.ul(u||(u=(0,s.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),w=function(n){var t=n.movies,e=n.state;return(0,m.jsx)("div",{children:(0,m.jsx)(g,{children:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path;return(0,m.jsx)(v,{id:t,title:r,poster_path:a,state:e,loading:"lazy"},t)}))})})}},156:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a,i=e(5861),c=e(9439),u=e(7757),o=e.n(u),s=e(2791),p=e(7689),f=e(1933),d=e(9881),l=e(854),h=e(1616),x=e(168),m=e(6444),v=m.ZP.div(r||(r=(0,x.Z)(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 15px 15px;\n  color: #5f0000;\n  text-align: center;\n  @media screen and (min-width: 768px) {\n    max-width: 768px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    max-width: 1200px;\n  }\n"]))),g=m.ZP.h2(a||(a=(0,x.Z)(["\n  text-align: center;\n  font-size: 40px;\n  font-weight: bold;\n  margin-bottom: 10px;\n"]))),w=e(184),Z=function(){var n=(0,s.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],a=(0,s.useState)(!0),u=(0,c.Z)(a,2),x=u[0],m=u[1],Z=(0,s.useState)(null),b=(0,c.Z)(Z,2),j=b[0],y=b[1];(0,s.useEffect)((function(){var n=function(){var n=(0,i.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),y(null),n.next=5,(0,f.z5)();case 5:t=n.sent,r(t.results),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),y(n.t0),alert(n.t0);case 13:return n.prev=13,m(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,9,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[]);var k=(0,p.TH)();return(0,w.jsxs)(v,{children:[(0,w.jsx)(g,{children:"Trending today"}),j&&(0,w.jsx)(h.j,{}),x&&(0,w.jsx)(l.a,{}),e.length>0&&(0,w.jsx)(d.O,{movies:e,state:{from:k}})]})}},1933:function(n,t,e){e.d(t,{M1:function(){return p},Pt:function(){return o},TP:function(){return s},tx:function(){return f},z5:function(){return u}});var r=e(5861),a=e(7757),i=e.n(a),c=e(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"029dd0feeb135e8863e14057efaad16b"}}),u=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie",{params:{query:t}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=156.9a7014a5.chunk.js.map