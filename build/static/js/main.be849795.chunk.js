(this["webpackJsonpreact-front"]=this["webpackJsonpreact-front"]||[]).push([[0],{226:function(e,t,n){},248:function(e,t){},252:function(e,t){},283:function(e,t){},284:function(e,t){},384:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(36),s=n.n(a),r=n(6),o=n.n(r),l=n(118),j=n(11),u=n(29),d=(n(226),n(83)),b=n.n(d),p=(n(153),n(35)),x=n(74),h=n(217),O=n(389),f=n(392),g=n(400),m=n(77),v=n(403),C=n.p+"static/media/solanaLogo.0af56d5c.png",w=n.p+"static/media/solanaLogoInvert.797fe01a.png",y=n(206),k=n(165),S=n(397),T=n(396),F=n(9),P=function(e){return Object(F.jsx)(F.Fragment,{children:"started"===e.state?Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(S.a,{title:"Coinflip "+e.price+" SOL",visible:e.visible,onCancel:e.onCancel,footer:[Object(F.jsx)(x.a,{onClick:e.onCancel,children:"Back"},"back")],children:Object(F.jsxs)("div",{class:"coinflip-div",children:[Object(F.jsxs)("div",{id:"coin",class:e.result,children:[Object(F.jsx)("div",{class:"side-a",children:Object(F.jsx)("img",{src:w})}),Object(F.jsx)("div",{className:"side-b",children:Object(F.jsx)("img",{src:C})})]}),Object(F.jsxs)("p",{class:"countdownTimer",id:"countdown",children:[" ",Object(F.jsx)(k.a,{date:Date.now()+5e3,intervalDelay:0,precision:0,onComplete:e.coinflipFinish,renderer:function(e){return Object(F.jsx)("div",{children:e.seconds})}})," "]}),Object(F.jsxs)("p",{children:[e.wallet1," ",Object(F.jsx)("br",{})," vs ",Object(F.jsx)("br",{})," ",e.wallet2]})]})})}):"open"===e.state?Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(S.a,{title:"Coinflip "+e.price,visible:e.visible,onCancel:e.onCancel,onOk:e.onJoin,okText:"Join",cancelText:"Cancel",children:[Object(F.jsxs)("div",{class:"coinflip-div",children:[Object(F.jsxs)("div",{id:"coin",className:e.result,children:[Object(F.jsx)("div",{class:"side-a",children:Object(F.jsx)("img",{src:w})}),Object(F.jsx)("div",{className:"side-b",children:Object(F.jsx)("img",{src:C})})]}),Object(F.jsx)("p",{class:"countdownTimer",children:" Not Started "}),Object(F.jsxs)("p",{children:[" Join Against ",e.wallet1," ",Object(F.jsx)("br",{})," for ",e.price," SOL"]})]}),Object(F.jsx)(T.a,{percent:e.transactionPercentage,status:e.transactionError?"exception":"none",size:"small"})]})}):Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(S.a,{title:"Coinflip "+e.price,visible:e.visible,onCancel:e.onCancel,footer:[Object(F.jsx)(x.a,{onClick:e.onCancel,children:"Back"},"back")],children:Object(F.jsxs)("div",{class:"coinflip-div",children:[Object(F.jsxs)("div",{id:"coin",className:e.result+"2",children:[Object(F.jsx)("div",{class:"side-a",children:Object(F.jsx)("img",{src:w})}),Object(F.jsx)("div",{className:"side-b",children:Object(F.jsx)("img",{src:C})})]}),Object(F.jsx)("p",{class:"countdownTimer",children:"Finished "}),Object(F.jsxs)("p",{children:["Winner: ",Object(F.jsx)("br",{})," ","heads"===e.result&&"1"===e.coin||"tails"===e.result&&"2"===e.coin?e.wallet1:e.wallet2]})]})})})})},M=n(398),z=n(394),A=n(395),B=function(e){var t=Object(c.useState)("1"),n=Object(u.a)(t,2),i=n[0],a=n[1],s=Object(c.useState)(1),r=Object(u.a)(s,2),o=r[0],l=r[1],j=Object(c.useState)("Hello World!"),d=Object(u.a)(j,2),b=d[0],p=d[1];return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(S.a,{title:"Coinflip Creation",visible:e.visible,onCancel:e.onCancel,onOk:function(){e.onCreateFlip({price:o,name:b,wallet:null,coin:i})},cancelText:"Cancel",okText:"Create Coinflip",children:Object(F.jsxs)("div",{class:"coinflip-div",children:[Object(F.jsx)("p",{children:"Pick your side"}),Object(F.jsxs)(M.a.Group,{value:i,onChange:function(e){a(e.target.value)},children:[Object(F.jsx)(M.a.Button,{style:{height:"0px",textAlign:"center",transform:"rotateX(180deg)",marginTop:"50px"},value:"1",children:Object(F.jsx)("img",{style:{width:"50px",border:"solid 2px #DC1FFF",borderRadius:"100%",marginTop:"5px",transform:"rotateX(180deg)"},src:C})}),Object(F.jsx)(M.a.Button,{style:{height:"0px",textAlign:"center",transform:"rotateX(180deg)",marginTop:"50px"},value:"2",children:Object(F.jsx)("img",{style:{width:"50px",border:"solid 2px #DC1FFF",borderRadius:"100%",marginTop:"5px",transform:"rotateX(180deg)"},src:w})})]}),Object(F.jsx)("p",{style:{marginTop:"-30px"},children:"Amount to Wager:"}),Object(F.jsx)(z.a,{onChange:function(e){l(e)},defaultValue:o,min:"0.05",step:"0.05",stringMode:!0}),Object(F.jsx)("p",{style:{marginTop:"10px"},children:"Coinflip Name:"}),Object(F.jsx)(A.a,{maxLength:12,style:{width:"125px"},onChange:function(e){p(e.target.value)},value:b}),Object(F.jsx)(T.a,{percent:e.transactionPercentage,status:e.transactionError?"exception":"none",size:"small"})]})})})},I=n(93),N=Object(I.e)("devnet"),E=new I.a(N),D=new I.b("2N8qxv4QAGiYe8m3Z2PmCo2SwQtYqKCmUEQj7WsCXuxp"),L=function(){if("solana"in window){var e=window.solana;if(e.isPhantom)return e}}(),R=function(){var e=Object(j.a)(o.a.mark((function e(t){var n,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L.publicKey){e.next=2;break}return e.abrupt("return");case 2:return(c=(n=new I.d).add.apply(n,Object(p.a)(t))).feePayer=L.publicKey,console.log("Getting recent blockhash"),i=c,e.next=8,E.getRecentBlockhash();case 8:return i.recentBlockhash=e.sent.blockhash,e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",R([I.c.transfer({fromPubkey:L.publicKey,toPubkey:D,lamports:1e9*t})]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(j.a)(o.a.mark((function e(t,n,c,i,a,s){var r,l,j,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=24;break}return e.prev=1,i(50),e.next=5,L.signAndSendTransaction(t);case 5:return r=e.sent,l=r.signature,console.log("Submitted transaction "+l+", awaiting confirmation"),i(75),e.next=11,E.confirmTransaction(l);case 11:"add"===s?n.wallet=null===(j=L.publicKey)||void 0===j?void 0:j.toBase58():"update"===s&&(n.state="started",n.user2.wallet=null===(u=L.publicKey)||void 0===u?void 0:u.toBase58()),c(n),console.log("Transaction "+l+" confirmed"),i(100),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(1),console.warn(e.t0),console.log("Error: "+JSON.stringify(e.t0)),a(!0);case 22:e.next=25;break;case 24:a(!0);case 25:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t,n,c,i,a,s){return e.apply(this,arguments)}}(),K=function(){var e=Object(j.a)(o.a.mark((function e(t,n,c,i,a){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t.price);case 2:s=e.sent,c(25),J(s,t,n,c,i,a);case 5:case"end":return e.stop()}}),e)})));return function(t,n,c,i,a){return e.apply(this,arguments)}}();var G=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(u.a)(s,2),o=r[0],l=r[1],j=Object(c.useState)(!1),d=Object(u.a)(j,2),k=d[0],S=d[1],T=Object(c.useState)(!1),M=Object(u.a)(T,2),z=M[0],A=M[1],I=Object(c.useState)(0),N=Object(u.a)(I,2),E=N[0],D=N[1],L=Object(c.useState)(!1),R=Object(u.a)(L,2),H=R[0],J=R[1],G=function(){n||(a(!0),fetch("https://SolanaCasinoServer.gomez0015.repl.co/getCoinflips").then((function(e){return e.json()})).then((function(e){if(e!=o){e.sort((function(e,t){return parseInt(e.price)<parseInt(t.price)?1:-1}));for(var t=0;t<e.length;t++)0!=o.length&&1==o[t].visible?e[t].visible=!0:e[t].visible=!1;l(Object(p.a)(e)),setTimeout((function(){a(!1)}),1e3)}else setTimeout((function(){a(!1)}),1e3)})).catch((function(){setTimeout((function(){a(!1)}),1e3)})))};i.a.useEffect((function(){G()}),[]),i.a.useEffect((function(){if(z){var e=setInterval(z?G:null,5e3);return function(){clearInterval(e)}}}));var W=function(e){b.a.post("https://SolanaCasinoServer.gomez0015.repl.co/getCoinflipResults",{coinflipData:e}).then((function(e){G()})).catch((function(e){console.log(e)}))},X=function(e){b.a.post("https://SolanaCasinoServer.gomez0015.repl.co/addCoinflip",{name:e.name,price:e.price,coin:e.coin,wallet:e.wallet}).then((function(e){G()})).catch((function(e){console.log(e)}))};return Object(c.useRef)(),Object(F.jsxs)("div",{style:{textAlign:"center"},children:[Object(F.jsx)("div",{style:{textAlign:"right"},children:n?Object(F.jsx)(m.a,{style:{fontSize:"26px",cursor:"pointer",position:"absolute",top:"110px",right:"50px"}}):Object(F.jsx)(v.a,{style:{fontSize:"26px",cursor:"pointer",position:"absolute",top:"110px",right:"50px"},onClick:function(){G()}})}),Object(F.jsx)(x.a,{style:{marginBottom:"25px",marginTop:"-25px"},onClick:function(){S(!0),D(0),J(!1)},children:"Create Coinflip"}),Object(F.jsx)(B,{transactionPercentage:E,transactionError:H,visible:k,onCancel:function(){S(!1)},onCreateFlip:function(e){K(e,X,D,J,"add")}}),Object(F.jsx)("div",{id:"scrollableDiv",style:{height:750,textAlign:"left",overflow:"auto",padding:"0 16px",border:"1px solid rgba(140, 140, 140, 0.35)"},children:Object(F.jsx)(y.a,{dataLength:o.length,next:G,loader:Object(F.jsx)(h.a,{avatar:!0,paragraph:{rows:1},active:!0}),endMessage:Object(F.jsx)(O.a,{plain:!0,children:"Thats all, folks!"}),scrollableTarget:"scrollableDiv",children:Object(F.jsx)(f.b,{dataSource:o,renderItem:function(e){return Object(F.jsxs)(f.b.Item,{children:[Object(F.jsx)(f.b.Item.Meta,{avatar:Object(F.jsx)(g.a,{src:"1"==e.user1.coin?C:w}),title:Object(F.jsx)("a",{href:"#",children:e.user1.name+" - "+e.price+"sol"}),description:e.user1.wallet}),Object(F.jsxs)("div",{children:["none"==e.result||"finished"!=e.state?null:"heads"==e.result?Object(F.jsx)("img",{src:C,style:{width:"25px",marginRight:"5px"}}):Object(F.jsx)("img",{src:w,style:{width:"25px",marginRight:"5px"}}),Object(F.jsx)(x.a,{onClick:function(){D(0),J(!1),e.visible=!0,l(Object(p.a)(o)),A(!0)},children:"open"!=e.state?"Watch":"Join"}),Object(F.jsx)(P,{transactionPercentage:E,transactionError:H,coinflipFinish:function(){setTimeout((function(){A(!0),function(e){b.a.post("https://SolanaCasinoServer.gomez0015.repl.co/endCoinflip",{coinflipData:e}).then((function(e){G()})).catch((function(e){console.log(e)}))}(e)}),2e3)},coin:e.user1.coin,state:e.state,visible:e.visible,price:e.price,wallet1:e.user1.wallet,wallet2:e.user2.wallet,onCancel:function(){e.visible=!1,A(!1),l(Object(p.a)(o))},onJoin:function(){A(!1),K(e,W,D,J,"update")},result:e.result})]})]},e.id)}})})})]})},W=n(393),X=n(94),Q=n(54),Y=n(401),q=n(399);W.a.Meta;var U=function(){return Object(F.jsxs)("div",{style:{textAlign:"center"},children:[Object(F.jsx)(X.a,{gutter:[16,16],children:Object(F.jsx)(Q.a,{span:24,children:Object(F.jsx)(W.a,{title:Object(F.jsxs)("div",{children:[Object(F.jsx)("img",{style:{width:"150px"},src:C,alt:"Logo"}),Object(F.jsx)("h2",{style:{marginBottom:"0px"},children:"Solana Casino"}),Object(F.jsx)("h5",{children:"('The Best Solana Casino')"})]})})})}),Object(F.jsx)(X.a,{gutter:[16,16],style:{marginTop:"25px"},children:Object(F.jsxs)(Q.a,{span:24,children:["  ",Object(F.jsxs)(W.a,{children:[" ",Object(F.jsx)(Y.a,{title:"Active Users",value:112893})," ",Object(F.jsx)(Y.a,{title:"Total Gambled",value:"10,230 SOL"})," ",Object(F.jsx)(q.a,{disabled:!0,defaultValue:4})]})," "]})})]})},V=n(390),Z=function(){return Object(F.jsx)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"15px",height:"15px",viewBox:"0 0 768.000000 768.000000",preserveAspectRatio:"xMidYMid meet",children:Object(F.jsxs)("g",{transform:"translate(0.000000,768.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none",children:[Object(F.jsx)("path",{d:"M3582 7670 c-1248 -92 -2341 -749 -3003 -1807 -96 -153 -228 -412 -297 -583 -460 -1141 -348 -2429 301 -3471 243 -391 584 -762 959 -1043 247 -185 607 -387 883 -495 1140 -447 2412 -332 3446 312 391 243 762 584 1043 959 238 317 448 720 573 1098 79 240 145 554 175 830 18 174 15 605 -6 780 -54 453 -153 811 -331 1200 -259 566 -686 1090 -1193 1468 -550 409 -1193 662 -1877 737 -169 19 -518 27 -673 15z m108 -1385 c501 -59 940 -241 1325 -552 129 -104 330 -311 426 -438 305 -407 479 -882 506 -1387 l6 -118 347 0 c193 0 371 -5 401 -10 116 -22 212 -96 264 -205 41 -84 40 -180 -5 -324 -99 -327 -285 -616 -589 -922 -195 -195 -324 -300 -556 -454 -204 -135 -303 -191 -506 -289 -435 -210 -882 -339 -1308 -377 -172 -15 -618 -6 -756 15 -478 72 -911 257 -1315 559 -157 118 -409 363 -520 507 -233 302 -391 615 -475 945 -80 312 -93 627 -39 955 182 1103 1083 1958 2208 2094 151 19 434 19 586 1z"}),Object(F.jsx)("path",{d:"M1987 4599 c-104 -17 -200 -88 -248 -184 -24 -50 -24 -51 -27 -408 l-3 -358 27 -60 c34 -76 113 -150 189 -178 165 -62 350 14 426 174 l29 60 0 346 c0 278 -3 355 -15 388 -54 154 -213 247 -378 220z"}),Object(F.jsx)("path",{d:"M3172 4599 c-104 -17 -198 -87 -248 -186 l-29 -58 0 -355 0 -355 33 -67 c36 -73 86 -123 161 -160 66 -33 215 -33 282 0 74 36 125 87 161 160 l33 67 0 355 0 355 -28 56 c-66 136 -214 212 -365 188z"})]})})},_=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],i=t[1];Object(c.useEffect)((function(){"solana"in window&&i(window.solana)}),[]);var a=Object(c.useState)(!1),s=Object(u.a)(a,2),r=s[0],o=s[1];Object(c.useEffect)((function(){null===n||void 0===n||n.on("connect",(function(){o(!0)})),null===n||void 0===n||n.on("disconnect",(function(){o(!1)}))}),[n]);return n?r?Object(F.jsx)(x.a,{icon:Object(F.jsx)(V.a,{component:Z}),onClick:function(){null===n||void 0===n||n.disconnect()},danger:!0,children:"Disconnect from Phantom"}):Object(F.jsx)(x.a,{icon:Object(F.jsx)(V.a,{component:Z}),onClick:function(){null===n||void 0===n||n.connect()},children:"Connect to Phantom"}):Object(F.jsx)("a",{href:"https://phantom.app/",target:"_blank",children:"Get Phantom"})},$=n(391),ee=n(402),te=n(404),ne=n(405),ce=$.a.Header,ie=$.a.Content,ae=$.a.Footer,se=$.a.Sider;ee.a.SubMenu;var re=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)("Home"),r=Object(u.a)(s,2),d=r[0],b=r[1];function p(e){return x.apply(this,arguments)}function x(){return(x=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("currentPage",t),b(t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return i.a.useEffect((function(){var e=localStorage.getItem("currentPage")||"Home";b(e)}),[]),Object(F.jsxs)($.a,{children:[Object(F.jsxs)(ce,{className:"header",children:[Object(F.jsx)("img",{style:Object(l.a)({width:"50px",display:"inline",position:"relative",bottom:"0px"},"display","inline"),src:C,alt:"Logo"}),Object(F.jsx)(ee.a,{style:{display:"inline",float:"right"},theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:Object(F.jsx)(_,{})})]}),Object(F.jsxs)($.a,{style:{minHeight:"100vh"},children:[Object(F.jsxs)(se,{collapsible:!0,collapsed:n,onCollapse:function(){a(!n)},children:[Object(F.jsx)("div",{className:"logo"}),Object(F.jsxs)(ee.a,{theme:"dark",defaultSelectedKeys:"CoinflipMenu"==d?["2"]:["1"],mode:"inline",children:[Object(F.jsx)(ee.a.Item,{style:{marginTop:"0px"},icon:Object(F.jsx)(te.a,{}),onClick:function(){return p("Home")},children:"Home"},"1"),Object(F.jsx)(ee.a.Item,{icon:Object(F.jsx)(ne.a,{}),onClick:function(){return p("CoinflipMenu")},children:"1v1 Coinflip"},"2")]})]}),Object(F.jsxs)($.a,{className:"site-layout",children:[Object(F.jsx)(ie,{style:{margin:"0 16px"},children:Object(F.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:"CoinflipMenu"==d?Object(F.jsx)(G,{}):Object(F.jsx)(U,{})})}),Object(F.jsx)(ae,{style:{textAlign:"center"},children:"@RaxoCoding"})]})]})]})};s.a.render(Object(F.jsx)(i.a.StrictMode,{children:Object(F.jsx)(re,{})}),document.getElementById("root"))}},[[384,1,2]]]);
//# sourceMappingURL=main.be849795.chunk.js.map