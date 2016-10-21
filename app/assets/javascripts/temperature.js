$(function () {
  'use strict';
  window.Temperature = window.Temperature || {};

  Temperature.setData = function (widget, data) {
    var widgetTemperature = widget.find('.widget-temperature');
    widgetTemperature.removeClass('temperature0', 'temperature1', 'temperature2', 'temperature3', 'temperature4');

    var min = widgetTemperature[0].getAttribute('data-min');
    var max = widgetTemperature[0].getAttribute('data-max');

    if (data <= min) {
      widgetTemperature.addClass('temperature0');
    } else if(data >= max) {
      widgetTemperature.addClass('temperature4');
    } else {
      var temperatureLevel = Math.ceil((data - min) / ((max - min) / 3));
      var backgroundClass = 'temperature' + temperatureLevel;
      widgetTemperature.addClass(backgroundClass);
    }

    widget.find('.value').html(Kiteboard.nFormatter(data));

    widget.find('.updated-at').html('Last updated at ' + new Date().toLocaleTimeString())
  }
});
