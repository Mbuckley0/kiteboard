$(function () {
  'use strict';

  window.List = window.List || {};

  List.setData = function (widget, data) {
    var list = widget.find('.list-nostyle');
    list.empty();
    $.each(data, function (key, value) {
      var li = $('<li/>').appendTo(list);
      $('<span>' + key + '</span><span/>').addClass('label').appendTo(li);
      $('<span>' + value + '<span/>').addClass('value').appendTo(li);
    });

    widget.find('.updated-at').html('Last updated at ' + new Date().toLocaleTimeString());
  };
});
