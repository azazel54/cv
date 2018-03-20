/**
 * Création d'une image point par point, chaque point est représenté par une DIV de 20px par 20px
 * Utiliser une boucle for
 */
document.addEventListener("DOMContentLoaded", function (event) {


    var picture = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,2,2,1,1,1,0,0,0,0,0,1,1,1,2,0,0,2,1,1,1,0,0,0,0,3,3,2,0,3,3,0,2,3,3,0,0,0,0,3,3,2,0,3,3,0,2,3,3,0,0,0,0,1,1,1,2,0,0,2,1,1,1,0,0,0,0,1,1,1,1,2,2,1,1,1,1,0,0,0,0,1,1,3,1,1,1,1,3,1,1,0,0,0,0,1,1,1,3,3,3,3,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,4,1,1,1,1,1,1,1,1,4,0,0,0,0,1,4,4,4,4,4,4,4,4,1,0,0,0,0,1,1,4,4,4,4,4,4,1,1,0,0,0,0,1,1,4,4,4,4,4,4,1,1,0,0,0,0,1,4,4,4,4,4,4,4,4,1,0,0,0,3,3,4,4,4,4,4,4,4,4,3,3,0,0,0,3,4,4,4,4,4,4,4,4,3,0,0,0,0,0,0,3,3,0,0,3,3,0,0,0,0,0,0,0,3,3,3,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    var colors = [
        "#ffffff", // blanc 0
        "#ffdf04", // jaune 1
        "#808080", // gris 2
        "#000000", // noir 3
        "#0026ff", // bleu 4
    ];

    // créer une boucle qui va parcourir tous les éléments du tableau

    for (var i = 0; i < picture.length; i++) {
        var colorIndex = picture[i];
        //console.log (obj);

        // chaque élément du tableau correspond à l'indice d'une couleur
        // il faut récupérer la couleur correspondante
        var color=colors[colorIndex];
        console.log(color);
        // créer une div dont la couleur de fond sera cette couleur
        var cell=document.createElement('div');
        var picture1=document.getElementById('picture1');
        picture1.appendChild(cell);
        // et ajouter cette div à #picture1
        cell.style.backgroundColor=color;
    }


});
