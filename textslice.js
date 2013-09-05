// textslice.js
// A jquery plugin for making slices of text nodes by <span> wrapping.
// by thunder9 (https://github.com/thunder9)
// Copyright (c) 2013 thunder9 licensed under the MIT license.

;(function($) {

  $.fn.textslice = function(callback) {

    return this.each(function() {

      $(this).contents().filter(function () {
        return this.nodeType === 3;
      }).each(function() {
        var $textnode = $(this),
            $slices,
            text      = this.data,
            html      = '';

        for (var i = 0; i < text.length; i++) {
          html += '<span>' + text.charAt(i) + '</span>';
        }

        $slices = $(html);
        $textnode.after($slices);
        this.data = '';

        $slices.each(function() {
          var $ch = $(this);
          callback($ch);
        });

      });
    });

  };

}(jQuery));
