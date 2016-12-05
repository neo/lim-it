module.exports = function(it, lim1, lim2 = 0) {
  if (lim1 === undefined) throw "Must provide at least one range limit";
  const min = Math.min(lim1, lim2);
  const max = Math.max(lim1, lim2);
  return Math.min( Math.max(it, min), max );
}
