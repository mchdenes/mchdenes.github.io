async function getch(url){
    const response = await fetch(url);
    const json_promise = await response.json();
    return json_promise;
}

async function uj_vicc(){
    let data = await getch("https://v2.jokeapi.dev/joke/Any");
    if(data.type === "twopart"){
        setup.innerHTML = data.setup;
        delivery.innerHTML = data.delivery;
    } else {
        setup.innerHTML = data.joke;
        delivery.innerHTML = "";
    }
}

const gomb = document.getElementById("gomb");
const setup = document.getElementById("setup");
const delivery = document.getElementById("delivery");
gomb.addEventListener("click", uj_vicc);