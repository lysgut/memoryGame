let botones = document.querySelectorAll(".card");
let mezclarBotton = document.getElementById("mezclar");
let combination = ['n','n']
let imagenes = [
    {
        url : "0",
        id : "0a",
        value : "0"
    },
    {
        url : "0",
        id : "0b",
        value : "0"
    },
    {
        url : "1",
        id : "1a",
        value : "1"
    },
    {
        url : "1",
        id : "1b",
        value : "1"
    },
    {
        url : "2",
        id : "2a",
        value : "2"
    },
    {
        url : "2",
        id : "2b",
        value : "2"
    },
    {
        url : "3",
        id : "3a",
        value : "3"
    },
    {
        url : "3",
        id : "3b",
        value : "3"
    },
    {
        url : "4",
        id : "4a",
        value : "4"
    },
    {
        url : "4",
        id : "4b",
        value : "4"
    },
    {
        url : "5",
        id : "5a",
        value : "5"
    },
    {
        url : "5",
        id : "5b",
        value : "5"
    },
    {
        url : "6",
        id : "6a",
        value : "6"
    },
    {
        url : "6",
        id : "6b",
        value : "6"
    },
    {
        url : "7",
        id : "7a",
        value : "7"
    },
    {
        url : "7",
        id : "7b",
        value : "7"
    },
]


mezclarBotton.addEventListener("click", () => {
    mix(imagenes)
    console.log(imagenes)

    botones.forEach(function(boton, i) {
        let asig = imagenes[i];
        boton.textContent = asig.url;
        boton.id = asig.id;
        boton.value = asig.value;
    });
});

function checkCombination(){
    if(combination[0] == "n" || combination[1] == "n" ){
    }
    else{
        if(combination[0] == combination[1]){
            alert("bien ahi")
            combination = ["n", "n"]
            return true
        }
        else {
            alert("mal ahi")
            combination = ["n", "n"]
            return false
        }
    }
}
function asignar(x){
    if(combination[0] == "n"){
        combination[1] = x
    }
    else{
        combination[0] = x
    }
}


function mix(arreglo) {
    arreglo.sort(function() {
        return Math.random() - 0.5;
    });
}

botones.forEach(function(boton) {
    boton.addEventListener("click", function() {
    asignar(boton.value)
    console.log(combination)
    if(checkCombination()){
        let valuePid = boton.value
        let boton1 = getElementById(valuePid + "a")
        let boton2 = getElementById(valuePid + "b")
        boton1.style.display = "none"
        boton2.style.display = "none"
    }

    });
});

