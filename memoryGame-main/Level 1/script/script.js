let botones = document.querySelectorAll(".card");
let mezclarBotton = document.getElementById("mezclar");
let sameChecking  = ['n', 'n']
let combination= ['n', 'n']
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
    }
  
]

function mix(arreglo) {
    arreglo.sort(function() {
        return Math.random() - 0.5;
    });
}

mezclarBotton.addEventListener("click", () => {
    mix(imagenes)
    botones.forEach(function(boton, i) {
        let asig = imagenes[i];
        boton.textContent = asig.url;
        boton.id = asig.id;
        boton.value = asig.value;
    });
});

function asignarCheck(id, value){
    if(sameChecking [0] == "n"){
        sameChecking [0] = id
    }
    else{
        sameChecking [1] = id
    }

    if(combination[0] == "n"){
        combination[0] = value
    }
    else{
        combination[1] = value
    }
}

function checkcombination(){
    if(combination[0] == combination[1]){
        combination = ["n", "n"]
        sameChecking  = ["n", "n"]
        return true
    }
    else {
        combination = ["n", "n"]
        sameChecking  = ["n", "n"]
        return false
    }
}

function sameCheck(){
    if((sameChecking [0] && sameChecking [1]) != 'n' ) {
        if(sameChecking [0] === sameChecking [1]) {
            return false
        }
        else{
            return true
        }
    }
}

botones.forEach(function(boton) {
    boton.addEventListener("click", function() {
        asignarCheck(boton.id, boton.value)
        let valuePid = boton.value
        let boton1 = document.getElementById(valuePid + "a")
        let boton2 = document.getElementById(valuePid + "b")
        if(sameCheck()){
            if(checkcombination()){
                boton1.style.opacity = "0"
                boton2.style.opacity = "0"
                boton1.disabled = true
                boton2.disabled = true
            }
        }
    });
});