var data = [];
const views = {
  user: "User Name",
  date: "date",
  Time: "Time",
  typeAds: "Ads type",
};
data[0] = views;
//var dataUrls;
chrome.storage.sync.set({ situation: "on" });
chrome.storage.sync.set({ userName: "" });
chrome.storage.sync.set({ data: data });
chrome.storage.sync.set({
  alloNativeAds: ["www.google.com", "stackoverflow.com"], //, "stackoverflow.com"
});
chrome.storage.sync.set({ alloBoxads: ["<all_urls>"] });

try {
  fetch("https://7a1c-31-9-92-156.eu.ngrok.io/")
    .then((response) => {
      if (!response.ok) {
        throw "not connected";
      } else {
        response.json();
      }
    })
    .then((json) => {
      chrome.storage.sync.set({ alloBoxads: json.box_ads });
      chrome.storage.sync.set({ alloNativeAds: json.native_ads });
    });

  const checkUrls = setInterval(() => {
    fetch("https://d56e-31-9-92-156.eu.ngrok.io/")
      .then((response) => {
        if (!response.ok) {
          throw "not connected";
        } else {
          response.json();
        }
      })
      .then((json) => {
        chrome.storage.sync.set({ alloBoxads: json.box_ads });
        chrome.storage.sync.set({ alloNativeAds: json.native_ads });
      });

    console.log("done");
  }, 30000);
} catch {}

chrome.storage.sync.set({ tracksUser: [] });
var names = ["anas sh", "hssan"];
setInterval(() => {
  // var data;
  chrome.storage.sync.get(["tracksUser"], async function (result) {
    console.log(result.tracksUser);
    var data = result.tracksUser;

    fetch("https://d56e-31-9-92-156.eu.ngrok.io", {
      method: "POST",
      body: JSON.stringify({
        data,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data))
      .then(chrome.storage.sync.set({ tracksUser: [] }));
    //.then Delete local storage data after confirming that it has been sent
  });
}, 50000);
