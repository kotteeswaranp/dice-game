var randomnumber1 = Math.floor(Math.random() * 6) + 1;

var randomdicimage = "dice" + randomnumber1 + ".png";

var randomimagescore = "images/" + randomdicimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimagescore);


var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomimagescore2 = "images/dice" + randomnumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", randomimagescore2)


if (randomnumber1 > randomnumber2)
{
    document.querySelector("h1").innerHTML = " play one wins";
}
else if (randomnumber2 > randomnumber1)

{
    document.querySelector("h1").innerHTML = " play two wins";
}

else{
    document.querySelector("h1").innerHTML ="Draw!";
}