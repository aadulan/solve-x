(window["webpackJsonpsolve-x"]=window["webpackJsonpsolve-x"]||[]).push([[0],{140:function(e,t,a){e.exports=a(188)},188:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),i=(a(61),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var s=a(36),m=a(16),u=a(7),d=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},h=function(e){var t=Math.ceil(10*Math.random()),a=Math.ceil(10*Math.random())+1,n=d(2,11),r=t*n,o=d(2,r),c=d(2,n-1);return"level1"===e?Math.random()>=.5?"".concat(n+c," * x +").concat(o," = ").concat(c," * x + ").concat(r+o):"".concat(n," * x +").concat(o," = ").concat(r+o):"level2"===e?Math.random()>=.5?"-".concat(n+c," * x +").concat(o," = -").concat(c," * x + ").concat(r+o):"".concat(-n," * x -").concat(o," = ").concat(r-o):"level3"===e?Math.random()>=.5?"".concat(n+c," * x /").concat(a," +").concat(o," = ").concat(c," * x + ").concat(r+o):"".concat(n," * x/").concat(a," +").concat(o," = ").concat(r+o):"level4"===e?Math.random()>=.5?"-".concat(n+c," * x/").concat(a," = -").concat(c," * x + ").concat(r):"".concat(-n," * x/").concat(a," -").concat(o," = ").concat(r-o):"level5"===e?Math.random()>=.5?"-".concat(n+c," * x/").concat(a," = -").concat(c," * x + ").concat(r):"".concat(-n," * x/").concat(a," -").concat(o," = ").concat(r-o):void 0},g=a(231),f=a(234),p=a(233),b=a(126),v=a(46),E=a(228),y=Object(E.a)({card:{border:1,borderStyle:"solid",padding:10,margin:10,"&:hover":{boxShadow:"0px 4px 10px 0px rgba(0, 0, 0, 0.25)"}},userSelect:{userSelect:"none"},eqSpaceCard:{padding:20,maxWidth:1e3,borderStyle:"solid",borderWidth:1,backgroundColor:"#e3f2fd"},drop:{display:"flex",flexDirection:"row"},equal:{borderRadius:"50em",margin:"0.2em",width:100,height:100,fontFamily:'"Fira Code"',display:"flex",userSelect:"none"}}),w=(a(94),a(26)),O=a.n(w);function x(e){var t=y();return r.a.createElement(v.b,{draggableId:e.task.id,index:e.index,isDragDisabled:e.isDragDisabled},(function(a,n){return r.a.createElement(g.a,Object.assign({className:t.card,innerRef:a.innerRef},a.draggableProps,a.dragHandleProps),r.a.createElement(p.a,null,r.a.createElement(b.a,{style:{color:"#424242"},className:t.userSelect,align:"center",variant:"h3"},r.a.createElement(O.a,{math:"".concat(e.task.content)}))))}))}var C=a(106),j=a(107),k=function(e,t,a,n,r){arguments.length>5&&void 0!==arguments[5]&&arguments[5];var o=[],c=[];e.terms.forEach((function(e,i){var l=S(e.coefficients[0].numer);c=c.concat(l);var s,m=0===i,u=e.coefficients[0]>0;s=1===e.coefficients[0].numer?"":-1===e.coefficients[0].numer?"-":e.coefficients[0].numer;var d=1===e.coefficients[0].denom,h=n?e.coefficients[0].numer+"\\times "+e.variables[0].variable:s+e.variables[0].variable,g=a&&u?"+"+h:h,f=!m&&u?"+"+s+e.variables[0].variable:s+e.variables[0].variable,p=r?g:f,b=d?p:"\\frac{".concat(p,"}{").concat(e.coefficients[0].denom,"}");o.push({id:"".concat(t,"-variable-x").concat(i),content:b,exp:e})}));var i,l=[];if(e.constants.forEach((function(e,n){var c=S(e.numer);l=l.concat(c);var i=0!==o.length&&0===n,s=0===n,m=e.numer>0,u=1===e.denom,d=m?"+"+e.numer:e.numer,h=!m||s&&!i?e.numer:"+"+e.numer,g=a&&r?d:h,f=u?g:"\\frac{".concat(g,"}{").concat(e.denom,"}");o.push({id:"".concat(t,"-num-").concat(n),content:f,exp:e})})),0===e.terms.length)i=l;else if(0===e.constants.length)i=c;else{var s=new Set(c),u=new Set(l);i=new Set(Object(m.a)(s).filter((function(e){return u.has(e)})))}return[o,i]};function S(e){for(var t=j(e),a=[],n=0,r=1;r<=t;r++)(n=t/r)===C(n)&&a.push(r);return a}function N(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),o=a[0],c=a[1],i=y();return Object(n.useEffect)((function(){c(1===k(e.expression,e.side)[0].length)}),[e.expression,e.side]),r.a.createElement(g.a,{className:i.eqSpaceCard},r.a.createElement(v.c,{droppableId:e.dropId,direction:"horizontal"},(function(t,a){return r.a.createElement(f.a,Object.assign({className:i.drop,direction:"row",container:!0,item:!0,justify:"center",alignItems:"center",innerRef:t.innerRef},t.droppableProps),k(e.expression,e.side,e.showSigns,e.unpackEq,e.helper,e.level)[0].map((function(t,a){return r.a.createElement(x,Object.assign({key:t.id,task:t,index:a},e,{isDragDisabled:o}))})),t.placeholder)})))}var M=a(28),q=a.n(M);function I(e){return r.a.createElement(b.a,{id:"equal",variant:"h1"},r.a.createElement("span",{style:{margin:"auto"}},r.a.createElement(O.a,{math:"="})))}var T=a(238),W=a(2),B=a(3),R=a(118),V=a.n(R),F=a(120),H=a.n(F),z=a(70),D=a.n(z),L=a(71),U=a.n(L),A=a(79),P=a(235),$=a(237),Y=a(257),G=a(236),J=a(119),K=a.n(J),Q={success:V.a,warning:K.a,error:H.a,info:D.a},X=Object(E.a)((function(e){return{success:{backgroundColor:A.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:"#fafafa"},warning:{backgroundColor:P.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}));function Z(e){var t=X(),a=e.className,n=e.message,o=e.onClose,c=e.variant,i=Object(W.a)(e,["className","message","onClose","variant"]),l=Q[c];return r.a.createElement(G.a,Object.assign({className:Object(B.a)(t[c],a),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{style:{color:"info"===c?"#000000":""},id:"client-snackbar",className:t.message},r.a.createElement(l,{className:Object(B.a)(t.icon,t.iconVariant)}),n),action:[r.a.createElement($.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},r.a.createElement(U.a,{className:t.icon}))]},i))}function _(e){var t=function(t,a){"clickaway"!==a&&e.onOpenChange(!1)};return r.a.createElement("div",null,r.a.createElement(Y.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:e.open,autoHideDuration:6e3,onClose:t},r.a.createElement(Z,{onClose:t,variant:e.variant,message:e.message})))}var ee=a(248),te=a(249),ae=a(241),ne=a(124),re=a(45),oe=a.n(re),ce=Object(E.a)((function(e){return{root:{maxWidth:150,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}})),ie=[["Change side, change sign","change"],["Balance","balance"]];function le(e){var t=ce(),a=r.a.useState(null),n=Object(u.a)(a,2),o=n[0],c=n[1],i=r.a.useState(0),l=Object(u.a)(i,2),s=l[0],m=l[1];return r.a.createElement("div",{className:t.root},r.a.createElement(T.a,{endIcon:r.a.createElement(oe.a,null),onClick:function(e){c(e.currentTarget)},style:{justifyContent:"left",maxWidth:150,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",color:"white"}},"Method"),r.a.createElement(ne.a,{id:"lock-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){c(null)},style:{paddingTop:0,paddingBottom:0}},ie.map((function(t,a){return r.a.createElement(ae.a,{key:t,selected:a===s,onClick:function(t){return function(t,a){e.onChangeMethod(ie[a][1]),m(a),c(null)}(0,a)}},t[0])}))))}var se=a(239),me=a(243),ue=a(258),de=a(242),he=a(189),ge=Object(E.a)((function(e){return{group:{padding:e.spacing(2)}}}));function fe(e){var t=ge(),a=r.a.useState(null),o=Object(u.a)(a,2),c=o[0],i=o[1],l=Object(n.useState)(!1),s=Object(u.a)(l,2),m=s[0],d=s[1],h=Object(n.useState)(!1),g=Object(u.a)(h,2),f=g[0],p=g[1],b=Object(n.useState)(!1),v=Object(u.a)(b,2),E=v[0],y=v[1],w=Boolean(c),O=w?"simple-popover":void 0;return r.a.createElement("div",null,r.a.createElement(T.a,{style:{color:"white"},"aria-describedby":O,color:"default",onClick:function(e){i(e.currentTarget)}},"Helper Mode"),r.a.createElement(se.a,{id:O,open:w,anchorEl:c,onClose:function(){i(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},TransitionComponent:he.a},r.a.createElement(de.a,{className:t.group},r.a.createElement(me.a,{className:"helper",control:r.a.createElement(ue.a,{className:"helper",checked:m,onChange:function(t){e.onChangeHelper(t),d(t.target.checked)},value:"helper",color:"primary"}),label:"Helper Mode"}),r.a.createElement(me.a,{className:"signs",control:r.a.createElement(ue.a,{checked:f,onChange:function(t){p(t.target.checked),e.onChangeSigns(t)},value:"signs",color:"primary",disabled:!m}),label:"Show Signs"}),r.a.createElement(me.a,{className:"unpack",control:r.a.createElement(ue.a,{checked:E,onChange:function(t){e.onChangeUnpack(t),y(t.target.checked)},value:"unpack",color:"primary",disabled:!m}),label:"Unpack Variable"}))))}var pe=a(34),be=a(244),ve=a(4),Ee=a(256),ye=a(245),we=a(246),Oe=a(247);function xe(e){return r.a.createElement(f.a,{container:!0,direction:"column"},r.a.createElement(f.a,{item:!0},r.a.createElement(b.a,{align:"left",variant:"h6"},e.title),e.info),r.a.createElement(f.a,{item:!0},r.a.createElement(be.a,{style:{marginTop:e.margin?12:0,marginBottom:12},variant:"fullWidth"})))}var Ce=a(75),je=a.n(Ce),ke=a(76),Se=a.n(ke),Ne=a(77),Me=a.n(Ne),qe=[{icon:r.a.createElement(je.a,null),word:"draggable"},{icon:r.a.createElement(oe.a,null),word:"expandable"},{icon:r.a.createElement(Se.a,null),word:"clear output "},{icon:r.a.createElement(Me.a,null),word:"enter"},{icon:r.a.createElement("img",{src:"plus-minus-modal.svg",alt:"sign",style:{maxWidth:20}}),word:"changes sign of number ",xs:12}];var Ie=[{header:"Helper Mode",info:r.a.createElement(b.a,{align:"left"},"Allows you to see hidden operations and signs:",r.a.createElement(b.a,{align:"center"},r.a.createElement(O.a,{math:"2 \\rightarrow +2"}),r.a.createElement("br",null),r.a.createElement(O.a,{math:"3x \\rightarrow 3 \\times x"})))},{header:"Methods",info:r.a.createElement(b.a,{align:"left"},"You can use your preferred method to solve equations: balance or change side, change sign")},{header:"Free Style",info:r.a.createElement(b.a,{align:"left"},"Try out your own Equation. Only ",r.a.createElement(O.a,{math:"x"})," can be used a variable!")},{header:"Equation Changer",margin:!1,info:r.a.createElement(b.a,{align:"left"},"Experiment with the equation. Input a number and an operation and see the equation change.",r.a.createElement("br",null),r.a.createElement(b.a,{variant:"subtitle2"},"Controls:"),r.a.createElement((function(){return r.a.createElement(f.a,{container:!0},qe.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{item:!0,xs:!0},r.a.createElement(be.a,null)),r.a.createElement(f.a,{key:t,item:!0,xs:12,direction:"row",container:!0,justify:"space-between",style:{margin:5}},e.icon,r.a.createElement(b.a,{align:"right"},e.word)))})))}),null))}],Te=Object(ve.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,a=e.classes,n=e.onClose,o=Object(W.a)(e,["children","classes","onClose"]);return r.a.createElement(ye.a,Object.assign({disableTypography:!0,className:a.root},o),r.a.createElement(b.a,{variant:"h6"},t),n?r.a.createElement($.a,{"aria-label":"close",className:a.closeButton,onClick:n},r.a.createElement(U.a,null)):null)})),We=Object(ve.a)((function(e){return{root:{padding:e.spacing(2)}}}))(we.a),Be=Object(ve.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(Oe.a);function Re(){var e=r.a.useState(!1),t=Object(u.a)(e,2),a=t[0],n=t[1],o=function(){n(!1)};return r.a.createElement("div",null,r.a.createElement($.a,{style:{color:"white"},onClick:function(){n(!0)}},r.a.createElement(D.a,null)),r.a.createElement(Ee.a,{maxWidth:"md",onClose:o,"aria-labelledby":"customized-dialog-title",open:a},r.a.createElement(Te,{id:"customized-dialog-title",onClose:o},"Info"),r.a.createElement(We,{dividers:!0},Ie.map((function(e,t){return r.a.createElement(xe,{key:t,title:e.header,info:e.info,margin:e.margin})}))),r.a.createElement(Be,null,r.a.createElement(T.a,{autoFocus:!0,onClick:o,color:"primary"},"Close"))))}var Ve=Object(E.a)({root:{flexGrow:1},menuButton:{marginRight:5},title:{flexGrow:1},list:{width:275},fullList:{width:"auto"}});function Fe(e){var t=Ve();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.root},r.a.createElement(ee.a,{position:"static"},r.a.createElement(te.a,null,r.a.createElement(pe.b,{to:{pathname:"/"},style:{marginRight:"auto"}},r.a.createElement("img",{src:"operations.svg",alt:"logo",style:{width:50,height:50,marginRight:"auto"}})),r.a.createElement(le,{onChangeMethod:e.onChangeMethod}),r.a.createElement("div",{style:{height:"auto",width:20,alignSelf:"stretch",display:"flex"}},r.a.createElement(be.a,{style:{height:"60%",margin:"auto",backgroundColor:"white"},orientation:"vertical"})),r.a.createElement(fe,{onChangeUnpack:e.onChangeUnpack,onChangeSigns:e.onChangeSigns,onChangeHelper:e.onChangeHelper}),r.a.createElement("div",{style:{height:"auto",width:20,alignSelf:"stretch",display:"flex"}},r.a.createElement(be.a,{style:{height:"60%",margin:"auto",backgroundColor:"white"},orientation:"vertical"})),r.a.createElement(Re,null)))))}var He=a(8),ze=a(252),De=a(122),Le=a.n(De),Ue=a(250),Ae=a(251),Pe=a(78);function $e(e){var t={empty:r.a.createElement(Se.a,null),cal:r.a.createElement(Me.a,null)},a=["empty","cal"].includes(e.val)?t[e.val]:r.a.createElement(b.a,{style:{fontSize:"1.5em"}},e.val),n="cal-button-".concat(e.val);return r.a.createElement(f.a,{item:!0,xs:3},r.a.createElement(T.a,{id:n,onClick:function(){return e.cb(e.val)},style:{width:45,height:45,minWidth:30,padding:0,background:function(e){return-1!=="0123456789".indexOf(e)?"transparent":-1!=="+-\xd7\xf7".indexOf(e)?"#e3f2fd":"empty"===e?"#ffcdd2":"#c8e6c9"}(e.val),marginTop:2,marginBottom:2}},a))}var Ye=Object(E.a)((function(e){return{root:{width:250},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:Pe.a[500]}}})),Ge=["7","8","9","\xf7","4","5","6","\xd7","1","2","3","-","empty","0","cal","+"];function Je(e){var t=Ye(),a=Object(n.useState)(""),o=Object(u.a)(a,2),c=o[0],i=o[1],l=Object(n.useState)(""),s=Object(u.a)(l,2),m=s[0],d=s[1],h=Object(n.useState)("+"),v=Object(u.a)(h,2),E=v[0],y=v[1],w=r.a.useState(!1),O=Object(u.a)(w,2),x=O[0],C=O[1],j=function(t){c.length>=5?(e.onMessage("Maximum number of digits reached"),e.onVariant("error"),e.onOpen(!0)):i(c.concat(t))},k=function(e){return j(e)},S=function(e){d(e)},N=function(){return function(){var t="";"\xf7"===m?t="divide":"\xd7"===m?t="multiply":"+"===m?t="add":"-"===m&&(t="subtract"),e.onCalChange(t,E.concat(c)),""===t||""===c?(e.onMessage("Number or sign empty!"),e.onVariant("error"),e.onOpen(!0)):(e.onEnterChange(!0),i(""),d(""),y("+"))}()},M=function(){return i(""),void d("")},q=function(e){return-1!=="0123456789".indexOf(e)?k:-1!=="+-\xd7\xf7".indexOf(e)?S:"empty"===e?M:N};return r.a.createElement(Le.a,null,r.a.createElement(g.a,{className:t.root},r.a.createElement(Ue.a,{disableSpacing:!0},r.a.createElement(je.a,null),r.a.createElement(b.a,{variant:"subtitle1"},"Equation Changer"),r.a.createElement($.a,{className:Object(B.a)(t.expand,Object(He.a)({},t.expandOpen,x)),onClick:function(){C(!x)},"aria-expanded":x,"aria-label":"show more"},r.a.createElement(oe.a,null))),r.a.createElement(Ae.a,{in:x,timeout:"auto",unmountOnExit:!0},r.a.createElement(p.a,null,r.a.createElement(f.a,{container:!0,direction:"column",justify:"center",align:"center"},r.a.createElement(f.a,{container:!0,direction:"row"},r.a.createElement(g.a,{style:{width:"100%"}},r.a.createElement(p.a,null,r.a.createElement(f.a,{container:!0,direction:"row",justify:"flex-start",align:"center"},r.a.createElement(ze.a,{style:{marginRight:20},onClick:function(){y("+"===E?"-":"+")},size:"small",color:"primary","aria-label":"add"},r.a.createElement("img",{src:"plus-minus.svg",alt:"sign",style:{maxWidth:20}})),r.a.createElement(b.a,{className:"number",style:{marginRight:"auto"},align:"left",variant:"h6"},"+"===E?"":"-",c),r.a.createElement(f.a,{item:!0},r.a.createElement(be.a,{orientation:"vertical"})),r.a.createElement(b.a,{className:"sign",style:{width:30},align:"center",variant:"h6"},m))))),r.a.createElement(f.a,{style:{marginTop:4},container:!0,direction:"row"},Ge.map((function(e,t){return r.a.createElement($e,{key:t,val:e,cb:q(e)})}))))))))}var Ke=a(255);function Qe(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),o=a[0],c=a[1];return r.a.createElement(f.a,{container:!0,alignItems:"center",spacing:2},r.a.createElement(f.a,{item:!0},r.a.createElement(Ke.a,{id:"eq",label:"Enter Equation Here",variant:"filled",value:o,onChange:function(e){c(e.target.value)}})),r.a.createElement(f.a,{item:!0},r.a.createElement(T.a,{onClick:function(){return function(){try{var t=q.a.parse(o);if(null==t.rhs)throw new Error("Not an Equation");var a="x";if(t.lhs.terms.length<1&&t.rhs.terms.length<1)throw new Error("No terms");t.lhs.terms.forEach((function(e,t){if(e.variables[0].degree>1)throw new Error("Not a Linear Equation");if(e.variables[0].variable!==a)throw new Error("Cannot have more than one Variable")})),t.rhs.terms.forEach((function(e,t){if(e.variables[0].degree>1)throw new Error("Not a Linear Equation");if(""===a&&(a=e.variables[0].variable),e.variables[0].variable!==a)throw new Error("Cannot have more than one Variable")})),e.onChangeEquation(t),c(""),e.onChangeMessage("Equation Changed"),e.onChangeVariant("success"),e.onChangeOpen(!0)}catch(n){e.onChangeVariant("error"),e.onChangeMessage("Wrong input"),e.onChangeOpen(!0)}}()},variant:"outlined",color:"primary"},"Enter")))}var Xe=a(240),Ze=a(253),_e=a(190);function et(e){return r.a.createElement(_e.a,null,r.a.createElement(g.a,{style:{width:"100%"},variant:"outlined"},r.a.createElement(Ze.a,null,r.a.createElement(p.a,null,r.a.createElement(b.a,{variant:"h5",align:"center"},r.a.createElement(O.a,{math:"".concat(e.step)}))))))}var tt=Object(E.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper,position:"relative",bottom:0,overflow:"auto",maxHeight:150,minHeight:150,overflowY:"scroll"},listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0}}}));function at(e){var t=tt(),a=Object(n.useRef)(null);return Object(n.useEffect)((function(){a.current.scrollTop=a.current.scrollHeight})),r.a.createElement(Xe.a,{dense:!0,className:t.root,ref:a},e.workingOut.map((function(e,t){return r.a.createElement(et,{key:t,step:e,i:t+1})})))}var nt=a(107),rt=a(106);var ot=function(e){var t=Object(s.f)().id,a=Object(n.useState)(q.a.parse(h(t))),o=Object(u.a)(a,2),c=o[0],i=o[1],l=Object(n.useState)(!1),d=Object(u.a)(l,2),g=d[0],p=d[1],b=Object(n.useState)(!1),E=Object(u.a)(b,2),y=E[0],w=E[1],O=Object(n.useState)(!1),x=Object(u.a)(O,2),C=x[0],j=x[1],S=Object(n.useState)([]),M=Object(u.a)(S,2),W=M[0],B=M[1],R=Object(n.useState)(!1),V=Object(u.a)(R,2),F=V[0],H=V[1],z=Object(n.useState)(!1),D=Object(u.a)(z,2),L=D[0],U=D[1],A=Object(n.useState)(""),P=Object(u.a)(A,2),$=P[0],Y=P[1],G=Object(n.useState)("info"),J=Object(u.a)(G,2),K=J[0],Q=J[1],X="/level1"===window.location.pathname||"/level2"===window.location.pathname?"easy":"hard",Z=Object(n.useState)(window.location.pathname),ee=Object(u.a)(Z,1)[0],te=Object(n.useState)("change"),ae=Object(u.a)(te,2),ne=ae[0],re=ae[1],oe=Object(n.useState)(!1),ce=Object(u.a)(oe,2),ie=(ce[0],ce[1]),le=Object(n.useState)(!1),se=Object(u.a)(le,2),me=(se[0],se[1]),ue=Object(n.useState)([]),de=Object(u.a)(ue,2),he=de[0],ge=de[1];function fe(e,t){B([e,t])}function pe(){H(!F)}function be(){U(!L)}function ve(e){Y(e)}function Ee(e){Q(e)}function ye(e){i(e),ge([])}if(Object(n.useEffect)((function(){1===c.lhs.constants.length&&0===c.lhs.terms.length&&1===c.rhs.terms.length&&0===c.rhs.constants.length?1===c.rhs.terms[0].coefficients[0].numer&&c.lhs.constants[0].numer===c.solveFor("x").numer&&c.lhs.constants[0].denom===c.solveFor("x").denom&&(Y("You solved the equation!"),Q("success"),U(!0)):0===c.lhs.constants.length&&1===c.lhs.terms.length&&0===c.rhs.terms.length&&1===c.rhs.constants.length&&1===c.lhs.terms[0].coefficients[0].numer&&c.rhs.constants[0].numer===c.solveFor("x").numer&&c.rhs.constants[0].denom===c.solveFor("x").denom&&(Y("You solved the equation!"),Q("success"),U(!0))}),[c.lhs.constants.length,c.lhs.terms,c.rhs.terms,c.rhs.constants.length,c]),F){var we=null,Oe=null,xe=new Set(k(c.lhs)[1]),Ce=new Set(k(c.rhs)[1]),je=Array.from(new Set(Object(m.a)(xe).filter((function(e){return Ce.has(e)}))));if("divide"!==W[0]&&"multiply"!==W[0]||0!==Number(W[1]))if("easy"!==X||"divide"!==W[0]||je.includes(nt(Number(W[1])))){"multiply"===W[0]?(we=c.lhs.multiply(Number(W[1])),Oe=c.rhs.multiply(Number(W[1])),Y("".concat(W[0]," by ",W[1]))):"add"===W[0]?(we=c.lhs.add(Number(W[1]),!1),Oe=c.rhs.add(Number(W[1]),!1),Y("".concat(W[0]," ",W[1]))):"subtract"===W[0]?(we=c.lhs.subtract(Number(W[1]),!1),Oe=c.rhs.subtract(Number(W[1]),!1),Y("".concat(W[0]," ",W[1]))):"divide"===W[0]&&(we=c.lhs.divide(Number(W[1]),!1),Oe=c.rhs.divide(Number(W[1]),!1),Y("".concat(W[0]," by ",W[1]))),Q("info"),U(!0);var ke=new q.a.Equation(we,Oe);ge([].concat(Object(m.a)(he),[c.toString()])),i(ke),ie(!0),me(!0)}else Y("Cannot ".concat(W[0]," by ",W[1])),Q("warning"),U(!0);else Y("Cannot ".concat(W[0]," by ","0")),Q("error"),U(!0);B([]),H(!1)}function Se(e){for(var t=nt(e),a=[],n=0,r=1;r<=t;r++)(n=t/r)===rt(n)&&a.push(r);return a}function Ne(e,t){var a=Se(e).filter((function(e){return-1!==Se(t).indexOf(e)}));return 0!==a.filter((function(e){return 1!==e})).length}var Me=function(e,t){return!(e.constants.length>1||e.terms.length>1||1===e.constants.length&&(e.constants[0].numer%e.constants[0].denom===0||Ne(e.constants[0].numer,e.constants[0].denom))&&1!==e.constants[0].denom||1===e.terms.length&&(e.terms[0].coefficients[0].numer%e.terms[0].coefficients[0].denom===0||Ne(e.terms[0].coefficients[0].numer,e.terms[0].coefficients[0].denom))&&1!==e.terms[0].coefficients[0].denom)},qe="/level5"===ee?r.a.createElement(Qe,{onChangeEquation:ye,onChangeMessage:ve,onChangeVariant:Ee,onChangeOpen:be}):"",Ie=function(e){var t=null,a=null;"rhs"===e?(a=c.rhs.simplify(),t=c.lhs,0===a.terms.length&&0===a.constants.length&&(a=new q.a.Expression("0")),me(!1)):(a=c.rhs,0===(t=c.lhs.simplify()).terms.length&&0===t.constants.length&&(t=new q.a.Expression("0")),ie(!1));var n=new q.a.Equation(t,a);ge([].concat(Object(m.a)(he),[c.toString()])),i(n)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{style:{height:"100%"},container:!0,direction:"column",justify:"flex-start"},r.a.createElement(f.a,{item:!0,container:!0},r.a.createElement(Fe,{onCalMessage:ve,onCalVariant:Ee,onCalOpen:be,onCalChange:fe,onCalEnterChange:pe,onChangeUnpack:function(e){j(e.target.checked)},onChangeSigns:function(e){w(e.target.checked),console.log(y)},onChangeHelper:function(e){p(e.target.checked)},onChangeMethod:function(e){re(e)}}),r.a.createElement(_,{message:$,variant:K,open:L,onOpenChange:be})),r.a.createElement(f.a,{item:!0,container:!0,justify:"flex-start",alignItems:"flex-start",style:{marginTop:10,marginLeft:10}},qe),r.a.createElement(f.a,{item:!0,container:!0,justify:"center",alignItems:"center",style:{marginTop:20,marginBottom:20}},r.a.createElement(at,{workingOut:he})),r.a.createElement(f.a,{item:!0,container:!0,direction:"row",justify:"center",alignItems:"center",style:{overflow:"hidden"}},r.a.createElement(v.a,{onDragEnd:function(e){document.body.style.color="inherit",document.body.style.backgroundColor="inherit";var t=e.destination,a=e.source;if(t&&(t.droppableId!==a.droppableId||t.index!==a.index)){var n=k(c.lhs,"lhs",y,C,g)[0],r=k(c.rhs,"rhs",y,C,g)[0];if(t.droppableId!==a.droppableId){var o="",l=!1,s=!1;"change"===ne&&(l="eqspace-lhs"===a.droppableId,s="eqspace-rhs"===a.droppableId),o="eqspace-rhs"===t.droppableId?n[a.index]:r[a.index];var u=c.lhs.subtract(o.exp,l),d=c.rhs.subtract(o.exp,s),h=new q.a.Equation(u,d);ge([].concat(Object(m.a)(he),[c.toString()])),i(h)}}}},r.a.createElement(N,{dropId:"eqspace-lhs",expression:c.lhs,side:"lhs",helper:g,showSigns:y,unpackEq:C,level:X}),r.a.createElement(I,null),r.a.createElement(N,{dropId:"eqspace-rhs",expression:c.rhs,side:"rhs",helper:g,showSigns:y,unpackEq:C,level:X}))),r.a.createElement(f.a,{style:{margin:20},container:!0,item:!0,direction:"row",justify:"space-evenly",alignItems:"center"},r.a.createElement(f.a,{item:!0},r.a.createElement(T.a,{disabled:Me(c.lhs),onClick:function(){return Ie("lhs")},variant:"contained",color:"primary"},"Simplify Left")),r.a.createElement(f.a,{item:!0},r.a.createElement(T.a,{disabled:Me(c.rhs),onClick:function(){return Ie("rhs")},variant:"contained",color:"primary"},"Simplify Right"))),r.a.createElement(f.a,{style:{margin:20},direction:"row",container:!0,item:!0,justify:"center",alignItems:"center"},r.a.createElement(T.a,{onClick:function(){return i(q.a.parse(h(e.location.state.name))),ge([]),void U(!1)},variant:"contained",color:"primary"},"Next"))),r.a.createElement("div",{style:{display:"block",position:"fixed",top:200,right:50,height:0,cursor:"move"}},r.a.createElement(Je,{onMessage:ve,onVariant:Ee,onOpen:be,onCalChange:fe,onEnterChange:pe})))},ct=a(58),it=Object(E.a)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap"},image:(t={position:"relative",height:150},Object(He.a)(t,e.breakpoints.down("xs"),{height:100}),Object(He.a)(t,"&:hover, &$focusVisible",{zIndex:1,"& $imageBackdrop":{opacity:.1},"& $imageMarked":{opacity:0},"& $imageTitle":{border:"3px solid currentColor"}}),t),focusVisible:{},imageButton:{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.common.white},imageSrc:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"},imageBackdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:e.palette.common.black,opacity:.3,transition:e.transitions.create("opacity")},imageTitle:{position:"relative",padding:"".concat(e.spacing(2),"px ").concat(e.spacing(3),"px ").concat(e.spacing(1)+4,"px")},imageMarked:{height:3,width:18,backgroundColor:e.palette.common.white,position:"absolute",bottom:5,left:"calc(50% - 9px)",transition:e.transitions.create("opacity")}}}));function lt(e){var t=it();return r.a.createElement("div",{className:t.root},r.a.createElement(ct.a,{focusRipple:!0,key:e.title,className:t.image,focusVisibleClassName:t.focusVisible,style:{width:"100%"}},r.a.createElement("span",{className:t.imageSrc,style:{backgroundImage:"url(".concat(e.image,")")}}),r.a.createElement("span",{className:t.imageBackdrop}),r.a.createElement("span",{className:t.imageButton},r.a.createElement(b.a,{component:"span",variant:"h5",color:"inherit",className:t.imageTitle},e.title,r.a.createElement("span",{className:t.imageMarked})))))}var st=[{title:"Positive",image:"level-1.webp",level:"easy",freeStyle:"false",name:"positive",url:"level1"},{title:"Negative",image:"level-3.webp",level:"easy",freeStyle:"false",name:"negative",url:"level2"},{title:"Fractions",image:"level-2.webp",level:"hard",freeStyle:"false",name:"fractions",url:"level3"},{title:"Negative and Fractions",image:"level-4.webp",level:"hard",freeStyle:"false",name:"negative-fractions",url:"level4"},{title:"Free Style",image:"level-5.webp",level:"hard",freeStyle:"true",name:"negative-fractions",url:"level5"}];var mt=function(e){return r.a.createElement(f.a,{style:{maxWidth:800,margin:"auto"},direction:"column",container:!0,justify:"center"},r.a.createElement(f.a,{direction:"column",container:!0,item:!0,alignItems:"center"},r.a.createElement("img",{src:"logo.svg",alt:"logo",style:{width:250}})),r.a.createElement(f.a,{item:!0},r.a.createElement(be.a,null)),r.a.createElement(f.a,{item:!0,container:!0,style:{marginTop:20},direction:"row",justify:"center",alignItems:"center"},st.map((function(e,t){return r.a.createElement(f.a,{key:t,item:!0,xs:12,sm:6,md:4,style:{padding:8,paddingTop:0}},r.a.createElement(pe.b,{to:{pathname:"/".concat(e.url)}},r.a.createElement(lt,{image:e.image,title:e.title})))}))))},ut=a(123),dt=a(254),ht=Object(ut.a)({palette:{primary:{main:"#1e88e5"}}});c.a.render(r.a.createElement(pe.a,null,r.a.createElement((function(e){return r.a.createElement(dt.a,{theme:ht},r.a.createElement(s.c,{basename:window.location.pathname||""},r.a.createElement(s.a,{exact:!0,path:"/",component:mt}),r.a.createElement(s.a,{exact:!0,path:"/:id",component:ot})))}),null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/solve-x",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/solve-x","/service-worker.js");i?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(t,e)}))}}()},61:function(e,t,a){}},[[140,1,2]]]);
//# sourceMappingURL=main.4636f937.chunk.js.map