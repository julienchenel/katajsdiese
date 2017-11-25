console.log("OK")

function myFunction() {
	//Récupère le contenu dans le champs de texte dont l'Id est "myNumber"
    var x = document.getElementById("myNumber").value;
    //Calcule la longueur de la chaîne
    var taille = x.length;
	//Si la longueur de la chaîne est inférieure à 5, une alerte est exécutée
    if (taille < 5) {
        alert("Votre numéro doit comporter au moins 5 caractères")
    } else {

    	//On enlève de la variable "x" les 4 derniers caractères en tenant compte de sa taille 
        var visible = x.substr(0, [taille - 4]);
        // le résultat apparait dans champs de texte dont l'id est "display"
        document.getElementById("display").value = visible + ("####");
        // le résultat apparait directement sur la page (paragraphe dont l'id est "traitement"
        document.getElementById("traitement").innerHTML = visible + ("####");
    }
}