import"../chunks/DsnmJJEf.js";import{al as w,Z as g,$ as A,_ as h,X as F,G as c,an as E,W as J,ag as G,Y as V,ad as ie,J as M,aE as Ce,am as U,bi as ke,I as Se}from"../chunks/C22nnEDb.js";import{b as d,f as _,c as L,t as Ae}from"../chunks/BiexGjK5.js";import{b as D,g as Ye,f as ue}from"../chunks/CC-I0Egx.js";import{e as H,i as O,b as Te,s as me,c as De,d as Le}from"../chunks/vreypQoA.js";import{e as oe}from"../chunks/Bd_JMBhL.js";import{c as re}from"../chunks/9h9p49DC.js";import{s as se,p as X}from"../chunks/BvCBrjWE.js";import{s as fe}from"../chunks/tXVS1ob-.js";import{b as Fe,i as ee}from"../chunks/BrYhcFmw.js";import{h as P,c as Ne}from"../chunks/wFF7Ox4Y.js";import{b as Ie}from"../chunks/Dh-eyXoh.js";import"../chunks/DlOzM7pa.js";var Re=_('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p> <p><a href="ui">BitsUI styled components</a></p></section>');function je(a){var e=Re();d(a,e)}var Xe=_('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function Ee(a){var e=Xe();d(a,e)}var Me=_('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function He(a){const e=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var t=Me(),o=w(g(t),2);H(o,17,()=>e,O,(r,s)=>{let m=()=>c(s).tag,p=()=>c(s).text;var y=L(),l=A(y);oe(l,m,!1,(i,n)=>{var u=Ae();F(()=>D(u,p())),d(n,u)}),d(r,y)}),h(t),d(a,t)}var Oe=_("<p> </p>");function Be(a,e){var t=Oe(),o=g(t);h(t),F(()=>D(o,`I am component A and my favorite number is ${e.number??""}.`)),d(a,t)}var Ue=_("<p> </p>");function We(a,e){var t=Ue(),o=g(t);h(t),F(()=>D(o,`I am component B and my name is ${e.name??""}.`)),d(a,t)}var qe=_('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function Pe(a){const e={A:Be,B:We},t=[{component:"A",number:42},{component:"B",name:"Russell"}];var o=qe(),r=w(g(o),2);H(r,17,()=>t,O,(s,m)=>{const p=E(()=>e[c(m).component]);var y=L(),l=A(y);re(l,()=>c(p),(i,n)=>{n(i,se(()=>c(m)))}),d(s,y)}),h(o),d(a,o)}var Ze=_("<div><!></div>");function ze(a,e){J(e,!0);let t=X(e,"root",3,null),o=X(e,"top",3,0),r=X(e,"bottom",3,0),s=X(e,"increments",3,100),m=X(e,"value",15,void 0),p=[],y=[],l=[],i=[],n;function u(){let v=0,C=0;for(let k=0;k<p.length;k++)p[k]>v&&(v=p[k],C=k);v>0?m(C):m(void 0)}function x(v,C){const k=B=>{B[0].isIntersecting;const K=B[0].intersectionRatio;p[C]=K,u()},j=o()?o()*-1:0,R=r()?r()*-1:0,W=`${j}px 0px ${R}px 0px`,q={root:t(),rootMargin:W,threshold:y};i[C]&&i[C].disconnect();const Y=new IntersectionObserver(k,q);Y.observe(v),i[C]=Y}function b(){l.length&&l.forEach(x)}G(()=>{for(let v=0;v<s()+1;v++)y.push(v/s());l=n.querySelectorAll(":scope > *:not(iframe)"),b()}),G(()=>{o(),r(),b()});var f=Ze(),S=g(f);fe(S,()=>e.children??ie),h(f),Fe(f,v=>n=v,()=>n),d(a,f),V()}var Ge=_('<div><p class="svelte-1sxgmm9"> </p></div>'),Je=_('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function Ve(a){let e=U(void 0);var t=Je(),o=g(t),r=w(g(o)),s=g(r,!0);h(r),h(o);var m=w(o,4);ze(m,{get value(){return c(e)},set value(p){M(e,p,!0)},children:(p,y)=>{var l=L(),i=A(l);H(i,16,()=>[0,1,2,3,4],O,(n,u,x)=>{const b=E(()=>c(e)===x);var f=Ge();let S;var v=g(f),C=g(v,!0);h(v),h(f),F(()=>{S=Te(f,1,"step svelte-1sxgmm9",null,S,{active:c(b)}),D(C,u)}),d(n,f)}),d(p,l)},$$slots:{default:!0}}),Ce(2),h(t),F(()=>D(s,c(e)||"-")),d(a,t)}const Ke=`{
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
      "annotationX": "344",
      "annotationY": "405",
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
      "annotationX": "344",
      "annotationY": "405",
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
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000003649.png",
      "topLabel": "Hotel Bellevue, 1896, 9th Annual Honor of Crow Charlton, held by Flocking of the Crows",
      "image": "assets/menus/fish.png",
      "imageAlt": "Fish illustration",
      "bgZoom": "1",
      "focalX": "490",
      "focalY": "300",
      "anchorX": "0.5",
      "anchorY": "0.2",
      "annotationX": "344",
      "annotationY": "405",
      "body": [
        {
          "type": "text",
          "value": "Speaking of works of art, our third course: <i>vol au vent of sweetbread a la toulouse</i> – a pastry case filled with sweetbreads and a brown sauce – here paired with champagne."
        },
        {
          "type": "text",
          "value": "The American aristocratic restaurant of the late 19th century didn’t just have social distinction, it also served food that paired complex cooking technique with decadent, luxury ingredients."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/470278.png",
      "bgZoom": "1",
      "focalX": "490",
      "focalY": "300",
      "anchorX": "0.5",
      "anchorY": "0.2",
      "annotationX": "344",
      "annotationY": "405",
      "topLabel": "St. Nicholas Hotel, Cincinnati, OH, 1895",
      "body": [
        {
          "type": "text",
          "value": "Together, the <b>public nature of this luxury</b> was useful to differentiate the status and power of the people who dined out. Restaurant dining showcased what the elite ate, how much of it, and with what customs and trappings."
        },
        {
          "type": "text",
          "value": "To a certain extent, it also was unavoidable. In part, many of the elite restaurants at the time were in hotels that included room and board together, charging customers for a full menu with no a la carte option. Guests at the St. Nicholas, Hotel Colorado, or Laurel in the Pines, for example, would know that these dozen plus courses came standard."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000003816.png",
      "bgZoom": "1",
      "focalX": "490",
      "focalY": "300",
      "anchorX": "0.5",
      "anchorY": "0.2",
      "annotationX": "344",
      "annotationY": "405",
      "topLabel": "St. Andrew’s Society Anniversary, Palace Hotel, San Francisco, CA, 1896",
      "body": [
        {
          "type": "text",
          "value": "Feasting in public also started to become more and more necessary. As industrialization offered employment to the lower classes beyond the domestic sphere, the elite increasingly found they lacked the staff to host events themselves. Restaurants offered the space for private balls and events of all kinds – club meetings, memorials, or just a dinner for friends – further moving private wealth into the realm of conspicuous consumption."
        },
        {
          "type": "text",
          "value": "The menu from the St. Andrew’s day celebration held by a Scottish expat society in San Francisco is even carved, roughly, in the shape of Scotland."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/473284.png",
      "bgZoom": "1",
      "focalX": "490",
      "focalY": "300",
      "anchorX": "0.5",
      "anchorY": "0.2",
      "annotationX": "344",
      "annotationY": "405",
      "topLabel": "Dinner, Friends of William Clauss, The St. Nicolas Hotel, Cincinnati, OH, 1908",
      "body": [
        {
          "type": "text",
          "value": "Back at the St. Nicholas, one William Clauss was just hosting a dinner for his friends."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/466407.png",
      "layout": "fit-height",
      "topLabel": "Union Hotel, NYC, 1900",
      "image": "assets/menus/fish.png",
      "imageAlt": "Fish illustration",
      "body": [
        {
          "type": "text",
          "value": "We hope you enjoyed that <i>vol au vent</i> – and America’s elite surely had – because American restaurant dining is headed somewhere new."
        },
        {
          "type": "text",
          "value": "“Pork Chops Saute, Sauce Robert”  feels like a fitting next course: a traditional French sauce, sure, but some American is starting to come through."
        },
        {
          "type": "text",
          "value": "The name is now half in English, there’s a price attached, and it’s one of a number of a la carte options. The menu even warns that some dishes may take 15 minutes more to prepare!"
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000004412.png",
      "layout": "fit-height",
      "topLabel": "Waldorf-Astoria, NYC, 1897",
      "body": [
        {
          "type": "text",
          "value": "Our menus are following that same general structure from oysters to coffee, but they’re noticeably more complicated…"
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4039367.png",
      "layout": "fit-height",
      "topLabel": "English/French menu versions, Delmonicos, NYC, 1917 https://digitalcollections.nypl.org/items/62e49540-c548-012f-7124-58d385a7bc34",
      "body": [
        {
          "type": "text",
          "value": "and noticeably more English-friendly."
        },
        {
          "type": "text",
          "value": "As the centuries change, elite dining is changing – because restaurant dining is being transformed by everyone else."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000009030.png",
      "layout": "fit-height",
      "topLabel": "Hamblen’s Restaurant, NYC, 1900",
      "image": "assets/menus/fish.png",
      "imageAlt": "Fish illustration",
      "body": [
        {
          "type": "text",
          "value": "Here’s an iced coffee, on the house. That’s a nice thing now and a luxurious thing if it’s the turn of the century – when ice was still cut from frozen lakes and rivers and shipped to cities – and a real splurge if it’s the hot spring of 1900. The American Ice Company had just <a href=https://www.bklynlibrary.org/blog/2014/05/21/ice-delivery-city target=_blank>formed</a> a monopoly in the city – and then doubled its rates and cut deliveries, in order to juice profits and minimize labor costs."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/475432.png",
      "layout": "fit-height",
      "topLabel": "Putnam House Hotel, NYC, 1900",
      "body": [
        {
          "type": "text",
          "value": "It didn’t last long: an outcry by a new, burgeoning class of workers and consumers who forced the company to resume normal business."
        },
        {
          "type": "text",
          "value": "More broadly, this force was at the center of a broader transformation of American industry, American dining, and American society.  This force, the new middle class, first broke open restaurant dining into new forms beyond the aristocratic table and then forced the creation of something entirely new."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/467291.png",
      "layout": "fit-height",
      "topLabel": "Central Restaurant, NYC, 1900",
      "body": [
        {
          "type": "text",
          "value": "In the late nineteenth century into the early 20th century, industrialization and a managerial revolution produced a working middle class who needed to eat out, wanted something better than the old taverns and dives, and had the spare money to afford it."
        },
        {
          "type": "text",
          "value": "At the same time, the technological innovation transforming the labor market also made it cheaper to produce, transport, and preserve food."
        },
        {
          "type": "text",
          "value": "Together, restaurants started to transform to, and transform with, this new mass of workers."
        },
        {
          "type": "text",
          "value": "As Andrew P. Haley writes in “Turning Tables: Restaurants and the Rise of the Middle Class, 1880-1920”:"
        },
        {
          "type": "text",
          "value": "“The collective purchasing power of the emerging middle class encouraged restaurant entrepreneurs to cater to their tastes, and, over the course of forty years, small preferences about how to dine begot cultural changes that eventually birthed both middle-class restaurants and the modern middle class itself.”(69)"
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/467308.png",
      "layout": "fit-height",
      "topLabel": "Pure Food Cafes, NYC, 1900",
      "body": [
        {
          "type": "text",
          "value": "From 1880 to 1920, the number of professional occupations doubled, as did the percentage of Americans working in management. At the same time, employment in the dining industry grew 400%."
        },
        {
          "type": "text",
          "value": "In this explosion, the American restaurant didn’t just appear as an answer to the aristocratic restaurant model – it had evolve out of a host of other models of dining that emerged in between."
        },
        {
          "type": "text",
          "value": "Table d’hote menus offered a selection of dishes at a fixed priced that mimicked the coursing of a fine dining restaurant, but with less luxurious ingredients and a more affordable price. As in this menu from the Putnam House, these places attempted to be “American” while also evoking the abundance of elite dining."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4066460.png",
      "layout": "fit-height",
      "topLabel": "Walton’s Old Homestead Oyster and Chop House, NYC, 1914",
      "body": [
        {
          "type": "text",
          "value": "The <b>beefsteak or chophouse</b> were, as it sounds, a place to find meat. The New York Times described, in 1881, how all kinds of men could be found here:   “the tables were full, and the customers were of all sorts and kinds – well dressed people, evidently with plenty of money in their pockets, market-men, countrymen, clerks, store boys – a regular gathering of clans scattered at Babel.”  And these restaurants offered just as many ways to eat meat."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/470923.png",
      "layout": "fit-height",
      "topLabel": "Child’s Lunch Rooms, NYC, 1901",
      "body": [
        {
          "type": "text",
          "value": "<b>Lunchrooms</b> offered somewhat lighter fare for a broader audience. The counter was often saved for men, sure, but there was also a dining room for couples and families. They offered diner-sized menus with plenty of options “ready” to eat – or available to go – for folks hurrying back to work."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000007306.png",
      "layout": "fit-height",
      "topLabel": "Dennett’s Surpassing Coffee, NYC, 1900",
      "body": [
        {
          "type": "text",
          "value": "Finally, at <b>coffee and cake saloons</b>, women could find cakes, ice creams, and light lunches – without the expectation of a male dining companion."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4034351.png",
      "layout": "fit-height",
      "topLabel": "Regal Bakery & Restaurant, NYC, 1919",
      "body": [
        {
          "type": "text",
          "value": "In each of these establishments – and in restaurant dining, generally – menus from the beginning of the 20th century show wild departures from what dining looked like just a few decades earlier. They even start to look familiar to us today."
        }
      ]
    }
  ]
}`;var Qe=_("<p></p>"),$e=_('<details><summary></summary> <div class="content"><!></div></details>');function et(a,e){let t=E(()=>typeof e.content=="string"),o=E(()=>e.open==="true");var r=$e(),s=g(r);P(s,()=>e.summary,!0),h(s);var m=w(s,2),p=g(m);{var y=i=>{var n=L(),u=A(n);P(u,()=>e.content),d(i,n)},l=i=>{var n=L(),u=A(n);H(u,17,()=>e.content,O,(x,b)=>{let f=()=>c(b).value;var S=Qe();P(S,f,!0),h(S),d(x,S)}),d(i,n)};ee(p,i=>{c(t)?i(y):i(l,-1)})}h(m),h(r),F(()=>{r.open=c(o),me(r,"name",e.name)}),d(a,r)}var tt=_("<li></li>"),nt=_("<ul></ul>");function at(a,e){var t=nt();H(t,21,()=>e.li,O,(o,r)=>{var s=tt();P(s,()=>c(r),!0),h(s),d(o,s)}),h(t),d(a,t)}var ot=_("<li></li>"),rt=_("<ol></ol>");function st(a,e){var t=rt();H(t,21,()=>e.li,O,(o,r)=>{var s=ot();P(s,()=>c(r),!0),h(s),d(o,s)}),h(t),d(a,t)}var it=_("<p></p>"),lt=_("<section><!></section>");function ct(a,e){J(e,!0);const t={details:et,ul:at,ol:st};let o=X(e,"components",19,()=>({})),r=X(e,"body",19,()=>[]);var s=L(),m=A(s);H(m,17,r,O,(p,y)=>{let l=()=>c(y).section,i=()=>c(y).content;const n=E(()=>l().toLowerCase().replace(/[^a-z0-9]/g,"")),u=E(()=>o()[l()]);var x=lt(),b=g(x);{var f=v=>{var C=L(),k=A(C);re(k,()=>c(u),(j,R)=>{R(j,se(i))}),d(v,C)},S=v=>{var C=L(),k=A(C);H(k,17,i,O,(j,R,W,q)=>{let Y=()=>c(R).type,B=()=>c(R).value;const K=E(()=>o()[Y()]||t[Y()]),ve=E(()=>typeof B()=="string");var le=L(),ge=A(le);{var ye=N=>{var I=L(),Z=A(I);re(Z,()=>c(K),(Q,$)=>{$(Q,se(B))}),d(N,I)},be=N=>{var I=it();P(I,B,!0),h(I),d(N,I)},we=N=>{var I=L(),Z=A(I);oe(Z,Y,!1,(Q,$)=>{var ce=L(),xe=A(ce);P(xe,B),d($,ce)}),d(N,I)},_e=N=>{var I=L(),Z=A(I);oe(Z,Y,!1,(Q,$)=>{De(Q,()=>({...B()}))}),d(N,I)};ee(ge,N=>{c(K)?N(ye):Y()==="text"?N(be,1):c(ve)?N(we,2):N(_e,-1)})}d(j,le)}),d(v,C)};ee(b,v=>{c(u)?v(f):v(S,-1)})}h(x),F(()=>me(x,"id",c(n))),d(p,x)}),d(a,s),V()}var ut=_('<p> </p> <progress max="100"></progress>',1);function dt(a,e){let t=X(e,"label",3,"A"),o=X(e,"value",3,0);var r=ut(),s=A(r),m=g(s,!0);h(s);var p=w(s,2);F(()=>{D(m,t()),Le(p,o())}),d(a,r)}var ht=_('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function mt(a,e){J(e,!0);const{body:t}=Ne,o={Test:dt};var r=ht(),s=w(g(r),2),m=g(s),p=g(m,!0);h(m),h(s);var y=w(s,2);ct(y,{get components(){return o},get body(){return t}}),h(r),F(l=>D(p,l),[()=>Ke.replace(/\t/g," ")]),d(a,r),V()}const ft=(a,e=ie)=>{var t=pt(),o=g(t),r=g(o,!0);h(o);var s=w(o,2),m=g(s,!0);h(s),h(t),F(()=>{D(r,e().name),D(m,e().age)}),d(a,t)};var pt=_('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),vt=_('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function gt(a,e){J(e,!0),X(e,"age",3,30);const t=[{name:"John",age:30},{name:"Jill",age:45}];let o=U(0),r=E(()=>c(o)*2),s=E(()=>c(o)*2),m=U(0);G(()=>{M(m,c(o)*2)});var p=vt(),y=w(A(p),4),l=w(y,2),i=g(l);h(l);var n=w(l,2),u=g(n);h(n);var x=w(n,2),b=g(x);h(x);var f=w(x,4),S=g(f);fe(S,()=>e.children??ie),h(f);var v=w(f,4),C=w(v,4);H(C,21,()=>t,O,(k,j)=>{ft(k,()=>c(j))}),h(C),F(()=>{D(i,`${c(o)??""} doubled is ${c(r)??""} (derived)`),D(u,`${c(o)??""} doubled is ${c(s)??""} (derived by)`),D(b,`${c(o)??""} doubled is ${c(m)??""} ($effect)`)}),ue("click",y,()=>ke(o)),ue("click",v,()=>e.random(Math.floor(Math.random()*10))),d(a,p),V()}Ye(["click"]);var de={},te={},ne=34,z=10,ae=13;function pe(a){return new Function("d","return {"+a.map(function(e,t){return JSON.stringify(e)+": d["+t+'] || ""'}).join(",")+"}")}function yt(a,e){var t=pe(a);return function(o,r){return e(t(o),r,a)}}function he(a){var e=Object.create(null),t=[];return a.forEach(function(o){for(var r in o)r in e||t.push(e[r]=r)}),t}function T(a,e){var t=a+"",o=t.length;return o<e?new Array(e-o+1).join(0)+t:t}function bt(a){return a<0?"-"+T(-a,6):a>9999?"+"+T(a,6):T(a,4)}function wt(a){var e=a.getUTCHours(),t=a.getUTCMinutes(),o=a.getUTCSeconds(),r=a.getUTCMilliseconds();return isNaN(a)?"Invalid Date":bt(a.getUTCFullYear())+"-"+T(a.getUTCMonth()+1,2)+"-"+T(a.getUTCDate(),2)+(r?"T"+T(e,2)+":"+T(t,2)+":"+T(o,2)+"."+T(r,3)+"Z":o?"T"+T(e,2)+":"+T(t,2)+":"+T(o,2)+"Z":t||e?"T"+T(e,2)+":"+T(t,2)+"Z":"")}function _t(a){var e=new RegExp('["'+a+`
\r]`),t=a.charCodeAt(0);function o(n,u){var x,b,f=r(n,function(S,v){if(x)return x(S,v-1);b=S,x=u?yt(S,u):pe(S)});return f.columns=b||[],f}function r(n,u){var x=[],b=n.length,f=0,S=0,v,C=b<=0,k=!1;n.charCodeAt(b-1)===z&&--b,n.charCodeAt(b-1)===ae&&--b;function j(){if(C)return te;if(k)return k=!1,de;var W,q=f,Y;if(n.charCodeAt(q)===ne){for(;f++<b&&n.charCodeAt(f)!==ne||n.charCodeAt(++f)===ne;);return(W=f)>=b?C=!0:(Y=n.charCodeAt(f++))===z?k=!0:Y===ae&&(k=!0,n.charCodeAt(f)===z&&++f),n.slice(q+1,W-1).replace(/""/g,'"')}for(;f<b;){if((Y=n.charCodeAt(W=f++))===z)k=!0;else if(Y===ae)k=!0,n.charCodeAt(f)===z&&++f;else if(Y!==t)continue;return n.slice(q,W)}return C=!0,n.slice(q,b)}for(;(v=j())!==te;){for(var R=[];v!==de&&v!==te;)R.push(v),v=j();u&&(R=u(R,S++))==null||x.push(R)}return x}function s(n,u){return n.map(function(x){return u.map(function(b){return i(x[b])}).join(a)})}function m(n,u){return u==null&&(u=he(n)),[u.map(i).join(a)].concat(s(n,u)).join(`
`)}function p(n,u){return u==null&&(u=he(n)),s(n,u).join(`
`)}function y(n){return n.map(l).join(`
`)}function l(n){return n.map(i).join(a)}function i(n){return n==null?"":n instanceof Date?wt(n):e.test(n+="")?'"'+n.replace(/"/g,'""')+'"':n}return{parse:o,parseRows:r,format:m,formatBody:p,formatRows:y,formatRow:l,formatValue:i}}var xt=_t(","),Ct=xt.parse;const kt=(a,e)=>{let t=U(Se(a)),o=U(null),r=U(!0),s=U(void 0);const m=(l=!0)=>{M(r,l,!0),l===!0&&(M(s,null),M(o,null))},p=async()=>{try{const l=await fetch(c(t),e);if(!l.ok)throw new Error(`Unexpected error occurred (status ${l.status})`);let i;if(c(t).includes(".csv")){const n=await l.text();i=Ct(n)}else i=await l.json();return[null,i]}catch(l){const{errorMessage:i="Unexpected error eccurred"}=l;return[i,null]}},y=async l=>{m(!0);const[i,n]=await p();if(l===c(t)){if(i){m(!1),M(s,i,!0);return}m(!1),M(o,n,!0)}};return G(()=>{y(c(t))}),{get data(){return c(o)},get loading(){return c(r)},get error(){return c(s)},get url(){return c(t)},set url(l){c(t)!==l&&M(t,l,!0)}}};var St=_("<p>loading data...</p>"),At=_("<p> </p>"),Yt=_("<p>data loaded</p> <pre> </pre>",1),Tt=_('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function Dt(a,e){J(e,!0);const t=`${Ie}/assets/demo/test.csv`,o=kt(t);G(()=>{});var r=Tt(),s=w(g(r),2),m=g(s);{var p=i=>{var n=St();d(i,n)},y=i=>{var n=At(),u=g(n);h(n),F(()=>D(u,`error: ${o.error??""}`)),d(i,n)},l=i=>{var n=Yt(),u=w(A(n),2),x=g(u,!0);h(u),F(b=>D(x,b),[()=>JSON.stringify(o.data,null,2)]),d(i,n)};ee(m,i=>{o.loading?i(p):o.error?i(y,1):i(l,-1)})}h(s),h(r),d(a,r),V()}var Lt=_('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function Ft(a){let e=U(0);function t(u){console.log(u)}var o=Lt(),r=w(g(o),2);je(r);var s=w(r,2);Ee(s);var m=w(s,2);He(m);var p=w(m,2);Pe(p);var y=w(p,2);mt(y,{});var l=w(y,2);Dt(l,{});var i=w(l,2);Ve(i);var n=w(i,2);gt(n,{random:t,get value(){return c(e)},set value(u){M(e,u,!0)}}),h(o),d(a,o)}function Pt(a){Ft(a)}export{Pt as component};
