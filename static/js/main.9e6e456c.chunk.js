(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(e,t,a){e.exports=a.p+"static/media/0.73476783.jpg"},171:function(e,t,a){e.exports=a.p+"static/media/shards-dashboards-logo.161c7399.svg"},175:function(e,t,a){},177:function(e,t,a){},182:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),s=a.n(r),c=a(191),i=a(187),o=a(190),m=a(1),u=a(3),d=a.n(u),h=function(){return l.a.createElement(m.n,{className:"main-navbar__search w-100 d-none d-md-flex d-lg-flex"},l.a.createElement(m.s,{seamless:!0,className:"ml-3"},l.a.createElement(m.t,{type:"prepend"},l.a.createElement(m.u,null,l.a.createElement("i",{className:"material-icons"},"search"))),l.a.createElement(m.q,{className:"navbar-search",placeholder:"Search for something..."})))},b=a(8),p=a(9),g=a(10),f=a(6),v=a(11),E=a(7),y=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).state={visible:!1},a.toggleNotifications=a.toggleNotifications.bind(Object(E.a)(Object(E.a)(a))),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"toggleNotifications",value:function(){this.setState({visible:!this.state.visible})}},{key:"render",value:function(){return l.a.createElement(m.w,{className:"border-right dropdown notifications"},l.a.createElement(m.x,{className:"nav-link-icon text-center",onClick:this.toggleNotifications},l.a.createElement("div",{className:"nav-link-icon__wrapper"},l.a.createElement("i",{className:"material-icons"},"\ue7f4"),l.a.createElement(m.a,{pill:!0,theme:"danger"},"2"))),l.a.createElement(m.g,{open:this.state.visible,className:"dropdown-menu dropdown-menu-small"},l.a.createElement(m.k,null,l.a.createElement("div",{className:"notification__icon-wrapper"},l.a.createElement("div",{className:"notification__icon"},l.a.createElement("i",{className:"material-icons"},"\ue6e1"))),l.a.createElement("div",{className:"notification__content"},l.a.createElement("span",{className:"notification__category"},"Analytics"),l.a.createElement("p",null,"Your website\u2019s active users count increased by"," ",l.a.createElement("span",{className:"text-success text-semibold"},"28%")," in the last week. Great job!"))),l.a.createElement(m.k,null,l.a.createElement("div",{className:"notification__icon-wrapper"},l.a.createElement("div",{className:"notification__icon"},l.a.createElement("i",{className:"material-icons"},"\ue8d1"))),l.a.createElement("div",{className:"notification__content"},l.a.createElement("span",{className:"notification__category"},"Sales"),l.a.createElement("p",null,"Last week your store\u2019s sales count decreased by"," ",l.a.createElement("span",{className:"text-danger text-semibold"},"5.52%"),". It could have been worse!"))),l.a.createElement(m.k,{className:"notification__all text-center"},"View all Notifications")))}}]),t}(l.a.Component),k=a(168),j=a(14),O=a(67),N=a.n(O),C=function(){function e(){Object(b.a)(this,e);this.domain=window.location.href.includes("localhost")?"https://sartain-studios-api.com:10101/":"https://sartain-studios-api.com:10100/",this.fetch=this.fetch.bind(this),this.login=this.login.bind(this),this.getProfile=this.getProfile.bind(this)}return Object(p.a)(e,[{key:"login",value:function(e,t){var a=this;return this.fetch("".concat(this.domain,"/login"),{method:"POST",body:JSON.stringify({username:e,password:t})}).then(function(e){return a.setToken(e),Promise.resolve(e)})}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return N()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"setToken",value:function(e){localStorage.setItem("id_token",e)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"logout",value:function(){localStorage.removeItem("id_token")}},{key:"getProfile",value:function(){return N()(this.getToken())}},{key:"fetch",value:function(e){function t(t,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){var a={Accept:"application/json","Content-Type":"application/json"};return this.loggedIn()&&(a.Authorization="Bearer "+this.getToken()),fetch(e,Object(j.a)({headers:a},t)).then(this._checkStatus).then(function(e){return e.json()})})},{key:"_checkStatus",value:function(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}}]),e}(),w=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).state={visible:!1},a.toggleUserActions=a.toggleUserActions.bind(Object(E.a)(Object(E.a)(a))),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"toggleUserActions",value:function(){this.setState({visible:!this.state.visible})}},{key:"render",value:function(){var e=new C;return l.a.createElement(m.w,{tag:m.j,caret:!0,toggle:this.toggleUserActions},l.a.createElement(m.m,{caret:!0,tag:m.x,className:"text-nowrap px-3"},l.a.createElement("img",{className:"user-avatar rounded-circle mr-2",src:a(167),alt:"User Avatar"})," ",l.a.createElement("span",{className:"d-none d-md-inline-block"},"Sierra Brooks")),l.a.createElement(m.g,{tag:m.l,right:!0,small:!0,open:this.state.visible},l.a.createElement(m.k,{tag:k.a,to:"user-profile"},l.a.createElement("i",{className:"material-icons"},"\ue7fd")," Account"),l.a.createElement(m.k,{tag:k.a,to:"edit-user-profile"},l.a.createElement("i",{className:"material-icons"},"\ue8b8")," Settings"),l.a.createElement(m.k,{tag:k.a,to:"file-manager-list"},l.a.createElement("i",{className:"material-icons"},"\ue2c7")," Files"),l.a.createElement(m.k,{tag:k.a,to:"transaction-history"},l.a.createElement("i",{className:"material-icons"},"\ue896")," Transactions"),l.a.createElement(m.k,{divider:!0}),l.a.createElement(m.k,{tag:k.a,to:"/",className:"text-danger",onClick:e.logout},l.a.createElement("i",{className:"material-icons text-danger"},"\ue879")," Logout")))}}]),t}(l.a.Component),x=function(){return l.a.createElement(m.v,{navbar:!0,className:"border-left flex-row"},l.a.createElement(y,null),l.a.createElement(w,null))},S="CHANGE",T="TOGGLE_SIDEBAR",_=new(a(82).Dispatcher),D=a(83),A={menuVisible:!1,navItems:[{title:"Dashboard",to:"/dashboard-overview",htmlBefore:'<i class="material-icons">table_chart</i>'},{title:"Stock Overview",to:"/stock-overview",htmlBefore:'<i class="material-icons">vertical_split</i>'},{title:"Transactions",to:"/transactions-list",htmlBefore:'<i class="material-icons">view_module</i>'}]},L=new(function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(g.a)(this,Object(f.a)(t).call(this))).registerToActions=e.registerToActions.bind(Object(E.a)(Object(E.a)(e))),e.toggleSidebar=e.toggleSidebar.bind(Object(E.a)(Object(E.a)(e))),_.register(e.registerToActions.bind(Object(E.a)(Object(E.a)(e)))),e}return Object(v.a)(t,e),Object(p.a)(t,[{key:"registerToActions",value:function(e){var t=e.actionType;e.payload;switch(t){case T:this.toggleSidebar()}}},{key:"toggleSidebar",value:function(){A.menuVisible=!A.menuVisible,this.emit(S)}},{key:"getMenuState",value:function(){return A.menuVisible}},{key:"getSidebarItems",value:function(){return A.navItems}},{key:"addChangeListener",value:function(e){this.on(S,e)}},{key:"removeChangeListener",value:function(e){this.removeListener(S,e)}}]),t}(D.EventEmitter)),I=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(E.a)(Object(E.a)(a))),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"handleClick",value:function(){_.dispatch({actionType:T})}},{key:"render",value:function(){return l.a.createElement("nav",{className:"nav"},l.a.createElement("a",{href:"#",onClick:this.handleClick,className:"nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-inline d-lg-none text-center"},l.a.createElement("i",{className:"material-icons"},"\ue5d2")))}}]),t}(l.a.Component),P=function(e){e.layout;var t=e.stickyTop,a=d()("main-navbar","bg-white",t&&"sticky-top");return l.a.createElement("div",{className:a},l.a.createElement(m.h,{className:"p-0"},l.a.createElement(m.y,{type:"light",className:"align-items-stretch flex-md-nowrap p-0"},l.a.createElement(h,null),l.a.createElement(x,null),l.a.createElement(I,null))))};P.defaultProps={stickyTop:!0};var W=P,M=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).handleToggleSidebar=a.handleToggleSidebar.bind(Object(E.a)(Object(E.a)(a))),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"handleToggleSidebar",value:function(){_.dispatch({actionType:T})}},{key:"render",value:function(){var e=this.props.hideLogoText;return l.a.createElement("div",{className:"main-navbar"},l.a.createElement(m.y,{className:"align-items-stretch bg-white flex-md-nowrap border-bottom p-0",type:"light"},l.a.createElement(m.z,{className:"w-100 mr-0",href:"#",style:{lineHeight:"25px"}},l.a.createElement("div",{className:"d-table m-auto"},l.a.createElement("img",{id:"main-logo",className:"d-inline-block align-top mr-1",style:{maxWidth:"25px"},src:a(171),alt:"Investment Tracker Dashboard"}),!e&&l.a.createElement("span",{className:"d-none d-md-inline ml-1"},"Investment Tracker"))),l.a.createElement("a",{className:"toggle-sidebar d-sm-inline d-md-none d-lg-none",onClick:this.handleToggleSidebar},l.a.createElement("i",{className:"material-icons"},"\ue5c4"))))}}]),t}(l.a.Component);M.defaultProps={hideLogoText:!1};var R=M,F=function(){return l.a.createElement(m.n,{className:"main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none",style:{display:"flex",minHeight:"45px"}},l.a.createElement(m.s,{seamless:!0,className:"ml-3"},l.a.createElement(m.t,{type:"prepend"},l.a.createElement(m.u,null,l.a.createElement("i",{className:"material-icons"},"search")),l.a.createElement(m.q,{className:"navbar-search",placeholder:"Search for something...","aria-label":"Search"}))))},B=a(189),V=function(e){var t=e.item;return l.a.createElement(m.w,null,l.a.createElement(m.x,{tag:B.a,to:t.to},t.htmlBefore&&l.a.createElement("div",{className:"d-inline-block item-icon-wrapper",dangerouslySetInnerHTML:{__html:t.htmlBefore}}),t.title&&l.a.createElement("span",null,t.title),t.htmlAfter&&l.a.createElement("div",{className:"d-inline-block item-icon-wrapper",dangerouslySetInnerHTML:{__html:t.htmlAfter}})))},U=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).state={navItems:L.getSidebarItems()},a.onChange=a.onChange.bind(Object(E.a)(Object(E.a)(a))),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){L.addChangeListener(this.onChange)}},{key:"componentWillUnmount",value:function(){L.removeChangeListener(this.onChange)}},{key:"onChange",value:function(){this.setState(Object(j.a)({},this.state,{navItems:L.getSidebarItems()}))}},{key:"render",value:function(){var e=this.state.navItems;return l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement(m.v,{className:"nav--no-borders flex-column"},e.map(function(e,t){return l.a.createElement(V,{key:t,item:e})})))}}]),t}(l.a.Component),q=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).state={menuVisible:!1,sidebarNavItems:L.getSidebarItems()},a.onChange=a.onChange.bind(Object(E.a)(Object(E.a)(a))),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){L.addChangeListener(this.onChange)}},{key:"componentWillUnmount",value:function(){L.removeChangeListener(this.onChange)}},{key:"onChange",value:function(){this.setState(Object(j.a)({},this.state,{menuVisible:L.getMenuState(),sidebarNavItems:L.getSidebarItems()}))}},{key:"render",value:function(){var e=d()("main-sidebar","px-0","col-12",this.state.menuVisible&&"open");return l.a.createElement(m.f,{tag:"aside",className:e,lg:{size:2},md:{size:3}},l.a.createElement(R,{hideLogoText:this.props.hideLogoText}),l.a.createElement(F,null),l.a.createElement(U,null))}}]),t}(l.a.Component);q.defaultProps={hideLogoText:!1};var z=q,H=function(e){var t=e.contained,a=e.menuItems,n=e.copyright;return l.a.createElement("footer",{className:"main-footer d-flex p-2 px-3 bg-white border-top"},l.a.createElement(m.h,{fluid:t},l.a.createElement(m.A,null,l.a.createElement(m.v,null,a.map(function(e,t){return l.a.createElement(m.w,{key:t},l.a.createElement(m.x,{tag:k.a,to:e.to},e.title))})),l.a.createElement("span",{className:"copyright ml-auto my-auto mr-2"},n))))};H.defaultProps={contained:!1,copyright:"Sartain Studios",menuItems:[{title:"Home",to:"#"},{title:"Services",to:"#"},{title:"About",to:"#"},{title:"Products",to:"#"}]};var G=H,J=function(e){var t=e.children,a=e.noNavbar,n=e.noFooter;return l.a.createElement(m.h,{fluid:!0},l.a.createElement(m.A,null,l.a.createElement(z,null),l.a.createElement(m.f,{className:"main-content p-0",lg:{size:10,offset:2},md:{size:9,offset:3},sm:"12",tag:"main"},!a&&l.a.createElement(W,null),t,!n&&l.a.createElement(G,null))))};J.defaultProps={noNavbar:!1,noFooter:!1};var $=J,K=function(e){var t=e.children;e.noNavbar,e.noFooter;return l.a.createElement("div",null,t)};K.defaultProps={noNavbar:!1,noFooter:!1};var X=K,Y=a(85),Q=function(e){var t=e.title,a=e.subtitle,n=e.className,r=Object(Y.a)(e,["title","subtitle","className"]),s=d()(n,"text-center","text-md-left","mb-sm-0");return l.a.createElement(m.f,Object.assign({xs:"12",sm:"4",className:s},r),l.a.createElement("span",{className:"text-uppercase page-subtitle"},a),l.a.createElement("h3",{className:"page-title"},t))},Z=a(84),ee=a(36),te=a.n(ee),ae=a(28),ne=a.n(ae);ne.a.defaults.LineWithLine=ne.a.defaults.line,ne.a.controllers.LineWithLine=ne.a.controllers.line.extend({draw:function(e){if(ne.a.controllers.line.prototype.draw.call(this,e),this.chart.tooltip._active&&this.chart.tooltip._active.length){var t=this.chart.tooltip._active[0],a=this.chart.ctx,n=t.tooltipPosition().x,l=this.chart.scales["y-axis-0"].top,r=this.chart.scales["y-axis-0"].bottom;a.save(),a.beginPath(),a.moveTo(n,l),a.lineTo(n,r),a.lineWidth=.5,a.strokeStyle="#ddd",a.stroke(),a.restore()}}});var le=ne.a,re=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).canvasRef=l.a.createRef(),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(j.a)({},{maintainAspectRatio:!0,responsive:!0,legend:{display:!1},tooltips:{enabled:!1,custom:!1},elements:{point:{radius:0},line:{tension:.33}},scales:{xAxes:[{gridLines:!1,ticks:{display:!1}}],yAxes:[{gridLines:!1,scaleLabel:!1,ticks:{display:!1,isplay:!1,suggestedMax:Math.max.apply(Math,Object(Z.a)(this.props.chartData[0].data))+1}}]}},this.props.chartOptions),t=Object(j.a)({},{type:"line",data:Object(j.a)({},{labels:this.props.chartLabels},{datasets:this.props.chartData}),options:e},this.props.chartConfig);new le(this.canvasRef.current,t)}},{key:"render",value:function(){var e=this.props,t=e.variation,a=e.label,n=e.value,r=e.percentage,s=e.increase,c=d()("stats-small",t&&"stats-small--".concat(t)),i=d()("1"===t?"p-0 d-flex":"px-0 pb-0"),o=d()("d-flex","1"===t?"flex-column m-auto":"px-3"),u=d()("stats-small__data","1"===t&&"text-center"),h=d()("stats-small__label","text-uppercase","1"!==t&&"mb-1"),b=d()("stats-small__value","count","1"===t?"my-3":"m-0"),p=d()("stats-small__data","1"!==t&&"text-right align-items-center"),g=d()("stats-small__percentage","stats-small__percentage--".concat(s?"increase":"decrease")),f="1"===t?120:60;return l.a.createElement(m.c,{small:!0,className:c},l.a.createElement(m.d,{className:i},l.a.createElement("div",{className:o},l.a.createElement("div",{className:u},l.a.createElement("span",{className:h},a),l.a.createElement("h6",{className:b},n)),l.a.createElement("div",{className:p},l.a.createElement("span",{className:g},r))),l.a.createElement("canvas",{height:f,ref:this.canvasRef,className:"stats-small-".concat(te()())})))}}]),t}(l.a.Component);re.defaultProps={increase:!0,percentage:0,value:0,label:"Label",chartOptions:Object.create(null),chartConfig:Object.create(null),chartData:[],chartLabels:[]};var se=re,ce=function(e){var t=e.smallStats;return l.a.createElement(m.h,{fluid:!0,className:"main-content-container px-4"},l.a.createElement(m.A,{noGutters:!0,className:"page-header py-4"},l.a.createElement(Q,{title:"Overview",subtitle:"Dashboard",className:"text-sm-left mb-3"})),l.a.createElement(m.A,null,t.map(function(e,t){return l.a.createElement(m.f,Object.assign({className:"col-lg mb-4",key:t},e.attrs),l.a.createElement(se,{id:"small-stats-".concat(t),variation:"1",chartData:e.datasets,chartLabels:e.chartLabels,label:e.label,value:e.value,percentage:e.percentage,increase:e.increase,decrease:e.decrease}))})))};ce.defaultProps={smallStats:[{label:"Posts",value:"2,390",percentage:"4.7%",increase:!0,chartLabels:[null,null,null,null,null,null,null],attrs:{md:"6",sm:"6"},datasets:[{label:"Today",fill:"start",borderWidth:1.5,backgroundColor:"rgba(0, 184, 216, 0.1)",borderColor:"rgb(0, 184, 216)",data:[1,2,1,3,5,4,7]}]},{label:"Pages",value:"182",percentage:"12.4",increase:!0,chartLabels:[null,null,null,null,null,null,null],attrs:{md:"6",sm:"6"},datasets:[{label:"Today",fill:"start",borderWidth:1.5,backgroundColor:"rgba(23,198,113,0.1)",borderColor:"rgb(23,198,113)",data:[1,2,3,3,3,4,4]}]},{label:"Comments",value:"8,147",percentage:"3.8%",increase:!1,decrease:!0,chartLabels:[null,null,null,null,null,null,null],attrs:{md:"4",sm:"6"},datasets:[{label:"Today",fill:"start",borderWidth:1.5,backgroundColor:"rgba(255,180,0,0.1)",borderColor:"rgb(255,180,0)",data:[2,3,3,3,4,3,3]}]},{label:"New Customers",value:"29",percentage:"2.71%",increase:!1,decrease:!0,chartLabels:[null,null,null,null,null,null,null],attrs:{md:"4",sm:"6"},datasets:[{label:"Today",fill:"start",borderWidth:1.5,backgroundColor:"rgba(255,65,105,0.1)",borderColor:"rgb(255,65,105)",data:[1,7,1,3,1,4,8]}]},{label:"Subscribers",value:"17,281",percentage:"2.4%",increase:!1,decrease:!0,chartLabels:[null,null,null,null,null,null,null],attrs:{md:"4",sm:"6"},datasets:[{label:"Today",fill:"start",borderWidth:1.5,backgroundColor:"rgb(0,123,255,0.1)",borderColor:"rgb(0,123,255)",data:[3,2,3,2,4,5,4]}]}]};var ie=ce,oe=a(52),me=new C,ue=new(function(e){function t(e){return Object(b.a)(this,t),Object(g.a)(this,Object(f.a)(t).call(this,e))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"getData",value:function(e){return Object(oe.a)(Object(f.a)(t.prototype),"getData",this).call(this,e)}},{key:"postData",value:function(e,a){return Object(oe.a)(Object(f.a)(t.prototype),"postData",this).call(this,e,a)}},{key:"deleteData",value:function(e,a){return Object(oe.a)(Object(f.a)(t.prototype),"deleteData",this).call(this,e,a)}},{key:"render",value:function(){return n.createElement("p",null,"AccessAPIWrapper")}}]),t}(function(e){function t(e){var a;Object(b.a)(this,t),a=Object(g.a)(this,Object(f.a)(t).call(this,e));return console.log(window.location.href.includes("localhost")),a.state={url:window.location.href.includes("localhost")?"https://sartain-studios-api.com:10101/":"https://sartain-studios-api.com:10100/"},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"getData",value:function(e){var t=this.state.url+e,a={Authorization:"Bearer "+me.getToken()};return new Promise(function(e){fetch(t,{headers:a}).then(function(e){return e.json()}).then(function(t){return e(t)},function(t){return e(t)})})}},{key:"postData",value:function(e,t){var a=this.state.url+e;return new Promise(function(e){fetch(a,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(t){return console.log(t),alert(t.error),e(t)},function(t){return alert(t),e(t)})})}},{key:"deleteData",value:function(e,t){var a=this.state.url+e;return new Promise(function(e){fetch(a+t,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(a){return e("Deleted: "+t)},function(a){return e("Failed to delete: "+t+" error: "+a)})})}},{key:"render",value:function(){return n.createElement("p",null,"AccessFirebase")}}]),t}(n.Component))),de=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).state={transactions:[],headers:["Date","Type","Ticker","X","Price","Total"],title:"All Transactions",isLoaded:!1},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this;ue.getData("Transaction").then(function(t){e.setState({transactions:t,isLoaded:!0})})}},{key:"generateHeaders",value:function(){return this.state.headers.map(function(e){return l.a.createElement("th",{scope:"col",className:"border-0"},e)})}},{key:"generateRows",value:function(){var e=this;return this.state.transactions.map(function(t,a){return l.a.createElement("tr",null,l.a.createElement("td",null,e.formatDate(t.date)),l.a.createElement("td",null,t.type),l.a.createElement("td",null,t.ticker),l.a.createElement("td",null,t.quantity),l.a.createElement("td",null,"$",t.price),l.a.createElement("td",null,"$",t.total))})}},{key:"formatDate",value:function(e){var t=e.substring(0,4);return e.substring(5,7)+"/"+e.substring(8,10)+"/"+t}},{key:"render",value:function(){return this.state.isLoaded?l.a.createElement(m.c,{small:!0,className:"mb-4"},l.a.createElement(m.e,{className:"border-bottom"},l.a.createElement("h6",{className:"m-0"},this.state.title)),l.a.createElement(m.d,{className:"p-0 pb-3"},l.a.createElement("table",{className:"table mb-0"},l.a.createElement("thead",{className:"bg-light"},l.a.createElement("tr",null,this.generateHeaders())),l.a.createElement("tbody",null,this.generateRows())))):l.a.createElement("p",null,"Not yet loaded")}}]),t}(l.a.Component),he=function(){return l.a.createElement(m.h,{fluid:!0,className:"main-content-container px-4"},l.a.createElement(m.A,{noGutters:!0,className:"page-header py-4"},l.a.createElement(Q,{sm:"4",title:"View All Transactions",subtitle:"Transactions",className:"text-sm-left"})),l.a.createElement(m.A,null,l.a.createElement(m.f,{lg:"8",md:"12",sm:"12",className:"mb-4"},l.a.createElement(de,null))))},be=(a(175),function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).state={startDate:void 0,endDate:void 0},a.handleStartDateChange=a.handleStartDateChange.bind(Object(E.a)(Object(E.a)(a))),a.handleEndDateChange=a.handleEndDateChange.bind(Object(E.a)(Object(E.a)(a))),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"handleStartDateChange",value:function(e){this.setState(Object(j.a)({},this.state,{startDate:new Date(e)}))}},{key:"handleEndDateChange",value:function(e){this.setState(Object(j.a)({},this.state,{endDate:new Date(e)}))}},{key:"render",value:function(){var e=this.props.className,t=d()(e,"d-flex","my-auto","date-range");return l.a.createElement(m.s,{className:t},l.a.createElement(m.i,{size:"sm",selected:this.state.startDate,onChange:this.handleStartDateChange,placeholderText:"Start Date",dropdownMode:"select",className:"text-center"}),l.a.createElement(m.i,{size:"sm",selected:this.state.endDate,onChange:this.handleEndDateChange,placeholderText:"End Date",dropdownMode:"select",className:"text-center"}),l.a.createElement(m.t,{type:"append"},l.a.createElement(m.u,null,l.a.createElement("i",{className:"material-icons"},"\ue916"))))}}]),t}(l.a.Component)),pe=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).canvasRef=l.a.createRef(),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(j.a)({},{responsive:!0,legend:{position:"top"},elements:{line:{tension:.3},point:{radius:0}},scales:{xAxes:[{gridLines:!1,ticks:{callback:function(e,t){return t%7!==0?"":e}}}],yAxes:[{ticks:{suggestedMax:45,callback:function(e){return 0===e?e:e>999?"".concat((e/1e3).toFixed(1),"K"):e}}}]},hover:{mode:"nearest",intersect:!1},tooltips:{custom:!1,mode:"nearest",intersect:!1}},this.props.chartOptions),t=new le(this.canvasRef.current,{type:"LineWithLine",data:this.props.chartData,options:e}),a=t.getDatasetMeta(0);a.data[0]._model.radius=0,a.data[this.props.chartData.datasets[0].data.length-1]._model.radius=0,t.render()}},{key:"render",value:function(){var e=this.props.title;return l.a.createElement(m.c,{small:!0,className:"h-100"},l.a.createElement(m.e,{className:"border-bottom"},l.a.createElement("h6",{className:"m-0"},e)),l.a.createElement(m.d,{className:"pt-0"},l.a.createElement(m.A,{className:"border-bottom py-2 bg-light"},l.a.createElement(m.f,{sm:"6",className:"d-flex mb-2 mb-sm-0"},l.a.createElement(be,null)),l.a.createElement(m.f,null,l.a.createElement(m.b,{size:"sm",className:"d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"},"View Full Screen \u2192"))),l.a.createElement("canvas",{height:"120",ref:this.canvasRef,style:{maxWidth:"100% !important"}})))}}]),t}(l.a.Component);pe.defaultProps={title:"Overview",chartData:{labels:Array.from(new Array(30),function(e,t){return 0===t?1:t}),datasets:[{label:"Current Month",fill:"start",data:[500,800,320,180,240,320,230,650,590,1200,750,940,1420,1200,960,1450,1820,2800,2102,1920,3920,3202,3140,2800,3200,3200,3400,2910,3100,4250],backgroundColor:"rgba(0,123,255,0.1)",borderColor:"rgba(0,123,255,1)",pointBackgroundColor:"#ffffff",pointHoverBackgroundColor:"rgb(0,123,255)",borderWidth:1.5,pointRadius:0,pointHoverRadius:3},{label:"Past Month",fill:"start",data:[380,430,120,230,410,740,472,219,391,229,400,203,301,380,291,620,700,300,630,402,320,380,289,410,300,530,630,720,780,1200],backgroundColor:"rgba(255,65,105,0.1)",borderColor:"rgba(255,65,105,1)",pointBackgroundColor:"#ffffff",pointHoverBackgroundColor:"rgba(255,65,105,1)",borderDash:[3,3],borderWidth:1,pointRadius:0,pointHoverRadius:2,pointBorderColor:"rgba(255,65,105,1)"}]}};var ge=pe,fe=function(e){e.smallStats;return l.a.createElement(m.h,{fluid:!0,className:"main-content-container px-4"},l.a.createElement(m.A,{noGutters:!0,className:"page-header py-4"},l.a.createElement(Q,{title:"Some Stock Name",subtitle:"",className:"text-sm-left mb-3"})),l.a.createElement(m.A,null,l.a.createElement(m.f,{lg:"8",md:"12",sm:"12",className:"mb-4"},l.a.createElement(ge,null))))};fe.defaultProps={smallStats:[{label:"Posts",value:"2,390",percentage:"4.7%",increase:!0,chartLabels:[null,null,null,null,null,null,null],attrs:{md:"6",sm:"6"},datasets:[{label:"Today",fill:"start",borderWidth:1.5,backgroundColor:"rgba(0, 184, 216, 0.1)",borderColor:"rgb(0, 184, 216)",data:[1,2,1,3,5,4,7]}]},{label:"Pages",value:"182",percentage:"12.4",increase:!0,chartLabels:[null,null,null,null,null,null,null],attrs:{md:"6",sm:"6"},datasets:[{label:"Today",fill:"start",borderWidth:1.5,backgroundColor:"rgba(23,198,113,0.1)",borderColor:"rgb(23,198,113)",data:[1,2,3,3,3,4,4]}]},{label:"Comments",value:"8,147",percentage:"3.8%",increase:!1,decrease:!0,chartLabels:[null,null,null,null,null,null,null],attrs:{md:"4",sm:"6"},datasets:[{label:"Today",fill:"start",borderWidth:1.5,backgroundColor:"rgba(255,180,0,0.1)",borderColor:"rgb(255,180,0)",data:[2,3,3,3,4,3,3]}]},{label:"New Customers",value:"29",percentage:"2.71%",increase:!1,decrease:!0,chartLabels:[null,null,null,null,null,null,null],attrs:{md:"4",sm:"6"},datasets:[{label:"Today",fill:"start",borderWidth:1.5,backgroundColor:"rgba(255,65,105,0.1)",borderColor:"rgb(255,65,105)",data:[1,7,1,3,1,4,8]}]},{label:"Subscribers",value:"17,281",percentage:"2.4%",increase:!1,decrease:!0,chartLabels:[null,null,null,null,null,null,null],attrs:{md:"4",sm:"6"},datasets:[{label:"Today",fill:"start",borderWidth:1.5,backgroundColor:"rgb(0,123,255,0.1)",borderColor:"rgb(0,123,255)",data:[3,2,3,2,4,5,4]}]}]};var ve=fe,Ee=function(){return l.a.createElement(m.c,{small:!0,className:"h-100"},l.a.createElement(m.d,null,l.a.createElement(m.n,null,l.a.createElement("h5",null,"Register"),l.a.createElement(m.A,{form:!0},l.a.createElement(m.f,{md:"6",className:"form-group"},l.a.createElement(m.q,{placeholder:"First name",required:!0,valid:!0,onChange:function(){}}),l.a.createElement(m.o,{valid:!0},"The first name looks good!")),l.a.createElement(m.f,{md:"6",className:"form-group"},l.a.createElement(m.q,{placeholder:"Last name",required:!0,valid:!0,onChange:function(){}}),l.a.createElement(m.o,{valid:!0},"The last name looks good!"))),l.a.createElement(m.p,null,l.a.createElement(m.q,{placeholder:"Email",required:!0,invalid:!0}),l.a.createElement(m.o,null,"The email is already in use.")),l.a.createElement(m.p,null,l.a.createElement(m.r,{invalid:!0},l.a.createElement("option",null,"Choose"),l.a.createElement("option",null,"California"),l.a.createElement("option",null,"Iowa"),l.a.createElement("option",null,"Indiana")),l.a.createElement(m.o,null,"Please select your state")),l.a.createElement(m.b,{theme:"primary",className:"mb-2 mr-1"},"Register"))))},ye=function(e){e.smallStats;return l.a.createElement(m.h,{fluid:!0,className:"main-content-container px-4 pb-4"},l.a.createElement("div",{className:"error"},l.a.createElement("div",{className:"error__content"},l.a.createElement(m.A,null,l.a.createElement(m.f,{lg:"8",md:"12",sm:"12",className:"mb-5"},l.a.createElement(m.c,null,l.a.createElement(Ee,null)))))))};function ke(e){var t=new C;return function(a){function n(){var e;return Object(b.a)(this,n),(e=Object(g.a)(this,Object(f.a)(n).call(this))).state={user:null},e}return Object(v.a)(n,a),Object(p.a)(n,[{key:"componentWillMount",value:function(){if(t.loggedIn())try{var e=t.getProfile();this.setState({user:e})}catch(a){t.logout(),this.props.history.replace("/login")}else this.props.history.replace("/login")}},{key:"render",value:function(){return this.state.user?l.a.createElement(e,{history:this.props.history,user:this.state.user}):null}}]),n}(n.Component)}var je=a(46),Oe=(a(177),function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(g.a)(this,Object(f.a)(t).call(this))).state={username:"",password:"",usernameFieldIsValid:null,passwordFieldIsValid:null},e.handleChange=e.handleChange.bind(Object(E.a)(Object(E.a)(e))),e.handleFormSubmit=e.handleFormSubmit.bind(Object(E.a)(Object(E.a)(e))),e.AuthService=new C,e}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){this.AuthService.loggedIn()&&this.props.history.replace("/")}},{key:"render",value:function(){return l.a.createElement("div",{className:"center"},l.a.createElement(m.c,{className:"mb-3"},l.a.createElement(m.e,{className:"border-bottom"},l.a.createElement("h3",{className:"m-0"},"Investment Tracker")),l.a.createElement(m.d,null,l.a.createElement(m.n,null,l.a.createElement(m.p,{className:"username"},l.a.createElement(m.q,{name:"username",size:"lg",placeholder:"User Name",required:!0,invalid:this.state.usernameFieldIsValid,onChange:this.handleChange}),l.a.createElement(m.o,null,"The username might be invalid")),l.a.createElement(m.p,{className:"password"},l.a.createElement(m.q,{name:"password",type:"password",size:"lg",placeholder:"Password",required:!0,invalid:this.state.passwordFieldIsValid,onChange:this.handleChange}),l.a.createElement(m.o,null,"The password might be invalid")),l.a.createElement(m.b,{theme:"primary",onClick:this.handleFormSubmit},"Login")))))}},{key:"handleChange",value:function(e){this.setState(Object(je.a)({},e.target.name,e.target.value))}},{key:"handleFormSubmit",value:function(e){var t=this;e.preventDefault(),this.AuthService.login(this.state.username,this.state.password).then(function(e){e.length<50?(alert(e),t.setState({usernameFieldIsValid:!0,passwordFieldIsValid:!0})):t.props.history.replace("/")}).catch(function(e){alert(e)})}}]),t}(n.Component)),Ne=[{path:"/",exact:!0,layout:$,component:function(){return l.a.createElement(o.a,{to:"/dashboard-overview"})}},{path:"/dashboard-overview",layout:$,component:ke(ie)},{path:"/stock-overview",layout:$,component:ke(ve)},{path:"/transactions-list",layout:$,component:ke(he)},{path:"/login",layout:X,component:Oe},{path:"/registration",layout:$,component:ye}],Ce=a(51);Ce.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/investment_tracker"}).REACT_APP_GAID||"UA-115105611-2");var we=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=function(e){Ce.a.set(Object(j.a)({page:e},t)),Ce.a.pageview(e)},r=Object({NODE_ENV:"production",PUBLIC_URL:"/investment_tracker"}).REACT_APP_BASENAME||"";return function(t){function n(){return Object(b.a)(this,n),Object(g.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(v.a)(n,t),Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname+this.props.location.search;a("".concat(r).concat(e))}},{key:"componentDidUpdate",value:function(e){var t=e.location.pathname+e.location.search,n=this.props.location.pathname+this.props.location.search;t!==n&&a("".concat(r).concat(n))}},{key:"render",value:function(){return l.a.createElement(e,this.props)}}]),n}(n.Component)};a(180),a(182),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(function(){return l.a.createElement(c.a,{basename:"/investment_tracker"},l.a.createElement("div",null,Ne.map(function(e,t){return l.a.createElement(i.a,{key:t,path:e.path,exact:e.exact,component:we(function(t){return l.a.createElement(e.layout,t,l.a.createElement(e.component,t))})})})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},86:function(e,t,a){e.exports=a(184)}},[[86,2,1]]]);
//# sourceMappingURL=main.9e6e456c.chunk.js.map