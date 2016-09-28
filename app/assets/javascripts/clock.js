$(function () {
  'use strict';

  window.Clock = window.Clock || {};

  Clock.startClock = function (widget) {
    setTimeout(function () {
      widget.find('h1').html(new Date().toDateString());
      widget.find('h2').html(new Date().toLocaleTimeString());
      Clock.startClock(widget);
    }, 500);
  }
});
