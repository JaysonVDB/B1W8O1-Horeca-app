//Kingston van Laak

//var 
    var prijsDrank = 0;
    var prijsEten = 0;



  //grote stop while
  while(welken != "stop"){

              var welken = prompt("Wilt u een drankje of een snackje toevoegen aan uw bestelling? Vul dan 'drank' of 'snack' in. als u 'stop' invult gaat u naar uw overzicht.");

              while (welken != "drank" && welken != "stop" && welken != "snack"){

                alert("U heeft een ongeldige invoer ingevuld. Uw bestelling kan niet toegevoegd worden.")

              

              welken = prompt("Wilt u drank of een snack toevoegen aan uw bestelling?")
        }
            


    //drank hoofdstuk
    while(welken == "drank"){

        var soort = prompt("Wilt u Wijn,Bier of Fris?");

        while (soort != "wijn" && soort != "bier" && soort != "fris"){

                  alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.")

                  soort = prompt("Wilt u Wijn,Bier of Fris?")
              }

                  if(soort == "bier"){
            	aantalBier = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?");
            	prijsDrank = prijsDrank + 2 * aantalBier
                  }

                  if(soort == "wijn"){
            	aantalWijn = prompt("Hoeveel wijntjes wilt u toevoegen aan uw bestelling?");
            	prijsDrank = prijsDrank + 4 * aantalWijn
                  }

                  if(soort == "fris"){
            	aantalFris = prompt("Hoeveel frisjes wilt u toevoegen aan uw bestelling?");
            	prijsDrank = prijsDrank + 1 * aantalFris
                  }
                      



                  welken = prompt("Wilt u drank of snacks toevoegen aan uw bestelling?");
        
              }

  //snack ding
  if (welken == "snack"){

	    var bitterbal = prompt("wilt u 8 of 16 bitterballen?")

	    while (bitterbal != "8" && bitterbal != "16"){

	     	alert("U kunt alleen een keuze maken tussen 8 en 16 bitterballen. De snacks zijn niet aan de bestelling toegevoegd.");
            
            bitterbal = prompt("wilt u 8 of 16 bitterballen?");
	 }

	        if(bitterbal == "8"){
            	aantalSchalen = prompt("hoeveel schalen van 8 porties wilt u?");
            	prijsEten = prijsEten + 6 * aantalSchalen
            }

              if(bitterbal == "16"){
            	 aantalSchalen = prompt("hoeveel schalen van 16 porties wilt u?");
            	 prijsEten = prijsEten + 11 * aantalSchalen
              }

      }
}

//stop code
if(welken == "stop"){
            document.write("<h2>Friettent je wil nie weten</h2>");
            document.write("<h3>Hier is uw bon met alles wat u besteld hebt.</h3>");

      if(soort == "wijn"){

          document.write("U heeft " +aantalWijn)
          document.write("x " +soort)
          document.write(" besteld en is in totaal: " +prijsDrank)
          document.write(",-");
          document.write("<br>");

   }    if(soort == "bier"){

          document.write("U heeft " +aantalBier)
          document.write("x " +soort)
          document.write(" besteld en is in totaal: " +prijsDrank)
          document.write(",-");
          document.write("<br>");

   }
      if(soort == "fris"){

          document.write("U heeft " +aantalFris)
          document.write("x " +soort)
          document.write(" besteld, het totaal is: " +prijsDrank)
          document.write(",-");
          document.write("<br>");

   }



      if(bitterbal == "8"){
        
          document.write("U heeft " +bitterbal)
          document.write(" bitterballen genomen en " +aantalSchalen)
          document.write(" schalen besteld, het totaal is: " +prijsEten)
          document.write(",-");
          document.write("<br>");
        
   }  

      if(bitterbal == "16"){
        
          document.write("U heeft " +bitterbal)
          document.write(" bitterballen genomen en " +aantalSchalen)
          document.write(" schalen besteld, het totaal is: " +prijsEten)
          document.write(",-");
          document.write("<br>");
        
   }

          document.write('<hr style="border-top: dotted 2px;" />')
          document.write("Alles in totaal kost: " +((prijsEten) + (prijsDrank)))
          document.write(",-");

}






	  

   
