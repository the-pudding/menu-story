import"../chunks/DsnmJJEf.js";import{al as _,Z as g,$ as k,_ as v,X as E,G as c,an as L,W as H,ag as V,Y as K,ad as ie,J as O,aE as Ce,am as W,bi as Se,I as De}from"../chunks/C22nnEDb.js";import{b as d,f as w,c as Y,t as ke}from"../chunks/BiexGjK5.js";import{b as T,g as Ae,f as ue}from"../chunks/CC-I0Egx.js";import{e as U,i as q,b as Ie,s as he,c as Te,d as Ye}from"../chunks/vreypQoA.js";import{e as oe}from"../chunks/Bd_JMBhL.js";import{c as re}from"../chunks/9h9p49DC.js";import{s as se,p as N}from"../chunks/BvCBrjWE.js";import{s as me}from"../chunks/tXVS1ob-.js";import{b as Ee,i as ee}from"../chunks/BrYhcFmw.js";import{h as J,c as Fe}from"../chunks/BAgjpm3j.js";import{b as Me}from"../chunks/8MQy5Fp_.js";import"../chunks/DlOzM7pa.js";var Re=w('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p> <p><a href="ui">BitsUI styled components</a></p></section>');function je(a){var e=Re();d(a,e)}var Ne=w('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function Le(a){var e=Ne();d(a,e)}var Oe=w('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function Ue(a){const e=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var t=Oe(),o=_(g(t),2);U(o,17,()=>e,q,(r,s)=>{let h=()=>c(s).tag,f=()=>c(s).text;var y=Y(),l=k(y);oe(l,h,!1,(i,n)=>{var u=ke();E(()=>T(u,f())),d(n,u)}),d(r,y)}),v(t),d(a,t)}var qe=w("<p> </p>");function Be(a,e){var t=qe(),o=g(t);v(t),E(()=>T(o,`I am component A and my favorite number is ${e.number??""}.`)),d(a,t)}var We=w("<p> </p>");function Xe(a,e){var t=We(),o=g(t);v(t),E(()=>T(o,`I am component B and my name is ${e.name??""}.`)),d(a,t)}var Ze=w('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function Je(a){const e={A:Be,B:Xe},t=[{component:"A",number:42},{component:"B",name:"Russell"}];var o=Ze(),r=_(g(o),2);U(r,17,()=>t,q,(s,h)=>{const f=L(()=>e[c(h).component]);var y=Y(),l=k(y);re(l,()=>c(f),(i,n)=>{n(i,se(()=>c(h)))}),d(s,y)}),v(o),d(a,o)}var Pe=w("<div><!></div>");function Ge(a,e){H(e,!0);let t=N(e,"root",3,null),o=N(e,"top",3,0),r=N(e,"bottom",3,0),s=N(e,"increments",3,100),h=N(e,"value",15,void 0),f=[],y=[],l=[],i=[],n;function u(){let p=0,C=0;for(let S=0;S<f.length;S++)f[S]>p&&(p=f[S],C=S);p>0?h(C):h(void 0)}function x(p,C){const S=B=>{B[0].isIntersecting;const z=B[0].intersectionRatio;f[C]=z,u()},j=o()?o()*-1:0,R=r()?r()*-1:0,X=`${j}px 0px ${R}px 0px`,Z={root:t(),rootMargin:X,threshold:y};i[C]&&i[C].disconnect();const A=new IntersectionObserver(S,Z);A.observe(p),i[C]=A}function b(){l.length&&l.forEach(x)}V(()=>{for(let p=0;p<s()+1;p++)y.push(p/s());l=n.querySelectorAll(":scope > *:not(iframe)"),b()}),V(()=>{o(),r(),b()});var m=Pe(),D=g(m);me(D,()=>e.children??ie),v(m),Ee(m,p=>n=p,()=>n),d(a,m),K()}var Ve=w('<div><p class="svelte-1sxgmm9"> </p></div>'),He=w('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function Ke(a){let e=W(void 0);var t=He(),o=g(t),r=_(g(o)),s=g(r,!0);v(r),v(o);var h=_(o,4);Ge(h,{get value(){return c(e)},set value(f){O(e,f,!0)},children:(f,y)=>{var l=Y(),i=k(l);U(i,16,()=>[0,1,2,3,4],q,(n,u,x)=>{const b=L(()=>c(e)===x);var m=Ve();let D;var p=g(m),C=g(p,!0);v(p),v(m),E(()=>{D=Ie(m,1,"step svelte-1sxgmm9",null,D,{active:c(b)}),T(C,u)}),d(n,m)}),d(f,l)},$$slots:{default:!0}}),Ce(2),v(t),E(()=>T(s,c(e)||"-")),d(a,t)}const ze=`{
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
          "value": "In this crucial period, we can see the modern American restaurant emerge, both from a hodgepodge of predecessors and with a new society emerging itself. This kind of establishment offered something beyond the taverns of the 18th century where food was secondary, and something more accessible than the early restaurants for elites in the mid-19th century where food was exalted."
        }
      ]
    },
    {
      "id": "buttolph",
      "body": [
        {
          "type": "text",
          "value": "We can see the origins of restaurants with appealing and affordable food for all kinds of tastes – what we expect today –  and how much, or how little, our dining has changed in the ensuing 100 years."
        },
        {
          "type": "text",
          "value": "Over 25,000 menus were sourced and donated by Frank E. Buttolph (pictured above), who spent decades preserving menus as a record for future generations of the culinary and social history of her time."
        }
      ]
    },
    {
      "id": "side",
      "body": [
        {
          "type": "text",
          "value": "A menu describes what a restaurant serves—but a menu also describes <i>who</i> is being served."
        },
        {
          "type": "text",
          "value": "They reflect the class, gender, political, technological, and environmental shifts of history."
        },
        {
          "type": "text",
          "value": "Does a menu list prices? Offer a strict order of courses or hundreds of dishes? Describe the operation of the dining room or merely list dishes, and in a foreign language? Hew to one cuisine or traverse the globe?"
        }
      ]
    },
    {
      "id": "illustration",
      "body": [
        {
          "type": "text",
          "value": "Get enough menus together, and they can tell not just a culinary history, but a social one."
        },
        {
          "type": "text",
          "value": "I’ve rifled through the archive to tell you that story in <b>ten dishes.</b> Your table is ready—right this way."
        }
      ]
    },
    {
      "id": "soup",
      "layout": "fit-height",
      "bgSrc": "assets/menus/title.png"
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000000219.png",
      "bgZoom": "1",
      "focalX": "490",
      "focalY": "300",
      "anchorX": "0.5",
      "anchorY": "0.2",
      "annotationX": "190",
      "annotationY": "340",
      "topLabel": "Manhattan Club, NYC, 1866",
      "image": "assets/menus/fish.png",
      "imageAlt": "Fish illustration",
      "body": [
        {
          "type": "text",
          "value": "We begin our tour with oysters, pardon me—<i>huitres</i>—and <i>potages</i>, the soup. The consomme de volaille a la Victoria or Consomme Châtelaine are excellent choices – two styles of chicken soup – but I suggest the <b>bisque d’ecrevisses</b>, a crayfish soup made with cognac and cream."
        },
        {
          "type": "text",
          "value": "Whatever soup one chooses, you can be certain that it will approach, as best as possible, the finest French cuisine that 19th Century America can muster. It will be convincing: after all, you will order the French dish in French from a French, and your chef there in New York, will have likely been imported from France – or at least somewhere, over there."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000000068.png",
      "layout": "fit-height",
      "topLabel": "Delmonico’s, NYC, 1881",
      "body": [
        {
          "type": "text",
          "value": "Restaurant dining in America began in the 1830s: these were not taverns that had whatever food was around to go with drink, nor just places that served a customer food on demand, but as spaces for culinary pleasures beyond function. They answered to society’s new world elite, a class that sought to emulate what they saw as the height of culture and sophistication: the European, and particularly the French, aristocracy."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/476900.png",
      "bgZoom": "1.5",
      "focalX": "490",
      "focalY": "300",
      "anchorX": "0.5",
      "anchorY": "0.2",
      "annotationX": "344",
      "annotationY": "405",
      "topLabel": "Astor House, NYC, 1854, Printed on silk.",
      "body": [
        {
          "type": "text",
          "value": "Soup tended to be the first true course of these decadent meals, which would then proceed to 8, 10, or more courses of French classics or, possibly, other dishes simply given a European-sounding name."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000008419.png",
      "layout": "fit-height",
      "topLabel": "Delmonico’s, NYC, 1900",
      "image": "assets/menus/fish.png",
      "imageAlt": "Fish illustration",
      "body": [
        {
          "type": "text",
          "value": "While it has a humble place now, celery was among a number of “relishes” that took a pride of place in the aristocratic menu and on the aristocratic table. After finishing their soup, a diner may reach out to take a stalk of celery proudly displayed in a decorative crystal celery vase. In fact, it’s the fourth most common item among the Buttolph Collection menus, after only coffee, tea, and olives. Celery’s reputation as a luxury arose first from its scarcity; its popularity followed agricultural and technological improvements making it widely available."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/474586.png",
      "bgZoom": "1",
      "focalX": "490",
      "focalY": "300",
      "anchorX": "0.5",
      "anchorY": "0.2",
      "topLabel": "Sherry’s, NY, 1891",
      "body": [
        {
          "type": "text",
          "value": "Alongside sorbets and punches inserted later in the meal as palate cleansers, celery functioned as part of an intricately ordered meal that distinguished the aristocratic restaurant as distinctly oriented to the aesthetic more than the practical. George G. Foster, a writer at the time, noted that this kind of meal  “is not merely a quantity of food deposited in the stomach, but is in every sense and to all the senses a great work of art.”(70-71)"
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000000068.png",
      "bgZoom": "1",
      "layout": "fit-height",
      "body": [
        {
          "type": "text",
          "value": "Without a true nobility in America, these restaurants were one of the ways the post-Civil War elite <b>symbolically distinguished themselves from the masses.</b> French was one aspect of gatekeeping – luxury was another.  Delmonico’s TK TK, archetypal and original French cuisine in America."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000008419.png",
      "layout": "fit-height",
      "topLabel": "Delmonico’s, NYC, 1900",
      "image": "assets/menus/fish.png",
      "imageAlt": "Fish illustration",
      "body": [
        {
          "type": "text",
          "value": "While it has a humble place now, celery was among a number of “relishes” that took a pride of place in the aristocratic menu and on the aristocratic table. After finishing their soup, a diner may reach out to take a stalk of celery proudly displayed in a decorative crystal celery vase. In fact, it’s the fourth most common item among the Buttolph Collection menus, after only coffee, tea, and olives. Celery’s reputation as a luxury arose first from its scarcity; its popularity followed agricultural and technological improvements making it widely available."
        }
      ]
    }
  ]
}`;var Qe=w("<p></p>"),$e=w('<details><summary></summary> <div class="content"><!></div></details>');function et(a,e){let t=L(()=>typeof e.content=="string"),o=L(()=>e.open==="true");var r=$e(),s=g(r);J(s,()=>e.summary,!0),v(s);var h=_(s,2),f=g(h);{var y=i=>{var n=Y(),u=k(n);J(u,()=>e.content),d(i,n)},l=i=>{var n=Y(),u=k(n);U(u,17,()=>e.content,q,(x,b)=>{let m=()=>c(b).value;var D=Qe();J(D,m,!0),v(D),d(x,D)}),d(i,n)};ee(f,i=>{c(t)?i(y):i(l,-1)})}v(h),v(r),E(()=>{r.open=c(o),he(r,"name",e.name)}),d(a,r)}var tt=w("<li></li>"),nt=w("<ul></ul>");function at(a,e){var t=nt();U(t,21,()=>e.li,q,(o,r)=>{var s=tt();J(s,()=>c(r),!0),v(s),d(o,s)}),v(t),d(a,t)}var ot=w("<li></li>"),rt=w("<ol></ol>");function st(a,e){var t=rt();U(t,21,()=>e.li,q,(o,r)=>{var s=ot();J(s,()=>c(r),!0),v(s),d(o,s)}),v(t),d(a,t)}var it=w("<p></p>"),lt=w("<section><!></section>");function ct(a,e){H(e,!0);const t={details:et,ul:at,ol:st};let o=N(e,"components",19,()=>({})),r=N(e,"body",19,()=>[]);var s=Y(),h=k(s);U(h,17,r,q,(f,y)=>{let l=()=>c(y).section,i=()=>c(y).content;const n=L(()=>l().toLowerCase().replace(/[^a-z0-9]/g,"")),u=L(()=>o()[l()]);var x=lt(),b=g(x);{var m=p=>{var C=Y(),S=k(C);re(S,()=>c(u),(j,R)=>{R(j,se(i))}),d(p,C)},D=p=>{var C=Y(),S=k(C);U(S,17,i,q,(j,R,X,Z)=>{let A=()=>c(R).type,B=()=>c(R).value;const z=L(()=>o()[A()]||t[A()]),pe=L(()=>typeof B()=="string");var le=Y(),ge=k(le);{var ye=F=>{var M=Y(),P=k(M);re(P,()=>c(z),(Q,$)=>{$(Q,se(B))}),d(F,M)},be=F=>{var M=it();J(M,B,!0),v(M),d(F,M)},_e=F=>{var M=Y(),P=k(M);oe(P,A,!1,(Q,$)=>{var ce=Y(),xe=k(ce);J(xe,B),d($,ce)}),d(F,M)},we=F=>{var M=Y(),P=k(M);oe(P,A,!1,(Q,$)=>{Te(Q,()=>({...B()}))}),d(F,M)};ee(ge,F=>{c(z)?F(ye):A()==="text"?F(be,1):c(pe)?F(_e,2):F(we,-1)})}d(j,le)}),d(p,C)};ee(b,p=>{c(u)?p(m):p(D,-1)})}v(x),E(()=>he(x,"id",c(n))),d(f,x)}),d(a,s),K()}var ut=w('<p> </p> <progress max="100"></progress>',1);function dt(a,e){let t=N(e,"label",3,"A"),o=N(e,"value",3,0);var r=ut(),s=k(r),h=g(s,!0);v(s);var f=_(s,2);E(()=>{T(h,t()),Ye(f,o())}),d(a,r)}var vt=w('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function ht(a,e){H(e,!0);const{body:t}=Fe,o={Test:dt};var r=vt(),s=_(g(r),2),h=g(s),f=g(h,!0);v(h),v(s);var y=_(s,2);ct(y,{get components(){return o},get body(){return t}}),v(r),E(l=>T(f,l),[()=>ze.replace(/\t/g," ")]),d(a,r),K()}const mt=(a,e=ie)=>{var t=ft(),o=g(t),r=g(o,!0);v(o);var s=_(o,2),h=g(s,!0);v(s),v(t),E(()=>{T(r,e().name),T(h,e().age)}),d(a,t)};var ft=w('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),pt=w('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function gt(a,e){H(e,!0),N(e,"age",3,30);const t=[{name:"John",age:30},{name:"Jill",age:45}];let o=W(0),r=L(()=>c(o)*2),s=L(()=>c(o)*2),h=W(0);V(()=>{O(h,c(o)*2)});var f=pt(),y=_(k(f),4),l=_(y,2),i=g(l);v(l);var n=_(l,2),u=g(n);v(n);var x=_(n,2),b=g(x);v(x);var m=_(x,4),D=g(m);me(D,()=>e.children??ie),v(m);var p=_(m,4),C=_(p,4);U(C,21,()=>t,q,(S,j)=>{mt(S,()=>c(j))}),v(C),E(()=>{T(i,`${c(o)??""} doubled is ${c(r)??""} (derived)`),T(u,`${c(o)??""} doubled is ${c(s)??""} (derived by)`),T(b,`${c(o)??""} doubled is ${c(h)??""} ($effect)`)}),ue("click",y,()=>Se(o)),ue("click",p,()=>e.random(Math.floor(Math.random()*10))),d(a,f),K()}Ae(["click"]);var de={},te={},ne=34,G=10,ae=13;function fe(a){return new Function("d","return {"+a.map(function(e,t){return JSON.stringify(e)+": d["+t+'] || ""'}).join(",")+"}")}function yt(a,e){var t=fe(a);return function(o,r){return e(t(o),r,a)}}function ve(a){var e=Object.create(null),t=[];return a.forEach(function(o){for(var r in o)r in e||t.push(e[r]=r)}),t}function I(a,e){var t=a+"",o=t.length;return o<e?new Array(e-o+1).join(0)+t:t}function bt(a){return a<0?"-"+I(-a,6):a>9999?"+"+I(a,6):I(a,4)}function _t(a){var e=a.getUTCHours(),t=a.getUTCMinutes(),o=a.getUTCSeconds(),r=a.getUTCMilliseconds();return isNaN(a)?"Invalid Date":bt(a.getUTCFullYear())+"-"+I(a.getUTCMonth()+1,2)+"-"+I(a.getUTCDate(),2)+(r?"T"+I(e,2)+":"+I(t,2)+":"+I(o,2)+"."+I(r,3)+"Z":o?"T"+I(e,2)+":"+I(t,2)+":"+I(o,2)+"Z":t||e?"T"+I(e,2)+":"+I(t,2)+"Z":"")}function wt(a){var e=new RegExp('["'+a+`
\r]`),t=a.charCodeAt(0);function o(n,u){var x,b,m=r(n,function(D,p){if(x)return x(D,p-1);b=D,x=u?yt(D,u):fe(D)});return m.columns=b||[],m}function r(n,u){var x=[],b=n.length,m=0,D=0,p,C=b<=0,S=!1;n.charCodeAt(b-1)===G&&--b,n.charCodeAt(b-1)===ae&&--b;function j(){if(C)return te;if(S)return S=!1,de;var X,Z=m,A;if(n.charCodeAt(Z)===ne){for(;m++<b&&n.charCodeAt(m)!==ne||n.charCodeAt(++m)===ne;);return(X=m)>=b?C=!0:(A=n.charCodeAt(m++))===G?S=!0:A===ae&&(S=!0,n.charCodeAt(m)===G&&++m),n.slice(Z+1,X-1).replace(/""/g,'"')}for(;m<b;){if((A=n.charCodeAt(X=m++))===G)S=!0;else if(A===ae)S=!0,n.charCodeAt(m)===G&&++m;else if(A!==t)continue;return n.slice(Z,X)}return C=!0,n.slice(Z,b)}for(;(p=j())!==te;){for(var R=[];p!==de&&p!==te;)R.push(p),p=j();u&&(R=u(R,D++))==null||x.push(R)}return x}function s(n,u){return n.map(function(x){return u.map(function(b){return i(x[b])}).join(a)})}function h(n,u){return u==null&&(u=ve(n)),[u.map(i).join(a)].concat(s(n,u)).join(`
`)}function f(n,u){return u==null&&(u=ve(n)),s(n,u).join(`
`)}function y(n){return n.map(l).join(`
`)}function l(n){return n.map(i).join(a)}function i(n){return n==null?"":n instanceof Date?_t(n):e.test(n+="")?'"'+n.replace(/"/g,'""')+'"':n}return{parse:o,parseRows:r,format:h,formatBody:f,formatRows:y,formatRow:l,formatValue:i}}var xt=wt(","),Ct=xt.parse;const St=(a,e)=>{let t=W(De(a)),o=W(null),r=W(!0),s=W(void 0);const h=(l=!0)=>{O(r,l,!0),l===!0&&(O(s,null),O(o,null))},f=async()=>{try{const l=await fetch(c(t),e);if(!l.ok)throw new Error(`Unexpected error occurred (status ${l.status})`);let i;if(c(t).includes(".csv")){const n=await l.text();i=Ct(n)}else i=await l.json();return[null,i]}catch(l){const{errorMessage:i="Unexpected error eccurred"}=l;return[i,null]}},y=async l=>{h(!0);const[i,n]=await f();if(l===c(t)){if(i){h(!1),O(s,i,!0);return}h(!1),O(o,n,!0)}};return V(()=>{y(c(t))}),{get data(){return c(o)},get loading(){return c(r)},get error(){return c(s)},get url(){return c(t)},set url(l){c(t)!==l&&O(t,l,!0)}}};var Dt=w("<p>loading data...</p>"),kt=w("<p> </p>"),At=w("<p>data loaded</p> <pre> </pre>",1),It=w('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function Tt(a,e){H(e,!0);const t=`${Me}/assets/demo/test.csv`,o=St(t);V(()=>{});var r=It(),s=_(g(r),2),h=g(s);{var f=i=>{var n=Dt();d(i,n)},y=i=>{var n=kt(),u=g(n);v(n),E(()=>T(u,`error: ${o.error??""}`)),d(i,n)},l=i=>{var n=At(),u=_(k(n),2),x=g(u,!0);v(u),E(b=>T(x,b),[()=>JSON.stringify(o.data,null,2)]),d(i,n)};ee(h,i=>{o.loading?i(f):o.error?i(y,1):i(l,-1)})}v(s),v(r),d(a,r),K()}var Yt=w('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function Et(a){let e=W(0);function t(u){console.log(u)}var o=Yt(),r=_(g(o),2);je(r);var s=_(r,2);Le(s);var h=_(s,2);Ue(h);var f=_(h,2);Je(f);var y=_(f,2);ht(y,{});var l=_(y,2);Tt(l,{});var i=_(l,2);Ke(i);var n=_(i,2);gt(n,{random:t,get value(){return c(e)},set value(u){O(e,u,!0)}}),v(o),d(a,o)}function Jt(a){Et(a)}export{Jt as component};
