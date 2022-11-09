(this["webpackJsonpinvoice-generator"]=this["webpackJsonpinvoice-generator"]||[]).push([[0],{43:function(e,t,s){},44:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s.n(i),n=s(17),c=s.n(n),l=(s(43),s(10)),r=s(11),d=s(15),o=s(14),h=(s(23),s(44),s(35)),j=s(9),m=s(29),b=s(21),p=s(13),x=s(20),u=s(6),O=s(37),f=s(25),y=s(27),v=s(19),N=s(0),w=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(N.jsxs)(v.a,{className:"my-1 flex-nowrap",children:[null!=this.props.cellData.leading&&Object(N.jsx)(v.a.Text,{className:"bg-light fw-bold border-0 text-secondary px-2",children:Object(N.jsx)("span",{className:"border border-2 border-secondary rounded-circle d-flex align-items-center justify-content-center small",style:{width:"20px",height:"20px"},children:this.props.cellData.leading})}),Object(N.jsx)(u.a.Control,{className:this.props.cellData.textAlign,type:this.props.cellData.type,placeholder:this.props.cellData.placeholder,min:this.props.cellData.min,name:this.props.cellData.name,id:this.props.cellData.id,value:this.props.cellData.value,step:this.props.cellData.step,presicion:this.props.cellData.presicion,"aria-label":this.props.cellData.name,onChange:this.props.onItemizedItemEdit,required:!0})]})}}]),s}(a.a.Component),g=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e=this.props.onItemizedItemEdit,t=this.props.currency,s=this.props.onRowDel,i=this.props.items.map((function(i){return Object(N.jsx)(C,{onItemizedItemEdit:e,item:i,onDelEvent:s.bind(this),currency:t},i.id)}));return Object(N.jsxs)("div",{children:[Object(N.jsxs)(f.a,{children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"ITEM"}),Object(N.jsx)("th",{children:"QTY"}),Object(N.jsx)("th",{children:"PRICE/RATE"}),Object(N.jsx)("th",{className:"text-center",children:"ACTION"})]})}),Object(N.jsx)("tbody",{children:i})]}),Object(N.jsx)(x.a,{className:"fw-bold",onClick:this.props.onRowAdd,children:"Add Item"})]})}}]),s}(a.a.Component),C=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"onDelEvent",value:function(){this.props.onDelEvent(this.props.item)}},{key:"render",value:function(){return Object(N.jsxs)("tr",{children:[Object(N.jsxs)("td",{style:{width:"100%"},children:[Object(N.jsx)(w,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"text",name:"name",placeholder:"Item name",value:this.props.item.name,id:this.props.item.id}}),Object(N.jsx)(w,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"text",name:"description",placeholder:"Item description",value:this.props.item.description,id:this.props.item.id}})]}),Object(N.jsx)("td",{style:{minWidth:"70px"},children:Object(N.jsx)(w,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"number",name:"quantity",min:1,step:"1",value:this.props.item.quantity,id:this.props.item.id}})}),Object(N.jsx)("td",{style:{minWidth:"130px"},children:Object(N.jsx)(w,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{leading:this.props.currency,type:"number",name:"price",min:1,step:"0.01",presicion:2,textAlign:"text-end",value:this.props.item.price,id:this.props.item.id}})}),Object(N.jsx)("td",{className:"text-center",style:{minWidth:"50px"},children:Object(N.jsx)(y.c,{onClick:this.onDelEvent.bind(this),style:{height:"33px",width:"33px",padding:"7.5px"},className:"text-white mt-1 btn btn-danger"})})]})}}]),s}(a.a.Component),I=g,T=s(36),F=s(32),D=s.n(F),A=s(34);function E(){D()(document.querySelector("#invoiceCapture")).then((function(e){var t=e.toDataURL("image/png",1),s=new A.a({orientation:"portrait",unit:"pt",format:[612,792]});s.internal.scaleFactor=1;var i=s.getImageProperties(t),a=s.internal.pageSize.getWidth(),n=i.height*a/i.width;s.addImage(t,"PNG",0,0,a,n),s.save("invoice-001.pdf")}))}var S=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e=this;return Object(N.jsxs)("div",{children:[Object(N.jsxs)(T.a,{show:this.props.showModal,onHide:this.props.closeModal,size:"lg",centered:!0,children:[Object(N.jsxs)("div",{id:"invoiceCapture",children:[Object(N.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4",children:[Object(N.jsxs)("div",{className:"w-100",children:[Object(N.jsx)("h4",{className:"fw-bold my-2",children:this.props.info.billFrom||"John Uberbacher"}),Object(N.jsxs)("h6",{className:"fw-bold text-secondary mb-1",children:["Invoice #: ",this.props.info.invoiceNumber||""]})]}),Object(N.jsxs)("div",{className:"text-end ms-4",children:[Object(N.jsx)("h6",{className:"fw-bold mt-1 mb-2",children:"Amount\xa0Due:"}),Object(N.jsxs)("h5",{className:"fw-bold text-secondary",children:[" ",this.props.currency," ",this.props.total]})]})]}),Object(N.jsxs)("div",{className:"p-4",children:[Object(N.jsxs)(b.a,{className:"mb-4",children:[Object(N.jsxs)(p.a,{md:4,children:[Object(N.jsx)("div",{className:"fw-bold",children:"Billed to:"}),Object(N.jsx)("div",{children:this.props.info.billTo||""}),Object(N.jsx)("div",{children:this.props.info.billToAddress||""}),Object(N.jsx)("div",{children:this.props.info.billToEmail||""})]}),Object(N.jsxs)(p.a,{md:4,children:[Object(N.jsx)("div",{className:"fw-bold",children:"Billed From:"}),Object(N.jsx)("div",{children:this.props.info.billFrom||""}),Object(N.jsx)("div",{children:this.props.info.billFromAddress||""}),Object(N.jsx)("div",{children:this.props.info.billFromEmail||""})]}),Object(N.jsxs)(p.a,{md:4,children:[Object(N.jsx)("div",{className:"fw-bold mt-2",children:"Date Of Issue:"}),Object(N.jsx)("div",{children:this.props.info.dateOfIssue||""})]})]}),Object(N.jsxs)(f.a,{className:"mb-0",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"QTY"}),Object(N.jsx)("th",{children:"DESCRIPTION"}),Object(N.jsx)("th",{className:"text-end",children:"PRICE"}),Object(N.jsx)("th",{className:"text-end",children:"AMOUNT"})]})}),Object(N.jsx)("tbody",{children:this.props.items.map((function(t,s){return Object(N.jsxs)("tr",{id:s,children:[Object(N.jsx)("td",{style:{width:"70px"},children:t.quantity}),Object(N.jsxs)("td",{children:[t.name," - ",t.description]}),Object(N.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[e.props.currency," ",t.price]}),Object(N.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[e.props.currency," ",t.price*t.quantity]})]},s)}))})]}),Object(N.jsx)(f.a,{children:Object(N.jsxs)("tbody",{children:[Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"\xa0"}),Object(N.jsx)("td",{children:"\xa0"}),Object(N.jsx)("td",{children:"\xa0"})]}),Object(N.jsxs)("tr",{className:"text-end",children:[Object(N.jsx)("td",{}),Object(N.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"SUBTOTAL"}),Object(N.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",this.props.subTotal]})]}),0!==this.props.taxAmmount&&Object(N.jsxs)("tr",{className:"text-end",children:[Object(N.jsx)("td",{}),Object(N.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"TAX"}),Object(N.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",this.props.taxAmmount]})]}),0!==this.props.discountAmmount&&Object(N.jsxs)("tr",{className:"text-end",children:[Object(N.jsx)("td",{}),Object(N.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"DISCOUNT"}),Object(N.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",this.props.discountAmmount]})]}),Object(N.jsxs)("tr",{className:"text-end",children:[Object(N.jsx)("td",{}),Object(N.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"TOTAL"}),Object(N.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",this.props.total]})]})]})}),this.props.info.notes&&Object(N.jsx)("div",{className:"bg-light py-3 px-4 rounded",children:this.props.info.notes})]})]}),Object(N.jsx)("div",{className:"pb-4 px-4",children:Object(N.jsxs)(b.a,{children:[Object(N.jsx)(p.a,{md:6,children:Object(N.jsxs)(x.a,{variant:"primary",className:"d-block w-100",onClick:E,children:[Object(N.jsx)(y.b,{style:{width:"15px",height:"15px",marginTop:"-3px"},className:"me-2"}),"Send Invoice"]})}),Object(N.jsx)(p.a,{md:6,children:Object(N.jsxs)(x.a,{variant:"outline-primary",className:"d-block w-100 mt-3 mt-md-0",onClick:E,children:[Object(N.jsx)(y.a,{style:{width:"16px",height:"16px",marginTop:"-3px"},className:"me-2"}),"Download Copy"]})})]})})]}),Object(N.jsx)("hr",{className:"mt-4 mb-3"})]})}}]),s}(a.a.Component),q=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).editField=function(e){i.setState(Object(j.a)({},e.target.name,e.target.value)),i.handleCalculateTotal()},i.onCurrencyChange=function(e){i.setState(e)},i.openModal=function(e){e.preventDefault(),i.handleCalculateTotal(),i.setState({isOpen:!0})},i.closeModal=function(e){return i.setState({isOpen:!1})},i.state={isOpen:!1,currency:"$",currentDate:"",invoiceNumber:1,dateOfIssue:"",billTo:"",billToEmail:"",billToAddress:"",billFrom:"",billFromEmail:"",billFromAddress:"",notes:"",total:"0.00",subTotal:"0.00",taxRate:"",taxAmmount:"0.00",discountRate:"",discountAmmount:"0.00"},i.state.items=[{id:0,name:"",description:"",price:"1.00",quantity:1}],i.editField=i.editField.bind(Object(m.a)(i)),i}return Object(r.a)(s,[{key:"componentDidMount",value:function(e){this.handleCalculateTotal()}},{key:"handleRowDel",value:function(e){var t=this.state.items.indexOf(e);this.state.items.splice(t,1),this.setState(this.state.items)}},{key:"handleAddEvent",value:function(e){var t={id:(+new Date+Math.floor(999999*Math.random())).toString(36),name:"",price:"1.00",description:"",quantity:1};this.state.items.push(t),this.setState(this.state.items)}},{key:"handleCalculateTotal",value:function(){var e=this,t=this.state.items,s=0;t.map((function(e){return s=parseFloat(parseFloat(s+parseFloat(e.price).toFixed(2)*parseInt(e.quantity)).toFixed(2))})),this.setState({subTotal:parseFloat(s).toFixed(2)},(function(){e.setState({taxAmmount:parseFloat(parseFloat(s)*(e.state.taxRate/100)).toFixed(2)},(function(){e.setState({discountAmmount:parseFloat(parseFloat(s)*(e.state.discountRate/100)).toFixed(2)},(function(){e.setState({total:s-e.state.discountAmmount+parseFloat(e.state.taxAmmount)})}))}))}))}},{key:"onItemizedItemEdit",value:function(e){var t={id:e.target.id,name:e.target.name,value:e.target.value},s=this.state.items.slice().map((function(e){for(var s in e)s===t.name&&e.id===t.id&&(e[s]=t.value);return e}));this.setState({items:s}),this.handleCalculateTotal()}},{key:"render",value:function(){var e=this;return Object(N.jsx)(u.a,{onSubmit:this.openModal,children:Object(N.jsxs)(b.a,{children:[Object(N.jsx)(p.a,{md:8,lg:9,children:Object(N.jsxs)(O.a,{className:"p-4 p-xl-5 my-3 my-xl-4",children:[Object(N.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mb-3",children:[Object(N.jsxs)("div",{className:"d-flex flex-column",children:[Object(N.jsx)("div",{className:"d-flex flex-column",children:Object(N.jsxs)("div",{className:"mb-2",children:[Object(N.jsx)("span",{className:"fw-bold",children:"Current\xa0Date:\xa0"}),Object(N.jsx)("span",{className:"current-date",children:(new Date).toLocaleDateString()})]})}),Object(N.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[Object(N.jsx)("span",{className:"fw-bold d-block me-2",children:"Due\xa0Date:"}),Object(N.jsx)(u.a.Control,{type:"date",value:this.state.dateOfIssue,name:"dateOfIssue",onChange:function(t){return e.editField(t)},style:{maxWidth:"150px"},required:"required"})]})]}),Object(N.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[Object(N.jsx)("span",{className:"fw-bold me-2",children:"Invoice\xa0Number:\xa0"}),Object(N.jsx)(u.a.Control,{type:"number",value:this.state.invoiceNumber,name:"invoiceNumber",onChange:function(t){return e.editField(t)},min:"1",style:{maxWidth:"70px"},required:"required"})]})]}),Object(N.jsx)("hr",{className:"my-4"}),Object(N.jsxs)(b.a,{className:"mb-5",children:[Object(N.jsxs)(p.a,{children:[Object(N.jsx)(u.a.Label,{className:"fw-bold",children:"Bill to:"}),Object(N.jsx)(u.a.Control,{placeholder:"Who is this invoice to?",rows:3,value:this.state.billTo,type:"text",name:"billTo",className:"my-2",onChange:function(t){return e.editField(t)},autoComplete:"name",required:"required"}),Object(N.jsx)(u.a.Control,{placeholder:"Email address",value:this.state.billToEmail,type:"email",name:"billToEmail",className:"my-2",onChange:function(t){return e.editField(t)},autoComplete:"email",required:"required"}),Object(N.jsx)(u.a.Control,{placeholder:"Billing address",value:this.state.billToAddress,type:"text",name:"billToAddress",className:"my-2",autoComplete:"address",onChange:function(t){return e.editField(t)},required:"required"})]}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(u.a.Label,{className:"fw-bold",children:"Bill from:"}),Object(N.jsx)(u.a.Control,{placeholder:"Who is this invoice from?",rows:3,value:this.state.billFrom,type:"text",name:"billFrom",className:"my-2",onChange:function(t){return e.editField(t)},autoComplete:"name",required:"required"}),Object(N.jsx)(u.a.Control,{placeholder:"Email address",value:this.state.billFromEmail,type:"email",name:"billFromEmail",className:"my-2",onChange:function(t){return e.editField(t)},autoComplete:"email",required:"required"}),Object(N.jsx)(u.a.Control,{placeholder:"Billing address",value:this.state.billFromAddress,type:"text",name:"billFromAddress",className:"my-2",autoComplete:"address",onChange:function(t){return e.editField(t)},required:"required"})]})]}),Object(N.jsx)(I,{onItemizedItemEdit:this.onItemizedItemEdit.bind(this),onRowAdd:this.handleAddEvent.bind(this),onRowDel:this.handleRowDel.bind(this),currency:this.state.currency,items:this.state.items}),Object(N.jsx)(b.a,{className:"mt-4 justify-content-end",children:Object(N.jsxs)(p.a,{lg:6,children:[Object(N.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between",children:[Object(N.jsx)("span",{className:"fw-bold",children:"Subtotal:"}),Object(N.jsxs)("span",{children:[this.state.currency,this.state.subTotal]})]}),Object(N.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mt-2",children:[Object(N.jsx)("span",{className:"fw-bold",children:"Discount:"}),Object(N.jsxs)("span",{children:[Object(N.jsxs)("span",{className:"small ",children:["(",this.state.discountRate||0,"%)"]}),this.state.currency,this.state.discountAmmount||0]})]}),Object(N.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mt-2",children:[Object(N.jsx)("span",{className:"fw-bold",children:"Tax:"}),Object(N.jsxs)("span",{children:[Object(N.jsxs)("span",{className:"small ",children:["(",this.state.taxRate||0,"%)"]}),this.state.currency,this.state.taxAmmount||0]})]}),Object(N.jsx)("hr",{}),Object(N.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between",style:{fontSize:"1.125rem"},children:[Object(N.jsx)("span",{className:"fw-bold",children:"Total:"}),Object(N.jsxs)("span",{className:"fw-bold",children:[this.state.currency,this.state.total||0]})]})]})}),Object(N.jsx)("hr",{className:"my-4"}),Object(N.jsx)(u.a.Label,{className:"fw-bold",children:"Notes:"}),Object(N.jsx)(u.a.Control,{placeholder:"Thanks for your business!",name:"notes",value:this.state.notes,onChange:function(t){return e.editField(t)},as:"textarea",className:"my-2",rows:1})]})}),Object(N.jsx)(p.a,{md:4,lg:3,children:Object(N.jsxs)("div",{className:"sticky-top pt-md-3 pt-xl-4",children:[Object(N.jsx)(x.a,{variant:"primary",type:"submit",className:"d-block w-100",children:"Review Invoice"}),Object(N.jsx)(S,{showModal:this.state.isOpen,closeModal:this.closeModal,info:this.state,items:this.state.items,currency:this.state.currency,subTotal:this.state.subTotal,taxAmmount:this.state.taxAmmount,discountAmmount:this.state.discountAmmount,total:this.state.total}),Object(N.jsxs)(u.a.Group,{className:"mb-3",children:[Object(N.jsx)(u.a.Label,{className:"fw-bold",children:"Currency:"}),Object(N.jsxs)(u.a.Select,{onChange:function(t){return e.onCurrencyChange({currency:t.target.value})},className:"btn btn-light my-1","aria-label":"Change Currency",children:[Object(N.jsx)("option",{value:"$",children:"USD (United States Dollar)"}),Object(N.jsx)("option",{value:"\u20b9",children:"INR (INDIAN RUPEE)"}),Object(N.jsx)("option",{value:"\u20bf",children:"BTC (Bitcoin)"})]})]}),Object(N.jsxs)(u.a.Group,{className:"my-3",children:[Object(N.jsx)(u.a.Label,{className:"fw-bold",children:"Tax rate:"}),Object(N.jsxs)(v.a,{className:"my-1 flex-nowrap",children:[Object(N.jsx)(u.a.Control,{name:"taxRate",type:"number",value:this.state.taxRate,onChange:function(t){return e.editField(t)},className:"bg-white border",placeholder:"0.0",min:"0.00",step:"0.01",max:"100.00"}),Object(N.jsx)(v.a.Text,{className:"bg-light fw-bold text-secondary small",children:"%"})]})]}),Object(N.jsxs)(u.a.Group,{className:"my-3",children:[Object(N.jsx)(u.a.Label,{className:"fw-bold",children:"Discount rate:"}),Object(N.jsxs)(v.a,{className:"my-1 flex-nowrap",children:[Object(N.jsx)(u.a.Control,{name:"discountRate",type:"number",value:this.state.discountRate,onChange:function(t){return e.editField(t)},className:"bg-white border",placeholder:"0.0",min:"0.00",step:"0.01",max:"100.00"}),Object(N.jsx)(v.a.Text,{className:"bg-light fw-bold text-secondary small",children:"%"})]})]})]})})]})})}}]),s}(a.a.Component),k=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(N.jsx)("div",{className:"App d-flex flex-column align-items-center justify-content-center w-100",children:Object(N.jsx)(h.a,{children:Object(N.jsx)(q,{})})})}}]),s}(i.Component),R=function(e){e&&e instanceof Function&&s.e(5).then(s.bind(null,441)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),i(e),a(e),n(e),c(e)}))};c.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(k,{})}),document.getElementById("root")),R()}},[[48,1,3]]]);
//# sourceMappingURL=main.caddd642.chunk.js.map