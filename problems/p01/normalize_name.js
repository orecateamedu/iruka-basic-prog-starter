// [REQUIRED] 5–10 lines: how you understand the problem & approach,
// edge cases, and Big-O for time/memory.
function normalizeName(s) {
  const parts = s.trim().split(/\s+/).filter(Boolean);
  return parts.map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()).join(" ");
}
module.exports = { normalizeName };
