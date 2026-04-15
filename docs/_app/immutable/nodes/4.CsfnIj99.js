import"../chunks/DsnmJJEf.js";import{al as _,Z as g,$ as D,_ as d,X,G as c,an as Z,W as V,ag as K,Y as H,ad as ie,J as F,aE as Ce,am as O,be as Se,I as Te}from"../chunks/BtEyuRtA.js";import{b as v,f as w,c as I,t as De}from"../chunks/DrGf2wc-.js";import{a as A,f as Ye,e as ue}from"../chunks/DaEOzl3g.js";import{e as B,i as U,b as ke,s as me,c as Ae,d as Ie}from"../chunks/BBX0twoN.js";import{e as oe}from"../chunks/DppDIUNi.js";import{c as re}from"../chunks/CsstoYUM.js";import{s as se,p as L}from"../chunks/D5b4Qpkx.js";import{s as fe}from"../chunks/iRFT3TRO.js";import{b as Xe,i as ee}from"../chunks/SctPr9OF.js";import{h as J,c as Ee}from"../chunks/C7lTbO0M.js";import{b as Me}from"../chunks/D8IDqqW6.js";import"../chunks/DlOzM7pa.js";var Re=w('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p> <p><a href="ui">BitsUI styled components</a></p></section>');function je(a){var e=Re();v(a,e)}var Le=w('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function Ze(a){var e=Le();v(a,e)}var Fe=w('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function Be(a){const e=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var t=Fe(),o=_(g(t),2);B(o,17,()=>e,U,(r,s)=>{let m=()=>c(s).tag,h=()=>c(s).text;var y=I(),l=D(y);oe(l,m,!1,(i,n)=>{var u=De();X(()=>A(u,h())),v(n,u)}),v(r,y)}),d(t),v(a,t)}var Ue=w("<p> </p>");function qe(a,e){var t=Ue(),o=g(t);d(t),X(()=>A(o,`I am component A and my favorite number is ${e.number??""}.`)),v(a,t)}var Oe=w("<p> </p>");function Ne(a,e){var t=Oe(),o=g(t);d(t),X(()=>A(o,`I am component B and my name is ${e.name??""}.`)),v(a,t)}var We=w('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function Je(a){const e={A:qe,B:Ne},t=[{component:"A",number:42},{component:"B",name:"Russell"}];var o=We(),r=_(g(o),2);B(r,17,()=>t,U,(s,m)=>{const h=Z(()=>e[c(m).component]);var y=I(),l=D(y);re(l,()=>c(h),(i,n)=>{n(i,se(()=>c(m)))}),v(s,y)}),d(o),v(a,o)}var Pe=w("<div><!></div>");function Ge(a,e){V(e,!0);let t=L(e,"root",3,null),o=L(e,"top",3,0),r=L(e,"bottom",3,0),s=L(e,"increments",3,100),m=L(e,"value",15,void 0),h=[],y=[],l=[],i=[],n;function u(){let p=0,C=0;for(let S=0;S<h.length;S++)h[S]>p&&(p=h[S],C=S);p>0?m(C):m(void 0)}function x(p,C){const S=q=>{q[0].isIntersecting;const z=q[0].intersectionRatio;h[C]=z,u()},j=o()?o()*-1:0,R=r()?r()*-1:0,N=`${j}px 0px ${R}px 0px`,W={root:t(),rootMargin:N,threshold:y};i[C]&&i[C].disconnect();const Y=new IntersectionObserver(S,W);Y.observe(p),i[C]=Y}function b(){l.length&&l.forEach(x)}K(()=>{for(let p=0;p<s()+1;p++)y.push(p/s());l=n.querySelectorAll(":scope > *:not(iframe)"),b()}),K(()=>{o(),r(),b()});var f=Pe(),T=g(f);fe(T,()=>e.children??ie),d(f),Xe(f,p=>n=p,()=>n),v(a,f),H()}var Ke=w('<div><p class="svelte-1sxgmm9"> </p></div>'),Ve=w('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function He(a){let e=O(void 0);var t=Ve(),o=g(t),r=_(g(o)),s=g(r,!0);d(r),d(o);var m=_(o,4);Ge(m,{get value(){return c(e)},set value(h){F(e,h,!0)},children:(h,y)=>{var l=I(),i=D(l);B(i,16,()=>[0,1,2,3,4],U,(n,u,x)=>{const b=Z(()=>c(e)===x);var f=Ke();let T;var p=g(f),C=g(p,!0);d(p),d(f),X(()=>{T=ke(f,1,"step svelte-1sxgmm9",null,T,{active:c(b)}),A(C,u)}),v(n,f)}),v(h,l)},$$slots:{default:!0}}),Ce(2),d(t),X(()=>A(s,c(e)||"-")),v(a,t)}const ze=`{
  "ignore": [],
  "slides": [
    {
      "id": "cold",
      "body": [
        {
          "type": "text",
          "value": "The New York Public Library has an archive of menus that tracks the transformation of dining and society in America from the 1880s to the 1920s."
        },
        {
          "type": "text",
          "value": "In this crucial period, we can see how the American restaurant was born – and how much, or how little, we’ve changed in the ensuing 100 years."
        }
      ]
    },
    {
      "id": "buttolph",
      "body": [
        {
          "type": "text",
          "value": "The collection was sourced and donated by Frank E. Buttolph, who spent decades preserving menus as a record of her time. TK TK biographical."
        }
      ]
    },
    {
      "id": "side",
      "body": [
        {
          "type": "text",
          "value": "A menu describes what a restaurant serves – but a menu also describes <i>who</i> is being served."
        },
        {
          "type": "text",
          "value": "Beyond documenting the gastronomic preferences of a time and place, menus also reflect the class, gender, political, technological, and environmental shifts of history."
        },
        {
          "type": "text",
          "value": "Does a menu list prices? Offer a strict order of courses or hundreds of dishes? Describe the operation of the dining room or merely list dishes, and in a foreign language? Hew to one cuisine or traverse the globe?"
        }
      ]
    },
    {
      "id": "tk",
      "body": [
        {
          "type": "text",
          "value": "Get enough menus together, and they can tell not just a culinary history, but a social one."
        }
      ]
    },
    {
      "id": "illustration",
      "body": [
        {
          "type": "text",
          "value": "I’ve rifled through the archive to tell you that story in ten dishes."
        },
        {
          "type": "text",
          "value": "Your table is ready – right this way."
        }
      ]
    },
    {
      "id": "title",
      "body": [
        {
          "type": "text",
          "value": "TK TK"
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000000068.png",
      "layout": "fit-height",
      "topLabel": "Test XYZ",
      "body": [
        {
          "type": "text",
          "value": "We begin with oysters, pardon me – <i>huitres</i> – and potages, the soup. Perhaps you’d like the consomme de volaille, a la Victoria or Consomme Chatelaine? But <b>Bisque d’ecrevisses</b> or the terrapin would also be an excellent choice. Whatever you choose, you can be certain that it will approach, as best as possible, the finest French cuisine that 19th Century America can muster. It will be convincing: after all, you will order the French dish in French from a French, and your chef there in New York, will have likely been imported from France – or at least somewhere, over there."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000000068.png",
      "bgZoom": "1",
      "focalX": "490",
      "focalY": "300",
      "anchorX": "0.5",
      "anchorY": "0.2",
      "annotationX": "490",
      "annotationY": "300",
      "topLabel": "Test XYZ",
      "body": [
        {
          "type": "text",
          "value": "The first true restaurant dining in America – not just as places that served a customer food on demand, but as spaces for pleasures beyond function – answered to society’s new world elite, a class that sought to emulate what they saw as the height of culture and sophistication: the European, and particularly the French, aristocracy."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000000068.png",
      "bgZoom": "1",
      "focalX": "490",
      "focalY": "300",
      "anchorX": "0.5",
      "anchorY": "0.2",
      "topLabel": "Test XYZ",
      "body": [
        {
          "type": "text",
          "value": "Soup tended to be the first true course of these decadent meals, which would then proceed to 8, 10, or more courses of French classics or, possibly, other dishes simply given a European-sounding name."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000000068.png",
      "bgZoom": "1",
      "focalX": "490",
      "focalY": "300",
      "anchorX": "0.5",
      "anchorY": "0.2",
      "annotationX": "490",
      "annotationY": "300",
      "topLabel": "Test XYZ",
      "body": [
        {
          "type": "text",
          "value": "Without a true nobility in America, these restaurants were one of the ways the post-Civil War elite symbolically distinguished themselves from the masses. Language was one aspect of gatekeeping – luxury was another."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000000068.png",
      "bgZoom": "1",
      "focalX": "490",
      "focalY": "300",
      "anchorX": "0.5",
      "anchorY": "0.2",
      "annotationX": "490",
      "annotationY": "300",
      "topLabel": "Test XYZ",
      "body": [
        {
          "type": "text",
          "value": "While it has a humble place now, celery was among a number of “relishes” that took a pride of place in the aristocratic menu and on the aristocratic table. After finishing their soup, a diner may reach out to take a stalk of celery proudly displayed in a decorative crystal celery vase."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000000068.png",
      "bgZoom": "1",
      "focalX": "490",
      "focalY": "300",
      "anchorX": "0.5",
      "anchorY": "0.2",
      "annotationX": "490",
      "annotationY": "300",
      "topLabel": "Test XYZ",
      "body": [
        {
          "type": "text",
          "value": "Relishes like celery, alongside sorbets and punches inserted later in the meal, functioned as part of an intricately ordered meal that distinguished the aristocratic restaurant as distinctly oriented to the aesthetic more than the practical. George G. Foster, a writer at the time, noted that this kind of meal  “is not merely a quantity of food deposited in the stomach, but is in every sense and to all the senses a great work of art.”(70-71)"
        }
      ]
    }
  ]
}`;var Qe=w("<p></p>"),$e=w('<details><summary></summary> <div class="content"><!></div></details>');function et(a,e){let t=Z(()=>typeof e.content=="string"),o=Z(()=>e.open==="true");var r=$e(),s=g(r);J(s,()=>e.summary,!0),d(s);var m=_(s,2),h=g(m);{var y=i=>{var n=I(),u=D(n);J(u,()=>e.content),v(i,n)},l=i=>{var n=I(),u=D(n);B(u,17,()=>e.content,U,(x,b)=>{let f=()=>c(b).value;var T=Qe();J(T,f,!0),d(T),v(x,T)}),v(i,n)};ee(h,i=>{c(t)?i(y):i(l,-1)})}d(m),d(r),X(()=>{r.open=c(o),me(r,"name",e.name)}),v(a,r)}var tt=w("<li></li>"),nt=w("<ul></ul>");function at(a,e){var t=nt();B(t,21,()=>e.li,U,(o,r)=>{var s=tt();J(s,()=>c(r),!0),d(s),v(o,s)}),d(t),v(a,t)}var ot=w("<li></li>"),rt=w("<ol></ol>");function st(a,e){var t=rt();B(t,21,()=>e.li,U,(o,r)=>{var s=ot();J(s,()=>c(r),!0),d(s),v(o,s)}),d(t),v(a,t)}var it=w("<p></p>"),lt=w("<section><!></section>");function ct(a,e){V(e,!0);const t={details:et,ul:at,ol:st};let o=L(e,"components",19,()=>({})),r=L(e,"body",19,()=>[]);var s=I(),m=D(s);B(m,17,r,U,(h,y)=>{let l=()=>c(y).section,i=()=>c(y).content;const n=Z(()=>l().toLowerCase().replace(/[^a-z0-9]/g,"")),u=Z(()=>o()[l()]);var x=lt(),b=g(x);{var f=p=>{var C=I(),S=D(C);re(S,()=>c(u),(j,R)=>{R(j,se(i))}),v(p,C)},T=p=>{var C=I(),S=D(C);B(S,17,i,U,(j,R,N,W)=>{let Y=()=>c(R).type,q=()=>c(R).value;const z=Z(()=>o()[Y()]||t[Y()]),pe=Z(()=>typeof q()=="string");var le=I(),ge=D(le);{var ye=E=>{var M=I(),P=D(M);re(P,()=>c(z),(Q,$)=>{$(Q,se(q))}),v(E,M)},be=E=>{var M=it();J(M,q,!0),d(M),v(E,M)},_e=E=>{var M=I(),P=D(M);oe(P,Y,!1,(Q,$)=>{var ce=I(),xe=D(ce);J(xe,q),v($,ce)}),v(E,M)},we=E=>{var M=I(),P=D(M);oe(P,Y,!1,(Q,$)=>{Ae(Q,()=>({...q()}))}),v(E,M)};ee(ge,E=>{c(z)?E(ye):Y()==="text"?E(be,1):c(pe)?E(_e,2):E(we,-1)})}v(j,le)}),v(p,C)};ee(b,p=>{c(u)?p(f):p(T,-1)})}d(x),X(()=>me(x,"id",c(n))),v(h,x)}),v(a,s),H()}var ut=w('<p> </p> <progress max="100"></progress>',1);function vt(a,e){let t=L(e,"label",3,"A"),o=L(e,"value",3,0);var r=ut(),s=D(r),m=g(s,!0);d(s);var h=_(s,2);X(()=>{A(m,t()),Ie(h,o())}),v(a,r)}var dt=w('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function mt(a,e){V(e,!0);const{body:t}=Ee,o={Test:vt};var r=dt(),s=_(g(r),2),m=g(s),h=g(m,!0);d(m),d(s);var y=_(s,2);ct(y,{get components(){return o},get body(){return t}}),d(r),X(l=>A(h,l),[()=>ze.replace(/\t/g," ")]),v(a,r),H()}const ft=(a,e=ie)=>{var t=ht(),o=g(t),r=g(o,!0);d(o);var s=_(o,2),m=g(s,!0);d(s),d(t),X(()=>{A(r,e().name),A(m,e().age)}),v(a,t)};var ht=w('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),pt=w('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function gt(a,e){V(e,!0),L(e,"age",3,30);const t=[{name:"John",age:30},{name:"Jill",age:45}];let o=O(0),r=Z(()=>c(o)*2),s=Z(()=>c(o)*2),m=O(0);K(()=>{F(m,c(o)*2)});var h=pt(),y=_(D(h),4),l=_(y,2),i=g(l);d(l);var n=_(l,2),u=g(n);d(n);var x=_(n,2),b=g(x);d(x);var f=_(x,4),T=g(f);fe(T,()=>e.children??ie),d(f);var p=_(f,4),C=_(p,4);B(C,21,()=>t,U,(S,j)=>{ft(S,()=>c(j))}),d(C),X(()=>{A(i,`${c(o)??""} doubled is ${c(r)??""} (derived)`),A(u,`${c(o)??""} doubled is ${c(s)??""} (derived by)`),A(b,`${c(o)??""} doubled is ${c(m)??""} ($effect)`)}),ue("click",y,()=>Se(o)),ue("click",p,()=>e.random(Math.floor(Math.random()*10))),v(a,h),H()}Ye(["click"]);var ve={},te={},ne=34,G=10,ae=13;function he(a){return new Function("d","return {"+a.map(function(e,t){return JSON.stringify(e)+": d["+t+'] || ""'}).join(",")+"}")}function yt(a,e){var t=he(a);return function(o,r){return e(t(o),r,a)}}function de(a){var e=Object.create(null),t=[];return a.forEach(function(o){for(var r in o)r in e||t.push(e[r]=r)}),t}function k(a,e){var t=a+"",o=t.length;return o<e?new Array(e-o+1).join(0)+t:t}function bt(a){return a<0?"-"+k(-a,6):a>9999?"+"+k(a,6):k(a,4)}function _t(a){var e=a.getUTCHours(),t=a.getUTCMinutes(),o=a.getUTCSeconds(),r=a.getUTCMilliseconds();return isNaN(a)?"Invalid Date":bt(a.getUTCFullYear())+"-"+k(a.getUTCMonth()+1,2)+"-"+k(a.getUTCDate(),2)+(r?"T"+k(e,2)+":"+k(t,2)+":"+k(o,2)+"."+k(r,3)+"Z":o?"T"+k(e,2)+":"+k(t,2)+":"+k(o,2)+"Z":t||e?"T"+k(e,2)+":"+k(t,2)+"Z":"")}function wt(a){var e=new RegExp('["'+a+`
\r]`),t=a.charCodeAt(0);function o(n,u){var x,b,f=r(n,function(T,p){if(x)return x(T,p-1);b=T,x=u?yt(T,u):he(T)});return f.columns=b||[],f}function r(n,u){var x=[],b=n.length,f=0,T=0,p,C=b<=0,S=!1;n.charCodeAt(b-1)===G&&--b,n.charCodeAt(b-1)===ae&&--b;function j(){if(C)return te;if(S)return S=!1,ve;var N,W=f,Y;if(n.charCodeAt(W)===ne){for(;f++<b&&n.charCodeAt(f)!==ne||n.charCodeAt(++f)===ne;);return(N=f)>=b?C=!0:(Y=n.charCodeAt(f++))===G?S=!0:Y===ae&&(S=!0,n.charCodeAt(f)===G&&++f),n.slice(W+1,N-1).replace(/""/g,'"')}for(;f<b;){if((Y=n.charCodeAt(N=f++))===G)S=!0;else if(Y===ae)S=!0,n.charCodeAt(f)===G&&++f;else if(Y!==t)continue;return n.slice(W,N)}return C=!0,n.slice(W,b)}for(;(p=j())!==te;){for(var R=[];p!==ve&&p!==te;)R.push(p),p=j();u&&(R=u(R,T++))==null||x.push(R)}return x}function s(n,u){return n.map(function(x){return u.map(function(b){return i(x[b])}).join(a)})}function m(n,u){return u==null&&(u=de(n)),[u.map(i).join(a)].concat(s(n,u)).join(`
`)}function h(n,u){return u==null&&(u=de(n)),s(n,u).join(`
`)}function y(n){return n.map(l).join(`
`)}function l(n){return n.map(i).join(a)}function i(n){return n==null?"":n instanceof Date?_t(n):e.test(n+="")?'"'+n.replace(/"/g,'""')+'"':n}return{parse:o,parseRows:r,format:m,formatBody:h,formatRows:y,formatRow:l,formatValue:i}}var xt=wt(","),Ct=xt.parse;const St=(a,e)=>{let t=O(Te(a)),o=O(null),r=O(!0),s=O(void 0);const m=(l=!0)=>{F(r,l,!0),l===!0&&(F(s,null),F(o,null))},h=async()=>{try{const l=await fetch(c(t),e);if(!l.ok)throw new Error(`Unexpected error occurred (status ${l.status})`);let i;if(c(t).includes(".csv")){const n=await l.text();i=Ct(n)}else i=await l.json();return[null,i]}catch(l){const{errorMessage:i="Unexpected error eccurred"}=l;return[i,null]}},y=async l=>{m(!0);const[i,n]=await h();if(l===c(t)){if(i){m(!1),F(s,i,!0);return}m(!1),F(o,n,!0)}};return K(()=>{y(c(t))}),{get data(){return c(o)},get loading(){return c(r)},get error(){return c(s)},get url(){return c(t)},set url(l){c(t)!==l&&F(t,l,!0)}}};var Tt=w("<p>loading data...</p>"),Dt=w("<p> </p>"),Yt=w("<p>data loaded</p> <pre> </pre>",1),kt=w('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function At(a,e){V(e,!0);const t=`${Me}/assets/demo/test.csv`,o=St(t);K(()=>{});var r=kt(),s=_(g(r),2),m=g(s);{var h=i=>{var n=Tt();v(i,n)},y=i=>{var n=Dt(),u=g(n);d(n),X(()=>A(u,`error: ${o.error??""}`)),v(i,n)},l=i=>{var n=Yt(),u=_(D(n),2),x=g(u,!0);d(u),X(b=>A(x,b),[()=>JSON.stringify(o.data,null,2)]),v(i,n)};ee(m,i=>{o.loading?i(h):o.error?i(y,1):i(l,-1)})}d(s),d(r),v(a,r),H()}var It=w('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function Xt(a){let e=O(0);function t(u){console.log(u)}var o=It(),r=_(g(o),2);je(r);var s=_(r,2);Ze(s);var m=_(s,2);Be(m);var h=_(m,2);Je(h);var y=_(h,2);mt(y,{});var l=_(y,2);At(l,{});var i=_(l,2);He(i);var n=_(i,2);gt(n,{random:t,get value(){return c(e)},set value(u){F(e,u,!0)}}),d(o),v(a,o)}function Jt(a){Xt(a)}export{Jt as component};
