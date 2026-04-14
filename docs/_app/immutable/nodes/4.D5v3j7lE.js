import"../chunks/DsnmJJEf.js";import{al as y,Z as g,$ as A,_ as d,X as E,G as c,an as q,W as G,ag as X,Y as H,ad as ie,J as O,aE as xe,am as P,be as De,I as Se}from"../chunks/BtEyuRtA.js";import{b as u,f as w,c as M,t as Ae}from"../chunks/DrGf2wc-.js";import{a as k,f as Ie,e as ve}from"../chunks/DaEOzl3g.js";import{e as N,i as Y,b as Te,s as me,c as ke,d as Me}from"../chunks/BBX0twoN.js";import{e as ae}from"../chunks/DppDIUNi.js";import{c as oe}from"../chunks/CsstoYUM.js";import{s as se,p as U}from"../chunks/D5b4Qpkx.js";import{s as fe}from"../chunks/iRFT3TRO.js";import{b as Ee,i as ee}from"../chunks/SctPr9OF.js";import{h as V,c as Fe}from"../chunks/DVI7KsE0.js";import{b as Re}from"../chunks/CWW5_S0Z.js";import"../chunks/DlOzM7pa.js";var je=w('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p> <p><a href="ui">BitsUI styled components</a></p></section>');function Be(r){var e=je();u(r,e)}var Ue=w('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function qe(r){var e=Ue();u(r,e)}var Oe=w('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function Ne(r){const e=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var t=Oe(),a=y(g(t),2);N(a,17,()=>e,Y,(o,s)=>{let m=()=>c(s).tag,h=()=>c(s).text;var _=M(),l=A(_);ae(l,m,!1,(i,n)=>{var v=Ae();E(()=>k(v,h())),u(n,v)}),u(o,_)}),d(t),u(r,t)}var Ye=w("<p> </p>");function Le(r,e){var t=Ye(),a=g(t);d(t),E(()=>k(a,`I am component A and my favorite number is ${e.number??""}.`)),u(r,t)}var Pe=w("<p> </p>");function We(r,e){var t=Pe(),a=g(t);d(t),E(()=>k(a,`I am component B and my name is ${e.name??""}.`)),u(r,t)}var Je=w('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function Ve(r){const e={A:Le,B:We},t=[{component:"A",number:42},{component:"B",name:"Russell"}];var a=Je(),o=y(g(a),2);N(o,17,()=>t,Y,(s,m)=>{const h=q(()=>e[c(m).component]);var _=M(),l=A(_);oe(l,()=>c(h),(i,n)=>{n(i,se(()=>c(m)))}),u(s,_)}),d(a),u(r,a)}var Ze=w("<div><!></div>");function Ke(r,e){G(e,!0);let t=U(e,"root",3,null),a=U(e,"top",3,0),o=U(e,"bottom",3,0),s=U(e,"increments",3,100),m=U(e,"value",15,void 0),h=[],_=[],l=[],i=[],n;function v(){let p=0,x=0;for(let D=0;D<h.length;D++)h[D]>p&&(p=h[D],x=D);p>0?m(x):m(void 0)}function C(p,x){const D=L=>{L[0].isIntersecting;const z=L[0].intersectionRatio;h[x]=z,v()},B=a()?a()*-1:0,j=o()?o()*-1:0,W=`${B}px 0px ${j}px 0px`,J={root:t(),rootMargin:W,threshold:_};i[x]&&i[x].disconnect();const I=new IntersectionObserver(D,J);I.observe(p),i[x]=I}function b(){l.length&&l.forEach(C)}X(()=>{for(let p=0;p<s()+1;p++)_.push(p/s());l=n.querySelectorAll(":scope > *:not(iframe)"),b()}),X(()=>{a(),o(),b()});var f=Ze(),S=g(f);fe(S,()=>e.children??ie),d(f),Ee(f,p=>n=p,()=>n),u(r,f),H()}var Xe=w('<div><p class="svelte-1sxgmm9"> </p></div>'),Ge=w('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function He(r){let e=P(void 0);var t=Ge(),a=g(t),o=y(g(a)),s=g(o,!0);d(o),d(a);var m=y(a,4);Ke(m,{get value(){return c(e)},set value(h){O(e,h,!0)},children:(h,_)=>{var l=M(),i=A(l);N(i,16,()=>[0,1,2,3,4],Y,(n,v,C)=>{const b=q(()=>c(e)===C);var f=Xe();let S;var p=g(f),x=g(p,!0);d(p),d(f),E(()=>{S=Te(f,1,"step svelte-1sxgmm9",null,S,{active:c(b)}),k(x,v)}),u(n,f)}),u(h,l)},$$slots:{default:!0}}),xe(2),d(t),E(()=>k(s,c(e)||"-")),u(r,t)}const ze=`{
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
      "layout": "fit-height",
      "bgSrc": "assets/4000000068.png",
      "body": [
        {
          "type": "text",
          "value": "We begin with oysters, pardon me – <i>huitres</i> – and potages, the soup. Perhaps you’d like the consomme de volaille, a la Victoria or Consomme Chatelaine? But <b>Bisque d’ecrevisses</b> or the terrapin would also be an excellent choice. Whatever you choose, you can be certain that it will approach, as best as possible, the finest French cuisine that 19th Century America can muster. It will be convincing: after all, you will order the French dish in French from a French, and your chef there in New York, will have likely been imported from France – or at least somewhere, over there."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/4000000068.png",
      "bgZoom": "1",
      "focalX": "490",
      "focalY": "300",
      "anchorX": 0.5,
      "anchorY": 0.2,
      "annotationX": "490",
      "annotationY": "300",
      "body": [
        {
          "type": "text",
          "value": "We begin with oysters, pardon me – <i>huitres</i> – and potages, the soup. Perhaps you’d like the consomme de volaille, a la Victoria or Consomme Chatelaine? But <b>Bisque d’ecrevisses</b> or the terrapin would also be an excellent choice. Whatever you choose, you can be certain that it will approach, as best as possible, the finest French cuisine that 19th Century America can muster. It will be convincing: after all, you will order the French dish in French from a French, and your chef there in New York, will have likely been imported from France – or at least somewhere, over there."
        }
      ]
    }
  ]
}`;var Qe=w("<p></p>"),$e=w('<details><summary></summary> <div class="content"><!></div></details>');function et(r,e){let t=q(()=>typeof e.content=="string"),a=q(()=>e.open==="true");var o=$e(),s=g(o);V(s,()=>e.summary,!0),d(s);var m=y(s,2),h=g(m);{var _=i=>{var n=M(),v=A(n);V(v,()=>e.content),u(i,n)},l=i=>{var n=M(),v=A(n);N(v,17,()=>e.content,Y,(C,b)=>{let f=()=>c(b).value;var S=Qe();V(S,f,!0),d(S),u(C,S)}),u(i,n)};ee(h,i=>{c(t)?i(_):i(l,-1)})}d(m),d(o),E(()=>{o.open=c(a),me(o,"name",e.name)}),u(r,o)}var tt=w("<li></li>"),nt=w("<ul></ul>");function rt(r,e){var t=nt();N(t,21,()=>e.li,Y,(a,o)=>{var s=tt();V(s,()=>c(o),!0),d(s),u(a,s)}),d(t),u(r,t)}var at=w("<li></li>"),ot=w("<ol></ol>");function st(r,e){var t=ot();N(t,21,()=>e.li,Y,(a,o)=>{var s=at();V(s,()=>c(o),!0),d(s),u(a,s)}),d(t),u(r,t)}var it=w("<p></p>"),lt=w("<section><!></section>");function ct(r,e){G(e,!0);const t={details:et,ul:rt,ol:st};let a=U(e,"components",19,()=>({})),o=U(e,"body",19,()=>[]);var s=M(),m=A(s);N(m,17,o,Y,(h,_)=>{let l=()=>c(_).section,i=()=>c(_).content;const n=q(()=>l().toLowerCase().replace(/[^a-z0-9]/g,"")),v=q(()=>a()[l()]);var C=lt(),b=g(C);{var f=p=>{var x=M(),D=A(x);oe(D,()=>c(v),(B,j)=>{j(B,se(i))}),u(p,x)},S=p=>{var x=M(),D=A(x);N(D,17,i,Y,(B,j,W,J)=>{let I=()=>c(j).type,L=()=>c(j).value;const z=q(()=>a()[I()]||t[I()]),pe=q(()=>typeof L()=="string");var le=M(),ge=A(le);{var _e=F=>{var R=M(),Z=A(R);oe(Z,()=>c(z),(Q,$)=>{$(Q,se(L))}),u(F,R)},be=F=>{var R=it();V(R,L,!0),d(R),u(F,R)},ye=F=>{var R=M(),Z=A(R);ae(Z,I,!1,(Q,$)=>{var ce=M(),Ce=A(ce);V(Ce,L),u($,ce)}),u(F,R)},we=F=>{var R=M(),Z=A(R);ae(Z,I,!1,(Q,$)=>{ke(Q,()=>({...L()}))}),u(F,R)};ee(ge,F=>{c(z)?F(_e):I()==="text"?F(be,1):c(pe)?F(ye,2):F(we,-1)})}u(B,le)}),u(p,x)};ee(b,p=>{c(v)?p(f):p(S,-1)})}d(C),E(()=>me(C,"id",c(n))),u(h,C)}),u(r,s),H()}var vt=w('<p> </p> <progress max="100"></progress>',1);function ut(r,e){let t=U(e,"label",3,"A"),a=U(e,"value",3,0);var o=vt(),s=A(o),m=g(s,!0);d(s);var h=y(s,2);E(()=>{k(m,t()),Me(h,a())}),u(r,o)}var dt=w('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function mt(r,e){G(e,!0);const{body:t}=Fe,a={Test:ut};var o=dt(),s=y(g(o),2),m=g(s),h=g(m,!0);d(m),d(s);var _=y(s,2);ct(_,{get components(){return a},get body(){return t}}),d(o),E(l=>k(h,l),[()=>ze.replace(/\t/g," ")]),u(r,o),H()}const ft=(r,e=ie)=>{var t=ht(),a=g(t),o=g(a,!0);d(a);var s=y(a,2),m=g(s,!0);d(s),d(t),E(()=>{k(o,e().name),k(m,e().age)}),u(r,t)};var ht=w('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),pt=w('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function gt(r,e){G(e,!0),U(e,"age",3,30);const t=[{name:"John",age:30},{name:"Jill",age:45}];let a=P(0),o=q(()=>c(a)*2),s=q(()=>c(a)*2),m=P(0);X(()=>{O(m,c(a)*2)});var h=pt(),_=y(A(h),4),l=y(_,2),i=g(l);d(l);var n=y(l,2),v=g(n);d(n);var C=y(n,2),b=g(C);d(C);var f=y(C,4),S=g(f);fe(S,()=>e.children??ie),d(f);var p=y(f,4),x=y(p,4);N(x,21,()=>t,Y,(D,B)=>{ft(D,()=>c(B))}),d(x),E(()=>{k(i,`${c(a)??""} doubled is ${c(o)??""} (derived)`),k(v,`${c(a)??""} doubled is ${c(s)??""} (derived by)`),k(b,`${c(a)??""} doubled is ${c(m)??""} ($effect)`)}),ve("click",_,()=>De(a)),ve("click",p,()=>e.random(Math.floor(Math.random()*10))),u(r,h),H()}Ie(["click"]);var ue={},te={},ne=34,K=10,re=13;function he(r){return new Function("d","return {"+r.map(function(e,t){return JSON.stringify(e)+": d["+t+'] || ""'}).join(",")+"}")}function _t(r,e){var t=he(r);return function(a,o){return e(t(a),o,r)}}function de(r){var e=Object.create(null),t=[];return r.forEach(function(a){for(var o in a)o in e||t.push(e[o]=o)}),t}function T(r,e){var t=r+"",a=t.length;return a<e?new Array(e-a+1).join(0)+t:t}function bt(r){return r<0?"-"+T(-r,6):r>9999?"+"+T(r,6):T(r,4)}function yt(r){var e=r.getUTCHours(),t=r.getUTCMinutes(),a=r.getUTCSeconds(),o=r.getUTCMilliseconds();return isNaN(r)?"Invalid Date":bt(r.getUTCFullYear())+"-"+T(r.getUTCMonth()+1,2)+"-"+T(r.getUTCDate(),2)+(o?"T"+T(e,2)+":"+T(t,2)+":"+T(a,2)+"."+T(o,3)+"Z":a?"T"+T(e,2)+":"+T(t,2)+":"+T(a,2)+"Z":t||e?"T"+T(e,2)+":"+T(t,2)+"Z":"")}function wt(r){var e=new RegExp('["'+r+`
\r]`),t=r.charCodeAt(0);function a(n,v){var C,b,f=o(n,function(S,p){if(C)return C(S,p-1);b=S,C=v?_t(S,v):he(S)});return f.columns=b||[],f}function o(n,v){var C=[],b=n.length,f=0,S=0,p,x=b<=0,D=!1;n.charCodeAt(b-1)===K&&--b,n.charCodeAt(b-1)===re&&--b;function B(){if(x)return te;if(D)return D=!1,ue;var W,J=f,I;if(n.charCodeAt(J)===ne){for(;f++<b&&n.charCodeAt(f)!==ne||n.charCodeAt(++f)===ne;);return(W=f)>=b?x=!0:(I=n.charCodeAt(f++))===K?D=!0:I===re&&(D=!0,n.charCodeAt(f)===K&&++f),n.slice(J+1,W-1).replace(/""/g,'"')}for(;f<b;){if((I=n.charCodeAt(W=f++))===K)D=!0;else if(I===re)D=!0,n.charCodeAt(f)===K&&++f;else if(I!==t)continue;return n.slice(J,W)}return x=!0,n.slice(J,b)}for(;(p=B())!==te;){for(var j=[];p!==ue&&p!==te;)j.push(p),p=B();v&&(j=v(j,S++))==null||C.push(j)}return C}function s(n,v){return n.map(function(C){return v.map(function(b){return i(C[b])}).join(r)})}function m(n,v){return v==null&&(v=de(n)),[v.map(i).join(r)].concat(s(n,v)).join(`
`)}function h(n,v){return v==null&&(v=de(n)),s(n,v).join(`
`)}function _(n){return n.map(l).join(`
`)}function l(n){return n.map(i).join(r)}function i(n){return n==null?"":n instanceof Date?yt(n):e.test(n+="")?'"'+n.replace(/"/g,'""')+'"':n}return{parse:a,parseRows:o,format:m,formatBody:h,formatRows:_,formatRow:l,formatValue:i}}var Ct=wt(","),xt=Ct.parse;const Dt=(r,e)=>{let t=P(Se(r)),a=P(null),o=P(!0),s=P(void 0);const m=(l=!0)=>{O(o,l,!0),l===!0&&(O(s,null),O(a,null))},h=async()=>{try{const l=await fetch(c(t),e);if(!l.ok)throw new Error(`Unexpected error occurred (status ${l.status})`);let i;if(c(t).includes(".csv")){const n=await l.text();i=xt(n)}else i=await l.json();return[null,i]}catch(l){const{errorMessage:i="Unexpected error eccurred"}=l;return[i,null]}},_=async l=>{m(!0);const[i,n]=await h();if(l===c(t)){if(i){m(!1),O(s,i,!0);return}m(!1),O(a,n,!0)}};return X(()=>{_(c(t))}),{get data(){return c(a)},get loading(){return c(o)},get error(){return c(s)},get url(){return c(t)},set url(l){c(t)!==l&&O(t,l,!0)}}};var St=w("<p>loading data...</p>"),At=w("<p> </p>"),It=w("<p>data loaded</p> <pre> </pre>",1),Tt=w('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function kt(r,e){G(e,!0);const t=`${Re}/assets/demo/test.csv`,a=Dt(t);X(()=>{});var o=Tt(),s=y(g(o),2),m=g(s);{var h=i=>{var n=St();u(i,n)},_=i=>{var n=At(),v=g(n);d(n),E(()=>k(v,`error: ${a.error??""}`)),u(i,n)},l=i=>{var n=It(),v=y(A(n),2),C=g(v,!0);d(v),E(b=>k(C,b),[()=>JSON.stringify(a.data,null,2)]),u(i,n)};ee(m,i=>{a.loading?i(h):a.error?i(_,1):i(l,-1)})}d(s),d(o),u(r,o),H()}var Mt=w('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function Et(r){let e=P(0);function t(v){console.log(v)}var a=Mt(),o=y(g(a),2);Be(o);var s=y(o,2);qe(s);var m=y(s,2);Ne(m);var h=y(m,2);Ve(h);var _=y(h,2);mt(_,{});var l=y(_,2);kt(l,{});var i=y(l,2);He(i);var n=y(i,2);gt(n,{random:t,get value(){return c(e)},set value(v){O(e,v,!0)}}),d(a),u(r,a)}function Vt(r){Et(r)}export{Vt as component};
