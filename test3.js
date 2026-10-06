function findCombinations(digits) {
  const results = [];

  function backtrack(i, letters, parts) {
    if (i === digits.length) {
      results.push({ letters: letters.join(''), parts: parts.join(' ') });
      return;
    }
    for (const len of [1, 2]) {
      const chunk = digits.slice(i, i + len);
      if (chunk.length < len || chunk[0] === '0') continue;
      const num = Number(chunk);
      if (num < 1 || num > 26) continue;
      letters.push(String.fromCharCode(64 + num));
      parts.push(chunk);
      backtrack(i + len, letters, parts);
      letters.pop();
      parts.pop();
    }
  }

  backtrack(0, [], []);
  return results;
}

for (const digits of ['1232345', '1243752521494312']) {
  const combinations = findCombinations(digits);
  console.log(`Digit ${digits} : Jumlah Kombinasi ada ${combinations.length}`);
  combinations.forEach(({ letters, parts }, i) => console.log(`  [${i}] => ${letters.padEnd(digits.length)}  ${parts}`));
  console.log();
}
