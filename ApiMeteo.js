let ville = "Paris";
RecevoirTemperature(ville)
let changer = document.querySelector("#changer");
changer.addEventListener("click",()=>{
    ville = prompt("Saisie la ville")
    RecevoirTemperature(ville)
})

function RecevoirTemperature(ville){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric'
let requete = new XMLHttpRequest();

requete.open("GET",url)

requete.responseType = "json"; // En retour nous attendons du JSON

// envoyer la requete en HTTP
requete.send();

// Dès qu'on recoit une réponse , cette fonction est executée

requete.onload = function(){
    //vérifi l'état de notre requete si elle à était réussi
    // l'état actuelle de notre requete === l'état normal
    if (requete.readyState === XMLHttpRequest.DONE){
        if(requete.status === 200){
        // stocker la réponse de l'API dans une valeur
        let reponse = requete.response;
        let tempera = reponse.main.temp;
        let nomVille = reponse.name
        document.querySelector("#ville").textContent = ville;
        document.querySelector("#temperature_label").textContent = tempera;  
        document.querySelector("#ville").textContent = nomVille
    }else{alert("Un probleème est intervenu , merci de revenir plus tard")
}
}
console.log("Prix actualisé")
}
}



