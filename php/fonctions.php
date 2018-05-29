<?php
header('Content-Type: text/html; charset=UTF-8');

$timestart=microtime(true);

//******************************************************//
// APPEL DES FONCTIONS SUIVANT FONCTION TRASMISE EN GET //
//******************************************************//

switch ($_GET['fctn']) // on indique sur quelle valeur de "fctn" on travaille
{
  case "majEquipeService":majEquipeService();break;
  case "majOperation":majOperation();break;

  case "ajout_moyen":ajout_moyen();break;
  case "suppr_moyen":$moyen_en_activite = $_GET['nom'];suppr_moyen($moyen_en_activite);break;
  case "majAltAero":majAltAero();break;
  case "ajout_indispoCO":ajout_indispoCO();break;
  case "suppr_indispoCO":$indispoAsuppr = $_GET['id'];suppr_indispoCO($indispoAsuppr);break;
  case "modifIndispoCO":$id = $_GET['id']; $newDelai = $_GET['newDelai'];modifIndispoCO($id, $newDelai);break;

  case "ajout_indispoSRR":ajout_indispoSRR();break;
  case "suppr_indispoSRR":$indispoAsuppr = $_GET['id'];suppr_indispoSRR($indispoAsuppr);break;
  case "modifIndispoSRR":$id = $_GET['id'];$newDelai = $_GET['newDelai'];modifIndispoSRR($id, $newDelai);break;
  case "ajoutTech":ajout_Tech();break;
  case "supprTech":$avarie = $_GET['id'];suppr_Tech($avarie);break;
  case "ajoutPrevi":$milieu = $_GET['milieu'];ajoutPrevi($milieu);break;
  case "supprPrevi":$supprPrevi = $_GET['id'];supprPrevi($supprPrevi);break;
  case "ajoutManaut":ajoutManaut();break;
  case "supprManaut":$manaut = $_GET['id'];supprManaut($manaut);break;
  case "majTabMeteo":majTabMeteo();break;
  case "majInfosMeteo":majInfosMeteo();break;

  case "Liens":$liens=$_GET['liens'];Liens($liens);break;
  case "HTMLtoXML": HTMLtoXML();break;
  case "majOPSTextarea":majOPSTextarea();break;
  case "majNextOPS":majNextOPS();break;
  case "majNAVTextarea":majNAVTextarea();break;
  case "majNextNAV":majNextNAV();break;
  case "majNextPOL":majNextPOL();break;
  case "majNextPV":majNextPV();break;
  default:;
}

//MAJ de l'équipe de service du jour
function majEquipeService(){
  $dom = new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $eqp_svc = $dom->getElementsByTagName("equipeService")->item(0);
  $eqp_svc->setAttribute("cms", $_GET['cms']);
  $eqp_svc->setAttribute("cmstel", $_GET['cmstel']);
  $eqp_svc->setAttribute("cmsrenf", $_GET['cmsrenf']);
  $eqp_svc->setAttribute("tech", $_GET['tech']);
  $eqp_svc->setAttribute("techtel", $_GET['techtel']);
  $eqp_svc->setAttribute("cdq1", $_GET['cdq1']);
  $eqp_svc->setAttribute("cdq2", $_GET['cdq2']);
  $eqp_svc->setAttribute("cdq3", $_GET['cdq3']);
  $eqp_svc->setAttribute("cdq4", $_GET['cdq4']);
  $eqp_svc->setAttribute("cdq5", $_GET['cdq5']);
  $eqp_svc->setAttribute("cdq6", $_GET['cdq6']);
  $eqp_svc->setAttribute("cdq7", $_GET['cdq7']);

  $eqp_svc->setAttribute("cdq1b", $_GET['cdq1b']);
  $eqp_svc->setAttribute("cdq2b", $_GET['cdq2b']);
  $eqp_svc->setAttribute("cdq3b", $_GET['cdq3b']);
  $eqp_svc->setAttribute("cdq4b", $_GET['cdq4b']);
  $eqp_svc->setAttribute("cdq5b", $_GET['cdq5b']);
  $eqp_svc->setAttribute("cdq6b", $_GET['cdq6b']);
  $eqp_svc->setAttribute("cdq7b", $_GET['cdq7b']);
  
  $eqp_svc->setAttribute("adj1", $_GET['adj1']);
  $eqp_svc->setAttribute("adj2", $_GET['adj2']);
  $eqp_svc->setAttribute("adj3", $_GET['adj3']);
  $eqp_svc->setAttribute("adj4", $_GET['adj4']);
  $eqp_svc->setAttribute("adj5", $_GET['adj5']);
  $eqp_svc->setAttribute("adj6", $_GET['adj6']);
  $eqp_svc->setAttribute("adj7", $_GET['adj7']);

  $eqp_svc->setAttribute("adj1b", $_GET['adj1b']);
  $eqp_svc->setAttribute("adj2b", $_GET['adj2b']);
  $eqp_svc->setAttribute("adj3b", $_GET['adj3b']);
  $eqp_svc->setAttribute("adj4b", $_GET['adj4b']);
  $eqp_svc->setAttribute("adj5b", $_GET['adj5b']);
  $eqp_svc->setAttribute("adj6b", $_GET['adj6b']);
  $eqp_svc->setAttribute("adj7b", $_GET['adj7b']);
  $dom->save('feuilledequart.xml');
}

