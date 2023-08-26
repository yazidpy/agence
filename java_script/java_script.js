const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   effect: "cards",
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     dynamicBullets: true,
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
    scrollbar: {
      el: '.swiper-scrollbar',
    },
 });

 var exit= document.querySelector(".exit");
 var adulte= document.querySelector("#adulte");
 var wrapper=document.querySelector(".Wrapper");
 adulte.addEventListener("mouseover",function () {
 wrapper.style.display="block";
 exit.addEventListener("click",function () {
  wrapper.style.display="none";
  });
 });
 var chiffre=document.querySelector(".chiffre");
var moins=document.querySelector(".moins");
var plus=document.querySelector(".plus");
var chiffre1=document.querySelector(".chiffre1");
var moins1=document.querySelector(".moins1");
var plus1=document.querySelector(".plus1");
var chiffre2=document.querySelector(".chiffre2");
var moins2=document.querySelector(".moins2");
var plus2=document.querySelector(".plus2");
// pour les adultes
let a=1 ;
adulte.value="1 adulte"; 
plus.addEventListener("click",function () {
  if(a<9 && a<9-b-c){
a++;
chiffre.value=a;
if(a==1 && b>1 && c==1){
  adulte.value="un adulte et "+b+"enfants et un bébé"; 
}
if(a==1 && b==1 && c>1){
  adulte.value="un adulte et un enfant et "+c+" bébés"; 
}
if(a==1 && b==0 && c>1){
  adulte.value="un adulte et "+c+" bébés"; 
}
if(a==1 && b==1 && c==1){
  adulte.value="un adulte et un enfant et un bébé";
}
if(a==1 && b==0 && c==0){
  adulte.value="1 adulte ";
}
if(a>1 && b==0 && c==0){
  adulte.value=a+" adultes ";
}
if(a>1 && b==1 && c==0){
  adulte.value=a+" adultes et un enfant";
}
if(a==1 && b>1 && c==0){
  adulte.value=" un adulte et "+b+" enfants";
}
if(a>1 && b==1 && c==1){
  adulte.value=a+" adultes et un enfant et un bébé";
}
if(a>1 && b==1 && c>1){
  adulte.value=a+" adultes et un enfant et "+c+" bébés";
}
if(a>1 && b>1 && c>1){
  adulte.value=a+" adultes et "+b+" enfants et "+c+" bébés";
}
if(a==1 && b>1 && c>1){
  adulte.value=" un adulte et "+b+" enfants et "+c+" bébés";
}
if(a>1 && b>1 && c==0){
  adulte.value=a+" adultes et "+b+" enfants ";
}
if(a>1 && b>1 && c==1){
  adulte.value=a+" adultes et "+b+" enfants et un bébé";
}
if(a>1 && b==0 && c>1){
  adulte.value=a+" adultes et "+c+ " bébés";
}
if(a>1 && b==0 && c==1){
  adulte.value=a+" adultes et un bébé";
}
if(a==1 && b==1 && c==0){
  adulte.value=" un adulte et un enfant";
}
if(a==1 && b==0 && c==1){
  adulte.value=" un adulte et un bébé";
}
}
});
moins.addEventListener("click",function () {
  if(a>1){
a--;
chiffre.value=a;
if(a==1 && b>1 && c==1){
  adulte.value="un adulte et "+b+"enfants et un bébé"; 
}
if(a==1 && b==1 && c>1){
  adulte.value="un adulte et un enfant et "+c+" bébés"; 
}
if(a==1 && b==0 && c>1){
  adulte.value="un adulte et "+c+" bébés"; 
}
if(a==1 && b==1 && c==1){
  adulte.value="un adulte et un enfant et un bébé";
}
if(a==1 && b==0 && c==0){
  adulte.value="1 adulte ";
}
if(a>1 && b==0 && c==0){
  adulte.value=a+" adultes ";
}
if(a>1 && b==1 && c==0){
  adulte.value=a+" adultes et un enfant";
}
if(a==1 && b>1 && c==0){
  adulte.value=" un adulte et "+b+" enfants";
}
if(a>1 && b==1 && c==1){
  adulte.value=a+" adultes et un enfant et un bébé";
}
if(a>1 && b==1 && c>1){
  adulte.value=a+" adultes et un enfant et "+c+" bébés";
}
if(a>1 && b>1 && c>1){
  adulte.value=a+" adultes et "+b+" enfants et "+c+" bébés";
}
if(a==1 && b>1 && c>1){
  adulte.value=" un adulte et "+b+" enfants et "+c+" bébés";
}
if(a>1 && b>1 && c==0){
  adulte.value=a+" adultes et "+b+" enfants ";
}
if(a>1 && b>1 && c==1){
  adulte.value=a+" adultes et "+b+" enfants et un bébé";
}
if(a>1 && b==0 && c>1){
  adulte.value=a+" adultes et "+c+ " bébés";
}
if(a>1 && b==0 && c==1){
  adulte.value=a+" adultes et un bébé";
}
if(a==1 && b==1 && c==0){
  adulte.value=" un adulte et un enfant";
}
if(a==1 && b==0 && c==1){
  adulte.value=" un adulte et un bébé";
}
}
});
// pour les enfants
let b=0;
plus1.addEventListener("click",function () {
if(b>=0 && b<9-a-c){
b++;
chiffre1.value=b;
if(a==1 && b>1 && c==1){
  adulte.value="un adulte et "+b+"enfants et un bébé"; 
}
if(a==1 && b==1 && c>1){
  adulte.value="un adulte et un enfant et "+c+" bébés"; 
}
if(a==1 && b==0 && c>1){
  adulte.value="un adulte et "+c+" bébés"; 
}
if(a==1 && b==1 && c==1){
  adulte.value="un adulte et un enfant et un bébé";
}
if(a==1 && b==0 && c==0){
  adulte.value="1 adulte ";
}
if(a>1 && b==0 && c==0){
  adulte.value=a+" adultes ";
}
if(a>1 && b==1 && c==0){
  adulte.value=a+" adultes et un enfant";
}
if(a==1 && b>1 && c==0){
  adulte.value=" un adulte et "+b+" enfants";
}
if(a>1 && b==1 && c==1){
  adulte.value=a+" adultes et un enfant et un bébé";
}
if(a>1 && b==1 && c>1){
  adulte.value=a+" adultes et un enfant et "+c+" bébés";
}
if(a>1 && b>1 && c>1){
  adulte.value=a+" adultes et "+b+" enfants et "+c+" bébés";
}
if(a==1 && b>1 && c>1){
  adulte.value=" un adulte et "+b+" enfants et "+c+" bébés";
}
if(a>1 && b>1 && c==0){
  adulte.value=a+" adultes et "+b+" enfants ";
}
if(a>1 && b>1 && c==1){
  adulte.value=a+" adultes et "+b+" enfants et un bébé";
}
if(a>1 && b==0 && c>1){
  adulte.value=a+" adultes et "+c+ " bébés";
}
if(a>1 && b==0 && c==1){
  adulte.value=a+" adultes et un bébé";
}
if(a==1 && b==1 && c==0){
  adulte.value=" un adulte et un enfant";
}
if(a==1 && b==0 && c==1){
  adulte.value=" un adulte et un bébé";
}

}
});
moins1.addEventListener("click",function () {
  if(b>=1 ){
  b--;
  chiffre1.value=b;
  if(a==1 && b>1 && c==1){
    adulte.value="un adulte et "+b+"enfants et un bébé"; 
  }
  if(a==1 && b==1 && c>1){
    adulte.value="un adulte et un enfant et "+c+" bébés"; 
  }
  if(a==1 && b==0 && c>1){
    adulte.value="un adulte et "+c+" bébés"; 

  }
  if(a==1 && b==1 && c==1){
    adulte.value="un adulte et un enfant et un bébé";
  }
  if(a==1 && b==0 && c==0){
    adulte.value="1 adulte ";
  }
  if(a>1 && b==0 && c==0){
    adulte.value=a+" adultes ";
  }
  if(a>1 && b==1 && c==0){
    adulte.value=a+" adultes et un enfant";
  }
  if(a==1 && b>1 && c==0){
    adulte.value=" un adulte et "+b+" enfants";
  }
  if(a>1 && b==1 && c==1){
    adulte.value=a+" adultes et un enfant et un bébé";
  }
  if(a>1 && b==1 && c>1){
    adulte.value=a+" adultes et un enfant et "+c+" bébés";
  }
  if(a>1 && b>1 && c>1){
    adulte.value=a+" adultes et "+b+" enfants et "+c+" bébés";
  }
  if(a==1 && b>1 && c>1){
    adulte.value=" un adulte et "+b+" enfants et "+c+" bébés";
  }
  if(a>1 && b>1 && c==0){
    adulte.value=a+" adultes et "+b+" enfants ";
  }
  if(a>1 && b>1 && c==1){
    adulte.value=a+" adultes et "+b+" enfants et un bébé";
  }
  if(a>1 && b==0 && c>1){
    adulte.value=a+" adultes et "+c+ " bébés";
  }
  if(a>1 && b==0 && c==1){
    adulte.value=a+" adultes et un bébé";
  }
  if(a==1 && b==1 && c==0){
    adulte.value=" un adulte et un enfant";
  }
  if(a==1 && b==0 && c==1){
    adulte.value=" un adulte et un bébé";
  }

  }
  
  });
