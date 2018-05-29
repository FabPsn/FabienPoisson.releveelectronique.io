function getXMLHttpRequest() {
  var xhr = null;
  if (window.XMLHttpRequest || window.ActiveXObject) {
    if (window.ActiveXObject) {
      try {
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
      }
      catch(e) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
    }
    else {
      xhr = new XMLHttpRequest();
    }
  }
  else {
    alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
    return null;
    }
  return xhr;
}
function lectEquipeQuart(){
  var xhr = getXMLHttpRequest();
  var x,i;
  xhr.onreadystatechange=function() {
    if (xhr.readyState==4 && xhr.status==200 && xhr.status !=304) {
      x = xhr.responseXML.documentElement.getElementsByTagName("equipeService");
      for (i=0;i<x.length;i++){
        var cms=document.getElementById('cms').innerHTML = x.item(i).attributes[0].value;
        var cmstel=document.getElementById('cmstel').innerHTML = x.item(i).attributes[1].value;
        var cmsrenf=document.getElementById('cmsrenf').innerHTML = x.item(i).attributes[2].value;
        var tech=document.getElementById('tech').innerHTML = x.item(i).attributes[3].value;
        var cdq1=document.getElementById('cdq1').innerHTML = x.item(i).attributes[4].value;
        var cdq2=document.getElementById('cdq2').innerHTML = x.item(i).attributes[5].value;
        var cdq3=document.getElementById('cdq3').innerHTML = x.item(i).attributes[6].value;
        var adj1=document.getElementById('adj1').innerHTML = x.item(i).attributes[7].value;
        var adj2=document.getElementById('adj2').innerHTML = x.item(i).attributes[8].value;
        var adj3=document.getElementById('adj3').innerHTML = x.item(i).attributes[9].value;
      }
	  }
  }
  var url="fonctions.php?fctn=majEquipeService&cms="+ cms +"&cmstel="+cmstel+"&cmsrenf="+cmsrenf+
  "&tech="+tech+"&cdq1="+cdq1+"&cdq2="+cdq2+"&cdq3="+cdq3+"&adj1="+adj1+"&adj2="+adj2+"&adj3="+adj3;
  xhr.open("GET",url,false);
  xhr.send();
  console.log(xhr);
}

function ajoutMoyenSortit() {
	var i;
  var nom = encodeURIComponent(document.getElementById('nom').value);
  var pob = encodeURIComponent(document.getElementById('pob').value);
  var secteur = encodeURIComponent(document.getElementById('secteur').value);
  var activite = encodeURIComponent(document.getElementById('activite').value);
  var hpd = encodeURIComponent(document.getElementById('hpd').value);
  var hpa = encodeURIComponent(document.getElementById('hpa').value);
  if(nom!="" && pob!="" && secteur!="" && activite!="" && hpd!="" && hpa!="" ){
    var url = "fonctions.php?fctn=ajout_moyen&nom=" + nom + "&pob=" + pob + 
    "&secteur=" + secteur + "&activite=" + activite + "&hpd=" + hpd + "&hpa=" + hpa;
    var xhr = getXMLHttpRequest();
    xhr.onreadystatechange=function() {
		  if (xhr.readyState==4){
        affichageInfos()
      }
    }
    xhr.open("GET",url,false);
    xhr.send(null);
  }
  else{
    alert('Remplissez les champs');
  }
	var champs = document.getElementsByClassName("moyEnAct");
	for(i = 0; i < champs.length; i++){
		champs[i].value="";
	}
}
function effMoyenSortit(nom) {
  var url = "fonctions.php?fctn=suppr_moyen&nom=" + nom;
  var xhr = getXMLHttpRequest();
  xhr.onreadystatechange=function() {
		if (xhr.readyState==4){
      affichageInfos()
    }
  }
  xhr.open("GET",url,false);
  xhr.send(null);
}

