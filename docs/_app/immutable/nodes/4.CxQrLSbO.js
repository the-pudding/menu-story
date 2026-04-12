import"../chunks/DsnmJJEf.js";import{al as y,Z as g,$ as A,_ as d,X as E,G as c,an as q,W as K,ag as H,Y as z,ad as ie,J as F,aE as we,am as J,be as De,I as Se}from"../chunks/BtEyuRtA.js";import{b as u,f as C,c as k,t as Ae}from"../chunks/DrGf2wc-.js";import{a as M,f as Ie,e as ve}from"../chunks/DaEOzl3g.js";import{e as N,i as L,b as Te,s as me,c as Me,d as ke}from"../chunks/BBX0twoN.js";import{e as ae}from"../chunks/DppDIUNi.js";import{c as oe}from"../chunks/CsstoYUM.js";import{s as se,p as O}from"../chunks/D5b4Qpkx.js";import{s as fe}from"../chunks/iRFT3TRO.js";import{b as Ee,i as ee}from"../chunks/SctPr9OF.js";import{h as W,c as je}from"../chunks/CZJDdb9J.js";import{b as Re}from"../chunks/46pLW2eV.js";import"../chunks/DlOzM7pa.js";var Be=C('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p> <p><a href="ui">BitsUI styled components</a></p></section>');function Ue(r){var e=Be();u(r,e)}var Oe=C('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function qe(r){var e=Oe();u(r,e)}var Fe=C('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function Ne(r){const e=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var t=Fe(),a=y(g(t),2);N(a,17,()=>e,L,(o,s)=>{let m=()=>c(s).tag,p=()=>c(s).text;var _=k(),l=A(_);ae(l,m,!1,(i,n)=>{var v=Ae();E(()=>M(v,p())),u(n,v)}),u(o,_)}),d(t),u(r,t)}var Le=C("<p> </p>");function Ye(r,e){var t=Le(),a=g(t);d(t),E(()=>M(a,`I am component A and my favorite number is ${e.number??""}.`)),u(r,t)}var Je=C("<p> </p>");function Pe(r,e){var t=Je(),a=g(t);d(t),E(()=>M(a,`I am component B and my name is ${e.name??""}.`)),u(r,t)}var Ve=C('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function We(r){const e={A:Ye,B:Pe},t=[{component:"A",number:42},{component:"B",name:"Russell"}];var a=Ve(),o=y(g(a),2);N(o,17,()=>t,L,(s,m)=>{const p=q(()=>e[c(m).component]);var _=k(),l=A(_);oe(l,()=>c(p),(i,n)=>{n(i,se(()=>c(m)))}),u(s,_)}),d(a),u(r,a)}var Ze=C("<div><!></div>");function Ge(r,e){K(e,!0);let t=O(e,"root",3,null),a=O(e,"top",3,0),o=O(e,"bottom",3,0),s=O(e,"increments",3,100),m=O(e,"value",15,void 0),p=[],_=[],l=[],i=[],n;function v(){let h=0,w=0;for(let D=0;D<p.length;D++)p[D]>h&&(h=p[D],w=D);h>0?m(w):m(void 0)}function x(h,w){const D=Y=>{Y[0].isIntersecting;const Q=Y[0].intersectionRatio;p[w]=Q,v()},U=a()?a()*-1:0,B=o()?o()*-1:0,P=`${U}px 0px ${B}px 0px`,V={root:t(),rootMargin:P,threshold:_};i[w]&&i[w].disconnect();const I=new IntersectionObserver(D,V);I.observe(h),i[w]=I}function b(){l.length&&l.forEach(x)}H(()=>{for(let h=0;h<s()+1;h++)_.push(h/s());l=n.querySelectorAll(":scope > *:not(iframe)"),b()}),H(()=>{a(),o(),b()});var f=Ze(),S=g(f);fe(S,()=>e.children??ie),d(f),Ee(f,h=>n=h,()=>n),u(r,f),z()}var He=C('<div><p class="svelte-1sxgmm9"> </p></div>'),Ke=C('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function ze(r){let e=J(void 0);var t=Ke(),a=g(t),o=y(g(a)),s=g(o,!0);d(o),d(a);var m=y(a,4);Ge(m,{get value(){return c(e)},set value(p){F(e,p,!0)},children:(p,_)=>{var l=k(),i=A(l);N(i,16,()=>[0,1,2,3,4],L,(n,v,x)=>{const b=q(()=>c(e)===x);var f=He();let S;var h=g(f),w=g(h,!0);d(h),d(f),E(()=>{S=Te(f,1,"step svelte-1sxgmm9",null,S,{active:c(b)}),M(w,v)}),u(n,f)}),u(p,l)},$$slots:{default:!0}}),we(2),d(t),E(()=>M(s,c(e)||"-")),u(r,t)}const Qe=`{
  "ignore": [],
  "slides": [
    {
      "id": "header"
    },
    {
      "id": "map",
      "body": [
        {
          "type": "text",
          "value": "A menu describes what a restaurant serves – but a menu also describes who is being served."
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
      "id": "chart",
      "body": [
        {
          "type": "text",
          "value": "Get enough menus together, and they can tell not just a culinary history, but a social one."
        }
      ]
    },
    {
      "id": "buttolph",
      "image": "assets/demo/test.jpg",
      "body": [
        {
          "type": "text",
          "value": "Frank E. Buttolph spent decades preserving menus as a record of her time. TK TK biographical. Thanks to the collection she sourced and donated to the New York Public Library, we have an archive that tracks the transformation of dining and society in America from the 1880s to the 1920s:"
        },
        {
          "type": "text",
          "value": "In this crucial period, we can see how the American restaurant was born – and how much, or how little, we’ve changed in the ensuring 100 years."
        },
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
      "id": "title"
    },
    {
      "id": "soup",
      "body": [
        {
          "type": "text",
          "value": "We begin with oysters, pardon me – <i>huitres</i> – and potages, the soup. Perhaps you’d like the consomme de volaille, a la Victoria or Consomme Chatelaine? But <b>Bisque d’ecrevisses</b> or the terrapin would also be an excellent choice. Whatever you choose, you can be certain that it will approach, as best as possible, the finest French cuisine that 19th Century America can muster. It will be convincing: after all, you will order the French dish in French from a French, and your chef there in New York, will have likely been imported from France – or at least somewhere, over there."
        }
      ]
    }
  ]
}`;var Xe=C("<p></p>"),$e=C('<details><summary></summary> <div class="content"><!></div></details>');function et(r,e){let t=q(()=>typeof e.content=="string"),a=q(()=>e.open==="true");var o=$e(),s=g(o);W(s,()=>e.summary,!0),d(s);var m=y(s,2),p=g(m);{var _=i=>{var n=k(),v=A(n);W(v,()=>e.content),u(i,n)},l=i=>{var n=k(),v=A(n);N(v,17,()=>e.content,L,(x,b)=>{let f=()=>c(b).value;var S=Xe();W(S,f,!0),d(S),u(x,S)}),u(i,n)};ee(p,i=>{c(t)?i(_):i(l,-1)})}d(m),d(o),E(()=>{o.open=c(a),me(o,"name",e.name)}),u(r,o)}var tt=C("<li></li>"),nt=C("<ul></ul>");function rt(r,e){var t=nt();N(t,21,()=>e.li,L,(a,o)=>{var s=tt();W(s,()=>c(o),!0),d(s),u(a,s)}),d(t),u(r,t)}var at=C("<li></li>"),ot=C("<ol></ol>");function st(r,e){var t=ot();N(t,21,()=>e.li,L,(a,o)=>{var s=at();W(s,()=>c(o),!0),d(s),u(a,s)}),d(t),u(r,t)}var it=C("<p></p>"),lt=C("<section><!></section>");function ct(r,e){K(e,!0);const t={details:et,ul:rt,ol:st};let a=O(e,"components",19,()=>({})),o=O(e,"body",19,()=>[]);var s=k(),m=A(s);N(m,17,o,L,(p,_)=>{let l=()=>c(_).section,i=()=>c(_).content;const n=q(()=>l().toLowerCase().replace(/[^a-z0-9]/g,"")),v=q(()=>a()[l()]);var x=lt(),b=g(x);{var f=h=>{var w=k(),D=A(w);oe(D,()=>c(v),(U,B)=>{B(U,se(i))}),u(h,w)},S=h=>{var w=k(),D=A(w);N(D,17,i,L,(U,B,P,V)=>{let I=()=>c(B).type,Y=()=>c(B).value;const Q=q(()=>a()[I()]||t[I()]),he=q(()=>typeof Y()=="string");var le=k(),ge=A(le);{var _e=j=>{var R=k(),Z=A(R);oe(Z,()=>c(Q),(X,$)=>{$(X,se(Y))}),u(j,R)},be=j=>{var R=it();W(R,Y,!0),d(R),u(j,R)},ye=j=>{var R=k(),Z=A(R);ae(Z,I,!1,(X,$)=>{var ce=k(),xe=A(ce);W(xe,Y),u($,ce)}),u(j,R)},Ce=j=>{var R=k(),Z=A(R);ae(Z,I,!1,(X,$)=>{Me(X,()=>({...Y()}))}),u(j,R)};ee(ge,j=>{c(Q)?j(_e):I()==="text"?j(be,1):c(he)?j(ye,2):j(Ce,-1)})}u(U,le)}),u(h,w)};ee(b,h=>{c(v)?h(f):h(S,-1)})}d(x),E(()=>me(x,"id",c(n))),u(p,x)}),u(r,s),z()}var vt=C('<p> </p> <progress max="100"></progress>',1);function ut(r,e){let t=O(e,"label",3,"A"),a=O(e,"value",3,0);var o=vt(),s=A(o),m=g(s,!0);d(s);var p=y(s,2);E(()=>{M(m,t()),ke(p,a())}),u(r,o)}var dt=C('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function mt(r,e){K(e,!0);const{body:t}=je,a={Test:ut};var o=dt(),s=y(g(o),2),m=g(s),p=g(m,!0);d(m),d(s);var _=y(s,2);ct(_,{get components(){return a},get body(){return t}}),d(o),E(l=>M(p,l),[()=>Qe.replace(/\t/g," ")]),u(r,o),z()}const ft=(r,e=ie)=>{var t=pt(),a=g(t),o=g(a,!0);d(a);var s=y(a,2),m=g(s,!0);d(s),d(t),E(()=>{M(o,e().name),M(m,e().age)}),u(r,t)};var pt=C('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),ht=C('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function gt(r,e){K(e,!0),O(e,"age",3,30);const t=[{name:"John",age:30},{name:"Jill",age:45}];let a=J(0),o=q(()=>c(a)*2),s=q(()=>c(a)*2),m=J(0);H(()=>{F(m,c(a)*2)});var p=ht(),_=y(A(p),4),l=y(_,2),i=g(l);d(l);var n=y(l,2),v=g(n);d(n);var x=y(n,2),b=g(x);d(x);var f=y(x,4),S=g(f);fe(S,()=>e.children??ie),d(f);var h=y(f,4),w=y(h,4);N(w,21,()=>t,L,(D,U)=>{ft(D,()=>c(U))}),d(w),E(()=>{M(i,`${c(a)??""} doubled is ${c(o)??""} (derived)`),M(v,`${c(a)??""} doubled is ${c(s)??""} (derived by)`),M(b,`${c(a)??""} doubled is ${c(m)??""} ($effect)`)}),ve("click",_,()=>De(a)),ve("click",h,()=>e.random(Math.floor(Math.random()*10))),u(r,p),z()}Ie(["click"]);var ue={},te={},ne=34,G=10,re=13;function pe(r){return new Function("d","return {"+r.map(function(e,t){return JSON.stringify(e)+": d["+t+'] || ""'}).join(",")+"}")}function _t(r,e){var t=pe(r);return function(a,o){return e(t(a),o,r)}}function de(r){var e=Object.create(null),t=[];return r.forEach(function(a){for(var o in a)o in e||t.push(e[o]=o)}),t}function T(r,e){var t=r+"",a=t.length;return a<e?new Array(e-a+1).join(0)+t:t}function bt(r){return r<0?"-"+T(-r,6):r>9999?"+"+T(r,6):T(r,4)}function yt(r){var e=r.getUTCHours(),t=r.getUTCMinutes(),a=r.getUTCSeconds(),o=r.getUTCMilliseconds();return isNaN(r)?"Invalid Date":bt(r.getUTCFullYear())+"-"+T(r.getUTCMonth()+1,2)+"-"+T(r.getUTCDate(),2)+(o?"T"+T(e,2)+":"+T(t,2)+":"+T(a,2)+"."+T(o,3)+"Z":a?"T"+T(e,2)+":"+T(t,2)+":"+T(a,2)+"Z":t||e?"T"+T(e,2)+":"+T(t,2)+"Z":"")}function Ct(r){var e=new RegExp('["'+r+`
\r]`),t=r.charCodeAt(0);function a(n,v){var x,b,f=o(n,function(S,h){if(x)return x(S,h-1);b=S,x=v?_t(S,v):pe(S)});return f.columns=b||[],f}function o(n,v){var x=[],b=n.length,f=0,S=0,h,w=b<=0,D=!1;n.charCodeAt(b-1)===G&&--b,n.charCodeAt(b-1)===re&&--b;function U(){if(w)return te;if(D)return D=!1,ue;var P,V=f,I;if(n.charCodeAt(V)===ne){for(;f++<b&&n.charCodeAt(f)!==ne||n.charCodeAt(++f)===ne;);return(P=f)>=b?w=!0:(I=n.charCodeAt(f++))===G?D=!0:I===re&&(D=!0,n.charCodeAt(f)===G&&++f),n.slice(V+1,P-1).replace(/""/g,'"')}for(;f<b;){if((I=n.charCodeAt(P=f++))===G)D=!0;else if(I===re)D=!0,n.charCodeAt(f)===G&&++f;else if(I!==t)continue;return n.slice(V,P)}return w=!0,n.slice(V,b)}for(;(h=U())!==te;){for(var B=[];h!==ue&&h!==te;)B.push(h),h=U();v&&(B=v(B,S++))==null||x.push(B)}return x}function s(n,v){return n.map(function(x){return v.map(function(b){return i(x[b])}).join(r)})}function m(n,v){return v==null&&(v=de(n)),[v.map(i).join(r)].concat(s(n,v)).join(`
`)}function p(n,v){return v==null&&(v=de(n)),s(n,v).join(`
`)}function _(n){return n.map(l).join(`
`)}function l(n){return n.map(i).join(r)}function i(n){return n==null?"":n instanceof Date?yt(n):e.test(n+="")?'"'+n.replace(/"/g,'""')+'"':n}return{parse:a,parseRows:o,format:m,formatBody:p,formatRows:_,formatRow:l,formatValue:i}}var xt=Ct(","),wt=xt.parse;const Dt=(r,e)=>{let t=J(Se(r)),a=J(null),o=J(!0),s=J(void 0);const m=(l=!0)=>{F(o,l,!0),l===!0&&(F(s,null),F(a,null))},p=async()=>{try{const l=await fetch(c(t),e);if(!l.ok)throw new Error(`Unexpected error occurred (status ${l.status})`);let i;if(c(t).includes(".csv")){const n=await l.text();i=wt(n)}else i=await l.json();return[null,i]}catch(l){const{errorMessage:i="Unexpected error eccurred"}=l;return[i,null]}},_=async l=>{m(!0);const[i,n]=await p();if(l===c(t)){if(i){m(!1),F(s,i,!0);return}m(!1),F(a,n,!0)}};return H(()=>{_(c(t))}),{get data(){return c(a)},get loading(){return c(o)},get error(){return c(s)},get url(){return c(t)},set url(l){c(t)!==l&&F(t,l,!0)}}};var St=C("<p>loading data...</p>"),At=C("<p> </p>"),It=C("<p>data loaded</p> <pre> </pre>",1),Tt=C('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function Mt(r,e){K(e,!0);const t=`${Re}/assets/demo/test.csv`,a=Dt(t);H(()=>{});var o=Tt(),s=y(g(o),2),m=g(s);{var p=i=>{var n=St();u(i,n)},_=i=>{var n=At(),v=g(n);d(n),E(()=>M(v,`error: ${a.error??""}`)),u(i,n)},l=i=>{var n=It(),v=y(A(n),2),x=g(v,!0);d(v),E(b=>M(x,b),[()=>JSON.stringify(a.data,null,2)]),u(i,n)};ee(m,i=>{a.loading?i(p):a.error?i(_,1):i(l,-1)})}d(s),d(o),u(r,o),z()}var kt=C('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function Et(r){let e=J(0);function t(v){console.log(v)}var a=kt(),o=y(g(a),2);Ue(o);var s=y(o,2);qe(s);var m=y(s,2);Ne(m);var p=y(m,2);We(p);var _=y(p,2);mt(_,{});var l=y(_,2);Mt(l,{});var i=y(l,2);ze(i);var n=y(i,2);gt(n,{random:t,get value(){return c(e)},set value(v){F(e,v,!0)}}),d(a),u(r,a)}function Wt(r){Et(r)}export{Wt as component};