// pour les bébés  
let c=0;
plus2.addEventListener("click",function () {

if(c>=0 && c<9-a-b){
c++;
chiffre2.value=c;
if(a==1 && b>1 && c==1){
  adulte.value="un adulte et "+b+"enfants et un bébé"; 
}
if(a==1 && b==1 && c>1){
  adulte.value="un adulte et un enfant et "+c+" bébés"; 
}
if(a==1 && b==1 && c==1){
  adulte.value="un adulte et un enfant et un bébé";
}
if(a==1 && b==0 && c==0){
  adulte.value="1 adulte ";
}
if(a>1 && b==0 && c==0){
  adulte.value=a+" adultes ";
}
if(a>1 && b==1 && c==0){
  adulte.value=a+" adultes et un enfant";
}
if(a==1 && b>1 && c==0){
  adulte.value=" un adulte et "+b+" enfants";
}
if(a>1 && b==1 && c==1){
  adulte.value=a+" adultes et un enfant et un bébé";
}
if(a>1 && b==1 && c>1){
  adulte.value=a+" adultes et un enfant et "+c+" bébés";
}
if(a>1 && b>1 && c>1){
  adulte.value=a+" adultes et "+b+" enfants et "+c+" bébés";
}
if(a==1 && b>1 && c>1){
  adulte.value=" un adulte et "+b+" enfants et "+c+" bébés";
}
if(a>1 && b>1 && c==0){
  adulte.value=a+" adultes et "+b+" enfants ";
}
if(a>1 && b>1 && c==1){
  adulte.value=a+" adultes et "+b+" enfants et un bébé";
}
if(a>1 && b==0 && c>1){
  adulte.value=a+" adultes et "+c+ " bébés";
}
if(a>1 && b==0 && c==1){
  adulte.value=a+" adultes et un bébé";
}
if(a==1 && b==1 && c==0){
  adulte.value=" un adulte et un enfant";
}
if(a==1 && b==0 && c>1){
  adulte.value="un adulte et "+c+" bébés"; 
}
if(a==1 && b==0 && c==1){
  adulte.value=" un adulte et un bébé";
}
}
});
moins2.addEventListener("click",function () {
  if(c>0){
  c--;
  chiffre2.value=c;
  if(a==1 && b>1 && c==1){
    adulte.value="un adulte et "+b+"enfants et un bébé"; 
  }
  if(a==1 && b==1 && c>1){
    adulte.value="un adulte et un enfant et "+c+" bébés"; 
  }
  if(a==1 && b==1 && c==1){
    adulte.value="un adulte et un enfant et un bébé";
  }
  if(a==1 && b==0 && c==0){
    adulte.value="1 adulte ";
  }
  if(a>1 && b==0 && c==0){
    adulte.value=a+" adultes ";
  }
  if(a>1 && b==1 && c==0){
    adulte.value=a+" adultes et un enfant";
  }
  if(a==1 && b>1 && c==0){
    adulte.value=" un adulte et "+b+" enfants";
  }
  if(a>1 && b==1 && c==1){
    adulte.value=a+" adultes et un enfant et un bébé";
  }
  if(a>1 && b==1 && c>1){
    adulte.value=a+" adultes et un enfant et "+c+" bébés";
  }
  if(a>1 && b>1 && c>1){
    adulte.value=a+" adultes et "+b+" enfants et "+c+" bébés";
  }
  if(a==1 && b>1 && c>1){
    adulte.value=" un adulte et "+b+" enfants et "+c+" bébés";
  }
  if(a>1 && b>1 && c==0){
    adulte.value=a+" adultes et "+b+" enfants ";
  }
  if(a==1 && b==0 && c>1){
  adulte.value="un adulte et "+c+" bébés"; 
}
  if(a>1 && b>1 && c==1){
    adulte.value=a+" adultes et "+b+" enfants et un bébé";
  }
  if(a>1 && b==0 && c>1){
    adulte.value=a+" adultes et "+c+ " bébés";
  }
  if(a>1 && b==0 && c==1){
    adulte.value=a+" adultes et un bébé";
  }
  if(a==1 && b==1 && c==0){
    adulte.value=" un adulte et un enfant";
  }
  if(a==1 && b==0 && c==1){
    adulte.value=" un adulte et un bébé";
  }
  }
  });

  // aller simple
  var compteur =0;
