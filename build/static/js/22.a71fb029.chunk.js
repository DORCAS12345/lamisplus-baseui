(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{286:function(e,a,t){"use strict";var n=t(21),l=t(1),r=t.n(l),c=(t(39),t(55)),i=t(369),o=t(370),s=t(70),m=t(35),u=t.n(m),p={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"},h=function(e){var a,t=e.tag,l=e.className,c=e.type,i=Object(n.a)(e,["tag","className","type"]),o=u()(Object(s.a)({},c,!!c),l);return a=t||(!t&&p[c]?p[c]:"p"),r.a.createElement(a,Object.assign({},i,{className:o}))};h.defaultProps={type:"p"};var E=h,g=c.a.create("page"),b=function(e){var a=e.title,t=e.breadcrumbs,l=e.tag,c=e.className,s=e.children,m=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),u=g.b("px-5","p-5",c);return r.a.createElement(l,Object.assign({className:u},m),r.a.createElement("div",{className:g.e("header")},a&&"string"===typeof a?r.a.createElement(E,{type:"h4",className:g.e("title")},a):a,t&&r.a.createElement(i.a,{className:g.e("breadcrumb")},r.a.createElement(o.a,null,"Home"),t.length&&t.map(function(e,a){var t=e.name,n=e.active;return r.a.createElement(o.a,{key:a,active:n},t)}))),s)};b.defaultProps={tag:"div",title:""};a.a=b},311:function(e,a,t){"use strict";t.d(a,"a",function(){return c});var n=t(1),l=t.n(n),r=t(125);function c(e){return l.a.createElement(r.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}},328:function(e,a,t){"use strict";var n=t(1),l=t.n(n),r=t(236),c=t(239),i=t(312),o=t(313);a.a=function(){return l.a.createElement(r.a,{className:"cr-search-form",onSubmit:function(e){return e.preventDefault()}},l.a.createElement(i.a,null,l.a.createElement(o.a,null,l.a.createElement(c.a,{type:"search",placeholder:"Search by Patient Name, Hospital Number ",className:"cr-search-form__input pull-right"}))))}},329:function(e,a,t){"use strict";t.d(a,"a",function(){return M});var n=t(288),l=t(1),r=t.n(l),c=t(123),i=t(57),o=t(330),s=t(580),m=t(582),u=t(579),p=t(583),h=t(603),E=t(581),g=t(190),b=t(275),d=t(353),f=t.n(d),v=t(355),y=t.n(v),N=t(354),P=t.n(N),k=t(352),w=t.n(k),O=Object(c.a)(function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}});function j(e){var a=O(),t=Object(i.a)(),n=e.count,l=e.page,c=e.rowsPerPage,o=e.onChangePage;return r.a.createElement("div",{className:a.root},r.a.createElement(b.a,{onClick:function(e){o(e,0)},disabled:0===l,"aria-label":"first page"},"rtl"===t.direction?r.a.createElement(w.a,null):r.a.createElement(f.a,null)),r.a.createElement(b.a,{onClick:function(e){o(e,l-1)},disabled:0===l,"aria-label":"previous page"},"rtl"===t.direction?r.a.createElement(P.a,null):r.a.createElement(y.a,null)),r.a.createElement(b.a,{onClick:function(e){o(e,l+1)},disabled:l>=Math.ceil(n/c)-1,"aria-label":"next page"},"rtl"===t.direction?r.a.createElement(y.a,null):r.a.createElement(P.a,null)),r.a.createElement(b.a,{onClick:function(e){o(e,Math.max(0,Math.ceil(n/c)-1))},disabled:l>=Math.ceil(n/c)-1,"aria-label":"last page"},"rtl"===t.direction?r.a.createElement(f.a,null):r.a.createElement(w.a,null)))}function C(e,a,t){return{name:e,calories:a,fat:t}}var S=[C("Cupcake",305,3.7),C("Donut",452,25),C("Eclair",262,16),C("Frozen yoghurt",159,6),C("Gingerbread",356,16),C("Honeycomb",408,3.2),C("Ice cream sandwich",237,9),C("Jelly Bean",375,0),C("KitKat",518,26),C("Lollipop",392,.2),C("Marshmallow",318,0),C("Nougat",360,19),C("Oreo",437,18)].sort(function(e,a){return e.calories<a.calories?-1:1}),x=Object(c.a)({table:{minWidth:500}});function M(){var e=x(),a=r.a.useState(0),t=Object(n.a)(a,2),l=t[0],c=t[1],i=r.a.useState(5),b=Object(n.a)(i,2),d=b[0],f=b[1],v=d-Math.min(d,S.length-l*d);return r.a.createElement(u.a,{component:g.a},r.a.createElement(o.a,{className:e.table,"aria-label":"custom pagination table"},r.a.createElement(s.a,null,(d>0?S.slice(l*d,l*d+d):S).map(function(e){return r.a.createElement(E.a,{key:e.name},r.a.createElement(m.a,{component:"th",scope:"row"},e.name),r.a.createElement(m.a,{align:"right"},e.calories),r.a.createElement(m.a,{align:"right"},e.fat))}),v>0&&r.a.createElement(E.a,{style:{height:53*v}},r.a.createElement(m.a,{colSpan:6}))),r.a.createElement(p.a,null,r.a.createElement(E.a,null,r.a.createElement(h.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],colSpan:3,count:S.length,rowsPerPage:d,page:l,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,a){c(a)},onChangeRowsPerPage:function(e){f(parseInt(e.target.value,10)),c(0)},ActionsComponent:j})))))}},584:function(e,a,t){"use strict";t.r(a);var n=t(286),l=t(1),r=t.n(l),c=t(320),i=t(236),o=t(312),s=t(313),m=t(296),u=t(123),p=t(328),h=t(311),E=t(329),g=Object(u.a)(function(e){return{card:{margin:e.spacing(20),display:"flex",flexDirection:"column",alignItems:"center"}}});a.default=function(){var e=g();return r.a.createElement(n.a,{title:"Vital Signs"},r.a.createElement(c.a,{color:"primary"},r.a.createElement(m.c,{size:"30",className:" text-dark"}),"  ","  ","Note : Only checked in Patients can be search here"),r.a.createElement(o.a,{className:e.cardBottom},r.a.createElement(s.a,null,r.a.createElement(h.a,null,"Basic Information"),r.a.createElement("br",null),r.a.createElement(i.a,null,r.a.createElement(p.a,null)),r.a.createElement("br",null),r.a.createElement(E.a,null))))}}}]);
//# sourceMappingURL=22.a71fb029.chunk.js.map