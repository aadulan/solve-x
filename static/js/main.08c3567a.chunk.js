(window["webpackJsonpeq-solver-prototype"]=window["webpackJsonpeq-solver-prototype"]||[]).push([[0],{112:function(e,a,n){"use strict";n.r(a);var r=n(0),t=n.n(r),o=n(26),c=n.n(o);n(31),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(63),s=n(13),l=n(29),d=function(){var e=Math.ceil(10*Math.random()),a=e*e,n=Math.ceil(10*Math.random()),r=a-n;return"".concat(e," * x -").concat(r," = ").concat(n)},u=n(129),p=n(128),m=n(127),h=n(130),b=n(18),f=n(126),g=Object(f.a)({card:{border:1,borderStyle:"solid",padding:10,margin:10,minwidth:200},userSelect:{userSelect:"none"},eqSpaceCard:{padding:20,maxWidth:1e3,borderStyle:"solid",borderWidth:1,backgroundColor:"#e3f2fd"},drop:{display:"flex",flexDirection:"row"},equal:{borderRadius:"50em",margin:"0.25em",width:100,height:100,fontFamily:'"Fira Code"',display:"flex"}});function v(e){var a=g();return t.a.createElement(b.b,{draggableId:e.task.id,index:e.index,isDragDisabled:e.isDragDisabled},(function(n,r){return t.a.createElement(u.a,Object.assign({className:a.card},n.draggableProps,n.dragHandleProps,{innerRef:n.innerRef}),t.a.createElement(m.a,null,t.a.createElement(h.a,{className:a.userSelect,color:"primary",align:"center",variant:"h1"},e.task.content)))}))}var E=function(e,a){var n=[];return e.terms.forEach((function(e){n.push({id:"".concat(a,"-variable-").concat(e.variables[0].variable),content:e.coefficients[0].numer+e.variables[0].variable,exp:e})})),e.constants.forEach((function(e){n.push({id:"".concat(a,"-num-").concat(e.numer),content:e.numer,exp:e})})),n};function x(e){var a=Object(r.useState)(!1),n=Object(l.a)(a,2),o=n[0],c=n[1],i=g();return Object(r.useEffect)((function(){c(1===E(e.expression,e.side).length)}),[e.expression,e.side]),t.a.createElement(u.a,{className:i.eqSpaceCard},t.a.createElement(b.c,{droppableId:e.dropId,direction:"horizontal"},(function(a,n){return t.a.createElement(p.a,Object.assign({className:i.drop,direction:"row",container:!0,item:!0,justify:"center",alignItems:"center",innerRef:a.innerRef},a.droppableProps),E(e.expression,e.side).map((function(a,n){return t.a.createElement(v,Object.assign({key:a.id,task:a,index:n},e,{isDragDisabled:o}))})),a.placeholder)})))}var w=n(37),y=n.n(w);function I(e){var a=g();return t.a.createElement(h.a,{className:a.userSelect,variant:"h1"},t.a.createElement(u.a,{className:a.equal},t.a.createElement("span",{style:{margin:"auto"}},"=")))}function j(e){var a=Object(r.useState)(y.a.parse(d())),n=Object(l.a)(a,2),o=n[0],c=n[1];return t.a.createElement(p.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},t.a.createElement(b.a,{onDragEnd:function(e){document.body.style.color="inherit",document.body.style.backgroundColor="inherit";var a=e.destination,n=e.source;if(a&&(a.droppableId!==n.droppableId||a.index!==n.index)){var r=E(o.lhs,"lhs"),t=E(o.rhs,"rhs");if(a.droppableId!==n.droppableId){var i="";i="eqspace-rhs"===a.droppableId?r[n.index]:t[n.index];var s=o.lhs.subtract(i.exp),l=o.rhs.subtract(i.exp),d=new y.a.Equation(s,l);c(d)}}}},t.a.createElement(x,{dropId:"eqspace-lhs",expression:o.lhs,side:"lhs"}),t.a.createElement(I,null),t.a.createElement(x,{dropId:"eqspace-rhs",expression:o.rhs,side:"rhs"})))}c.a.render(t.a.createElement((function(e){return t.a.createElement(i.a,null,t.a.createElement(s.a,{exact:!0,path:"/",component:j}))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},31:function(e,a,n){},65:function(e,a,n){e.exports=n(112)}},[[65,1,2]]]);
//# sourceMappingURL=main.08c3567a.chunk.js.map