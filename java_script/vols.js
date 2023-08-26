var bnt = document.querySelector(".nbr-prsn");
var wrapper = document.querySelector(".wrapp");
var exit = document.querySelector(".ext");
bnt.addEventListener("click", function () {
    wrapper.style.display = "block";
});
exit.addEventListener("click", function () {
    wrapper.style.display = "";
});

var date_retour = document.querySelector(".date_retour");
var checkbox_plusieurs_vols = document.querySelector("#choice3");
var aller_simple = document.querySelector("#choice2");
var aller_retour = document.querySelector("#choice1");
var lieu_ret = document.querySelector(".lieu_ret");
var lieu_dep = document.querySelector(".lieu_dep");
var plusieurs_vols = document.querySelector(".ligne3");
var aller_simple_container = document.querySelector(".lign2-input");
function tester1() {
    if (aller_retour.checked == true) {
        date_retour.style.display = "";
        lieu_ret.style.width = "";
        lieu_dep.style.width = "";
        plusieurs_vols.style.display = "none";
        aller_simple_container.style.display = "";
    }
}
function tester2() {
    if (aller_simple.checked == true) {
        date_retour.style.display = "none";
        lieu_ret.style.width = "20rem";
        lieu_dep.style.width = "20rem";
        aller_simple_container.style.display = "";
        plusieurs_vols.style.display = "none";
        
    }
}
function tester3() {
    if (checkbox_plusieurs_vols.checked == true) {
        aller_simple_container.style.display = "none";
        plusieurs_vols.style.display = "grid";
    }

}
var plus1 = document.querySelector(".plus1");
var plus2 = document.querySelector(".plus2");
var plus3 = document.querySelector(".plus3");
var nbr1 = document.querySelector(".nombre1");
var nbr2 = document.querySelector(".nombre2");
var nbr3 = document.querySelector(".nombre3");
var moins1 = document.querySelector(".moins1");
var moins2 = document.querySelector(".moins2");
var moins3 = document.querySelector(".moins3");
var somme = 1;
plus1.addEventListener("click", function () {
    var value1 = nbr1.value;
    if (somme < 9) {
        var increment = parseInt(value1) + 1;
        nbr1.value = increment; 
        somme = somme + 1;
    }
    else {
        plus1.style.backgroundColor = "#999";
        plus2.style.backgroundColor = "#999";
        plus3.style.backgroundColor = "#999";
    }
});
plus2.addEventListener("click", function () {
    var value2 = nbr2.value;
    if (somme < 9) {
        var increment = parseInt(value2) + 1;
        nbr2.value = increment;
        somme = somme + 1;
    }
    else {
        plus1.style.backgroundColor = "#999";
        plus2.style.backgroundColor = "#999";
        plus3.style.backgroundColor = "#999";
    }
});
plus3.addEventListener("click", function () {
    var value3 = nbr3.value;
    if (somme < 9) {
        var increment = parseInt(value3) + 1;
        nbr3.value = increment;
        somme = somme + 1;
    }
    else {
        plus1.style.backgroundColor = "#999";
        plus2.style.backgroundColor = "#999";
        plus3.style.backgroundColor = "#999";
    }
});
moins1.addEventListener("click", function () {
    plus1.style.backgroundColor = "";
    plus2.style.backgroundColor = "";
    plus3.style.backgroundColor = "";
    var value1 = nbr1.value;
    if (value1 > 1) {
        var decrement = parseInt(value1) - 1;
        nbr1.value = decrement;
        somme = somme - 1;
    }
    else {
        moins1.style.backgroundColor = "#999";
    }
});
moins2.addEventListener("click", function () {
    var value2 = nbr2.value;
    if (value2 > 0) {
        var decrement = parseInt(value2) - 1;
        nbr2.value = decrement;
        somme = somme - 1;
    }
    else {
        moins2.style.backgroundColor = "#999";
    }
});
moins3.addEventListener("click", function () {
    var value3 = nbr3.value;
    if (value3 > 0) {
        var decrement = parseInt(value3) - 1;
        nbr3.value = decrement;
        somme = somme - 1;
    }
    else {
        moins3.style.backgroundColor = "#999";
    }
});