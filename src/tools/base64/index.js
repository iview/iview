var base64encodechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
base64decodechars = new Array( - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1),
base64encode = function(str) {
  var out, i, len, c1, c2, c3;
  len = str.length,
  i = 0,
  out = "";
  while (i < len) {
    c1 = str.charCodeAt(i++) & 255;
    if (i == len) {
      out += base64encodechars.charAt(c1 >> 2),
      out += base64encodechars.charAt((c1 & 3) << 4),
      out += "==";
      break;
    }
    c2 = str.charCodeAt(i++);
    if (i == len) {
      out += base64encodechars.charAt(c1 >> 2),
      out += base64encodechars.charAt((c1 & 3) << 4 | (c2 & 240) >> 4),
      out += base64encodechars.charAt((c2 & 15) << 2),
      out += "=";
      break;
    }
    c3 = str.charCodeAt(i++),
    out += base64encodechars.charAt(c1 >> 2),
    out += base64encodechars.charAt((c1 & 3) << 4 | (c2 & 240) >> 4),
    out += base64encodechars.charAt((c2 & 15) << 2 | (c3 & 192) >> 6),
    out += base64encodechars.charAt(c3 & 63);
  }
  return out;
},
base64decode = function(e) {
  var t, n, r, i, s, o, u;
  o = e.length,
  s = 0,
  u = "";
  while (s < o) {
    do t = base64decodechars[e.charCodeAt(s++) & 255];
    while (s < o && t == -1);
    if (t == -1) break;
    do n = base64decodechars[e.charCodeAt(s++) & 255];
    while (s < o && n == -1);
    if (n == -1) break;
    u += String.fromCharCode(t << 2 | (n & 48) >> 4);
    do {
      r = e.charCodeAt(s++) & 255;
      if (r == 61) return u;
      r = base64decodechars[r];
    } while ( s < o && r == - 1 );
    if (r == -1) break;
    u += String.fromCharCode((n & 15) << 4 | (r & 60) >> 2);
    do {
      i = e.charCodeAt(s++) & 255;
      if (i == 61) return u;
      i = base64decodechars[i];
    } while ( s < o && i == - 1 );
    if (i == -1) break;
    u += String.fromCharCode((r & 3) << 6 | i);
  }
  return u;
},
utf16to8 = function(e) {
  var t, n, r, i;
  t = "",
  r = e.length;
  for (n = 0; n < r; n++) i = e.charCodeAt(n),
  i >= 1 && i <= 127 ? t += e.charAt(n) : i > 2047 ? (t += String.fromCharCode(224 | i >> 12 & 15), t += String.fromCharCode(128 | i >> 6 & 63), t += String.fromCharCode(128 | i >> 0 & 63)) : (t += String.fromCharCode(192 | i >> 6 & 31), t += String.fromCharCode(128 | i >> 0 & 63));
  return t;
},
utf8to16 = function(e) {
  var t, n, r, i, s, o;
  t = "",
  r = e.length,
  n = 0;
  while (n < r) {
    i = e.charCodeAt(n++);
    switch (i >> 4) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      t += e.charAt(n - 1);
      break;
    case 12:
    case 13:
      s = e.charCodeAt(n++),
      t += String.fromCharCode((i & 31) << 6 | s & 63);
      break;
    case 14:
      s = e.charCodeAt(n++),
      o = e.charCodeAt(n++),
      t += String.fromCharCode((i & 15) << 12 | (s & 63) << 6 | (o & 63) << 0);
    }
  }
  return t;
};
module.exports = {
  "encode": function(data) {
    return base64encode(utf16to8(data));
  },
  "decode": function(data) {
    return utf8to16(base64decode(data));
  }
};