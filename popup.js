var situationNow;

//chrome.storage.sync.set({ situation: anas });

chrome.storage.sync.get(["situation"], function (result) {
  situationNow = result.situation;

  if (situationNow == "on") {
    btn[0].style.display = "none";
    texth1.innerText = "Connected to ads";
  } else if (situationNow == "of") {
    btn[0].style.display = "contents";
    texth1.innerText = "Not connected to ads";
  } else {
    console.log("error");
  }
});

var length = document.getElementsByClassName("Hide-ads").length;
var item = document.getElementsByClassName("Hide-ads");

const btn = document.getElementsByClassName("not-connection-btn");
const texth1 = document.getElementById("info-box");

async function connectOn() {
  btn[0].style.display = "none";
  texth1.innerText = "Connected to ads";
  chrome.storage.sync.set({ situation: "on" }, function () {
    chrome.storage.sync.get(["situation"], function (result) {
      situationNow = result.situation;
    });
  });
  for (i = 0; i++, i < length; ) {
    item[i].style.display = "contents";
  }
  //let [tab] = getTabId();
  /*
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab, allFrames: true },
    function: setPageBackgroundColor,
  });*/
}

async function connectOf() {
  btn[0].style.display = "contents";
  texth1.innerText = "Not connected to ads";
  chrome.storage.sync.set({ situation: "of" }, function () {
    chrome.storage.sync.get(["situation"], function (result) {
      situationNow = result.situation;
    });
  });
  for (i = 0; i++, i < length; ) {
    item[i].style.display = "none";
  }
  /*
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab, allFrames: true },
    function: setPageBackgroundColor,
  });*/
}

const btn2 = document.getElementsByClassName("connection-btn");

btn[0].addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  btn[0].style.display = "none";
  texth1.innerText = "Connected to ads";
  chrome.storage.sync.set({ situation: "on" }, function () {
    chrome.storage.sync.get(["situation"], function (result) {
      situationNow = result.situation;
    });
  });
  /*
  for (i = 0; i++, i < length; ) {
    item[i].style.display = "contents";
  }*/

  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    files: ["Injection.js"],
  });
});

btn2[0].addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  btn[0].style.display = "contents";
  texth1.innerText = "Not connected to ads";
  chrome.storage.sync.set({ situation: "of" }, function () {
    chrome.storage.sync.get(["situation"], function (result) {
      situationNow = result.situation;
    });
  });

  /*
  for (i = 0; i++, i < length; ) {
    item[i].style.display = "none";
  }*/

  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    files: ["Injection.js"],
  });
});

const inputuser = document.getElementById("inputuser");
const button = document.getElementById("saveuser");
var userNmes = "";
chrome.storage.sync.get(["userName"], function (result) {
  userNmes = result.userName;

  if (userNmes != "") {
    inputuser.value = userNmes;
  }
});
button.addEventListener("click", () => {
  //console.log(inputuser.value);
  chrome.storage.sync.set({ userName: inputuser.value });
  chrome.storage.sync.get(["data"], function (result) {
    console.log(result.data);
  });
});