function majAltAero(){
  var hlo1nom = encodeURIComponent(document.getElementById('altAero0').innerHTML);
  var hlo1obs = encodeURIComponent(document.getElementById('altAero0Obs').innerHTML);
  var hlo2nom = encodeURIComponent(document.getElementById('altAero1').innerHTML);
  var hlo2obs = encodeURIComponent(document.getElementById('altAero1Obs').innerHTML);
  var hlo3nom = encodeURIComponent(document.getElementById('altAero2').innerHTML);
  var hlo3obs = encodeURIComponent(document.getElementById('altAero2Obs').innerHTML);
  var hlo4nom = encodeURIComponent(document.getElementById('altAero3').innerHTML);
  var hlo4obs = encodeURIComponent(document.getElementById('altAero3Obs').innerHTML);
  var hlo5nom = encodeURIComponent(document.getElementById('altAero4').innerHTML);
  var hlo5obs = encodeURIComponent(document.getElementById('altAero4Obs').innerHTML);

  var avia1nom = encodeURIComponent(document.getElementById('altAero5').innerHTML);
  var avia1obs = encodeURIComponent(document.getElementById('altAero5Obs').innerHTML);
  var avia2nom = encodeURIComponent(document.getElementById('altAero6').innerHTML);
  var avia2obs = encodeURIComponent(document.getElementById('altAero6Obs').innerHTML);
  var avia3nom = encodeURIComponent(document.getElementById('altAero7').innerHTML);
  var avia3obs = encodeURIComponent(document.getElementById('altAero7Obs').innerHTML);

  var url = "fonctions.php?fctn=majAltAero&hlo1nom=" + hlo1nom + "&hlo1obs=" + hlo1obs + 
  "&hlo2nom=" + hlo2nom + "&hlo2obs=" + hlo2obs + "&hlo3nom=" + hlo3nom + "&hlo3obs=" + hlo3obs + 
  "&hlo4nom=" + hlo4nom + "&hlo4obs=" + hlo4obs + "&hlo5nom=" + hlo5nom + "&hlo5obs=" + hlo5obs +
  "&avia1nom=" + avia1nom + "&avia1obs=" + avia1obs + "&avia2nom=" + avia2nom + "&avia2obs=" + avia2obs + 
  "&avia3nom=" + avia3nom + "&avia3obs=" + avia3obs;
  var xhr = getXMLHttpRequest();
  xhr.open("GET",url,false);
  xhr.onreadystatechange = function(){
  	if (xhr.readyState==4) {
  		affichageInfos();
  	}
  }
  xhr.send(null);
}
//Moyens indisponibles SRR corsen
function ajoutIndispoCO(){
  var nom = encodeURIComponent(document.getElementById('indispoCOmoy').value);
  var cause = encodeURIComponent(document.getElementById('indispoCOcause').value);
  var delai = encodeURIComponent(document.getElementById('indispoCOdelai').value);
  if(nom!="" && cause!="" && delai!=""){
  var url = "fonctions.php?fctn=ajout_indispoCO&nom=" + nom + "&cause=" + cause + "&delai=" + delai;
  var xhr = getXMLHttpRequest();
  xhr.open("GET",url,false);
  xhr.onreadystatechange=function() {
		if (xhr.readyState==4){
      affichageInfos();
    }
  }
  
  xhr.send(null);
  }
  else{
  	alert('Remplissez les champs');
  }
	var champs = document.getElementsByClassName("indispoCross");
	for(i = 0; i < champs.length; i++){
		champs[i].value="";
	}
}
function suppIndispoCO(id){
  var url = "fonctions.php?fctn=suppr_indispoCO&id=" + id;
  var xhr = getXMLHttpRequest();
  xhr.onreadystatechange=function() {
		if (xhr.readyState==4){
      affichageInfos()
    }
  }
  xhr.open("GET",url,false);
  xhr.send(null);
}
function modifMoyCOIndispo(id){
  if(newDelai = prompt('Entrez les nouvelles informations')){
  var url = "fonctions.php?fctn=modifIndispoCO&id=" + id + "&newDelai=" + newDelai;
    var xhr = getXMLHttpRequest();
  xhr.onreadystatechange=function() {
		if (xhr.readyState==4){
      affichageInfos();
    }
  }
  xhr.open("GET",url,false);
  xhr.send(null);
    }
}
//Moyens indisponibles hors SRR corsen
function ajoutIndispoSRR(){
  var nom = encodeURIComponent(document.getElementById('indispoSRRmoy').value);
  var cause = encodeURIComponent(document.getElementById('indispoSRRcause').value);
  var delai = encodeURIComponent(document.getElementById('indispoSRRdelai').value);
  var srr = encodeURIComponent(document.getElementById('indispoSRRSRR').value);
  if(nom!="" && cause!="" && delai!="" && srr!=""){
  var url = "fonctions.php?fctn=ajout_indispoSRR&nom=" + nom + "&cause=" + cause + "&delai=" + delai + "&srr=" + srr;
  var xhr = getXMLHttpRequest();
  xhr.onreadystatechange=function() {
		if (xhr.readyState==4){
      affichageInfos();
    }
  }
  xhr.open("GET",url,false);
  xhr.send(null);}
  else{
    alert('Remplissez les champs');
  }
	var champs = document.getElementsByClassName("indispoAutreCross");
	for(i = 0; i < champs.length; i++){
		champs[i].value="";
	}
}
function suppIndispoSRR(id){
  var url = "fonctions.php?fctn=suppr_indispoSRR&id=" + id;
  var xhr = getXMLHttpRequest();
  xhr.onreadystatechange=function() {
		if (xhr.readyState==4){
      affichageInfos()
    }
  }
  xhr.open("GET",url,false);
  xhr.send(null);
}
function modifMoySRRIndispo(id){
  if(newDelai = prompt('Entrez les nouvelles informations')){
  var url = "fonctions.php?fctn=modifIndispoSRR&id=" + id + "&newDelai=" + newDelai;
  var xhr = getXMLHttpRequest();
  xhr.onreadystatechange=function() {
		if (xhr.readyState==4){
      affichageInfos()
    }
  }
  xhr.open("GET",url,false);
  xhr.send(null);
  }
}
// Technique
function ajoutAvarie(){
  var systeme = encodeURIComponent(document.getElementById('avarieSys').value);
  ;
  var nature = encodeURIComponent(document.getElementById('avarieNature').value);
  if(systeme!="" && nature!=""){
  var url = "fonctions.php?fctn=ajoutTech&systeme=" + systeme + "&nature=" + nature;
  var xhr = getXMLHttpRequest();
  xhr.onreadystatechange=function() {
		if (xhr.readyState==4){
      affichageInfos()
    }
  }
  xhr.open("GET",url,false);
  xhr.send(null);}
  else{
    alert("Remplissez les champs");
  }
	var champs = document.getElementsByClassName("avarie");
	for(i = 0; i < champs.length; i++){
		champs[i].value="";
	}
}
function suppAvaries(id){
  var url = "fonctions.php?fctn=supprTech&id=" + id;
  var xhr = getXMLHttpRequest();
  xhr.onreadystatechange=function() {
		if (xhr.readyState==4){
      affichageInfos()
    }
  }
  xhr.open("GET",url,false);
  xhr.send(null);
}
//Previsions activite des moyens
function ajoutPrevi(type){
  if(type == "mer") {
    var previAutorite = encodeURIComponent(document.getElementById('previMerAutorite').value);
    var previMoyen = encodeURIComponent(document.getElementById('previMerMoyen').value);
    var previMission = encodeURIComponent(document.getElementById('previMerMission').value);
    var previZone = encodeURIComponent(document.getElementById('previMerZone').value);
    var previObs = encodeURIComponent(document.getElementById('previMerObs').value);
    var previHd = encodeURIComponent(document.getElementById('previMerHd').value);
    var previHpa = encodeURIComponent(document.getElementById('previMerHpa').value);
  }
  if(previMoyen!="" && previZone!=""){
  var url = "fonctions.php?fctn=ajoutPrevi&milieu=" + type + "&aut=" + previAutorite + "&moy=" + previMoyen + "&miss=" + previMission + "&zone=" + previZone + "&obs=" + previObs + "&hpd=" + previHd + "&hpa=" + previHpa;
    var xhr = getXMLHttpRequest();
  xhr.onreadystatechange=function() {
		if (xhr.readyState==4){
      affichageInfos()
    }
  }
  xhr.open("GET",url,false);
  xhr.send(null);}
  else{
    alert("Remplissez les champs");
  }
	var champs = document.getElementsByClassName("previ");
	for(i = 0; i < champs.length; i++){
		champs[i].value="";
	}
}
function suppPrevi(id){
  var url = "fonctions.php?fctn=supprPrevi&id=" + id;
  var xhr = getXMLHttpRequest();
  xhr.open("GET",url,false);
  xhr.send(null);
}
function verifHeure(id){
  var reg=new RegExp("^[0-9]{4}$","g");
  if(reg.test(document.getElementById(id).value)){
    return false
  }
  else{
    alert('Entrez les heures au format HHMM');
  }
}
function verifDate(){
  var reg=new RegExp("^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{2}$","g");
  if(reg.test(document.getElementById('date').value)){
    return false
  }
  else{
	alert('Entrez les dates au format JJ/MM/AA');
  }
}
//MANIFESTATIONS NAUTIQUES
var typeManaut = document.getElementById('typeManaut');
var numManaut = document.getElementById('numManaut');
var nomManaut = document.getElementById('nomManaut');
var sectManaut = document.getElementById('sectManaut');
var maninf1 = document.getElementsByClassName('manInf1');
var maninf2 = document.getElementsByClassName('manInf2');
var maninf3 = document.getElementsByClassName('manInf3');
var maninf4 = document.getElementsByClassName('manInf4');
var changeNom = document.getElementById("nomManautpeche");
var envoiManaut = document.getElementById("sendManaut");
envoiManaut.addEventListener('click', function(e) {
  if(typeManaut.value == "peche" && nomManaut.value != ''){
    var url = "fonctions.php?fctn=ajoutManaut&type=peche&infos=" + nomManaut.value;
    var xhr = getXMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.send(null);
  }
  else if(numManaut.value != '' && nomManaut.value != '' && sectManaut.value != ''){
    var url = "fonctions.php?fctn=ajoutManaut&type=" + typeManaut.value + "&num=" + numManaut.value + "&infos=" + nomManaut.value + "&zone=" + sectManaut.value;
    var xhr = getXMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.send(null);}
  else{
    alert('Remplissez les champs');
  }
	var champs = document.getElementsByClassName("manaut");
	for(i = 0; i < champs.length; i++){
		champs[i].value="";
	}
}, false);
function affManaut(){
  var xhr = getXMLHttpRequest();
  xhr.onreadystatechange=function() {
    if (xhr.readyState==4 && xhr.status==200 && xhr.status !=304) {
    var x,i,txt,manifNaut = "<caption>MANIFESTATIONS NAUTIQUES</caption><tr style='background-color:rgb(76, 76, 76)';><th width='80px'>NUM</th><th>INFOS</th><th width='300px'>SECTEUR</th><th width='50px'></th></tr>",peche = "<caption>COQUILLES SAINT-JACQUES</caption>",evenMaj = "<caption>EVENEMENT MAJEUR</caption><tr style='background-color:rgb(76, 76, 76)';><th width='80px'>NUM</th><th>INFOS</th><th width='300px'>SECTEUR</th><th width='50px'></th></tr>";
      x=xhr.responseXML.documentElement.getElementsByTagName("manifNautique");
        for (i=0;i<x.length;i++){
          var typeManaut = x[i].getAttribute('type');
          switch(typeManaut){
            case "peche":
              peche=peche + "<tr><td>" + decodeURIComponent(x[i].firstChild.nodeValue) + "</td><td width='50px'><input type='image' src='supprimer.gif' onclick='supprManaut(\"" + x[i].attributes[0].value + "\");' /></td></tr>";
              break;
            case "manaut":
              manifNaut=manifNaut + "<tr><td>" + x[i].attributes[2].value + "</td><td>" + decodeURIComponent(x[i].firstChild.nodeValue) + "</td><td>" + x[i].attributes[3].value + "</td><td><input type='image' src='supprimer.gif' onclick='supprManaut(\"" + x[i].attributes[0].value + "\");' /></td></tr>";
              break;
            case "evenMaj":
              evenMaj=evenMaj + "<tr><td>" + x[i].attributes[2].value + "</td><td>" + decodeURIComponent(x[i].firstChild.nodeValue) + "</td><td>" + x[i].attributes[3].value + "</td><td><input type='image' src='supprimer.gif' onclick='supprManaut(\"" + x[i].attributes[0].value + "\");' /></td></tr>";
              break;
          }
        }
    }
    document.getElementById('peche').innerHTML = peche;
    document.getElementById('evenmaj').innerHTML = evenMaj;                      
    document.getElementById('manaut').innerHTML = manifNaut;
	}
	xhr.open("GET","feuilledequart.xml",false);
	xhr.send();
}
function supprManaut(id){
  var url = "fonctions.php?fctn=supprManaut&id=" + id;
  var xhr = getXMLHttpRequest();
  xhr.open("GET",url,false);
  xhr.send(null);
}
function Test(){
  var nav =document.getElementById('navigation');
  if(nav.style.display=='none' || nav.style.display==''){
    nav.style.display='block';
  }
  else{
    nav.style.display='none';
  }
}
function vueOPS(){
var nav=document.getElementById('nav');
var ops=document.getElementById('ops');
var pol=document.getElementById('pol');
var pv=document.getElementById('pv');
var proOps=document.getElementById('proOps');
var proPOL=document.getElementById('proPOL');
var proMas=document.getElementById('proMas');
var proPV=document.getElementById('proPV');
var moyensAero=document.getElementById('3');
var autresMoyens=document.getElementById('4');
nav.style.display='none';
ops.style.display='block';
pol.style.display='block';
pv.style.display='block';
proOps.style.display='block';
proPOL.style.display='block';
proMas.style.display='block';
proPV.style.display='none';
moyensAero.style.display='block';
autresMoyens.style.display='block';
}