var parte2=document.querySelector(".partie2");
var parte1=document.querySelector(".partie1");
var option1=document.querySelector(".option1");
var option2=document.querySelector(".option2");
var option3=document.querySelector(".option3");
var date_ret=document.querySelector(".retour");
var btn2=document.querySelector("#btn2");
var liste0=option1.classList;
var liste1=option2.classList;
var liste2=option3.classList;
option2.addEventListener("mouseover",function(){
  liste1.add("active3");
  liste0.remove("active3");
  liste2.remove("active3");
  date_ret.disabled='false';
  date_ret.style.backgroundColor="gray";
  btn2.disabled='false';
  btn2.style.backgroundColor="black";
  inpute.style.display="none";
date_ret.value="";
adulte.value="1 adulte";
chiffre.value=1;
chiffre1.value=0;
chiffre2.value=0;
});
option3.addEventListener("mouseover",function(){  
  inpute.style.display="";
  liste2.add("active3");
  liste0.remove("active3");
  liste1.remove("active3");
  date_ret.disabled='false';
  date_ret.style.backgroundColor="gray";
  btn2.disabled='';
adulte.value="1 adulte";
btn2.style.backgroundColor="";
date_ret.value="";
chiffre.value=1;
chiffre1.value=0;
chiffre2.value=0;
if(compteur==0){
ajouter_input_1();
compteur++;
ajouter_input_2();
compteur++;
ajouter_input_3();
compteur++;
}
});
option1.addEventListener("mouseover",function(){
  liste0.add("active3");
  liste1.remove("active3");
  liste2.remove("active3");
  btn2.disabled='';
  date_ret.disabled='';
adulte.value="1 adulte";
chiffre.value=1;
chiffre1.value=0;
chiffre2.value=0;
  date_ret.style.backgroundColor="";
  btn2.style.backgroundColor="";
  parte1.style.display=""; 
  inpute.style.display="none";
});
var inpute= document.querySelector(".inputs");
function ajouter_input_1(){
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "d'ou partez vous ");
  input.setAttribute("class", "input1");
  inpute.appendChild(input);
  inpute.innerHTML += "<br>";       
}
function ajouter_input_2(){
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Ou allez vous ? ");
  input.setAttribute("class", "input2");
  inpute.appendChild(input);
  inpute.innerHTML += "<br>";
}
function ajouter_input_3(){
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Quand partez vous ? ");
  input.setAttribute("class", "input3");
  input.setAttribute("onfocus", "(this.type='date')");
  inpute.appendChild(input);
  inpute.innerHTML += "<br>";
}

