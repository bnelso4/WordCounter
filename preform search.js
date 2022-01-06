const predicate = require("./predicatesAndResults.json");
const search = require('./filter');
const fs = require("fs");




fs.promises.readFile('./test.txt').then(function(result){

result =result.toString('utf-8');

result =result.split(' ');
for(i=0;i<predicate.words.length;i++)
{
    let countOfWord = search(result, predicate.words[i]);
    predicate.count[i]=countOfWord;
    console.log('the word "'+ predicate.words[i]+ '" was counted '+ predicate.count[i] +' times')
}
updateFile(predicate);
}).catch(function(result)
{
    console.log(result);
})
console.log("in progress");
function updateFile(predicate)
{
    fs.writeFile('./predicatesAndResults.json', JSON.stringify(predicate), function writeJson(err)
    {
        if (err) return console.log(err);
    });
}