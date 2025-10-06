// [REQUIRED] Why stack? list edge cases; Big-O analysis.
function isValid(s) {
  const pairs = {')':'(', ']':'[', '}':'{'};
  const st = [];
  for (const ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') st.push(ch);
    else if (ch in pairs) {
      if (st.length === 0 || st[st.length - 1] !== pairs[ch]) return false;
      st.pop();
    } else return false;
  }
  return st.length === 0;
}
module.exports = { isValid };
