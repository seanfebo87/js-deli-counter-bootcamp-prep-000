function takeANumber(katzDeliLine, n) {
  katzDeliLine.push(n);
  return ("Welcome, " + (n) + "." + " You are number " + katzDeliLine.length + " in line.")
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length <= 0) {
    return ("There is nobody waiting to be served!")
} 
  else {
    return ("Currently serving " + katzDeliLine[0] + ".")
}
katzDeliLine.shift
}