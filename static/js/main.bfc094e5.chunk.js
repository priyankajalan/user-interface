(window["webpackJsonpuser-interface"]=window["webpackJsonpuser-interface"]||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(16),c=n.n(r),o=(n(24),n(25),n(7));var u=function(e){var t=e.tag,n=e.text;return l.a.createElement(t,null,n)};var m=function(e){var t=e.type,n=e.label,a=e.onClick,r=void 0===a?function(){}:a,c=e.color,o=void 0===c?"gray":c,u={width:"200px",height:"35px",backgroundColor:{gray:"#BDBDBD",red:"#B71C1C",blue:"#1565C0",green:"#388E3C",yellow:"#FDD835",black:"#212121"}[o],color:"red"===o||"blue"===o||"green"===o||"black"===o?"#fff":"#000",fontSize:"1em"};return l.a.createElement("button",{type:t,onClick:r,style:u},n)},i=n(11),s=l.a.createContext();function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var E=l.a.memo((function(e){var t=Object(a.useState)({}),n=Object(o.a)(t,2),r=n[0],c=n[1],E=e.onSubmit,d=Object(a.useCallback)((function(e,t){c((function(n){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,Object(i.a)({},e,t))}))}),[r.name]);return l.a.createElement(s.Provider,{value:{updateForm:d}},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E(r)}},l.a.createElement(u,{tag:"h1",text:"Form Components"}),e.children,l.a.createElement(m,{type:"submit",label:"Submit Form"})))}));var d=l.a.memo((function(e){var t=e.name,n=e.type,r=e.placeholder,c=e.initialValue,u=e.onChange,m=void 0===u?function(){}:u,i=Object(a.useContext)(s),p=Object(a.useState)(c),E=Object(o.a)(p,2),d=E[0],b=E[1],h=Object(a.useCallback)((function(e){b(e.target.value)}),[]);return Object(a.useEffect)((function(){m(d),i&&i.updateForm(t,d)}),[d]),l.a.createElement("div",{style:{marginBottom:"10px"}},l.a.createElement("input",{style:{height:"30px",width:"100%"},name:t,type:n,defaultValue:d,onChange:h,placeholder:r}))}));var b=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1];return l.a.createElement("div",{className:"App"},l.a.createElement(E,{onSubmit:function(e){console.log(e)}},l.a.createElement(d,{name:"firstName",type:"text",placeholder:"Enter your first name"}),l.a.createElement(d,{name:"lastName",type:"text",placeholder:"Enter your last name"})),l.a.createElement("h1",null,"Text input Without form"),l.a.createElement(d,{name:"address",type:"text",placeholder:"Enter your Address",onChange:function(e){r(e)}}),n)},h=n(9),f=n(5);var y=function(){var e=function(){alert("Button Clicked")};return l.a.createElement("div",null,l.a.createElement("h1",null,"Button"),l.a.createElement("h2",null,"The Button Component is simple to use native ",l.a.createElement("span",{className:"demo-code"},"button")," and has additional range of colors"),l.a.createElement("p",null,"Button component can be used using ",l.a.createElement("strong",null,"<Button></Button>")," tag"),l.a.createElement("p",null,l.a.createElement("strong",null,"Props")),l.a.createElement("table",{className:"propTable"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Prop Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Description")),l.a.createElement("tr",null,l.a.createElement("td",null,"name ",l.a.createElement("small",null,"(required)")),l.a.createElement("td",null,"string"),l.a.createElement("td",null,"The input's name, to identify the input in the data submitted with the form's data")),l.a.createElement("tr",null,l.a.createElement("td",null,"type ",l.a.createElement("small",null,"(required)")),l.a.createElement("td",null,"string"),l.a.createElement("td",null,"The default behavior of the button. Possible values are",l.a.createElement("span",{className:"code"},"submit"),",",l.a.createElement("span",{className:"code"},"button"))),l.a.createElement("tr",null,l.a.createElement("td",null,"onClick"),l.a.createElement("td",null,"function"),l.a.createElement("td",null,"Triggers the ",l.a.createElement("span",{className:"code"},"onclick")," event occurs when the user clicks on the button element")))),l.a.createElement("div",{className:"demo-container"},l.a.createElement("h3",null,l.a.createElement("strong",null,"Default Buttons")," can be created using"),l.a.createElement("code",null,'<Button onClick={handleClick} type="button" label="Default button" />'),l.a.createElement("div",{className:"demo-ui"},l.a.createElement(m,{onClick:e,type:"button",label:"Default button"}))),l.a.createElement("div",{className:"demo-container"},l.a.createElement("h3",null,l.a.createElement("strong",null,"Color Buttons")," can be created using the ",l.a.createElement("span",{className:"demo-code"},"color")," prop"),l.a.createElement("code",null,'<Button onClick={handleClick} type="button" color="red" label="Red button" />'),l.a.createElement("div",{className:"demo-ui"},l.a.createElement(m,{onClick:e,type:"button",color:"red",label:"Red button"}),l.a.createElement(m,{onClick:e,type:"button",color:"blue",label:"Blue button"}),l.a.createElement(m,{onClick:e,type:"button",color:"green",label:"Green button"}),l.a.createElement(m,{onClick:e,type:"button",color:"yellow",label:"Yellow button"}),l.a.createElement(m,{onClick:e,type:"button",color:"black",label:"Black button"}))))};var g=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"TextInput"),l.a.createElement("h2",null,"The TextInput Component is simple to use native ",l.a.createElement("span",{className:"demo-code"},"input")," element for creating interactive form control"),l.a.createElement("p",null,"TextInput component can be used using ",l.a.createElement("strong",null,"<TextInput></TextInput>")," tag"),l.a.createElement("p",null,l.a.createElement("strong",null,"Props")),l.a.createElement("table",{className:"propTable"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Prop Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Description")),l.a.createElement("tr",null,l.a.createElement("td",null,"name ",l.a.createElement("small",null,"(required)")),l.a.createElement("td",null,"string"),l.a.createElement("td",null,"The input's name, to identify the input in the data submitted with the form's data")),l.a.createElement("tr",null,l.a.createElement("td",null,"type ",l.a.createElement("small",null,"(required)")),l.a.createElement("td",null,"string"),l.a.createElement("td",null,"A string indicating which input type the element represents")),l.a.createElement("tr",null,l.a.createElement("td",null,"placeholder"),l.a.createElement("td",null,"string"),l.a.createElement("td",null,"The placeholder attribute lets you specify a text that appears within the element's content area itself when empty")),l.a.createElement("tr",null,l.a.createElement("td",null,"onChange"),l.a.createElement("td",null,"function"),l.a.createElement("td",null,"onChange function returns the current value of the input component")))),l.a.createElement("div",{className:"demo-container"},l.a.createElement("h3",null,l.a.createElement("strong",null,"TextInput")," can be standalone using"),l.a.createElement("code",null,'<TextInput name="fullName" type="text" placeholder="Enter your name" />'),l.a.createElement("div",{className:"demo-ui"},l.a.createElement(d,{name:"fullName",type:"text",placeholder:"Enter your name"}))))};var v=function(){return l.a.createElement(h.a,null,l.a.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"}},l.a.createElement("div",{style:{flex:2,minHeight:"100vh",backgroundColor:"#B71C1C",color:"#fff"}},l.a.createElement("div",null,l.a.createElement("h3",{style:{textAlign:"center",paddingTop:"2em"}},"User Interface Components")),l.a.createElement("div",{className:"navBar"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(h.b,{to:"/button"},"Button")),l.a.createElement("li",null,l.a.createElement(h.b,{to:"/text-input"},"TextInput")),l.a.createElement("li",null,l.a.createElement(h.b,{to:"/form"},"Form"))))),l.a.createElement("div",{style:{flex:10,padding:"5em"}},l.a.createElement(f.a,{path:"/",exact:!0,component:b}),l.a.createElement(f.a,{path:"/form",component:b}),l.a.createElement(f.a,{path:"/button",component:y}),l.a.createElement(f.a,{path:"/text-input",component:g}))))};var C=function(){return l.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.bfc094e5.chunk.js.map