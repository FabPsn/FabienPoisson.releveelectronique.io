function changeDate(){
var nDate = new Date();
var jour = ['DIMANCHE', 'LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI'];
var mois = ['JANVIER', 'FEVRIER', 'MARS', 'AVRIL', 'MAI', 'JUIN', 'JUILLET', 'AOUT', 'SEPTEMBRE', 'OCTOBRE', 'NOVEMBRE', 'DECEMBRE'];

var annee = nDate.getFullYear();
var jours = jour[nDate.getDay()];
var numJour = nDate.getDate();
var mois = mois[nDate.getMonth()];
var days = nDate.getDate();
var months = (nDate.getMonth())+1;
var dateCourante = jours + ' ' + numJour + ' ' + mois + ' ' + annee;
if(days<10 && days<10){
  days="0"+days;
  months="0"+months;
}
var datemeteo= annee+"-"+months+"-"+days;
champDate = document.getElementById('champDate').innerHTML = dateCourante;
date=document.getElementById('date').innerHTML=datemeteo;
}
changeDate();
var timerDate = setInterval("changeDate()", 60000);

function changeHeure(){
  var date=new Date();
  var heure=date.getHours();
  var minutes=date.getMinutes();
  if(minutes<10)
    minutes="0"+minutes;
  var h= heure;
  heure += ":"+minutes;
  document.getElementById('champHeure').innerHTML=heure;
  document.getElementById('switchHeure').innerHTML=h;
}
changeHeure();
var timerHeure = setInterval("changeHeure()",60000);

function changeQuart(){
  var heureQ=document.getElementById('switchHeure').innerHTML;
  var hz=document.getElementById('champHeure').innerHTML;
  if(heureQ>=3 && heureQ<7){
    var quart="Quart de 3h à 7h";
    var quartier="Quart7";
    var champQuart= document.getElementById('heureQuart').innerHTML=quart;
    quartier=document.getElementById('quartier').innerHTML=quartier;
    switchQuart3();
  }
  else if(heureQ>=7 && heureQ<11){
    var quart="Quart de 7h à 11h";
    var quartier="Quart1";
    var champQuart= document.getElementById('heureQuart').innerHTML=quart;
    quartier=document.getElementById('quartier').innerHTML=quartier;
    switchQuart7();
  }
  else if(heureQ>=11 && heureQ<13){
    var quart="Quart de 11h à 13h";
    var quartier="Quart2";
    var champQuart= document.getElementById('heureQuart').innerHTML=quart;
    quartier=document.getElementById('quartier').innerHTML=quartier;
    switchQuart11();
  }
  else if(heureQ>=13 && heureQ<16){
    var quart="Quart de 13h à 16h";
    var quartier="Quart3";
    document.getElementById('heureQuart').innerHTML=quart;
    document.getElementById('quartier').innerHTML=quartier;
    switchQuart13();
  }
  else if(heureQ>=16 && heureQ<19){
    var quart="Quart de 16h à 19h";
    var quartier="Quart4";
    var champQuart= document.getElementById('heureQuart').innerHTML=quart;
    quartier=document.getElementById('quartier').innerHTML=quartier;
    switchQuart16();
  }
  else if(heureQ>=19 && heureQ<23){
    var quart="Quart de 19h à 23h";
    var quartier="Quart5";
    document.getElementById('heureQuart').innerHTML=quart;
    quartier=document.getElementById('quartier').innerHTML=quartier;
    switchQuart19();
  }
  else{
    var quart="Quart de 23h à 3h";
    var quartier="Quart6";
    var champQuart= document.getElementById('heureQuart').innerHTML=quart;
    quartier=document.getElementById('quartier').innerHTML=quartier;
    switchQuart23();
  }
}
changeQuart();
var timerQuart= setInterval("changeQuart()",60000);

function aff_div(id){
  var div = document.getElementById(id);
  if(div.style.display=='none' || div.style.display=='')
    div.style.display='block';
  else
    div.style.display='none';
}

typeManaut = document.getElementById('typeManaut');
typeManaut.addEventListener('change', function(e) {
  switch(typeManaut.value){
    case "TYPE":
      for(i = 0; i < maninf1.length; i++){
        maninf1[i].style.display = "none";
        maninf2[i].style.display = "none";
        maninf3[i].style.display = "none";
        maninf4[i].style.display = "none";
      }
    break;
    case "peche":
      for(i = 0; i < maninf2.length; i++){
        maninf1[i].style.display = "none";
        maninf2[i].style.display = "table-cell";
        maninf3[i].style.display = "none";
        maninf4[i].style.display = "table-cell";
        changeNom.innerHTML = "CRENEAUX peche";
      }
    break;
    default:
      for(i = 0; i < maninf1.length; i++){
        maninf1[i].style.display = "table-cell";
        maninf2[i].style.display = "table-cell";
        maninf3[i].style.display = "table-cell";
        maninf4[i].style.display = "table-cell";
        changeNom.innerHTML = "NOM / INFO DIVERS";
      }
    break;
  }
}, true);

