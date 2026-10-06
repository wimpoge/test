function findPattern(str, pattern) {
  const k = pattern.length;
  const target = pattern.split('').sort().join('');
  const hasil = [];

  for (let i = 0; i <= str.length - k; i++) {
    const sub = str.slice(i, i + k);
    if (sub.split('').sort().join('') === target) {
      hasil.push({ index: i, sub });
    }
  }
  return hasil;
}

const str = "ABDCKDHJABDCBDAUOQJDBADCLDLCHBCBABCBAABCDAJDBABDCABDABDBCADBCASSJGABCDAUTACBDBQWUDNCDBCADKDHABDJGBDABCBDBADCACADBADBCBAD";
const hasil = findPattern(str, "ABCD");

hasil.forEach(({ index, sub }) => console.log(`index ${index} : ${sub}`));
console.log(`Total: ${hasil.length}`);