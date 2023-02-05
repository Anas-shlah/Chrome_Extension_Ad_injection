var hostnameA;
var hostnameB;
var hostname = window.location.hostname;
chrome.storage.sync.get(["situation"], async function (result) {
  var situationNow;
  situationNow = result.situation;
  if (situationNow == "on") {
    chrome.storage.sync.get(["alloNativeAds"], async function (result) {
      var urls = result.alloNativeAds;
      urls.map((x) => {
        if (x == "<all_urls>" || x == hostname) {
          hostnameA = true;
        }
      });
    });

    chrome.storage.sync.get(["alloBoxads"], async function (result) {
      var urls = result.alloBoxads;
      urls.map((x) => {
        if (x == "<all_urls>" || x == hostname) {
          hostnameB = true;
        }
      });
      if (hostnameA || hostnameB == true) {
        tracksUser();
      }
    });
  }
});
const tracksUser = () => {
  NewRecord();
  const track = {
    hostName: window.location.href,
    dateTime: getdate(),
    scroll: [],
    mouseClicked: [],
    inputs: "",
  };
  setInterval(() => {
    if (track.scroll[track.scroll.length - 1] != scrollY) {
      track.scroll.push(scrollY);
      console.log(track);
      updateTrack();
    }
  }, 1000);

  addEventListener(
    "click",
    function (e) {
      e = e || window.event;
      var target = e.target;
      var id = e.target.id || "";
      var className = e.target.className;
      var innerText = target.innerText;
      track.mouseClicked.push({
        id: id,
        className: className,
        innerText: innerText,
      });
      updateTrack();
      // }
    },
    false
  );

  addEventListener(
    "input",
    function (e) {
      track.inputs += e.data;
      updateTrack();
    },
    false
  );

  function NewRecord() {
    chrome.storage.sync.get(["tracksUser"], async function (result) {
      const oldValue = result.tracksUser;
      oldValue.push([]); // add spes new record
      chrome.storage.sync.set({ tracksUser: oldValue });
    });
  }
  function updateTrack() {
    chrome.storage.sync.get(["tracksUser"], async function (result) {
      const oldValue = result.tracksUser;
      oldValue[oldValue.length - 1] = track; // update last record
      chrome.storage.sync.set({ tracksUser: oldValue });
    });
  }
};
