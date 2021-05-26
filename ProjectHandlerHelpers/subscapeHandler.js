const subscapeSingles = require('./subscapeSingles.json');
const subscapeSets = require('./subscapeSets.json');

function subscapeSinglesTransform(messageContent) {
  if (messageContent.length <= 1) {
    return null;
  }

  let afterTheHash = messageContent.substring(1);
  let singleKeyString = afterTheHash.split(' ')[0];
  if (singleKeyString === null || !singleKeyString) {
    return null;
  }

  let singleKeyStringLowercase = singleKeyString.toLowerCase();
  if (!subscapesingles.hasOwnProperty(singleKeyStringLowercase)) {
    return null;
  }
  return `#${subscapesingles[singleKeyStringLowercase]}`;
}

function subscapeSetsTransform(messageContent) {
  if (messageContent.length <= 1) {
    return null;
  }

  let afterTheHash = messageContent.substring(1);
  if (!(afterTheHash[0] == "?")) {
    return null;
  }

  let setKeyString = afterTheHash.split(' ')[1];
  if (setKeyString === null || !setKeyString) {
    return null;
  }

  let setKeyStringLowercase = setKeyString.toLowerCase();
  if (!subscapesets.hasOwnProperty(setKeyStringLowercase)) {
    return null;
  }

  let setItems = subscapesets[setKeyStringLowercase];
  let randomSetItem = setItems[Math.floor(Math.random() * setItems.length)];
  return `#${randomSetItem}`;
}

module.exports.subscapeSinglesTransform = subscapeSinglesTransform;
module.exports.subscapeSetsTransform = subscapeSetsTransform;
