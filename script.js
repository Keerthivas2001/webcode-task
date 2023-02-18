//container
var doc=document.createElement("div")
doc.setAttribute("class","container");
//nav-bar
var nav=document.createElement("div");
nav.setAttribute("class","nav-bar");
//a tag
var logo=document.createElement("a");
logo.setAttribute("class","logo");
logo.setAttribute("href","#home");
logo.setAttribute("value","Reload Page");
logo.setAttribute("onClick","window.location.reload(true)")
//img
var img=document.createElement("img");
img.setAttribute("class","logo_pic");
img.setAttribute("src","https://images.all-free-download.com/images/graphiclarge/beer_signs_vector_292882.jpg")

//ul tag
var ul=document.createElement("ul");
ul.setAttribute("class","nav_list");
ul.setAttribute("id","mynav_list")

//li tags
var li1=document.createElement("li");
li1.setAttribute("class","nav_items");
var li2=document.createElement("li");
li2.setAttribute("class","nav_items");
var li3=document.createElement("li");
li3.setAttribute("class","nav_items");
var li4=document.createElement("li");
li4.setAttribute("class","nav_items");
var li5=document.createElement("li");
li5.setAttribute("class","nav_items");

// nav_bar a tags
var nav_home=document.createElement("a");
nav_home.setAttribute("class","list");
nav_home.setAttribute("href","#home");
nav_home.innerHTML="HOME";

var nav_product=document.createElement("a");
nav_product.setAttribute("class","list");
nav_product.setAttribute("href","#product");
nav_product.innerHTML="Products";

var br1=document.createElement("br");
var br2=document.createElement("br");

var search=document.createElement("input");
search.setAttribute("type","text");
search.setAttribute("placeholder"," search..");
search.setAttribute("name","search");
search.setAttribute("id","search_box");

var button=document.createElement("button");
button.setAttribute("class","button");
button.setAttribute("type","submit");
button.innerHTML="SEARCH";


//home section

var home=document.createElement("div")
home.setAttribute("class","homes");
home.setAttribute("id","home");
home.innerHTML=`Brewing is the practice of regulating the interactions between water, starch, yeast, and hops so that the end result is what is called beer.
    Of course, the actual process of brewing is a lot more complicated full of terrifying terms like lautering, wort, and isomerization. <br>
    <br>
     Its the job of the brewer to have as much control over as many elements as possible so that the end result is close to what he or she had in mind.
In a sense, brewing is really about doing as much as possible to influence the results of a process thats entirely hands off: fermentation.<br>
 We are able to brew beer and drink beer, and spill beer for one reason: single-celled organisms called yeast,
  most often the Saccharomyces cerevisiae or Saccharomyces pastorianius variety,
  like to metabolize starch-derived sugars into ethyl alcohol and CO2.<br>
  
  <br>
  When we brew a beer, 
  we are preparing a certain amount and variety of grain to produce those sugars,
   and then adding yeast so they can feast and create alcohol. If you can wrap your head around that, you can grasp the concept of brewing.
 Think of hops, that other essential brewing ingredient, like seasoning, stabilizing the brew and adding flavor.`

var home_pic=document.createElement("img");
home_pic.setAttribute("class","home_pic");
home_pic.setAttribute("src","https://images.unsplash.com/photo-1625264412785-7c94942908a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80")


//products section
var products=document.createElement("div")
products.setAttribute("class","products");
products.setAttribute("id","product");
products.innerHTML=`<div class="title">Products</div>`



var breweries=document.createElement("div")
breweries.setAttribute("class","named");
var type=document.createElement("div")
type.setAttribute("class","type");

//link section
var links=document.createElement("div")
links.setAttribute("class","link");
links.setAttribute("id","url");

//footer section
var footer=document.createElement("div")
footer.setAttribute("class","footer");
footer.innerHTML=`<div class="footer_text">Don't drink and drive</div>`









async function brewery(){
try{
  var api=await fetch('https://api.openbrewerydb.org/breweries');
 var data= await api.json();
 
 
for(i of data){
   var card=document.createElement("div");
   card.setAttribute("class","value");
card.innerHTML+=`<div class="brand_names"><b>Brand Name:</b> ${i.name}</div><br>
<div class="brand_type"><b>Type:</b> ${i.brewery_type}</div> <br>
<div class="address"><b>Address:</b> ${i.street},${i.city},${i.state}-${i.postal_code},${i.country} </div><br>
<span><b>Website:</b><a class="website" href="${i.website_url}" target="_blank"> ${i.website_url}</a></span><br>
<div class="phone_no"><b>Phone NO:</b> ${i.phone}</div><br>`

breweries.append(card);
}

 }

catch(error){
    console.log(error);   
}
}

brewery();





//append

products.append(breweries);
li1.append(nav_home);
li2.append(nav_product);
li3.append(search);
li4.append(button);

ul.append(li1,li2,br1,br2,li3,li4);
logo.append(img);
nav.append(logo,ul);
doc.append(nav,home_pic,home,products,links,footer);
document.body.append(doc);





