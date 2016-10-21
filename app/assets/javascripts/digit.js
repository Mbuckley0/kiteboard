$(function () {
  'use strict';

    window.Digit = window.Digit || {};

  Digit.setData = function (widget, data) {
    var currentValue = widget.find('.value')[0].getAttribute('data-value');
    widget.find('.value').html(Kiteboard.nFormatter(data));
    widget.find('.value')[0].setAttribute('data-value', data);

    var changeRateIcon = widget.find('.change-rate').find('.fa');
    changeRateIcon.removeClass('fa-arrow-down');
    changeRateIcon.removeClass('fa-arrow-up');

    if (data < currentValue) {
      changeRateIcon.addClass('fa-arrow-down');
      if (data == currentValue || currentValue == 0) {
        var changeRate = 0;
      } else {
        var changeRate = Math.round(((currentValue - data) / currentValue) * 100);
      }

      widget.find('.change-rate').find('span').html(changeRate + '%');
    } else {
      if (data == currentValue || currentValue == 0) {
        var changeRate = 0;
      } else {
        var changeRate = Math.round(((data - currentValue) / currentValue) * 100);
      }

      changeRateIcon.addClass('fa-arrow-up');
      widget.find('.change-rate').find('span').html(changeRate + '%');
    }

    widget.find('.updated-at').html('Last updated at ' + new Date().toLocaleTimeString())
  }
});
