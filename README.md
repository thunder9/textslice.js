textslice.js
============

A tiny jquery plugin for making slices of text nodes by \<span\> wrapping. This plugin is a generalized version of [textgram.js](https://github.com/thunder9/textgram.js) and [rainbow.js](https://github.com/thunder9/rainbow.js).

# Usage

Call the plugin on the selected elements that contains the target text nodes with a callback.

```js
var counted = 0;

$('#target').textslice(function($ch) {

  // `$ch` is a jquery object that contains a single <span> element in the decomposed set.

  if (counted++ % 2 === 0) $ch.css('color', '#ffffff');
  if ($ch.position().left > 100) $ch.css('text-decoration', 'underline');
});

```

# License
Copyright (c) 2013 thunder9 licensed under the MIT license.
