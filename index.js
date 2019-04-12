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
  var len = katzDeliLine.length;
  var output;
  //console.log(`length is: ${len}`)
  if(len===0){
    output = "The line is currently empty."
  }
  else{
    output = "The line is currently: ";
    var temp;
    for(let i = 0; i < len; i++){
      //console.log(katzDeliLine[i])
      //temp = `${i + 1}. ${katzDeliLine[i]}, `;
      //output.concat(temp);
      output.concat(i.toString(),". ",katzDeliLine[i],", ")
    }
  }
  return output
}