const productsList = [
    {code: 'livre', name: 'Fondation foudroyée', price: 10, total: 0},
    {code: 'console', name: 'PS3', price: 200, total: 0},
    {code: 'fleur', name: 'Orchidée', price: 20, total: 0}
];

/*
 * fonction pour ajouter un produit
 */
function addProduct(code) {

    for (var i = 0; i < productsList.length; i++) {

        // je récupère le produit  i
        const product = productsList[i];

        // est ce que le produit à le code demandé
        if (product.code === code && product.total<5) {
            product.total++;
        }

    }

    console.table(productsList);


    displayCaddie();
}

/**
 * fonction pour supprimer un produit
 */
function deleteProduct(code) {

    for (var i = 0; i < productsList.length; i++){

        // modifier la propriété nombre de cet objet
        // pour représenter le fait d'avoir un élément de moins sélectionné
        const deleted = productsList[i];

        if (deleted.code === code && deleted.total>0){
            deleted.total--;
        }

    }

    console.clear(); //rafraichi la console à chaque fois que l'on relance la fonction
    console.table(productsList);

    displayCaddie();
}


/**
 * fonction pour afficher la liste des produits
 */
function displayCaddie() {
    var list = "";

    for (var i = 0; i < productsList.length; i++){
        var recup=productsList[i];

        list=list+" "+recup.total+" "+recup.name;
        list=list+",";
    }

    document.getElementById("resultat").innerHTML = list;
}