function majOperation(){

		$dom=new DomDocument;
		$dom->preserveWhiteSpace = false;
		$dom->formatOutput = true;
		$dom->load('feuilledequart.xml');
		$op_svg=$dom->getElementsByTagName("textO")->item(0);
		$op_svg->setAttribute("textO",$_GET['textO']);

		$pol_svg=$dom->getElementsByTagName("textPOL")->item(0);
		$pol_svg->setAttribute("textPOL",$_GET['textPOL']);

		$nav_svg=$dom->getElementsByTagName("textNAV")->item(0);
		$nav_svg->setAttribute("textNAV",$_GET['textNAV']);

		$pv_svg=$dom->getElementsByTagName("textPV")->item(0);
		$pv_svg->setAttribute("textPV",$_GET['textPV']);

		$dom->save('feuilledequart.xml');
	}

//Ajouter moyen en activité
function ajout_moyen() {
  $dom = new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $nouveauMoyen = $dom->createElement("moyen");
  $id = $dom->createElement('id', rand(0, 100));
  $nom = $dom->createElement('nom', $_GET['nom']);
  $pob = $dom->createElement('pob', $_GET['pob']);
  $secteur = $dom->createElement('secteur', $_GET['secteur']);
  $activite = $dom->createElement('activite', $_GET['activite']);
  $hpd = $dom->createElement('hpd', $_GET['hpd']);
  $hpa = $dom->createElement('hpa', $_GET['hpa']);
  $nouveauMoyen->appendChild($id);
  $nouveauMoyen->appendChild($nom);
  $nouveauMoyen->appendChild($pob);
  $nouveauMoyen->appendChild($secteur);
  $nouveauMoyen->appendChild($activite);
  $nouveauMoyen->appendChild($hpd);
  $nouveauMoyen->appendChild($hpa);
  $noeud_princ = $dom->getElementsByTagName("moyens_sortis")->item(0);
  $noeud_princ->appendChild($nouveauMoyen);
  $dom->save('feuilledequart.xml');
}
//Suppression moyen en activité
function suppr_moyen($moyen_en_mer_a_supprimer) {
  $dom = new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $moyens = $dom->getElementsByTagName("moyen");
  foreach( $moyens as $valNds ) { 
    if($valNds->firstChild->nodeValue == ($moyen_en_mer_a_supprimer)){
      $supprimer = $valNds->parentNode->removeChild($valNds);
    }
  }
  $dom->save('feuilledequart.xml');
}