function vueNAV(){
var nav=document.getElementById('nav');
var ops=document.getElementById('ops');
var pol=document.getElementById('pol');
var pv=document.getElementById('pv');
var proOps=document.getElementById('proOps');
var proPOL=document.getElementById('proPOL');
var proMas=document.getElementById('proMas');
var proPV=document.getElementById('proPV');
var moyensAero=document.getElementById('3');
var autresMoyens=document.getElementById('4');
nav.style.display='block';
ops.style.display='none';
pol.style.display='none';
pv.style.display='block';
proOps.style.display='none';
proPOL.style.display='none';
proMas.style.display='block';
proPV.style.display='block';
moyensAero.style.display='none';
autresMoyens.style.display='none';
}

function vueCMS(){
var nav=document.getElementById('nav');
var ops=document.getElementById('ops');
var pol=document.getElementById('pol');
var pv=document.getElementById('pv');
var proOps=document.getElementById('proOps');
var proPOL=document.getElementById('proPOL');
var proMas=document.getElementById('proMas');
var proPV=document.getElementById('proPV');
var moyensAero=document.getElementById('3');
var autresMoyens=document.getElementById('4');
nav.style.display='block';
ops.style.display='block';
pol.style.display='block';
pv.style.display='block';
proOps.style.display='none';
proPOL.style.display='none';
proMas.style.display='none';
proPV.style.display='none';
moyensAero.style.display='block';
autresMoyens.style.display='block';
}

