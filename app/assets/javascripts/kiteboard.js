//= require rickshaw-rails
//= require gridstack-js-rails
//= require jquery.knob
//= require_tree .

$(function() {
  'use strict';
  window.Kiteboard = {
    init: function() {
      $('.grid-stack').gridstack({
        cellHeight: 360,
        width: 4,
        minWidth: 1240,
        alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        resizable: {
          handles: 'e, se, s, sw, w'
        }
      });
      Kiteboard.resizeWidgets();

      var clockWidgets = $(".grid-stack>.grid-stack-item[data-widget='Clock']");
      $(clockWidgets).each(function() {
        Clock.startClock($(this));
      });

      var graphWidgets = $(".grid-stack>.grid-stack-item[data-widget='Graph']");
      $(graphWidgets).each(function() {
        Graph.setup($(this));
      });

      $(window).resize(Kiteboard.resizeWidgets);
    },

    updateWidgets: function(data) {
      var widgets = $('.grid-stack>.grid-stack-item');
      $(widgets).each(function() {
        var widget = $(this);
        if (widget.data('widget') != 'Clock') {
          window[widget.data('widget')].setData(widget, data[this.id]);
        }
      });
    },

    nFormatter: function(num) {
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

    resizeWidgets: function() {
      var gridStack = $('.grid-stack');

      if (window.innerWidth < gridStack.width()) {
        var grid = gridStack.gridstack({
          cellHeight: 360,
          width: 4,
          minWidth: 1240,
          alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
          resizable: {
            handles: 'e, se, s, sw, w'
          }
        }).data('gridstack');
        grid.resizable('.grid-stack-item', false);
        grid.movable('.grid-stack-item', false);
        var rightMargin = (gridStack.width() - window.innerWidth) + 20;
        $('.grid-stack-item').attr('style', 'margin-right: ' + rightMargin + 'px');
      } else {
        var grid = gridStack.gridstack({
          cellHeight: 360,
          width: 4,
          minWidth: 1240,
          alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
          resizable: {
            handles: 'e, se, s, sw, w'
          }
        }).data('gridstack');
        grid.resizable('.grid-stack-item', true);
        grid.movable('.grid-stack-item', true);
        $('.grid-stack-item').attr('style', 'margin-right: 0px');
      }
    }
  };
});
