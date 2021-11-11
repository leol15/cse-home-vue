
// just helper functions

export function dateToSeconds(year, month, day) {
  return new Date(year, month - 1, day).getTime();
}

/**
 * given an array of intervals [[beginTime, endTime, options], ...],
 * return a list of runner (indexes) that can perform all
 * tasks without overlap
 * for convinence, copy and return the input intervals too:
 *  [index, interval]
 */
export function intervalToRow(intervals) {
  const runners = [];  // store the end time
  const ret = [];

  const events = intervals.sort((a, b) => a[0] - b[0]);
  for (var i = 0; i < events.length; i++) {
    // handle event i or clean up runner
    const e = events[i];
    var minRunnerIdx = -1; 
    runners.forEach((v, i) => {
      if (v < e[0]) {
        minRunnerIdx = minRunnerIdx === -1 ? i : minRunnerIdx;
      }
    });
    if (minRunnerIdx === -1) {
      runners.push(0);
      minRunnerIdx = runners.length - 1;
    }
    // add to runner
    runners[minRunnerIdx] = e[1];
    ret.push([minRunnerIdx, e]);
  }
  return ret;
}


// hash a string to color
const seed = Math.floor(Math.random() * (255 * 255 * 255));
export function strToColor(s) {
  var ret = seed;
  for (var i = 0; i < s.length; i++) {
    ret = (ret << 1) + s.charCodeAt(i);
    ret %= (255 * 255 * 255);
  }
  return [ret % (255), (ret / 255) % 255, (ret / 255 / 255) % 255];
}

export function arrayToColorStr(arr) {
  return "rgb(" + arr.join(",") + ")";
}

export function strToColorStr(s) {
  return arrayToColorStr(strToColor(s));
}