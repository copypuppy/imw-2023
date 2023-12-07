(function () {
    var _index = 0,
       _coverflow = null,
       _prevLink = null,
       _nextLink = null,
       _albums = [],
       _transformName = (function () {
        var style = document.createElement('div').style;
        var prefixes = ['Webkit', 'Moz', 'ms', 'O'];
        var transformProp = 'transform';
    
        for (var i = 0; i < prefixes.length; i++) {
            if (prefixes[i] + 'Transform' in style) {
                transformProp = prefixes[i] + 'Transform';
                break;
            }
        }
    
        return transformProp;
    })();
       OFFSET = 70, // pixels
       ROTATION = 45, // degrees
       BASE_ZINDEX = 10,
       MAX_ZINDEX = 42;
 
    function get(selector) {
       return document.querySelector(selector);
    }
 
    function render() {
       for (var i = 0; i < _albums.length; i++) {
          if (i < _index) {
             _albums[i].style[_transformName] = "translateX(-" + (OFFSET * (_index - i)) + "%) rotateY(" + ROTATION + "deg)";
             _albums[i].style.zIndex = BASE_ZINDEX + i;
          } else if (i === _index) {
             _albums[i].style[_transformName] = "rotateY(0deg) translateZ(140px)";
             _albums[i].style.zIndex = MAX_ZINDEX;
          } else if (i > _index) {
             _albums[i].style[_transformName] = "translateX(" + (OFFSET * (i - _index)) + "%) rotateY(-" + ROTATION + "deg)";
             _albums[i].style.zIndex = BASE_ZINDEX + (_albums.length - i);
          }
       }
    }
 
    function flowRight() {
       if (_index > 0) {
          _index--;
          render();
       }
    }
 
    function flowLeft() {
       if (_index < _albums.length - 1) {
          _index++;
          render();
       }
    }
 
    function keyDown(event) {
       switch (event.keyCode) {
          case 37:
             flowRight();
             break;
          case 39:
             flowLeft();
             break;
       }
    }
 
    function registerEvents() {
       _prevLink.addEventListener('click', flowRight, false);
       _nextLink.addEventListener('click', flowLeft, false);
       document.addEventListener('keydown', keyDown, false);
    }
 
    function init() {
       _albums = Array.prototype.slice.call(document.querySelectorAll('section'));
       _index = Math.floor(_albums.length / 2);
 
       _coverflow = get('#coverflow');
       _prevLink = get('#prev');
       _nextLink = get('#next');
 
       for (var i = 0; i < _albums.length; i++) {
          var url = _albums[i].getAttribute("data-cover");
          _albums[i].style.backgroundImage = "url(" + url + ")";
       }
 
       registerEvents();
       render();
    }
 
    init();
 })();