import"../chunks/DsnmJJEf.js";import{al as g,Z as p,$ as _,_ as c,X as Y,G as o,an as D,W as z,ac as E,Y as G,a9 as ee,J as R,aE as fe,am as P,ba as ge,I as ye}from"../chunks/C5V18K91.js";import{b as l,f as y,c as A,t as ve}from"../chunks/DAo7DBt3.js";import{b as C,g as be,f as se}from"../chunks/DJ561LLY.js";import{e as H,i as B,b as we,s as re,c as xe,d as ke}from"../chunks/CE9KbBQ4.js";import{e as V}from"../chunks/CowkXnMh.js";import{c as Q}from"../chunks/g_MYWaHd.js";import{s as $,p as I}from"../chunks/BhdR-ak8.js";import{s as ie}from"../chunks/BNF7Qlk4.js";import{b as _e,i as K}from"../chunks/qQMnHyvT.js";import{h as j,c as Ce,a as Se}from"../chunks/m38a8Jjb.js";import{b as Ae}from"../chunks/D5g5r9N4.js";import"../chunks/DlOzM7pa.js";var Ye=y('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p> <p><a href="ui">BitsUI styled components</a></p></section>');function Te(d){var e=Ye();l(d,e)}var Le=y('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function Ne(d){var e=Le();l(d,e)}var Fe=y('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function Ie(d){const e=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var t=Fe(),n=g(p(t),2);H(n,17,()=>e,B,(s,a)=>{let h=()=>o(a).tag,m=()=>o(a).text;var f=A(),i=_(f);V(i,h,!1,(r,u)=>{var v=ve();Y(()=>C(v,m())),l(u,v)}),l(s,f)}),c(t),l(d,t)}var De=y("<p> </p>");function Re(d,e){var t=De(),n=p(t);c(t),Y(()=>C(n,`I am component A and my favorite number is ${e.number??""}.`)),l(d,t)}var He=y("<p> </p>");function Be(d,e){var t=He(),n=p(t);c(t),Y(()=>C(n,`I am component B and my name is ${e.name??""}.`)),l(d,t)}var Xe=y('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function Me(d){const e={A:Re,B:Be},t=[{component:"A",number:42},{component:"B",name:"Russell"}];var n=Xe(),s=g(p(n),2);H(s,17,()=>t,B,(a,h)=>{const m=D(()=>e[o(h).component]);var f=A(),i=_(f);Q(i,()=>o(m),(r,u)=>{u(r,$(()=>o(h)))}),l(a,f)}),c(n),l(d,n)}var Pe=y("<div><!></div>");function We(d,e){z(e,!0);let t=I(e,"root",3,null),n=I(e,"top",3,0),s=I(e,"bottom",3,0),a=I(e,"increments",3,100),h=I(e,"value",15,void 0),m=[],f=[],i=[],r=[],u;function v(){let b=0,w=0;for(let S=0;S<m.length;S++)m[S]>b&&(b=m[S],w=S);b>0?h(w):h(void 0)}function k(b,w){const S=M=>{M[0].isIntersecting;const Z=M[0].intersectionRatio;m[w]=Z,v()},W=n()?n()*-1:0,q=s()?s()*-1:0,ne=`${W}px 0px ${q}px 0px`,te={root:t(),rootMargin:ne,threshold:f};r[w]&&r[w].disconnect();const X=new IntersectionObserver(S,te);X.observe(b),r[w]=X}function T(){i.length&&i.forEach(k)}E(()=>{for(let b=0;b<a()+1;b++)f.push(b/a());i=u.querySelectorAll(":scope > *:not(iframe)"),T()}),E(()=>{n(),s(),T()});var x=Pe(),L=p(x);ie(L,()=>e.children??ee),c(x),_e(x,b=>u=b,()=>u),l(d,x),G()}var je=y('<div><p class="svelte-1sxgmm9"> </p></div>'),qe=y('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function Oe(d){let e=P(void 0);var t=qe(),n=p(t),s=g(p(n)),a=p(s,!0);c(s),c(n);var h=g(n,4);We(h,{get value(){return o(e)},set value(m){R(e,m,!0)},children:(m,f)=>{var i=A(),r=_(i);H(r,16,()=>[0,1,2,3,4],B,(u,v,k)=>{const T=D(()=>o(e)===k);var x=je();let L;var b=p(x),w=p(b,!0);c(b),c(x),Y(()=>{L=we(x,1,"step svelte-1sxgmm9",null,L,{active:o(T)}),C(w,v)}),l(u,x)}),l(m,i)},$$slots:{default:!0}}),fe(2),c(t),Y(()=>C(a,o(e)||"-")),l(d,t)}const Ee=`{
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
      "image": "assets/menus/title.png",
      "imageAlt": "Fish illustration",
      "body": []
    },
    {
      "id": "soup",
      "image": "assets/menus/1.png",
      "imageAlt": "Fish illustration",
      "class": "chapter",
      "body": []
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000000068.png",
      "bgZoom": "1",
      "focalX": "490",
      "focalY": "300",
      "anchorX": "0.5",
      "anchorY": "0.2",
      "annotationX": "190",
      "annotationY": "340",
      "topLabel": "Delmonico’s, NYC, 1881",
      "body": [
        {
          "type": "text",
          "value": "We begin our tour with oysters, pardon me—<i>huitres</i>—and <i>potages</i>, the soup. The Consomme Châtelaine, a chicken soup, is an  excellent choicebut I suggest the <b>bisque d’ecrevisses</b>, a crayfish soup made with cognac and cream."
        },
        {
          "type": "text",
          "value": "Whatever soup one chooses, you can be certain that it will imitate as best as possible  the finest French cuisine that 19th Century America can muster. It will be convincing: after all, you will order the French dish in French  and your chef will have likely been imported from France – or at least somewhere, over there. This menu is from Delmonico’s, founded in 1837 in New York, considered the origin of the French restaurant cuisine in America."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000000219.png",
      "layout": "fit-height",
      "topLabel": "Manhattan Club, NYC, 1866",
      "body": [
        {
          "type": "text",
          "value": "Restaurant dining in America began in the 1830s. These were not taverns that had whatever food was around to go with drink, but as spaces for culinary pleasures beyond function. They answered to society’s new world elite, a class that <b>sought to emulate what they saw as the height of culture and sophistication: the European, and particularly the French, aristocracy.</b>"
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
      "image": "assets/menus/2.png",
      "imageAlt": "Fish illustration",
      "class": "chapter",
      "body": []
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000008419.png",
      "layout": "fit-height",
      "topLabel": "Delmonico’s, NYC, 1900",
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
      "bgSrc": "assets/menus/4000000711.png",
      "bgZoom": "1",
      "layout": "fit-height",
      "topLabel": "NY Board of Trade and Transportation Dinner, Hotel Brunswick, NYC, 1887",
      "body": [
        {
          "type": "text",
          "value": "Without a true nobility in America, these restaurants were one of the ways the post-Civil War elite <b>symbolically distinguished themselves from the masses.</b> French was one aspect of gatekeeping – luxury was another.  Delmonico’s TK TK, archetypal and original French cuisine in America."
        }
      ]
    },
    {
      "id": "soup",
      "image": "assets/menus/3.png",
      "imageAlt": "Fish illustration",
      "class": "chapter",
      "body": []
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000008419.png",
      "layout": "fit-height",
      "topLabel": "Delmonico’s, NYC, 1900",
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
      "image": "assets/menus/4.png",
      "imageAlt": "Fish illustration",
      "class": "chapter",
      "body": []
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/466407.png",
      "layout": "fit-height",
      "topLabel": "Union Hotel, NYC, 1900",
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
      "topLabel": "English/French menu versions, Delmonicos, NYC, 1917",
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
      "image": "assets/menus/5.png",
      "imageAlt": "Fish illustration",
      "class": "chapter",
      "body": []
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000009030.png",
      "layout": "fit-height",
      "topLabel": "Hamblen’s Restaurant, NYC, 1900",
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
      "image": "assets/menus/6.png",
      "imageAlt": "Fish illustration",
      "class": "chapter",
      "body": []
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4067328.png",
      "layout": "fit-height",
      "topLabel": "Hotel Princesa Café, NYC, 1914",
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
      "image": "assets/menus/7.png",
      "imageAlt": "Fish illustration",
      "class": "chapter",
      "body": []
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4046433.png",
      "layout": "fit-height",
      "topLabel": "Café Savarin, NYC, 1915",
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
      "image": "assets/menus/8.png",
      "imageAlt": "Fish illustration",
      "class": "chapter",
      "body": []
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4037718.png",
      "layout": "fit-height",
      "topLabel": "R.H. Macy and Co., NYC, 1917",
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
      "image": "assets/menus/9.png",
      "imageAlt": "Fish illustration",
      "class": "chapter",
      "body": []
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4025914.png",
      "layout": "fit-height",
      "topLabel": "Dinner to the Directors of Metropolitan Life Insurance, Metropolitan Club, NYC, 1921",
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
      "image": "assets/menus/10.png",
      "imageAlt": "Fish illustration",
      "class": "chapter",
      "body": []
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4036997.png",
      "layout": "fit-height",
      "topLabel": "Fleischmann's Vienna Restaurant, NYC, 1917",
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
}`;var ze=y("<p></p>"),Ge=y('<details><summary></summary> <div class="content"><!></div></details>');function Ze(d,e){let t=D(()=>typeof e.content=="string"),n=D(()=>e.open==="true");var s=Ge(),a=p(s);j(a,()=>e.summary,!0),c(a);var h=g(a,2),m=p(h);{var f=r=>{var u=A(),v=_(u);j(v,()=>e.content),l(r,u)},i=r=>{var u=A(),v=_(u);H(v,17,()=>e.content,B,(k,T)=>{let x=()=>o(T).value;var L=ze();j(L,x,!0),c(L),l(k,L)}),l(r,u)};K(m,r=>{o(t)?r(f):r(i,-1)})}c(h),c(s),Y(()=>{s.open=o(n),re(s,"name",e.name)}),l(d,s)}var Je=y("<li></li>"),Ue=y("<ul></ul>");function Ke(d,e){var t=Ue();H(t,21,()=>e.li,B,(n,s)=>{var a=Je();j(a,()=>o(s),!0),c(a),l(n,a)}),c(t),l(d,t)}var Ve=y("<li></li>"),Qe=y("<ol></ol>");function $e(d,e){var t=Qe();H(t,21,()=>e.li,B,(n,s)=>{var a=Ve();j(a,()=>o(s),!0),c(a),l(n,a)}),c(t),l(d,t)}var en=y("<p></p>"),nn=y("<section><!></section>");function tn(d,e){z(e,!0);const t={details:Ze,ul:Ke,ol:$e};let n=I(e,"components",19,()=>({})),s=I(e,"body",19,()=>[]);var a=A(),h=_(a);H(h,17,s,B,(m,f)=>{let i=()=>o(f).section,r=()=>o(f).content;const u=D(()=>i().toLowerCase().replace(/[^a-z0-9]/g,"")),v=D(()=>n()[i()]);var k=nn(),T=p(k);{var x=b=>{var w=A(),S=_(w);Q(S,()=>o(v),(W,q)=>{q(W,$(r))}),l(b,w)},L=b=>{var w=A(),S=_(w);H(S,17,r,B,(W,q,ne,te)=>{let X=()=>o(q).type,M=()=>o(q).value;const Z=D(()=>n()[X()]||t[X()]),le=D(()=>typeof M()=="string");var ae=A(),de=_(ae);{var ce=N=>{var F=A(),O=_(F);Q(O,()=>o(Z),(J,U)=>{U(J,$(M))}),l(N,F)},ue=N=>{var F=en();j(F,M,!0),c(F),l(N,F)},he=N=>{var F=A(),O=_(F);V(O,X,!1,(J,U)=>{var oe=A(),pe=_(oe);j(pe,M),l(U,oe)}),l(N,F)},me=N=>{var F=A(),O=_(F);V(O,X,!1,(J,U)=>{xe(J,()=>({...M()}))}),l(N,F)};K(de,N=>{o(Z)?N(ce):X()==="text"?N(ue,1):o(le)?N(he,2):N(me,-1)})}l(W,ae)}),l(b,w)};K(T,b=>{o(v)?b(x):b(L,-1)})}c(k),Y(()=>re(k,"id",o(u))),l(m,k)}),l(d,a),G()}var an=y('<p> </p> <progress max="100"></progress>',1);function on(d,e){let t=I(e,"label",3,"A"),n=I(e,"value",3,0);var s=an(),a=_(s),h=p(a,!0);c(a);var m=g(a,2);Y(()=>{C(h,t()),ke(m,n())}),l(d,s)}var sn=y('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function rn(d,e){z(e,!0);const{body:t}=Ce,n={Test:on};var s=sn(),a=g(p(s),2),h=p(a),m=p(h,!0);c(h),c(a);var f=g(a,2);tn(f,{get components(){return n},get body(){return t}}),c(s),Y(i=>C(m,i),[()=>Ee.replace(/\t/g," ")]),l(d,s),G()}const ln=(d,e=ee)=>{var t=dn(),n=p(t),s=p(n,!0);c(n);var a=g(n,2),h=p(a,!0);c(a),c(t),Y(()=>{C(s,e().name),C(h,e().age)}),l(d,t)};var dn=y('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),cn=y('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function un(d,e){z(e,!0),I(e,"age",3,30);const t=[{name:"John",age:30},{name:"Jill",age:45}];let n=P(0),s=D(()=>o(n)*2),a=D(()=>o(n)*2),h=P(0);E(()=>{R(h,o(n)*2)});var m=cn(),f=g(_(m),4),i=g(f,2),r=p(i);c(i);var u=g(i,2),v=p(u);c(u);var k=g(u,2),T=p(k);c(k);var x=g(k,4),L=p(x);ie(L,()=>e.children??ee),c(x);var b=g(x,4),w=g(b,4);H(w,21,()=>t,B,(S,W)=>{ln(S,()=>o(W))}),c(w),Y(()=>{C(r,`${o(n)??""} doubled is ${o(s)??""} (derived)`),C(v,`${o(n)??""} doubled is ${o(a)??""} (derived by)`),C(T,`${o(n)??""} doubled is ${o(h)??""} ($effect)`)}),se("click",f,()=>ge(n)),se("click",b,()=>e.random(Math.floor(Math.random()*10))),l(d,m),G()}be(["click"]);const hn=(d,e)=>{let t=P(ye(d)),n=P(null),s=P(!0),a=P(void 0);const h=(i=!0)=>{R(s,i,!0),i===!0&&(R(a,null),R(n,null))},m=async()=>{try{const i=await fetch(o(t),e);if(!i.ok)throw new Error(`Unexpected error occurred (status ${i.status})`);let r;if(o(t).includes(".csv")){const u=await i.text();r=Se(u)}else r=await i.json();return[null,r]}catch(i){const{errorMessage:r="Unexpected error eccurred"}=i;return[r,null]}},f=async i=>{h(!0);const[r,u]=await m();if(i===o(t)){if(r){h(!1),R(a,r,!0);return}h(!1),R(n,u,!0)}};return E(()=>{f(o(t))}),{get data(){return o(n)},get loading(){return o(s)},get error(){return o(a)},get url(){return o(t)},set url(i){o(t)!==i&&R(t,i,!0)}}};var mn=y("<p>loading data...</p>"),pn=y("<p> </p>"),fn=y("<p>data loaded</p> <pre> </pre>",1),gn=y('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function yn(d,e){z(e,!0);const t=`${Ae}/assets/demo/test.csv`,n=hn(t);E(()=>{});var s=gn(),a=g(p(s),2),h=p(a);{var m=r=>{var u=mn();l(r,u)},f=r=>{var u=pn(),v=p(u);c(u),Y(()=>C(v,`error: ${n.error??""}`)),l(r,u)},i=r=>{var u=fn(),v=g(_(u),2),k=p(v,!0);c(v),Y(T=>C(k,T),[()=>JSON.stringify(n.data,null,2)]),l(r,u)};K(h,r=>{n.loading?r(m):n.error?r(f,1):r(i,-1)})}c(a),c(s),l(d,s),G()}var vn=y('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function bn(d){let e=P(0);function t(v){console.log(v)}var n=vn(),s=g(p(n),2);Te(s);var a=g(s,2);Ne(a);var h=g(a,2);Ie(h);var m=g(h,2);Me(m);var f=g(m,2);rn(f,{});var i=g(f,2);yn(i,{});var r=g(i,2);Oe(r);var u=g(r,2);un(u,{random:t,get value(){return o(e)},set value(v){R(e,v,!0)}}),c(n),l(d,n)}function Dn(d){bn(d)}export{Dn as component};
