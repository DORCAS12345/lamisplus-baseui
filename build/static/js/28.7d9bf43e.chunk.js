(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{286:function(e,a,t){"use strict";var n=t(21),r=t(1),l=t.n(r),c=(t(39),t(55)),m=t(369),i=t(370),s=t(70),o=t(35),u=t.n(o),p={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"},E=function(e){var a,t=e.tag,r=e.className,c=e.type,m=Object(n.a)(e,["tag","className","type"]),i=u()(Object(s.a)({},c,!!c),r);return a=t||(!t&&p[c]?p[c]:"p"),l.a.createElement(a,Object.assign({},m,{className:i}))};E.defaultProps={type:"p"};var h=E,b=c.a.create("page"),d=function(e){var a=e.title,t=e.breadcrumbs,r=e.tag,c=e.className,s=e.children,o=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),u=b.b("px-5","p-5",c);return l.a.createElement(r,Object.assign({className:u},o),l.a.createElement("div",{className:b.e("header")},a&&"string"===typeof a?l.a.createElement(h,{type:"h4",className:b.e("title")},a):a,t&&l.a.createElement(m.a,{className:b.e("breadcrumb")},l.a.createElement(i.a,null,"Home"),t.length&&t.map(function(e,a){var t=e.name,n=e.active;return l.a.createElement(i.a,{key:a,active:n},t)}))),s)};d.defaultProps={tag:"div",title:""};a.a=d},604:function(e,a,t){"use strict";t.r(a);var n=t(286),r=t(1),l=t.n(r),c=t(320),m=t(236),i=t(312),s=t(313),o=t(296),u=t(123),p=t(239),E=function(){return l.a.createElement(m.a,{className:"cr-search-form",onSubmit:function(e){return e.preventDefault()}},l.a.createElement(i.a,null,l.a.createElement(s.a,null,l.a.createElement(p.a,{type:"search",placeholder:"Search by Patient Name, Hospital Number ",className:"cr-search-form__input pull-right"}))))},h=t(330),b=t(580),d=t(582),f=t(579),g=t(331),N=t(581),y=t(190),v=t(358),w=t(275),k=t(22),O=t(97),j=Object(u.a)(function(e){return{table:{minWidth:650},button:{margin:e.spacing(1),width:200}}});function P(e,a,t,n,r){return{name:e,calories:a,fat:t,carbs:n,protein:r}}var D=[P("1598",159,6,24,4),P("1234",237,9,37,4.3),P("5555",262,16,24,6)];function x(){var e=j();return l.a.createElement(f.a,{component:y.a},l.a.createElement(h.a,{className:e.table,"aria-label":"caption table"},l.a.createElement(g.a,null,l.a.createElement(N.a,null,l.a.createElement(d.a,null,"Patient ID"),l.a.createElement(d.a,{align:"center"},"Patient Name"),l.a.createElement(d.a,{align:"center"},"Phone Number"),l.a.createElement(d.a,{align:"center"},"Total"),l.a.createElement(d.a,{align:"center"},"Action"))),l.a.createElement(b.a,null,D.map(function(e){return l.a.createElement(N.a,{key:e.name},l.a.createElement(d.a,{component:"th",scope:"row"},e.name),l.a.createElement(d.a,{align:"center"},e.calories),l.a.createElement(d.a,{align:"center"},e.fat),l.a.createElement(d.a,{align:"center"},e.carbs),l.a.createElement(d.a,{align:"center"},l.a.createElement(O.a,{to:"/consultation-dashbaord"},l.a.createElement(v.a,{title:"View Dashboard"},l.a.createElement(w.a,{"aria-label":"View Dashboard"},l.a.createElement(k.e,null))))))}))))}var q=Object(u.a)(function(e){return{card:{margin:e.spacing(20),display:"flex",flexDirection:"column",alignItems:"center"}}});a.default=function(){var e=q();return l.a.createElement(n.a,{title:"Consultation"},l.a.createElement(c.a,{color:"primary"},l.a.createElement(o.c,{size:"30",className:" text-dark"}),"  ","  ","Note : Only checked in Patients can be search here"),l.a.createElement(i.a,{className:e.cardBottom},l.a.createElement(s.a,null,l.a.createElement(m.a,null,l.a.createElement(E,null)),l.a.createElement("br",null),l.a.createElement(x,null))))}}}]);
//# sourceMappingURL=28.7d9bf43e.chunk.js.map