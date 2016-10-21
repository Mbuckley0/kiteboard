$(function () {
  'use strict';

  window.Graph = window.Graph || {};

  var graph = {};
  var seriesData = {};

  Graph.setup = function (widget, data) {
    seriesData[widget.attr('id')] = [[
      {x: 0, y: 0},
      {x: 1, y: 0},
      {x: 2, y: 0},
      {x: 3, y: 0},
      {x: 4, y: 0},
      {x: 5, y: 0}
    ]];

    var width = widget.width();
    var height = widget.height();

    graph[widget.attr('id')] = new Rickshaw.Graph({
      element: widget.find("#chart")[0],
      width: width,
      height: height,
      series: [{
        color: 'rgba(0, 0, 0, 0.4)',
        data: seriesData[widget.attr('id')][0]
      }]
    });

    graph[widget.attr('id')].render();
  };

  Graph.setData = function (widget, data) {
    graph[widget.attr('id')].series[0].data[5].y = graph[widget.attr('id')].series[0].data[4].y;
    graph[widget.attr('id')].series[0].data[4].y = graph[widget.attr('id')].series[0].data[3].y;
    graph[widget.attr('id')].series[0].data[3].y = graph[widget.attr('id')].series[0].data[2].y;
    graph[widget.attr('id')].series[0].data[2].y = graph[widget.attr('id')].series[0].data[1].y;
    graph[widget.attr('id')].series[0].data[1].y = data;

    graph[widget.attr('id')].render();

    widget.find('.updated-at').html('Last updated at ' + new Date().toLocaleTimeString())
  }
});
