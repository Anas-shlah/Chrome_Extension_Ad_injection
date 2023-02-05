// this good native ads

const divads = document.createElement("div");
divads.className = "Hide-ads";
divads.id = "Hideadsid";
let scriptads = document.createElement("script");
scriptads.async = "async";

scriptads.src =
  "//historicalcarawayammonia.com/1cfee54725868a5482e9bcb7c6aaa10f/invoke.js";
const divadscontainer = document.createElement("div");
divadscontainer.className = "anasADS";
divadscontainer.id = "container-1cfee54725868a5482e9bcb7c6aaa10f";

divads.appendChild(scriptads);
divads.appendChild(divadscontainer);

document.body.insertBefore(divads, document.body.firstChild);
