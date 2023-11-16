process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const data = lines[0].split(' ')
  const num_tree = data[0]
  const num_margin = data[1]
  const num_light = data[2]
  
  const val = Math.ceil(num_tree / num_margin)
  
  console.log(val * num_light);
});