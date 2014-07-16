function Font (fontFamily) {
  this.fontFamily = fontFamily;
}

Font.prototype = {
  load: function (callback, scope) {
    var xhr = new XMLHttpRequest();
    var src = this.spec.src;
    var font = this;

    if (!this.spec) {
      throw 'Must addFormat font support first';
    }

    src.urlNoCache = src.url += ('?ts=' + Date.now());
    xhr.open('GET', src.urlNoCache);
    xhr.responseType = 'blob';

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        callback.call(scope, font, xhr);
      }
    };

    xhr.send();
  },
  addFormat: function (spec) {
    // Create so we can mutate the object. Only supports a single format ATM.
    this.spec = Object.create(spec);
  },
  toString: function () {
    // See: http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax
    // @font-face {
    //   font-family: 'MyFontFamily';
    //   src: url('myfont-webfont.eot?#iefix') format('embedded-opentype'),
    //        url('myfont-webfont.woff') format('woff'),
    //        url('myfont-webfont.ttf')  format('truetype'),
    //        url('myfont-webfont.svg#svgFontName') format('svg');
    // }

    var spec = this.spec;
    var url = (spec.src.urlNoCache || spec.src.url);

    return spec ?
      [
        '@font-face {',
          'font-family: "' + this.fontFamily + '";',
          'src: url("' + url + '") format("' + spec.src.format + '");',
        '}'
      ].join(' ') :
      '';
  },
  appendTo: function (element) {
    var style = document.createElement('style');
    var css = this.toString();

    style.type = 'text/css';

    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    element.appendChild(style);
  }
};