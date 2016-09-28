$(function () {
  'use strict';

  window.Meter = window.Meter || {};

  Meter.setData = function (widget, data) {
    widget.find(".meter").knob();

    widget.find('.meter').val(data).trigger('change');

    widget.find('.updated-at').html('Last updated at ' + new Date().toLocaleTimeString())
  };
});
