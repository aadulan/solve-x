(window["webpackJsonpsolve-x"]=window["webpackJsonpsolve-x"]||[]).push([[0],{138:function(e,t,a){e.exports=a(188)},188:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o);a(59),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(45),l=a(21),s=a(16),m=a(7),u=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},d=function(e){var t=Math.ceil(10*Math.random()),a=Math.ceil(10*Math.random())+1,n=u(2,11),r=t*n,o=u(2,r),c=u(2,n);return"positive"===e?Math.random()>=.5?"".concat(n+c," * x +").concat(o," = ").concat(c," * x + ").concat(r+o):"".concat(n," * x +").concat(o," = ").concat(r+o):"negative"===e?Math.random()>=.5?"-".concat(n+c," * x +").concat(o," = -").concat(c," * x + ").concat(r+o):"".concat(-n," * x -").concat(o," = ").concat(r-o):"fractions"===e?Math.random()>=.5?"".concat(n+c," * x /").concat(a," +").concat(o," = ").concat(c," * x + ").concat(r+o):"".concat(n," * x/").concat(a," +").concat(o," = ").concat(r+o):"negative-fractions"===e?Math.random()>=.5?"-".concat(n+c," * x/").concat(a," = -").concat(c," * x + ").concat(r):"".concat(-n," * x/").concat(a," -").concat(o," = ").concat(r-o):void 0},g=a(230),h=a(233),p=a(232),f=a(189),b=a(46),E=a(227),v=Object(E.a)({card:{border:1,borderStyle:"solid",padding:10,margin:10,"&:hover":{boxShadow:"0px 4px 10px 0px rgba(0, 0, 0, 0.25)"}},userSelect:{userSelect:"none"},eqSpaceCard:{padding:20,maxWidth:1e3,borderStyle:"solid",borderWidth:1,backgroundColor:"#e3f2fd"},drop:{display:"flex",flexDirection:"row"},equal:{borderRadius:"50em",margin:"0.2em",width:100,height:100,fontFamily:'"Fira Code"',display:"flex",userSelect:"none"}}),y=(a(94),a(32)),O=a.n(y);function w(e){var t=v();return r.a.createElement(b.b,{draggableId:e.task.id,index:e.index,isDragDisabled:e.isDragDisabled},(function(a,n){return r.a.createElement(g.a,Object.assign({className:t.card,innerRef:a.innerRef},a.draggableProps,a.dragHandleProps),r.a.createElement(p.a,null,r.a.createElement(f.a,{style:{color:"#424242"},className:t.userSelect,align:"center",variant:"h3"},r.a.createElement(O.a,{math:"".concat(e.task.content)}))))}))}var j=a(182),x=a(106),C=function(e,t,a,n,r){arguments.length>5&&void 0!==arguments[5]&&arguments[5];var o=[],c=[];e.terms.forEach((function(e,i){var l=k(e.coefficients[0].numer);c=c.concat(l);var s,m=0===i,u=e.coefficients[0]>0;s=1===e.coefficients[0].numer?"":-1===e.coefficients[0].numer?"-":e.coefficients[0].numer;var d=1===e.coefficients[0].denom,g=n?e.coefficients[0].numer+"\\times "+e.variables[0].variable:s+e.variables[0].variable,h=a&&u?"+"+g:g,p=!m&&u?"+"+s+e.variables[0].variable:s+e.variables[0].variable,f=r?h:p,b=d?f:"\\frac{".concat(f,"}{").concat(e.coefficients[0].denom,"}");o.push({id:"".concat(t,"-variable-x").concat(i),content:b,exp:e})}));var i,l=[];if(e.constants.forEach((function(e,n){var c=k(e.numer);l=l.concat(c);var i=0!==o.length&&0===n,s=0===n,m=e.numer>0,u=1===e.denom,d=m?"+"+e.numer:e.numer,g=!m||s&&!i?e.numer:"+"+e.numer,h=a&&r?d:g,p=u?h:"\\frac{".concat(h,"}{").concat(e.denom,"}");o.push({id:"".concat(t,"-num-").concat(n),content:p,exp:e})})),0===e.terms.length)i=l;else if(0===e.constants.length)i=c;else{var m=new Set(c),u=new Set(l);i=new Set(Object(s.a)(m).filter((function(e){return u.has(e)})))}return[o,i]};function k(e){for(var t=x(e),a=[],n=0,r=1;r<=t;r++)(n=t/r)===j(n)&&a.push(r);return a}function S(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),o=a[0],c=a[1],i=v();return Object(n.useEffect)((function(){c(1===C(e.expression,e.side)[0].length)}),[e.expression,e.side]),r.a.createElement(g.a,{className:i.eqSpaceCard},r.a.createElement(b.c,{droppableId:e.dropId,direction:"horizontal"},(function(t,a){return r.a.createElement(h.a,Object.assign({className:i.drop,direction:"row",container:!0,item:!0,justify:"center",alignItems:"center",innerRef:t.innerRef},t.droppableProps),C(e.expression,e.side,e.showSigns,e.unpackEq,e.helper,e.level)[0].map((function(t,a){return r.a.createElement(w,Object.assign({key:t.id,task:t,index:a},e,{isDragDisabled:o}))})),t.placeholder)})))}var N=a(28),M=a.n(N);function q(e){return r.a.createElement(f.a,{id:"equal",variant:"h1"},r.a.createElement("span",{style:{margin:"auto"}},r.a.createElement(O.a,{math:"="})))}var I=a(237),T=a(2),B=a(3),R=a(118),V=a.n(R),W=a(120),H=a.n(W),F=a(68),z=a.n(F),D=a(121),L=a.n(D),P=a(77),U=a(234),$=a(236),Y=a(254),A=a(235),G=a(119),J=a.n(G),K={success:V.a,warning:J.a,error:H.a,info:z.a},Q=Object(E.a)((function(e){return{success:{backgroundColor:P.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:"#fafafa"},warning:{backgroundColor:U.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}));function X(e){var t=Q(),a=e.className,n=e.message,o=e.onClose,c=e.variant,i=Object(T.a)(e,["className","message","onClose","variant"]),l=K[c];return r.a.createElement(A.a,Object.assign({className:Object(B.a)(t[c],a),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{style:{color:"info"===c?"#000000":""},id:"client-snackbar",className:t.message},r.a.createElement(l,{className:Object(B.a)(t.icon,t.iconVariant)}),n),action:[r.a.createElement($.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},r.a.createElement(L.a,{className:t.icon}))]},i))}function Z(e){var t=function(t,a){"clickaway"!==a&&e.onOpenChange(!1)};return r.a.createElement("div",null,r.a.createElement(Y.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:e.open,autoHideDuration:6e3,onClose:t},r.a.createElement(X,{onClose:t,variant:e.variant,message:e.message})))}var _=a(245),ee=a(246),te=a(240),ae=a(125),ne=a(44),re=a.n(ne),oe=Object(E.a)((function(e){return{root:{maxWidth:150,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}})),ce=[["Change side, change sign","change"],["Balance","balance"]];function ie(e){var t=oe(),a=r.a.useState(null),n=Object(m.a)(a,2),o=n[0],c=n[1],i=r.a.useState(0),l=Object(m.a)(i,2),s=l[0],u=l[1];return r.a.createElement("div",{className:t.root},r.a.createElement(I.a,{endIcon:r.a.createElement(re.a,null),onClick:function(e){c(e.currentTarget)},style:{justifyContent:"left",maxWidth:150,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",color:"white"}},"Method"),r.a.createElement(ae.a,{id:"lock-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){c(null)},style:{paddingTop:0,paddingBottom:0}},ce.map((function(t,a){return r.a.createElement(te.a,{key:t,selected:a===s,onClick:function(t){return function(t,a){e.onChangeMethod(ce[a][1]),u(a),c(null)}(0,a)}},t[0])}))))}var le=a(238),se=a(242),me=a(253),ue=a(241),de=a(190),ge=Object(E.a)((function(e){return{group:{padding:e.spacing(2)}}}));function he(e){var t=ge(),a=r.a.useState(null),o=Object(m.a)(a,2),c=o[0],i=o[1],l=Object(n.useState)(!1),s=Object(m.a)(l,2),u=s[0],d=s[1],g=Object(n.useState)(!1),h=Object(m.a)(g,2),p=h[0],f=h[1],b=Object(n.useState)(!1),E=Object(m.a)(b,2),v=E[0],y=E[1],O=Boolean(c),w=O?"simple-popover":void 0;return r.a.createElement("div",null,r.a.createElement(I.a,{style:{color:"white"},"aria-describedby":w,color:"default",onClick:function(e){i(e.currentTarget)}},"Helper Mode"),r.a.createElement(le.a,{id:w,open:O,anchorEl:c,onClose:function(){i(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},TransitionComponent:de.a},r.a.createElement(ue.a,{className:t.group},r.a.createElement(se.a,{control:r.a.createElement(me.a,{checked:u,onChange:function(t){e.onChangeHelper(t),d(t.target.checked)},value:"helper",color:"primary"}),label:"Helper Mode"}),r.a.createElement(se.a,{control:r.a.createElement(me.a,{checked:p,onChange:function(t){f(t.target.checked),e.onChangeSigns(t)},value:"signs",color:"primary",disabled:!u}),label:"Show Signs"}),r.a.createElement(se.a,{control:r.a.createElement(me.a,{checked:v,onChange:function(t){e.onChangeUnpack(t),y(t.target.checked)},value:"unpack",color:"primary",disabled:!u}),label:"Unpack Variable"}))))}var pe=a(193),fe=a(252),be=a(85),Ee=a(244),ve=a(243);function ye(e){return r.a.createElement(h.a,{container:!0,direction:"column"},r.a.createElement(h.a,{item:!0},r.a.createElement(ve.a,{style:{marginTop:12,marginBottom:12},variant:"fullWidth"})),r.a.createElement(h.a,{item:!0},r.a.createElement(f.a,{align:"left",variant:"h6"},e.title),e.info))}var Oe=a(72),we=a.n(Oe),je=a(73),xe=a.n(je),Ce=a(74),ke=a.n(Ce),Se=[{icon:r.a.createElement(we.a,null),word:"draggable"},{icon:r.a.createElement(re.a,null),word:"expandable"},{icon:r.a.createElement(xe.a,null),word:"clear output "},{icon:r.a.createElement(ke.a,null),word:"enter"},{icon:r.a.createElement("img",{src:"plus-minus-modal.svg",alt:"sign",style:{maxWidth:20}}),word:"changes sign of number ",xs:12}];var Ne=[{header:"Helper Mode",info:r.a.createElement(f.a,{align:"left"},"Allows you to see hidden operations and signs:",r.a.createElement(f.a,{align:"center"},r.a.createElement(O.a,{math:"2 \\rightarrow +2"}),r.a.createElement("br",null),r.a.createElement(O.a,{math:"3x \\rightarrow 3 \\times x"})))},{header:"Methods",info:r.a.createElement(f.a,{align:"left"},"You can use your preferred method to solve equations: balance or change side, change sign")},{header:"Equation Changer",info:r.a.createElement(f.a,{align:"left"},"Experiment with the equation. Input a number and an operation and see the equation change.",r.a.createElement("br",null),r.a.createElement(f.a,{variant:"subtitle2"},"Controls:"),r.a.createElement((function(){return r.a.createElement(h.a,{container:!0},Se.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{item:!0,xs:!0},r.a.createElement(ve.a,null)),r.a.createElement(h.a,{key:t,item:!0,xs:12,direction:"row",container:!0,justify:"space-between",style:{margin:5}},e.icon,r.a.createElement(f.a,{align:"right"},e.word)))})))}),null))}],Me=Object(E.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),qe=r.a.forwardRef((function(e,t){var a=e.in,n=e.children,o=e.onEnter,c=e.onExited,i=Object(T.a)(e,["in","children","onEnter","onExited"]),l=Object(be.useSpring)({from:{opacity:0},to:{opacity:a?1:0},onStart:function(){a&&o&&o()},onRest:function(){!a&&c&&c()}});return r.a.createElement(be.animated.div,Object.assign({ref:t,style:l},i),n)}));function Ie(){var e=Me(),t=r.a.useState(!1),a=Object(m.a)(t,2),n=a[0],o=a[1];return r.a.createElement("div",null,r.a.createElement($.a,{style:{color:"white"},onClick:function(){o(!0)}},r.a.createElement(z.a,null)),r.a.createElement(pe.a,{"aria-labelledby":"spring-modal-title","aria-describedby":"spring-modal-description",className:e.modal,open:n,onClose:function(){o(!1)},closeAfterTransition:!0,BackdropComponent:fe.a,BackdropProps:{timeout:500}},r.a.createElement(qe,{in:n},r.a.createElement(g.a,{style:{maxWidth:400}},r.a.createElement(Ee.a,null,r.a.createElement(f.a,{variant:"h4",align:"center",style:{paddingBottom:0,paddingTop:15}},"Info"),r.a.createElement(p.a,{style:{padding:"2em",paddingTop:0}},Ne.map((function(e,t){return r.a.createElement(ye,{key:t,title:e.header,info:e.info})}))))))))}var Te=Object(E.a)({root:{flexGrow:1},menuButton:{marginRight:5},title:{flexGrow:1},list:{width:275},fullList:{width:"auto"}});function Be(e){var t=Te();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.root},r.a.createElement(_.a,{position:"static"},r.a.createElement(ee.a,null,r.a.createElement(i.b,{to:{pathname:"/"},style:{marginRight:"auto"}},r.a.createElement("img",{src:"operations.svg",alt:"logo",style:{width:50,height:50,marginRight:"auto"}})),r.a.createElement(ie,{onChangeMethod:e.onChangeMethod}),r.a.createElement("div",{style:{height:"auto",width:20,alignSelf:"stretch",display:"flex"}},r.a.createElement(ve.a,{style:{height:"60%",margin:"auto",backgroundColor:"white"},orientation:"vertical"})),r.a.createElement(he,{onChangeUnpack:e.onChangeUnpack,onChangeSigns:e.onChangeSigns,onChangeHelper:e.onChangeHelper}),r.a.createElement("div",{style:{height:"auto",width:20,alignSelf:"stretch",display:"flex"}},r.a.createElement(ve.a,{style:{height:"60%",margin:"auto",backgroundColor:"white"},orientation:"vertical"})),r.a.createElement(Ie,null)))))}var Re=a(11),Ve=a(249),We=a(123),He=a.n(We),Fe=a(247),ze=a(248),De=a(76);function Le(e){var t={empty:r.a.createElement(xe.a,null),cal:r.a.createElement(ke.a,null)},a=["empty","cal"].includes(e.val)?t[e.val]:r.a.createElement(f.a,{style:{fontSize:"1.5em"}},e.val);return r.a.createElement(h.a,{item:!0,xs:3},r.a.createElement(I.a,{onClick:function(){return e.cb(e.val)},style:{width:45,height:45,minWidth:30,padding:0,background:function(e){return-1!=="0123456789".indexOf(e)?"transparent":-1!=="+-\xd7\xf7".indexOf(e)?"#e3f2fd":"empty"===e?"#ffcdd2":"#c8e6c9"}(e.val),marginTop:2,marginBottom:2}},a))}var Pe=Object(E.a)((function(e){return{root:{width:250},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:De.a[500]}}})),Ue=["7","8","9","\xf7","4","5","6","\xd7","1","2","3","-","empty","0","cal","+"];function $e(e){var t=Pe(),a=Object(n.useState)(""),o=Object(m.a)(a,2),c=o[0],i=o[1],l=Object(n.useState)(""),s=Object(m.a)(l,2),u=s[0],d=s[1],b=Object(n.useState)("+"),E=Object(m.a)(b,2),v=E[0],y=E[1],O=r.a.useState(!1),w=Object(m.a)(O,2),j=w[0],x=w[1],C=function(t){c.length>=5?(e.onMessage("Maximum number of digits reached"),e.onVariant("error"),e.onOpen(!0)):i(c.concat(t))},k=function(e){return C(e)},S=function(e){d(e)},N=function(){return function(){var t="";"\xf7"===u?t="divide":"\xd7"===u?t="multiply":"+"===u?t="add":"-"===u&&(t="subtract"),e.onCalChange(t,v.concat(c)),""===t||""===c?(e.onMessage("Number or sign empty!"),e.onVariant("error"),e.onOpen(!0)):(e.onEnterChange(!0),i(""),d(""),y("+"))}()},M=function(){return i(""),void d("")},q=function(e){return-1!=="0123456789".indexOf(e)?k:-1!=="+-\xd7\xf7".indexOf(e)?S:"empty"===e?M:N};return r.a.createElement(He.a,null,r.a.createElement(g.a,{className:t.root},r.a.createElement(Fe.a,{disableSpacing:!0},r.a.createElement(we.a,null),r.a.createElement(f.a,{variant:"subtitle1"},"Equation Changer"),r.a.createElement($.a,{className:Object(B.a)(t.expand,Object(Re.a)({},t.expandOpen,j)),onClick:function(){x(!j)},"aria-expanded":j,"aria-label":"show more"},r.a.createElement(re.a,null))),r.a.createElement(ze.a,{in:j,timeout:"auto",unmountOnExit:!0},r.a.createElement(p.a,null,r.a.createElement(h.a,{container:!0,direction:"column",justify:"center",align:"center"},r.a.createElement(h.a,{container:!0,direction:"row"},r.a.createElement(g.a,{style:{width:"100%"}},r.a.createElement(p.a,null,r.a.createElement(h.a,{container:!0,direction:"row",justify:"flex-start",align:"center"},r.a.createElement(Ve.a,{style:{marginRight:20},onClick:function(){y("+"===v?"-":"+")},size:"small",color:"primary","aria-label":"add"},r.a.createElement("img",{src:"plus-minus.svg",alt:"sign",style:{maxWidth:20}})),r.a.createElement(f.a,{style:{marginRight:"auto"},align:"left",variant:"h6"},"+"===v?"":"-",c),r.a.createElement(h.a,{item:!0},r.a.createElement(ve.a,{orientation:"vertical"})),r.a.createElement(f.a,{style:{width:30},align:"center",variant:"h6"},u))))),r.a.createElement(h.a,{style:{marginTop:4},container:!0,direction:"row"},Ue.map((function(e,t){return r.a.createElement(Le,{key:t,val:e,cb:q(e)})}))))))))}var Ye=a(251);function Ae(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),o=a[0],c=a[1];return r.a.createElement(h.a,{container:!0,alignItems:"center",spacing:2},r.a.createElement(h.a,{item:!0},r.a.createElement(Ye.a,{id:"eq",label:"Enter Equation Here",variant:"filled",value:o,onChange:function(e){c(e.target.value)}})),r.a.createElement(h.a,{item:!0},r.a.createElement(I.a,{onClick:function(){return function(){try{var t=M.a.parse(o);if(null==t.rhs)throw new Error("Not an Equation");var a="";if(!(t.lhs.terms.length<1||t.rhs.terms.length<1))throw new Error("No terms");t.lhs.terms.forEach((function(e,t){if(e.variables[0].degree>1)throw new Error("Not a Linear Equation");if(""===a&&(a=e.variables[0].variable),e.variables[0].variable!==a)throw new Error("Cannot have more than one Variable")})),t.rhs.terms.forEach((function(e,t){if(e.variables[0].degree>1)throw new Error("Not a Linear Equation");if(""===a&&(a=e.variables[0].variable),e.variables[0].variable!==a)throw new Error("Cannot have more than one Variable")})),e.onChangeEquation(t),c(""),console.log(t),e.onChangeMessage("Equation Changed"),e.onChangeVariant("success"),e.onChangeOpen(!0)}catch(n){e.onChangeMessage("Wrong input"),e.onChangeVariant("error"),e.onChangeOpen(!0)}}()},variant:"outlined",color:"primary"},"Enter")))}var Ge=a(239),Je=a(191);function Ke(e){return r.a.createElement(Je.a,null,r.a.createElement(g.a,{style:{width:"100%"},variant:"outlined"},r.a.createElement(Ee.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{variant:"h5",align:"center"},r.a.createElement(O.a,{math:"".concat(e.step)}))))))}var Qe=Object(E.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper,position:"relative",bottom:0,overflow:"auto",maxHeight:150,minHeight:150,overflowY:"scroll"},listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0}}}));function Xe(e){var t=Qe(),a=Object(n.useRef)(null);return Object(n.useEffect)((function(){a.current.scrollTop=a.current.scrollHeight})),r.a.createElement(Ge.a,{dense:!0,className:t.root,ref:a},e.workingOut.map((function(e,t){return r.a.createElement(Ke,{key:t,step:e,i:t+1})})))}var Ze=a(106);var _e=Object(l.e)((function(e){var t=Object(n.useState)(M.a.parse(d(e.location.state.name))),a=Object(m.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(!1),l=Object(m.a)(i,2),u=l[0],g=l[1],p=Object(n.useState)(!1),f=Object(m.a)(p,2),E=f[0],v=f[1],y=Object(n.useState)(!1),O=Object(m.a)(y,2),w=O[0],j=O[1],x=Object(n.useState)([]),k=Object(m.a)(x,2),N=k[0],T=k[1],B=Object(n.useState)(!1),R=Object(m.a)(B,2),V=R[0],W=R[1],H=Object(n.useState)(!1),F=Object(m.a)(H,2),z=F[0],D=F[1],L=Object(n.useState)(""),P=Object(m.a)(L,2),U=P[0],$=P[1],Y=Object(n.useState)("info"),A=Object(m.a)(Y,2),G=A[0],J=A[1],K=Object(n.useState)(e.location.state.level),Q=Object(m.a)(K,1)[0],X=Object(n.useState)(e.location.state.freeStyle),_=Object(m.a)(X,1)[0],ee=Object(n.useState)("change"),te=Object(m.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(!1),oe=Object(m.a)(re,2),ce=oe[0],ie=oe[1],le=Object(n.useState)(!1),se=Object(m.a)(le,2),me=se[0],ue=se[1],de=Object(n.useState)([]),ge=Object(m.a)(de,2),he=ge[0],pe=ge[1];function fe(e,t){T([e,t])}function be(){W(!V)}function Ee(){D(!z)}function ve(e){$(e)}function ye(e){J(e)}function Oe(e){c(e),pe([])}if(Object(n.useEffect)((function(){1===o.lhs.constants.length&&0===o.lhs.terms.length&&1===o.rhs.terms.length&&0===o.rhs.constants.length?1===o.rhs.terms[0].coefficients[0].numer&&o.lhs.constants[0].numer===o.solveFor("x").numer&&o.lhs.constants[0].denom===o.solveFor("x").denom&&($("You solved the equation!"),J("success"),D(!0)):0===o.lhs.constants.length&&1===o.lhs.terms.length&&0===o.rhs.terms.length&&1===o.rhs.constants.length&&1===o.lhs.terms[0].coefficients[0].numer&&o.rhs.constants[0].numer===o.solveFor("x").numer&&o.rhs.constants[0].denom===o.solveFor("x").denom&&($("You solved the equation!"),J("success"),D(!0))}),[o.lhs.constants.length,o.lhs.terms,o.rhs.terms,o.rhs.constants.length,o]),V){var we=null,je=null,xe=new Set(C(o.lhs)[1]),Ce=new Set(C(o.rhs)[1]),ke=Array.from(new Set(Object(s.a)(xe).filter((function(e){return Ce.has(e)}))));if("divide"!==N[0]&&"multiply"!==N[0]||0!==Number(N[1]))if("easy"!==Q||"divide"!==N[0]||ke.includes(Ze(Number(N[1])))){"multiply"===N[0]?(we=o.lhs.multiply(Number(N[1])),je=o.rhs.multiply(Number(N[1])),$("".concat(N[0]," by ",N[1]))):"add"===N[0]?(we=o.lhs.add(Number(N[1]),!1),je=o.rhs.add(Number(N[1]),!1),$("".concat(N[0]," ",N[1]))):"subtract"===N[0]?(we=o.lhs.subtract(Number(N[1]),!1),je=o.rhs.subtract(Number(N[1]),!1),$("".concat(N[0]," ",N[1]))):"divide"===N[0]&&(we=o.lhs.divide(Number(N[1]),!1),je=o.rhs.divide(Number(N[1]),!1),$("".concat(N[0]," by ",N[1]))),J("info"),D(!0);var Se=new M.a.Equation(we,je);pe([].concat(Object(s.a)(he),[o.toString()])),c(Se),ie(!0),ue(!0)}else $("Cannot ".concat(N[0]," by ",N[1])),J("warning"),D(!0);else $("Cannot ".concat(N[0]," by ","0")),J("error"),D(!0);T([]),W(!1)}var Ne=function(e,t){return!(e.constants.length>1||e.terms.length>1||1===e.constants.length&&t&&e.constants[0].numer%e.constants[0].denom===0&&1!==e.constants[0].denom||1===e.terms.length&&t&&e.terms[0].coefficients[0].numer%e.terms[0].coefficients[0].denom===0&&1!==e.terms[0].coefficients[0].denom)},Me="true"===_?r.a.createElement(Ae,{onChangeEquation:Oe,onChangeMessage:ve,onChangeVariant:ye,onChangeOpen:Ee}):"",qe=function(e){var t=null,a=null;"rhs"===e?(a=o.rhs.simplify(),t=o.lhs,0===a.terms.length&&0===a.constants.length&&(a=new M.a.Expression("0")),ue(!1)):(a=o.rhs,0===(t=o.lhs.simplify()).terms.length&&0===t.constants.length&&(t=new M.a.Expression("0")),ie(!1));var n=new M.a.Equation(t,a);pe([].concat(Object(s.a)(he),[o.toString()])),c(n)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{style:{height:"100%"},container:!0,direction:"column",justify:"flex-start"},r.a.createElement(h.a,{item:!0,container:!0},r.a.createElement(Be,{onCalMessage:ve,onCalVariant:ye,onCalOpen:Ee,onCalChange:fe,onCalEnterChange:be,onChangeUnpack:function(e){j(e.target.checked)},onChangeSigns:function(e){v(e.target.checked),console.log(E)},onChangeHelper:function(e){g(e.target.checked)},onChangeMethod:function(e){ne(e)}}),r.a.createElement(Z,{message:U,variant:G,open:z,onOpenChange:Ee})),r.a.createElement(h.a,{item:!0,container:!0,justify:"flex-start",alignItems:"flex-start",style:{marginTop:10,marginLeft:10}},Me),r.a.createElement(h.a,{item:!0,container:!0,justify:"center",alignItems:"center",style:{marginTop:20,marginBottom:20}},r.a.createElement(Xe,{workingOut:he})),r.a.createElement(h.a,{item:!0,container:!0,direction:"row",justify:"center",alignItems:"center",style:{overflow:"hidden"}},r.a.createElement(b.a,{onDragEnd:function(e){document.body.style.color="inherit",document.body.style.backgroundColor="inherit";var t=e.destination,a=e.source;if(t&&(t.droppableId!==a.droppableId||t.index!==a.index)){var n=C(o.lhs,"lhs",E,w,u)[0],r=C(o.rhs,"rhs",E,w,u)[0];if(t.droppableId!==a.droppableId){var i="",l=!1,m=!1;"change"===ae&&(l="eqspace-lhs"===a.droppableId,m="eqspace-rhs"===a.droppableId),i="eqspace-rhs"===t.droppableId?n[a.index]:r[a.index];var d=o.lhs.subtract(i.exp,l),g=o.rhs.subtract(i.exp,m),h=new M.a.Equation(d,g);pe([].concat(Object(s.a)(he),[o.toString()])),c(h)}}}},r.a.createElement(S,{dropId:"eqspace-lhs",expression:o.lhs,side:"lhs",helper:u,showSigns:E,unpackEq:w,level:Q}),r.a.createElement(q,null),r.a.createElement(S,{dropId:"eqspace-rhs",expression:o.rhs,side:"rhs",helper:u,showSigns:E,unpackEq:w,level:Q}))),r.a.createElement(h.a,{style:{margin:20},container:!0,item:!0,direction:"row",justify:"space-evenly",alignItems:"center"},r.a.createElement(h.a,{item:!0},r.a.createElement(I.a,{disabled:Ne(o.lhs,ce),onClick:function(){return qe("lhs")},variant:"contained",color:"primary"},"Simplify Left")),r.a.createElement(h.a,{item:!0},r.a.createElement(I.a,{disabled:Ne(o.rhs,me),onClick:function(){return qe("rhs")},variant:"contained",color:"primary"},"Simplify Right"))),r.a.createElement(h.a,{style:{margin:20},direction:"row",container:!0,item:!0,justify:"center",alignItems:"center"},r.a.createElement(I.a,{onClick:function(){return c(M.a.parse(d(e.location.state.name))),pe([]),void D(!1)},variant:"contained",color:"primary"},"Next"))),r.a.createElement("div",{style:{display:"block",position:"fixed",top:200,right:50,height:0,cursor:"move"}},r.a.createElement($e,{onMessage:ve,onVariant:ye,onOpen:Ee,onCalChange:fe,onEnterChange:be})))})),et=a(58),tt=Object(E.a)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap"},image:(t={position:"relative",height:150},Object(Re.a)(t,e.breakpoints.down("xs"),{height:100}),Object(Re.a)(t,"&:hover, &$focusVisible",{zIndex:1,"& $imageBackdrop":{opacity:.1},"& $imageMarked":{opacity:0},"& $imageTitle":{border:"3px solid currentColor"}}),t),focusVisible:{},imageButton:{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.common.white},imageSrc:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"},imageBackdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:e.palette.common.black,opacity:.3,transition:e.transitions.create("opacity")},imageTitle:{position:"relative",padding:"".concat(e.spacing(2),"px ").concat(e.spacing(3),"px ").concat(e.spacing(1)+4,"px")},imageMarked:{height:3,width:18,backgroundColor:e.palette.common.white,position:"absolute",bottom:5,left:"calc(50% - 9px)",transition:e.transitions.create("opacity")}}}));function at(e){var t=tt();return r.a.createElement("div",{className:t.root},r.a.createElement(et.a,{focusRipple:!0,key:e.title,className:t.image,focusVisibleClassName:t.focusVisible,style:{width:"100%"}},r.a.createElement("span",{className:t.imageSrc,style:{backgroundImage:"url(".concat(e.image,")")}}),r.a.createElement("span",{className:t.imageBackdrop}),r.a.createElement("span",{className:t.imageButton},r.a.createElement(f.a,{component:"span",variant:"h5",color:"inherit",className:t.imageTitle},e.title,r.a.createElement("span",{className:t.imageMarked})))))}var nt=[{title:"Positive",image:"level-1.jpg",level:"easy",freeStyle:"false",name:"positive"},{title:"Negative",image:"level-3.jpg",level:"easy",freeStyle:"false",name:"negative"},{title:"Fractions",image:"level-2.jpg",level:"hard",freeStyle:"false",name:"fractions"},{title:"Negative and Fractions",image:"level-4.jpg",level:"hard",freeStyle:"false",name:"negative-fractions"},{title:"Free Style",image:"level-5.jpg",level:"hard",freeStyle:"true",name:"negative-fractions"}];var rt=Object(l.e)((function(e){return r.a.createElement(h.a,{style:{maxWidth:800,margin:"auto"},direction:"column",container:!0,justify:"center"},r.a.createElement(h.a,{direction:"column",container:!0,item:!0,alignItems:"center"},r.a.createElement("img",{src:"logo.svg",alt:"logo",style:{width:250}})),r.a.createElement(h.a,{item:!0},r.a.createElement(ve.a,null)),r.a.createElement(h.a,{item:!0,container:!0,style:{marginTop:20},direction:"row",justify:"center",alignItems:"center"},nt.map((function(e,t){return r.a.createElement(h.a,{key:t,item:!0,xs:12,sm:6,md:4,style:{padding:8,paddingTop:0}},r.a.createElement(i.b,{to:{pathname:"/solve",state:{level:e.level,freeStyle:e.freeStyle,name:e.name}}},r.a.createElement(at,{image:e.image,title:e.title})))}))))})),ot=a(124),ct=a(250),it=Object(ot.a)({palette:{primary:{main:"#1e88e5"}}});c.a.render(r.a.createElement((function(e){return r.a.createElement(ct.a,{theme:it},r.a.createElement(i.a,{basename:window.location.pathname||""},r.a.createElement(l.a,{exact:!0,path:"/",component:Object(l.e)(rt)}),r.a.createElement(l.a,{path:"/solve",component:Object(l.e)(_e)})))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},59:function(e,t,a){}},[[138,1,2]]]);
//# sourceMappingURL=main.e8dac36f.chunk.js.map