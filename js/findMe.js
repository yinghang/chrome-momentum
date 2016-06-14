"use strict";

window.momentum = window.momentum || {};

momentum.findMe = function() {
};

momentum.findMe.prototype = {
  find: function(){
    var ret = [];
    if (!navigator.geolocation){
      throw "Geolocation not supported!";
    }

    function success(position) {
      ret[0]  = position.coords.latitude;
      ret[1] = position.coords.longitude;
    };

    function error() {
      throw "Error occured!";
    };

    navigator.geolocation.getCurrentPosition(success, error);
    return ret;
  }
}