var btn = document.getElementById("more");

btn.addEventListener("mouseenter", function () {
  btn.classList.add("change");
});
btn.addEventListener("mouseleave", function () {
  btn.classList.remove("change");
});

var featureLi = document.getElementById("feature");
var companyLi = document.getElementById("company");
var dropDownMenue1 = document.getElementsByClassName("dropdown1")[0];
var dropDownMenue2 = document.getElementsByClassName("dropdown2")[0];
var arrow1 = document.getElementById("arrow1");
var arrow2 = document.getElementById("arrow2");


featureLi.addEventListener("mouseenter", function () {
  dropDownMenue1.style.visibility = "visible";
  arrow1.src = "./images/icon-arrow-up.svg"
});
featureLi.addEventListener("mouseleave", function () {
  dropDownMenue1.style.visibility = "hidden";
  arrow1.src = "./images/icon-arrow-down.svg"
});

companyLi.addEventListener("mouseenter", function () {
  dropDownMenue2.style.visibility = "visible";
  arrow2.src = "./images/icon-arrow-up.svg"
});
companyLi.addEventListener("mouseleave", function () {
  dropDownMenue2.style.visibility = "hidden";
  arrow2.src = "./images/icon-arrow-down.svg"

});


var openMenue = document.getElementsByClassName("openMenue")[0];
var closeMenue = document.getElementsByClassName("closeMenue")[0];
var section = document.getElementsByTagName("section")[0];

closeMenue.addEventListener("click", function () {
  section.style.width = "0";
  closeMenue.style.visibility = "hidden";
});
openMenue.addEventListener("click", function () {
  section.style.width = "50%";
  closeMenue.style.visibility = "visible";
});

var featureSide = document.getElementById("featureSide");
var companySide = document.getElementById("companySide");

var dropdown1Side = document.getElementsByClassName("dropdown1Side")[0];
var dropdown2Side = document.getElementsByClassName("dropdown2Side")[0];

var arrow1Side = document.getElementById("arrow1Side");
var arrow2Side = document.getElementById("arrow2Side");


featureSide.addEventListener("click", function () {
  if (dropdown1Side.style.display === "block") {
    dropdown1Side.style.display = "none";
    this.style.marginBottom = "30px";
    arrow1Side.src = "./images/icon-arrow-down.svg";
    if (dropdown2Side.style.display === "block") {
      dropdown2Side.style.top = "70px";
    }

  }
  else {
    dropdown1Side.style.display = "block";
    arrow1Side.src = "./images/icon-arrow-up.svg"
    this.style.marginBottom = "160px";
    if (dropdown2Side.style.display === "block") {
      dropdown2Side.style.top = "200px";
    }
  }
})
companySide.addEventListener("click", function () {
  if (dropdown2Side.style.display === "block") {
    dropdown2Side.style.display = "none";
    this.style.marginBottom = "30px";
    arrow2Side.src = "./images/icon-arrow-down.svg"

  }
  else {
    dropdown2Side.style.display = "block";
    arrow2Side.src = "./images/icon-arrow-up.svg";
    this.style.marginBottom = "120px";
    if (dropdown1Side.style.display === "block") {
      dropdown2Side.style.top = "200px";
    }
    else {
      dropdown2Side.style.top = "70px";
    }

  }
})

