(function($) {
    $.fn.newsticker = function(opts) {
        // default configuration
        var config = $.extend({}, {
            height: 30,
            speed: 800,
            interval: 3000,
            move: null
        }, opts);
        // main function
        function init(obj) {
            var $newsticker = obj,
                $frame = $newsticker.find('.newsticker-list'),
                $item = $frame.find('.newsticker-item'),
                $next,
                startPos = 0,
                stop = false;

            function init(){
                var customizedHeight = parseInt($item.eq(0).css('height').split('px')[0]),
                    lineHeight = parseInt($newsticker.css('lineHeight').split('px')[0]);
                $newsticker.css('height', config.height); //set customized height
                startPos =  (config.height - lineHeight) / 2; //re-write start position;
                $frame.css('top', startPos);
                $item.eq(0).addClass('current'); //set start item
                suspend();
                move();
            };

            function suspend(){
                $newsticker.on('mouseover mouseout', function(e) {
                    if (e.type == 'mouseover') {
                        stop = true;
                    } else { //mouseout
                        stop = false;
                    }
                }); 
            };

            function move(){
                if($.isFunction(config.move)){
                    config.move.call(this);
                }
                else{
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

            init();
        }
        // initialize every element
        this.each(function() {
            init($(this));
        });
        return this;
    };
})(jQuery);