//Mise à jours des alertes aéro HLO et AVIONS
function majAltAero() {
  $dom = new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $hlo1 = $dom->getElementsByTagName("alerte")->item(0);
  $hlo1->setAttribute("nom", $_GET['hlo1nom']);
  $hlo1->setAttribute("obs", $_GET['hlo1obs']);
  $hlo2 = $dom->getElementsByTagName("alerte")->item(1);
  $hlo2->setAttribute("nom", $_GET['hlo2nom']);
  $hlo2->setAttribute("obs", $_GET['hlo2obs']);
  $hlo3 = $dom->getElementsByTagName("alerte")->item(2);
  $hlo3->setAttribute("nom", $_GET['hlo3nom']);
  $hlo3->setAttribute("obs", $_GET['hlo3obs']);
  $hlo4 = $dom->getElementsByTagName("alerte")->item(3);
  $hlo4->setAttribute("nom", $_GET['hlo4nom']);
  $hlo4->setAttribute("obs", $_GET['hlo4obs']);
  $hlo5 = $dom->getElementsByTagName("alerte")->item(4);
  $hlo5->setAttribute("nom", $_GET['hlo5nom']);
  $hlo5->setAttribute("obs", $_GET['hlo5obs']);
  $avia1 = $dom->getElementsByTagName("alerte")->item(5);
  $avia1->setAttribute("nom", $_GET['avia1nom']);
  $avia1->setAttribute("obs", $_GET['avia1obs']);
  $avia2 = $dom->getElementsByTagName("alerte")->item(6);
  $avia2->setAttribute("nom", $_GET['avia2nom']);
  $avia2->setAttribute("obs", $_GET['avia2obs']);
  $avia3 = $dom->getElementsByTagName("alerte")->item(7);
  $avia3->setAttribute("nom", $_GET['avia3nom']);
  $avia3->setAttribute("obs", $_GET['avia3obs']);
  $dom->save('feuilledequart.xml');
}

//Ajout moyen indisponible zone Corsen
function ajout_indispoCO() {
  $dom = new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $nouveauIndispoCO = $dom->createElement("indispoCO");
  $indispoCOid = $dom->createElement('id', rand(0, 100));
  $indispoCOmoy = $dom->createElement("indispoCOmoy", $_GET['nom']);
  $indispoCOcause = $dom->createElement("indispoCOcause", $_GET['cause']);
  $indispoCOdelai = $dom->createElement("indispoCOdelai", $_GET['delai']);
  $nouveauIndispoCO->appendChild($indispoCOid);
  $nouveauIndispoCO->appendChild($indispoCOmoy);
  $nouveauIndispoCO->appendChild($indispoCOcause);
  $nouveauIndispoCO->appendChild($indispoCOdelai);
  $noeud_princ = $dom->getElementsByTagName("moyens_indispo")->item(0);
  $noeud_princ->appendChild($nouveauIndispoCO);
  $dom->save('feuilledequart.xml');
}
//Suppression moyen indisponible zone Corsen
function suppr_indispoCO($indispoCO){
  $dom = new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $moyens = $dom->getElementsByTagName("indispoCO");
  foreach( $moyens as $valNds ) { 
    if($valNds->firstChild->nodeValue == ($indispoCO)){
      $supprimer = $valNds->parentNode->removeChild($valNds);
    }
  }
  $dom->save('feuilledequart.xml');
}
function modifIndispoCO($id, $newDelai){
  $dom = new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $moyens = $dom->getElementsByTagName("indispoCO");
  foreach( $moyens as $valNds ) { 
    if($valNds->firstChild->nodeValue == $id){
      $supprimer = $valNds->removeChild($valNds->getElementsByTagName('indispoCOdelai')->item(0));
      $nouveauDelai = $dom->createElement('indispoCOdelai', $newDelai);
      $valNds->appendChild($nouveauDelai);
    }
  }
  $dom->save('feuilledequart.xml');
}

