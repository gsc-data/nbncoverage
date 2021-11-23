(this.webpackJsonpnbncoverage=this.webpackJsonpnbncoverage||[]).push([[0],{104:function(e,t){},119:function(e){e.exports=JSON.parse('{"labels":["Greater Sydney","Western City","Central City","Eastern City","North","South"],"datasets":[{"label":"Best","data":[11.67,18.79,24.25,7.06,3.54,4.11]},{"label":"Good","data":[29.38,15.64,18.6,40.6,28.61,44.34]},{"label":"Intermediate","data":[12.71,30.02,11.49,6.13,9.57,5.63]},{"label":"Others","data":[46.24,35.56,45.67,46.2,58.28,45.92]}]}')},180:function(e,t,n){},181:function(e,t,n){},183:function(e,t,n){},204:function(e,t){},208:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n.n(r),i=n(131),c=n.n(i),o=(n(180),n(181),n(13)),s=n(2),l=n(136),d=n(169),u=n(119),b=n(27),f={Best:[27,158,119],Good:[217,95,2],Intermediate:[117,112,179],Others:[166,206,227]},j={};for(var p in f)j[p]="rgba(".concat(f[p].join(),",1)");var h={};for(var g in f)h[g]="rgba(".concat(f[g].join(),",0.9)");u.datasets=u.datasets.map((function(e){var t=e.label.split(" ")[0];return Object(s.a)(Object(s.a)({},e),{},{label:"".concat(e.label," (%)"),backgroundColor:h[t],borderColor:j[t],borderWidth:1})})),l.b.register(d.a);var x={indexAxis:"y",maintainAspectRatio:!1,elements:{bar:{borderWidth:1}},responsive:!0,scales:{x:{ticks:{callback:function(e,t,n){return e+"%"}}},yAxes:{ticks:{font:{weight:function(e){return"Greater Sydney"===e.tick.label?"bold":"normal"}}}}},plugins:{datalabels:{formatter:function(e,t){return e>10?Math.round(e,0)+"%":""},anchor:"end",align:"start",font:{size:"8px",weight:"bold"},color:function(e){var t=e.dataset.backgroundColor,n=t.slice(5,t.length-5).split(",").map((function(e){return parseInt(e)})),r=Object(o.a)(n,3),a=r[0],i=r[1],c=r[2];return"rgb(".concat(Math.round(.5*a,0),",").concat(Math.round(.5*i,0),",").concat(Math.round(.5*c,0),")")}},legend:{display:!1}}},m=function(){return Object(b.jsx)("div",{style:{height:"400px"},children:Object(b.jsx)(l.a,{data:u,options:x})})},y=(n(183),function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{id:"legend",style:{fontFamily:"Roboto, sans-serif"},children:[Object(b.jsx)("h4",{children:" LEGEND"}),Object(b.jsx)("div",{className:"legend-content",children:Object.keys(f).map((function(e){return Object(b.jsxs)("li",{children:[" ",Object(b.jsx)("div",{className:"circle",style:{backgroundColor:"rgba(".concat(f[e].join(),")")}}),e]})}))})]})})}),O=function(){return Object(b.jsxs)("div",{className:"layer-selector",style:{fontFamily:"Roboto, sans-serif"},children:[Object(b.jsx)("h3",{children:" NBN coverage across Greater Sydney Region"}),Object(b.jsx)("p",{style:{fontSize:"12px",color:"gray",lineHeight:"1.4em"},children:"Performance is derived from the type of network infrastructure. FTTP is classified as Best, FTTB and FTTC as Good, FTTN as Intermediate, and HFC, Fixed-wireless and Satellite as Others."}),Object(b.jsx)(y,{}),Object(b.jsx)("div",{style:{marginTop:"10px",fontSize:"small"},children:Object(b.jsx)("b",{children:"% of dwellings connected to NBN network"})}),Object(b.jsx)(m,{}),Object(b.jsx)("div",{children:Object(b.jsxs)("span",{style:{fontSize:"8px"},children:["Source: GSC Analysis 2021,",Object(b.jsx)("a",{href:"https://data.gov.au/dataset/ds-dga-ed264f72-5fdf-4a54-8381-d35a10c7c85a/details?q=nbn",children:"ACMA"}),", ABS,DPIE"]})}),Object(b.jsxs)("span",{style:{fontSize:"10px",color:"gray",lineHeight:"1.1em"},children:["Please contact ",Object(b.jsx)("a",{href:"mailto: data@gsc.nsw.gov.au",children:"data@gsc.nsw.gov.au"})," for more info"]})]})},v=n(17),S=n(12),C=n.n(S),w=n(19),k=n(75),T=n(225),N=n(24),F=n(224),I=n(167),z=n(164),A=n(226),E=n(158),M=n.n(E),P={latitude:-33.878197,longitude:151.148648,zoom:10};Object(k.d)({username:"gsc-admin",apiKey:"default_public"});var _=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],i="SELECT ST_X(ST_Centroid(the_geom)) x, ST_Y(ST_CENTROID(the_geom)) y,district from districtboundary";Object(r.useEffect)((function(){(function(){var e=Object(w.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("https://gsc-admin.carto.com/api/v2/sql?q=".concat(encodeURIComponent(i)));case 2:return t=e.sent,a(t.data.rows.map((function(e){e.district,e.x,e.y;return{text:e.district,position:[e.x,e.y]}}))),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]);var c=new I.a({id:"text-layer",data:n,pickable:!1,sizeMinPixels:2,sizeMaxPixels:10,getSize:32,getAngle:0,getTextAnchor:"middle",getAlignmentBaseline:"center",getBackgroundColor:[255,255,255]}),s=new T.a({id:"access-uni",type:N.f.QUERY,data:"select the_geom_webmercator, network_infrastructure as type, quality from nbn_performance",getFillColor:function(e){return"Others"===e.properties.quality?[].concat(Object(v.a)(f[e.properties.quality]),[100]):[].concat(Object(v.a)(f[e.properties.quality]),[200])},getLineColor:function(e){return f[e.properties.quality]},lineWidthMinPixels:.1,pickable:!0}),l=new T.a({id:"district",type:N.f.QUERY,data:'select the_geom_webmercator, district from "gsc-admin".districtboundary ',getFillColor:[0,0,0,0],getLineColor:[35,35,35],lineWidthMinPixels:1.2,pickable:!1});return Object(b.jsx)("div",{children:Object(b.jsx)(A.a,{width:"100%",height:"100%",initialViewState:P,getTooltip:function(e){var t=e.object;if(!t)return!1;var n=t.properties,r=n.type,a=n.quality;return{html:"<div>Network infrastructure: ".concat(r,"</div>\n        <div>Performance: ").concat(a,"</div>"),style:{fontSize:"0.8em"}}},controller:!0,layers:[s,l,c],children:Object(b.jsx)(z.a,{reuseMaps:!0,mapStyle:F.a.PRISTON,mapboxApiAccessToken:"pk.eyJ1IjoiYnNuYXlhbiIsImEiOiJja3Ewczd3MW4wN3Z3MnVvNDNsenlzNnFsIn0.f8nk8yrxIeCKOlzIy1b-Pg",preventStyleDiffing:!0})})})};var B=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(_,{}),Object(b.jsx)(O,{})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,231)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root")),q()}},[[208,1,2]]]);
//# sourceMappingURL=main.0b7b4d83.chunk.js.map