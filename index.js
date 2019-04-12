var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  }
  else{
    var person = katzDeliLine[0];
    katzDeliLine.shift();
    var output = "Currently serving ";
    return output.concat(person).concat(".")
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length===0){
    return "The line is currently empty."
  }
  else{
    var output = "The line is currently ";
    for(i = 0; i < katzDeliLine.length; i++){
      output.concat(i+1).concat(". ").concat(katzDeliLine[i]).concat(", ");
    }
    return output
  }
}