function majTabMeteo(){
  var bms1 = encodeURIComponent(document.getElementById('BMS1').value);
  var bms2 = encodeURIComponent(document.getElementById('BMS2').value);
  var bms3 = encodeURIComponent(document.getElementById('BMS3').value);

  var vt1 = encodeURIComponent(document.getElementById('VT1').value);
  var vt2 = encodeURIComponent(document.getElementById('VT2').value);
  var vt3 = encodeURIComponent(document.getElementById('VT3').value);

  var mer1 = encodeURIComponent(document.getElementById('MER1').value);
  var mer2 = encodeURIComponent(document.getElementById('MER2').value);
  var mer3 = encodeURIComponent(document.getElementById('MER3').value);

  var visi1 = encodeURIComponent(document.getElementById('Visi1').value);
  var visi2 = encodeURIComponent(document.getElementById('Visi2').value);
  var visi3 = encodeURIComponent(document.getElementById('Visi3').value);

  
  var url = "fonctions.php?fctn=majTabMeteo&bms1="+bms1+"&bms2="+bms2+"&bms3="+bms3+
  "&vt1="+vt1+"&vt2="+vt2+"&vt3="+vt3+"&mer1="+mer1+"&mer2="+mer2+"&mer3="+mer3+
  "&visi1="+visi1+"&visi2="+visi2+"&visi3="+visi3;

  majInfosMeteo();
  var xhr = getXMLHttpRequest();
  xhr.open("GET",url,false);
  xhr.onreadystatechange = function(){
    if (xhr.readyState==4) {  
      affichageInfos();
    }
  }
  xhr.send(null);
}

