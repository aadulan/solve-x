(window["webpackJsonpeq-solver-prototype"]=window["webpackJsonpeq-solver-prototype"]||[]).push([[0],{147:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(12),i=n.n(c);n(50),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(84),l=n(21),s=n(9),u=function(){var e=Math.ceil(10*Math.random()),a=e*e,n=Math.ceil(10*Math.random()),t=a-n;return"".concat(e," * x -").concat(t," = ").concat(n)},m=n(173),d=n(175),f=n(174),h=n(32),p=n(29),b=n(172),E=Object(b.a)({card:{border:1,borderStyle:"solid",padding:10,margin:10,minwidth:200},userSelect:{userSelect:"none"},eqSpaceCard:{padding:20,maxWidth:1e3,borderStyle:"solid",borderWidth:1,backgroundColor:"#e3f2fd"},drop:{display:"flex",flexDirection:"row"},equal:{borderRadius:"50em",margin:"0.25em",width:100,height:100,fontFamily:'"Fira Code"',display:"flex",userSelect:"none"}}),g=(n(60),n(44)),v=n.n(g);function y(e){var a=E();return r.a.createElement(p.b,{draggableId:e.task.id,index:e.index,isDragDisabled:e.isDragDisabled},(function(n,t){return r.a.createElement(m.a,Object.assign({className:a.card},n.draggableProps,n.dragHandleProps,{innerRef:n.innerRef}),r.a.createElement(f.a,null,r.a.createElement(h.a,{className:a.userSelect,color:"primary",align:"center",variant:"h2"},r.a.createElement(v.a,{math:"".concat(e.task.content)}))))}))}var k=n(141),C=n(142),j=function(e,a,n,t,r){var c=[],i=[];return e.terms.forEach((function(e,o){var l=w(e.coefficients[0].numer);i=i.concat(l);var s=0===o,u=e.coefficients[0]>0,m=1===e.coefficients[0].numer?"":e.coefficients[0].numer,d=t?e.coefficients[0].numer+"\\times "+e.variables[0].variable:e.coefficients[0].numer+e.variables[0].variable,f=n&&u?"+"+d:d,h=!s&&u?"+"+m+e.variables[0].variable:m+e.variables[0].variable,p=r?f:h;c.push({id:"".concat(a,"-variable-x").concat(o),content:p,exp:e})})),e.constants.forEach((function(e,t){var o=w(e.numer);i=i.concat(o);var l=0!==c.length&&0===t,s=0===t,u=e.numer>0,m=u?"+"+e.numer:e.numer,d=!u||s&&!l?e.numer:"+"+e.numer,f=n&&r?m:d;c.push({id:"".concat(a,"-num-").concat(t),content:f,exp:e})})),i=Array.from(new Set(i)),[c,i]};function w(e){for(var a=C(e),n=[],t=0,r=1;r<=a;r++)(t=a/r)===k(t)&&n.push(r);return n}function O(e){var a=Object(t.useState)(!1),n=Object(s.a)(a,2),c=n[0],i=n[1],o=E();return Object(t.useEffect)((function(){i(1===j(e.expression,e.side)[0].length)}),[e.expression,e.side]),r.a.createElement(m.a,{className:o.eqSpaceCard},r.a.createElement(p.c,{droppableId:e.dropId,direction:"horizontal"},(function(a,n){return r.a.createElement(d.a,Object.assign({className:o.drop,direction:"row",container:!0,item:!0,justify:"center",alignItems:"center",innerRef:a.innerRef},a.droppableProps),j(e.expression,e.side,e.showSigns,e.unpackEq,e.helper)[0].map((function(a,n){return r.a.createElement(y,Object.assign({key:a.id,task:a,index:n},e,{isDragDisabled:c}))})),a.placeholder)})))}var x=n(37),S=n.n(x);function I(e){var a=E();return r.a.createElement(h.a,{className:a.equal,variant:"h1"},r.a.createElement("span",{style:{margin:"auto"}},r.a.createElement(v.a,{math:"="})))}var N=n(178),q=n(184),D=n(186),W=n(183),z=n(176),R=n(177);function F(e){var a=Object(t.useState)(""),n=Object(s.a)(a,2),c=n[0],i=n[1],o=Object(t.useState)(""),l=Object(s.a)(o,2),u=l[0],p=l[1],b=function(e){i(c.concat(e))},E=function(e){p(e)};return r.a.createElement(m.a,null,r.a.createElement(z.a,{title:"Equation Changer"}),r.a.createElement(f.a,null,r.a.createElement(d.a,{container:!0,direction:"column",justify:"center",align:"center"},r.a.createElement(d.a,{container:!0,direction:"row"},r.a.createElement(m.a,{style:{width:"100%"}},r.a.createElement(f.a,null,r.a.createElement(h.a,{variant:"h6"},u,c)))),r.a.createElement(d.a,{container:!0,direction:"row"},r.a.createElement(R.a,{fullWidth:!0,size:"large",color:"primary"},r.a.createElement(N.a,{onClick:function(){return b("7")}},"7"),r.a.createElement(N.a,{onClick:function(){return b("8")}},"8"),r.a.createElement(N.a,{onClick:function(){return b("9")}},"9"),r.a.createElement(N.a,{onClick:function(){return E("\xf7")}}," \xf7 "))),r.a.createElement(d.a,{container:!0,direction:"row"},r.a.createElement(R.a,{fullWidth:!0,size:"large",color:"primary"},r.a.createElement(N.a,{onClick:function(){return b("4")}},"4"),r.a.createElement(N.a,{onClick:function(){return b("5")}},"5"),r.a.createElement(N.a,{onClick:function(){return b("6")}},"6"),r.a.createElement(N.a,{onClick:function(){return E("\xd7")}},"\xd7"))),r.a.createElement(d.a,{container:!0,direction:"row"},r.a.createElement(R.a,{fullWidth:!0,size:"large",color:"primary"},r.a.createElement(N.a,{onClick:function(){return b("1")}},"1"),r.a.createElement(N.a,{onClick:function(){return b("2")}},"2"),r.a.createElement(N.a,{onClick:function(){return b("3")}},"3"),r.a.createElement(N.a,{onClick:function(){return E("-")}},"-"))),r.a.createElement(d.a,{container:!0,direction:"row"},r.a.createElement(R.a,{fullWidth:!0,size:"large",color:"primary"},r.a.createElement(N.a,{onClick:function(){return i(""),void p("")}},"Clear"),r.a.createElement(N.a,{value:"0",onClick:function(){return b("0")}},"0"),r.a.createElement(N.a,{value:"+",onClick:function(){return E("+")}},"+"))),r.a.createElement(d.a,{container:!0,direction:"row"},r.a.createElement(R.a,{fullWidth:!0,size:"large",color:"primary"},r.a.createElement(N.a,{onClick:function(){return function(){var a="";"\xf7"===u?a="divide":"\xd7"===u?a="multiply":"+"===u?a="add":"-"===u&&(a="subtract"),e.onCalChange(a,c),e.onEnterChange(!0)}()}},"Enter"))))))}var M=n(85),H=n(4),P=n(78),V=n.n(P),A=n(80),B=n.n(A),J=n(81),U=n.n(J),Y=n(82),$=n.n(Y),G=n(179),K=n(180),L=n(182),Q=n(185),T=n(181),X=n(79),Z=n.n(X),_={success:V.a,warning:Z.a,error:B.a,info:U.a},ee=Object(b.a)((function(e){return{success:{backgroundColor:G.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:K.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}));function ae(e){var a=ee(),n=e.className,t=e.message,c=e.onClose,i=e.variant,o=Object(M.a)(e,["className","message","onClose","variant"]),l=_[i];return r.a.createElement(T.a,Object.assign({className:Object(H.a)(a[i],n),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:a.message},r.a.createElement(l,{className:Object(H.a)(a.icon,a.iconVariant)}),t),action:[r.a.createElement(L.a,{key:"close","aria-label":"close",color:"inherit",onClick:c},r.a.createElement($.a,{className:a.icon}))]},o))}function ne(e){var a=function(a,n){"clickaway"!==n&&e.onOpenChange(!1)};return r.a.createElement("div",null,r.a.createElement(Q.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:e.open,autoHideDuration:6e3,onClose:a},r.a.createElement(ae,{onClose:a,variant:e.variant,message:e.message})))}function te(e){var a=Object(t.useState)(S.a.parse(u())),n=Object(s.a)(a,2),c=n[0],i=n[1],o=Object(t.useState)(!1),l=Object(s.a)(o,2),m=l[0],f=l[1],h=Object(t.useState)(!1),b=Object(s.a)(h,2),E=b[0],g=b[1],v=Object(t.useState)(!1),y=Object(s.a)(v,2),k=y[0],C=y[1],w=Object(t.useState)([]),x=Object(s.a)(w,2),z=x[0],R=x[1],M=Object(t.useState)(!1),H=Object(s.a)(M,2),P=H[0],V=H[1],A=Object(t.useState)(!1),B=Object(s.a)(A,2),J=B[0],U=B[1],Y=Object(t.useState)(""),$=Object(s.a)(Y,2),G=$[0],K=$[1],L=Object(t.useState)("info"),Q=Object(s.a)(L,2),T=Q[0],X=Q[1],Z=Object(t.useState)(!1),_=Object(s.a)(Z,2),ee=_[0],ae=_[1];if(1===c.rhs.constants.length?(console.log(c.rhs.constants[0].numer),console.log(c.solveFor("x").numer),c.rhs.constants[0].numer,c.solveFor("x").numer):1===c.lhs.constants.length&&(c.lhs.constants[0].numer,c.solveFor("x").numer),ee&&(K("You solved the equation!"),X("sucess"),U(!0),ae(!1)),P){var te=null,re=null,ce=Array.from(new Set(j(c.lhs)[1].concat(j(c.rhs)[1])));if("divide"!==z[0]&&"multiply"!==z[0]||0!==Number(z[1]))if("divide"!==z[0]||ce.includes(Number(z[1]))){"multiply"===z[0]?(te=c.lhs.multiply(Number(z[1])).simplify(),re=c.rhs.multiply(Number(z[1])).simplify()):"add"===z[0]?(te=c.lhs.add(Number(z[1])),re=c.rhs.add(Number(z[1]))):"subtract"===z[0]?(te=c.lhs.subtract(Number(z[1])),re=c.rhs.subtract(Number(z[1]))):"divide"===z[0]&&(te=c.lhs.divide(Number(z[1])).simplify(),re=c.rhs.divide(Number(z[1])).simplify()),K("".concat(z[0]," by ",z[1])),X("info"),U(!0);var ie=new S.a.Equation(te,re);i(ie),R([])}else K("Cannot ".concat(z[0]," by ",z[1])),X("warning"),U(!0);else K("Cannot ".concat(z[0]," by ","0")),X("error"),U(!0);V(!1)}var oe=function(e){var a=null;return a=1===e.constants.length,1===e.terms.length||a},le=function(e){var a=null,n=null;"rhs"===e?(n=c.rhs.simplify(),a=c.lhs):(n=c.rhs,a=c.lhs.simplify());var t=new S.a.Equation(a,n);i(t)};return r.a.createElement(d.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(ne,{message:G,variant:T,open:J,onOpenChange:function(){U(!J)}}),r.a.createElement(d.a,{container:!0,item:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(d.a,{container:!0,item:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(W.a,null,r.a.createElement(q.a,{control:r.a.createElement(D.a,{checked:m,onChange:function(e){f(e.target.checked)},value:"helper",color:"primary"}),label:"Helper Mode"}),r.a.createElement(q.a,{control:r.a.createElement(D.a,{checked:E,onChange:function(e){g(e.target.checked)},value:"signs",color:"primary",disabled:!m}),label:"Show Signs"}),r.a.createElement(q.a,{control:r.a.createElement(D.a,{checked:k,onChange:function(e){C(e.target.checked)},value:"unpack",color:"primary",disabled:!m}),label:"Unpack Variable"}))),r.a.createElement(d.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(d.a,{container:!0,item:!0,direction:"row",justify:"center",alignItems:"center",xs:9},r.a.createElement(p.a,{onDragEnd:function(e){document.body.style.color="inherit",document.body.style.backgroundColor="inherit";var a=e.destination,n=e.source;if(a&&(a.droppableId!==n.droppableId||a.index!==n.index)){var t=j(c.lhs,"lhs",E,k,m)[0],r=j(c.rhs,"rhs",E,k,m)[0];if(a.droppableId!==n.droppableId){var o="",l="eqspace-lhs"===n.droppableId,s="eqspace-rhs"===n.droppableId;o="eqspace-rhs"===a.droppableId?t[n.index]:r[n.index];var u=c.lhs.subtract(o.exp,l),d=c.rhs.subtract(o.exp,s),f=new S.a.Equation(u,d);i(f)}}}},r.a.createElement(O,{dropId:"eqspace-lhs",expression:c.lhs,side:"lhs",helper:m,showSigns:E,unpackEq:k}),r.a.createElement(I,null),r.a.createElement(O,{dropId:"eqspace-rhs",expression:c.rhs,side:"rhs",helper:m,showSigns:E,unpackEq:k}))),r.a.createElement(d.a,{container:!0,item:!0,direction:"row",justify:"center",alignItems:"center",xs:3},r.a.createElement(F,{onCalChange:function(e,a){R([e,a])},answer:z,enter:P,onEnterChange:function(){V(!P)}})))),r.a.createElement(d.a,{style:{padding:20},container:!0,item:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(d.a,{container:!0,item:!0,xs:6,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(N.a,{disabled:oe(c.lhs),onClick:function(){return le("lhs")},variant:"contained",color:"primary"},"Combine")),r.a.createElement(d.a,{container:!0,item:!0,direction:"row",xs:6,justify:"center",alignItems:"center"},r.a.createElement(N.a,{onClick:function(){return le("rhs")},variant:"contained",color:"primary",disabled:oe(c.rhs)},"Combine"))))}i.a.render(r.a.createElement((function(e){return r.a.createElement(o.a,{basename:window.location.pathname||""},r.a.createElement(l.a,{exact:!0,path:"/",component:te}))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},50:function(e,a,n){},96:function(e,a,n){e.exports=n(147)}},[[96,1,2]]]);
//# sourceMappingURL=main.cba5d693.chunk.js.map