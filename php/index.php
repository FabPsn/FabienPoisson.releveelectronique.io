<!Doctype html>
<html>
  <head>
    <meta charset = "utf-8"/>
    <link rel = "stylesheet" href = "design.css"/>
    <!--[if lt IE 9]>
    <!--<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>-->
    <![endif]-->
    <title>FICHE RELEVE DE QUART</title>
  </head>
  <body spellcheck="false"  onload="javascript:document.getElementById('manautDefaut').selected='selected'">
  <header>
  	<table class="tableTitre">
  		<tr >
  			<td align="left" width="200px" ><img src="logo_Jobourg.jpeg" class="grid1" alt="CROSS Jobourg" height="150" width="150"></td>
  			<td valign="middle"><h1 id="champDate" class="grid">date</h1></td>
  			<td>
  				<h4 id="heureQuart" class="gridQuart">Quart</h4>
  				<input id="gridQuart" type="button" value="Changer de Quart" onclick="Quart()">
  			</td>
  			<td><h4 id="quartier" style="display:none">quartier</h4>
  			<h2 style="display:none" id="date">date</h2></td>
  			<td >
  				<img src="options.png" class="gridOptions" alt="options" onclick="Test()" height="25px" width="25px" >
	        <nav id="navigation" class="grid2" role="navigation" style="display:none">
	        <ul class="nav">
	          <li><a style="text-decoration:underline orange;" onclick="vueOPS()">Vue OPS</a></li>
	          <li><a style="text-decoration:underline orange;" onclick="vueNAV()">Vue NAV</a></li>
	          <li><a style="text-decoration:underline orange;" onclick="vueCMS()">Vue CMS</a></li>
	          <!--<li><a target="_blank" href="test1.php" style="text-decoration:none;color:black;">Vue PDF</a></li>-->
	        </ul>       
	      	</nav>
	        <h2 style="display:none" id="champHeure">heure</h2>
	        <h2 style="display:none" id="switchHeure">heure</h2>	      
	      </td>
  		</tr>
    </table>
    <table>
      <caption>EQUIPE DE SERVICE</caption>
      <tr>
        <th style="width:30%">CMS:</th>
        <th style="width:5%">Tel :</th>
        <th style="width:30%">CMS Renfort :</th>
        <th style="width:30%">Technicien de service :</th>
        <th style="width:5%">Tel :</th>
      </tr>
      <tr>
        <td contenteditable="true" style="height:30%" id="cms" ></td>
        <td contenteditable="true" style="height:30%" id="cmstel" ></td>
        <td contenteditable="true" style="height:30%" id="cmsrenf" ></td>
        <td contenteditable="true" style="height:30%" id="tech" ></td>
		    <td contenteditable="true" style="height:30%" id="techtel" ></td>
      </tr>
    </table>
    <table id="nav">
      <caption>EQUIPES DE QUART NAV</caption>
      <tr>
        <th></th>
        <th style="width:33%" id="quart1">07H-11H</th>
        <th style="width:33%" id="quart2">11H-13H</th>
        <th style="width:33%" id="quart3">13H-16H</th>
        <th class="hidden" id="quart4">16H-19H</th>
        <th class="hidden" id="quart5">19H-23H</th>
        <th class="hidden" id="quart6">23H-03H</th>
        <th class="hidden" id="quart7">03H-07H</th>
      </tr>
      <tr>
        <td>CDQ</td>
        <td contenteditable="true" style="width:30%" id="cdq1"></td>
        <td contenteditable="true" style="width:30%" id="cdq2"></td>
        <td contenteditable="true" style="width:30%" id="cdq3"></td>
        <td id="cdq4" class="hidden"></td>
        <td id="cdq5" class="hidden"></td>
        <td id="cdq6" class="hidden"></td>
        <td id="cdq7" class="hidden"></td>
      </tr>
      <tr>
        <td>ADJ</td>
        <td contenteditable="true" id="adj1"></td>
        <td contenteditable="true" id="adj2"></td>
        <td contenteditable="true" id="adj3"></td>
        <td id="adj4" class="hidden"></td>
        <td id="adj5" class="hidden"></td>
        <td id="adj6" class="hidden"></td>
        <td id="adj7" class="hidden"></td>
      </tr>
      <tr>
      <td colspan="4"><input type="button" value="Switcher equipe de service" onclick="switchEDQ()"/></td>
      </tr>
    </table>
    <table id="ops">
      <caption>EQUIPES DE QUART OPS</caption>
      <tr>
        <th></th>
        <th style="width:33%" id="quar1">07H-11H</th>
        <th style="width:33%" id="quar2">11H-13H</th>
        <th style="width:33%" id="quar3">13H-16H</th>
        <th class="hidden" id="quar4">16H-19H</th>
        <th class="hidden" id="quar5">19H-23H</th>
        <th class="hidden" id="quar6">23H-03H</th>
        <th class="hidden" id="quar7">03H-07H</th>
      </tr>
      <tr>
        <td>CDQ</td>
        <td contenteditable="true" style="width:30%" id="cdq1b"></td>
        <td contenteditable="true" style="width:30%" id="cdq2b"></td>
        <td contenteditable="true" style="width:30%" id="cdq3b"></td>
        <td id="cdq4b" class="hidden"></td>
        <td id="cdq5b" class="hidden"></td>
        <td id="cdq6b" class="hidden"></td>
        <td id="cdq7b" class="hidden"></td>
      </tr>
      <tr>
        <td>ADJ</td>
        <td contenteditable="true" id="adj1b"></td>
        <td contenteditable="true" id="adj2b"></td>
        <td contenteditable="true" id="adj3b"></td>
        <td id="adj4b" class="hidden"></td>
        <td id="adj5b" class="hidden"></td>
        <td id="adj6b" class="hidden"></td>
        <td id="adj7b" class="hidden"></td>
      </tr>
      <tr>
      <td colspan="4"><input type="button" value="Switcher equipe de service" onclick="switchEDQ()"/></td>
      </tr>
    </table>
    <input class="MAJ" type="button" value="ENREGISTRER LE TABLEAU DE SERVICE" onclick="majEquipeService()" />
  </header>

  <section id="9" class="opac">
    <h2 onclick="aff_div('devneuf');">Operation en cours</h2>
    <div id="devneuf">
    	<table id="pol" class="tableTitre">
    	<tr>
    		<td width="100%">
    			<textarea class="OPS1" style="width:100%" id="textOP" cols="1" rows="6" placeholder="Nouvelle OPS/POL" onblur="majOPSTextarea()"></textarea>
    		</td>
    		<td width="auto"> 
    			<table id="proOps" class="tableTitre">
    				<tr>
    					<td>
    						Prochaine OPS :
    					</td>
    					<td><input class="OPS1" type="number" id="numOPS" value="1" title="input1"/>
    					</td>
    					<td>
    						<input type="button" class="OPS1" value="Nouvelle OPS" id="newOP" onclick="majNextOPS()" />
    					</td>
    				</tr>
			  	</table>
			  	<table id="proPOL" class="tableTitre">
			  		<tr>
			  			<td>
			  				Prochaine POL :
			  			</td>
			  			<td>
			  				<input class="OPS1" type="number" id="numPOL" value="1" title="input1"/>
			  			</td>
			  			<td>
			  				<input type="button" class="OPS1" value="Nouvelle POL" id="newPOL" onclick="majNextPOL()"/>
			  			</td>
			  		</tr>
		    	</table>
		    </td>
    	</tr>
		</table>		    
		<table id="pv"  class="tableTitre">
			<tr>
				<td width="100%">
					<textarea class="NAV1" style="width:100%" id="textNAV" cols="1" rows="6" placeholder="Nouveau MAS OMI/PV" onblur="majNAVTextarea()"></textarea>
				</td>
				<td>
					 <table id="proMas" class="tableTitre">
					 	<tr>
					 		<td>
					 			 Prochain MAS OMI :
					 		</td>
					 		<td>
					 			 <input class="NAV1" type="number" id="numMAS" value="1" title="input1"/>
					 		</td>
					 		<td>
					 			<input type="button" class="NAV1" value="Nouveau MAS OMI" id="newNAV" onclick="majNextNAV()"/>
					 		</td>
					 	</tr>
				  </table>
				  <table id="proPV" class="tableTitre">
				  	<tr>
				  		<td> Prochain PV :</td>
				  		<td><input class="NAV1" type="number" id="numPV" value="1" title="input1"/></td>
				  		<td><input type="button" class="NAV1" value="Nouveau PV" id="newPV" onclick="majNextPV()"/></td>
				  	</tr>		    			    
			    </table>
				</td>
			</tr>	   
	    </table>
    </div>
  </section>

  <!-- Alertes aero -->
  <section id="3" class="opac">
    <h2 OnClick="aff_div('devtrois');">MOYENS AERONAUTIQUES</h2>
    <div id="devtrois">
      <table>
        <thead>
          <tr>
            <th colspan="2" >HELICOPTERES</th>
            <th>OBSERVATIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td  style="font-weight:bold;width:auto">Cyclone Rescue</td>
            <td id="altAero0"  contenteditable="true"></td>
            <td id="altAero0Obs"  contenteditable="true"></td>
          </tr>
          <tr>
            <td style="font-weight:bold">Dragon 50</td>
            <td id="altAero1" contenteditable="true"></td>
            <td id="altAero1Obs" contenteditable="true"></td>
          </tr>
					<tr>
            <td style="font-weight:bold">Dragon 76</td>
            <td id="altAero2" contenteditable="true"></td>
            <td id="altAero2Obs" contenteditable="true"></td>
          </tr>
          <tr>
            <td style="font-weight:bold">Douanes LH</td>
            <td id="altAero3" contenteditable="true"></td>
            <td id="altAero3Obs" contenteditable="true"></td>
          </tr>
          <tr>
            <td style="font-weight:bold">Gend 35</td>
            <td id="altAero4" contenteditable="true"></td>
            <td id="altAero4Obs" contenteditable="true"></td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th colspan="2" >AVIONS</th>
            <th>OBSERVATIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="font-weight:bold;width:10%">AIR SEARCH ONE</td>
            <td id="altAero5" style="width:30%" contenteditable="true"></td>
            <td id="altAero5Obs" contenteditable="true"></td>
          </tr>
          <tr>
            <td style="font-weight:bold">Falcon 50</td>
            <td id="altAero6" contenteditable="true"></td>
            <td id="altAero6Obs" contenteditable="true"></td>
          </tr>
          <tr>
            <td style="font-weight:bold">ATL 2</td>
            <td id="altAero7" contenteditable="true"></td>
            <td id="altAero7Obs" contenteditable="true"></td>
          </tr>				
        </tbody>
       </table>
      <input class="MAJ" type="button" value="Enregistrer moyens aeronautiques" onclick="majAltAero();" />
    </div>
  </section>

  <!-- Moyens indisponibles -->
  <section id="4" class="opac">
    <h2 OnClick="aff_div('devquatre');">Autres Moyens</h2>
    <div id="devquatre">
      <table>
        <caption>Moyens indisponibles</caption>
        <thead>
          <tr>
            <th>MOYEN</th>
            <th>CAUSE</th>
            <th>DELAI</th>
            <th></th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td><input type="text" class="indispoCross" id="indispoCOmoy" title="input1"/></td>
            <td><input type="text" class="indispoCross" id="indispoCOcause" title="input1"/></td>
            <td><input type="text" class="indispoCross" id="indispoCOdelai" title="input1"/></td>
            <td align="center" width="30px" ><input type="image" src="ajouter.gif" alt="ajouter" onclick="ajoutIndispoCO();"/></td>
          </tr>
        </tfoot>
        <tbody id="affIndispoCO">
        </tbody>
      </table>

      <table class="previmer">
        <caption>Prevision activité mer</caption>
        <thead>
          <tr>
            <th style="width:100px">AUTORITE</th>
            <th style="width:100px">MOYEN *</th>
            <th>MISSION</th>
            <th style="width:30%">ZONE *</th>
            <th style="width:30%">OBSERVATIONS</th>
            <th style="width:60px">HD</th>
            <th style="width:60px">HPA</th>
            <th style="width:30px"></th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td><input type="text" class="previ" id="previMerAutorite" title="input1"/></td>
            <td><input type="text" class="previ" id="previMerMoyen" title="input1"/></td>
            <td><input type="text" class="previ" id="previMerMission" title="input1"/></td>
            <td><input type="text" class="previ" id="previMerZone" title="input1"/></td>
            <td><input type="text" class="previ" id="previMerObs" title="input1"/></td>
            <td><input type="text" class="previ" id="previMerHd" title="input1"/></td>
            <td><input type="text" class="previ" id="previMerHpa" title="input1"/></td>
            <td align="center" width="30px"><input type="image" src="ajouter.gif" alt="ajouter" onclick="ajoutPrevi('mer');"/></td>
          </tr>
        </tfoot>
        <tbody id="previmer">
        </tbody>
      </table>

      <table class="moyens"><thead>
      <caption>Moyens à la mer</caption>
          <tr>
            <th style="width:20%">Moyen</th>
            <th style="width:130px">POB</th>
            <th style="width:20%">ZONE</th>
            <th>ACTIVITE</th>
            <th style="width:60px">HD</th>
            <th style="width:60px">HPA</th>
            <th style="width:30px"></th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td><input type="text" class="moyEnAct" id="nom" title="input1"/></td>
            <td><input type="text" class="moyEnAct" id="pob" title="input1"/></td>
            <td><input type="text" class="moyEnAct" id="secteur" title="input1"/></td>
            <td><input type="text" class="moyEnAct" id="activite" title="input1"/></td>
            <td><input type="text" class="moyEnAct" id="hpd" title="input1"/></td>
            <td><input type="text" class="moyEnAct" id="hpa" title="input1"/></td>
            <td align="center" width="30px"><input type="image" src="ajouter.gif" alt="ajouter" onclick="ajoutMoyenSortit();"/></td>
          </tr>
        </tfoot>
        <tbody id="moyens_en_activite">
        </tbody>
      </table>

      
    </div>
  </section>

  <!-- Meteo -->
  <section id="2" class="opac">
    <h2 OnClick="aff_div('devdeux');">METEO / MAREES / COURANTS</h2>
    <div id="devdeux">
      <div class="meteo">
      	
      	<label for="temperature">T°C DST : </label>
      	<input type="number" name="temperature" step="0.1" value="0" style="width:50px" id="temperature">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      	<label for="coefficient" class="coeff">Coeff : </label>
      	<input type="text" name="coefficient" class="coeff" id="coefficient">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      	<label for="maree" class="maree">Maree Cherbourg : </label>
      	<textarea name="maree" id="maree" class="maree" rows="1"></textarea>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      	<textarea name="liens" id="liens" class="liens" style="display:none"></textarea>
      	<!-- <table id="lienView" ><tr><td></td></tr></table>
				  <input type="checkbox" id="switchL" onclick="ChangeView()"> Edition
    -->
      	<h3>Previsions</h3>
      	<table>
      		<tr style="font-weight:bold">
      			<td class="col" ></td>
      			<td>Large</td>
      			<td>Ouest</td>
      			<td>Est</td>
      		</tr>
      		<tr>
      			<td class="col" style="font-weight:bold">BMS</td>
      			<td><textarea rows="1" cols="1" id="BMS1"></textarea></td>
      			<td><textarea rows="1" cols="1" id="BMS2"></textarea></td>
      			<td><textarea rows="1" cols="1" id="BMS3"></textarea></td>
      		</tr>
      		<tr>
      			<td class="col" style="font-weight:bold">Vent Tendance</td>
      			<td><textarea id="VT1"></textarea></td>
      			<td><textarea id="VT2"></textarea></td>
      			<td><textarea id="VT3"></textarea></td>
      		</tr>
      		<tr>
      			<td class="col" style="font-weight:bold">Mer</td>
      			<td><textarea rows="1" cols="1" id="MER1"></textarea></td>
      			<td><textarea rows="1" cols="1" id="MER2"></textarea></td>
      			<td><textarea rows="1" cols="1" id="MER3"></textarea></td>
      		</tr>
      		<tr>
      			<td class="col" style="font-weight:bold">Visi</td>
      			<td><textarea rows="1" cols="1" id="Visi1"></textarea></td>
      			<td><textarea rows="1" cols="1" id="Visi2"></textarea></td>
      			<td><textarea rows="1" cols="1" id="Visi3"></textarea></td>
      		</tr>
      	</table>
      	<input class="MAJ" type="button" value="enregistrer le tableau météo" onclick="majTabMeteo()" />
      </div>
    </div>
  </section>

