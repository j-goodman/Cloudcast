stringifyTime = function (seconds) {
  var hrs = 0; var min = 0; var sec = seconds;
  while (sec > 59) { min ++; sec-=60; }
  while (min > 59) { hrs ++; min-=-60; }
  if (sec > 9) { sec = sec.toString(); }
  else { sec = ('0'+sec.toString()); }
  if (hrs > 0) {
    if (min > 9) { min = min.toString(); }
    else { min = ('0'+min.toString()); }
    return hrs+':'+min+':'+sec;
  } else {
    return min+':'+sec;
  }
};

module.exports = stringifyTime;
