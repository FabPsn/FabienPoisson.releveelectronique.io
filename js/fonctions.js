var globLastModified = 0;
function getlastmod(){
  var req = new XMLHttpRequest();
  req.onreadystatechange=function(){
    if (req.readyState==4 && req.status==200){
      if(req.getResponseHeader('Last-Modified')!=globLastModified){
        globLastModified = req.getResponseHeader('Last-Modified');
        affichageInfos();
      }
      else{
        return false;
      }
    }
  }
  req.open("HEAD", "feuilledequart.xml", true);
  req.send();
  setTimeout(function() {getlastmod();}, 5000);
}
var d = new Date();
var n = d.toUTCString(); 

/* Creation point XMLHttpRrequest */
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

/* Fonction unique d'affichage de l'ensemble des informations */
var xx;

/* DECLARATION DES TABLEAUX*/
var equSvc = document.getElementById("equSvc");

var moySortis = document.getElementById("moyens_en_activite");
var opCours = document.getElementById("OP_en_cours");

var helicos = document.getElementById("alertesHelico");
var avions = document.getElementById("alertesHelico");

var indispoCo = document.getElementById('affIndispoCO');

var previAir = document.getElementById('previvol');
var previMer = document.getElementById('previmer');

var peche = document.getElementById('peche');
var evenMaj = document.getElementById('evenmaj');                      
var manaut = document.getElementById('manaut');

var avarie = document.getElementById('avaries');

var opText= document.getElementById('textOP');
var navText=document.getElementById('textN');
var pvText=document.getElementById('textPV');
var polText=document.getElementById('textPOL');

var Liens=document.getElementById('liens');
var liensView = document.getElementById('lienView');


