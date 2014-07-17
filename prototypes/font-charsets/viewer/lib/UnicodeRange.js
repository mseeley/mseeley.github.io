function UnicodeRange (start, end, name) {
    this.start = start;
    this.end = end;
    this.name = name;
}

UnicodeRange.prototype = {
    start: null,
    end: null,
    name: null,
    forEach: function (callback, scope) {
        var start = parseInt(this.start, 16),
            end = parseInt(this.end, 16),
            i = start,
            n = 0,
            p = '0',
            pp = '00',
            ppp = '000',
            len,
            j;

        while (i <= end) {
            j = i.toString(16).toUpperCase();
            len = j.length;

            if (len < 4) {
                if (len === 1) {
                    // Possible?
                    j = ppp + j;
                } else if (len === 2) {
                    j = pp + j;
                } else if (len === 3) {
                    // Possible?
                    j = p + j;
                }
            }

            callback.call(scope, j, n, this);
            i++;
            n++;
        }
    },
    toString: function () {
        return this.name + ': ' + this.start + ' - ' + this.end;
    }
};


// function UnicodeRange (name) {
//   this.name = name;
//   this.codePoints = [];
// }

// UnicodeRange.prototype = {
//   start: null,
//   end: null,
//   codePoints: null,
//   _forEachSerial: function () {

//   },
//   _forEachCodePoint: function () {

//   },
//   forEach: function (callback, scope) {
//     this.codePoints.forEach(callback, scope);
//   },
//   sortCodePoints: function (a, b) {
//     return parseInt(a, 16) < parseInt(b, 16) ? -1 : 1;
//   },
//   add: function (/* var */) {
//     var i = 0,
//         codePoints = [].slice.call(arguments, 0),
//         len = codePoints.length,
//         codePoint,
//         start,
//         end,
//         split,
//         n = 0;

//     while (i < len) {
//       codePoint = codePoints[i];
//       split = codePoint.split('-');

//       if (split.length === 2) {
//         codePoints.splice(i, 1);
//         start = parseInt(split[0], 16);
//         end = parseInt(split[1], 16);
//         while (start <= end) {
//           codePoints.push(
//             (start++).toString(16).toUpperCase()
//           );
//         }
//       } else {
//         i++;
//       }

//       if (n++ > 50) {
//         throw 'fail'
//       }
//     }

//     codePoints.sort(this.sortCodePoints);

//     this.codePoints.push.apply(this.codePoints, codePoints);
//   },
//   toString: function () {
//     return this.name;
//   }
// };