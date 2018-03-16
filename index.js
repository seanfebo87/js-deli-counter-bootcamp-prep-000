function takeANumber(katzDeliLine, n) {
  katzDeliLine.push(n);
  return ("Welcome, " + (n) + "." + " You are number " + katzDeliLine.length + " in line.")
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length <= 0) {
    return ("There is nobody waiting to be served!")
} 
  else {
    return ("Currently serving " + katzDeliLine.shift() + ".")
}
}

function currentLine(katzDeliLine) {
  if(katzDeliLine <= 0) {
    return ("The line is currently empty.")
  }
  else {
    return ("The line is currently: 1. " + katzDeli[0] + ", 2. " + katzDeli[1] + ", 3. " + katzDeli[2])
  }
}