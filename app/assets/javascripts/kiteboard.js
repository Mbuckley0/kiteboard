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

      var widgets = $(".gridster>ul>li[data-widget='Clock']");
      $(widgets).each(function () {
        Clock.startClock($(this));
      });
    },

    updateWidgets: function (data) {
      var widgets = $('.gridster>ul>li');
      $(widgets).each(function () {
        var widget = $(this);
        if (widget.data('widget') != 'Clock') {
          window[widget.data('widget')].setData(widget, data[this.id]);
        }
      });
    },

    nFormatter: function (num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'g';
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm';
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
      }
      return num;
    }
  };
});
