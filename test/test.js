var path = require('path');
var webdriverio = require('webdriverio');
var options = {
  desiredCapabilities: { browserName: 'phantomjs' },
};

webdriverio
  .remote(options)
  .init()
  .url(path.join(__dirname, 'scenario2/index.html'))
  .execute(function() {
    return JSON.stringify(__coverage__, null, 2);
  })
  .then(function(result) {
    console.log(result.value);
  })
  .end();
