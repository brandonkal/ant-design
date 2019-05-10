/* eslint-disable */
// requiring path and fs modules
const path = require('path');
const fs = require('fs');

const allCSS = [
  './alert/style/index.css',
  './anchor/style/index.css',
  './auto-complete/style/index.css',
  './avatar/style/index.css',
  './back-top/style/index.css',
  './badge/style/index.css',
  './breadcrumb/style/index.css',
  './button/style/index.css',
  './calendar/style/index.css',
  './card/style/index.css',
  './carousel/style/index.css',
  './cascader/style/index.css',
  './checkbox/style/index.css',
  './collapse/style/index.css',
  './comment/style/index.css',
  './config-provider/style/index.css',
  './date-picker/style/index.css',
  './divider/style/index.css',
  './drawer/style/index.css',
  './dropdown/style/index.css',
  './empty/style/index.css',
  './form/style/index.css',
  './grid/style/index.css',
  './icon/style/index.css',
  './input/style/index.css',
  './input-number/style/index.css',
  './layout/style/index.css',
  './list/style/index.css',
  './locale-provider/style/index.css',
  './mention/style/index.css',
  './menu/style/index.css',
  './message/style/index.css',
  './modal/style/index.css',
  './notification/style/index.css',
  './page-header/style/index.css',
  './pagination/style/index.css',
  './popover/style/index.css',
  './progress/style/index.css',
  './radio/style/index.css',
  './rate/style/index.css',
  './select/style/index.css',
  './skeleton/style/index.css',
  './slider/style/index.css',
  './spin/style/index.css',
  './statistic/style/index.css',
  './steps/style/index.css',
  './style/index.css',
  './style/v2-compatible-reset.css',
  './switch/style/index.css',
  './table/style/index.css',
  './tabs/style/index.css',
  './tag/style/index.css',
  './time-picker/style/index.css',
  './timeline/style/index.css',
  './tooltip/style/index.css',
  './transfer/style/index.css',
  './tree/style/index.css',
  './tree-select/style/index.css',
  './typography/style/index.css',
  './upload/style/index.css',
];

// joining path of directory
const directoryPath = path.join(__dirname, 'no-prefix');
// passsing directoryPath and callback function
fs.readdir(directoryPath, function(err, files) {
  // handling error
  if (err) {
    return console.log(`Unable to scan directory: ${err}`);
  }
  // listing all files using forEach
  files.forEach(function(file) {
    // Do whatever you want to do with the file
    console.log(file);
  });
});