function affichageInfos(){
	var xhr = getXMLHttpRequest();
	xhr.onreadystatechange=function() {
		if (xhr.readyState==4){
			var cttXML = xhr.responseXML.documentElement;
			moyenSorti = cttXML.getElementsByTagName("moyen");
			var txt1="";
			for (i=0;i<moyenSorti.length;i++){
				txt1=txt1 + "<tr>";
				xx=moyenSorti[i].getElementsByTagName("nom");{
					try{txt1=txt1 + "<td >" + decodeURIComponent(xx[0].firstChild.nodeValue) + "</td>";}
					catch (er) {txt1=txt1 + "<td></td>";}
				}
				xx=moyenSorti[i].getElementsByTagName("pob");{
					try{txt1=txt1 + "<td>" + decodeURIComponent(xx[0].firstChild.nodeValue) + "</td>";}
					catch (er){txt1=txt1 + "<td></td>";}
				}
				xx=moyenSorti[i].getElementsByTagName("secteur");{
					try{txt1=txt1 + "<td>" + decodeURIComponent(xx[0].firstChild.nodeValue) + "</td>";}
					catch (er){txt1=txt1 + "<td></td>";}
				}
				xx=moyenSorti[i].getElementsByTagName("activite");{
					try{txt1=txt1 + "<td>" + decodeURIComponent(xx[0].firstChild.nodeValue) + "</td>";}
					catch (er){txt1=txt1 + "<td></td>";}
				}
				xx=moyenSorti[i].getElementsByTagName("hpd");{
					try{txt1=txt1 + "<td>" + decodeURIComponent(xx[0].firstChild.nodeValue) + "</td>";}
					catch (er){txt1=txt1 + "<td></td>";}
				}
				xx=moyenSorti[i].getElementsByTagName("hpa");{
					try{txt1=txt1 + "<td>" + decodeURIComponent(xx[0].firstChild.nodeValue) + "</td>";}
					catch (er){txt1=txt1 + "<td></td>";}
				}
				xx=moyenSorti[i].getElementsByTagName("id");{
					try{txt1=txt1 + "<td><input type='image' src='supprimer.gif' onclick='effMoyenSortit(\"" + xx[0].firstChild.nodeValue + "\");' /></td>";}
					catch (er){txt1=txt1 + "<td></td>";}
				}
				txt1=txt1 + "</tr>";
			}
			moySortis.innerHTML = txt1;
      
			cttEquSvc = cttXML.getElementsByTagName("equipeService");
			for (i=0;i<cttEquSvc.length;i++){
				document.getElementById('cms').innerHTML = cttEquSvc.item(i).attributes[0].value;
				document.getElementById('cmstel').innerHTML = cttEquSvc.item(i).attributes[1].value;
				document.getElementById('cmsrenf').innerHTML = cttEquSvc.item(i).attributes[2].value;
				document.getElementById('tech').innerHTML = cttEquSvc.item(i).attributes[3].value;
				document.getElementById('techtel').innerHTML = cttEquSvc.item(i).attributes[4].value;

				document.getElementById('cdq1').innerHTML = cttEquSvc.item(i).attributes[5].value;
				document.getElementById('cdq2').innerHTML = cttEquSvc.item(i).attributes[6].value;
				document.getElementById('cdq3').innerHTML = cttEquSvc.item(i).attributes[7].value;
				document.getElementById('cdq4').innerHTML = cttEquSvc.item(i).attributes[11].value;
				document.getElementById('cdq5').innerHTML = cttEquSvc.item(i).attributes[12].value;
				document.getElementById('cdq6').innerHTML = cttEquSvc.item(i).attributes[13].value;
				document.getElementById('cdq7').innerHTML = cttEquSvc.item(i).attributes[14].value;

				document.getElementById('cdq1b').innerHTML = cttEquSvc.item(i).attributes[19].value;
				document.getElementById('cdq2b').innerHTML = cttEquSvc.item(i).attributes[20].value;
				document.getElementById('cdq3b').innerHTML = cttEquSvc.item(i).attributes[21].value;
				document.getElementById('cdq4b').innerHTML = cttEquSvc.item(i).attributes[22].value;
				document.getElementById('cdq5b').innerHTML = cttEquSvc.item(i).attributes[23].value;
				document.getElementById('cdq6b').innerHTML = cttEquSvc.item(i).attributes[24].value;
				document.getElementById('cdq7b').innerHTML = cttEquSvc.item(i).attributes[25].value;

				document.getElementById('adj1').innerHTML = cttEquSvc.item(i).attributes[8].value;
				document.getElementById('adj2').innerHTML = cttEquSvc.item(i).attributes[9].value;
				document.getElementById('adj3').innerHTML = cttEquSvc.item(i).attributes[10].value;
				document.getElementById('adj4').innerHTML = cttEquSvc.item(i).attributes[15].value;
				document.getElementById('adj5').innerHTML = cttEquSvc.item(i).attributes[16].value;
				document.getElementById('adj6').innerHTML = cttEquSvc.item(i).attributes[17].value;
				document.getElementById('adj7').innerHTML = cttEquSvc.item(i).attributes[18].value;

				document.getElementById('adj1b').innerHTML = cttEquSvc.item(i).attributes[26].value;
				document.getElementById('adj2b').innerHTML = cttEquSvc.item(i).attributes[27].value;
				document.getElementById('adj3b').innerHTML = cttEquSvc.item(i).attributes[28].value;
				document.getElementById('adj4b').innerHTML = cttEquSvc.item(i).attributes[29].value;
				document.getElementById('adj5b').innerHTML = cttEquSvc.item(i).attributes[30].value;
				document.getElementById('adj6b').innerHTML = cttEquSvc.item(i).attributes[31].value;
				document.getElementById('adj7b').innerHTML = cttEquSvc.item(i).attributes[32].value;
			}

			cttAlertes = cttXML.getElementsByTagName("alerte");
			for (i=0;i<cttAlertes.length;i++){
				document.getElementById('altAero' + i).innerHTML = decodeURIComponent(cttAlertes.item(i).attributes[1].value);
				document.getElementById('altAero' + i + 'Obs').innerHTML = decodeURIComponent(cttAlertes.item(i).attributes[2].value);
			}
			
			cttIndispoCo = cttXML.getElementsByTagName("indispoCO");
			var txt2="";
			for (i=0;i<cttIndispoCo.length;i++){
				txt2=txt2 + "<tr>";
				var idDelaiCO = cttIndispoCo[i].getElementsByTagName("id");
				var id = idDelaiCO[0].firstChild.nodeValue;
				xx=cttIndispoCo[i].getElementsByTagName("indispoCOmoy");{
					try{txt2=txt2 + "<td>" + decodeURIComponent(xx[0].firstChild.nodeValue) + "</td>";}
					catch (er) {txt2=txt2 + "<td></td>";}
				}
				xx=cttIndispoCo[i].getElementsByTagName("indispoCOcause");{
					try{txt2=txt2 + "<td>" + decodeURIComponent(xx[0].firstChild.nodeValue) + "</td>";}
					catch (er){txt2=txt2 + "<td></td>";}
				}
				xx=cttIndispoCo[i].getElementsByTagName("indispoCOdelai");{
					try{txt2=txt2 + "<td class='moyModifiable' onclick='modifMoyCOIndispo("+id+")'>" + decodeURIComponent(xx[0].firstChild.nodeValue) + "</td>";}
					catch (er){txt2=txt2 + "<td></td>";}
				}
				xx=cttIndispoCo[i].getElementsByTagName("id");{
					try{txt2=txt2 + "<td><input type='image' src='supprimer.gif' onclick='suppIndispoCO(\"" + xx[0].firstChild.nodeValue + "\");' /></td>";}
					catch (er){txt2=txt2 + "<td></td>";}
				}
				txt2=txt2 + "</tr>";
			}
			indispoCo.innerHTML = txt2;
			
						
			cttPrevisions = cttXML.getElementsByTagName("previsActivite");
			var txt4="", txt5="";
			for (i=0;i<cttPrevisions.length;i++){
				switch(cttPrevisions[i].getAttribute('milieu')){
					case "mer":
					txt5=txt5 + "<tr>";
					xx=cttPrevisions[i].getElementsByTagName("aut");{try{txt5=txt5 + "<td onclick='modifPrevi("+id+")'>" + decodeURIComponent(xx[0].firstChild.nodeValue) + "</td>";}catch (er) {txt5=txt5 + "<td></td>";}}
					xx=cttPrevisions[i].getElementsByTagName("moy");{try{txt5=txt5 + "<td>" + decodeURIComponent(xx[0].firstChild.nodeValue) + "</td>";}catch (er){txt5=txt5 + "<td></td>";}}
					xx=cttPrevisions[i].getElementsByTagName("miss");{try{txt5=txt5 + "<td>" + decodeURIComponent(xx[0].firstChild.nodeValue) + "</td>";}catch (er){txt5=txt5 + "<td></td>";}}
					xx=cttPrevisions[i].getElementsByTagName("zone");{try{txt5=txt5 + "<td>" + decodeURIComponent(xx[0].firstChild.nodeValue) + "</td>";}catch (er){txt5=txt5 + "<td></td>";}}
					xx=cttPrevisions[i].getElementsByTagName("obs");{try{txt5=txt5 + "<td>" + decodeURIComponent(xx[0].firstChild.nodeValue) + "</td>";}catch (er) {txt5=txt5 + "<td></td>";}}
					xx=cttPrevisions[i].getElementsByTagName("hpd");{try{txt5=txt5 + "<td>" + decodeURIComponent(xx[0].firstChild.nodeValue) + "</td>";}catch (er) {txt5=txt5 + "<td></td>";}}
					xx=cttPrevisions[i].getElementsByTagName("hpa");{try{txt5=txt5 + "<td>" + decodeURIComponent(xx[0].firstChild.nodeValue) + "</td>";}catch (er) {txt5=txt5 + "<td></td>";}}
					xx=cttPrevisions[i].getElementsByTagName("id");{try{txt5=txt5 + "<td><input type='image' src='supprimer.gif' onclick='suppPrevi(\"" + xx[0].firstChild.nodeValue + "\");' /></td>";}catch (er){txt5=txt5 + "<td></td>";}}
					txt5=txt5 + "</tr>";
					break;
				}
			}
			
			previMer.innerHTML = txt5;
			
			cttManaut = cttXML.getElementsByTagName("manifNautique");
			var cttpeche="<caption>PECHE</caption>",cttmanifnaut="<caption>MANIFESTATIONS NAUTIQUES</caption>",cttevenMaj="<caption>EVENEMENTS MAJEURS</caption>";
			for (i=0;i<cttManaut.length;i++){
				var typeManaut = cttManaut[i].getAttribute('type');
				switch(typeManaut){
					case "peche":
					cttpeche=cttpeche + "<tr><td>" + decodeURIComponent(cttManaut[i].firstChild.nodeValue) + "</td><td width='50px'><input type='image' src='supprimer.gif' onclick='supprManaut(\"" + cttManaut[i].attributes[0].value + "\");' /></td></tr>";
					break;
					case "manaut":
					cttmanifnaut=cttmanifnaut + "<tr><td>" + cttManaut[i].attributes[2].value + "</td><td>" + decodeURIComponent(cttManaut[i].firstChild.nodeValue) + "</td><td>" + cttManaut[i].attributes[3].value + "</td><td><input type='image' src='supprimer.gif' onclick='supprManaut(\"" + cttManaut[i].attributes[0].value + "\");' /></td></tr>";
					break;
					case "evenMaj":
					cttevenMaj=cttevenMaj + "<tr><td>" + cttManaut[i].attributes[2].value + "</td><td>" + decodeURIComponent(cttManaut[i].firstChild.nodeValue) + "</td><td>" + cttManaut[i].attributes[3].value + "</td><td><input type='image' src='supprimer.gif' onclick='supprManaut(\"" + cttManaut[i].attributes[0].value + "\");' /></td></tr>";
					break;
				}
			}
			peche.innerHTML = cttpeche;
			evenMaj.innerHTML = cttmanifnaut;
			manaut.innerHTML = cttevenMaj;
			
			cttAvarie = cttXML.getElementsByTagName("avarie");
			txt6 = "";
			for (i=0;i<cttAvarie.length;i++){
				txt6=txt6 + "<tr>";
				xx=cttAvarie[i].getElementsByTagName("systeme");{
					try{txt6=txt6 + "<td>" + decodeURIComponent(xx[0].firstChild.nodeValue) + "</td>";}
					catch (er) {txt6=txt6 + "<td></td>";}
				}
				xx=cttAvarie[i].getElementsByTagName("nature");{
					try{txt6=txt6 + "<td>" + decodeURIComponent(xx[0].firstChild.nodeValue) + "</td>";}
					catch (er){txt6=txt6 + "<td></td>";}
				}
				xx=cttAvarie[i].getElementsByTagName("id");{
					try{txt6=txt6 + "<td><input type='image' src='supprimer.gif' onclick='suppAvaries(\"" + xx[0].firstChild.nodeValue + "\");' /></td>";}
					catch (er){txt6=txt6 + "<td></td>";}
				}
				txt6=txt6 + "</tr>";
			}
			avarie.innerHTML = txt6;
			
			// met à jour la valeur du textarea OPS à partir du xml chargé dans le dom
			opsContent = "";
			navContent = "";
			cttLoadOPS=cttXML.getElementsByTagName("Text");
			for (i = 0; i < cttLoadOPS.length; i++) {
				xmlOpsEntry = cttLoadOPS[i].getElementsByTagName("OPS");
				for (j = 0; j < xmlOpsEntry.length; j++) {
					lignes = xmlOpsEntry[j].getElementsByTagName("LIGNE");
					for (k = 0; k < lignes.length; k++) {
						retour = "";
						if (k != 0) { retour = "\r\n"; }
						ligneStr = "";
						if (lignes[k].firstChild != null) {
							ligneStr = lignes[k].firstChild.nodeValue;
						}
						opsContent = opsContent + retour + ligneStr;
					}
				}
				document.getElementById("textOP").rows = lignes.length;
				document.getElementById("textOP").value = opsContent;

				xmlNavEntry = cttLoadOPS[i].getElementsByTagName("NAV");
                for (j = 0; j < xmlNavEntry.length; j++) {
                    lignesNav = xmlNavEntry[j].getElementsByTagName("LIGNE");
                    for (k = 0; k < lignesNav.length; k++) {
                        retourN = "";
                        if (k != 0) { retourN = "\r\n"; }
                        ligneStrN = "";
                        if (lignesNav[k].firstChild != null) {
                            ligneStrN = lignesNav[k].firstChild.nodeValue;
                        }
                        navContent = navContent + retourN + ligneStrN;
                    }
                }
                document.getElementById("textNAV").rows = lignesNav.length;
                document.getElementById("textNAV").value = navContent;

				
				document.getElementById("numOPS").value=cttLoadOPS.item(0).attributes["numOPS"].value;
				document.getElementById("numPOL").value=cttLoadOPS.item(0).attributes["numPOL"].value;
				document.getElementById("numMAS").value=cttLoadOPS.item(0).attributes["numMAS"].value;
				document.getElementById("numPV").value=cttLoadOPS.item(0).attributes["numPV"].value;
			}
			
			cttLiens=cttXML.getElementsByTagName('Liens');
	        var txtliens="";
	        for (i=0;i<cttLiens.length;i++) {
	        	xx=cttLiens[i].getElementsByTagName('liens');{
	        		try{txtliens=txtliens+decodeURIComponent(xx[0].firstChild.nodeValue)+"\n";}
	        		catch(er){txtliens=txtliens+"\n"};
	        	}
	        }
	        liens.innerHTML=txtliens;

		}
	}
	xhr.open("GET","feuilledequart.xml",true);
	xhr.send();
}

function UpdateLinkView(lienBalises){
	lienView.innerHTML=lienBalises;
}
affichageInfos();
getlastmod();