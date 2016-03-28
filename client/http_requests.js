'use strict';

var fetchRequest = function(method, url,data, callback) {
	var request = new XMLHttpRequest();
  request.open(method, url, true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(data);
  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      callback(request.response);
    }
  };
};

module.exports = fetchRequest;
