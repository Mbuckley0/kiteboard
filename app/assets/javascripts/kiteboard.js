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
    },

    updateWidgets: function (data) {
      var widgets = $('.gridster>ul>li');
      $(widgets).each(function () {
        var widget = $(this);
        window[widget.data('widget')].setData(widget, data[this.id]);
      });
    }
  };
});
