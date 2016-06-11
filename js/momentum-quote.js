"use strict";

window.momentum = window.momentum || {};

// Quotes

momentum.QuoteCtrl = function() {
  this.apiUrl = "https://horizonshq.herokuapp.com/api/quotes";
};

momentum.QuoteCtrl.prototype = {
  fetchQuote: function(cb) {
    $.ajax({
      url: this.apiUrl,
      method: "GET",
      success: cb
    });
  }
};
