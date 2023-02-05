var situationNow;
chrome.storage.sync.get(["situation"], async function (result) {
  situationNow = result.situation;
  //var length = document.getElementsByClassName("Hide-ads").length;
  //var item = document.getElementsByClassName("Hide-ads");
  if (situationNow == "on") {
    var hostname = window.location.hostname;
    chrome.storage.sync.get(["alloNativeAds"], async function (result) {
      var urls = result.alloNativeAds;
      urls.map((x) => {
        if (x == "<all_urls>" || x == hostname) {
          const sens = document.createElement("script");
          sens.src = chrome.runtime.getURL("sens.js");
          document.body.appendChild(sens);
        }
      });
    });

    chrome.storage.sync.get(["alloBoxads"], async function (result) {
      var urls = result.alloBoxads;
      urls.map((x) => {
        if (x == "<all_urls>" || x == hostname) {
          const floatingbox = document.createElement("script");
          floatingbox.src = chrome.runtime.getURL("adsfloatingbox.js");
          document.body.appendChild(floatingbox);
        }
      });
    });
  }
});

const body = document.getElementsByTagName("body")[0];

let observer = new MutationObserver((callback) => {
  var NativeBanner = document.getElementsByClassName(
    "container-1cfee54725868a5482e9bcb7c6aaa10f__stand"
  ).length;
  var floatingbox = document.getElementsByClassName("divFBC").length;

  if (NativeBanner > 0 && floatingbox > 0) {
    Views("Native Banner && Floatin Box");
  } else if (NativeBanner == 0 && floatingbox > 0) {
    Views("Floatin Box");
  }
});

observer.observe(body, {
  childList: true, // observe direct children
  subtree: true, // and lower descendants too
  characterDataOldValue: true, // pass old data to callback
});
var Once = 0;
const Views = async (type) => {
  if (Once == 0) {
    var userNmes = "no value";

    const { datenow, timenow } = getdate();
    chrome.storage.sync.get(["userName"], function (result) {
      if (result.userName != "") {
        userNmes = result.userName;
      }
    });

    chrome.storage.sync.get(["data"], function (result) {
      const arry = result.data;

      const newViews = {
        user: userNmes,
        date: datenow,
        Time: timenow,
        typeAds: type,
      };
      arry.push(newViews);
      chrome.storage.sync.set({ data: arry });
    });

    Once = 1;
  } else {
    chrome.storage.sync.get(["data"], function (result) {
      const arry = result.data;

      arry[length - 1].typeAds = type;

      chrome.storage.sync.set({ data: arry });
    });
  }
};

const getdate = () => {
  const date = new Date();

  const year = date.getFullYear().toString();
  const month = parseInt(date.getMonth() + 1).toString();
  const day = date.getDate().toString();

  const datenow = year + "/" + month + "/" + day;

  const hour = date.getHours().toString();
  const minute = date.getMinutes().toString();

  const timenow = hour + ":" + minute;
  return { datenow, timenow };
};
