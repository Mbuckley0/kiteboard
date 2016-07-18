//= require jquery.knob
//= require jquery.gridster
//= require_tree .

$(function () {
  'use strict';
  window.Kiteboard = {
    init: function () {
      var contentWidth = 1240;
      $('.gridster').width(contentWidth);
      $('.gridster ul').gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [300, 360]
      });
    }
  };
});