//Ajout moyen indisponible autre SRR
function ajout_indispoSRR() {
  $dom = new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $nouveauIndispoSRR = $dom->createElement("indispoSRR");
  $indispoSRRid = $dom->createElement('id', rand(0, 100));
  $indispoSRRmoy = $dom->createElement("indispoSRRmoy", $_GET['nom']);
  $indispoSRRcause = $dom->createElement("indispoSRRcause", $_GET['cause']);
  $indispoSRRdelai = $dom->createElement("indispoSRRdelai", $_GET['delai']);
  $indispoSRRSRR = $dom->createElement("indispoSRRSRR", $_GET['srr']);
  $nouveauIndispoSRR->appendChild($indispoSRRid);
  $nouveauIndispoSRR->appendChild($indispoSRRmoy);
  $nouveauIndispoSRR->appendChild($indispoSRRcause);
  $nouveauIndispoSRR->appendChild($indispoSRRdelai);
  $nouveauIndispoSRR->appendChild($indispoSRRSRR);
  $noeud_princ = $dom->getElementsByTagName("moyens_indispo")->item(0);
  $noeud_princ->appendChild($nouveauIndispoSRR);
  $dom->save('feuilledequart.xml');
}
//Suppression moyen indisponible autres SRR
function suppr_indispoSRR($indispoSRR){
  $dom = new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $moyens = $dom->getElementsByTagName("indispoSRR");
  foreach( $moyens as $valNds ) { 
    if($valNds->firstChild->nodeValue == ($indispoSRR)){
      $supprimer = $valNds->parentNode->removeChild($valNds);
    }
  }
  $dom->save('feuilledequart.xml');
}
function modifIndispoSRR($id, $newDelai){
  $dom = new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $moyens = $dom->getElementsByTagName("indispoSRR");
  foreach( $moyens as $valNds ) { 
    if($valNds->firstChild->nodeValue == $id){
      $supprimer = $valNds->removeChild($valNds->getElementsByTagName('indispoSRRdelai')->item(0));
      $nouveauDelai = $dom->createElement('indispoSRRdelai', $newDelai);
      $valNds->appendChild($nouveauDelai);
    }
  }
  $dom->save('feuilledequart.xml');
}

//Ajout avarie technique/autre
function ajout_Tech() {
  $dom = new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $nouveauAvarie = $dom->createElement("avarie");
  $avarieId = $dom->createElement('id', rand(0, 100));
  $systeme = $dom->createElement("systeme", $_GET['systeme']);
  $nature = $dom->createElement("nature", $_GET['nature']);
  $nouveauAvarie->appendChild($avarieId);
  $nouveauAvarie->appendChild($systeme);
  $nouveauAvarie->appendChild($nature);
  $noeud_princ = $dom->getElementsByTagName("technique")->item(0);
  $noeud_princ->appendChild($nouveauAvarie);
  $dom->save('feuilledequart.xml');
}
//Suppression avarie technique/autre
function suppr_Tech($avarie){
  $dom = new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $suppAvarie = $dom->getElementsByTagName("avarie");
  foreach( $suppAvarie as $valNds ) { 
    if($valNds->firstChild->nodeValue == ($avarie)){
      $supprimer = $valNds->parentNode->removeChild($valNds);
    }
  }
  $dom->save('feuilledequart.xml');
}

//ajout prevision activite air/mer
function ajoutPrevi($milieu){
  $dom = new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $newPrevi = $dom->createElement("previsActivite");
  $newPrevi->setAttribute('milieu', $milieu);
  $id = $dom->createElement('id', rand(0, 100));
  $aut = $dom->createElement('aut', $_GET['aut']);
  $moy = $dom->createElement('moy', $_GET['moy']);
  $miss = $dom->createElement('miss', $_GET['miss']);
  $zone = $dom->createElement('zone', $_GET['zone']);
  $obs = $dom->createElement('obs', $_GET['obs']);
  $hpd = $dom->createElement('hpd', $_GET['hpd']);
  $hpa = $dom->createElement('hpa', $_GET['hpa']);
  $newPrevi->appendChild($id);
  $newPrevi->appendChild($aut);
  $newPrevi->appendChild($moy);
  $newPrevi->appendChild($miss);
  $newPrevi->appendChild($zone);
  $newPrevi->appendChild($obs);
  $newPrevi->appendChild($hpd);
  $newPrevi->appendChild($hpa);
  
  $noeud_princ = $dom->getElementsByTagName("previ_activite")->item(0);
  $noeud_princ->appendChild($newPrevi);
  $dom->save('feuilledequart.xml');
}
//suppression previ air/mer
function supprPrevi($supprPrevi){
  $dom = new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $previ = $dom->getElementsByTagName("previsActivite");
  foreach( $previ as $valNds ) { 
    if($valNds->firstChild->nodeValue == ($supprPrevi)){
      $supprimer = $valNds->parentNode->removeChild($valNds);
    }
  }
  $dom->save('feuilledequart.xml');
}

