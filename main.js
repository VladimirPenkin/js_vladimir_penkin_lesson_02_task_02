function beforeDiv (div) {

let myDiv = document.getElementById("two");
myDiv.insertAdjacentHTML("beforeBegin", "<div id=two_first></div>");
myDiv.id = "two_second";

let twoFirst = document.getElementById("two_first");
twoFirst.innerHTML = "two_first"

let twoSecond = document.getElementById("two_second");
twoSecond.innerHTML = "two_second"

}