function majInfosMeteo(){
  var temp=encodeURIComponent(document.getElementById('temperature').value);
  var coeff=encodeURIComponent(document.getElementById('coefficient').value);
  var maree=encodeURIComponent(document.getElementById('maree').value);
 var liens=encodeURIComponent(document.getElementById('liens').value);
  var url="fonctions.php?fctn=majInfosMeteo&temp="+temp+"&coeff="+coeff+
  "&maree="+maree/*+"&liens="+liens*/;
  var xhr = getXMLHttpRequest();
  xhr.open("GET",url,false);
  xhr.onreadystatechange = function(){
    if (xhr.readyState==4) {  
      affichageInfos();
    }
  }
  xhr.send(null);
}

function ChangeView() {
	var switchL=document.getElementById('switchL');
	var liens= document.getElementById('liens');
	var lienView=document.getElementById('lienView');
	if (switchL.checked ===true) { // Edition. Enleve balises
		liens.style.display='block';
		lienView.style.display='none';
	}	else { // Vue. Ajoute balises
		liens.style.display='none';
		Liens();
		lienView.style.display='block';
	}
}

function Liens(){
	var liens=encodeURIComponent(document.getElementById('liens').value);
	var url="fonctions.php?fctn=Liens&liens="+liens;
	var xhr = getXMLHttpRequest();
	xhr.open("GET",url,false);
	xhr.onreadystatechange = function(){
		if (xhr.readyState==4) {  
	    	affichageInfos();
		}
	}
	xhr.send(null);
}

