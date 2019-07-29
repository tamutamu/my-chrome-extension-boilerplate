import '../img/icon-128.png'
import '../img/icon-34.png'


chrome.contextMenus.create({
  title: "[Swagger] 印刷レイアウト調整",
  contexts: ["all"],
  type: "normal",
  onclick: adjustLayout}
);


function adjustLayout() {

  alert("ssdf");
  chrome.tabs.query({
    "active": true,
    "currentWindow": true
  }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      "functiontoInvoke": "adjustLayout"
    }, function (){});
  });

};
