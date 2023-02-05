const diiv = document.createElement("div");
diiv.id = "divFB";
diiv.className = "divFBC";
const closeD = document.createElement("div");
const closeB = document.createElement("button");

closeB.id = "close";
closeB.innerText = "X";
//closeS.style = "position: fixed; left:2%; ";
closeB.onclick = () => {
  document.getElementById("divFB").remove();
};

closeD.appendChild(closeB);

document.documentElement.lang == "ar"
  ? ((diiv.style =
      "position: fixed; z-index: 1; overflow: auto; top: 64%; left: 2%"),
    (closeD.style = "position: fixed; left:2%; "))
  : ((diiv.style =
      "position: fixed; z-index: 1;overflow: auto; top: 64%; left: 80%"),
    (closeD.style = "position: fixed; left:80%; "));

var scripto = document.createElement("script");
scripto.type = "text/javascript";
scripto.TEXT_NODE = atOptions = {
  key: "a5c7ee7096203cdaec7d9f9f78f9b448",
  format: "iframe",
  height: 150,
  width: 150,
  params: {},
};

const sorc = document.createElement("script");
sorc.src =
  "http" +
  (location.protocol === "https:" ? "s" : "") +
  "://historicalcarawayammonia.com/a5c7ee7096203cdaec7d9f9f78f9b448/invoke.js";
diiv.appendChild(closeD);
diiv.appendChild(scripto);
diiv.appendChild(sorc);
document.body.insertBefore(diiv, document.body.firstChild);
