$(function () {
  'use strict';
  window.Temperature = window.Temperature || {};

  Temperature.setData = function (widget, data) {
    widget.find('.widget-temperature').removeClass('temperature0');
    widget.find('.widget-temperature').removeClass('temperature1');
    widget.find('.widget-temperature').removeClass('temperature2');
    widget.find('.widget-temperature').removeClass('temperature3');
    widget.find('.widget-temperature').removeClass('temperature4');

    var min = widget.find('.widget-temperature')[0].getAttribute('data-min');
    var max = widget.find('.widget-temperature')[0].getAttribute('data-max');

    if (data <= min) {
      widget.find('.widget-temperature').addClass('temperature0');
    } else if(data >= max) {
      widget.find('.widget-temperature').addClass('temperature4');
    } else {
      var temperatureLevel = Math.ceil((data - min) / ((max - min) / 3));
      var backgroundClass = 'temperature' + temperatureLevel;
      widget.find('.widget-temperature').addClass(backgroundClass);
    }

    widget.find('.value').html(Kiteboard.nFormatter(data));

    widget.find('.updated-at').html('Last updated at ' + new Date().toLocaleTimeString())
  }
});
