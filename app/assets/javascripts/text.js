$(function () {
  'use strict';

  window.Text = window.Text || {};

  Text.setData = function (widget, data) {
    widget.find('.text').html(data);

    widget.find('.updated-at').html('Last updated at ' + new Date().toLocaleTimeString())
  };
});
