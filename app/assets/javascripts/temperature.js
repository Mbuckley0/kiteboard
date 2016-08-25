$(function () {
  'use strict';
  window.Temperature = {
    setData: function (widget, data) {
      widget.find('.widget-hotness').removeClass('hotness0');
      widget.find('.widget-hotness').removeClass('hotness1');
      widget.find('.widget-hotness').removeClass('hotness2');
      widget.find('.widget-hotness').removeClass('hotness3');
      widget.find('.widget-hotness').removeClass('hotness4');

      var min = widget.find('.widget-hotness')[0].getAttribute('data-min');
      var max = widget.find('.widget-hotness')[0].getAttribute('data-max');

      if (data <= min) {
        widget.find('.widget-hotness').addClass('hotness0');
      } else if(data >= max) {
        widget.find('.widget-hotness').addClass('hotness4');
      } else {
        var temperatureLevel = Math.ceil((data - min) / ((max - min) / 3));
        var backgroundClass = 'hotness' + temperatureLevel;
        widget.find('.widget-hotness').addClass(backgroundClass);
      }

      widget.find('.value').html(Number.nFormatter(data));

      widget.find('.updated-at').html('Last updated at ' + new Date().toLocaleTimeString())
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
