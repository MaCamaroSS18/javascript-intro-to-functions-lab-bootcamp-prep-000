function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase('HELLO'))
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var uppercase = 'Hello'
  var lowercase = 'hello'
  
  if (string === lowercase){
    return 'I can\'t hear you!'
  }else if (string === uppercase){
<<<<<<< HEAD
  }else if (string === string.toUpperCase()){
=======
>>>>>>> 16a21a8483a6cccff7e196cac7112a5e6f236498
    return 'YES INDEED!'
  }else if (string === 'I love you, Grandma.'){
    return 'I love you, too.'
  }
}