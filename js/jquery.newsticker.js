(function($) {
  $.fn.newsticker = function(opts) {
    var $newsticker = $(this),
      $frame = $newsticker.find('.ui-newsticker-list'),
      $item = $frame.find('.ui-newsticker-item'),
      $next = {},
      startPos = 0,
      stop = false,
      config = $.extend({}, {
        height: 30,
        speed: 800,
        interval: 3000,
        move: null
      }, opts);

    function Newsticker(config) {
      this.config = config;
      this.init($newsticker, config.height);
    }

    Newsticker.prototype = {
      calStartPos: function(height, lineHeight) { //calculate start position
        return (height - lineHeight) / 2;
      },
      setStartPos: function(frame, pos) { //set start position
        frame.css('top', pos);
      },
      suspend: function() { //suspend newsticker
        $newsticker.on('mouseover mouseout', function(e) {
          stop = e.type === 'mouseover' ? true : false;
        });
      },
      move: function() { //activate newsticker
        if ($.isFunction(config.move)) {
          config.move.call(this);
        } else {
          setInterval(function() {
            if (!stop) {
              var $current = $frame.find('.current');

              $frame.animate({
                top: '-=' + config.height + 'px'
              }, config.speed, function() {
                $next = $frame.find('.current').next().addClass('current');
                $current.removeClass('current').clone().appendTo($frame).remove();
                $frame.css('top', startPos + 'px');
              });
            }
          }, config.interval);
        }
      },
      init: function(ticker, height) { //init settings
        var $ticker = $(ticker),
          $frame = $ticker.find('.ui-newsticker-list'),
          $firstItem = $frame.find('.ui-newsticker-item').eq(0),
          lineHeight = parseInt($ticker.css('lineHeight').split('px')[0]) || 15;

        $ticker.css('height', height); //set customized height
        startPos = this.calStartPos(height, lineHeight);
        this.setStartPos($frame, startPos);
        $firstItem.addClass('current'); //set start item
        this.suspend(); //trigger mouse event for suspending newsticker
        this.move(); //activate newsticker
      }
    };

    return new Newsticker(config);
  };
})(jQuery);