//= require jquery-ui/core
//= require jquery-ui/mouse
//= require jquery-ui/widget
//= require jquery-ui/draggable
//= require jquery-ui/resizeable
//= require jquery.knob
//= require underscore-min
//= require gridstack
//= require gridstack.jQueryUI
//= require d3.min
//= require d3.layout.min
//= require rickshaw.min
//= require_tree .

$(function () {
  'use strict';
  window.Kiteboard = {
    init: function () {
      $('.grid-stack').gridstack({
        cellHeight: 360,
        width: 4,
        alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        resizable: {
          handles: 'e, se, s, sw, w'
        }
      });
      Kiteboard.resizeWidgets();

      var clockWidgets = $(".grid-stack>.grid-stack-item[data-widget='Clock']");
      $(clockWidgets).each(function () {
        Clock.startClock($(this));
      });

      var graphWidgets = $(".grid-stack>.grid-stack-item[data-widget='Graph']");
      $(graphWidgets).each(function () {
        Graph.setup($(this));
      });
    },

    updateWidgets: function (data) {
      var widgets = $('.grid-stack>.grid-stack-item');
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
    },

    resizeWidgets: function () {
      if (window.innerWidth < $('.grid-stack').width()) {
        var grid = $('.grid-stack').data('gridstack');
        grid.resizable('.grid-stack-item', false);
        grid.movable('.grid-stack-item', false);
        var rightMargin = ($('.grid-stack').width() - window.innerWidth) + 20;
        $('.grid-stack-item').attr('style', 'margin-right: ' + rightMargin + 'px');
        $('.grid-stack').addClass('grid-stack-one-column-mode');
      } else {
        var grid = $('.grid-stack').data('gridstack');
        grid.resizable('.grid-stack-item', true);
        grid.movable('.grid-stack-item', true);
        $('.grid-stack-item').attr('style', 'margin-right: 0px');
        $('.grid-stack').removeClass('grid-stack-one-column-mode');
      }
    }
  };

  $(window).resize(Kiteboard.resizeWidgets);
});
