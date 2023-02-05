let b = document.getElementById("submitRating");
let radios = document.getElementsByName('rating');
let span = document.getElementById("urating");
let formSection = document.getElementById("form_section");
let thankSection = document.getElementById("thanks_section");
let = document.getElementById("main");
let r = "";



b.addEventListener("click", () => {

    for (let i = 0, length = radios.length; i < length; i++) {

        if (radios[i].checked) {

            r = radios[i].value;
            span.innerHTML = radios[i].value;

            break;
        }

        main.style.cssText = `animation: slide .5s ease 200ms forwards;
        -webkit-animation: slide 1s ease 100ms forwards;`;

        thankSection.style.display = "block";

        formSection.style.display = "none";

    }

});