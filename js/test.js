for (i = 0; i < cttLoadOPS.length; i++) {
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
                console.log("nb lignes == " + lignesNav.length);
                console.log("nav.value == " + navContent);
                document.getElementById("textNAV").value = navContent;