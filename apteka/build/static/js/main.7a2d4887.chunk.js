(this.webpackJsonpdz=this.webpackJsonpdz||[]).push([[0],{30:function(e,t,a){e.exports=a(62)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(28),c=a.n(r),o=(a(35),a(8)),i=a(11),l=a(13),u=a(12),d=(a(36),a(37),a(17)),m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isLogged:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"_renderLoader",value:function(){return this.props.position.isLogged?s.a.createElement("div",{class:"header_buttons"},s.a.createElement(d.b,{to:"/kass"},s.a.createElement("button",{class:"def_button"},"\u041a\u0430\u0441\u0441\u044b")," "),s.a.createElement(d.b,{to:"/item"},s.a.createElement("button",{class:"def_button"},"\u0422\u043e\u0432\u0430\u0440")," "),s.a.createElement(d.b,{to:"/"},s.a.createElement("button",{class:"def_button",onClick:this.props.UnLoggedIn},"\u0412\u044b\u0445\u043e\u0434 ")," ")):null}},{key:"render",value:function(){return s.a.createElement("div",{class:"header_items"},s.a.createElement("div",{class:"logo"},s.a.createElement(d.b,{to:"/"},s.a.createElement("img",{class:"header_logo",src:"/apteka/build/logo_apt.png",alt:"",srcset:""}))),this._renderLoader())}}]),a}(s.a.Component),p=(a(42),a(43),function(e){var t=e.k,a=e.d;return s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"main_text_bubble"}," ",t," "),s.a.createElement("span",{class:"input_block"},s.a.createElement("div",{class:"text_bubble"},s.a.createElement("span",null,"\u041f\u043b\u0430\u043d"),s.a.createElement("span",null,"\u0418\u0442\u043e\u0433")),s.a.createElement("input",{type:"text",class:"bubble",value:a}),s.a.createElement("input",{type:"text",id:t,class:"bubble"})))}),b=a(14),f=a(10);f.initializeApp({apiKey:"AIzaSyA2rkbRxQOHRUU9NQOnfYj7lLKh7bHUSt0",authDomain:"apteka2020-60723.firebaseapp.com",databaseURL:"https://apteka2020-60723.firebaseio.com",projectId:"apteka2020-60723",storageBucket:"apteka2020-60723.appspot.com",messagingSenderId:"331571938254",appId:"1:331571938254:web:aaf5576e6fec2e6f0be19f",measurementId:"G-7PS552MT0N"});var g=function e(){Object(o.a)(this,e),this.GetTodaysRate=function(e){f.database().ref("kassa/current").once("value").then((function(t){e(t.val().Plan)}))},this.UpdateRates=function(e){f.database().ref("kassa/current").once("value").then((function(t){f.database().ref("kassa/current").update({Left:t.val().Left-e,Date:(new Date).getDate()+"."+((new Date).getMonth()+1),Plan:Math.ceil((t.val().Left-e)/(32-new Date((new Date).getFullYear(),(new Date).getMonth(),32).getDate()-(new Date).getDate()+1)),Todays:e,UpdateDate:(new Date).getDate()+"."+((new Date).getMonth()+1)+" "+(new Date).toLocaleTimeString()},(function(e){e?alert("\u041e\u0448\u0438\u0431\u043a\u0430"):alert("\u0414\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b")}))}))},this.GetCurrentAmount=function(e){f.database().ref("products/").once("value").then((function(t){e(t.val().current.need)}))},this.UpdateNewMonth=function(e){},this.UpdateNewData=function(e){f.database().ref("products/current").update({UpdateDate:(new Date).getDate()+"."+((new Date).getMonth()+1)+" "+(new Date).toLocaleTimeString()}),f.database().ref("products/").once("value").then((function(t){Object.keys(t.val().current.need).map((function(a){f.database().ref("products/current/left").update(Object(b.a)({},a,t.val().current.left[a]-e[a])),f.database().ref("products/current/sold").update(Object(b.a)({},a,e[a])),f.database().ref("products/current/need").update(Object(b.a)({},a,Math.ceil((t.val().current.left[a]-e[a])/(32-new Date((new Date).getFullYear(),(new Date).getMonth(),32).getDate()-(new Date).getDate()+1))))}))}),(function(e){e?alert("\u041e\u0448\u0438\u0431\u043a\u0430"):alert("\u0414\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b")}))},this.doLogIn=function(e,t,a,n){f.database().ref("users/"+e).once("value").then((function(e){return null===e.val()||t!==e.val().Password?n():a()}))}},h=new g,v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={data:void 0},e.funcOK=function(t){e.setState({data:{a:t}})},e.onSubmit=function(t){var a=e.state.data;Object.keys(a).map((function(e){return a[e]=document.getElementById(e).value})),h.UpdateNewData(a),t.preventDefault()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.GetCurrentAmount((function(t){return e.setState({data:t})}))}},{key:"render",value:function(){var e=this.state.data;return s.a.createElement("div",{class:"rates_block"},s.a.createElement("div",{class:"rates_main_text"},"\u0422\u043e\u0432\u0430\u0440\u044b"),s.a.createElement("div",{class:"rates_main_text_date"},"\u041f\u043b\u0430\u043d \u043d\u0430 ",(new Date).toLocaleDateString()),s.a.createElement("div",{class:"rates_data"},s.a.createElement("div",{class:"addit_rates"},s.a.createElement("form",{"\u0441lass":"new_form",onSubmit:this.onSubmit},this.state.data?Object.keys(e).map((function(t){return s.a.createElement(p,{k:t,d:e[t]})})):s.a.createElement("div",null,"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 \u0437\u0430\u043a\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),s.a.createElement("button",{class:"sub_button",type:"submit"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))))}}]),a}(n.Component),E=a(25),_=(a(60),new g),x={username:"",user_password:""},y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setError=function(){n.setState({isError:!0,username:"",user_password:""}),document.getElementById("signin_basis").style.boxShadow="rgba(0, 0, 0, 0.3) 0px 1px 4px, rgba(255, 0, 0, 0.8) -23px 0px 40px -23px, rgba(255, 0, 0, 0.8) 23px 0px 40px -23px, rgba(0, 0, 0, 0.1) 0px 0px 40px inset"},n.errorMsg=function(){if(n.state.isError)return s.a.createElement("div",{class:"error_msg"},s.a.createElement("div",{class:"error_text"},"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0432\u043e\u0434\u0430"),s.a.createElement("div",{class:"error_text"},"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"))},n.onChange=function(e){n.setState(Object(b.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){e.preventDefault();var t=n.state,a=t.username,s=t.user_password;_.doLogIn(a,s,n.props.LoggedIn,n.setError)},n.state=Object(E.a)(Object(E.a)({},x),{},{IsError:!1}),n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.user_password;return this.props.IsLogged?s.a.createElement("div",{id:"signin_basis"},s.a.createElement("div",{class:"login_title"},"\u0412\u044b \u0432\u043e\u0448\u043b\u0438")):s.a.createElement("div",{id:"signin_basis"},s.a.createElement("div",{class:"login_title"},"\u0412\u0445\u043e\u0434"),this.errorMsg(),s.a.createElement("form",{class:"submit_form",onSubmit:this.onSubmit},s.a.createElement("input",{class:"line",name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"\u041b\u043e\u0433\u0438\u043d",pattern:"[A-Za-z0-9]+"}),s.a.createElement("input",{class:"line",name:"user_password",value:a,onChange:this.onChange,type:"text",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),s.a.createElement("button",{class:"sub_button",type:"submit"},"\u0412\u043e\u0439\u0442\u0438")))}}]),a}(s.a.Component),w=(a(61),new g),D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).funcOK=function(t){e.setState({data:t}),6!==(new Date).getDay()&&0!==(new Date).getDay()&&0==document.getElementById("myCheck").checked?(e.setState({first:(13*e.state.data/34).toFixed(1)}),e.setState({second:(12*e.state.data/34).toFixed(1)}),e.setState({third:(9*e.state.data/34).toFixed(1)})):(e.setState({first:(e.state.data/2).toFixed(1)}),e.setState({second:(e.state.data/2).toFixed(1)}),e.setState({third:"\u0412\u044b\u0445\u043e\u0434\u043d\u043e\u0439/\u041f\u0440\u0430\u0437\u0434\u043d\u0438\u043a"}))},e.clic=function(){e.funcOK(e.state.data)},e.state={data:null,first:null,second:null,third:null,final:null},e.onChange=function(t){e.setState(Object(b.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){w.UpdateRates(e.state.final),t.preventDefault(),w.GetTodaysRate(e.funcOK)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){w.GetTodaysRate(this.funcOK)}},{key:"componentDidMount",value:function(){w.GetTodaysRate(this.funcOK)}},{key:"render",value:function(){return s.a.createElement("div",{className:"convert_page"},s.a.createElement("div",{class:"rates_main_text"},"\u0412\u044b\u0440\u0443\u0447\u043a\u0430"),s.a.createElement("div",{class:"rates_main_text"},"\u041f\u043b\u0430\u043d \u043d\u0430 ",(new Date).toLocaleDateString()),s.a.createElement("div",{class:"convertor_box"},s.a.createElement("div",{class:"rates_main_text"},"\u041a\u0430\u0441\u0441\u0430 \u21161"),s.a.createElement("input",{type:"text",className:"input_box",value:this.state.first}),s.a.createElement("div",{class:"rates_main_text"},"\u041a\u0430\u0441\u0441\u0430 \u21162"),s.a.createElement("input",{type:"text",className:"input_box",value:this.state.second}),s.a.createElement("div",{class:"rates_main_text"},"\u041a\u0430\u0441\u0441\u0430 \u21163"),s.a.createElement("input",{type:"text",className:"input_box",value:this.state.third}),s.a.createElement("div",{class:"check_area"},s.a.createElement("label",{for:"myCheck"},"\u041f\u0440\u0430\u0437\u0434\u043d\u0438\u043a:"),s.a.createElement("input",{type:"checkbox",id:"myCheck",onChange:this.clic})),s.a.createElement("div",{class:"rates_main_text"},"\u0418\u0442\u043e\u0433 \u0437\u0430 \u0434\u0435\u043d\u044c"),s.a.createElement("form",{class:"submit_form",onSubmit:this.onSubmit},s.a.createElement("input",{type:"text",name:"final",className:"input_box",onChange:this.onChange,value:this.state.final}),s.a.createElement("button",{class:"sub_button",type:"submit"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))))}}]),a}(n.Component),k=a(2),O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).LoggedIn=function(){n.setState({isLogged:!0})},n.UnLoggedIn=function(){n.setState({isLogged:!1})},n.state={isLogged:!1},n}return Object(i.a)(a,[{key:"render",value:function(){return console.log(this.state.isLogged),s.a.createElement(d.a,{basename:"/apteka/build"},s.a.createElement(m,{position:this.state,UnLoggedIn:this.UnLoggedIn}),this.state.isLogged?s.a.createElement(k.a,{to:"/"}):null,s.a.createElement(k.d,null,s.a.createElement(k.b,{path:"/signin"},s.a.createElement(y,{LoggedIn:this.LoggedIn})),s.a.createElement(k.b,{path:"/kass"},this.state.isLogged?s.a.createElement(D,null):s.a.createElement(k.a,{to:"/"})),s.a.createElement(k.b,{path:"/item"},this.state.isLogged?s.a.createElement(v,null):s.a.createElement(k.a,{to:"/"})),s.a.createElement(k.b,{path:"/"},s.a.createElement(y,{LoggedIn:this.LoggedIn,IsLogged:this.state.isLogged}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.7a2d4887.chunk.js.map