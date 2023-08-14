let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImage1 = "./dice" + randomNumber1 + ".png";
let randomImage2 = "./dice" + randomNumber2 + ".png";

let image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImage1);
let image2 = document.querySelectorAll("img")[2];
image2.setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector(".result").innerHTML = "😎 Player 1 is winner";
    document.querySelector(".result").style.backgroundColor = "blue";

} else if (randomNumber1 < randomNumber2) {
    document.querySelector(".result").innerHTML = "😻 player 2 is winner";
    document.querySelector(".result").style.backgroundColor = "purple";

} else {
    document.querySelector(".result").innerHTML = "😊 draw";
    document.querySelector(".result").style.backgroundColor = " green";
}