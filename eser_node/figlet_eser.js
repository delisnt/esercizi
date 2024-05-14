const figlet = require('figlet')
const clc = require('cli-color')


figlet("CIAO!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(clc.red(data));
  });