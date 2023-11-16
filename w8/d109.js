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
  const dayArray = lines[0].split(" ");
  let results_array = [];
  
  for (var i = 0; i < dayArray.length; i++) {
      dayArray[i]
      if(dayArray[i].length == 2){
          const splited_number = dayArray[i].split('');
          results_array.push(splited_number[0]);
          results_array.push(splited_number[1]);
      } else {
          results_array.push(dayArray[i])
      }
  }
  
  let flug = true;
  for (var i = 0; i < results_array.length - 1; i++) {
      if(results_array[i] !== results_array[i+1]){
          flug = false;
      }
  }
  
  if(flug){
    console.log('Yes');
  } else {
    console.log('No');
  }
  
});