import"../chunks/DsnmJJEf.js";import{al as w,Z as v,$ as A,_ as h,X as F,G as u,an as B,W as J,ag as G,Y as V,ad as ie,J as M,aE as ke,am as P,bi as _e,I as Se}from"../chunks/C22nnEDb.js";import{b as d,f as x,c as N,t as Ae}from"../chunks/BiexGjK5.js";import{b as L,g as Te,f as ce}from"../chunks/CC-I0Egx.js";import{e as E,i as X,b as Ye,s as me,c as Le,d as Ne}from"../chunks/vreypQoA.js";import{e as oe}from"../chunks/Bd_JMBhL.js";import{c as se}from"../chunks/9h9p49DC.js";import{s as re,p as H}from"../chunks/BvCBrjWE.js";import{s as pe}from"../chunks/tXVS1ob-.js";import{b as Fe,i as ee}from"../chunks/BrYhcFmw.js";import{h as U,c as Re}from"../chunks/C47byzwX.js";import{b as Ie}from"../chunks/BVyut1_K.js";import"../chunks/DlOzM7pa.js";var De=x('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p> <p><a href="ui">BitsUI styled components</a></p></section>');function je(a){var e=De();d(a,e)}var He=x('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function Be(a){var e=He();d(a,e)}var Me=x('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function Ee(a){const e=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var n=Me(),o=w(v(n),2);E(o,17,()=>e,X,(s,r)=>{let m=()=>u(r).tag,f=()=>u(r).text;var y=N(),l=A(y);oe(l,m,!1,(i,t)=>{var c=Ae();F(()=>L(c,f())),d(t,c)}),d(s,y)}),h(n),d(a,n)}var Xe=x("<p> </p>");function Oe(a,e){var n=Xe(),o=v(n);h(n),F(()=>L(o,`I am component A and my favorite number is ${e.number??""}.`)),d(a,n)}var Pe=x("<p> </p>");function We(a,e){var n=Pe(),o=v(n);h(n),F(()=>L(o,`I am component B and my name is ${e.name??""}.`)),d(a,n)}var qe=x('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function Ue(a){const e={A:Oe,B:We},n=[{component:"A",number:42},{component:"B",name:"Russell"}];var o=qe(),s=w(v(o),2);E(s,17,()=>n,X,(r,m)=>{const f=B(()=>e[u(m).component]);var y=N(),l=A(y);se(l,()=>u(f),(i,t)=>{t(i,re(()=>u(m)))}),d(r,y)}),h(o),d(a,o)}var ze=x("<div><!></div>");function Ze(a,e){J(e,!0);let n=H(e,"root",3,null),o=H(e,"top",3,0),s=H(e,"bottom",3,0),r=H(e,"increments",3,100),m=H(e,"value",15,void 0),f=[],y=[],l=[],i=[],t;function c(){let g=0,k=0;for(let _=0;_<f.length;_++)f[_]>g&&(g=f[_],k=_);g>0?m(k):m(void 0)}function C(g,k){const _=O=>{O[0].isIntersecting;const K=O[0].intersectionRatio;f[k]=K,c()},j=o()?o()*-1:0,D=s()?s()*-1:0,W=`${j}px 0px ${D}px 0px`,q={root:n(),rootMargin:W,threshold:y};i[k]&&i[k].disconnect();const T=new IntersectionObserver(_,q);T.observe(g),i[k]=T}function b(){l.length&&l.forEach(C)}G(()=>{for(let g=0;g<r()+1;g++)y.push(g/r());l=t.querySelectorAll(":scope > *:not(iframe)"),b()}),G(()=>{o(),s(),b()});var p=ze(),S=v(p);pe(S,()=>e.children??ie),h(p),Fe(p,g=>t=g,()=>t),d(a,p),V()}var Ge=x('<div><p class="svelte-1sxgmm9"> </p></div>'),Je=x('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function Ve(a){let e=P(void 0);var n=Je(),o=v(n),s=w(v(o)),r=v(s,!0);h(s),h(o);var m=w(o,4);Ze(m,{get value(){return u(e)},set value(f){M(e,f,!0)},children:(f,y)=>{var l=N(),i=A(l);E(i,16,()=>[0,1,2,3,4],X,(t,c,C)=>{const b=B(()=>u(e)===C);var p=Ge();let S;var g=v(p),k=v(g,!0);h(g),h(p),F(()=>{S=Ye(p,1,"step svelte-1sxgmm9",null,S,{active:u(b)}),L(k,c)}),d(t,p)}),d(f,l)},$$slots:{default:!0}}),ke(2),h(n),F(()=>L(r,u(e)||"-")),d(a,n)}const Ke=`{
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
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4067328.png",
      "layout": "fit-height",
      "topLabel": "Hotel Princesa Café, NYC, 1914",
      "image": "assets/menus/fish.png",
      "imageAlt": "Fish illustration",
      "body": [
        {
          "type": "text",
          "value": "The Thursday Special at the Hotel Princesa Cafe and Restaurant – roast ham, sweet potato dressing, southern yams, apple sauce, johnny cakes – demonstrates how much the voracious middle-class was changing restaurant dining into the first decades of the 20th century."
        },
        {
          "type": "text",
          "value": "Out of all these experiments, the full American restaurant – a place that offers everything to everyone – is starting to take shape."
        },
        {
          "type": "text",
          "value": "New diners, new types of restaurants, new ways of eating all called for new kinds of menus. And, often, menus that had a lot more information about what restaurants and restaurant dining ought to be."
        },
        {
          "type": "text",
          "value": "At the Hotel Princesa Cafe & Restaurant, a particularly elaborate example, there are more words used on prose about dining than there are spent on dishes to order. Here and elsewhere, restaurateurs were speaking to a new cohort of diners – telling them why to come, who to pay, where to sit, and what’s available when."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4067314.png",
      "layout": "fit-height",
      "topLabel": "Rigg’s, NYC, 1914",
      "body": [
        {
          "type": "text",
          "value": "The elite European menu operated in courses: the middle-class restaurant understood that busy workers wanted a good deal and a complete meal in a fixed amount of time, that a new wave of shoppers could also be convinced to stop for a meal among their errands."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4066373.png",
      "layout": "fit-height",
      "topLabel": "Adams' Restaurant, NYC, 1914",
      "body": [
        {
          "type": "text",
          "value": "It’s normal today for a menu to offer specials or combination plates where a main comes with sides, but it was a restaurant breakthrough at the time. It signified that while diners surely wanted to eat out to enjoy it, they also demanded that it met their practical needs: balanced, affordable, and efficient."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4046433.png",
      "layout": "fit-height",
      "topLabel": "Café Savarin, NYC, 1915. https://digitalcollections.nypl.org/items/433747e0-c547-012f-693d-58d385a7bc34",
      "image": "assets/menus/fish.png",
      "imageAlt": "Fish illustration",
      "body": [
        {
          "type": "text",
          "value": "When Café Savarin opened, in 1888, the Times <a href=https://timesmachine.nytimes.com/timesmachine/1888/01/08/106308764.html?pageNumber=5 target=_blank>wrote</a> that “the best corps of cooks and waiters Paris could afford has been secured” to serve the french menu."
        },
        {
          "type": "text",
          "value": "By 1915, the menu offered dishes inflected by French, German, Italian, Hungarian, British, Indian, Japanese, and Caribbean cuisines."
        },
        {
          "type": "text",
          "value": "It feels right to order the Pepper Pot here then – a <a href=https://philadelphiaencyclopedia.org/essays/philadelphia-pepper-pot/ target=_blank>dish</a> with origins in West Africa, transformation in the West Indies, and another evolution in the United States."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4066701.png",
      "layout": "fit-height",
      "topLabel": "Rathskeller, NYC, 1914",
      "body": [
        {
          "type": "text",
          "value": "Middle-class diners didn’t just want cheap copies of the fancy French restaurant or better versions of the old American taverns – they wanted something else to eat, too."
        },
        {
          "type": "text",
          "value": "By the early 1900s immigrants had established significant footholds and enclaves in American cities, bringing their food cultures with them. The emerging middle class living or working in those cities saw this culinary diversity as a source of national pride, immigrant entrepreneurship as a symbol of American accomplishment. Then, as now, Americans embracing foreign food was fully compatible with maintaining racist and xenophobic beliefs. Nonetheless, whether as authentic cultural inclusion or more cynical exoticism, as Haley writes, these diners “equated excellence with a diverse knowledge of cultural experiences rather than a mastery of a single highbrow tradition.”"
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4039920.png",
      "layout": "fit-height",
      "topLabel": "The Syrian Restaurant for Ladies' & Gents, NYC, 1917",
      "body": [
        {
          "type": "text",
          "value": "Italian and German restaurants were early challengers to French dominance over American dominance, but middle class diners also found that there were already also a glut of restaurants serving local immigrant populations that would be happy to take their business, too."
        },
        {
          "type": "text",
          "value": "The specific offerings depended on the city, but diners started to bring big their money and demands to, say, Chinese, Russian, or Syrian restaurateurs, too."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/471895.png",
      "layout": "fit-height",
      "topLabel": "Mann Fang Lowe, NYC, 1905",
      "body": [
        {
          "type": "text",
          "value": "Even if these places were a little unfamiliar, they were more accessible than the old aristocratic restaurants: these businesses actually wanted to accommodate the middle classes. Some restaurants even offered split menus that offered all the American classics as well as food from a particular cuisine."
        },
        {
          "type": "text",
          "value": "The “cosmopolitan” trend wasn’t contained to ethnic restaurants – restaurants of all kinds started to serve dishes that were, or at least pretended to be, from foreign lands well beyond France."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4037718.png",
      "layout": "fit-height",
      "topLabel": "R.H. Macy and Co., NYC, 1917",
      "image": "assets/menus/fish.png",
      "imageAlt": "Fish illustration",
      "body": [
        {
          "type": "text",
          "value": "Why not wash that down with a “Horse’s Neck”?  While the beverage later added alcohol, it originated as a nonalcoholic mix of ginger ale and a long curling lemon rind, one of many new booze-free options appearing on menus in the early 20th century."
        },
        {
          "type": "text",
          "value": "Inspecting the beverages on these menus suggests how much had changed from feasts accompanied solely with wines, liqueurs, and mineral waters. Now diners had work to do, appearances to keep up, or, well, just be children."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4029870.png",
      "layout": "fit-height",
      "topLabel": "Joe's Restaurant, Brooklyn, NY, 1920",
      "body": [
        {
          "type": "text",
          "value": "While restaurants didn’t fix racism in America, dining in America did diversify across age and gender in this era. Aristocratic French restaurants had once been the province purely of men; later, lunch counters and other new type of eateries segregated the sexes. But as the new century progressed, restaurants not only shifted to mixed gender dining rooms they also began to cater to the opportunity to feed entire families."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4025914.png",
      "layout": "fit-height",
      "topLabel": "Dinner to the Directors of Metropolitan Life Insurance, Metropolitan Club, NYC, 1921",
      "image": "assets/menus/fish.png",
      "imageAlt": "Fish illustration",
      "body": [
        {
          "type": "text",
          "value": "Of course the rich were still eating out all this time, too."
        },
        {
          "type": "text",
          "value": "Into the first decades of the 20th century, the traditional, coursed menus still existed and the elite were still hosting luxurious banquets. Social transformation is slow and rarely complete."
        },
        {
          "type": "text",
          "value": "But in some fancier restaurants aimed at the elite, the menu might look a lot more like how the middle-classes were transforming restaurant dining."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4025971.png",
      "layout": "fit-height",
      "topLabel": "The Portland, 1921",
      "body": [
        {
          "type": "text",
          "value": "There were now English, a la carte menus with prices, combination plates, and even music – formerly scorned as interference in the true focus of dining."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000017237.png",
      "layout": "fit-height",
      "topLabel": "Rector’s, Chicago, IL, 1906",
      "body": [
        {
          "type": "text",
          "value": "Just as middle class restaurants now offered customers a variety of options to meet their desires, some elite restaurants confronted the now crowded restaurant market with a new take on abundance. Rector’s, in Chicago, offers  a dizzying selection for every section – including 25 kinds of potatoes. Potatoes O’Brien Au Gratin is a fitting or the modern <i>melange</i>."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4036997.png",
      "layout": "fit-height",
      "topLabel": "Fleischmann's Vienna Restaurant, NYC, 1917",
      "image": "assets/menus/fish.png",
      "imageAlt": "Fish illustration",
      "body": [
        {
          "type": "text",
          "value": "Amidst all this, the emerging science of nutrition provided many diners extra nudge away from extravagant, calorie-rich meals. The early 20th century featured a concerted push for healthier, simpler eating."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4036998.png",
      "layout": "fit-height",
      "topLabel": "Fleischmann's Vienna Restaurant, NYC, 1917",
      "body": [
        {
          "type": "text",
          "value": "Of course, even if it was no longer included in a set menu, people still wanted to order dessert. Advances in artificial refrigeration – that didn’t rely on blocks of ice – made all kinds of sweet treats readily made and stored. Fleischmann’s offers almost twenty different frozen desserts and just as many cakes and pastries. A “nesselrode pudding” would have been a popular choice – a chestnut-based frozen dessert studded with liquor-soaked dried fruits."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4036998.png",
      "layout": "fit-height",
      "topLabel": "Fleischmann's Vienna Restaurant, NYC, 1917",
      "body": [
        {
          "type": "text",
          "value": "But to end this meal, perhaps it’s worth revisiting something a little more familiar."
        },
        {
          "type": "text",
          "value": "If you visit Delmonico’s today, the menu has changed a bit – there’s yellowtail crudo, a burrata, sichuan peppercorn sauce, a cocktail with pandan. But you can also still order a baked alaska, invented there in 1867."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4036998.png",
      "layout": "fit-height",
      "topLabel": "Fleischmann's Vienna Restaurant, NYC, 1917",
      "body": [
        {
          "type": "text",
          "value": "Restaurant dining in America was once an imitation: wannabe aristocrats attempting French feasting. But as the 19th became the 20th century, the American middle class and the true American restaurant emerged: diverse, accessible, opinionated, at times chaotic."
        },
        {
          "type": "text",
          "value": "And that was before the rise of fast food, revolutionizing American dining yet again a few decades later."
        },
        {
          "type": "text",
          "value": "Today’s menus show how while  TK TK"
        },
        {
          "type": "TK",
          "value": "comment on contemporary menu"
        },
        {
          "type": "text",
          "value": "To dive into the origins yourself, we’ve collected 5000 menus for you. Right this way:"
        }
      ]
    }
  ]
}`;var Qe=x("<p></p>"),$e=x('<details><summary></summary> <div class="content"><!></div></details>');function en(a,e){let n=B(()=>typeof e.content=="string"),o=B(()=>e.open==="true");var s=$e(),r=v(s);U(r,()=>e.summary,!0),h(r);var m=w(r,2),f=v(m);{var y=i=>{var t=N(),c=A(t);U(c,()=>e.content),d(i,t)},l=i=>{var t=N(),c=A(t);E(c,17,()=>e.content,X,(C,b)=>{let p=()=>u(b).value;var S=Qe();U(S,p,!0),h(S),d(C,S)}),d(i,t)};ee(f,i=>{u(n)?i(y):i(l,-1)})}h(m),h(s),F(()=>{s.open=u(o),me(s,"name",e.name)}),d(a,s)}var nn=x("<li></li>"),tn=x("<ul></ul>");function an(a,e){var n=tn();E(n,21,()=>e.li,X,(o,s)=>{var r=nn();U(r,()=>u(s),!0),h(r),d(o,r)}),h(n),d(a,n)}var on=x("<li></li>"),sn=x("<ol></ol>");function rn(a,e){var n=sn();E(n,21,()=>e.li,X,(o,s)=>{var r=on();U(r,()=>u(s),!0),h(r),d(o,r)}),h(n),d(a,n)}var ln=x("<p></p>"),un=x("<section><!></section>");function cn(a,e){J(e,!0);const n={details:en,ul:an,ol:rn};let o=H(e,"components",19,()=>({})),s=H(e,"body",19,()=>[]);var r=N(),m=A(r);E(m,17,s,X,(f,y)=>{let l=()=>u(y).section,i=()=>u(y).content;const t=B(()=>l().toLowerCase().replace(/[^a-z0-9]/g,"")),c=B(()=>o()[l()]);var C=un(),b=v(C);{var p=g=>{var k=N(),_=A(k);se(_,()=>u(c),(j,D)=>{D(j,re(i))}),d(g,k)},S=g=>{var k=N(),_=A(k);E(_,17,i,X,(j,D,W,q)=>{let T=()=>u(D).type,O=()=>u(D).value;const K=B(()=>o()[T()]||n[T()]),ge=B(()=>typeof O()=="string");var le=N(),ve=A(le);{var ye=R=>{var I=N(),z=A(I);se(z,()=>u(K),(Q,$)=>{$(Q,re(O))}),d(R,I)},be=R=>{var I=ln();U(I,O,!0),h(I),d(R,I)},we=R=>{var I=N(),z=A(I);oe(z,T,!1,(Q,$)=>{var ue=N(),Ce=A(ue);U(Ce,O),d($,ue)}),d(R,I)},xe=R=>{var I=N(),z=A(I);oe(z,T,!1,(Q,$)=>{Le(Q,()=>({...O()}))}),d(R,I)};ee(ve,R=>{u(K)?R(ye):T()==="text"?R(be,1):u(ge)?R(we,2):R(xe,-1)})}d(j,le)}),d(g,k)};ee(b,g=>{u(c)?g(p):g(S,-1)})}h(C),F(()=>me(C,"id",u(t))),d(f,C)}),d(a,r),V()}var dn=x('<p> </p> <progress max="100"></progress>',1);function hn(a,e){let n=H(e,"label",3,"A"),o=H(e,"value",3,0);var s=dn(),r=A(s),m=v(r,!0);h(r);var f=w(r,2);F(()=>{L(m,n()),Ne(f,o())}),d(a,s)}var mn=x('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function pn(a,e){J(e,!0);const{body:n}=Re,o={Test:hn};var s=mn(),r=w(v(s),2),m=v(r),f=v(m,!0);h(m),h(r);var y=w(r,2);cn(y,{get components(){return o},get body(){return n}}),h(s),F(l=>L(f,l),[()=>Ke.replace(/\t/g," ")]),d(a,s),V()}const fn=(a,e=ie)=>{var n=gn(),o=v(n),s=v(o,!0);h(o);var r=w(o,2),m=v(r,!0);h(r),h(n),F(()=>{L(s,e().name),L(m,e().age)}),d(a,n)};var gn=x('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),vn=x('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function yn(a,e){J(e,!0),H(e,"age",3,30);const n=[{name:"John",age:30},{name:"Jill",age:45}];let o=P(0),s=B(()=>u(o)*2),r=B(()=>u(o)*2),m=P(0);G(()=>{M(m,u(o)*2)});var f=vn(),y=w(A(f),4),l=w(y,2),i=v(l);h(l);var t=w(l,2),c=v(t);h(t);var C=w(t,2),b=v(C);h(C);var p=w(C,4),S=v(p);pe(S,()=>e.children??ie),h(p);var g=w(p,4),k=w(g,4);E(k,21,()=>n,X,(_,j)=>{fn(_,()=>u(j))}),h(k),F(()=>{L(i,`${u(o)??""} doubled is ${u(s)??""} (derived)`),L(c,`${u(o)??""} doubled is ${u(r)??""} (derived by)`),L(b,`${u(o)??""} doubled is ${u(m)??""} ($effect)`)}),ce("click",y,()=>_e(o)),ce("click",g,()=>e.random(Math.floor(Math.random()*10))),d(a,f),V()}Te(["click"]);var de={},ne={},te=34,Z=10,ae=13;function fe(a){return new Function("d","return {"+a.map(function(e,n){return JSON.stringify(e)+": d["+n+'] || ""'}).join(",")+"}")}function bn(a,e){var n=fe(a);return function(o,s){return e(n(o),s,a)}}function he(a){var e=Object.create(null),n=[];return a.forEach(function(o){for(var s in o)s in e||n.push(e[s]=s)}),n}function Y(a,e){var n=a+"",o=n.length;return o<e?new Array(e-o+1).join(0)+n:n}function wn(a){return a<0?"-"+Y(-a,6):a>9999?"+"+Y(a,6):Y(a,4)}function xn(a){var e=a.getUTCHours(),n=a.getUTCMinutes(),o=a.getUTCSeconds(),s=a.getUTCMilliseconds();return isNaN(a)?"Invalid Date":wn(a.getUTCFullYear())+"-"+Y(a.getUTCMonth()+1,2)+"-"+Y(a.getUTCDate(),2)+(s?"T"+Y(e,2)+":"+Y(n,2)+":"+Y(o,2)+"."+Y(s,3)+"Z":o?"T"+Y(e,2)+":"+Y(n,2)+":"+Y(o,2)+"Z":n||e?"T"+Y(e,2)+":"+Y(n,2)+"Z":"")}function Cn(a){var e=new RegExp('["'+a+`
\r]`),n=a.charCodeAt(0);function o(t,c){var C,b,p=s(t,function(S,g){if(C)return C(S,g-1);b=S,C=c?bn(S,c):fe(S)});return p.columns=b||[],p}function s(t,c){var C=[],b=t.length,p=0,S=0,g,k=b<=0,_=!1;t.charCodeAt(b-1)===Z&&--b,t.charCodeAt(b-1)===ae&&--b;function j(){if(k)return ne;if(_)return _=!1,de;var W,q=p,T;if(t.charCodeAt(q)===te){for(;p++<b&&t.charCodeAt(p)!==te||t.charCodeAt(++p)===te;);return(W=p)>=b?k=!0:(T=t.charCodeAt(p++))===Z?_=!0:T===ae&&(_=!0,t.charCodeAt(p)===Z&&++p),t.slice(q+1,W-1).replace(/""/g,'"')}for(;p<b;){if((T=t.charCodeAt(W=p++))===Z)_=!0;else if(T===ae)_=!0,t.charCodeAt(p)===Z&&++p;else if(T!==n)continue;return t.slice(q,W)}return k=!0,t.slice(q,b)}for(;(g=j())!==ne;){for(var D=[];g!==de&&g!==ne;)D.push(g),g=j();c&&(D=c(D,S++))==null||C.push(D)}return C}function r(t,c){return t.map(function(C){return c.map(function(b){return i(C[b])}).join(a)})}function m(t,c){return c==null&&(c=he(t)),[c.map(i).join(a)].concat(r(t,c)).join(`
`)}function f(t,c){return c==null&&(c=he(t)),r(t,c).join(`
`)}function y(t){return t.map(l).join(`
`)}function l(t){return t.map(i).join(a)}function i(t){return t==null?"":t instanceof Date?xn(t):e.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:o,parseRows:s,format:m,formatBody:f,formatRows:y,formatRow:l,formatValue:i}}var kn=Cn(","),_n=kn.parse;const Sn=(a,e)=>{let n=P(Se(a)),o=P(null),s=P(!0),r=P(void 0);const m=(l=!0)=>{M(s,l,!0),l===!0&&(M(r,null),M(o,null))},f=async()=>{try{const l=await fetch(u(n),e);if(!l.ok)throw new Error(`Unexpected error occurred (status ${l.status})`);let i;if(u(n).includes(".csv")){const t=await l.text();i=_n(t)}else i=await l.json();return[null,i]}catch(l){const{errorMessage:i="Unexpected error eccurred"}=l;return[i,null]}},y=async l=>{m(!0);const[i,t]=await f();if(l===u(n)){if(i){m(!1),M(r,i,!0);return}m(!1),M(o,t,!0)}};return G(()=>{y(u(n))}),{get data(){return u(o)},get loading(){return u(s)},get error(){return u(r)},get url(){return u(n)},set url(l){u(n)!==l&&M(n,l,!0)}}};var An=x("<p>loading data...</p>"),Tn=x("<p> </p>"),Yn=x("<p>data loaded</p> <pre> </pre>",1),Ln=x('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function Nn(a,e){J(e,!0);const n=`${Ie}/assets/demo/test.csv`,o=Sn(n);G(()=>{});var s=Ln(),r=w(v(s),2),m=v(r);{var f=i=>{var t=An();d(i,t)},y=i=>{var t=Tn(),c=v(t);h(t),F(()=>L(c,`error: ${o.error??""}`)),d(i,t)},l=i=>{var t=Yn(),c=w(A(t),2),C=v(c,!0);h(c),F(b=>L(C,b),[()=>JSON.stringify(o.data,null,2)]),d(i,t)};ee(m,i=>{o.loading?i(f):o.error?i(y,1):i(l,-1)})}h(r),h(s),d(a,s),V()}var Fn=x('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function Rn(a){let e=P(0);function n(c){console.log(c)}var o=Fn(),s=w(v(o),2);je(s);var r=w(s,2);Be(r);var m=w(r,2);Ee(m);var f=w(m,2);Ue(f);var y=w(f,2);pn(y,{});var l=w(y,2);Nn(l,{});var i=w(l,2);Ve(i);var t=w(i,2);yn(t,{random:n,get value(){return u(e)},set value(c){M(e,c,!0)}}),h(o),d(a,o)}function zn(a){Rn(a)}export{zn as component};
