function switchEDQ(){
  var cms = encodeURIComponent(document.getElementById('cms').innerHTML);
  var cmstel = encodeURIComponent(document.getElementById('cmstel').innerHTML);
  var cmsrenf = encodeURIComponent(document.getElementById('cmsrenf').innerHTML);
  var tech = encodeURIComponent(document.getElementById('tech').innerHTML);
  var techtel = encodeURIComponent(document.getElementById('techtel').innerHTML);

  var quartsw1= encodeURIComponent(document.getElementById('quart1').innerHTML);
  var quartsw2= encodeURIComponent(document.getElementById('quart2').innerHTML);
  var quartsw3= encodeURIComponent(document.getElementById('quart3').innerHTML);
  var quartsw4= encodeURIComponent(document.getElementById('quart4').innerHTML);
  var quartsw5= encodeURIComponent(document.getElementById('quart5').innerHTML);
  var quartsw6= encodeURIComponent(document.getElementById('quart6').innerHTML);
  var quartsw7= encodeURIComponent(document.getElementById('quart7').innerHTML);

  var quarsw1= encodeURIComponent(document.getElementById('quar1').innerHTML);
  var quarsw2= encodeURIComponent(document.getElementById('quar2').innerHTML);
  var quarsw3= encodeURIComponent(document.getElementById('quar3').innerHTML);
  var quarsw4= encodeURIComponent(document.getElementById('quar4').innerHTML);
  var quarsw5= encodeURIComponent(document.getElementById('quar5').innerHTML);
  var quarsw6= encodeURIComponent(document.getElementById('quar6').innerHTML);
  var quarsw7= encodeURIComponent(document.getElementById('quar7').innerHTML);

  var cdqsw1 = encodeURIComponent(document.getElementById('cdq1').innerHTML);
  var cdqsw2 = encodeURIComponent(document.getElementById('cdq2').innerHTML);
  var cdqsw3 = encodeURIComponent(document.getElementById('cdq3').innerHTML);
  var cdqsw4 = encodeURIComponent(document.getElementById('cdq4').innerHTML);
  var cdqsw5 = encodeURIComponent(document.getElementById('cdq5').innerHTML);
  var cdqsw6 = encodeURIComponent(document.getElementById('cdq6').innerHTML);
  var cdqsw7 = encodeURIComponent(document.getElementById('cdq7').innerHTML);

  var cdqsw1b = encodeURIComponent(document.getElementById('cdq1b').innerHTML);
  var cdqsw2b = encodeURIComponent(document.getElementById('cdq2b').innerHTML);
  var cdqsw3b = encodeURIComponent(document.getElementById('cdq3b').innerHTML);
  var cdqsw4b = encodeURIComponent(document.getElementById('cdq4b').innerHTML);
  var cdqsw5b = encodeURIComponent(document.getElementById('cdq5b').innerHTML);
  var cdqsw6b = encodeURIComponent(document.getElementById('cdq6b').innerHTML);
  var cdqsw7b = encodeURIComponent(document.getElementById('cdq7b').innerHTML);

  var adjsw1 = encodeURIComponent(document.getElementById('adj1').innerHTML);
  var adjsw2 = encodeURIComponent(document.getElementById('adj2').innerHTML);
  var adjsw3 = encodeURIComponent(document.getElementById('adj3').innerHTML);
  var adjsw4 = encodeURIComponent(document.getElementById('adj4').innerHTML);
  var adjsw5 = encodeURIComponent(document.getElementById('adj5').innerHTML);
  var adjsw6 = encodeURIComponent(document.getElementById('adj6').innerHTML);
  var adjsw7 = encodeURIComponent(document.getElementById('adj7').innerHTML);

  var adjsw1b = encodeURIComponent(document.getElementById('adj1b').innerHTML);
  var adjsw2b = encodeURIComponent(document.getElementById('adj2b').innerHTML);
  var adjsw3b = encodeURIComponent(document.getElementById('adj3b').innerHTML);
  var adjsw4b = encodeURIComponent(document.getElementById('adj4b').innerHTML);
  var adjsw5b = encodeURIComponent(document.getElementById('adj5b').innerHTML);
  var adjsw6b = encodeURIComponent(document.getElementById('adj6b').innerHTML);
  var adjsw7b = encodeURIComponent(document.getElementById('adj7b').innerHTML);

  document.getElementById('quart1').innerHTML=decodeURIComponent(quartsw2);
  document.getElementById('quart2').innerHTML=decodeURIComponent(quartsw3);
  document.getElementById('quart3').innerHTML=decodeURIComponent(quartsw4);
  document.getElementById('quart4').innerHTML=decodeURIComponent(quartsw5);
  document.getElementById('quart5').innerHTML=decodeURIComponent(quartsw6);
  document.getElementById('quart6').innerHTML=decodeURIComponent(quartsw7);
  document.getElementById('quart7').innerHTML=decodeURIComponent(quartsw1);

  document.getElementById('quar1').innerHTML=decodeURIComponent(quarsw2);
  document.getElementById('quar2').innerHTML=decodeURIComponent(quarsw3);
  document.getElementById('quar3').innerHTML=decodeURIComponent(quarsw4);
  document.getElementById('quar4').innerHTML=decodeURIComponent(quarsw5);
  document.getElementById('quar5').innerHTML=decodeURIComponent(quarsw6);
  document.getElementById('quar6').innerHTML=decodeURIComponent(quarsw7);
  document.getElementById('quar7').innerHTML=decodeURIComponent(quarsw1);

  document.getElementById('cdq1').innerHTML=decodeURIComponent(cdqsw2);
  document.getElementById('cdq2').innerHTML=decodeURIComponent(cdqsw3);
  document.getElementById('cdq3').innerHTML=decodeURIComponent(cdqsw4);
  document.getElementById('cdq4').innerHTML=decodeURIComponent(cdqsw5);
  document.getElementById('cdq5').innerHTML=decodeURIComponent(cdqsw6);
  document.getElementById('cdq6').innerHTML=decodeURIComponent(cdqsw7);
  document.getElementById('cdq7').innerHTML=decodeURIComponent(cdqsw1);

  document.getElementById('cdq1b').innerHTML=decodeURIComponent(cdqsw2b);
  document.getElementById('cdq2b').innerHTML=decodeURIComponent(cdqsw3b);
  document.getElementById('cdq3b').innerHTML=decodeURIComponent(cdqsw4b);
  document.getElementById('cdq4b').innerHTML=decodeURIComponent(cdqsw5b);
  document.getElementById('cdq5b').innerHTML=decodeURIComponent(cdqsw6b);
  document.getElementById('cdq6b').innerHTML=decodeURIComponent(cdqsw7b);
  document.getElementById('cdq7b').innerHTML=decodeURIComponent(cdqsw1b);

  document.getElementById('adj1').innerHTML=decodeURIComponent(adjsw2);
  document.getElementById('adj2').innerHTML=decodeURIComponent(adjsw3);
  document.getElementById('adj3').innerHTML=decodeURIComponent(adjsw4);
  document.getElementById('adj4').innerHTML=decodeURIComponent(adjsw5);
  document.getElementById('adj5').innerHTML=decodeURIComponent(adjsw6);
  document.getElementById('adj6').innerHTML=decodeURIComponent(adjsw7);
  document.getElementById('adj7').innerHTML=decodeURIComponent(adjsw1);

  document.getElementById('adj1b').innerHTML=decodeURIComponent(adjsw2b);
  document.getElementById('adj2b').innerHTML=decodeURIComponent(adjsw3b);
  document.getElementById('adj3b').innerHTML=decodeURIComponent(adjsw4b);
  document.getElementById('adj4b').innerHTML=decodeURIComponent(adjsw5b);
  document.getElementById('adj5b').innerHTML=decodeURIComponent(adjsw6b);
  document.getElementById('adj6b').innerHTML=decodeURIComponent(adjsw7b);
  document.getElementById('adj7b').innerHTML=decodeURIComponent(adjsw1b);

  var url = "fonctions.php?fctn=majEquipeService&cms=" + cms + "&cmstel=" + cmstel + "&cmsrenf="
  + cmsrenf +  "&tech=" + tech + "&techtel=" + techtel 
  + "&cdq1=" + cdqsw2 + "&cdq2=" + cdqsw3 + "&cdq3=" + cdqsw4 + "&cdq4=" + cdqsw5 + "&cdq5=" + cdqsw6 + "&cdq6=" + cdqsw7 + "&cdq7=" + cdqsw1
  + "&adj1=" + adjsw2 + "&adj2=" + adjsw3 + "&adj3=" + adjsw4 + "&adj4=" + adjsw5 + "&adj5=" + adjsw6 + "&adj6=" + adjsw7+ "&adj7=" + adjsw1
  + "&cdq1b=" + cdqsw2b + "&cdq2b=" + cdqsw3b + "&cdq3b=" + cdqsw4b + "&cdq4b=" + cdqsw5b + "&cdq5b=" + cdqsw6b + "&cdq6b=" + cdqsw7b + "&cdq7b=" + cdqsw1b
  + "&adj1b=" + adjsw2b + "&adj2b=" + adjsw3b + "&adj3b=" + adjsw4b + "&adj4b=" + adjsw5b + "&adj5b=" + adjsw6b + "&adj6b=" + adjsw7b + "&adj7b=" + adjsw1b;
  var xhr = getXMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send(null);
}

