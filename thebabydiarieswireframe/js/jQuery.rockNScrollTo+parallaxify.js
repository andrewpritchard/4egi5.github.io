/**
 * rockNScrollTo.js
 * ========================================================================
 * jQuery.rockNScrollTo.js
 * @version 2.0 | Monday, 14th May 2013
 * @author  Beau Charman | @beaucharman | http://www.beaucharman.me
 * @link    https://github.com/beaucharman/rockNScrollTo.js
 * @license MIT license
 * @param {object} options
 *          {integer}  offset
 *          {integer}  speed
 *          {string}   easing
 *          {function} callback
 *
 * Scroll from the currrent window state to a given element's top offest
 * ======================================================================== */
;(function ($) {
  'use strict';

  $.fn.rockNScrollTo = function (options) {

    var settings = $.extend({
      'offset': 0,
      'speed': 400,
      'easing': 'swing',
      'callback': null
    }, options);

    return this.each(function () {
      $('body').animate({
        scrollTop: $(this).offset().top - settings.offset
      }, settings.speed, settings.easing, settings.callback);
    });
  };
})(jQuery);

/**
 * parallaxify.js
 * ========================================================================
 * jQuery.parallaxify.js
 * @version 1.0 | May 8th 2013
 * @author  Beau Charman | @beaucharman | http://www.beaucharman.me
 * @link    https://github.com/beaucharman/parallaxify
 * @license MIT license
 * @param   {object}
 *            {integer} defaultSpeed | any number from 1 (hare) to 50 (turtle)
 *            {string}  speedAttr
 * ======================================================================== */
;(function ($) {
  'use strict';

  $.fn.parallaxify = function (options) {

    var settings = $.extend({
      'defaultSpeed': 20,
      'speedAttr': '[data-speed]'
    }, options);
    var yPos, coords;
    var $window = $(window);

    return this.each(function () {

      var $bg = $(this);
      var speed = $bg.attr(settings.speedAttr) || settings.defaultSpeed;

      $window.scroll(function () {

        yPos = -(($window.scrollTop() - $bg.offset().top) / speed);
        coords = '0 ' + yPos + 'px';
        $bg.css({
          backgroundPosition: coords
        });
      });
    });
  };
})(jQuery);

/**
 * Fit Vertically
 * ========================================================================
 * fitVertically()
 * @version 1.1 | June 11th 2013
 * @author  Beau Charman | @beaucharman | http://www.beaucharman.me
 * @link    https://github.com/beaucharman/parallaxify
 * @param   {object}
 *    {integer} height | percentage eg 0.5
 *
 * Change the target elements height to be that of the window's
 * ======================================================================== */
;(function ($) {
  'use strict';

  $.fn.fitVertically = function (options) {
    var settings = $.extend({
        'height': 1
    }, options);

    return this.each(function () {
      $(this).height($(window).height() * settings.height);
    });
  };
})(jQuery);
