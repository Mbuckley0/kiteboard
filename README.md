# Kiteboard

A gem to make creating dynamic dashboards easy

Sponsored by [tworedkites](http://tworedkites.com/).

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'kiteboard', '~> 0.1.0'
```

And then execute:

    $ bundle

Then add this line to your application.js file

```
//= require kiteboard
```

Then add this line to your application.css file

```
*= require kiteboard
```

## Usage

To setup a dashboard you will need a javascript file, a controller and a html page.
Following is some example code to create a dashboard with a single number widget.

Controller
```
class DashboardController < ApplicationController
  def index
    kites = Kite.all

    respond_to do |format|
      format.html
      format.json do
        render json: { 'total-kite-amount' => kites.count }
      end
    end
  end
end

```

Javascript
```
$(function () {
  'use strict';
  window.Dashboard = {
    init: function() {
      setTimeout(function() {
        Dashboard.getData();
        Dashboard.init();
      }, 15000);
    },

    getData: function () {
      $.getJSON($(location).attr('href')+'.json').then(function (data) {
        Kiteboard.updateWidgets(data);
      });
    }
  };
});

```

HTML
```
<div class="gridster">
  <ul>
    <li data-row="1" data-col="1" data-sizex="1" data-sizey="1" id="total-kite-amount" data-widget="Number">
      <%= render 'kiteboard/number', {title: 'Total Number of Kites'} %>
    </li>
  </ul>
</div>

<script>
  $(function () {
    Kiteboard.init();
    Dashboard.init();
    Dashboard.getData();
  });
</script>

```

You will also need to add a line to your routes file to point to the dashboard controller

## Demo
The demo app webpage for the kiteboard gem is viewable [here](https://evening-inlet-86869.herokuapp.com/)
The demo app codebase can also be viewed [here](https://github.com/Mbuckley0/kiteboard_demo)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/mbuckley0/kiteboard.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

