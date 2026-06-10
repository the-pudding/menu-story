import"../chunks/DsnmJJEf.js";import{al as g,Z as p,$ as C,_ as u,X as N,G as o,an as F,W as G,ac as j,Y as V,a9 as ee,J as P,aE as fe,am as X,ba as ge,I as ve}from"../chunks/C5V18K91.js";import{b as l,f as v,c as A,t as ye}from"../chunks/DAo7DBt3.js";import{b as S,g as be,f as se}from"../chunks/DJ561LLY.js";import{e as B,i as H,b as we,s as re,c as xe,d as ke}from"../chunks/CE9KbBQ4.js";import{e as K}from"../chunks/CowkXnMh.js";import{c as Q}from"../chunks/g_MYWaHd.js";import{s as $,p as D}from"../chunks/BhdR-ak8.js";import{s as ie}from"../chunks/BNF7Qlk4.js";import{b as Ce,i as U}from"../chunks/qQMnHyvT.js";import{h as E,c as Se,a as _e}from"../chunks/DUXbKtf0.js";import{b as Ae}from"../chunks/DC4A4O5_.js";import"../chunks/DlOzM7pa.js";var Ne=v('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p> <p><a href="ui">BitsUI styled components</a></p></section>');function Le(c){var e=Ne();l(c,e)}var Ye=v('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function Te(c){var e=Ye();l(c,e)}var Ie=v('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function De(c){const e=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var t=Ie(),n=g(p(t),2);B(n,17,()=>e,H,(s,a)=>{let h=()=>o(a).tag,m=()=>o(a).text;var f=A(),i=C(f);K(i,h,!1,(r,d)=>{var y=ye();N(()=>S(y,m())),l(d,y)}),l(s,f)}),u(t),l(c,t)}var Fe=v("<p> </p>");function Pe(c,e){var t=Fe(),n=p(t);u(t),N(()=>S(n,`I am component A and my favorite number is ${e.number??""}.`)),l(c,t)}var Be=v("<p> </p>");function He(c,e){var t=Be(),n=p(t);u(t),N(()=>S(n,`I am component B and my name is ${e.name??""}.`)),l(c,t)}var Re=v('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function Me(c){const e={A:Pe,B:He},t=[{component:"A",number:42},{component:"B",name:"Russell"}];var n=Re(),s=g(p(n),2);B(s,17,()=>t,H,(a,h)=>{const m=F(()=>e[o(h).component]);var f=A(),i=C(f);Q(i,()=>o(m),(r,d)=>{d(r,$(()=>o(h)))}),l(a,f)}),u(n),l(c,n)}var Xe=v("<div><!></div>");function qe(c,e){G(e,!0);let t=D(e,"root",3,null),n=D(e,"top",3,0),s=D(e,"bottom",3,0),a=D(e,"increments",3,100),h=D(e,"value",15,void 0),m=[],f=[],i=[],r=[],d;function y(){let b=0,w=0;for(let _=0;_<m.length;_++)m[_]>b&&(b=m[_],w=_);b>0?h(w):h(void 0)}function k(b,w){const _=M=>{M[0].isIntersecting;const Z=M[0].intersectionRatio;m[w]=Z,y()},q=n()?n()*-1:0,O=s()?s()*-1:0,ne=`${q}px 0px ${O}px 0px`,te={root:t(),rootMargin:ne,threshold:f};r[w]&&r[w].disconnect();const R=new IntersectionObserver(_,te);R.observe(b),r[w]=R}function L(){i.length&&i.forEach(k)}j(()=>{for(let b=0;b<a()+1;b++)f.push(b/a());i=d.querySelectorAll(":scope > *:not(iframe)"),L()}),j(()=>{n(),s(),L()});var x=Xe(),Y=p(x);ie(Y,()=>e.children??ee),u(x),Ce(x,b=>d=b,()=>d),l(c,x),V()}var Ee=v('<div><p class="svelte-1sxgmm9"> </p></div>'),Oe=v('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function We(c){let e=X(void 0);var t=Oe(),n=p(t),s=g(p(n)),a=p(s,!0);u(s),u(n);var h=g(n,4);qe(h,{get value(){return o(e)},set value(m){P(e,m,!0)},children:(m,f)=>{var i=A(),r=C(i);B(r,16,()=>[0,1,2,3,4],H,(d,y,k)=>{const L=F(()=>o(e)===k);var x=Ee();let Y;var b=p(x),w=p(b,!0);u(b),u(x),N(()=>{Y=we(x,1,"step svelte-1sxgmm9",null,Y,{active:o(L)}),S(w,y)}),l(d,x)}),l(m,i)},$$slots:{default:!0}}),fe(2),u(t),N(()=>S(a,o(e)||"-")),l(c,t)}const je=`{
  "ignore": [],
  "slides": [
    {
      "id": "new-slide",
      "body": [
        {
          "type": "text",
          "value": "What do America’s earliest restaurant menus teach us about America?"
        }
      ]
    },
    {
      "id": "cold",
      "body": [
        {
          "type": "text",
          "value": "The New York Public Library has an archive of menus, primarily 1880-1920, including some of the first menus to resemble modern-day restaurant dining."
        }
      ]
    },
    {
      "id": "buttolph",
      "body": [
        {
          "type": "text",
          "value": "Frank E. Buttolph (pictured here) spent decades assembling the menus as a record for future generations of the culinary and social history of her time."
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
        }
      ]
    },
    {
      "id": "illustration",
      "body": [
        {
          "type": "text",
          "value": "The thousands of menus in this collection document a period of fundamental transformation – and the birth of the society and the restaurant we know today."
        },
        {
          "type": "text",
          "value": "I’ve searched through the archive to tell you that story in <b>ten dishes.</b> Your table is ready—right this way."
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
      "image": "assets/menus/section.png",
      "sectionCount": "1",
      "courseDescription": "Learning French",
      "courseName": "Bisque d’Ecrevisses",
      "imageAlt": "Fish illustration",
      "class": "chapter",
      "body": []
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000000219.png",
      "bgZoom": ".7",
      "focalX": "680",
      "focalY": "300",
      "anchorX": "0.7",
      "anchorY": "0.2",
      "annotationX": "620",
      "annotationY": "340",
      "topLabel": "Delmonico’s, NYC, 1881",
      "infoLabel": "This menu is from Delmonico’s, founded in 1837 in New York, considered the origin of the French restaurant cuisine in America.",
      "course": "1 <i>of</i> 10&colon; Soup",
      "body": [
        {
          "type": "text",
          "value": "We begin our historic meal with oysters, pardon me (in French)—<i>huitres</i>—and <i>potages</i>, the soup. The Consomme Châtelaine, a chicken soup, is an excellent choice but I suggest the <b>bisque d’ecrevisses</b>, a crayfish soup made with cognac and cream."
        },
        {
          "type": "text",
          "value": "Soup was the first true course of the decadent meals at these restaurants, which would then proceed to 8, 10, or more courses of French classics or, possibly, other dishes simply given a European-sounding name."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000000068.png",
      "layout": "fit-height",
      "topLabel": "Manhattan Club, NYC, 1866",
      "course": "1 <i>of</i> 10&colon; Soup",
      "body": [
        {
          "type": "text",
          "value": "Restaurant dining in America began in the 1830s. These were not taverns serving alcohol and hearty grub, but as spaces for culinary pleasure. By the late 1800s, they firmly catered to  America’s new world elite, who sought to emulate what they believed was the height of culture: the European, and particularly the French, aristocracy."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/476900.png",
      "bgZoom": ".95",
      "focalX": "390",
      "focalY": "300",
      "anchorX": "0.7",
      "anchorY": "0.2",
      "topLabel": "Astor House, NYC, 1854, Printed on silk.",
      "course": "1 <i>of</i> 10&colon; Soup",
      "infoLabel": "Terrapin is a turtle native to NYC waters.",
      "body": [
        {
          "type": "text",
          "value": "Accordingly, you will order your French bisque in French and your chef will have likely been imported from France—or at least somewhere over there. It will be 19th century America’s best possible imitation of the finest French cuisine."
        },
        {
          "type": "text",
          "value": "Though restaurant dining is becoming more common among the wealthy in America, there’s little American about it."
        }
      ]
    },
    {
      "id": "soup",
      "image": "assets/menus/section.png",
      "sectionCount": "2",
      "courseDescription": "Lives of luxury",
      "courseName": "Celery in a Crystal Celery Vase",
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
      "course": "2 <i>of</i> 10&colon; Celery",
      "body": [
        {
          "type": "text",
          "value": "Don’t be shy; reach out for a stalk of celery in that crystal celery vase. Celery was one of many “relishes” with a key function on the aristocratic table. In fact, it’s the fourth most common item among the Buttolph Collection menus, after coffee, tea, and olives."
        },
        {
          "type": "text",
          "value": "Alongside sorbets and punches—used later in the meal as palate cleansers—celery functioned as a step in the intricate order of a meal concerned more with the sensual than the practical."
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
      "course": "2 <i>of</i> 10&colon; Celery",
      "body": [
        {
          "type": "text",
          "value": "George G. Foster, a writer at the time, noted that this kind of meal  “is not merely a quantity of food deposited in the stomach, but is in every sense and to all the senses a great work of art.” Celery, like other delicacies of the time, was initially scarce enough to be considered a fine food, but later <a href=https://www.epicurious.com/ingredients/how-celery-became-so-popular-history target=_blank>accessible enough</a> to make that luxury a widespread cultural marker."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000000711.png",
      "bgZoom": "1",
      "layout": "fit-height",
      "topLabel": "NY Board of Trade Dinner, Hotel Brunswick, NYC, 1887",
      "course": "2 <i>of</i> 10&colon; Celery",
      "body": [
        {
          "type": "text",
          "value": "Restaurant dining was one way the post-Civil War elite <b> distinguished themselves from the masses.</b> French was one aspect of gatekeeping—luxury was another."
        },
        {
          "type": "text",
          "value": "In this menu, celery appears as an hors d’oeurve and alongside canvasback duck, a coveted  game in this period.The duck’s favorite food supposedly made it more delicious. That diet? Wild celery. Luxury upon luxury."
        }
      ]
    },
    {
      "id": "soup",
      "image": "assets/menus/section.png",
      "sectionCount": "3",
      "courseDescription": "Seating and being seen",
      "courseName": "Vol-au-vent",
      "imageAlt": "Fish illustration",
      "class": "chapter",
      "body": []
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000003649.png",
      "layout": "fit-height",
      "topLabel": "Hotel Bellevue, 1896, 9th Annual Honor of Crow Charlton",
      "topLabelSmall": "true",
      "course": "3 <i>of</i> 10&colon; Vol-au-vent",
      "body": [
        {
          "type": "text",
          "value": "Speaking of rare meats: your third course: <i>vol-au-vent of sweetbread a la toulouse</i>, a pastry case filled with sweetbreads and a brown sauce, here paired with champagne at the “Ninth Annual Dinner in Honor of Crow Charlton” hosted at the Hotel Bellevue."
        },
        {
          "type": "text",
          "value": "The American aristocratic restaurant of the late-1800s didn’t just serve food that paired complex cooking technique with decadent, luxury ingredients; it also publicly flaunted that decadence."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/470278.png",
      "layout": "fit-height",
      "topLabel": "St. Nicholas Hotel, Cincinnati, 1895",
      "course": "3 <i>of</i> 10&colon; Vol-au-vent",
      "body": [
        {
          "type": "text",
          "value": "The <b>public nature of this luxury</b> was useful to differentiate the status and power of the elite: what they ate, how much of it, and with what customs and trappings."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4046090.png",
      "bgZoom": "1",
      "layout": "fit-height",
      "topLabel": "Hotel Colorado, Glenwood Springs, CO, 1915",
      "course": "3 <i>of</i> 10&colon; Vol-au-vent",
      "body": [
        {
          "type": "text",
          "value": "To a certain extent, it also was unavoidable. In part, many of the elite restaurants at the time were in hotels that included room and board together, charging customers for a full menu with no <i>à la carte</i> option. Guests at the St. Nicholas, Hotel Colorado, or Laurel in the Pines, for example, would know that these dozen plus courses came standard."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000003816.png",
      "bgZoom": "1",
      "layout": "fit-height",
      "topLabelSmall": "true",
      "type": "auto",
      "infoLabel": "This menu from a celebration held by a Scottish expat society is even carved, roughly, in the shape of Scotland.",
      "topLabel": "St. Andrew’s Society, Palace Hotel, San Francisco, 1896",
      "course": "3 <i>of</i> 10&colon; Vol-au-vent",
      "body": [
        {
          "type": "text",
          "value": "Feasting in public also became more necessary. As industrialization offered employment to the lower classes beyond the domestic sphere, the elite lacked staff to host events themselves. Restaurants offered space for events of all kinds—community celebrations like this one, memorials, club meetings— offering the elite another space to see and be seen."
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
      "type": "auto",
      "topLabel": "William Clauss Dinner, St Nicolas Hotel, Cincinnati, 1908",
      "course": "3 <i>of</i> 10&colon; Vol-au-vent",
      "body": [
        {
          "type": "text",
          "value": "But for someone with the right resources, like one William Clauss, it was perfectly reasonable to have a menu made just for dinner with his friends."
        }
      ]
    },
    {
      "id": "soup",
      "image": "assets/menus/section.png",
      "sectionCount": "4",
      "courseDescription": "Dining gets an American accent",
      "courseName": "Pork Chops Saute",
      "imageAlt": "Fish illustration",
      "class": "chapter",
      "body": []
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/466407.png",
      "layout": "fit-height",
      "topLabel": "Union Hotel, NYC, 1900",
      "course": "4 <i>of</i> 10&colon; Pork Chops Saute",
      "body": [
        {
          "type": "text",
          "value": "We hope you enjoyed that <i>vol au vent</i>—and America’s elite surely had—because American restaurant dining is headed somewhere new as the century turns over."
        },
        {
          "type": "text",
          "value": "“Pork Chops Saute, Sauce Robert” feels like a fitting next course: a traditional French sauce, sure, but American culture is starting to come through. Nevermind hours long banquets, the menu even warns that some dishes may take 15 minutes more to prepare!"
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000004412.png",
      "layout": "fit-height",
      "topLabel": "Waldorf-Astoria, NYC, 1897",
      "course": "4 <i>of</i> 10&colon; Pork Chops Saute",
      "body": [
        {
          "type": "text",
          "value": "Our menus are following that same general structure from oysters to coffee, but they’re noticeably more complicated: prices are attached, <i>à la carte</i> options have displaced the coursed menu …"
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4039367.png",
      "layout": "fit-height",
      "course": "4 <i>of</i> 10&colon; Pork Chops Saute",
      "topLabel": "English/French menus, Delmonico’s, NYC, 1917",
      "body": [
        {
          "type": "text",
          "value": "…and English is becoming an acceptable choice for the sophisticated diner."
        },
        {
          "type": "text",
          "value": "Elite dining is changing because restaurant dining is being transformed by everyone else."
        }
      ]
    },
    {
      "id": "soup",
      "image": "assets/menus/section.png",
      "sectionCount": "5",
      "courseDescription": "The middle-class blows up dining",
      "courseName": "Iced Coffee",
      "imageAlt": "Fish illustration",
      "class": "chapter",
      "body": []
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000009030.png",
      "layout": "fit-height",
      "topLabel": "Hamblen’s Restaurant, NYC, 1900",
      "course": "5 <i>of</i> 10&colon; Iced Coffee",
      "body": [
        {
          "type": "text",
          "value": "Here’s an iced coffee, on the house. That’s a nice thing now  and a real splurge if it’s the hot spring of 1900, when ice was still cut and shipped to cities from frozen lakes and rivers. The American Ice Company had just <a href=https://www.bklynlibrary.org/blog/2014/05/21/ice-delivery-city target=_blank>formed</a> a monopoly in the city, doubling its rates and cutting deliveries in order to juice profits."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000009031.png",
      "layout": "fit-height",
      "topLabel": "Hamblen’s Restaurant, NYC, 1900",
      "course": "5 <i>of</i> 10&colon; Iced Coffee",
      "body": [
        {
          "type": "text",
          "value": "The ice monopoly didn’t last long: an outcry by a new, burgeoning class of consumers forced the company to resume normal business."
        },
        {
          "type": "text",
          "value": "This force was at the center of a broader transformation of American industry, American dining, and American society.  The new middle class broke open restaurant dining beyond the aristocratic table and created something entirely new."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/467291.png",
      "layout": "no-image",
      "topLabel": "&nbsp;",
      "course": "5 <i>of</i> 10&colon; Iced Coffee",
      "body": [
        {
          "type": "text",
          "value": "Into the early 20th century, industrialization produced a working middle class who desired more than old taverns and dives."
        },
        {
          "type": "text",
          "value": "At the same time, the technological innovation transforming the labor market also made it cheaper to produce, transport, and preserve food."
        },
        {
          "type": "text",
          "value": "Andrew P. Haley <a href=https://uncpress.org/9781469609805/turning-the-tables/>writes</a> in <i>Turning Tables: Restaurants and the Rise of the Middle Class, 1880-1920</i>, “The collective purchasing power of the emerging middle class encouraged restaurant entrepreneurs to cater to their tastes, and, over the course of forty years, small preferences about how to dine begot cultural changes that eventually birthed both middle-class restaurants and the modern middle class itself.”"
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/475432.png",
      "layout": "fit-height",
      "course": "5 <i>of</i> 10&colon; Iced Coffee",
      "topLabel": "Putnam House, Table d’ Hote, NYC, 1900",
      "body": [
        {
          "type": "text",
          "value": "From 1880 to 1920, the number of professional occupations doubled, as did the percentage of Americans working in management. At the same time, employment in the dining industry grew 400%."
        },
        {
          "type": "text",
          "value": "In this explosion, the American restaurant didn’t just appear as an answer to the aristocratic restaurant model; it had evolved out of a host of other models of dining that emerged in between."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/467308.png",
      "layout": "fit-height",
      "topLabel": "Pure Food Cafes, NYC, 1900",
      "course": "5 <i>of</i> 10&colon; Iced Coffee",
      "body": [
        {
          "type": "text",
          "value": "<b>Table d’hote menus</b> offered a selection of dishes at a fixed priced that mimicked the coursing of a fine dining restaurant, but with less luxurious ingredients and a more affordable price., These places attempted to be “American” while also evoking the abundance of elite dining."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4066460.png",
      "layout": "fit-height",
      "course": "5 <i>of</i> 10&colon; Iced Coffee",
      "topLabel": "Walton’s Old Homestead Oyster and Chop House, NYC, 1914",
      "body": [
        {
          "type": "text",
          "value": "The <b>beefsteak or chophouse</b> was, as it sounds, a place to find meat. The New York Times described, in 1881, how all kinds of men could be found here: “the customers were of all sorts and kinds – well dressed people, evidently with plenty of money in their pockets, market-men, countrymen, clerks, store boys – a regular gathering of clans scattered at Babel.”  And these restaurants offered just as many ways to eat meat."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/470923.png",
      "layout": "fit-height",
      "course": "5 <i>of</i> 10&colon; Iced Coffee",
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
      "bgSrc": "assets/menus/475314.png",
      "layout": "fit-height",
      "course": "5 <i>of</i> 10&colon; Iced Coffee",
      "topLabel": "Dennett’s Surpassing Coffee, NYC, 1900",
      "body": [
        {
          "type": "text",
          "value": "Finally, at <b>coffee and cake saloons,</b> women could find cakes, ice creams, and light lunches – without the expectation of a male dining companion."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4034351.png",
      "layout": "fit-height",
      "course": "5 <i>of</i> 10&colon; Iced Coffee",
      "topLabel": "Regal Bakery & Restaurant, NYC, 1919",
      "body": [
        {
          "type": "text",
          "value": "In each of these establishments – and in restaurant dining, generally – menus from the beginning of the 20th century show major departures from the menus of just a few decades earlier. Nevermind public displays of wealth – there was now a whole new public to serve."
        }
      ]
    },
    {
      "id": "soup",
      "image": "assets/menus/section.png",
      "imageAlt": "Fish illustration",
      "sectionCount": "6",
      "courseDescription": "Faster food",
      "courseName": "Thursday Special",
      "class": "chapter",
      "body": []
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4067328.png",
      "bgZoom": ".7",
      "focalX": "300",
      "focalY": "600",
      "anchorX": "0.7",
      "anchorY": "0.2",
      "annotationX": "270",
      "annotationY": "660",
      "course": "6 <i>of</i> 10&colon; Thursday Special",
      "topLabel": "Hotel Princesa Café, NYC, 1914",
      "body": [
        {
          "type": "text",
          "value": "From all those experiments, the full American restaurant – a place that offers everything to everyone – starts to take shape. It’s a place where you can even get your whole meal on one plate, like the Thursday special at the Hotel Princesa Cafe and Restaurant."
        },
        {
          "type": "text",
          "value": "It’s normal today for a menu to offer specials or combination plates where a main comes with sides, but it was a restaurant breakthrough at the time. It signified that while diners surely wanted to eat out to enjoy it, they also demanded that it met their practical needs: balanced, affordable, and efficient."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4067328.png",
      "bgZoom": ".7",
      "focalX": "300",
      "focalY": "100",
      "anchorX": "0.7",
      "anchorY": "0.2",
      "annotationX": "80",
      "annotationY": "50",
      "course": "6 <i>of</i> 10&colon; Thursday Special",
      "topLabel": "Hotel Princesa Café, NYC, 1914",
      "body": [
        {
          "type": "text",
          "value": "New diners, new types of restaurants, new ways of eating all called for new kinds of menus in the first decades of the 20th century. And, often, menus that had a lot more information about what restaurants and restaurant dining ought to be."
        },
        {
          "type": "text",
          "value": "At the Princesa, there are more words used on prose about dining than there are spent on dishes to order. Here and elsewhere, restaurateurs were speaking to a new cohort of diners – telling them why to come, who to pay, where to sit, and what’s available when."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4066373.png",
      "layout": "fit-height",
      "course": "6 <i>of</i> 10&colon; Thursday Special",
      "topLabel": "Adams' Restaurant, NYC, 1914",
      "body": [
        {
          "type": "text",
          "value": "The elite European menu took hours: the middle-class restaurant understood that busy workers wanted a good deal and a complete meal in a fixed amount of time, that a new wave of shoppers could also be convinced to stop for a meal among their errands."
        }
      ]
    },
    {
      "id": "soup",
      "image": "assets/menus/section.png",
      "imageAlt": "Fish illustration",
      "sectionCount": "7",
      "courseDescription": "American dining is global dining",
      "courseName": "Pepper Pot",
      "class": "chapter",
      "body": []
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4046433.png",
      "layout": "fit-height",
      "topLabel": "Café Savarin, NYC, 1915",
      "course": "7 <i>of</i> 10&colon; Pepper Pot",
      "body": [
        {
          "type": "text",
          "value": "When Café Savarin opened, in 1888, the Times <a href=https://timesmachine.nytimes.com/timesmachine/1888/01/08/106308764.html?pageNumber=5 target=_blank>wrote</a> that “the best corps of cooks and waiters Paris could afford has been secured” to serve the french menu."
        },
        {
          "type": "text",
          "value": "By 1915, the menu offered dishes drawing on French, German, Italian, Hungarian, British, Indian, Japanese, and Caribbean cuisines."
        },
        {
          "type": "text",
          "value": "It feels right to try the Pepper Pot here – a <a href=https://philadelphiaencyclopedia.org/essays/philadelphia-pepper-pot/ target=_blank>dish</a> with origins in West Africa, transformation in the West Indies, and another evolution in the United States."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4066701.png",
      "layout": "fit-height",
      "topLabel": "Rathskeller, NYC, 1914",
      "course": "7 <i>of</i> 10&colon; Pepper Pot",
      "body": [
        {
          "type": "text",
          "value": "Middle-class diners didn’t just want riffs on the fancy French restaurant or better versions of the old taverns – they wanted something else to eat, too."
        },
        {
          "type": "text",
          "value": "By the early 1900s immigrants had established significant enclaves in American cities, bringing their food cultures with them. The emerging middle class living or working in those cities saw this culinary diversity as a source of national pride, immigrant entrepreneurship as a symbol of American accomplishment."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4039920.png",
      "layout": "fit-height",
      "course": "7 <i>of</i> 10&colon; Pepper Pot",
      "topLabel": "The Syrian Restaurant for Ladies' & Gents, NYC, 1917",
      "body": [
        {
          "type": "text",
          "value": "Italian and German restaurants were early challengers to French dominance in dining, but middle class diners found that there were restaurants serving local immigrant populations that would be happy to take their business, too."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/471895.png",
      "layout": "fit-height",
      "topLabel": "Tokio Restaurant, NYC, 1914",
      "course": "7 <i>of</i> 10&colon; Pepper Pot",
      "body": [
        {
          "type": "text",
          "value": "Even if these places were a little unfamiliar, they were more accessible than the old aristocratic restaurants: these businesses actually wanted to accommodate the middle classes."
        },
        {
          "type": "text",
          "value": "Some restaurants, like the Tokio Restaurant, even offered split menus that offered all the American classics as well as food from a particular cuisine."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4041320.png",
      "layout": "fit-height",
      "topLabel": "Healy’s Forty Second Street Restaurant, NYC, 1917",
      "course": "7 <i>of</i> 10&colon; Pepper Pot",
      "body": [
        {
          "type": "text",
          "value": "This “cosmopolitan” trend wasn’t limited to ethnic restaurants – restaurants of all kinds started to serve dishes that were, or at least pretended to be, from foreign lands."
        },
        {
          "type": "text",
          "value": "Then, as now, Americans embracing foreign food was fully compatible with racism and xenophobia. Nonetheless, whether as authentic inclusion or more cynical exoticism, these diners rejected expertise in French gastronomy in favor of the worldliness they attributed to eating expansively."
        }
      ]
    },
    {
      "id": "soup",
      "image": "assets/menus/section.png",
      "imageAlt": "Fish illustration",
      "sectionCount": "8",
      "courseDescription": "Going family style",
      "courseName": "Horse’s Neck",
      "class": "chapter",
      "body": []
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4037718.png",
      "layout": "fit-height",
      "topLabel": "R.H. Macy and Co., NYC, 1917",
      "course": "8 <i>of</i> 10&colon; Horse’s Neck",
      "body": [
        {
          "type": "text",
          "value": "Why not wash that down with a “Horse’s Neck?”  While the drink later added alcohol, it originated as a mix of ginger ale and a curling lemon rind, one of many new booze-free options on early 20th century menus."
        },
        {
          "type": "text",
          "value": "The beverages offered suggest the clientele had changed a bit from those feasts accompanied solely with wine, liquor, and mineral water. Now diners had work to do, appearances to keep up, or, well, just be children."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4029870.png",
      "layout": "fit-height",
      "topLabel": "Joe's Restaurant, Brooklyn, NY, 1920",
      "course": "8 <i>of</i> 10&colon; Horse’s Neck",
      "body": [
        {
          "type": "text",
          "value": "While ethnic food didn’t fix racism in America, dining in America did diversify across age and gender in this era. Aristocratic French restaurants had once been the province purely of men; later, lunch counters and other new type of eateries segregated the sexes. But as the new century progressed, restaurants not only shifted to mixed gender dining rooms they also began to cater to entire families."
        }
      ]
    },
    {
      "id": "soup",
      "image": "assets/menus/section.png",
      "imageAlt": "Fish illustration",
      "sectionCount": "9",
      "courseDescription": "The customer is king",
      "courseName": "Potatoes O’Brien Au Gratin",
      "class": "chapter",
      "body": []
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4025914.png",
      "layout": "fit-height",
      "course": "9 <i>of</i> 10&colon; Potatoes O’Brien Au Gratin",
      "topLabelSmall": "true",
      "topLabel": "Dinner to the Directors of Metropolitan Life Insurance, Metropolitan Club, NYC, 1921",
      "body": [
        {
          "type": "text",
          "value": "Of course the rich were still eating out all this time, too."
        },
        {
          "type": "text",
          "value": "Into the first decades of the 20th century, the elite were still hosting luxurious banquets with coursed menus. Social transformation is slow."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4025971.png",
      "layout": "fit-height",
      "topLabel": "The Portland, 1921",
      "course": "9 <i>of</i> 10&colon; Potatoes O’Brien Au Gratin",
      "body": [
        {
          "type": "text",
          "value": "But in some fancier restaurants, the menu might look a lot more like how the middle-classes were transforming restaurant dining."
        },
        {
          "type": "text",
          "value": "English, a la carte menus with prices, combination plates, and even music – formerly scorned as interference in the true focus of dining."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000017237.png",
      "layout": "fit-height",
      "topLabel": "Rector’s, Chicago, IL, 1906",
      "course": "9 <i>of</i> 10&colon; Potatoes O’Brien Au Gratin",
      "body": [
        {
          "type": "text",
          "value": "Just as middle-class restaurants offered customers a variety of options to meet their desires, some elite restaurants confronted the newly crowded restaurant market with a new take on abundance. Rector’s, in Chicago, had a dizzying selection for every section – including 25 kinds of potatoes. Potatoes O’Brien Au Gratin feels like a fitting choice for the mashed-up moment."
        }
      ]
    },
    {
      "id": "soup",
      "image": "assets/menus/section.png",
      "imageAlt": "Fish illustration",
      "class": "chapter",
      "sectionCount": "10",
      "courseDescription": "There’s always room for dessert",
      "courseName": "Baked Alaska",
      "body": []
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4036997.png",
      "layout": "fit-height",
      "topLabel": "Fleischmann's Vienna Restaurant, NYC, 1917",
      "course": "10 <i>of</i> 10&colon; Baked Alaska",
      "body": [
        {
          "type": "text",
          "value": "Of course, we have to get dessert – and we’ll be having baked alaska."
        },
        {
          "type": "text",
          "value": "It’s not among the forty plus desserts on offer at Fleischmann’s – advances in artificial refrigeration made all kinds of sweet cold treats much easier – but I know a place where we can still get one…"
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4036998.png",
      "layout": "fit-height",
      "course": "10 <i>of</i> 10&colon; Baked Alaska",
      "topLabel": "Fleischmann's Vienna Restaurant, NYC, 1917",
      "body": [
        {
          "type": "text",
          "value": "Even though the science of nutrition that emerged in the early 20th century pushed many diners away from extravagant meals, dessert obviously stuck around."
        },
        {
          "type": "text",
          "value": "In fact, if you visit Delmonico’s today, the menu has changed a bit – there’s yellowtail crudo, a burrata, sichuan peppercorn sauce, a cocktail with pandan. But you can also still order a baked alaska, invented there in 1867."
        }
      ]
    },
    {
      "id": "video",
      "state": "1",
      "body": [
        {
          "type": "text",
          "value": "Restaurant dining in America was once an imitation: wannabe aristocrats attempting French feasting. But as the 19th became the 20th century, the American middle class and the true American restaurant emerged: diverse, accessible, opinionated, at times chaotic."
        }
      ]
    },
    {
      "id": "video",
      "state": "2",
      "body": [
        {
          "type": "text",
          "value": "But the fundamental break away from the old European style happened in the years Frank Buttolph collected all those menus. Maybe you’ll find some intriguing artifacts yourself. We’ve curated 5,000 menus for you."
        }
      ]
    }
  ]
}`;var Ge=v("<p></p>"),Ve=v('<details><summary></summary> <div class="content"><!></div></details>');function Ze(c,e){let t=F(()=>typeof e.content=="string"),n=F(()=>e.open==="true");var s=Ve(),a=p(s);E(a,()=>e.summary,!0),u(a);var h=g(a,2),m=p(h);{var f=r=>{var d=A(),y=C(d);E(y,()=>e.content),l(r,d)},i=r=>{var d=A(),y=C(d);B(y,17,()=>e.content,H,(k,L)=>{let x=()=>o(L).value;var Y=Ge();E(Y,x,!0),u(Y),l(k,Y)}),l(r,d)};U(m,r=>{o(t)?r(f):r(i,-1)})}u(h),u(s),N(()=>{s.open=o(n),re(s,"name",e.name)}),l(c,s)}var ze=v("<li></li>"),Je=v("<ul></ul>");function Ue(c,e){var t=Je();B(t,21,()=>e.li,H,(n,s)=>{var a=ze();E(a,()=>o(s),!0),u(a),l(n,a)}),u(t),l(c,t)}var Ke=v("<li></li>"),Qe=v("<ol></ol>");function $e(c,e){var t=Qe();B(t,21,()=>e.li,H,(n,s)=>{var a=Ke();E(a,()=>o(s),!0),u(a),l(n,a)}),u(t),l(c,t)}var en=v("<p></p>"),nn=v("<section><!></section>");function tn(c,e){G(e,!0);const t={details:Ze,ul:Ue,ol:$e};let n=D(e,"components",19,()=>({})),s=D(e,"body",19,()=>[]);var a=A(),h=C(a);B(h,17,s,H,(m,f)=>{let i=()=>o(f).section,r=()=>o(f).content;const d=F(()=>i().toLowerCase().replace(/[^a-z0-9]/g,"")),y=F(()=>n()[i()]);var k=nn(),L=p(k);{var x=b=>{var w=A(),_=C(w);Q(_,()=>o(y),(q,O)=>{O(q,$(r))}),l(b,w)},Y=b=>{var w=A(),_=C(w);B(_,17,r,H,(q,O,ne,te)=>{let R=()=>o(O).type,M=()=>o(O).value;const Z=F(()=>n()[R()]||t[R()]),le=F(()=>typeof M()=="string");var ae=A(),ce=C(ae);{var ue=T=>{var I=A(),W=C(I);Q(W,()=>o(Z),(z,J)=>{J(z,$(M))}),l(T,I)},de=T=>{var I=en();E(I,M,!0),u(I),l(T,I)},he=T=>{var I=A(),W=C(I);K(W,R,!1,(z,J)=>{var oe=A(),pe=C(oe);E(pe,M),l(J,oe)}),l(T,I)},me=T=>{var I=A(),W=C(I);K(W,R,!1,(z,J)=>{xe(z,()=>({...M()}))}),l(T,I)};U(ce,T=>{o(Z)?T(ue):R()==="text"?T(de,1):o(le)?T(he,2):T(me,-1)})}l(q,ae)}),l(b,w)};U(L,b=>{o(y)?b(x):b(Y,-1)})}u(k),N(()=>re(k,"id",o(d))),l(m,k)}),l(c,a),V()}var an=v('<p> </p> <progress max="100"></progress>',1);function on(c,e){let t=D(e,"label",3,"A"),n=D(e,"value",3,0);var s=an(),a=C(s),h=p(a,!0);u(a);var m=g(a,2);N(()=>{S(h,t()),ke(m,n())}),l(c,s)}var sn=v('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function rn(c,e){G(e,!0);const{body:t}=Se,n={Test:on};var s=sn(),a=g(p(s),2),h=p(a),m=p(h,!0);u(h),u(a);var f=g(a,2);tn(f,{get components(){return n},get body(){return t}}),u(s),N(i=>S(m,i),[()=>je.replace(/\t/g," ")]),l(c,s),V()}const ln=(c,e=ee)=>{var t=cn(),n=p(t),s=p(n,!0);u(n);var a=g(n,2),h=p(a,!0);u(a),u(t),N(()=>{S(s,e().name),S(h,e().age)}),l(c,t)};var cn=v('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),un=v('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function dn(c,e){G(e,!0),D(e,"age",3,30);const t=[{name:"John",age:30},{name:"Jill",age:45}];let n=X(0),s=F(()=>o(n)*2),a=F(()=>o(n)*2),h=X(0);j(()=>{P(h,o(n)*2)});var m=un(),f=g(C(m),4),i=g(f,2),r=p(i);u(i);var d=g(i,2),y=p(d);u(d);var k=g(d,2),L=p(k);u(k);var x=g(k,4),Y=p(x);ie(Y,()=>e.children??ee),u(x);var b=g(x,4),w=g(b,4);B(w,21,()=>t,H,(_,q)=>{ln(_,()=>o(q))}),u(w),N(()=>{S(r,`${o(n)??""} doubled is ${o(s)??""} (derived)`),S(y,`${o(n)??""} doubled is ${o(a)??""} (derived by)`),S(L,`${o(n)??""} doubled is ${o(h)??""} ($effect)`)}),se("click",f,()=>ge(n)),se("click",b,()=>e.random(Math.floor(Math.random()*10))),l(c,m),V()}be(["click"]);const hn=(c,e)=>{let t=X(ve(c)),n=X(null),s=X(!0),a=X(void 0);const h=(i=!0)=>{P(s,i,!0),i===!0&&(P(a,null),P(n,null))},m=async()=>{try{const i=await fetch(o(t),e);if(!i.ok)throw new Error(`Unexpected error occurred (status ${i.status})`);let r;if(o(t).includes(".csv")){const d=await i.text();r=_e(d)}else r=await i.json();return[null,r]}catch(i){const{errorMessage:r="Unexpected error eccurred"}=i;return[r,null]}},f=async i=>{h(!0);const[r,d]=await m();if(i===o(t)){if(r){h(!1),P(a,r,!0);return}h(!1),P(n,d,!0)}};return j(()=>{f(o(t))}),{get data(){return o(n)},get loading(){return o(s)},get error(){return o(a)},get url(){return o(t)},set url(i){o(t)!==i&&P(t,i,!0)}}};var mn=v("<p>loading data...</p>"),pn=v("<p> </p>"),fn=v("<p>data loaded</p> <pre> </pre>",1),gn=v('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function vn(c,e){G(e,!0);const t=`${Ae}/assets/demo/test.csv`,n=hn(t);j(()=>{});var s=gn(),a=g(p(s),2),h=p(a);{var m=r=>{var d=mn();l(r,d)},f=r=>{var d=pn(),y=p(d);u(d),N(()=>S(y,`error: ${n.error??""}`)),l(r,d)},i=r=>{var d=fn(),y=g(C(d),2),k=p(y,!0);u(y),N(L=>S(k,L),[()=>JSON.stringify(n.data,null,2)]),l(r,d)};U(h,r=>{n.loading?r(m):n.error?r(f,1):r(i,-1)})}u(a),u(s),l(c,s),V()}var yn=v('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function bn(c){let e=X(0);function t(y){console.log(y)}var n=yn(),s=g(p(n),2);Le(s);var a=g(s,2);Te(a);var h=g(a,2);De(h);var m=g(h,2);Me(m);var f=g(m,2);rn(f,{});var i=g(f,2);vn(i,{});var r=g(i,2);We(r);var d=g(r,2);dn(d,{random:t,get value(){return o(e)},set value(y){P(e,y,!0)}}),u(n),l(c,n)}function Fn(c){bn(c)}export{Fn as component};
