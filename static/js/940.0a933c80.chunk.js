"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[940],{1616:function(n,e,t){t.d(e,{j:function(){return s}});var r,a=t(168),i=t(6444).ZP.p(r||(r=(0,a.Z)(["\n  color: red;\n  text-align: center;\n  font-size: 25px;\n"]))),o=t(184),s=function(){return(0,o.jsx)(i,{children:"Something went wrong... Try reloading the page"})}},854:function(n,e,t){t.d(e,{a:function(){return i}});var r=t(5243),a=t(184),i=function(){return(0,a.jsx)(r.p2,{height:"80",width:"80",color:"#5f0000",ariaLabel:"circles-loading",wrapperStyle:{margin:"0 auto",display:"block"},wrapperClass:"",visible:!0})}},6940:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a,i,o,s,c,u,d=t(5861),p=t(9439),l=t(7757),f=t.n(l),x=t(2791),h=t(7689),v=t(860),m=t(1933),g=t(854),w=t(1616),j=t(168),b=t(6444),Z=t(1087),y=b.ZP.div(r||(r=(0,j.Z)(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 15px 15px;\n  color: #5f0000;\n\n  @media screen and (min-width: 768px) {\n    max-width: 768px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    max-width: 1200px;\n  }\n"]))),k=(0,b.ZP)(Z.rU)(a||(a=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 150px;\n\n  border: none;\n  border-radius: 10px;\n  font-size: 25px;\n  font-weight: bold;\n  color: #5f0000;\n  background-color: #fff;\n  margin-bottom: 10px;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: #fff;\n    background-color: #5f0000;\n  }\n"]))),_=b.ZP.div(i||(i=(0,j.Z)(["\n  margin-bottom: 15px;\n  @media screen and (min-width: 768px) {\n    display: flex;\n    gap: 15px;\n  }\n"]))),P=b.ZP.div(o||(o=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  font-size: 25px;\n  text-align: justify;\n"]))),S=b.ZP.span(s||(s=(0,j.Z)(["\n  display: block;\n  font-weight: bold;\n"]))),z=b.ZP.ul(c||(c=(0,j.Z)(["\n  display: grid;\n  margin-bottom: 15px;\n  gap: 10px;\n"]))),L=(0,b.ZP)(Z.OL)(u||(u=(0,j.Z)(["\n  padding: 10px 0;\n  color: #5f0000;\n\n  &.active,\n  &:hover,\n  &:focus {\n    color: red;\n  }\n"]))),T=t(184),U=function(){var n,e,t=(0,x.useState)(null),r=(0,p.Z)(t,2),a=r[0],i=r[1],o=(0,x.useState)(!0),s=(0,p.Z)(o,2),c=s[0],u=s[1],l=(0,x.useState)(null),j=(0,p.Z)(l,2),b=j[0],Z=j[1],U=(0,h.UO)().id;(0,x.useEffect)((function(){var n=function(){var n=(0,d.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,u(!0),Z(null),n.next=5,(0,m.TP)(U);case 5:e=n.sent,i(e),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),Z(n.t0),alert(n.t0);case 13:return n.prev=13,u(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,9,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[U]);var C,O,E=null!==(n=null===(e=(0,h.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,T.jsxs)(y,{children:[(0,T.jsxs)(k,{to:E,children:[(0,T.jsx)(v.HQL,{}),"Go Back"]}),c&&(0,T.jsx)(g.a,{}),b&&(0,T.jsx)(w.j,{}),!c&&(0,T.jsxs)(_,{children:[(0,T.jsx)("img",{src:a.poster_path?"https://image.tmdb.org/t/p/w500".concat(a.poster_path):"https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-",alt:a.title,width:"300",loading:"lazy"}),(0,T.jsxs)(P,{children:[(0,T.jsxs)("h3",{children:[a.title," (",(O=a.release_date,(new Date).getFullYear(O)),")"]}),(0,T.jsxs)("p",{children:["User score: ",Math.round(10*a.vote_average),"%"]}),(0,T.jsxs)("p",{children:[(0,T.jsx)(S,{children:"Overview"})," ",a.overview]}),(0,T.jsxs)("p",{children:[(0,T.jsx)(S,{children:"Genres"})," ",(C=a.genres,C.map((function(n){return n.name})).join(", "))]})]})]}),(0,T.jsxs)(P,{children:[(0,T.jsx)(S,{children:"Additional information"}),(0,T.jsxs)(z,{children:[(0,T.jsxs)("li",{children:["\u2192",(0,T.jsx)(L,{to:"/movies/".concat(U,"/cast"),state:{from:E},children:"View cast information here"})]}),(0,T.jsxs)("li",{children:["\u2192",(0,T.jsx)(L,{to:"/movies/".concat(U,"/reviews"),state:{from:E},children:"See reviews here"})]})]})]}),(0,T.jsx)(x.Suspense,{fallback:(0,T.jsx)("div",{children:"Loading..."}),children:(0,T.jsx)(h.j3,{})})]})}},1933:function(n,e,t){t.d(e,{M1:function(){return d},Pt:function(){return c},TP:function(){return u},tx:function(){return p},z5:function(){return s}});var r=t(5861),a=t(7757),i=t.n(a),o=t(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"029dd0feeb135e8863e14057efaad16b"}}),s=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/search/movie",{params:{query:e}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=940.0a933c80.chunk.js.map