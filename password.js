const args = process.argv;
args.splice(0,2);

const obfuscate = function(str){
  let base = str[0].split('');
  const changes = [['a','4'],['e','3'],['o','0'],['l','1']];
  let password = '';
  for(let char of base){
    for(let letter of changes){
      if( char === letter[0]){
        char = letter[1];
      }
    }
    password += char;
  }
  return password;
}

console.log(obfuscate(args));