//Ajout manifnestation nautique
function ajoutManaut(){
  $type = $_GET['type'];
  $num = $_GET['num'];
  $infos = $_GET['infos'];
  $zone = $_GET['zone'];
  if($type == "csj"){
    $dom = new DomDocument();
    $dom->preserveWhiteSpace = false;
    $dom->formatOutput = true;
    $dom->load('feuilledequart.xml');
    $newManaut = $dom->createElement("manifNautique", $infos);
    $newManaut->setAttribute('id', "mannaut".rand(0, 100));    
    $newManaut->setAttribute('type', $type);
    $noeud_princ = $dom->getElementsByTagName("manaut")->item(0);
    $noeud_princ->appendChild($newManaut);
    $dom->save('feuilledequart.xml');
  }
  else{
    $dom = new DomDocument();
    $dom->preserveWhiteSpace = false;
    $dom->formatOutput = true;
    $dom->load('feuilledequart.xml');
    $newManaut = $dom->createElement("manifNautique", $infos);
    $newManaut->setAttribute('id', "mannaut".rand(0, 100));    
    $newManaut->setAttribute('type', $type);   
    $newManaut->setAttribute('num', $num);
    $newManaut->setAttribute('zone', $zone);
    $noeud_princ = $dom->getElementsByTagName("manaut")->item(0);
    $noeud_princ->appendChild($newManaut);
    $dom->save('feuilledequart.xml');
  }
}
//SUPPRESSION MANIFESTATION NAUTIQUE
function supprManaut($manaut){
  $dom = new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $suppmanaut = $dom->getElementsByTagName("manifNautique");
  foreach( $suppmanaut as $valNds ) { 
    if($valNds->getAttribute('id') == ($manaut)){
      $supprimer = $valNds->parentNode->removeChild($valNds);
    }
  }
  $dom->save('feuilledequart.xml');
}


//Ajout Retex
function ajoutRetex() {
  $dom = new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $nouveauRetex = $dom->createElement("ficheRetex", $_GET['obj']);
  $nouveauRetex->setAttribute("id",  "rtx" + rand(0, 100));
  $nouveauRetex->setAttribute("type", $_GET['type']);
  $nouveauRetex->setAttribute("num", $_GET['num']);
  $nouveauRetex->setAttribute("date", time());
  $noeud_princ = $dom->getElementsByTagName("retex")->item(0);
  $noeud_princ->appendChild($nouveauRetex);
  $dom->save('feuilledequart.xml');
}
function supprRetex($id){
  $dom = new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $retex = $dom->getElementsByTagName("ficheRetex");
  foreach( $retex as $valNds ) { 
    if($valNds->getAttribute('id') === ($id)){
      $supprimer = $valNds->parentNode->removeChild($valNds);
    }
  }
  $dom->save('feuilledequart.xml');
}

//MAJ PLANNING OFFICIER
function MAJPlanOff(){
  $dom = new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->load('feuilledequart.xml');
  $offsPlan = explode(',', $_GET['infos']);
  $offsXML = $dom->getElementsByTagName('off');
  
  $dom->save('feuilledequart.xml');
}

function ajoutTextNAV(){
  $dom=new DomDocument();
  $dom->preserveWhiteSpace=false;
  $dom->formatOutput=true;
  $dom->load('feuilledequart.xml');
  $nouveauText = $dom->createElement('TextNAV');
  $text=$dom->createElement('textNAV', $_GET['textNAV']);
  $number=$dom->createElement('number',$_GET['numNAV']);
  $noeud=$dom->getElementsByTagName('actops')->item(0);
  $nouveauText->appendChild($text);
  $nouveauText->appendChild($number);
  $noeud->appendChild($nouveauText);
  $dom->save('feuilledequart.xml');
}

function ajoutTextPV(){
  $dom=new DomDocument();
  $dom->preserveWhiteSpace=false;
  $dom->formatOutput=true;
  $dom->load('feuilledequart.xml');
  $nouveauText = $dom->createElement('TextPV');
  $text=$dom->createElement('textPV', $_GET['textPV']);
  $number=$dom->createElement('number',$_GET['numPV']);
  $noeud=$dom->getElementsByTagName('actops')->item(0);
  $nouveauText->appendChild($text);
  $nouveauText->appendChild($number);
  $noeud->appendChild($nouveauText);
  $dom->save('feuilledequart.xml');
}


