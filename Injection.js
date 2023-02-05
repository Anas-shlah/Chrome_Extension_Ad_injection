chrome.storage.sync.get(["situation"], function (result) {
  var situationNow = result.situation;
  var item = document.getElementsByClassName("Hide-ads");
  var floatingbox = document.getElementsByClassName("divFBC");

  if (situationNow == "on") {
    if (item.length == 0) {
      const sens = document.createElement("script");
      sens.src = chrome.runtime.getURL("sens.js");
      document.body.appendChild(sens);
    } else {
      item[0].style.display = "contents";
    }
    if (floatingbox.length == 0) {
      const floatingbox = document.createElement("script");
      floatingbox.src = chrome.runtime.getURL("adsfloatingbox.js");
      document.body.appendChild(floatingbox);
    } else {
      floatingbox[0].style.visibility = "visible";
    }
  } else if (situationNow == "of") {
    item[0].style.display = "none";
    floatingbox[0].style.visibility = "hidden";
  } else {
    console.log("error");
  }
});
