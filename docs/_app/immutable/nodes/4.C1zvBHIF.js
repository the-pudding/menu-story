import"../chunks/DsnmJJEf.js";import{al as g,Z as p,$ as _,_ as c,X as Y,G as o,an as R,W as z,ac as O,Y as G,a9 as ee,J as H,aE as fe,am as P,ba as ge,I as ye}from"../chunks/C5V18K91.js";import{b as l,f as y,c as A,t as ve}from"../chunks/DAo7DBt3.js";import{b as C,g as be,f as se}from"../chunks/DJ561LLY.js";import{e as D,i as B,b as we,s as re,c as xe,d as ke}from"../chunks/CE9KbBQ4.js";import{e as K}from"../chunks/CowkXnMh.js";import{c as Q}from"../chunks/g_MYWaHd.js";import{s as $,p as I}from"../chunks/BhdR-ak8.js";import{s as ie}from"../chunks/BNF7Qlk4.js";import{b as _e,i as V}from"../chunks/qQMnHyvT.js";import{h as W,c as Ce,a as Se}from"../chunks/C-TyNIOx.js";import{b as Ae}from"../chunks/rOmmE597.js";import"../chunks/DlOzM7pa.js";var Ye=y('<section id="demo-link"><h2>Link</h2> <p><a href="elements">Default element styles demo</a></p> <p><a href="fonts">Pudding-hosted font previews</a></p> <p><a href="ui">BitsUI styled components</a></p></section>');function Le(u){var e=Ye();l(u,e)}var Ne=y('<section id="demo-image"><h2>Image</h2> <p>img tag</p> <img src="../assets/demo/test.jpg" alt="cat" class="svelte-b56t42"/> <p>background image</p> <div class="svelte-b56t42"></div></section>');function Fe(u){var e=Ne();l(u,e)}var Te=y('<section id="demo-element"><h2>Dynamic Svelte Element</h2> <!></section>');function Ie(u){const e=[{tag:"h3",text:"I am a h3 tag."},{tag:"p",text:"I am p tag."}];var t=Te(),n=g(p(t),2);D(n,17,()=>e,B,(s,a)=>{let h=()=>o(a).tag,m=()=>o(a).text;var f=A(),i=_(f);K(i,h,!1,(r,d)=>{var v=ve();Y(()=>C(v,m())),l(d,v)}),l(s,f)}),c(t),l(u,t)}var Re=y("<p> </p>");function He(u,e){var t=Re(),n=p(t);c(t),Y(()=>C(n,`I am component A and my favorite number is ${e.number??""}.`)),l(u,t)}var De=y("<p> </p>");function Be(u,e){var t=De(),n=p(t);c(t),Y(()=>C(n,`I am component B and my name is ${e.name??""}.`)),l(u,t)}var Xe=y('<section id="demo-component"><h2>Dynamic Svelte Component</h2> <!></section>');function Me(u){const e={A:He,B:Be},t=[{component:"A",number:42},{component:"B",name:"Russell"}];var n=Xe(),s=g(p(n),2);D(s,17,()=>t,B,(a,h)=>{const m=R(()=>e[o(h).component]);var f=A(),i=_(f);Q(i,()=>o(m),(r,d)=>{d(r,$(()=>o(h)))}),l(a,f)}),c(n),l(u,n)}var Pe=y("<div><!></div>");function Ee(u,e){z(e,!0);let t=I(e,"root",3,null),n=I(e,"top",3,0),s=I(e,"bottom",3,0),a=I(e,"increments",3,100),h=I(e,"value",15,void 0),m=[],f=[],i=[],r=[],d;function v(){let b=0,w=0;for(let S=0;S<m.length;S++)m[S]>b&&(b=m[S],w=S);b>0?h(w):h(void 0)}function k(b,w){const S=M=>{M[0].isIntersecting;const Z=M[0].intersectionRatio;m[w]=Z,v()},E=n()?n()*-1:0,j=s()?s()*-1:0,ne=`${E}px 0px ${j}px 0px`,te={root:t(),rootMargin:ne,threshold:f};r[w]&&r[w].disconnect();const X=new IntersectionObserver(S,te);X.observe(b),r[w]=X}function L(){i.length&&i.forEach(k)}O(()=>{for(let b=0;b<a()+1;b++)f.push(b/a());i=d.querySelectorAll(":scope > *:not(iframe)"),L()}),O(()=>{n(),s(),L()});var x=Pe(),N=p(x);ie(N,()=>e.children??ee),c(x),_e(x,b=>d=b,()=>d),l(u,x),G()}var We=y('<div><p class="svelte-1sxgmm9"> </p></div>'),je=y('<section id="scrolly"><h2 class="svelte-1sxgmm9">Scrolly <span> </span></h2> <div class="spacer svelte-1sxgmm9"></div> <!> <div class="spacer svelte-1sxgmm9"></div></section>');function qe(u){let e=P(void 0);var t=je(),n=p(t),s=g(p(n)),a=p(s,!0);c(s),c(n);var h=g(n,4);Ee(h,{get value(){return o(e)},set value(m){H(e,m,!0)},children:(m,f)=>{var i=A(),r=_(i);D(r,16,()=>[0,1,2,3,4],B,(d,v,k)=>{const L=R(()=>o(e)===k);var x=We();let N;var b=p(x),w=p(b,!0);c(b),c(x),Y(()=>{N=we(x,1,"step svelte-1sxgmm9",null,N,{active:o(L)}),C(w,v)}),l(d,x)}),l(m,i)},$$slots:{default:!0}}),fe(2),c(t),Y(()=>C(a,o(e)||"-")),l(u,t)}const Oe=`{
  "ignore": [],
  "slides": [
    {
      "id": "new-slide",
      "body": [
        {
          "type": "text",
          "value": "What can we learn from America’s earliest restaurant menus?"
        }
      ]
    },
    {
      "id": "cold",
      "body": [
        {
          "type": "text",
          "value": "The New York Public Library has an archive of menus, primarily from the 1880s to the 1920s, including some of the first menus to resemble modern-day restaurant dining."
        }
      ]
    },
    {
      "id": "buttolph",
      "body": [
        {
          "type": "text",
          "value": "These menus were sourced by Frank E. Buttolph (pictured above) who spent decades archiving over 25,000 menus as a record for future generations of the culinary and social history of her time."
        },
        {
          "type": "text",
          "value": "Rifling through these menus, we can see the origins of restaurants and how much, or how little, our dining has changed in the ensuing 100 years."
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
          "value": "Get enough menus together, and they can tell not just a culinary history, but a social one."
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
      "image": "assets/menus/1.png",
      "imageAlt": "Fish illustration",
      "class": "chapter",
      "body": []
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
      "topLabel": "Delmonico’s, NYC, 1881",
      "body": [
        {
          "type": "text",
          "value": "We begin our tour with oysters, pardon me (in French)—<i>huitres</i>—and <i>potages</i>, the soup. The Consomme Châtelaine, a chicken soup, is an excellent choice but I suggest the <b>bisque d’ecrevisses</b>, a crayfish soup made with cognac and cream."
        },
        {
          "type": "text",
          "value": "You can be certain that it will be 19th century America’s best possible imitation of the finest French cuisine. After all, you will order the French dish in French and your chef will have likely been imported from France – or at least somewhere over there."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/4000000068.png",
      "layout": "fit-height",
      "topLabel": "Manhattan Club, NYC, 1866",
      "body": [
        {
          "type": "text",
          "value": "Restaurant dining in America began in the 1830s. These were not taverns that had whatever food was around to go with drink, but as spaces for culinary pleasure. By the late 1800s, they answered to society’s new world elite, a class that sought to emulate what they saw as the height of culture and sophistication: the European, and particularly the French, aristocracy."
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
          "value": "Soup was the first true course of the decadent meals at these restaurants, which would then proceed to 8, 10, or more courses of French classics or, possibly, other dishes simply given a European-sounding name."
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
          "value": "After finishing your soup, feel free to reach out for a stalk of celery in a crystal celery vase. Celery was among a number of “relishes” that took a pride of place in the aristocratic menu and on the aristocratic table. In fact, it’s the fourth most common item among the Buttolph Collection menus, after only coffee, tea, and olives."
        },
        {
          "type": "text",
          "value": "Alongside sorbets and punches inserted later in the meal as palate cleansers, celery functioned as part of an intricately ordered meal that distinguished the aristocratic restaurant as concerned more with the aesthetic than the practical."
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
      "body": [
        {
          "type": "text",
          "value": "Restaurant dining was one way the post-Civil War elite <b>symbolically distinguished themselves from the masses.</b> French was one aspect of gatekeeping – luxury was another."
        },
        {
          "type": "text",
          "value": "In this menu from the Hotel Brunswick, celery appears as an hors d’oeurve and alongside canvasback duck. The canvasback was among the most sought after game in this period, partially because the duck’s favorite food was supposed to make it more delicious. That diet? Wild celery. Luxury upon luxury."
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
          "value": "Speaking of rare meats: your third course: <i>vol au vent of sweetbread a la toulouse</i> – a pastry case filled with sweetbreads and a brown sauce – here paired with champagne at the “Ninth Annual Dinner in Honor of Crow Charlton” hosted at the Hotel Bellevue."
        },
        {
          "type": "text",
          "value": "The American aristocratic restaurant of the late 19th century didn’t just serve food that paired complex cooking technique with decadent, luxury ingredients – it also publicly flaunted that decadence."
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
          "value": "The <b>public nature of this luxury</b> was useful to differentiate the status and power of the elite: what they ate, how much of it, and with what customs and trappings."
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
          "value": "Feasting in public also started to become more and more necessary. As industrialization offered employment to the lower classes beyond the domestic sphere, the elite increasingly found they lacked the staff to host events themselves. Restaurants offered space for events of all kinds – community celebrations like this one, memorials, or just a dinner for friends – further moving private wealth into the realm of conspicuous consumption."
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
          "value": "Back at the St. Nicholas, for example, one William Clauss was just hosting a dinner for his friends."
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
          "value": "“Pork Chops Saute, Sauce Robert” feels like a fitting next course: a traditional French sauce, sure, but some American is starting to come through."
        },
        {
          "type": "text",
          "value": "The century is turning over, and so is the menu: the dishes are now mostly in English, there’s a price attached, and it’s one of a number of a la carte options. The menu even warns that some dishes may take 15 minutes more to prepare!"
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
          "value": "…and noticeably more English-friendly."
        },
        {
          "type": "text",
          "value": "Elite dining is changing – because restaurant dining is being transformed by everyone else."
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
          "value": "Here’s an iced coffee, on the house. That’s a nice thing now  and a real splurge if it’s the hot spring of 1900 – when ice was still cut and shipped to cities from frozen lakes and rivers. The American Ice Company had just <a href=https://www.bklynlibrary.org/blog/2014/05/21/ice-delivery-city target=_blank>formed</a> a monopoly in the city – and then doubled its rates and cut deliveries, in order to juice profits and minimize labor costs."
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
      "layout": "no-image",
      "topLabel": "&nbsp;",
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
      "bgSrc": "assets/menus/4066460.png",
      "layout": "fit-height",
      "topLabel": "Walton’s Old Homestead Oyster and Chop House, NYC, 1914",
      "body": [
        {
          "type": "text",
          "value": "From 1880 to 1920, the number of professional occupations doubled, as did the percentage of Americans working in management. At the same time, employment in the dining industry grew 400%."
        },
        {
          "type": "text",
          "value": "In this explosion, the American restaurant didn’t just appear as an answer to the aristocratic restaurant model – it had evolve out of a host of other models of dining that emerged in between."
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
          "value": "<b>Table d’hote menus</b> offered a selection of dishes at a fixed priced that mimicked the coursing of a fine dining restaurant, but with less luxurious ingredients and a more affordable price. As in this menu from the Putnam House, these places attempted to be “American” while also evoking the abundance of elite dining."
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
      "bgSrc": "assets/menus/475314.png",
      "layout": "fit-height",
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
      "layout": "fit-height",
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
      "topLabel": "The Syrian Restaurant for Ladies' & Gents, NYC, 1917",
      "body": [
        {
          "type": "text",
          "value": "Italian and German restaurants were early challengers to French dominance over dining, but middle class diners also found that there were already also a glut of restaurants serving local immigrant populations that would be happy to take their business, too."
        },
        {
          "type": "text",
          "value": "The specific offerings depended on the city, but diners started to bring their money and demands to, say, Chinese, Russian, or Syrian restaurateurs, too."
        }
      ]
    },
    {
      "id": "soup",
      "bgSrc": "assets/menus/471895.png",
      "layout": "fit-height",
      "topLabel": "Tokio Restaurant, NYC, 1914",
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
      "body": [
        {
          "type": "text",
          "value": "This “cosmopolitan” trend wasn’t contained to ethnic restaurants – restaurants of all kinds started to serve dishes that were, or at least pretended to be, from foreign lands."
        },
        {
          "type": "text",
          "value": "Then, as now, Americans embracing foreign food was fully compatible with racism and xenophobia. Nonetheless, whether as authentic cultural inclusion or more cynical exoticism, as Haley writes, these diners “equated excellence with a diverse knowledge of cultural experiences rather than a mastery of a single highbrow tradition.”"
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
          "value": "Why not wash that down with a “Horse’s Neck”?  While the drink later added alcohol, it originated as a mix of ginger ale and a long curling lemon rind, one of many new booze-free options appearing on menus in the early 20th century."
        },
        {
          "type": "text",
          "value": "The beverages offered on these menus suggests the clientele had changed from a bit from those feasts accompanied solely with wine, liquor, and mineral water. Now diners had work to do, appearances to keep up, or, well, just be children."
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
          "value": "While ethnic food didn’t fix racism in America, dining in America did diversify across age and gender in this era. Aristocratic French restaurants had once been the province purely of men; later, lunch counters and other new type of eateries segregated the sexes. But as the new century progressed, restaurants not only shifted to mixed gender dining rooms they also began to cater to entire families."
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
          "value": "Into the first decades of the 20th century, the elite were still hosting luxurious banquets with coursed menus. Social transformation is slow."
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
      "body": [
        {
          "type": "text",
          "value": "Just as middle-class restaurants offered customers a variety of options to meet their desires, some elite restaurants confronted the newly crowded restaurant market with a new take on abundance. Rector’s, in Chicago, had a dizzying selection for every section – including 25 kinds of potatoes. Potatoes O’Brien Au Gratin feels like a fitting choice for the mashed-up moment."
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
      "id": "soup",
      "bgSrc": "assets/menus/4036998.png",
      "layout": "fit-height",
      "topLabel": "Fleischmann's Vienna Restaurant, NYC, 1917",
      "body": [
        {
          "type": "text",
          "value": "Restaurant dining in America was once an imitation: wannabe aristocrats attempting French feasting. But as the 19th became the 20th century, the American middle class and the true American restaurant emerged: diverse, accessible, opinionated, at times chaotic."
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
          "value": "And that was before the rise of fast food a few decades later, revolutionizing American dining yet again."
        },
        {
          "type": "text",
          "value": "Today’s menus show all of those influences: the oysters that still start many a meal, value meals and combinations, “fusion” and Americanized foreign cuisines, family-style dining,"
        },
        {
          "type": "text",
          "value": "But the fundamental break away from the old European style happened in the years Frank Buttolph collected all those menus. Maybe you’ll find some intriguing artifacts yourself. We’ve collected 5000 menus for you. Right this way:"
        }
      ]
    }
  ]
}`;var ze=y("<p></p>"),Ge=y('<details><summary></summary> <div class="content"><!></div></details>');function Ze(u,e){let t=R(()=>typeof e.content=="string"),n=R(()=>e.open==="true");var s=Ge(),a=p(s);W(a,()=>e.summary,!0),c(a);var h=g(a,2),m=p(h);{var f=r=>{var d=A(),v=_(d);W(v,()=>e.content),l(r,d)},i=r=>{var d=A(),v=_(d);D(v,17,()=>e.content,B,(k,L)=>{let x=()=>o(L).value;var N=ze();W(N,x,!0),c(N),l(k,N)}),l(r,d)};V(m,r=>{o(t)?r(f):r(i,-1)})}c(h),c(s),Y(()=>{s.open=o(n),re(s,"name",e.name)}),l(u,s)}var Je=y("<li></li>"),Ue=y("<ul></ul>");function Ve(u,e){var t=Ue();D(t,21,()=>e.li,B,(n,s)=>{var a=Je();W(a,()=>o(s),!0),c(a),l(n,a)}),c(t),l(u,t)}var Ke=y("<li></li>"),Qe=y("<ol></ol>");function $e(u,e){var t=Qe();D(t,21,()=>e.li,B,(n,s)=>{var a=Ke();W(a,()=>o(s),!0),c(a),l(n,a)}),c(t),l(u,t)}var en=y("<p></p>"),nn=y("<section><!></section>");function tn(u,e){z(e,!0);const t={details:Ze,ul:Ve,ol:$e};let n=I(e,"components",19,()=>({})),s=I(e,"body",19,()=>[]);var a=A(),h=_(a);D(h,17,s,B,(m,f)=>{let i=()=>o(f).section,r=()=>o(f).content;const d=R(()=>i().toLowerCase().replace(/[^a-z0-9]/g,"")),v=R(()=>n()[i()]);var k=nn(),L=p(k);{var x=b=>{var w=A(),S=_(w);Q(S,()=>o(v),(E,j)=>{j(E,$(r))}),l(b,w)},N=b=>{var w=A(),S=_(w);D(S,17,r,B,(E,j,ne,te)=>{let X=()=>o(j).type,M=()=>o(j).value;const Z=R(()=>n()[X()]||t[X()]),le=R(()=>typeof M()=="string");var ae=A(),ue=_(ae);{var ce=F=>{var T=A(),q=_(T);Q(q,()=>o(Z),(J,U)=>{U(J,$(M))}),l(F,T)},de=F=>{var T=en();W(T,M,!0),c(T),l(F,T)},he=F=>{var T=A(),q=_(T);K(q,X,!1,(J,U)=>{var oe=A(),pe=_(oe);W(pe,M),l(U,oe)}),l(F,T)},me=F=>{var T=A(),q=_(T);K(q,X,!1,(J,U)=>{xe(J,()=>({...M()}))}),l(F,T)};V(ue,F=>{o(Z)?F(ce):X()==="text"?F(de,1):o(le)?F(he,2):F(me,-1)})}l(E,ae)}),l(b,w)};V(L,b=>{o(v)?b(x):b(N,-1)})}c(k),Y(()=>re(k,"id",o(d))),l(m,k)}),l(u,a),G()}var an=y('<p> </p> <progress max="100"></progress>',1);function on(u,e){let t=I(e,"label",3,"A"),n=I(e,"value",3,0);var s=an(),a=_(s),h=p(a,!0);c(a);var m=g(a,2);Y(()=>{C(h,t()),ke(m,n())}),l(u,s)}var sn=y('<section id="cms"><h2>MicroCMS</h2> <code><pre> </pre></code> <!></section>');function rn(u,e){z(e,!0);const{body:t}=Ce,n={Test:on};var s=sn(),a=g(p(s),2),h=p(a),m=p(h,!0);c(h),c(a);var f=g(a,2);tn(f,{get components(){return n},get body(){return t}}),c(s),Y(i=>C(m,i),[()=>Oe.replace(/\t/g," ")]),l(u,s),G()}const ln=(u,e=ee)=>{var t=un(),n=p(t),s=p(n,!0);c(n);var a=g(n,2),h=p(a,!0);c(a),c(t),Y(()=>{C(s,e().name),C(h,e().age)}),l(u,t)};var un=y('<div class="person svelte-q3gttf"><p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p></div>'),cn=y('<h2>Svelte5</h2> <h3>Reactive variables 3 ways:</h3> <button class="svelte-q3gttf">count++</button> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <p class="svelte-q3gttf"> </p> <h3>Children (previously slots):</h3> <div class="children"><!></div> <h3>Dispatch Event</h3> <button class="svelte-q3gttf">Random</button>  <h3>Snippets</h3> <div class="people svelte-q3gttf"></div>',1);function dn(u,e){z(e,!0),I(e,"age",3,30);const t=[{name:"John",age:30},{name:"Jill",age:45}];let n=P(0),s=R(()=>o(n)*2),a=R(()=>o(n)*2),h=P(0);O(()=>{H(h,o(n)*2)});var m=cn(),f=g(_(m),4),i=g(f,2),r=p(i);c(i);var d=g(i,2),v=p(d);c(d);var k=g(d,2),L=p(k);c(k);var x=g(k,4),N=p(x);ie(N,()=>e.children??ee),c(x);var b=g(x,4),w=g(b,4);D(w,21,()=>t,B,(S,E)=>{ln(S,()=>o(E))}),c(w),Y(()=>{C(r,`${o(n)??""} doubled is ${o(s)??""} (derived)`),C(v,`${o(n)??""} doubled is ${o(a)??""} (derived by)`),C(L,`${o(n)??""} doubled is ${o(h)??""} ($effect)`)}),se("click",f,()=>ge(n)),se("click",b,()=>e.random(Math.floor(Math.random()*10))),l(u,m),G()}be(["click"]);const hn=(u,e)=>{let t=P(ye(u)),n=P(null),s=P(!0),a=P(void 0);const h=(i=!0)=>{H(s,i,!0),i===!0&&(H(a,null),H(n,null))},m=async()=>{try{const i=await fetch(o(t),e);if(!i.ok)throw new Error(`Unexpected error occurred (status ${i.status})`);let r;if(o(t).includes(".csv")){const d=await i.text();r=Se(d)}else r=await i.json();return[null,r]}catch(i){const{errorMessage:r="Unexpected error eccurred"}=i;return[r,null]}},f=async i=>{h(!0);const[r,d]=await m();if(i===o(t)){if(r){h(!1),H(a,r,!0);return}h(!1),H(n,d,!0)}};return O(()=>{f(o(t))}),{get data(){return o(n)},get loading(){return o(s)},get error(){return o(a)},get url(){return o(t)},set url(i){o(t)!==i&&H(t,i,!0)}}};var mn=y("<p>loading data...</p>"),pn=y("<p> </p>"),fn=y("<p>data loaded</p> <pre> </pre>",1),gn=y('<div class="c"><h2>Load Data</h2> <div class="response"><!></div></div>');function yn(u,e){z(e,!0);const t=`${Ae}/assets/demo/test.csv`,n=hn(t);O(()=>{});var s=gn(),a=g(p(s),2),h=p(a);{var m=r=>{var d=mn();l(r,d)},f=r=>{var d=pn(),v=p(d);c(d),Y(()=>C(v,`error: ${n.error??""}`)),l(r,d)},i=r=>{var d=fn(),v=g(_(d),2),k=p(v,!0);c(v),Y(L=>C(k,L),[()=>JSON.stringify(n.data,null,2)]),l(r,d)};V(h,r=>{n.loading?r(m):n.error?r(f,1):r(i,-1)})}c(a),c(s),l(u,s),G()}var vn=y('<div id="demo" class="svelte-15aotx7"><h1>Demo</h1> <!> <!> <!> <!> <!> <!> <!> <!></div>');function bn(u){let e=P(0);function t(v){console.log(v)}var n=vn(),s=g(p(n),2);Le(s);var a=g(s,2);Fe(a);var h=g(a,2);Ie(h);var m=g(h,2);Me(m);var f=g(m,2);rn(f,{});var i=g(f,2);yn(i,{});var r=g(i,2);qe(r);var d=g(r,2);dn(d,{random:t,get value(){return o(e)},set value(v){H(e,v,!0)}}),c(n),l(u,n)}function Rn(u){bn(u)}export{Rn as component};