function ajoutTextPOL(){
  $dom=new DomDocument();
  $dom->preserveWhiteSpace=false;
  $dom->formatOutput=true;
  $dom->load('feuilledequart.xml');
  $nouveauText = $dom->createElement('TextPOL');
  $text=$dom->createElement('textPOL', $_GET['textPOL']);
  $number=$dom->createElement('number',$_GET['numPOL']);
  $noeud=$dom->getElementsByTagName('actops')->item(0);
  $nouveauText->appendChild($text);
  $nouveauText->appendChild($number);
  $noeud->appendChild($nouveauText);
  $dom->save('feuilledequart.xml');
}

function majTabMeteo() {	
	$dom = new DomDocument();
	$dom->preserveWhiteSpace = false;
	$dom->formatOutput = true;
	$dom->load('feuilledequart.xml');
	
	$bms1=$dom->getElementsByTagName('LargeB')->item(0);
	$bms1->setAttribute('bms1',$_GET['bms1']);
	$bms2=$dom->getElementsByTagName('OuestB')->item(0);
	$bms2->setAttribute('bms2',$_GET['bms2']);
	$bms3=$dom->getElementsByTagName('EstB')->item(0);
	$bms3->setAttribute('bms3',$_GET['bms3']);

	$vt1=$dom->getElementsByTagName('LargeVT')->item(0);
	$vt1->setAttribute('vt1',$_GET['vt1']);
	$vt2=$dom->getElementsByTagName('OuestVT')->item(0);
	$vt2->setAttribute('vt2',$_GET['vt2']);
	$vt3=$dom->getElementsByTagName('EstVT')->item(0);
	$vt3->setAttribute('vt3',$_GET['vt3']);

	$mer1=$dom->getElementsByTagName('LargeM')->item(0);
	$mer1->setAttribute('mer1',$_GET['mer1']);
	$mer2=$dom->getElementsByTagName('OuestM')->item(0);
	$mer2->setAttribute('mer2',$_GET['mer2']);
	$mer3=$dom->getElementsByTagName('EstM')->item(0);
	$mer3->setAttribute('mer3',$_GET['mer3']);

	$visi1=$dom->getElementsByTagName('LargeVI')->item(0);
	$visi1->setAttribute('visi1',$_GET['visi1']);
	$visi2=$dom->getElementsByTagName('OuestVI')->item(0);
	$visi2->setAttribute('visi2',$_GET['visi2']);
	$visi3=$dom->getElementsByTagName('EstVI')->item(0);
	$visi3->setAttribute('visi3',$_GET['visi3']); 

	$dom->save('feuilledequart.xml');
}

function majInfosMeteo(){
	$dom = new DomDocument();
	$dom->preserveWhiteSpace = false;
	$dom->formatOutput = true;
	$dom->load('feuilledequart.xml');

	$temp=$dom->getElementsByTagName('Temp')->item(0);
	$temp->setAttribute('temp',$_GET['temp']);
	$coeff=$dom->getElementsByTagName('Coeff')->item(0);
	$coeff->setAttribute('coeff',$_GET['coeff']);
	$maree=$dom->getElementsByTagName('Maree')->item(0);
	$maree->setAttribute('maree',$_GET['maree']);
	/*$lien=$dom->getElementsByTagName('Liens')->item(0);
	$liens=$dom->createElement('liens',$_GET['liens']);
	$lien->appendChild($liens);*/
	$dom->save('feuilledequart.xml');
}

function Liens($liens){
	$url_pattern='#((http)?(s)?://)?(([\w]+\.)+\w+(/\S*)?)#';
	$dom=new DomDocument();
	$dom->preserveWhiteSpace=false;
	$dom->formatOutput=true;
	$dom->load('feuilledequart.xml');
	$Liens=$dom->getElementsByTagName('Liens')->item(0);
	$all_links=$dom->getElementsByTagName('lien');
	foreach($all_links as $link) {
		if ($link == $liens) return;
	}
	unset($link); 

	$noeudLiens=$dom->createElement('lien',$liens);
	$Liens->appendChild($noeudLiens);
	$dom->save('feuilledequart.xml');

	$lienBalises="";
	if(preg_match($url_pattern,$liens)){
	  $lienBalises=preg_replace($url_pattern,'<a href="http$3://$4">$4</a>',$liens);
	}  
  else{
  	$lienBalises=$liens;
  }
	//$lienBalises = htmentities($lienBalises); // echappement
  $url="fonctions.js?fctn=UpdateLinkView&lienBalises="+$lienBalises;
}

