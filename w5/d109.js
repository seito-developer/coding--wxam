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
  // とりあえず1文字ずつ配列化する
  const dayArray = lines[0].split("");

  // 出力結果をデフォルト値Yesで定義
  let answer = 'Yes';
  
  // 配列の数分ループ回す（[11 1] なら ["1", "1", " ", "1"] で4回転)
  for (var i = 0; i < dayArray.length; i++) {
      // 配列の1つ目とそれ以降の値を比較する
      if(dayArray[i] !== ' ' && dayArray[0] !== dayArray[i]){
          // 1つでも違う値が入ってたら出力結果をNoに代入し、ループを停止
　　　　　　// ただし" "の場合はスルー
          answer = 'No';
          break;
      }
  }

  //出力
  console.log(answer);
});