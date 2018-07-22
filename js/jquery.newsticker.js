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
      index: 0,
      calStartPos: function(height, lineHeight) { //calculate start position
        return (height - lineHeight) / 2;
      },
      setStartPos: function(frame, pos) { //set start position
        frame.css('top', pos);
      },
      suspend: function() { //suspend newsticker
        $newsticker.on('mouseover mouseout', function(e) {
          stop = e.type === 'mouseover';
        });
      },
      move: function() { //activate newsticker
        if ($.isFunction(config.move)) {
          config.move.call(this);
        } else {
          let start = null;

          const tick = (timestamp) => {
            let progress = timestamp - start;
            if (start === null) { start = timestamp; }

            if (progress < config.interval || stop) {
              window.requestAnimationFrame(tick);
            } else {
              let targetHeight = 0;

              if (this.index < $item.length - 1) {
                this.index++;
              } else {
                this.index = 0;
              }

              targetHeight = config.height * this.index;

              $frame.css({
                'transform': `translateY(-${targetHeight}px)`,
              });

              start = timestamp;
              window.requestAnimationFrame(tick);
            }
          }

          requestAnimationFrame(tick);
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
        $frame.css({
          'transition-duration': `${config.interval - 100}ms`,
        });
        this.suspend(); //trigger mouse event for suspending newsticker
        this.move(); //activate newsticker
      }
    };

    return new Newsticker(config);
  };
})(jQuery);