//hotels
var partie_voiture=document.querySelector(".partie_voiture");
var partie_hotel=document.querySelector(".hotels");
var partie_vol=document.querySelector(".vols");
var vol=document.querySelector("#vol");
var hotel=document.querySelector("#hotel");
var votel=document.querySelector("#votel");
var voiture=document.querySelector("#voiture");
var l1=vol.classList;
var l2=hotel.classList;
var l3=votel.classList;
var l4=voiture.classList;

hotel.addEventListener("mouseover",function(){
l1.remove("active2");
l2.add("active2");
l3.remove("active2");
l4.remove("active2");
partie_vol.style.display="none";
partie_hotel.style.display="grid";
btn2.style.backgroundColor="";
partie_voiture.style.display="none";
});
votel.addEventListener("mouseover",function(){
  l1.remove("active2");
  l2.remove("active2");
  l3.add("active2");
  l4.remove("active2");
partie_vol.style.display="none";
partie_hotel.style.display="";
partie_voiture.style.display="none";

  });
  voiture.addEventListener("mouseover",function(){
    l1.remove("active2");
    l2.remove("active2");
    l3.remove("active2");
    l4.add("active2");
partie_vol.style.display="none";
partie_hotel.style.display="none";
partie_voiture.style.display="block";
    });
    vol.addEventListener("mouseover",function(){
      l1.add("active2");
      l2.remove("active2");
      l3.remove("active2");
      l4.remove("active2");
partie_vol.style.display="";
partie_hotel.style.display="";
partie_voiture.style.display="none";

});
function tester(){
var chekbox=document.querySelector(".checkbox");
var date_res=document.querySelector(".restitution");
if(chekbox.checked==true){
  date_res.disabled='false';
    date_res.style.backgroundColor="gray" ;
  } else{
  date_res.disabled='';
  date_res.style.backgroundColor="" ;
  }
}
var close=document.querySelector(".close");
var choisir_vyg=document.querySelector(".choisir-vyg");
var btn_vyg=document.querySelector(".btn-vyg");
btn_vyg.addEventListener("click",function(){
   btn_vyg.style.boxShadow= "0px 0px 4px 4px #222";
  choisir_vyg.style.display="grid";
});
close.addEventListener("click",function(){
  btn_vyg.style.boxShadow= "";
 choisir_vyg.style.display="";
});
var buttons = document.querySelectorAll('.btn-vy');
for (var i = 0; i < buttons.length; i++) {
    var self = buttons[i];
    self.addEventListener('click', function (event) {  
        event.preventDefault();
        btn_vyg.style.boxShadow= "";
    $(".btn-vyg").html(this.value+" voyageurs");
 choisir_vyg.style.display="";
        MyAwesomeFunction(this); // 'this' refers to the current button on for loop
    }, false);   
}


var apres=document.querySelector(".apres");
var avan=document.querySelector(".avan");
var tout=document.querySelector(".tout");
var tout2=document.querySelector(".tout2");

apres.addEventListener("click",function(){
tout.style.display="none";
tout2.style.display="grid";
});
avan.addEventListener("click",function(){
  tout.style.display="grid";
  tout2.style.display="none";
  });