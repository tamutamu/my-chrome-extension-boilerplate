var $ = require("jquery");


chrome.runtime.onMessage.addListener(function (message, sender, callback) {

  if (message.functiontoInvoke == "adjustLayout") {
    adjustLayout();
  }
});


function adjustLayout() {

  var result = new Promise(function(resolve) {
        resolve();
  })

  var ssd = $('.opblock-summary-path,.model-box');
  let maxLen = ssd.length - 1;

  ssd.each(function(index, elem){
    $(this).click();

    if(index === maxLen) {
      result.then(function(){
        window.print();
      });
    }
  });


}
