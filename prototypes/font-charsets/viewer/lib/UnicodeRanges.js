/*global UnicodeRange */

var UnicodeRanges = {
  forEach: function (fn, scope) {
    Object.keys(this.ranges).
      forEach(fn, scope);
  },
  reduce: function (fn, initialValue) {
    return this.ranges.reduce(fn, initialValue);
  },
  find: function (comparator) {
    return this.ranges.reduce(function (acc, range) {
     if (comparator(range)) {
        acc.push(new UnicodeRange(range.start, range.end, range.name));
      }
      return acc;
    }, []);
  }
};

// Mined from:
// http://jrgraphix.net/research/unicode_blocks.php

// JSON.stringify([].slice.call($$('.xr'), 0).
//     map(function (xr) {
//         var o = {},
//             tt = xr.querySelector('tt'),
//             v = tt.textContent,
//             matches = /(\w+) — (\w+)/.exec(v);

//         o.start = matches[1];
//         o.end = matches[2];
//         o.name = xr.nextElementSibling.firstElementChild.textContent;

//         return o;
//     }).
//     sort(function (a, b) {
//         return parseInt(a.start, 16) < parseInt(b.start, 16) ? -1 : 1;
//     })
// );

UnicodeRanges.ranges = [
  {
    'start': '0020',
    'end': '007F',
    'name': 'Basic Latin'
  },
  {
    'start': '00A0',
    'end': '00FF',
    'name': 'Latin-1 Supplement'
  },
  {
    'start': '0100',
    'end': '017F',
    'name': 'Latin Extended-A'
  },
  {
    'start': '0180',
    'end': '024F',
    'name': 'Latin Extended-B'
  },
  {
    'start': '0250',
    'end': '02AF',
    'name': 'IPA Extensions'
  },
  {
    'start': '02B0',
    'end': '02FF',
    'name': 'Spacing Modifier Letters'
  },
  {
    'start': '0300',
    'end': '036F',
    'name': 'Combining Diacritical Marks'
  },
  {
    'start': '0370',
    'end': '03FF',
    'name': 'Greek and Coptic'
  },
  {
    'start': '0400',
    'end': '04FF',
    'name': 'Cyrillic'
  },
  {
    'start': '0500',
    'end': '052F',
    'name': 'Cyrillic Supplementary'
  },
  {
    'start': '0530',
    'end': '058F',
    'name': 'Armenian'
  },
  {
    'start': '0590',
    'end': '05FF',
    'name': 'Hebrew'
  },
  {
    'start': '0600',
    'end': '06FF',
    'name': 'Arabic'
  },
  {
    'start': '0700',
    'end': '074F',
    'name': 'Syriac'
  },
  {
    'start': '0780',
    'end': '07BF',
    'name': 'Thaana'
  },
  {
    'start': '0900',
    'end': '097F',
    'name': 'Devanagari'
  },
  {
    'start': '0980',
    'end': '09FF',
    'name': 'Bengali'
  },
  {
    'start': '0A00',
    'end': '0A7F',
    'name': 'Gurmukhi'
  },
  {
    'start': '0A80',
    'end': '0AFF',
    'name': 'Gujarati'
  },
  {
    'start': '0B00',
    'end': '0B7F',
    'name': 'Oriya'
  },
  {
    'start': '0B80',
    'end': '0BFF',
    'name': 'Tamil'
  },
  {
    'start': '0C00',
    'end': '0C7F',
    'name': 'Telugu'
  },
  {
    'start': '0C80',
    'end': '0CFF',
    'name': 'Kannada'
  },
  {
    'start': '0D00',
    'end': '0D7F',
    'name': 'Malayalam'
  },
  {
    'start': '0D80',
    'end': '0DFF',
    'name': 'Sinhala'
  },
  {
    'start': '0E00',
    'end': '0E7F',
    'name': 'Thai'
  },
  {
    'start': '0E80',
    'end': '0EFF',
    'name': 'Lao'
  },
  {
    'start': '0F00',
    'end': '0FFF',
    'name': 'Tibetan'
  },
  {
    'start': '1000',
    'end': '109F',
    'name': 'Myanmar'
  },
  {
    'start': '10A0',
    'end': '10FF',
    'name': 'Georgian'
  },
  {
    'start': '1100',
    'end': '11FF',
    'name': 'Hangul Jamo'
  },
  {
    'start': '1200',
    'end': '137F',
    'name': 'Ethiopic'
  },
  {
    'start': '13A0',
    'end': '13FF',
    'name': 'Cherokee'
  },
  {
    'start': '1400',
    'end': '167F',
    'name': 'Unified Canadian Aboriginal Syllabics'
  },
  {
    'start': '1680',
    'end': '169F',
    'name': 'Ogham'
  },
  {
    'start': '16A0',
    'end': '16FF',
    'name': 'Runic'
  },
  {
    'start': '1700',
    'end': '171F',
    'name': 'Tagalog'
  },
  {
    'start': '1720',
    'end': '173F',
    'name': 'Hanunoo'
  },
  {
    'start': '1740',
    'end': '175F',
    'name': 'Buhid'
  },
  {
    'start': '1760',
    'end': '177F',
    'name': 'Tagbanwa'
  },
  {
    'start': '1780',
    'end': '17FF',
    'name': 'Khmer'
  },
  {
    'start': '1800',
    'end': '18AF',
    'name': 'Mongolian'
  },
  {
    'start': '1900',
    'end': '194F',
    'name': 'Limbu'
  },
  {
    'start': '1950',
    'end': '197F',
    'name': 'Tai Le'
  },
  {
    'start': '19E0',
    'end': '19FF',
    'name': 'Khmer Symbols'
  },
  {
    'start': '1D00',
    'end': '1D7F',
    'name': 'Phonetic Extensions'
  },
  {
    'start': '1E00',
    'end': '1EFF',
    'name': 'Latin Extended Additional'
  },
  {
    'start': '1F00',
    'end': '1FFF',
    'name': 'Greek Extended'
  },
  {
    'start': '2000',
    'end': '206F',
    'name': 'General Punctuation'
  },
  {
    'start': '2070',
    'end': '209F',
    'name': 'Superscripts and Subscripts'
  },
  {
    'start': '20A0',
    'end': '20CF',
    'name': 'Currency Symbols'
  },
  {
    'start': '20D0',
    'end': '20FF',
    'name': 'Combining Diacritical Marks for Symbols'
  },
  {
    'start': '2100',
    'end': '214F',
    'name': 'Letterlike Symbols'
  },
  {
    'start': '2150',
    'end': '218F',
    'name': 'Number Forms'
  },
  {
    'start': '2190',
    'end': '21FF',
    'name': 'Arrows'
  },
  {
    'start': '2200',
    'end': '22FF',
    'name': 'Mathematical Operators'
  },
  {
    'start': '2300',
    'end': '23FF',
    'name': 'Miscellaneous Technical'
  },
  {
    'start': '2400',
    'end': '243F',
    'name': 'Control Pictures'
  },
  {
    'start': '2440',
    'end': '245F',
    'name': 'Optical Character Recognition'
  },
  {
    'start': '2460',
    'end': '24FF',
    'name': 'Enclosed Alphanumerics'
  },
  {
    'start': '2500',
    'end': '257F',
    'name': 'Box Drawing'
  },
  {
    'start': '2580',
    'end': '259F',
    'name': 'Block Elements'
  },
  {
    'start': '25A0',
    'end': '25FF',
    'name': 'Geometric Shapes'
  },
  {
    'start': '2600',
    'end': '26FF',
    'name': 'Miscellaneous Symbols'
  },
  {
    'start': '2700',
    'end': '27BF',
    'name': 'Dingbats'
  },
  {
    'start': '27C0',
    'end': '27EF',
    'name': 'Miscellaneous Mathematical Symbols-A'
  },
  {
    'start': '27F0',
    'end': '27FF',
    'name': 'Supplemental Arrows-A'
  },
  {
    'start': '2800',
    'end': '28FF',
    'name': 'Braille Patterns'
  },
  {
    'start': '2900',
    'end': '297F',
    'name': 'Supplemental Arrows-B'
  },
  {
    'start': '2980',
    'end': '29FF',
    'name': 'Miscellaneous Mathematical Symbols-B'
  },
  {
    'start': '2A00',
    'end': '2AFF',
    'name': 'Supplemental Mathematical Operators'
  },
  {
    'start': '2B00',
    'end': '2BFF',
    'name': 'Miscellaneous Symbols and Arrows'
  },
  {
    'start': '2E80',
    'end': '2EFF',
    'name': 'CJK Radicals Supplement'
  },
  {
    'start': '2F00',
    'end': '2FDF',
    'name': 'Kangxi Radicals'
  },
  {
    'start': '2FF0',
    'end': '2FFF',
    'name': 'Ideographic Description Characters'
  },
  {
    'start': '3000',
    'end': '303F',
    'name': 'CJK Symbols and Punctuation'
  },
  {
    'start': '3040',
    'end': '309F',
    'name': 'Hiragana'
  },
  {
    'start': '30A0',
    'end': '30FF',
    'name': 'Katakana'
  },
  {
    'start': '3100',
    'end': '312F',
    'name': 'Bopomofo'
  },
  {
    'start': '3130',
    'end': '318F',
    'name': 'Hangul Compatibility Jamo'
  },
  {
    'start': '3190',
    'end': '319F',
    'name': 'Kanbun'
  },
  {
    'start': '31A0',
    'end': '31BF',
    'name': 'Bopomofo Extended'
  },
  {
    'start': '31F0',
    'end': '31FF',
    'name': 'Katakana Phonetic Extensions'
  },
  {
    'start': '3200',
    'end': '32FF',
    'name': 'Enclosed CJK Letters and Months'
  },
  {
    'start': '3300',
    'end': '33FF',
    'name': 'CJK Compatibility'
  },
  {
    'start': '3400',
    'end': '4DBF',
    'name': 'CJK Unified Ideographs Extension A'
  },
  {
    'start': '4DC0',
    'end': '4DFF',
    'name': 'Yijing Hexagram Symbols'
  },
  {
    'start': '4E00',
    'end': '9FFF',
    'name': 'CJK Unified Ideographs'
  },
  {
    'start': 'A000',
    'end': 'A48F',
    'name': 'Yi Syllables'
  },
  {
    'start': 'A490',
    'end': 'A4CF',
    'name': 'Yi Radicals'
  },
  {
    'start': 'AC00',
    'end': 'D7AF',
    'name': 'Hangul Syllables'
  },
  {
    'start': 'D800',
    'end': 'DB7F',
    'name': 'High Surrogates'
  },
  {
    'start': 'DB80',
    'end': 'DBFF',
    'name': 'High Private Use Surrogates'
  },
  {
    'start': 'DC00',
    'end': 'DFFF',
    'name': 'Low Surrogates'
  },
  {
    'start': 'E000',
    'end': 'F8FF',
    'name': 'Private Use Area'
  },
  {
    'start': 'F900',
    'end': 'FAFF',
    'name': 'CJK Compatibility Ideographs'
  },
  {
    'start': 'FB00',
    'end': 'FB4F',
    'name': 'Alphabetic Presentation Forms'
  },
  {
    'start': 'FB50',
    'end': 'FDFF',
    'name': 'Arabic Presentation Forms-A'
  },
  {
    'start': 'FE00',
    'end': 'FE0F',
    'name': 'Variation Selectors'
  },
  {
    'start': 'FE20',
    'end': 'FE2F',
    'name': 'Combining Half Marks'
  },
  {
    'start': 'FE30',
    'end': 'FE4F',
    'name': 'CJK Compatibility Forms'
  },
  {
    'start': 'FE50',
    'end': 'FE6F',
    'name': 'Small Form Variants'
  },
  {
    'start': 'FE70',
    'end': 'FEFF',
    'name': 'Arabic Presentation Forms-B'
  },
  {
    'start': 'FF00',
    'end': 'FFEF',
    'name': 'Halfwidth and Fullwidth Forms'
  },
  {
    'start': 'FFF0',
    'end': 'FFFF',
    'name': 'Specials'
  },
  {
    'start': '10000',
    'end': '1007F',
    'name': 'Linear B Syllabary'
  },
  {
    'start': '10080',
    'end': '100FF',
    'name': 'Linear B Ideograms'
  },
  {
    'start': '10100',
    'end': '1013F',
    'name': 'Aegean Numbers'
  },
  {
    'start': '10300',
    'end': '1032F',
    'name': 'Old Italic'
  },
  {
    'start': '10330',
    'end': '1034F',
    'name': 'Gothic'
  },
  {
    'start': '10380',
    'end': '1039F',
    'name': 'Ugaritic'
  },
  {
    'start': '10400',
    'end': '1044F',
    'name': 'Deseret'
  },
  {
    'start': '10450',
    'end': '1047F',
    'name': 'Shavian'
  },
  {
    'start': '10480',
    'end': '104AF',
    'name': 'Osmanya'
  },
  {
    'start': '10800',
    'end': '1083F',
    'name': 'Cypriot Syllabary'
  },
  {
    'start': '1D000',
    'end': '1D0FF',
    'name': 'Byzantine Musical Symbols'
  },
  {
    'start': '1D100',
    'end': '1D1FF',
    'name': 'Musical Symbols'
  },
  {
    'start': '1D300',
    'end': '1D35F',
    'name': 'Tai Xuan Jing Symbols'
  },
  {
    'start': '1D400',
    'end': '1D7FF',
    'name': 'Mathematical Alphanumeric Symbols'
  },
  {
    'start': '20000',
    'end': '2A6DF',
    'name': 'CJK Unified Ideographs Extension B'
  },
  {
    'start': '2F800',
    'end': '2FA1F',
    'name': 'CJK Compatibility Ideographs Supplement'
  },
  {
    'start': 'E0000',
    'end': 'E007F',
    'name': 'Tags'
  }
];