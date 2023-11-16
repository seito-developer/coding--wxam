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
    const parentCards = lines[0].split(' ');
    const parentCard1 = Number(parentCards[0]);
    const parentCard2 = Number(parentCards[1]);
    
    const games = lines[1];
    let children = [];
    
    const createChildrenCards = () => {
        for (var i = 0; i < games; i++) {
            children.push(lines[i+2]);
        }
    }
    createChildrenCards();
    
    for (var i = 0; i < children.length; i++) {
        const childcards = children[i].split(' ');
        const childcards1 = Number(childcards[0]);
        const childcards2 = Number(childcards[1]);
        
        if(parentCard1 === childcards1){
            if(parentCard2 > childcards2){
                console.log('Low');
            } else {
                console.log('High');
            }
        } else {
            if(parentCard1 > childcards1){
                console.log('High');
            } else {
                console.log('Low');
            }
        }
    }
});