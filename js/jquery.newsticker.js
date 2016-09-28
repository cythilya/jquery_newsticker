(function($) {
  $.fn.newsticker = function(opts) {
    var config = $.extend({}, {
        height: 30,
        speed: 800,
        interval: 3000,
        move: null
    }, opts);

    function init(obj) {
      var $newsticker = obj,
          $frame = $newsticker.find('.ui-newsticker-list'),
          $item = $frame.find('.ui-newsticker-item'),
          $next,
          startPos = 0,
          stop = false;

      //init settings
      function init(ticker, height) {
        var $ticker = $(ticker),
            $frame = $ticker.find('.ui-newsticker-list'),
            $firstItem = $frame.find('.ui-newsticker-item').eq(0),
            lineHeight = parseInt($ticker.css('lineHeight').split('px')[0]) || 15;

        $ticker.css('height', height); //set customized height
        startPos = calStartPos(height, lineHeight);
        setStartPos($frame, startPos);
        $firstItem.addClass('current'); //set start item
        suspend(); //trigger mouse event for suspending newsticker
        move(); //activate newsticker
      };

      //calculate start position
      function calStartPos(height, lineHeight) {
        return (height - lineHeight) / 2;
      };

      //set start position
      function setStartPos(frame, pos) {
        frame.css('top', pos);
      };

      //suspend newsticker
      function suspend() {
        $newsticker.on('mouseover mouseout', function(e) {
          e.type === 'mouseover' ? stop = true : stop = false;
        });
      };

      //activate newsticker
      function move() {
        if($.isFunction(config.move)){
          config.move.call(this);
        } else {
          setInterval(function() {
            if (!stop) {
              var $current = $frame.find('.current');

              $frame.animate({
                top: '-=' + config.height + 'px'
              }, config.speed, function() {
                $next = $frame.find('.current').next();
                $next.addClass('current');
                $current.removeClass('current');
                $current.clone().appendTo($frame);
                $current.remove();
                $frame.css('top', startPos + 'px');
              });
            }
          }, config.interval);
        }
      };

      init($newsticker, config.height);
    }

    this.each(function() {
      init($(this));
    });
    return this;
  };
})(jQuery);