function majEquipeService(){
  var cms = encodeURIComponent(document.getElementById('cms').innerHTML);
  var cmstel = encodeURIComponent(document.getElementById('cmstel').innerHTML);
  var cmsrenf = encodeURIComponent(document.getElementById('cmsrenf').innerHTML);
  var tech = encodeURIComponent(document.getElementById('tech').innerHTML);
  var techtel = encodeURIComponent(document.getElementById('techtel').innerHTML);
  var cdq1 = encodeURIComponent(document.getElementById('cdq1').innerHTML);
  var cdq2 = encodeURIComponent(document.getElementById('cdq2').innerHTML);
  var cdq3 = encodeURIComponent(document.getElementById('cdq3').innerHTML);
  var adj1 = encodeURIComponent(document.getElementById('adj1').innerHTML);
  var adj2 = encodeURIComponent(document.getElementById('adj2').innerHTML);
  var adj3 = encodeURIComponent(document.getElementById('adj3').innerHTML);

  var cdq1b = encodeURIComponent(document.getElementById('cdq1b').innerHTML);
  var cdq2b = encodeURIComponent(document.getElementById('cdq2b').innerHTML);
  var cdq3b = encodeURIComponent(document.getElementById('cdq3b').innerHTML);
  var adj1b = encodeURIComponent(document.getElementById('adj1b').innerHTML);
  var adj2b = encodeURIComponent(document.getElementById('adj2b').innerHTML);
  var adj3b = encodeURIComponent(document.getElementById('adj3b').innerHTML);

  var url = "fonctions.php?fctn=majEquipeService&cms=" 
  + cms + "&cmstel=" + cmstel + "&cmsrenf=" + cmsrenf + "&tech=" + tech + "&techtel=" + techtel
  + "&cdq1=" + cdq1 + "&cdq2=" + cdq2 + "&cdq3=" + cdq3 
  + "&adj1=" + adj1 + "&adj2=" + adj2 + "&adj3=" + adj3
  + "&cdq1b=" + cdq1b + "&cdq2b=" + cdq2b + "&cdq3b=" + cdq3b
  + "&adj1b=" + adj1b + "&adj2b=" + adj2b + "&adj3b=" + adj3b;
  var xhr = getXMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send(null);
}

