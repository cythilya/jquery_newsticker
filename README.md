# jQuery Newsticker Plugin
Newsticker plugin for jQuery.

## Features
- Lightweight
- Easy to customize
- Use CSS mixin to define the prefix of this newsticker component

## Options
- height: The height of this newsticker.
- speed: Animation time in milliseconds.
- interval: Time in milliseconds before next item is shown.
- move: Customed function for animation.

## Setup
### HTML Snippet

```html
<div class="ui-newsticker">
  <ul class="ui-newsticker-list">
    <li class="ui-newsticker-item">
      That open was light...
    </li>
    <li class="ui-newsticker-item">
      That creature his bring...
    </li>
    <li class="ui-newsticker-item">
      And also. Firmament and Give....
    </li>
  </ul>
</div>
```

### CSS Snippet
Include the css file.

	<link rel="stylesheet" href="css/jquery.newsticker.min.css">

Or, use CSS mixin to define the prefix of this newsticker component. You can use any prefix string instead of "ui". "ui" is the default value.

	@import "jquery.newsticker";
	@include ui-newsticker-mixin(ui);

### JavaScript Snippet

```javascript
// start
$(function() {
  $('.ui-newsticker').newsticker();
});
```

## Requirements
- jQuery v.1.8.2+

## Browsers
- Google Chrome
- Mozilla Firefox
- Microsoft Internet Explorer 8.0+

## Demo
[Demo](http://cythilya.github.io/jquery-newsticker)

## License
Released under the [MIT license](http://opensource.org/licenses/MIT).
