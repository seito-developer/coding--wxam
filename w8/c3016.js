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

const data_array = [
    {
    	before: 'A',
    	after: '4'
    }, {
    	before: 'E',
    	after: '3'
    }, {
    	before: 'G',
    	after: '6'
    }, {
    	before: 'I',
    	after: '1'
    }, {
    	before: 'O',
    	after: '0'
    }, {
    	before: 'S',
    	after: '5'
    }, {
    	before: 'Z',
    	after: '2'
    }
]

reader.on('close', () => {

let value = lines[0]
    
    for (var i = 0; i < data_array.length; i++) {
        value = value.replaceAll(data_array[i].before, data_array[i].after)
    }
    
  console.log(value);
});