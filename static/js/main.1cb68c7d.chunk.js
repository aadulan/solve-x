(this["webpackJsonpsolve-x"]=this["webpackJsonpsolve-x"]||[]).push([[0],{225:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),i=n.n(c),o=(n(76),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function s(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,307)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},d=n(48),h=n(16),u=n(43),j=n(14),b=n(13),m=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},f=function(e){var t=Math.ceil(10*Math.random()),n=Math.ceil(10*Math.random())+1,a=m(2,11),r=t*a,c=m(2,r),i=m(2,a-1);return"level1"===e?Math.random()>=.5?"".concat(a+i," * x +").concat(c," = ").concat(i," * x + ").concat(r+c):"".concat(a," * x +").concat(c," = ").concat(r+c):"level2"===e?Math.random()>=.5?"-".concat(a+i," * x +").concat(c," = -").concat(i," * x + ").concat(r+c):"".concat(-a," * x -").concat(c," = ").concat(r-c):"level3"===e?Math.random()>=.5?"".concat(a+i," * x /").concat(n," +").concat(c," = ").concat(i," * x + ").concat(r+c):"".concat(a," * x/").concat(n," +").concat(c," = ").concat(r+c):"level4"===e||"level5"===e?Math.random()>=.5?"-".concat(a+i," * x/").concat(n," = -").concat(i," * x + ").concat(r):"".concat(-a," * x/").concat(n," -").concat(c," = ").concat(r-c):void 0},g=n(25),x=n(59),p=n(279),O=Object(p.a)({card:{border:1,borderStyle:"solid",padding:10,margin:10,"&:hover":{boxShadow:"0px 4px 10px 0px rgba(0, 0, 0, 0.25)"}},userSelect:{userSelect:"none"},eqSpaceCard:{padding:20,maxWidth:1e3,borderStyle:"solid",borderWidth:1,backgroundColor:"#e3f2fd"},drop:{display:"flex",flexDirection:"row"},equal:{borderRadius:"50em",margin:"0.2em",width:100,height:100,fontFamily:'"Fira Code"',display:"flex",userSelect:"none"}}),v=(n(120),n(38)),w=n(290),y=n(292),C=n(231),k=n(1);function S(e){var t=O();return Object(k.jsx)(x.b,{draggableId:e.task.id,index:e.index,isDragDisabled:e.isDragDisabled,children:function(n){return Object(k.jsx)(w.a,Object(g.a)(Object(g.a)(Object(g.a)({className:t.card,ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{children:Object(k.jsx)(y.a,{children:Object(k.jsx)(C.a,{style:{color:"#424242"},className:t.userSelect,align:"center",variant:"h3",children:Object(k.jsx)(v.a,{math:"".concat(e.task.content)})})})}))}})}var E=n(133),N=n(134),q=function(e,t,n,a,r){var c=[],i=[];e.terms.forEach((function(e,o){var s=I(e.coefficients[0].numer);i=i.concat(s);var l,d=0===o,h=e.coefficients[0]>0;l=1===e.coefficients[0].numer?"":-1===e.coefficients[0].numer?"-":e.coefficients[0].numer;var u=1===e.coefficients[0].denom,j=a?e.coefficients[0].numer+"\\times "+e.variables[0].variable:l+e.variables[0].variable,b=n&&h?"+"+j:j,m=!d&&h?"+"+l+e.variables[0].variable:l+e.variables[0].variable,f=r?b:m,g=u?f:"\\frac{".concat(f,"}{").concat(e.coefficients[0].denom,"}");c.push({id:"".concat(t,"-variable-x").concat(o),content:g,exp:e})}));var o,s=[];if(e.constants.forEach((function(e,a){var i=I(e.numer);s=s.concat(i);var o=0!==c.length&&0===a,l=0===a,d=e.numer>0,h=1===e.denom,u=d?"+"+e.numer:e.numer,j=!d||l&&!o?e.numer:"+"+e.numer,b=n&&r?u:j,m=h?b:"\\frac{".concat(b,"}{").concat(e.denom,"}");c.push({id:"".concat(t,"-num-").concat(a),content:m,exp:e})})),0===e.terms.length)o=s;else if(0===e.constants.length)o=i;else{var l=new Set(i),d=new Set(s);o=new Set(Object(j.a)(l).filter((function(e){return d.has(e)})))}return[c,o]};function I(e){for(var t=N(e),n=[],a=0,r=1;r<=t;r++)(a=t/r)===E(a)&&n.push(r);return n}var M=n(286);function T(e){var t=Object(a.useState)(!1),n=Object(b.a)(t,2),r=n[0],c=n[1],i=O();return Object(a.useEffect)((function(){c(1===q(e.expression,e.side)[0].length)}),[e.expression,e.side]),Object(k.jsx)(w.a,{className:i.eqSpaceCard,children:Object(k.jsx)(x.c,{droppableId:e.dropId,direction:"horizontal",children:function(t){return Object(k.jsxs)(M.a,Object(g.a)(Object(g.a)({className:i.drop,direction:"row",container:!0,item:!0,justifyContent:"center",alignItems:"center",ref:t.innerRef},t.droppableProps),{},{children:[q(e.expression,e.side,e.showSigns,e.unpackEq,e.helper,e.level)[0].map((function(t,n){return Object(k.jsx)(S,Object(g.a)(Object(g.a)({task:t,index:n},e),{},{isDragDisabled:r}),t.id)})),t.placeholder]}))}})})}var W=n(39),F=n.n(W);function B(){return Object(k.jsx)(C.a,{id:"equal",variant:"h1",children:Object(k.jsx)("span",{style:{margin:"auto"},children:Object(k.jsx)(v.a,{math:"="})})})}var H=n(57),R=n.n(H),D=n(287),L=n(155),z=n(284),P=Object(p.a)({root:{maxWidth:150,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}),U=[["Change side, change sign","change"],["Balance","balance"]];function A(e){var t=P(),n=r.a.useState(null),a=Object(b.a)(n,2),c=a[0],i=a[1],o=r.a.useState(0),s=Object(b.a)(o,2),l=s[0],d=s[1];return Object(k.jsxs)("div",{className:t.root,children:[Object(k.jsx)(D.a,{endIcon:Object(k.jsx)(R.a,{}),onClick:function(e){i(e.currentTarget)},style:{justifyContent:"left",maxWidth:150,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",color:"white"},children:"Method"}),Object(k.jsx)(L.a,{id:"lock-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:function(){i(null)},style:{paddingTop:0,paddingBottom:0},children:U.map((function(t,n){return Object(k.jsx)(z.a,{selected:n===l,onClick:function(t){return function(t,n){e.onChangeMethod(U[n][1]),d(n),i(null)}(0,n)},children:t[0]},t)}))})]})}var V=n(293),Y=n(274),G=n(295),J=n(296),$=n(285),K=Object(p.a)((function(e){return{group:{padding:e.spacing(2)}}}));function Q(e){var t=K(),n=r.a.useState(null),c=Object(b.a)(n,2),i=c[0],o=c[1],s=Object(a.useState)(!1),l=Object(b.a)(s,2),d=l[0],h=l[1],u=Object(a.useState)(!1),j=Object(b.a)(u,2),m=j[0],f=j[1],g=Object(a.useState)(!1),x=Object(b.a)(g,2),p=x[0],O=x[1],v=Boolean(i),w=v?"simple-popover":void 0;return Object(k.jsxs)("div",{children:[Object(k.jsx)(D.a,{style:{color:"white"},"aria-describedby":w,onClick:function(e){o(e.currentTarget)},children:"Helper Mode"}),Object(k.jsx)(V.a,{id:w,open:v,anchorEl:i,onClose:function(){o(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},TransitionComponent:Y.a,children:Object(k.jsxs)(G.a,{className:t.group,children:[Object(k.jsx)(J.a,{className:"helper",control:Object(k.jsx)($.a,{className:"helper",checked:d,onChange:function(t){e.onChangeHelper(t),h(t.target.checked)},value:"helper",color:"primary"}),label:"Helper Mode"}),Object(k.jsx)(J.a,{className:"signs",control:Object(k.jsx)($.a,{checked:m,onChange:function(t){f(t.target.checked),e.onChangeSigns(t)},value:"signs",color:"primary",disabled:!d}),label:"Show Signs"}),Object(k.jsx)(J.a,{className:"unpack",control:Object(k.jsx)($.a,{checked:p,onChange:function(t){e.onChangeUnpack(t),O(t.target.checked)},value:"unpack",color:"primary",disabled:!d}),label:"Unpack Variable"})]})})]})}var X=n(149),Z=n(151),_=n.n(Z),ee=n(5),te=n(150),ne=n.n(te),ae=n(275);function re(e){return Object(k.jsxs)(M.a,{container:!0,direction:"column",children:[Object(k.jsxs)(M.a,{item:!0,children:[Object(k.jsx)(C.a,{align:"left",variant:"h6",children:e.title}),e.info]}),Object(k.jsx)(M.a,{item:!0,children:Object(k.jsx)(ae.a,{style:{marginTop:e.margin?12:0,marginBottom:12},variant:"fullWidth"})})]})}var ce=n(90),ie=n.n(ce),oe=n(91),se=n.n(oe),le=n(92),de=n.n(le),he=[{icon:Object(k.jsx)(ie.a,{}),word:"draggable"},{icon:Object(k.jsx)(R.a,{}),word:"expandable"},{icon:Object(k.jsx)(se.a,{}),word:"clear output "},{icon:Object(k.jsx)(de.a,{}),word:"enter"},{icon:Object(k.jsx)("img",{src:"plus-minus-modal.svg",alt:"sign",style:{maxWidth:20}}),word:"changes sign of number ",xs:12}];function ue(){return Object(k.jsx)(M.a,{container:!0,children:he.map((function(e,t){return Object(k.jsxs)(r.a.Fragment,{children:[Object(k.jsx)(M.a,{item:!0,xs:!0,children:Object(k.jsx)(ae.a,{})}),Object(k.jsxs)(M.a,{item:!0,xs:12,direction:"row",container:!0,justifyContent:"space-between",style:{margin:5},children:[e.icon,Object(k.jsx)(C.a,{align:"right",children:e.word})]},t)]},t)}))})}var je=n(297),be=n(276),me=n(298),fe=n(299),ge=n(300),xe=["children","onClose"],pe=[{header:"Helper Mode",info:Object(k.jsxs)(C.a,{align:"left",children:["Allows you to see hidden operations and signs:",Object(k.jsxs)(C.a,{align:"center",children:[Object(k.jsx)(v.a,{math:"2 \\rightarrow +2"}),Object(k.jsx)("br",{}),Object(k.jsx)(v.a,{math:"3x \\rightarrow 3 \\times x"})]})]})},{header:"Methods",info:Object(k.jsx)(C.a,{align:"left",children:"You can use your preferred method to solve equations: balance or change side, change sign"})},{header:"Free Style",info:Object(k.jsxs)(C.a,{align:"left",children:["Try out your own Equation. Only ",Object(k.jsx)(v.a,{math:"x"})," can be used a variable!"]})},{header:"Equation Changer",margin:!1,info:Object(k.jsxs)(C.a,{align:"left",children:["Experiment with the equation. Input a number and an operation and see the equation change.",Object(k.jsx)("br",{}),Object(k.jsx)(C.a,{variant:"subtitle2",children:"Controls:"}),Object(k.jsx)(ue,{})]})}],Oe=Object(ee.a)(je.a)((function(e){var t=e.theme;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}})),ve=function(e){var t=e.children,n=e.onClose,a=Object(X.a)(e,xe);return Object(k.jsxs)(be.a,Object(g.a)(Object(g.a)({sx:{m:0,p:2}},a),{},{children:[t,n?Object(k.jsx)(me.a,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(k.jsx)(ne.a,{})}):null]}))};function we(){var e=r.a.useState(!1),t=Object(b.a)(e,2),n=t[0],a=t[1],c=function(){a(!1)};return Object(k.jsxs)("div",{children:[Object(k.jsx)(me.a,{style:{color:"white"},onClick:function(){a(!0)},children:Object(k.jsx)(_.a,{})}),Object(k.jsxs)(Oe,{maxWidth:"md",onClose:c,"aria-labelledby":"customized-dialog-title",open:n,children:[Object(k.jsx)(ve,{id:"customized-dialog-title",onClose:c,children:"Info"}),Object(k.jsx)(fe.a,{dividers:!0,children:pe.map((function(e,t){return Object(k.jsx)(re,{title:e.header,info:e.info,margin:e.margin},t)}))}),Object(k.jsx)(ge.a,{children:Object(k.jsx)(D.a,{autoFocus:!0,onClick:c,color:"primary",children:"Close"})})]})]})}var ye=n(301),Ce=n(302),ke=Object(p.a)({root:{flexGrow:1},menuButton:{marginRight:5},title:{flexGrow:1},list:{width:275},fullList:{width:"auto"}});function Se(e){var t=ke();return Object(k.jsx)("div",{className:t.root,children:Object(k.jsx)(ye.a,{position:"static",children:Object(k.jsxs)(Ce.a,{children:[Object(k.jsx)(d.b,{to:{pathname:"/"},style:{marginRight:"auto"},children:Object(k.jsx)("img",{src:"/solve-x/operations.svg",alt:"logo",style:{width:50,height:50,marginRight:"auto"}})}),Object(k.jsx)(A,{onChangeMethod:e.onChangeMethod}),Object(k.jsx)("div",{style:{height:"auto",width:20,alignSelf:"stretch",display:"flex"},children:Object(k.jsx)(ae.a,{style:{height:"60%",margin:"auto",backgroundColor:"white"},orientation:"vertical"})}),Object(k.jsx)(Q,{onChangeUnpack:e.onChangeUnpack,onChangeSigns:e.onChangeSigns,onChangeHelper:e.onChangeHelper}),Object(k.jsx)("div",{style:{height:"auto",width:20,alignSelf:"stretch",display:"flex"},children:Object(k.jsx)(ae.a,{style:{height:"60%",margin:"auto",backgroundColor:"white"},orientation:"vertical"})}),Object(k.jsx)(we,{})]})})})}var Ee=n(4),Ne=n(153),qe=n.n(Ne),Ie=n(6);function Me(e){var t={empty:Object(k.jsx)(se.a,{}),cal:Object(k.jsx)(de.a,{})},n=["empty","cal"].includes(e.val)?t[e.val]:Object(k.jsx)(C.a,{style:{fontSize:"1.5em"},children:e.val}),a="cal-button-".concat(e.val);return Object(k.jsx)(M.a,{item:!0,xs:3,children:Object(k.jsx)(D.a,{id:a,onClick:function(){return e.cb(e.val)},onTouchStart:function(){return e.cb(e.val)},style:{width:45,height:45,minWidth:30,padding:0,background:function(e){return-1!=="0123456789".indexOf(e)?"transparent":-1!=="+-\xd7\xf7".indexOf(e)?"#e3f2fd":"empty"===e?"#ffcdd2":"#c8e6c9"}(e.val),marginTop:2,marginBottom:2,color:"black"},children:n})})}var Te=n(303),We=n(289),Fe=n(304),Be=n(50),He=Object(p.a)((function(e){return{root:{width:250},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:Be.a[500]}}})),Re=["7","8","9","\xf7","4","5","6","\xd7","1","2","3","-","empty","0","cal","+"];function De(e){var t=He(),n=Object(a.useState)(""),r=Object(b.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(""),s=Object(b.a)(o,2),l=s[0],d=s[1],h=Object(a.useState)("+"),j=Object(b.a)(h,2),m=j[0],f=j[1],g=Object(a.useState)(!1),x=Object(b.a)(g,2),p=x[0],O=x[1],v=Object(u.b)().enqueueSnackbar,S=function(){f("+"===m?"-":"+")},E=function(e){c.length>=5?v("Maximum number of digits reached",{variant:"error"}):i(c.concat(e))},N=function(e){return E(e)},q=function(e){d(e)},I=function(){return function(){var t="";"\xf7"===l?t="divide":"\xd7"===l?t="multiply":"+"===l?t="add":"-"===l&&(t="subtract"),e.onCalChange(t,m.concat(c)),""===t||""===c?v("Number or sign empty!",{variant:"error"}):(e.onEnterChange(!0),i(""),d(""),f("+"))}()},T=function(){return i(""),void d("")},W=function(e){return-1!=="0123456789".indexOf(e)?N:-1!=="+-\xd7\xf7".indexOf(e)?q:"empty"===e?T:I};return Object(k.jsx)(qe.a,{cancel:"#cal-button-expand",children:Object(k.jsxs)(w.a,{className:t.root,children:[Object(k.jsxs)(Te.a,{disableSpacing:!0,children:[Object(k.jsx)(ie.a,{}),Object(k.jsx)(C.a,{variant:"subtitle1",children:"Equation Changer"}),Object(k.jsx)(me.a,{id:"cal-button-expand",className:Object(Ie.default)(t.expand,Object(Ee.a)({},t.expandOpen,p)),onClick:function(){O((function(e){return!e}))},"aria-expanded":p,"aria-label":"show more",children:Object(k.jsx)(R.a,{})})]}),Object(k.jsx)(We.a,{in:p,timeout:"auto",unmountOnExit:!0,children:Object(k.jsx)(y.a,{children:Object(k.jsxs)(M.a,{container:!0,direction:"column",justifyContent:"center",align:"center",children:[Object(k.jsx)(M.a,{container:!0,direction:"row",children:Object(k.jsx)(w.a,{style:{width:"100%"},children:Object(k.jsx)(y.a,{children:Object(k.jsxs)(M.a,{container:!0,direction:"row",justifyContent:"flex-start",align:"center",children:[Object(k.jsx)(Fe.a,{style:{marginRight:20},onClick:function(){return S()},onTouchStart:function(){return S()},size:"small",color:"primary","aria-label":"add",children:Object(k.jsx)("img",{src:"/solve-x/plus-minus.svg",alt:"sign",style:{maxWidth:20}})}),Object(k.jsxs)(C.a,{className:"number",style:{marginRight:"auto"},align:"left",variant:"h6",children:["+"===m?"":"-",c]}),Object(k.jsx)(M.a,{item:!0,children:Object(k.jsx)(ae.a,{orientation:"vertical"})}),Object(k.jsx)(C.a,{className:"sign",style:{width:30},align:"center",variant:"h6",children:l})]})})})}),Object(k.jsx)(M.a,{style:{marginTop:4},container:!0,direction:"row",children:Re.map((function(e,t){return Object(k.jsx)(Me,{val:e,cb:W(e)},t)}))})]})})})]})})}var Le=n(278);function ze(e){var t=Object(a.useState)(""),n=Object(b.a)(t,2),r=n[0],c=n[1],i=Object(u.b)().enqueueSnackbar;return Object(k.jsxs)(M.a,{container:!0,alignItems:"center",spacing:2,children:[Object(k.jsx)(M.a,{item:!0,children:Object(k.jsx)(Le.a,{id:"eq",label:"Enter Equation Here",variant:"filled",value:r,onChange:function(e){c(e.target.value)}})}),Object(k.jsx)(M.a,{item:!0,children:Object(k.jsx)(D.a,{onClick:function(){return function(){try{var t=F.a.parse(r);if(null==t.rhs)throw new Error("Not an Equation");var n="x";if(t.lhs.terms.length<1&&t.rhs.terms.length<1)throw new Error("No terms");t.lhs.terms.forEach((function(e){if(e.variables[0].degree>1)throw new Error("Not a Linear Equation");if(e.variables[0].variable!==n)throw new Error("Cannot have more than one Variable")})),t.rhs.terms.forEach((function(e){if(e.variables[0].degree>1)throw new Error("Not a Linear Equation");if(""===n&&(n=e.variables[0].variable),e.variables[0].variable!==n)throw new Error("Cannot have more than one Variable")})),e.onChangeEquation(t),c(""),i("Equation Changed",{variant:"success"})}catch(a){i("Wrong input",{variant:"error"})}}()},variant:"outlined",color:"primary",children:"Enter"})})]})}var Pe=n(282),Ue=n(305);function Ae(e){return Object(k.jsx)(Pe.a,{children:Object(k.jsx)(w.a,{style:{width:"100%"},variant:"outlined",children:Object(k.jsx)(Ue.a,{children:Object(k.jsx)(y.a,{children:Object(k.jsx)(C.a,{variant:"h5",align:"center",children:Object(k.jsx)(v.a,{math:"".concat(e.step)})})})})})})}var Ve=n(294),Ye=Object(p.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper,position:"relative",bottom:0,overflow:"auto",maxHeight:150,minHeight:150,overflowY:"scroll"},listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0}}}));function Ge(e){var t=Ye(),n=Object(a.useRef)(null);return Object(a.useEffect)((function(){n.current.scrollTop=n.current.scrollHeight})),Object(k.jsx)(Ve.a,{dense:!0,className:t.root,ref:n,children:e.workingOut.map((function(e,t){return Object(k.jsx)(Ae,{step:e,i:t+1},t)}))})}var Je=n(134),$e=n(133);var Ke=function(){var e=Object(h.f)().id,t=Object(a.useState)(F.a.parse(f(e))),n=Object(b.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)(!1),s=Object(b.a)(o,2),l=s[0],d=s[1],m=Object(a.useState)(!1),g=Object(b.a)(m,2),p=g[0],O=g[1],v=Object(a.useState)(!1),w=Object(b.a)(v,2),y=w[0],C=w[1],S=Object(a.useState)([]),E=Object(b.a)(S,2),N=E[0],I=E[1],W=Object(a.useState)(!1),H=Object(b.a)(W,2),R=H[0],L=H[1],z="#/level1"===window.location.hash||"#/level2"===window.location.hash?"easy":"hard",P=Object(a.useState)(window.location.hash),U=Object(b.a)(P,1)[0],A=Object(a.useState)("change"),V=Object(b.a)(A,2),Y=V[0],G=V[1],J=Object(a.useState)(!1),$=Object(b.a)(J,2),K=($[0],$[1]),Q=Object(a.useState)(!1),X=Object(b.a)(Q,2),Z=(X[0],X[1]),_=Object(a.useState)([]),ee=Object(b.a)(_,2),te=ee[0],ne=ee[1],ae=Object(u.b)().enqueueSnackbar;function re(e,t){I([e,t])}function ce(){L(!R)}function ie(e){i(e),ne([])}if(Object(a.useEffect)((function(){1===c.lhs.constants.length&&0===c.lhs.terms.length&&1===c.rhs.terms.length&&0===c.rhs.constants.length?1===c.rhs.terms[0].coefficients[0].numer&&c.lhs.constants[0].numer===c.solveFor("x").numer&&c.lhs.constants[0].denom===c.solveFor("x").denom&&ae("You solved the equation!",{variant:"success"}):0===c.lhs.constants.length&&1===c.lhs.terms.length&&0===c.rhs.terms.length&&1===c.rhs.constants.length&&1===c.lhs.terms[0].coefficients[0].numer&&c.rhs.constants[0].numer===c.solveFor("x").numer&&c.rhs.constants[0].denom===c.solveFor("x").denom&&ae("You solved the equation!",{variant:"success"})}),[c.lhs.constants.length,c.lhs.terms,c.rhs.terms,c.rhs.constants.length,c]),R){var oe=null,se=null,le=new Set(q(c.lhs)[1]),de=new Set(q(c.rhs)[1]),he=Array.from(new Set(Object(j.a)(le).filter((function(e){return de.has(e)})))),ue="";if("divide"!==N[0]&&"multiply"!==N[0]||0!==Number(N[1]))if("easy"!==z||"divide"!==N[0]||he.includes(Je(Number(N[1])))){"multiply"===N[0]?(oe=c.lhs.multiply(Number(N[1])),se=c.rhs.multiply(Number(N[1])),ue="".concat(N[0]," by ",N[1])):"add"===N[0]?(oe=c.lhs.add(Number(N[1]),!1),se=c.rhs.add(Number(N[1]),!1),ue="".concat(N[0]," ",N[1])):"subtract"===N[0]?(oe=c.lhs.subtract(Number(N[1]),!1),se=c.rhs.subtract(Number(N[1]),!1),ue="".concat(N[0]," ",N[1])):"divide"===N[0]&&(oe=c.lhs.divide(Number(N[1]),!1),se=c.rhs.divide(Number(N[1]),!1),ue="".concat(N[0]," by ",N[1])),ae(ue,{variant:"info"});var je=new F.a.Equation(oe,se);ne([].concat(Object(j.a)(te),[c.toTex()])),i(je),K(!0),Z(!0)}else ae("Cannot ".concat(N[0]," by ",N[1]),{variant:"warning"});else ae("Cannot ".concat(N[0]," by ","0"),{variant:"error"});I([]),L(!1)}function be(e){for(var t=Je(e),n=[],a=0,r=1;r<=t;r++)(a=t/r)===$e(a)&&n.push(r);return n}function me(e,t){var n=be(e).filter((function(e){return-1!==be(t).indexOf(e)}));return 0!==n.filter((function(e){return 1!==e})).length}var fe=function(e){return!(e.constants.length>1||e.terms.length>1||1===e.constants.length&&(e.constants[0].numer%e.constants[0].denom===0||me(e.constants[0].numer,e.constants[0].denom))&&1!==e.constants[0].denom||1===e.terms.length&&(e.terms[0].coefficients[0].numer%e.terms[0].coefficients[0].denom===0||me(e.terms[0].coefficients[0].numer,e.terms[0].coefficients[0].denom))&&1!==e.terms[0].coefficients[0].denom)},ge="#/level5"===U?Object(k.jsx)(ze,{onChangeEquation:ie}):"",xe=function(e){var t=null,n=null;"rhs"===e?(n=c.rhs.simplify(),t=c.lhs,0===n.terms.length&&0===n.constants.length&&(n=new F.a.Expression("0")),Z(!1)):(n=c.rhs,0===(t=c.lhs.simplify()).terms.length&&0===t.constants.length&&(t=new F.a.Expression("0")),K(!1));var a=new F.a.Equation(t,n);ne([].concat(Object(j.a)(te),[c.toTex()])),i(a)};return Object(k.jsxs)(r.a.Fragment,{children:[Object(k.jsxs)(M.a,{id:e,style:{height:"100%"},container:!0,direction:"column",justifyContent:"flex-start",children:[Object(k.jsx)(M.a,{item:!0,container:!0,children:Object(k.jsx)(Se,{onCalChange:re,onCalEnterChange:ce,onChangeUnpack:function(e){C(e.target.checked)},onChangeSigns:function(e){O(e.target.checked)},onChangeHelper:function(e){d(e.target.checked)},onChangeMethod:function(e){G(e)}})}),Object(k.jsx)(M.a,{item:!0,container:!0,justifyContent:"flex-start",alignItems:"flex-start",style:{marginTop:10,marginLeft:10},children:ge}),Object(k.jsx)(M.a,{item:!0,container:!0,justifyContent:"center",alignItems:"center",style:{marginTop:20,marginBottom:20},children:Object(k.jsx)(Ge,{workingOut:te})}),Object(k.jsx)(M.a,{item:!0,container:!0,direction:"row",justifyContent:"center",alignItems:"center",style:{overflow:"hidden"},children:Object(k.jsxs)(x.a,{onDragEnd:function(e){document.body.style.color="inherit",document.body.style.backgroundColor="inherit";var t=e.destination,n=e.source;if(t&&(t.droppableId!==n.droppableId||t.index!==n.index)){var a=q(c.lhs,"lhs",p,y,l)[0],r=q(c.rhs,"rhs",p,y,l)[0];if(t.droppableId!==n.droppableId){var o="",s=!1,d=!1;"change"===Y&&(s="eqspace-lhs"===n.droppableId,d="eqspace-rhs"===n.droppableId),o="eqspace-rhs"===t.droppableId?a[n.index]:r[n.index];var h=c.lhs.subtract(o.exp,s),u=c.rhs.subtract(o.exp,d),b=new F.a.Equation(h,u);ne([].concat(Object(j.a)(te),[c.toTex()])),i(b)}}},children:[Object(k.jsx)(T,{dropId:"eqspace-lhs",expression:c.lhs,side:"lhs",helper:l,showSigns:p,unpackEq:y,level:z}),Object(k.jsx)(B,{}),Object(k.jsx)(T,{dropId:"eqspace-rhs",expression:c.rhs,side:"rhs",helper:l,showSigns:p,unpackEq:y,level:z})]})}),Object(k.jsxs)(M.a,{style:{margin:20},container:!0,item:!0,direction:"row",justifyContent:"space-evenly",alignItems:"center",children:[Object(k.jsx)(M.a,{item:!0,children:Object(k.jsx)(D.a,{disabled:fe(c.lhs),onClick:function(){return xe("lhs")},variant:"contained",children:"Simplify Left"})}),Object(k.jsx)(M.a,{item:!0,children:Object(k.jsx)(D.a,{disabled:fe(c.rhs),onClick:function(){return xe("rhs")},variant:"contained",children:"Simplify Right"})})]}),Object(k.jsx)(M.a,{style:{margin:20},direction:"row",container:!0,item:!0,justifyContent:"center",alignItems:"center",children:Object(k.jsx)(D.a,{onClick:function(){return i(F.a.parse(f(e))),void ne([])},variant:"contained",children:"Next"})})]}),Object(k.jsx)("div",{style:{display:"block",position:"fixed",top:200,right:50,height:0,cursor:"move"},children:Object(k.jsx)(De,{onCalChange:re,onEnterChange:ce})})]})},Qe=n(280),Xe=Object(ee.a)(Qe.a)((function(e){var t,n=e.theme;return t={position:"relative",height:200},Object(Ee.a)(t,n.breakpoints.down("sm"),{width:"100% !important",height:100}),Object(Ee.a)(t,"&:hover, &.Mui-focusVisible",{zIndex:1,"& .MuiImageBackdrop-root":{opacity:.15},"& .MuiImageMarked-root":{opacity:0},"& .MuiTypography-root":{border:"4px solid currentColor"}}),t})),Ze=Object(ee.a)("span")({position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"}),_e=Object(ee.a)("span")((function(e){return{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.theme.palette.common.white}})),et=Object(ee.a)("span")((function(e){var t=e.theme;return{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:t.palette.common.black,opacity:.4,transition:t.transitions.create("opacity")}})),tt=Object(ee.a)("span")((function(e){var t=e.theme;return{height:3,width:18,backgroundColor:t.palette.common.white,position:"absolute",bottom:-2,left:"calc(50% - 9px)",transition:t.transitions.create("opacity")}}));function nt(e){return Object(k.jsxs)(Xe,{focusRipple:!0,style:{width:250},children:[Object(k.jsx)(Ze,{style:{backgroundImage:"url(".concat("/solve-x/"+e.image,")")}}),Object(k.jsx)(et,{className:"MuiImageBackdrop-root"}),Object(k.jsx)(_e,{children:Object(k.jsxs)(C.a,{component:"span",variant:"h5",color:"inherit",sx:{position:"relative",p:4,pt:2,pb:function(e){return"calc(".concat(e.spacing(1)," + 6px)")}},children:[e.title,Object(k.jsx)(tt,{className:"MuiImageMarked-root"})]})})]},e.title)}var at=[{title:"Positive",image:"level-1.webp",level:"easy",freeStyle:"false",name:"positive",url:"level1"},{title:"Negative",image:"level-3.webp",level:"easy",freeStyle:"false",name:"negative",url:"level2"},{title:"Fractions",image:"level-2.webp",level:"hard",freeStyle:"false",name:"fractions",url:"level3"},{title:"Negative and Fractions",image:"level-4.webp",level:"hard",freeStyle:"false",name:"negative-fractions",url:"level4"},{title:"Free Style",image:"level-5.webp",level:"hard",freeStyle:"true",name:"negative-fractions",url:"level5"}];var rt=function(){return Object(k.jsxs)(M.a,{id:"start",style:{maxWidth:800,margin:"auto"},direction:"column",container:!0,justifyContent:"center",children:[Object(k.jsx)(M.a,{direction:"column",container:!0,item:!0,alignItems:"center",children:Object(k.jsx)("img",{src:"/solve-x/logo.svg",alt:"logo",style:{width:250}})}),Object(k.jsx)(M.a,{item:!0,children:Object(k.jsx)(ae.a,{})}),Object(k.jsx)(M.a,{item:!0,container:!0,style:{marginTop:20},direction:"row",justifyContent:"center",alignItems:"center",children:at.map((function(e,t){return Object(k.jsx)(M.a,{item:!0,xs:12,sm:6,md:4,style:{padding:8,paddingTop:0},children:Object(k.jsx)(d.b,{to:{pathname:"/".concat(e.url)},children:Object(k.jsx)(nt,{image:e.image,title:e.title})})},t)}))})]})},ct=n(154),it=n(306),ot=Object(ct.a)({palette:{primary:{main:"#1e88e5"}}});function st(){return Object(k.jsx)(it.a,{theme:ot,children:Object(k.jsx)(u.a,{maxSnack:1,children:Object(k.jsx)(d.a,{basename:"",children:Object(k.jsxs)(h.c,{children:[Object(k.jsx)(h.a,{exact:!0,path:"/",component:rt}),Object(k.jsx)(h.a,{exact:!0,path:"/:id",component:Ke})]})})})})}i.a.render(Object(k.jsx)(st,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/solve-x",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/solve-x","/service-worker.js");o?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):s(t,e)}))}}(),l()},76:function(e,t,n){}},[[225,1,2]]]);
//# sourceMappingURL=main.1cb68c7d.chunk.js.map