function HTMLtoXML(){
  $dom = new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $htmlxml = $dom->getElementsByTagName("Text")->item(0);
  $vartext=$dom->getElementsByTagName("OPS")->item(0);
  $vartextN=$dom->getElementsByTagName("NAV")->item(0);
  $text=$dom->createTextNode($_GET['OPS']);
  $textN=$dom->createTextNode($_GET['NAV']);
  $htmlxml->setAttribute("numOPS", $_GET['nextOPS']);
  $htmlxml->setAttribute("numPOL", $_GET['nextPOL']);
  $htmlxml->setAttribute("numNAV", $_GET['nextMAS']);
  $htmlxml->setAttribute("numPV", $_GET['netxPV']);
  $vartext->appendChild($text);
  $vartextN->appendChild($textN);
  $dom->save('feuilledequart.xml');}

function majOPSTextarea(){
  $dom=new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $majText=$dom->getElementsByTagName("Text")->item(0);  
  $OPS=$majText->getElementsByTagName("OPS")->item(0);
  #suppressions des lignes dans OPS
  while ($OPS->childNodes->length > 0) {
    $ligne = $OPS->getElementsByTagName("LIGNE")->item(0);
    $OPS->removeChild($ligne);
  }
  #ajout des nouvelles lignes du textarea.value dans XML OPS
  $ops=$_GET["OPS"];
  $lignes = explode("alaligne", $ops);
  for ($i = 0; $i < count($lignes); $i++) {
    $majOPS=$dom->createElement("LIGNE",$lignes[$i]);
    $OPS->appendChild($majOPS);
  }
  $dom->save('feuilledequart.xml');
}

function majNextOPS(){
  $dom=new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $majText=$dom->getElementsByTagName("Text")->item(0); 
  $majText->setAttribute("numOPS",$_GET["numOPS"]+1);
  $dom->save('feuilledequart.xml');
}

function majNAVTextarea(){
  $dom=new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $majText=$dom->getElementsByTagName("Text")->item(0);  
  $NAV=$majText->getElementsByTagName("NAV")->item(0);
  #suppressions des lignes dans NAV
  while ($NAV->childNodes->length > 0) {
    $ligne = $NAV->getElementsByTagName("LIGNE")->item(0);
    $NAV->removeChild($ligne);
  }
  #ajout des nouvelles lignes du textarea.value dans XML NAV
  $nav=$_GET["NAV"];
  $lignes = explode("alaligne", $nav);
  for ($i = 0; $i < count($lignes); $i++) {
    $majNAV=$dom->createElement("LIGNE",$lignes[$i]);
    $NAV->appendChild($majNAV);
  }
  $dom->save('feuilledequart.xml');
}

function majNextNAV(){
  $dom=new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $majText=$dom->getElementsByTagName("Text")->item(0); 
  $majText->setAttribute("numMAS",$_GET["numMAS"]+1);
  $dom->save('feuilledequart.xml');
}
function majNextPOL(){
  $dom=new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $majText=$dom->getElementsByTagName("Text")->item(0); 
  $majText->setAttribute("numPOL",$_GET["numPOL"]+1);
  $dom->save('feuilledequart.xml');
}
function majNextPV(){
  $dom=new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $majText=$dom->getElementsByTagName("Text")->item(0); 
  $majText->setAttribute("numPV",$_GET["numPV"]+1);
  $dom->save('feuilledequart.xml');
}

$timeend=microtime(true);
$time=$timeend-$timestart;

$current = file_get_contents('tempsExecution.txt');
$current .= "\n".$_GET['fctn']."\t".$time;
file_put_contents('tempsExecution.txt', $current);
?>
