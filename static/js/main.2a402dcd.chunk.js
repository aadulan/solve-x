(window["webpackJsonpsolve-x"]=window["webpackJsonpsolve-x"]||[]).push([[0],{140:function(e,t,a){e.exports=a(188)},188:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),i=(a(61),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var s=a(45),m=a(35),u=a(16),d=a(7),g=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},h=function(e){var t=Math.ceil(10*Math.random()),a=Math.ceil(10*Math.random())+1,n=g(2,11),r=t*n,o=g(2,r),c=g(2,n-1);return"/level1"===e?Math.random()>=.5?"".concat(n+c," * x +").concat(o," = ").concat(c," * x + ").concat(r+o):"".concat(n," * x +").concat(o," = ").concat(r+o):"/level2"===e?Math.random()>=.5?"-".concat(n+c," * x +").concat(o," = -").concat(c," * x + ").concat(r+o):"".concat(-n," * x -").concat(o," = ").concat(r-o):"/level3"===e?Math.random()>=.5?"".concat(n+c," * x /").concat(a," +").concat(o," = ").concat(c," * x + ").concat(r+o):"".concat(n," * x/").concat(a," +").concat(o," = ").concat(r+o):"/level4"===e?Math.random()>=.5?"-".concat(n+c," * x/").concat(a," = -").concat(c," * x + ").concat(r):"".concat(-n," * x/").concat(a," -").concat(o," = ").concat(r-o):"/level5"===e?Math.random()>=.5?"-".concat(n+c," * x/").concat(a," = -").concat(c," * x + ").concat(r):"".concat(-n," * x/").concat(a," -").concat(o," = ").concat(r-o):void 0},f=a(231),p=a(234),b=a(233),v=a(126),E=a(46),y=a(228),w=Object(y.a)({card:{border:1,borderStyle:"solid",padding:10,margin:10,"&:hover":{boxShadow:"0px 4px 10px 0px rgba(0, 0, 0, 0.25)"}},userSelect:{userSelect:"none"},eqSpaceCard:{padding:20,maxWidth:1e3,borderStyle:"solid",borderWidth:1,backgroundColor:"#e3f2fd"},drop:{display:"flex",flexDirection:"row"},equal:{borderRadius:"50em",margin:"0.2em",width:100,height:100,fontFamily:'"Fira Code"',display:"flex",userSelect:"none"}}),O=(a(94),a(26)),x=a.n(O);function C(e){var t=w();return r.a.createElement(E.b,{draggableId:e.task.id,index:e.index,isDragDisabled:e.isDragDisabled},(function(a,n){return r.a.createElement(f.a,Object.assign({className:t.card,innerRef:a.innerRef},a.draggableProps,a.dragHandleProps),r.a.createElement(b.a,null,r.a.createElement(v.a,{style:{color:"#424242"},className:t.userSelect,align:"center",variant:"h3"},r.a.createElement(x.a,{math:"".concat(e.task.content)}))))}))}var j=a(106),k=a(107),S=function(e,t,a,n,r){arguments.length>5&&void 0!==arguments[5]&&arguments[5];var o=[],c=[];e.terms.forEach((function(e,i){var l=N(e.coefficients[0].numer);c=c.concat(l);var s,m=0===i,u=e.coefficients[0]>0;s=1===e.coefficients[0].numer?"":-1===e.coefficients[0].numer?"-":e.coefficients[0].numer;var d=1===e.coefficients[0].denom,g=n?e.coefficients[0].numer+"\\times "+e.variables[0].variable:s+e.variables[0].variable,h=a&&u?"+"+g:g,f=!m&&u?"+"+s+e.variables[0].variable:s+e.variables[0].variable,p=r?h:f,b=d?p:"\\frac{".concat(p,"}{").concat(e.coefficients[0].denom,"}");o.push({id:"".concat(t,"-variable-x").concat(i),content:b,exp:e})}));var i,l=[];if(e.constants.forEach((function(e,n){var c=N(e.numer);l=l.concat(c);var i=0!==o.length&&0===n,s=0===n,m=e.numer>0,u=1===e.denom,d=m?"+"+e.numer:e.numer,g=!m||s&&!i?e.numer:"+"+e.numer,h=a&&r?d:g,f=u?h:"\\frac{".concat(h,"}{").concat(e.denom,"}");o.push({id:"".concat(t,"-num-").concat(n),content:f,exp:e})})),0===e.terms.length)i=l;else if(0===e.constants.length)i=c;else{var s=new Set(c),m=new Set(l);i=new Set(Object(u.a)(s).filter((function(e){return m.has(e)})))}return[o,i]};function N(e){for(var t=k(e),a=[],n=0,r=1;r<=t;r++)(n=t/r)===j(n)&&a.push(r);return a}function M(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),o=a[0],c=a[1],i=w();return Object(n.useEffect)((function(){c(1===S(e.expression,e.side)[0].length)}),[e.expression,e.side]),r.a.createElement(f.a,{className:i.eqSpaceCard},r.a.createElement(E.c,{droppableId:e.dropId,direction:"horizontal"},(function(t,a){return r.a.createElement(p.a,Object.assign({className:i.drop,direction:"row",container:!0,item:!0,justify:"center",alignItems:"center",innerRef:t.innerRef},t.droppableProps),S(e.expression,e.side,e.showSigns,e.unpackEq,e.helper,e.level)[0].map((function(t,a){return r.a.createElement(C,Object.assign({key:t.id,task:t,index:a},e,{isDragDisabled:o}))})),t.placeholder)})))}var q=a(28),I=a.n(q);function T(e){return r.a.createElement(v.a,{id:"equal",variant:"h1"},r.a.createElement("span",{style:{margin:"auto"}},r.a.createElement(x.a,{math:"="})))}var W=a(238),B=a(2),R=a(3),V=a(118),F=a.n(V),H=a(120),z=a.n(H),D=a(70),L=a.n(D),U=a(71),A=a.n(U),P=a(79),$=a(235),Y=a(237),G=a(257),J=a(236),K=a(119),Q=a.n(K),X={success:F.a,warning:Q.a,error:z.a,info:L.a},Z=Object(y.a)((function(e){return{success:{backgroundColor:P.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:"#fafafa"},warning:{backgroundColor:$.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}));function _(e){var t=Z(),a=e.className,n=e.message,o=e.onClose,c=e.variant,i=Object(B.a)(e,["className","message","onClose","variant"]),l=X[c];return r.a.createElement(J.a,Object.assign({className:Object(R.a)(t[c],a),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{style:{color:"info"===c?"#000000":""},id:"client-snackbar",className:t.message},r.a.createElement(l,{className:Object(R.a)(t.icon,t.iconVariant)}),n),action:[r.a.createElement(Y.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},r.a.createElement(A.a,{className:t.icon}))]},i))}function ee(e){var t=function(t,a){"clickaway"!==a&&e.onOpenChange(!1)};return r.a.createElement("div",null,r.a.createElement(G.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:e.open,autoHideDuration:6e3,onClose:t},r.a.createElement(_,{onClose:t,variant:e.variant,message:e.message})))}var te=a(248),ae=a(249),ne=a(241),re=a(124),oe=a(44),ce=a.n(oe),ie=Object(y.a)((function(e){return{root:{maxWidth:150,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}})),le=[["Change side, change sign","change"],["Balance","balance"]];function se(e){var t=ie(),a=r.a.useState(null),n=Object(d.a)(a,2),o=n[0],c=n[1],i=r.a.useState(0),l=Object(d.a)(i,2),s=l[0],m=l[1];return r.a.createElement("div",{className:t.root},r.a.createElement(W.a,{endIcon:r.a.createElement(ce.a,null),onClick:function(e){c(e.currentTarget)},style:{justifyContent:"left",maxWidth:150,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",color:"white"}},"Method"),r.a.createElement(re.a,{id:"lock-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){c(null)},style:{paddingTop:0,paddingBottom:0}},le.map((function(t,a){return r.a.createElement(ne.a,{key:t,selected:a===s,onClick:function(t){return function(t,a){e.onChangeMethod(le[a][1]),m(a),c(null)}(0,a)}},t[0])}))))}var me=a(239),ue=a(243),de=a(258),ge=a(242),he=a(189),fe=Object(y.a)((function(e){return{group:{padding:e.spacing(2)}}}));function pe(e){var t=fe(),a=r.a.useState(null),o=Object(d.a)(a,2),c=o[0],i=o[1],l=Object(n.useState)(!1),s=Object(d.a)(l,2),m=s[0],u=s[1],g=Object(n.useState)(!1),h=Object(d.a)(g,2),f=h[0],p=h[1],b=Object(n.useState)(!1),v=Object(d.a)(b,2),E=v[0],y=v[1],w=Boolean(c),O=w?"simple-popover":void 0;return r.a.createElement("div",null,r.a.createElement(W.a,{style:{color:"white"},"aria-describedby":O,color:"default",onClick:function(e){i(e.currentTarget)}},"Helper Mode"),r.a.createElement(me.a,{id:O,open:w,anchorEl:c,onClose:function(){i(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},TransitionComponent:he.a},r.a.createElement(ge.a,{className:t.group},r.a.createElement(ue.a,{className:"helper",control:r.a.createElement(de.a,{className:"helper",checked:m,onChange:function(t){e.onChangeHelper(t),u(t.target.checked)},value:"helper",color:"primary"}),label:"Helper Mode"}),r.a.createElement(ue.a,{className:"signs",control:r.a.createElement(de.a,{checked:f,onChange:function(t){p(t.target.checked),e.onChangeSigns(t)},value:"signs",color:"primary",disabled:!m}),label:"Show Signs"}),r.a.createElement(ue.a,{className:"unpack",control:r.a.createElement(de.a,{checked:E,onChange:function(t){e.onChangeUnpack(t),y(t.target.checked)},value:"unpack",color:"primary",disabled:!m}),label:"Unpack Variable"}))))}var be=a(244),ve=a(4),Ee=a(256),ye=a(245),we=a(246),Oe=a(247);function xe(e){return r.a.createElement(p.a,{container:!0,direction:"column"},r.a.createElement(p.a,{item:!0},r.a.createElement(v.a,{align:"left",variant:"h6"},e.title),e.info),r.a.createElement(p.a,{item:!0},r.a.createElement(be.a,{style:{marginTop:e.margin?12:0,marginBottom:12},variant:"fullWidth"})))}var Ce=a(75),je=a.n(Ce),ke=a(76),Se=a.n(ke),Ne=a(77),Me=a.n(Ne),qe=[{icon:r.a.createElement(je.a,null),word:"draggable"},{icon:r.a.createElement(ce.a,null),word:"expandable"},{icon:r.a.createElement(Se.a,null),word:"clear output "},{icon:r.a.createElement(Me.a,null),word:"enter"},{icon:r.a.createElement("img",{src:"plus-minus-modal.svg",alt:"sign",style:{maxWidth:20}}),word:"changes sign of number ",xs:12}];var Ie=[{header:"Helper Mode",info:r.a.createElement(v.a,{align:"left"},"Allows you to see hidden operations and signs:",r.a.createElement(v.a,{align:"center"},r.a.createElement(x.a,{math:"2 \\rightarrow +2"}),r.a.createElement("br",null),r.a.createElement(x.a,{math:"3x \\rightarrow 3 \\times x"})))},{header:"Methods",info:r.a.createElement(v.a,{align:"left"},"You can use your preferred method to solve equations: balance or change side, change sign")},{header:"Free Style",info:r.a.createElement(v.a,{align:"left"},"Try out your own Equation. Only ",r.a.createElement(x.a,{math:"x"})," can be used a variable!")},{header:"Equation Changer",margin:!1,info:r.a.createElement(v.a,{align:"left"},"Experiment with the equation. Input a number and an operation and see the equation change.",r.a.createElement("br",null),r.a.createElement(v.a,{variant:"subtitle2"},"Controls:"),r.a.createElement((function(){return r.a.createElement(p.a,{container:!0},qe.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{item:!0,xs:!0},r.a.createElement(be.a,null)),r.a.createElement(p.a,{key:t,item:!0,xs:12,direction:"row",container:!0,justify:"space-between",style:{margin:5}},e.icon,r.a.createElement(v.a,{align:"right"},e.word)))})))}),null))}],Te=Object(ve.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,a=e.classes,n=e.onClose,o=Object(B.a)(e,["children","classes","onClose"]);return r.a.createElement(ye.a,Object.assign({disableTypography:!0,className:a.root},o),r.a.createElement(v.a,{variant:"h6"},t),n?r.a.createElement(Y.a,{"aria-label":"close",className:a.closeButton,onClick:n},r.a.createElement(A.a,null)):null)})),We=Object(ve.a)((function(e){return{root:{padding:e.spacing(2)}}}))(we.a),Be=Object(ve.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(Oe.a);function Re(){var e=r.a.useState(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],o=function(){n(!1)};return r.a.createElement("div",null,r.a.createElement(Y.a,{style:{color:"white"},onClick:function(){n(!0)}},r.a.createElement(L.a,null)),r.a.createElement(Ee.a,{maxWidth:"md",onClose:o,"aria-labelledby":"customized-dialog-title",open:a},r.a.createElement(Te,{id:"customized-dialog-title",onClose:o},"Info"),r.a.createElement(We,{dividers:!0},Ie.map((function(e,t){return r.a.createElement(xe,{key:t,title:e.header,info:e.info,margin:e.margin})}))),r.a.createElement(Be,null,r.a.createElement(W.a,{autoFocus:!0,onClick:o,color:"primary"},"Close"))))}var Ve=Object(y.a)({root:{flexGrow:1},menuButton:{marginRight:5},title:{flexGrow:1},list:{width:275},fullList:{width:"auto"}});function Fe(e){var t=Ve();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.root},r.a.createElement(te.a,{position:"static"},r.a.createElement(ae.a,null,r.a.createElement(s.b,{to:{pathname:"/"},style:{marginRight:"auto"}},r.a.createElement("img",{src:"operations.svg",alt:"logo",style:{width:50,height:50,marginRight:"auto"}})),r.a.createElement(se,{onChangeMethod:e.onChangeMethod}),r.a.createElement("div",{style:{height:"auto",width:20,alignSelf:"stretch",display:"flex"}},r.a.createElement(be.a,{style:{height:"60%",margin:"auto",backgroundColor:"white"},orientation:"vertical"})),r.a.createElement(pe,{onChangeUnpack:e.onChangeUnpack,onChangeSigns:e.onChangeSigns,onChangeHelper:e.onChangeHelper}),r.a.createElement("div",{style:{height:"auto",width:20,alignSelf:"stretch",display:"flex"}},r.a.createElement(be.a,{style:{height:"60%",margin:"auto",backgroundColor:"white"},orientation:"vertical"})),r.a.createElement(Re,null)))))}var He=a(8),ze=a(252),De=a(122),Le=a.n(De),Ue=a(250),Ae=a(251),Pe=a(78);function $e(e){var t={empty:r.a.createElement(Se.a,null),cal:r.a.createElement(Me.a,null)},a=["empty","cal"].includes(e.val)?t[e.val]:r.a.createElement(v.a,{style:{fontSize:"1.5em"}},e.val),n="cal-button-".concat(e.val);return r.a.createElement(p.a,{item:!0,xs:3},r.a.createElement(W.a,{id:n,onClick:function(){return e.cb(e.val)},style:{width:45,height:45,minWidth:30,padding:0,background:function(e){return-1!=="0123456789".indexOf(e)?"transparent":-1!=="+-\xd7\xf7".indexOf(e)?"#e3f2fd":"empty"===e?"#ffcdd2":"#c8e6c9"}(e.val),marginTop:2,marginBottom:2}},a))}var Ye=Object(y.a)((function(e){return{root:{width:250},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:Pe.a[500]}}})),Ge=["7","8","9","\xf7","4","5","6","\xd7","1","2","3","-","empty","0","cal","+"];function Je(e){var t=Ye(),a=Object(n.useState)(""),o=Object(d.a)(a,2),c=o[0],i=o[1],l=Object(n.useState)(""),s=Object(d.a)(l,2),m=s[0],u=s[1],g=Object(n.useState)("+"),h=Object(d.a)(g,2),E=h[0],y=h[1],w=r.a.useState(!1),O=Object(d.a)(w,2),x=O[0],C=O[1],j=function(t){c.length>=5?(e.onMessage("Maximum number of digits reached"),e.onVariant("error"),e.onOpen(!0)):i(c.concat(t))},k=function(e){return j(e)},S=function(e){u(e)},N=function(){return function(){var t="";"\xf7"===m?t="divide":"\xd7"===m?t="multiply":"+"===m?t="add":"-"===m&&(t="subtract"),e.onCalChange(t,E.concat(c)),""===t||""===c?(e.onMessage("Number or sign empty!"),e.onVariant("error"),e.onOpen(!0)):(e.onEnterChange(!0),i(""),u(""),y("+"))}()},M=function(){return i(""),void u("")},q=function(e){return-1!=="0123456789".indexOf(e)?k:-1!=="+-\xd7\xf7".indexOf(e)?S:"empty"===e?M:N};return r.a.createElement(Le.a,null,r.a.createElement(f.a,{className:t.root},r.a.createElement(Ue.a,{disableSpacing:!0},r.a.createElement(je.a,null),r.a.createElement(v.a,{variant:"subtitle1"},"Equation Changer"),r.a.createElement(Y.a,{className:Object(R.a)(t.expand,Object(He.a)({},t.expandOpen,x)),onClick:function(){C(!x)},"aria-expanded":x,"aria-label":"show more"},r.a.createElement(ce.a,null))),r.a.createElement(Ae.a,{in:x,timeout:"auto",unmountOnExit:!0},r.a.createElement(b.a,null,r.a.createElement(p.a,{container:!0,direction:"column",justify:"center",align:"center"},r.a.createElement(p.a,{container:!0,direction:"row"},r.a.createElement(f.a,{style:{width:"100%"}},r.a.createElement(b.a,null,r.a.createElement(p.a,{container:!0,direction:"row",justify:"flex-start",align:"center"},r.a.createElement(ze.a,{style:{marginRight:20},onClick:function(){y("+"===E?"-":"+")},size:"small",color:"primary","aria-label":"add"},r.a.createElement("img",{src:"plus-minus.svg",alt:"sign",style:{maxWidth:20}})),r.a.createElement(v.a,{className:"number",style:{marginRight:"auto"},align:"left",variant:"h6"},"+"===E?"":"-",c),r.a.createElement(p.a,{item:!0},r.a.createElement(be.a,{orientation:"vertical"})),r.a.createElement(v.a,{className:"sign",style:{width:30},align:"center",variant:"h6"},m))))),r.a.createElement(p.a,{style:{marginTop:4},container:!0,direction:"row"},Ge.map((function(e,t){return r.a.createElement($e,{key:t,val:e,cb:q(e)})}))))))))}var Ke=a(255);function Qe(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),o=a[0],c=a[1];return r.a.createElement(p.a,{container:!0,alignItems:"center",spacing:2},r.a.createElement(p.a,{item:!0},r.a.createElement(Ke.a,{id:"eq",label:"Enter Equation Here",variant:"filled",value:o,onChange:function(e){c(e.target.value)}})),r.a.createElement(p.a,{item:!0},r.a.createElement(W.a,{onClick:function(){return function(){try{var t=I.a.parse(o);if(null==t.rhs)throw new Error("Not an Equation");var a="x";if(t.lhs.terms.length<1&&t.rhs.terms.length<1)throw new Error("No terms");t.lhs.terms.forEach((function(e,t){if(e.variables[0].degree>1)throw new Error("Not a Linear Equation");if(e.variables[0].variable!==a)throw new Error("Cannot have more than one Variable")})),t.rhs.terms.forEach((function(e,t){if(e.variables[0].degree>1)throw new Error("Not a Linear Equation");if(""===a&&(a=e.variables[0].variable),e.variables[0].variable!==a)throw new Error("Cannot have more than one Variable")})),e.onChangeEquation(t),c(""),e.onChangeMessage("Equation Changed"),e.onChangeVariant("success"),e.onChangeOpen(!0)}catch(n){e.onChangeVariant("error"),e.onChangeMessage("Wrong input"),e.onChangeOpen(!0)}}()},variant:"outlined",color:"primary"},"Enter")))}var Xe=a(240),Ze=a(253),_e=a(190);function et(e){return r.a.createElement(_e.a,null,r.a.createElement(f.a,{style:{width:"100%"},variant:"outlined"},r.a.createElement(Ze.a,null,r.a.createElement(b.a,null,r.a.createElement(v.a,{variant:"h5",align:"center"},r.a.createElement(x.a,{math:"".concat(e.step)}))))))}var tt=Object(y.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper,position:"relative",bottom:0,overflow:"auto",maxHeight:150,minHeight:150,overflowY:"scroll"},listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0}}}));function at(e){var t=tt(),a=Object(n.useRef)(null);return Object(n.useEffect)((function(){a.current.scrollTop=a.current.scrollHeight})),r.a.createElement(Xe.a,{dense:!0,className:t.root,ref:a},e.workingOut.map((function(e,t){return r.a.createElement(et,{key:t,step:e,i:t+1})})))}var nt=a(107),rt=a(106);var ot=function(e){var t=Object(n.useState)(I.a.parse(h(window.location.pathname))),a=Object(d.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(!1),l=Object(d.a)(i,2),s=l[0],m=l[1],g=Object(n.useState)(!1),f=Object(d.a)(g,2),b=f[0],v=f[1],y=Object(n.useState)(!1),w=Object(d.a)(y,2),O=w[0],x=w[1],C=Object(n.useState)([]),j=Object(d.a)(C,2),k=j[0],N=j[1],q=Object(n.useState)(!1),B=Object(d.a)(q,2),R=B[0],V=B[1],F=Object(n.useState)(!1),H=Object(d.a)(F,2),z=H[0],D=H[1],L=Object(n.useState)(""),U=Object(d.a)(L,2),A=U[0],P=U[1],$=Object(n.useState)("info"),Y=Object(d.a)($,2),G=Y[0],J=Y[1],K=Object(n.useState)(e.location.state.level),Q=Object(d.a)(K,1)[0],X=Object(n.useState)(e.location.state.freeStyle),Z=Object(d.a)(X,1)[0],_=Object(n.useState)("change"),te=Object(d.a)(_,2),ae=te[0],ne=te[1],re=Object(n.useState)(!1),oe=Object(d.a)(re,2),ce=(oe[0],oe[1]),ie=Object(n.useState)(!1),le=Object(d.a)(ie,2),se=(le[0],le[1]),me=Object(n.useState)([]),ue=Object(d.a)(me,2),de=ue[0],ge=ue[1];function he(e,t){N([e,t])}function fe(){V(!R)}function pe(){D(!z)}function be(e){P(e)}function ve(e){J(e)}function Ee(e){c(e),ge([])}if(Object(n.useEffect)((function(){1===o.lhs.constants.length&&0===o.lhs.terms.length&&1===o.rhs.terms.length&&0===o.rhs.constants.length?1===o.rhs.terms[0].coefficients[0].numer&&o.lhs.constants[0].numer===o.solveFor("x").numer&&o.lhs.constants[0].denom===o.solveFor("x").denom&&(P("You solved the equation!"),J("success"),D(!0)):0===o.lhs.constants.length&&1===o.lhs.terms.length&&0===o.rhs.terms.length&&1===o.rhs.constants.length&&1===o.lhs.terms[0].coefficients[0].numer&&o.rhs.constants[0].numer===o.solveFor("x").numer&&o.rhs.constants[0].denom===o.solveFor("x").denom&&(P("You solved the equation!"),J("success"),D(!0))}),[o.lhs.constants.length,o.lhs.terms,o.rhs.terms,o.rhs.constants.length,o]),R){var ye=null,we=null,Oe=new Set(S(o.lhs)[1]),xe=new Set(S(o.rhs)[1]),Ce=Array.from(new Set(Object(u.a)(Oe).filter((function(e){return xe.has(e)}))));if("divide"!==k[0]&&"multiply"!==k[0]||0!==Number(k[1]))if("easy"!==Q||"divide"!==k[0]||Ce.includes(nt(Number(k[1])))){"multiply"===k[0]?(ye=o.lhs.multiply(Number(k[1])),we=o.rhs.multiply(Number(k[1])),P("".concat(k[0]," by ",k[1]))):"add"===k[0]?(ye=o.lhs.add(Number(k[1]),!1),we=o.rhs.add(Number(k[1]),!1),P("".concat(k[0]," ",k[1]))):"subtract"===k[0]?(ye=o.lhs.subtract(Number(k[1]),!1),we=o.rhs.subtract(Number(k[1]),!1),P("".concat(k[0]," ",k[1]))):"divide"===k[0]&&(ye=o.lhs.divide(Number(k[1]),!1),we=o.rhs.divide(Number(k[1]),!1),P("".concat(k[0]," by ",k[1]))),J("info"),D(!0);var je=new I.a.Equation(ye,we);ge([].concat(Object(u.a)(de),[o.toString()])),c(je),ce(!0),se(!0)}else P("Cannot ".concat(k[0]," by ",k[1])),J("warning"),D(!0);else P("Cannot ".concat(k[0]," by ","0")),J("error"),D(!0);N([]),V(!1)}function ke(e){for(var t=nt(e),a=[],n=0,r=1;r<=t;r++)(n=t/r)===rt(n)&&a.push(r);return a}function Se(e,t){var a=ke(e).filter((function(e){return-1!==ke(t).indexOf(e)}));return 0!==a.filter((function(e){return 1!==e})).length}var Ne=function(e,t){return!(e.constants.length>1||e.terms.length>1||1===e.constants.length&&(e.constants[0].numer%e.constants[0].denom===0||Se(e.constants[0].numer,e.constants[0].denom))&&1!==e.constants[0].denom||1===e.terms.length&&(e.terms[0].coefficients[0].numer%e.terms[0].coefficients[0].denom===0||Se(e.terms[0].coefficients[0].numer,e.terms[0].coefficients[0].denom))&&1!==e.terms[0].coefficients[0].denom)},Me="true"===Z?r.a.createElement(Qe,{onChangeEquation:Ee,onChangeMessage:be,onChangeVariant:ve,onChangeOpen:pe}):"",qe=function(e){var t=null,a=null;"rhs"===e?(a=o.rhs.simplify(),t=o.lhs,0===a.terms.length&&0===a.constants.length&&(a=new I.a.Expression("0")),se(!1)):(a=o.rhs,0===(t=o.lhs.simplify()).terms.length&&0===t.constants.length&&(t=new I.a.Expression("0")),ce(!1));var n=new I.a.Equation(t,a);ge([].concat(Object(u.a)(de),[o.toString()])),c(n)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{style:{height:"100%"},container:!0,direction:"column",justify:"flex-start"},r.a.createElement(p.a,{item:!0,container:!0},r.a.createElement(Fe,{onCalMessage:be,onCalVariant:ve,onCalOpen:pe,onCalChange:he,onCalEnterChange:fe,onChangeUnpack:function(e){x(e.target.checked)},onChangeSigns:function(e){v(e.target.checked),console.log(b)},onChangeHelper:function(e){m(e.target.checked)},onChangeMethod:function(e){ne(e)}}),r.a.createElement(ee,{message:A,variant:G,open:z,onOpenChange:pe})),r.a.createElement(p.a,{item:!0,container:!0,justify:"flex-start",alignItems:"flex-start",style:{marginTop:10,marginLeft:10}},Me),r.a.createElement(p.a,{item:!0,container:!0,justify:"center",alignItems:"center",style:{marginTop:20,marginBottom:20}},r.a.createElement(at,{workingOut:de})),r.a.createElement(p.a,{item:!0,container:!0,direction:"row",justify:"center",alignItems:"center",style:{overflow:"hidden"}},r.a.createElement(E.a,{onDragEnd:function(e){document.body.style.color="inherit",document.body.style.backgroundColor="inherit";var t=e.destination,a=e.source;if(t&&(t.droppableId!==a.droppableId||t.index!==a.index)){var n=S(o.lhs,"lhs",b,O,s)[0],r=S(o.rhs,"rhs",b,O,s)[0];if(t.droppableId!==a.droppableId){var i="",l=!1,m=!1;"change"===ae&&(l="eqspace-lhs"===a.droppableId,m="eqspace-rhs"===a.droppableId),i="eqspace-rhs"===t.droppableId?n[a.index]:r[a.index];var d=o.lhs.subtract(i.exp,l),g=o.rhs.subtract(i.exp,m),h=new I.a.Equation(d,g);ge([].concat(Object(u.a)(de),[o.toString()])),c(h)}}}},r.a.createElement(M,{dropId:"eqspace-lhs",expression:o.lhs,side:"lhs",helper:s,showSigns:b,unpackEq:O,level:Q}),r.a.createElement(T,null),r.a.createElement(M,{dropId:"eqspace-rhs",expression:o.rhs,side:"rhs",helper:s,showSigns:b,unpackEq:O,level:Q}))),r.a.createElement(p.a,{style:{margin:20},container:!0,item:!0,direction:"row",justify:"space-evenly",alignItems:"center"},r.a.createElement(p.a,{item:!0},r.a.createElement(W.a,{disabled:Ne(o.lhs),onClick:function(){return qe("lhs")},variant:"contained",color:"primary"},"Simplify Left")),r.a.createElement(p.a,{item:!0},r.a.createElement(W.a,{disabled:Ne(o.rhs),onClick:function(){return qe("rhs")},variant:"contained",color:"primary"},"Simplify Right"))),r.a.createElement(p.a,{style:{margin:20},direction:"row",container:!0,item:!0,justify:"center",alignItems:"center"},r.a.createElement(W.a,{onClick:function(){return c(I.a.parse(h(e.location.state.name))),ge([]),void D(!1)},variant:"contained",color:"primary"},"Next"))),r.a.createElement("div",{style:{display:"block",position:"fixed",top:200,right:50,height:0,cursor:"move"}},r.a.createElement(Je,{onMessage:be,onVariant:ve,onOpen:pe,onCalChange:he,onEnterChange:fe})))},ct=a(58),it=Object(y.a)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap"},image:(t={position:"relative",height:150},Object(He.a)(t,e.breakpoints.down("xs"),{height:100}),Object(He.a)(t,"&:hover, &$focusVisible",{zIndex:1,"& $imageBackdrop":{opacity:.1},"& $imageMarked":{opacity:0},"& $imageTitle":{border:"3px solid currentColor"}}),t),focusVisible:{},imageButton:{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.common.white},imageSrc:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"},imageBackdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:e.palette.common.black,opacity:.3,transition:e.transitions.create("opacity")},imageTitle:{position:"relative",padding:"".concat(e.spacing(2),"px ").concat(e.spacing(3),"px ").concat(e.spacing(1)+4,"px")},imageMarked:{height:3,width:18,backgroundColor:e.palette.common.white,position:"absolute",bottom:5,left:"calc(50% - 9px)",transition:e.transitions.create("opacity")}}}));function lt(e){var t=it();return r.a.createElement("div",{className:t.root},r.a.createElement(ct.a,{focusRipple:!0,key:e.title,className:t.image,focusVisibleClassName:t.focusVisible,style:{width:"100%"}},r.a.createElement("span",{className:t.imageSrc,style:{backgroundImage:"url(".concat(e.image,")")}}),r.a.createElement("span",{className:t.imageBackdrop}),r.a.createElement("span",{className:t.imageButton},r.a.createElement(v.a,{component:"span",variant:"h5",color:"inherit",className:t.imageTitle},e.title,r.a.createElement("span",{className:t.imageMarked})))))}var st=[{title:"Positive",image:"level-1.webp",level:"easy",freeStyle:"false",name:"positive",url:"level1"},{title:"Negative",image:"level-3.webp",level:"easy",freeStyle:"false",name:"negative",url:"level2"},{title:"Fractions",image:"level-2.webp",level:"hard",freeStyle:"false",name:"fractions",url:"level3"},{title:"Negative and Fractions",image:"level-4.webp",level:"hard",freeStyle:"false",name:"negative-fractions",url:"level4"},{title:"Free Style",image:"level-5.webp",level:"hard",freeStyle:"true",name:"negative-fractions",url:"level5"}];var mt=function(e){return r.a.createElement(p.a,{style:{maxWidth:800,margin:"auto"},direction:"column",container:!0,justify:"center"},r.a.createElement(p.a,{direction:"column",container:!0,item:!0,alignItems:"center"},r.a.createElement("img",{src:"logo.svg",alt:"logo",style:{width:250}})),r.a.createElement(p.a,{item:!0},r.a.createElement(be.a,null)),r.a.createElement(p.a,{item:!0,container:!0,style:{marginTop:20},direction:"row",justify:"center",alignItems:"center"},st.map((function(e,t){return r.a.createElement(p.a,{key:t,item:!0,xs:12,sm:6,md:4,style:{padding:8,paddingTop:0}},r.a.createElement(s.b,{to:{pathname:"/".concat(e.url),state:{level:e.level,freeStyle:e.freeStyle,name:e.name}}},r.a.createElement(lt,{image:e.image,title:e.title})))}))))},ut=a(123),dt=a(254),gt=Object(ut.a)({palette:{primary:{main:"#1e88e5"}}});c.a.render(r.a.createElement((function(e){return r.a.createElement(dt.a,{theme:gt},r.a.createElement(s.a,{basename:window.location.pathname||""},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:mt}),r.a.createElement(m.a,{exact:!0,path:"/:id",component:ot}))))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/solve-x",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/solve-x","/service-worker.js");i?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(t,e)}))}}()},61:function(e,t,a){}},[[140,1,2]]]);
//# sourceMappingURL=main.2a402dcd.chunk.js.map