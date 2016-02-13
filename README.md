# jQuery Newsticker Plugin
Newsticker plugin for jQuery.

## Features
- Lightweight
- Easy to customize

##Options
- height: The height of this newsticker.
- speed: Animation time in milliseconds.
- interval: Time in milliseconds before next item is shown.
- move: Customed function for animation.

## Setup
### HTML Snippet

```html
<div class="newsticker">
    <ul class="newsticker-list">
        <li class="newsticker-item">
        	That open was light...
        </li>
        <li class="newsticker-item">
        	That creature his bring waters female morning place Give bearing in isn't from...
        </li>
        <li class="newsticker-item">
        	And also. Firmament and Give....
        </li>
    </ul>
</div>
```

### JavaScript Snippet

```javascript
// start
$(function() {
	$('.newsticker').newsticker();
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