function LoadOPS(){
  var xhr = getXMLHttpRequest();
  var x,i;
  xhr.onreadystatechange=function() {
    if (xhr.readyState==4 && xhr.status==200 && xhr.status !=304) {
      x = xhr.responseXML.documentElement.getElementsByTagName("Text");
      for (i=0;i<x.length;i++){
        var ops=document.getElementById('textOP').value = x.item(i).attributes["OPS"].value;
        var nav=document.getElementById('textNAV').value = x.item(i).attributes["NAV"].value;
        var numOPS=document.getElementById('numOPS').value = x.item(i).attributes["numOPS"].value;
        var numPOL=document.getElementById('numPOL').value = x.item(i).attributes["numPOL"].value;
        var numMAS=document.getElementById('numMAS').value = x.item(i).attributes["numMAS"].value;
        var numPV=document.getElementById('numPV').value = x.item(i).attributes["numPV"].value;
      }
    }
  }
  var url="fonctions.php?fctn=HTMLtoXML&ops="+ops+"&nav="+nav+"&numOPS="+numOPS+
  "&numPOL="+numPOL+"&numMAS="+numMAS+"&numPV="+numPV;
  xhr.open("GET",url,false);
  xhr.send();
}

function majOPSTextarea(){
  var ops= document.getElementById("textOP").value;
  ops = ops.replace(/\n/g, "alaligne");
  var url="fonctions.php?fctn=majOPSTextarea&OPS="+ops;
  var xhr =getXMLHttpRequest();
  xhr.open("GET",url,false);
  xhr.send();
  console.log(xhr);
}

function majNextOPS(){
  var numOPS=(document.getElementById("numOPS").value)++;
  var url="fonctions.php?fctn=majNextOPS&numOPS="+numOPS;
  var xhr=getXMLHttpRequest();
  xhr.open("GET",url,false);
  xhr.send();
}

function majNAVTextarea(){
  var nav= document.getElementById("textNAV").value;
  nav = nav.replace(/\n/g,"alaligne");
  var url="fonctions.php?fctn=majNAVTextarea&NAV="+nav;
  var xhr =getXMLHttpRequest();
  xhr.open("GET",url,false);
  xhr.send();
}

function majNextNAV(){
  var numMAS=(document.getElementById("numMAS").value)++;
  var url="fonctions.php?fctn=majNextNAV&numMAS="+numMAS;
  var xhr=getXMLHttpRequest();
  xhr.open("GET",url,false);
  xhr.send();
}

function majNextPOL(){
  var numPOL=(document.getElementById("numPOL").value)++;
  var url="fonctions.php?fctn=majNextPOL&numPOL="+numPOL;
  var xhr=getXMLHttpRequest();
  xhr.open("GET",url,false);
  xhr.send();
}

function majNextPV(){
  var numPV=(document.getElementById("numPV").value)++;
  var url="fonctions.php?fctn=majNextPV&numPV="+numPV;
  var xhr=getXMLHttpRequest();
  xhr.open("GET",url,false);
  xhr.send();
}