<!-- Manifestations nautique -->
  <section id="6" class="opac">
    <h2 OnClick="aff_div('devsix');">MANIFESTATIONS NAUTIQUES / PECHE / EVENEMENTS MAJEURS</h2>
    <div id="devsix">
      <table>
        <caption>Ajouter un événement</caption>
          <tr style="background-color:rgb(76, 76, 76);">
            <th >TYPE</th>
            <th class="manInf1" style="display: none;">DATE</th>
            <th class="manInf2" style="display: none;" id="nomManautpeche">NOM / INFO DIVERS</th>
            <th class="manInf3" style="display: none;">SECTEUR</th>
            <th class="manInf4" style="display: none;"></th><!--50px-->
          </tr>
          <tr>
            <td><select id="typeManaut">
              <option id="manautDefaut" selected="selected">TYPE</option>
              <option value="manaut">MANAUT</option>
              <option value="peche">PECHE</option>
              <option value="evenMaj">EVEN MAJEUR</option>
            </select></td>
            <td class="manInf1" style="display: none;"><input type="text" class="manaut" id="numManaut" title="input1"/></td>
            <td class="manInf2" style="display: none;"><input type="text" class="manaut" id="nomManaut" title="input1"/></td>
            <td class="manInf3" style="display: none;"><input type="text" class="manaut" id="sectManaut" title="input1"/></td>
            <td align="center" width="30px" class="manInf4" style="display: none;" ><input id="sendManaut" type="image" src="ajouter.gif" alt="ajouter"/></td>
          </tr>
      </table>
      <table id="manaut">
      </table>
      <table id="peche">
      </table>
      <table id="evenmaj">
      </table>
    </div>
  </section>
<!-- Technique -->
  <section id="7" class="opac">
    <h2 OnClick="aff_div('devsept');">TECHNIQUE</h2>
    <div id="devsept">
      <table>
        <caption>AVARIES</caption>
        <thead>
          <tr>
            <th>SYSTEME</th>
            <th>NATURE AVARIE</th>
            <th></th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td><input type="text" class="avarie" id="avarieSys" title="input1"/></td>
            <td><input type="text" class="avarie" id="avarieNature" title="input1"/></td>
            <td align="center" width="30px"><input type="image" src="ajouter.gif" alt="ajouter" onclick="ajoutAvarie();"/></td>
          </tr>
        </tfoot>
        <tbody id="avaries">
        </tbody>
      </table>
    </div>
  </section>
<footer>
</footer>
<script src = "switch.js"></script>
<script src = "fonctions.js"></script>
<script src = "js.js"></script>
<script src = "switchQuart.js"></script>
<script src = "js_affichage.js"></script>
<?php
include('fonctions.php');
?>
</body>
</html>