<!DOCTYPE html>
<html>
<head>
<meta charset = "utf-8"/>
  <title></title>
</head>
<body>
<?php
  
  $url='#((http)?(s)?://)?(([\w]+\.)+\w+(/\S*)?)#';
  $texte1='Ceci est un lien: https://www.afrobees.com/forum/question/11/comment-hypertexte';
  $texte2='http://openclassrooms.com/courses/concevez-votre-site/les-expressions';
  $texte3='localhost/releve_informatique/20180517/';
  $texte4='www.etourisme.info';
  $guitare='#guitare#';
  $texteg='Je joue de la guitare';
  $texte5="qsrfgrshglqhrzflqzflfhlhf";



  if(preg_match($url,$texte1)){
    $texte=preg_replace($url,'<a href="http$3://$4">$4</a>',$texte1);
    echo $texte;
    echo '</br>';
  }  
  else{
    echo 'L\'url: '.$texte1.' ne fonctionne pas';
    echo '</br>';
  }

  if(preg_match($url,$texte2)){
    echo 'L\'url : '.$texte2.' fonctionne';
    echo '</br>';
  }  
  else{
    echo 'L\'url: '.$texte2.' ne fonctionne pas';
    echo '</br>';
  }

  if(preg_match($url,$texte3)){
    echo 'L\'url : '.$texte3.' fonctionne';
    echo '</br>';
  }  
  else{
    echo 'L\'url: '.$texte3.' ne fonctionne pas';
    echo '</br>';
  }

  if(preg_match($url,$texte4)){
    echo 'L\'url : '.$texte4.' fonctionne';
    echo '</br>';
  }  
  else{
    echo 'L\'url: '.$texte4.' ne fonctionne pas';
    echo '</br>';
  }

  if(preg_match($url,$texte5)){
    echo 'L\'url : '.$texte5.' fonctionne';
    echo '</br>';
  }  
  else{
    echo 'L\'url: '.$texte5.' ne fonctionne pas';
    echo '</br>';
  }

  /*if(preg_match($url2,$texte1)){
    echo 'L\'url2 : '.$texte1.' fonctionne';
    echo '</br>';
  }  
  else{
    echo 'L\'url2: '.$texte1.' ne fonctionne pas';
    echo '</br>';
  }

  if(preg_match($url2,$texte2)){
    echo 'L\'url2 : '.$texte2.' fonctionne';
    echo '</br>';
  }  
  else{
    echo 'L\'url2: '.$texte2.' ne fonctionne pas';
    echo '</br>';
  }

  if(preg_match($url2,$texte3)){
    echo 'L\'url2: '.$texte3.' fonctionne';
    echo '</br>';
  }  
  else{
    echo 'L\'url2: '.$texte3.' ne fonctionne pas';
    echo '</br>';
  }

  if(preg_match($url2,$texte4)){
    echo 'L\'url2 : '.$texte4.' fonctionne';
    echo '</br>';
  }  
  else{
    echo 'L\'url2: '.$texte4.' ne fonctionne pas';
    echo '</br>';
  }
  if(preg_match($guitare,$texteg)){
    echo 'Guitare est dans la phrase';
    echo '</br>';
  }  
  else{
    echo 'Guitare n\'est pas dans la phrase';
    echo '</br>';
  }

  $url='#((http)?(s)?://)?(([\w]+\.)+\w+(/\S*)?)#';
  if(preg_match($url,$_GET['liens'])){    
    $lien=preg_replace($url,'<a href="http$3://$4">$4</a>',$_GET['liens']);   
  }*/
  
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

function XMLtoHTML(){
  $dom = new DomDocument();
  $dom->preserveWhiteSpace = false;
  $dom->formatOutput = true;
  $dom->load('feuilledequart.xml');
  $eqp_svc = $dom->getElementsByTagName("Text")->item(0);
  $eqp_svc->setAttribute("OPS", $_GET['OPS']);
  $eqp_svc->setAttribute("NAV", $_GET['NAV']);
  $eqp_svc->setAttribute("numOPS", $_GET['numOPS']);
  $eqp_svc->setAttribute("numPOL", $_GET['numPOL']);
  $eqp_svc->setAttribute("numMAS", $_GET['numMAS']);
  $eqp_svc->setAttribute("numPV", $_GET['numPV']);
$dom->save('feuilledequart.xml');

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
?>
</body>
</html>